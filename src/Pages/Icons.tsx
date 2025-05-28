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
            <div className="aspect-square rounded-xl bg-gray-100 dark:bg-gray-800 animate-pulse" />
            <div className="h-3.5 w-1/2 rounded-lg bg-gray-100 dark:bg-gray-800 animate-pulse" />
            <div className="h-6 w-full rounded-lg bg-gray-100 dark:bg-gray-800 animate-pulse" />
          </div>
        ))}
      </div>
    ),
    list: (
      <div className="space-y-2 p-4">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800 animate-pulse" />
            <div className="flex-1">
              <div className="h-3.5 w-1/3 rounded-lg bg-gray-100 dark:bg-gray-800 animate-pulse mb-2" />
              <div className="h-3 w-1/2 rounded-lg bg-gray-100 dark:bg-gray-800 animate-pulse" />
            </div>
            <div className="w-24 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 animate-pulse" />
          </div>
        ))}
      </div>
    ),
    minimal: (
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12 gap-3 p-4">
        {Array.from({ length: 36 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square rounded-lg bg-gray-100 dark:bg-gray-800 animate-pulse"
          />
        ))}
      </div>
    ),
  };

  return skeletonLayouts[viewMode] || skeletonLayouts.grid;
};

// Empty state component
const EmptyState = ({ query }: { query: string }) => (
  <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
    <div className="h-12 w-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4">
      <svg
        className="h-6 w-6 text-gray-500 dark:text-gray-400"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    </div>
    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
      No icons found
    </h3>
    <p className="text-gray-600 dark:text-gray-400 max-w-md mb-4">
      No results for "
      <span className="font-medium text-gray-900 dark:text-gray-200">
        {query}
      </span>
      ". Try adjusting your search terms.
    </p>
    <button
      onClick={() => window.history.back()}
      className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
    >
      <svg
        className="mr-1 h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
      Clear search
    </button>
  </div>
);

// Enhanced loading state
const LoadingFallback = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-950 space-y-6">
    <div className="relative flex items-center justify-center">
      <div className="absolute inset-0 rounded-full border-2 border-gray-200 dark:border-gray-800 opacity-30" />
      <div className="animate-spin h-10 w-10 rounded-full border-2 border-gray-300 dark:border-gray-700 border-t-gray-500 dark:border-t-gray-400" />
    </div>
    <div className="text-center space-y-1.5">
      <h3 className="text-base font-medium text-gray-900 dark:text-gray-100">
        Loading Icons
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">
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

  const { filteredIcons, isLoading, isSearching, reloadIcons, totalIcons } =
    useIconLoader(searchQuery);

  const containerRef = useRef<HTMLDivElement>(null);

  // Fast copy handler for IconCard
  const handleCopy = useCallback((name: string, style: IconStyle) => {
    const componentCode = `<${name}${style === "line" ? "" : ` ${style === "bulk" ? "fill={true}" : "duotone={false} fill={true}"}`}/>`;
    navigator.clipboard
      .writeText(componentCode)
      .then(() => toast.success(`${name} copied!`))
      .catch(() => toast.error("Failed to copy"));
  }, []);

  // Download handler
  const handleDownload = useCallback(async (name: string, version: string) => {
    const toastId = toast.loading(`Preparing ${name} for download...`, {
      description: "This may take a moment",
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
        description: "File saved to your downloads folder",
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

  const handleRetry = useCallback(() => {
    setHasError(false);
    reloadIcons();
  }, [reloadIcons]);

  // Render IconGrid based on current view mode
  const renderIconGrid = () => {
    if (filteredIcons.length === 0) {
      return searchQuery ? <EmptyState query={searchQuery} /> : null;
    }

    const iconItems = filteredIcons.slice(0, visibleCount);

    switch (viewMode) {
      case "grid":
        return (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-2 sm:gap-3 md:gap-4">
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

      case "list":
        return (
          <div className="space-y-2">
            {iconItems.map((icon) => (
              <IconCard
                key={`list-${icon.name}-${icon.version}`}
                {...icon}
                currentStyle={globalStyle}
                onStyleChange={setGlobalStyle}
                onCopy={(style) => handleCopy(icon.name, style)}
                onDownload={() => handleDownload(icon.name, icon.version)}
                variant="compact"
              />
            ))}
          </div>
        );

      case "minimal":
        return (
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12 gap-2">
            {iconItems.map((icon) => (
              <IconCard
                key={`min-${icon.name}-${icon.version}`}
                {...icon}
                currentStyle={globalStyle}
                onStyleChange={setGlobalStyle}
                onCopy={(style) => handleCopy(icon.name, style)}
                onDownload={() => handleDownload(icon.name, icon.version)}
                variant="minimal"
              />
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  // Main layout
  return (
    <div className="min-h-screen w-full bg-gray-50 dark:bg-gray-950 transition-colors duration-200">
      <Suspense fallback={<LoadingFallback />}>
        <div className="flex flex-col h-screen">
          {/* Header */}
          <header className="sticky top-0 z-10 border-b border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm">
            <div className="px-4 py-3 max-w-[2000px] mx-auto">
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
                viewMode={viewMode}
                onViewModeChange={setViewMode}
                variant={viewMode === "minimal" ? "compact" : "default"}
              />
            </div>
          </header>

          {/* Content area */}
          <main
            ref={containerRef}
            className="flex-1 overflow-auto relative"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "rgb(156 163 175) transparent", // Updated to gray color
            }}
          >
            <div className="px-3 sm:px-4 py-4 max-w-[2000px] mx-auto">
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
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-xs text-gray-600 dark:text-gray-400">
                    <div className="h-1.5 w-1.5 rounded-full bg-gray-400 dark:bg-gray-500 animate-pulse" />
                    Loading more icons
                  </div>
                </div>
              )}

              {/* End of results indicator */}
              {visibleCount >= filteredIcons.length &&
                filteredIcons.length > 0 && (
                  <div className="py-6 text-center">
                    <div className="inline-block px-3 py-1.5 text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-full">
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
