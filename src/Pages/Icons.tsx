import {
  Suspense,
  useState,
  useCallback,
  useEffect,
  useRef,
  memo,
  useMemo,
} from "react";
import { useIconLoader } from "@/hooks/useIconLoader";
import { Header } from "@/components/common/Header";
import { toast } from "sonner";
import { IconCard } from "@/components/common/IconCard";
import { AnimatePresence, motion } from "framer-motion";
import { debounce } from "lodash";
import { useClipboard } from "@/hooks/useClipboard";
import { cn } from "@/hooks";
import { Button } from "@/components/common/Button";
import { IconCloseCircle, IconTrashBin } from "@/components/icons/version01";
import Spinner from "@/components/common/Spinner";
import { LoadingSpinner } from "@/components/common/LoadingSpinner";

const PAGE_SIZE = 100;

// Modern skeleton loader with consistent zinc theme
const LoadingSkeleton = ({
  viewMode = "grid",
}: {
  viewMode?: "grid" | "list" | "minimal";
}) => {
  const skeletonLayouts = {
    grid: (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-3 sm:gap-4 p-4">
        {Array.from({ length: 24 }).map((_, i) => (
          <div key={i} className="flex flex-col space-y-2">
            <div className="aspect-square rounded-xl bg-icu-100 dark:bg-icu-800 animate-pulse" />
            <div className="h-3.5 w-1/2 rounded-lg bg-icu-100 dark:bg-icu-800 animate-pulse" />
            <div className="h-6 w-full rounded-lg bg-icu-100 dark:bg-icu-800 animate-pulse" />
          </div>
        ))}
      </div>
    ),
    list: (
      <div className="space-y-2 p-4">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-lg bg-icu-100 dark:bg-icu-800 animate-pulse" />
            <div className="flex-1">
              <div className="h-3.5 w-1/3 rounded-lg bg-icu-100 dark:bg-icu-800 animate-pulse mb-2" />
              <div className="h-3 w-1/2 rounded-lg bg-icu-100 dark:bg-icu-800 animate-pulse" />
            </div>
            <div className="w-24 h-8 rounded-lg bg-icu-100 dark:bg-icu-800 animate-pulse" />
          </div>
        ))}
      </div>
    ),
    minimal: (
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12 gap-3 p-4">
        {Array.from({ length: 36 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square rounded-lg bg-icu-100 dark:bg-neu-800 animate-pulse"
          />
        ))}
      </div>
    ),
  };

  return skeletonLayouts[viewMode] || skeletonLayouts.grid;
};

// Empty state component
const EmptyState = ({
  query,
  onClear,
}: {
  query: string;
  onClear: () => void;
}) => (
  <div className="flex flex-col items-center justify-center py-12 px-4 text-center bg-icu-100 dark:bg-icu-1000 rounded-4xl">
    <div className="h-20 w-20 rounded-full flex items-center justify-center mb-4">
      <IconCloseCircle
        fill
        className={cn("w-20 h-20 text-icu-1000 dark:text-icu-400 ")}
        width={1}
      />
    </div>
    <h3 className="text-lg font-medium text-icu-900 dark:text-icu-100 mb-2">
      No icons found
    </h3>
    <p className="text-icu-600 dark:text-icu-400 max-w-md mb-4">
      No results found for{"  "}
      <span className="font-medium text-icu-900 dark:text-icu-200 dark:bg-icu-900 p-1 rounded-md">
        "{query}"
      </span>
    </p>
    <Button
      onClick={onClear}
      variant={"outline"}
      className="inline-flex items-center text-sm text-icu-600 dark:text-icu-400 hover:text-icu-900 dark:hover:text-icu-200"
    >
      Clear search <IconTrashBin className="w-4.5 h-4.5" />
    </Button>
  </div>
);

// Enhanced loading state
const LoadingFallback = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-icu-50 dark:bg-icu-950 space-y-6">
    <div className="relative flex items-center justify-center">
      <div className="absolute inset-0 rounded-full border-2 border-icu-200 dark:border-icu-800 opacity-30" />
      <div className="animate-spin h-10 w-10 rounded-full border-2 border-icu-300 dark:border-icu-700 border-t-icu-500 dark:border-t-icu-400" />
    </div>
    <div className="text-center space-y-1.5">
      <h3 className="text-base font-medium text-icu-900 dark:text-icu-100">
        Loading Icons
      </h3>
      <p className="text-sm text-icu-500 dark:text-icu-400">
        Preparing your icon library...
      </p>
    </div>
  </div>
);

