import React, { useEffect, useRef, useState } from "react";
import { SearchBar } from "./SearchBar";
import {
  IconAirbudsCaseMinimalistic,
  IconEmojiFunnyCircle,
  IconSettings,
} from "../icons/version01";
import { Tabs, TabsList, TabsTrigger } from "./tabs";
import { Tooltip } from "./Tooltip";
import { ToggleGroup, ToggleGroupItem } from "./ToggleGroup";
import { RangeSlider } from "./RangeSlider";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib";
import { Card } from "./Card";
import { IconSetting3 } from "../icons/version02";
import { Button } from "./Button";

const styleItems: { value: IconStyle; label: string }[] = [
  { value: "line-solid", label: "Line" },
  { value: "line", label: "Duotone" },
  { value: "bulk", label: "Bulk" },
  { value: "bold", label: "Bold" },
];

const viewModes: { value: "grid" | "list" | "minimal"; label: string }[] = [
  { value: "grid", label: "Grid" },
  { value: "list", label: "List" },
  { value: "minimal", label: "Minimal" },
];

const SNAP_SIZES = [16, 20, 24, 28, 32, 36, 40, 44, 48, 64, 72];

interface HeaderProps {
  count: number;
  loadedCount?: number;
  searchProps: {
    searchQuery: string;
    onSearch: (query: string) => void;
    isVisible: boolean;
    onToggleVisibility: (visible: boolean) => void;
    isLoading?: boolean;
    resultCount?: number;
  };
  onStyleChange?: (style: IconStyle) => void;
  currentStyle?: IconStyle;
  isLoading: boolean;
  description?: string;
  iconSize?: number;
  onIconSizeChange?: (size: number) => void;
  viewMode?: "grid" | "list" | "minimal";
  onViewModeChange?: (mode: "grid" | "list" | "minimal") => void;
}

export const Header: React.FC<HeaderProps> = ({
  count,
  loadedCount,
  searchProps,
  onStyleChange,
  currentStyle = "line-solid",
  isLoading: _isLoading,
  iconSize = 48,
  onIconSizeChange,
  viewMode = "grid",
  onViewModeChange,
}) => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const settingsRef = useRef<HTMLDivElement>(null);

  const onStyleChangeRef = useRef(onStyleChange);
  onStyleChangeRef.current = onStyleChange;

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
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey) {
        const handler = onStyleChangeRef.current;
        switch (e.key) {
          case "1":
            handler?.("line-solid");
            break;
          case "2":
            handler?.("line");
            break;
          case "3":
            handler?.("bulk");
            break;
          case "4":
            handler?.("bold");
            break;
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

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

  return (
    <Card
      className={cn(
        "w-full px-2 rounded-3xl flex flex-col lg:flex-row justify-between items-center gap-2 border-none bg-transparent",
      )}
    >
      <div className="flex items-center gap-2">
        <IconEmojiFunnyCircle className="size-14 mx-2" fill />
        <div className="min-w-xs">
          <h2 className="text-xl font-medium flex items-center gap-2">
            Icons Library
            <span className="inline-flex h-6 w-22 leading-none justify-center items-center rounded-full border border-border px-2.5 text-xs font-medium text-muted-foreground">
              {loadedCount ?? count}/{count}
            </span>
          </h2>
          <p className="text-sm text-muted-foreground">
            Icon Library consists of 4 type of {loadedCount ?? count} icons
          </p>
        </div>
      </div>

      <div className="flex-1">
        <SearchBar {...searchProps} variant="embedded" />
      </div>

      <div
        ref={settingsRef}
        className="relative flex items-center gap-2 sm:gap-3 w-full sm:w-auto"
      >
        <Button
          onClick={() => setIsSettingsOpen((prev) => !prev)}
          size="icon"
          variant={"ghost"}
          className={cn(
            "rounded-xl",
            isSettingsOpen
              ? "bg-muted text-foreground"
              : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
          )}
          aria-label="Settings"
        >
          <IconSetting3 />
        </Button>

        <AnimatePresence>
          {isSettingsOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -4 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -4 }}
              transition={{ duration: 0.12 }}
              className="absolute right-0 top-full mt-2 z-50 w-72 origin-top-right rounded-2xl border border-border bg-background/70 backdrop-blur-lg shadow-lg"
            >
              <div className="p-4 px-3 space-y-4">
                {/* Icon Style */}
                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-2 px-1">
                    Icon Style
                  </p>
                  <Tabs
                    value={currentStyle}
                    onValueChange={(v) => {
                      onStyleChange?.(v as IconStyle);
                    }}
                    variant="pill"
                  >
                    <TabsList className="w-full rounded-2xl!">
                      {styleItems.map(({ value, label }) => {
                        return (
                          <TabsTrigger
                            key={value}
                            value={value}
                            indicatorClassName="bg-foreground/15 rounded-xl!"
                            className="py-2 aria-selected:text-foreground aria-selected:opacity-100 text-muted-foreground opacity-40 hover:opacity-100 transition-opacity duration-300"
                          >
                            <Tooltip side="top" sideOffset={4} content={label}>
                              <span className="flex items-center justify-center">
                                {renderIcon(value as IconStyle)}
                              </span>
                            </Tooltip>
                          </TabsTrigger>
                        );
                      })}
                    </TabsList>
                  </Tabs>
                </div>

                {/* Icon Size */}
                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-2 px-1">
                    Icon Size
                  </p>
                  <div className="flex items-center gap-3 px-1 relative">
                    <RangeSlider
                      value={iconSize}
                      onValueChange={onIconSizeChange}
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
    </Card>
  );
};
