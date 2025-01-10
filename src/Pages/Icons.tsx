import { Suspense, useState, useCallback, useEffect, useRef } from "react";
import { useIconLoader } from "@/hooks/useIconLoader";
import { useIconFiltering } from "@/hooks/useIconFiltering";
import { Header } from "@/components/common/Header";
import { useVirtualizer } from "@tanstack/react-virtual";
import type { IconStyle } from "@/types";
import { VIRTUALIZATION_CONFIG } from "@/constants/virtualization";
import { VirtualizedIconGrid } from "@/components/common/VirtualizedIconGrid";
import { toast } from "sonner";
import { debounce } from "lodash";

interface ScrollState {
  loadingLock: boolean;
  lastScrollTop: number;
  scrollTimeout: NodeJS.Timeout | null;
}

const IconsList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [columns, setColumns] = useState(1);
  const [globalStyle, setGlobalStyle] = useState<IconStyle>("line");
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [_iconStyles, setIconStyles] = useState<Record<string, IconStyle>>({});
  const [firstLoadedIndex, setFirstLoadedIndex] = useState(0);

  const { loadedIcons, isLoading, loadIconChunk, preloadRange, totalIcons } =
    useIconLoader();
  const filteredIcons = useIconFiltering(loadedIcons, searchQuery);

  const parentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollState = useRef<ScrollState>({
    loadingLock: false,
    lastScrollTop: 0,
    scrollTimeout: null,
  });

  useEffect(() => {
    loadIconChunk(0, VIRTUALIZATION_CONFIG.INITIAL_CHUNK_SIZE);
    setFirstLoadedIndex(0);
  }, [loadIconChunk]);

  const updateColumns = useCallback(() => {
    if (containerRef.current) {
      const width = containerRef.current.offsetWidth;
      const newColumns = Math.max(
        1,
        Math.floor(
          (width + VIRTUALIZATION_CONFIG.GAP) /
            (VIRTUALIZATION_CONFIG.MIN_COLUMN_WIDTH + VIRTUALIZATION_CONFIG.GAP)
        )
      );
      setColumns(newColumns);
    }
  }, []);

  useEffect(() => {
    const observer = new ResizeObserver(updateColumns);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [updateColumns]);

  const virtualizer = useVirtualizer({
    count: Math.ceil(filteredIcons.length / columns),
    getScrollElement: () => parentRef.current,
    estimateSize: () => VIRTUALIZATION_CONFIG.ROW_HEIGHT,
    overscan: VIRTUALIZATION_CONFIG.OVERSCAN,
  });

  const handleScroll = useCallback(async () => {
    const currentScrollState = scrollState.current;
    if (!parentRef.current || currentScrollState.loadingLock) return;

    const parent = parentRef.current;
    const { scrollTop, scrollHeight, clientHeight } = parent;
    const isScrollingUp = scrollTop < currentScrollState.lastScrollTop;

    currentScrollState.loadingLock = true;
    currentScrollState.lastScrollTop = scrollTop;

    try {
      if (
        isScrollingUp &&
        scrollTop < VIRTUALIZATION_CONFIG.PREFETCH_THRESHOLD
      ) {
        const chunkSize = VIRTUALIZATION_CONFIG.CHUNK_SIZE * columns;
        const prevStart = Math.max(0, firstLoadedIndex - chunkSize);
        const oldScrollHeight = parent.scrollHeight;

        await Promise.all([
          loadIconChunk(prevStart, firstLoadedIndex, true),
          preloadRange(Math.max(0, prevStart - chunkSize), prevStart),
        ]);

        requestAnimationFrame(() => {
          const heightDiff = parent.scrollHeight - oldScrollHeight;
          if (heightDiff > 0) {
            parent.scrollTop = scrollTop + heightDiff;
            virtualizer.measure();
          }
        });

        setFirstLoadedIndex(prevStart);
      }

      const remainingHeight = scrollHeight - scrollTop - clientHeight;
      if (remainingHeight < VIRTUALIZATION_CONFIG.PREFETCH_THRESHOLD) {
        const nextStart = loadedIcons.length;
        const chunkSize = VIRTUALIZATION_CONFIG.CHUNK_SIZE * columns;

        await Promise.all([
          loadIconChunk(nextStart, nextStart + chunkSize),
          preloadRange(nextStart + chunkSize, nextStart + chunkSize * 2),
        ]);

        virtualizer.measure();
      }
    } finally {
      currentScrollState.loadingLock = false;
    }
  }, [
    columns,
    firstLoadedIndex,
    loadIconChunk,
    loadedIcons.length,
    preloadRange,
    virtualizer,
  ]);

  // Force measure on mount and column change
  useEffect(() => {
    virtualizer.measure();
  }, [virtualizer, columns]);

  // Optimize scroll listener
  useEffect(() => {
    const parent = parentRef.current;
    if (!parent) return;

    const debouncedScroll = debounce(handleScroll, 16, {
      leading: true,
      trailing: true,
      maxWait: 32,
    });

    parent.addEventListener("scroll", debouncedScroll, { passive: true });
    return () => {
      parent.removeEventListener("scroll", debouncedScroll);
      debouncedScroll.cancel();
    };
  }, [handleScroll]);

  // Cleanup
  useEffect(() => {
    const currentState = scrollState.current;
    return () => {
      if (currentState.scrollTimeout) {
        clearTimeout(currentState.scrollTimeout);
      }
    };
  }, []);

  const handleStyleChange = useCallback((name: string, style: IconStyle) => {
    setIconStyles((prev) => ({ ...prev, [name]: style }));
  }, []);

  const handleDownload = useCallback(async (name: string, version: string) => {
    try {
      const cleanIconName = name.replace("Icon", "");
      const baseUrl = import.meta.env.BASE_URL.endsWith("/")
        ? import.meta.env.BASE_URL
        : `${import.meta.env.BASE_URL}/`;
      const formattedVersion = version.replace(
        /^v(\d+)$/,
        (_, num) => `version${num.padStart(2, "0")}`
      );
      const iconUrl = `${baseUrl}icons/${formattedVersion}/${cleanIconName}.tsx`;

      const response = await fetch(iconUrl);
      if (!response.ok) {
        throw new Error(`Failed to download: ${response.statusText}`);
      }

      const content = await response.text();
      const blob = new Blob([content], { type: "text/typescript" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${cleanIconName}.tsx`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      toast.success(`${name} downloaded!`);
    } catch (err) {
      console.error("Download error:", err);
      toast.error("Failed to download icon");
    }
  }, []);

  return (
    <div className="relative flex flex-col justify-center gap-6 p-2 h-full">
      <Suspense fallback={<div>Loading icons...</div>}>
        <div
          className="
            p-6 border rounded-3xl flex flex-col gap-8 h-full
            border-icu-300 bg-icu-100
            dark:border-icu-800/70 dark:bg-icu-1000/40
          "
        >
          <Header
            count={totalIcons}
            loadedCount={filteredIcons.length}
            searchProps={{
              searchQuery,
              onSearch: setSearchQuery,
              isVisible: isSearchVisible,
              onToggleVisibility: setIsSearchVisible,
            }}
            onStyleChange={setGlobalStyle}
            currentStyle={globalStyle}
          />
          <VirtualizedIconGrid
            parentRef={parentRef}
            containerRef={containerRef}
            virtualizer={virtualizer}
            filteredIcons={filteredIcons}
            columns={columns}
            isLoading={isLoading}
            onScroll={handleScroll}
            globalStyle={globalStyle}
            onStyleChange={handleStyleChange}
            onDownload={handleDownload}
          />
        </div>
      </Suspense>
    </div>
  );
};

export default IconsList;
