import {
  Suspense,
  useState,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  memo,
  useMemo,
} from "react";
import { useIconLoader } from "@/hooks/useIconLoader";
import { usePageHeader } from "@/hooks/usePageHeader";
import { toast } from "sonner";
import { AnimatePresence, motion } from "motion/react";
import { debounce } from "lodash";
import { useClipboard } from "@/hooks/useClipboard";
import { cn } from "@/lib";
import { EASE_OUT } from "@/lib/ease";
import { downloadIconSource } from "@/lib/iconUtils";
import {
  IconAirbudsCaseMinimalistic,
  IconCloseCircle,
  IconEmojiFunnyCircle,
  IconSettings,
  IconTrashBin,
} from "@/components/icons/version01";
import { IconCard, Button, LoadingSpinner } from "@/components";
import { SearchBar } from "@/components/common/SearchBar";
import { Tabs, TabsList, TabsTrigger } from "@/components/common/tabs";
import { Tooltip } from "@/components/common/Tooltip";
import { RangeSlider } from "@/components/common/RangeSlider";
import { useIsMobile } from "@/hooks/useMobile";

const PAGE_SIZE = 100;

// Modern skeleton loader with consistent zinc theme
const LoadingSkeleton = ({
  viewMode = "grid",
}: {
  viewMode?: "grid" | "list" | "minimal";
}) => {
  const skeletonLayouts = {
    grid: (
      <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
        {Array.from({ length: 24 }).map((_, i) => (
          <div
            key={i}
            className="flex-[1_1_160px] sm:flex-[1_1_200px] md:flex-[1_1_232px] min-w-[160px] sm:min-w-[200px] md:min-w-[232px] bg-muted/20 p-2 flex flex-col rounded-3xl overflow-hidden"
          >
            <div className="p-2 sm:p-3 md:p-4 flex items-center justify-center rounded-t-xl">
              <div className="min-h-16 sm:min-h-24 w-full rounded-xl bg-muted animate-pulse" />
            </div>
            <div className="space-y-2 grow flex flex-col">
              <div className="h-4 w-2/3 mx-auto rounded-lg bg-muted animate-pulse" />
              <div className="mt-auto flex items-center justify-between gap-1 p-1 border border-border rounded-full">
                <div className="flex-1 h-8 rounded-full bg-muted animate-pulse" />
                <div className="flex-1 h-8 rounded-full bg-muted animate-pulse" />
              </div>
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
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, ease: EASE_OUT }}
    className="flex flex-col items-center justify-center py-12 px-4 text-center bg-muted/60 rounded-4xl"
  >
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
  </motion.div>
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
  const [isSearchVisible, setIsSearchVisible] = useState(true);
  const [viewMode, setViewMode] = useState<"grid" | "list" | "minimal">("grid");
  const [iconSize, setIconSize] = useState(48);

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const settingsRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const { copyToClipboard } = useClipboard();
  const { setProps } = usePageHeader();

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

  const renderIcon = (style: IconStyle) => {
    switch (style) {
      case "bold":
        return (
          <IconAirbudsCaseMinimalistic
            fill
            duotone={false}
            className="size-6"
          />
        );
      case "bulk":
        return <IconAirbudsCaseMinimalistic fill className="size-6" />;
      case "line":
        return <IconAirbudsCaseMinimalistic className="size-6" />;
      default:
        return (
          <IconAirbudsCaseMinimalistic duotone={false} className="size-6" />
        );
    }
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        settingsRef.current &&
        !settingsRef.current.contains(e.target as Node)
      ) {
        setIsSettingsOpen(false);
      }
    };
    if (isSettingsOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSettingsOpen]);

  const styleItems: { value: IconStyle; label: string }[] = [
    { value: "line-solid", label: "Line" },
    { value: "line", label: "Duotone" },
    { value: "bulk", label: "Bulk" },
    { value: "bold", label: "Bold" },
  ];

  const SNAP_SIZES = [16, 20, 24, 28, 32, 36, 40, 44, 48, 64, 72];

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
    const handleScroll = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      if (
        target.scrollHeight - target.scrollTop - target.clientHeight < 400 &&
        visibleCount < filteredIcons.length
      ) {
        setVisibleCount((prev) =>
          Math.min(prev + PAGE_SIZE, filteredIcons.length),
        );
      }
    };
    let el = containerRef.current?.parentElement;
    while (el) {
      const overflow = window.getComputedStyle(el).overflow;
      if (overflow === "auto" || overflow === "scroll") break;
      el = el.parentElement;
    }
    if (el) {
      el.addEventListener("scroll", handleScroll, { passive: true });
    }
    return () => {
      if (el) el.removeEventListener("scroll", handleScroll);
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

  // Sync page header data to layout
  useLayoutEffect(() => {
    setProps({
      title: "Icons Library",
      headerIcon: (
        <IconEmojiFunnyCircle className="size-10 lg:size-14 shrink-0" fill />
      ),
      description: "Icon Library consists of 4 icon styles",
    });
  }, [setProps]);

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
            iconSize={iconSize}
            variant="default"
          />
        ))}
      </div>
    );
  };

  // Main layout
  return (
    <div className="w-full transition-colors duration-200">
      <Suspense fallback={<LoadingFallback />}>
        <div className="flex flex-col min-h-full">
          {/* Toolbar - sticky below header */}
          <div className="sticky top-0 z-10 bg-background/70 backdrop-blur-lg px-2 py-2 border-b border-border flex items-center gap-2 shrink-0">
            <div className="flex-1 min-w-0">
              <SearchBar
                searchQuery={inputValue}
                onSearch={handleSearch}
                isVisible={isSearchVisible}
                onToggleVisibility={setIsSearchVisible}
                isLoading={isSearching}
                resultCount={filteredIcons.length}
                variant={isMobile ? "minimal" : "embedded"}
              />
            </div>

            <span className="inline-flex h-5 lg:h-6 leading-none shrink-0 justify-center items-center rounded-full border border-border px-2 lg:px-2.5 text-[10px] lg:text-xs font-medium text-muted-foreground">
              {filteredIcons.length}/{totalIcons}
            </span>

            <div ref={settingsRef} className="relative flex items-center gap-2">
              <Button
                onClick={() => setIsSettingsOpen((prev) => !prev)}
                className={cn(
                  "rounded-full h-11",
                  isSettingsOpen
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                )}
                aria-label="Settings"
              >
                Config <IconSettings duotone={false} className="size-5" />
              </Button>

              <AnimatePresence>
                {isSettingsOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -4 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -4 }}
                    transition={{ duration: 0.12 }}
                    className="absolute right-0 top-full mt-2 z-50 w-64 origin-top-right rounded-2xl border border-border bg-background/70 backdrop-blur-lg shadow-lg"
                  >
                    <div className="p-4 px-3 space-y-4">
                      <div>
                        <p className="text-xs font-medium text-muted-foreground mb-2 px-1">
                          Icon Style
                        </p>
                        <Tabs
                          value={globalStyle}
                          onValueChange={(v) => setGlobalStyle(v as IconStyle)}
                          variant="pill"
                        >
                          <TabsList className="w-full rounded-2xl!">
                            {styleItems.map(({ value, label }) => (
                              <TabsTrigger
                                key={value}
                                value={value}
                                indicatorClassName="bg-foreground/15 rounded-xl!"
                                className="max-w-12 w-full py-2 aria-selected:text-foreground aria-selected:opacity-100 text-muted-foreground opacity-40 hover:opacity-100 transition-opacity duration-300"
                              >
                                <Tooltip
                                  side="top"
                                  sideOffset={4}
                                  content={label}
                                >
                                  <span className="flex items-center justify-center">
                                    {renderIcon(value as IconStyle)}
                                  </span>
                                </Tooltip>
                              </TabsTrigger>
                            ))}
                          </TabsList>
                        </Tabs>
                      </div>

                      <div>
                        <p className="text-xs font-medium text-muted-foreground mb-2 px-1">
                          Icon Size
                        </p>
                        <div className="flex items-center gap-3 px-1 relative">
                          <RangeSlider
                            value={iconSize}
                            onValueChange={setIconSize}
                            values={SNAP_SIZES}
                            min={20}
                            showTicks
                            aria-label="Icon size"
                          />
                          <span className="absolute right-4 text-xs tabular-nums text-muted-foreground min-w-[3ch] text-right select-none pointer-events-none">
                            {iconSize}px
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Icons content - scrolls behind sticky toolbar */}
          <div ref={containerRef} className="flex-1 p-2 w-full mx-auto">
            <div className="space-y-4">
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
        </div>
      </Suspense>
    </div>
  );
};

export default memo(IconsList);
