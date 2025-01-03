import { cn } from "@/hooks";
import React, { useState, useMemo, useCallback, useEffect } from "react";
import * as iv01 from "@/components/icon/version01";
import * as iv02 from "@/components/icon/version02";
import { Header } from "@/components/common/Header";
import { useVirtualizer } from "@tanstack/react-virtual";
import type { IconStyle, IconMetadata } from "@/types";
import { VIRTUALIZATION_CONFIG } from "@/constants/virtualization";
import { VirtualizedIconGrid } from "@/components/common/VirtualizedIconGrid";

const IconsList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [columns, setColumns] = useState(1);
  const [iconStyles, setIconStyles] = useState<Record<string, IconStyle>>({});
  const [globalStyle, setGlobalStyle] = useState<IconStyle>("line");

  const parentRef = React.useRef<HTMLDivElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Fix visibleRange type
  const [visibleRange, setVisibleRange] = useState<{
    start: number;
    end: number;
  }>({
    start: 0,
    end: VIRTUALIZATION_CONFIG.CHUNK_SIZE,
  });
  const [isLoadingChunk, setIsLoadingChunk] = useState(false);

  // Memoized data
  const iconMetadata = useMemo(
    () =>
      [
        ...Object.entries(iv01).map(([name, Icon]) => ({
          name,
          Icon,
          keywords: (Icon as any).keywords || [],
          version: "v1", // Ensure version is included
        })),
        ...Object.entries(iv02).map(([name, Icon]) => ({
          name,
          Icon,
          keywords: (Icon as any).keywords || [],
          version: "v2", // Ensure version is included
        })),
      ] as IconMetadata[],
    []
  );

  const filteredIcons = useMemo(() => {
    const searchTerms = searchQuery.toLowerCase().split(" ").filter(Boolean);
    if (!searchTerms.length) return iconMetadata;
    return iconMetadata.filter(({ name, keywords }) =>
      searchTerms.every(
        (term) =>
          name.toLowerCase().includes(term) ||
          keywords.some((keyword) => keyword.toLowerCase().includes(term))
      )
    );
  }, [searchQuery, iconMetadata]);

  // Column calculation
  const updateColumns = useCallback(() => {
    if (containerRef.current) {
      const width = containerRef.current.offsetWidth;
      const newColumns = Math.floor(
        (width + VIRTUALIZATION_CONFIG.GAP) /
          (VIRTUALIZATION_CONFIG.MIN_COLUMN_WIDTH + VIRTUALIZATION_CONFIG.GAP)
      );
      setColumns(Math.max(1, newColumns));
    }
  }, []);

  useEffect(() => {
    const observer = new ResizeObserver(updateColumns);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [updateColumns]);

  // Virtualization
  const virtualizer = useVirtualizer({
    count: Math.ceil(filteredIcons.length / columns),
    getScrollElement: useCallback(() => parentRef.current, []),
    estimateSize: useCallback(() => VIRTUALIZATION_CONFIG.ROW_HEIGHT, []),
    overscan: VIRTUALIZATION_CONFIG.OVERSCAN,
    initialMeasurementsCache: [],
  });

  // Force re-measure on column or data changes
  useEffect(() => {
    virtualizer.measure();
  }, [columns, filteredIcons.length, virtualizer]);

  // Add chunked loading effect
  useEffect(() => {
    if (isLoadingChunk) return;

    const loadNextChunk = async () => {
      setIsLoadingChunk(true);
      await new Promise((resolve) => setTimeout(resolve, 32)); // Debounce loading
      virtualizer.measure();
      setIsLoadingChunk(false);
    };

    if (
      visibleRange.end >=
      filteredIcons.length * VIRTUALIZATION_CONFIG.SCROLL_THRESHOLD
    ) {
      loadNextChunk();
    }
  }, [visibleRange, filteredIcons.length, virtualizer, isLoadingChunk]);

  useEffect(() => {
    const handleResize = () => {
      virtualizer.measure();
      updateColumns();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [virtualizer, updateColumns]);

  useEffect(() => {
    virtualizer.measure();
  }, [filteredIcons, virtualizer]);

  useEffect(() => {
    if (!parentRef.current) return;

    const handleScroll = () => {
      const element = parentRef.current;
      if (!element) return;

      const { scrollTop, scrollHeight, clientHeight } = element;
      const scrolledToBottom = scrollHeight - scrollTop <= clientHeight * 1.5;

      if (scrolledToBottom) {
        virtualizer.measure();
      }
    };

    parentRef.current.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    return () => parentRef.current?.removeEventListener("scroll", handleScroll);
  }, [virtualizer, filteredIcons.length]);

  // Update iconStyles when globalStyle changes
  useEffect(() => {
    if (globalStyle) {
      // Update all icons to use the global style
      const newStyles = iconMetadata.reduce((acc, { name }) => {
        acc[name] = globalStyle;
        return acc;
      }, {} as Record<string, IconStyle>);
      setIconStyles(newStyles);
    }
  }, [globalStyle, iconMetadata]);

  return (
    <div className="relative flex flex-col justify-center gap-6 p-2 h-full">
      <div
        className={cn(
          "p-6 border rounded-3xl flex flex-col gap-8 h-full",
          "border-icu-300 bg-icu-100",
          "dark:border-icu-800/70 dark:bg-icu-1000/40"
        )}
      >
        <Header
          count={filteredIcons.length}
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
          iconStyles={iconStyles}
          setIconStyles={setIconStyles}
        />
      </div>
    </div>
  );
};

export default IconsList;
