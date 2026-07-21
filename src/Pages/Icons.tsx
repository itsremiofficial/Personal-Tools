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
import { toast } from "sonner";
import { AnimatePresence, motion } from "motion/react";
import { debounce } from "lodash";
import { useClipboard } from "@/hooks/useClipboard";
import { cn } from "@/lib";
import { downloadIconSource } from "@/lib/iconUtils";
import { IconCloseCircle, IconTrashBin } from "@/components/icons/version01";
import { Header, IconCard, Button, LoadingSpinner } from "@/components";

const PAGE_SIZE = 100;

// Modern skeleton loader with consistent zinc theme
const LoadingSkeleton = ({
  viewMode = "grid",
}: {
  viewMode?: "grid" | "list" | "minimal";
}) => {
  const skeletonLayouts = {
    grid: (
      <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 p-4">
        {Array.from({ length: 24 }).map((_, i) => (
          <div
            key={i}
            className="flex-[1_1_232px] min-w-[232px] bg-muted/20 p-2 flex flex-col rounded-3xl overflow-hidden"
          >
            <div className="p-3 sm:p-4 flex items-center justify-center">
              <div className="min-h-24 w-full rounded-xl bg-muted animate-pulse" />
            </div>
            <div className="space-y-2 mt-auto">
              <div className="h-4 w-2/3 mx-auto rounded-lg bg-muted animate-pulse" />
              <div className="h-8 w-full rounded-full bg-muted animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    ),
    list: (
      <div className="space-y-2 p-4">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-lg bg-muted animate-pulse" />
            <div className="flex-1">
              <div className="h-3.5 w-1/3 rounded-lg bg-muted animate-pulse mb-2" />
              <div className="h-3 w-1/2 rounded-lg bg-muted animate-pulse" />
            </div>
            <div className="w-24 h-8 rounded-lg bg-muted animate-pulse" />
          </div>
        ))}
      </div>
    ),
    minimal: (
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12 gap-3 p-4">
        {Array.from({ length: 36 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square rounded-lg bg-muted dark:bg-neu-800 animate-pulse"
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
  <div className="flex flex-col items-center justify-center py-12 px-4 text-center bg-muted rounded-4xl">
    <div className="h-20 w-20 rounded-full flex items-center justify-center mb-4">
      <IconCloseCircle
        fill
        className={cn("w-20 h-20 text-muted-foreground ")}
        width={1}
      />
    </div>
    <h3 className="text-lg font-medium text-foreground mb-2">No icons found</h3>
    <p className="text-muted-foreground max-w-md mb-4">
      No results found for{"  "}
      <span className="font-medium text-foreground dark:bg-muted p-1 rounded-md">
        "{query}"
      </span>
    </p>
    <Button
      onClick={onClear}
      variant={"outline"}
      className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
    >
      Clear search <IconTrashBin className="w-4.5 h-4.5" />
    </Button>
  </div>
);

// Enhanced loading state
const LoadingFallback = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-background space-y-6">
    <div className="relative flex items-center justify-center">
      <div className="absolute inset-0 rounded-full border-2 border-border opacity-30" />
      <div className="animate-spin h-10 w-10 rounded-full border-2 border-border border-t-muted-foreground" />
    </div>
    <div className="text-center space-y-1.5">
      <h3 className="text-base font-medium text-foreground">Loading Icons</h3>
      <p className="text-sm text-muted-foreground">
        Preparing your icon library...
      </p>
    </div>
  </div>
);

const IconsList = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [globalStyle, setGlobalStyle] = useState<IconStyle>("line-solid");
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [viewMode] = useState<"grid" | "list" | "minimal">("grid");

  const { copyToClipboard } = useClipboard();

  const { filteredIcons, isLoading, isSearching, totalIcons } =
    useIconLoader(searchQuery);

  const containerRef = useRef<HTMLDivElement>(null);
  const mounted = useRef(true);

  // Fast copy handler for IconCard
  const handleCopy = useCallback(
    (name: string, style: IconStyle) => {
      const propsMap: Record<IconStyle, string> = {
        line: "",
        "line-solid": " duotone={false}",
        bulk: " fill={true}",
        bold: " duotone={false} fill={true}",
      };
      const componentCode = `<${name}${propsMap[style]}/>`;

      copyToClipboard(componentCode, name);
    },
    [copyToClipboard],
  );

  // Download handler
  const handleDownload = useCallback(async (name: string, version: string) => {
    const toastId = toast.loading(`Preparing ${name} for download`);
    try {
      await downloadIconSource(name, version);
      toast.success(`${name} downloaded successfully!`, { id: toastId });
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
          Math.min(prev + PAGE_SIZE, filteredIcons.length),
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
        if (mounted.current) setSearchQuery(query);
      }, 250),
    [],
  );

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  const handleSearch = useCallback(
    (query: string) => {
      setInputValue(query);
      debouncedSearch(query);
    },
    [debouncedSearch],
  );

  const clear = () => {
    setInputValue("");
    setSearchQuery("");
    handleSearch("");
  };

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
    <div className="min-h-screen w-full transition-colors duration-200">
      <Suspense fallback={<LoadingFallback />}>
        <div className="flex flex-col h-screen">
          {/* Header */}
          <header className="sticky top-0 z-10 px-2 pt-2">
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
            <div className="relative overflow-clip min-h-full">
              <div className="p-2 w-full mx-auto">
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
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted text-xs text-muted-foreground dark:text-white">
                      <LoadingSpinner className="w-4 h-4 text-muted-foreground dark:text-white" />
                      Loading more icons
                    </div>
                  </div>
                )}

                {/* End of results indicator */}
                {visibleCount >= filteredIcons.length &&
                  filteredIcons.length > 0 && (
                    <div className="py-6 text-center">
                      <div className="inline-block px-3 py-1.5 text-xs text-muted-foreground bg-muted rounded-full">
                        {filteredIcons.length} icons
                      </div>
                    </div>
                  )}
              </div>
            </div>
          </main>
        </div>
      </Suspense>
    </div>
  );
};

export default memo(IconsList);