const IconsList = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [globalStyle, setGlobalStyle] = useState<IconStyle>("line");
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list" | "minimal">("grid");

  const { copyToClipboard, copied } = useClipboard();

  const { filteredIcons, isLoading, isSearching, reloadIcons, totalIcons } =
    useIconLoader(searchQuery);

  const containerRef = useRef<HTMLDivElement>(null);

  // Fast copy handler for IconCard
  const handleCopy = useCallback((name: string, style: IconStyle) => {
    const componentCode = `<${name}${style === "line" ? "" : ` ${style === "bulk" ? "fill={true}" : "duotone={false} fill={true}"}`}/>`;

    copyToClipboard(componentCode, name);
  }, []);

  // Download handler
  const handleDownload = useCallback(async (name: string, version: string) => {
    const toastId = toast.loading(`Preparing ${name} for download`, {
      // description: "This may take a moment",
    });
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
      if (!response.ok)
        throw new Error(`Download failed: ${response.statusText}`);
      const content = await response.text();
      const blob = new Blob([content], { type: "text/typescript" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${cleanIconName}.tsx`;
      a.style.display = "none";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      toast.success(`${name} downloaded successfully!`, {
        id: toastId,
        // description: "File saved to your downloads folder",
      });
    } catch (err) {
      toast.error("Download failed", {
        id: toastId,
        description: "Please check your connection and try again",
      });
    }
  }, []);

  // Infinite scroll: load more icons when near bottom
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
      if (
        scrollHeight - scrollTop - clientHeight < 400 &&
        visibleCount < filteredIcons.length
      ) {
        setVisibleCount((prev) =>
          Math.min(prev + PAGE_SIZE, filteredIcons.length)
        );
      }
    };
    const ref = containerRef.current;
    if (ref) ref.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      if (ref) ref.removeEventListener("scroll", handleScroll);
    };
  }, [filteredIcons.length, visibleCount]);

  // Reset visible count on search
  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [searchQuery, filteredIcons.length]);

  // Debounced search
  const debouncedSearch = useMemo(
    () =>
      debounce((query: string) => {
        setSearchQuery(query);
      }, 250),
    []
  );

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  const handleSearch = useCallback(
    (query: string) => {
      setInputValue(query);
      debouncedSearch(query);
    },
    [debouncedSearch]
  );

  const clear = () => {
    setInputValue("");
    setSearchQuery("");
    handleSearch("");
  };
  const handleRetry = useCallback(() => {
    setHasError(false);
    reloadIcons();
  }, [reloadIcons]);

  // Render IconGrid based on current view mode
  const renderIconGrid = () => {
    if (filteredIcons.length === 0) {
      return searchQuery ? (
        <EmptyState query={searchQuery} onClear={clear} />
      ) : null;
    }

    const iconItems = filteredIcons.slice(0, visibleCount);

    return (
      <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
        {iconItems.map((icon) => (
          <IconCard
            key={`${icon.name}-${icon.version}`}
            {...icon}
            currentStyle={globalStyle}
            onStyleChange={setGlobalStyle}
            onCopy={(style) => handleCopy(icon.name, style)}
            onDownload={() => handleDownload(icon.name, icon.version)}
            variant="default"
          />
        ))}
      </div>
    );
  };

  // Main layout
  return (
    <div className="min-h-screen w-full bg-icu-200 dark:bg-icu-900 transition-colors duration-200">
      <Suspense fallback={<LoadingFallback />}>
        <div className="flex flex-col h-screen">
          {/* Header */}
          <header className="sticky top-0 z-10 px-3 sm:px-4">
            <div className="px-4 py-3 w-full mx-auto border mt-2 rounded-2xl border-icu-300 dark:border-icu-800/80 bg-icu-100 dark:bg-icu-1100/50">
              <Header
                count={totalIcons}
                loadedCount={filteredIcons.length}
                isLoading={isLoading}
                searchProps={{
                  searchQuery: inputValue,
                  onSearch: handleSearch,
                  isVisible: isSearchVisible,
                  onToggleVisibility: setIsSearchVisible,
                  isLoading: isSearching,
                }}
                onStyleChange={setGlobalStyle}
                currentStyle={globalStyle}
              />
            </div>
          </header>

          {/* Content area */}
          <main
            ref={containerRef}
            className="flex-1 overflow-auto relative"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "rgb(156 163 175) transparent",
            }}
          >
            <div className="px-3 sm:px-4 py-4 w-full mx-auto">
              {isLoading && filteredIcons.length === 0 ? (
                <LoadingSkeleton viewMode={viewMode} />
              ) : (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={viewMode}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {renderIconGrid()}
                  </motion.div>
                </AnimatePresence>
              )}

              {/* Loading indicator */}
              {visibleCount < filteredIcons.length && (
                <div className="flex justify-center items-center py-6">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-icu-100 dark:bg-icu-1100 text-xs text-icu-600 dark:text-white">
                    <LoadingSpinner className="w-4 h-4 text-icu-600 dark:text-white" />
                    Loading more icons
                  </div>
                </div>
              )}

              {/* End of results indicator */}
              {visibleCount >= filteredIcons.length &&
                filteredIcons.length > 0 && (
                  <div className="py-6 text-center">
                    <div className="inline-block px-3 py-1.5 text-xs text-icu-500 dark:text-icu-400 bg-icu-100 dark:bg-icu-800 rounded-full">
                      {filteredIcons.length} icons
                    </div>
                  </div>
                )}
            </div>
          </main>
        </div>
      </Suspense>
    </div>
  );
};

export default memo(IconsList);
