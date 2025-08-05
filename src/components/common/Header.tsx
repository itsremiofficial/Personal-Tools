import React, { useEffect, useState } from "react";
import { SearchBar } from "./SearchBar";
import { Button } from "./Button";
import { IconAltArrowDown, IconBackpack } from "../icons/version01";
import { cn } from "@/hooks";
import { Dropdown } from "./Select";
import { LoadingSpinner } from "./LoadingSpinner";
import { Tooltip } from "./Tooltip";
import { motion, AnimatePresence } from "framer-motion";

interface HeaderProps {
  count: number;
  loadedCount?: number;
  searchProps: {
    searchQuery: string;
    onSearch: (query: string) => void;
    isVisible: boolean;
    onToggleVisibility: (visible: boolean) => void;
    isLoading?: boolean;
  };
  onStyleChange?: (style: IconStyle) => void;
  currentStyle?: IconStyle;
  isLoading: boolean;
  variant?: "default" | "compact";
  viewMode?: "grid" | "list" | "minimal";
  onViewModeChange?: (mode: "grid" | "list" | "minimal") => void;
}

export const Header: React.FC<HeaderProps> = ({
  count,
  loadedCount,
  searchProps,
  onStyleChange,
  currentStyle = "line",
  isLoading,
  variant = "default",
  viewMode = "grid",
  onViewModeChange,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  // Handle window resize to detect mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styleItems = [
    {
      label: "Line Style",
      onClick: () => onStyleChange?.("line"),
      icon: <IconBackpack className="text-gray-700 dark:text-gray-300" />,
      isSelected: currentStyle === "line",
      shortcut: "⌘1",
    },
    {
      label: "Bulk Style",
      onClick: () => onStyleChange?.("bulk"),
      icon: <IconBackpack fill className="text-gray-700 dark:text-gray-300" />,
      isSelected: currentStyle === "bulk",
      shortcut: "⌘2",
    },
    {
      label: "Bold Style",
      onClick: () => onStyleChange?.("bold"),
      icon: (
        <IconBackpack
          fill
          duotone={false}
          className="text-gray-700 dark:text-gray-300"
        />
      ),
      isSelected: currentStyle === "bold",
      shortcut: "⌘3",
    },
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey) {
        switch (e.key) {
          case "1":
            onStyleChange?.("line");
            break;
          case "2":
            onStyleChange?.("bulk");
            break;
          case "3":
            onStyleChange?.("bold");
            break;
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onStyleChange]);

  // Default header
  if (variant === "default") {
    return (
      <div className="flex flex-col sm:flex-row w-full justify-between items-center gap-3">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="flex items-center gap-2">
            <h1 className="text-base sm:text-lg font-medium text-gray-900 dark:text-gray-50">
              Icons Library
            </h1>
            <div className="inline-flex h-6 items-center rounded-full border border-gray-200 dark:border-gray-800 px-2.5 text-xs font-medium text-gray-600 dark:text-gray-400">
              {loadedCount ?? count}/{count}
            </div>
            {isLoading && (
              <LoadingSpinner className="w-4 h-4 text-gray-400 dark:text-gray-500" />
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
          {/* View mode toggle */}
          {onViewModeChange && (
            <div className="hidden sm:flex rounded-lg border border-gray-200 dark:border-gray-800 p-1 mr-1">
              <Tooltip
                trigger={
                  <Button
                    size="icon-sm"
                    variant="ghost"
                    isActive={viewMode === "grid"}
                    onClick={() => onViewModeChange("grid")}
                    className="rounded-md"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                      />
                    </svg>
                  </Button>
                }
                content="Grid View"
                side="bottom"
              />
              <Tooltip
                trigger={
                  <Button
                    size="icon-sm"
                    variant="ghost"
                    isActive={viewMode === "list"}
                    onClick={() => onViewModeChange("list")}
                    className="rounded-md"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </Button>
                }
                content="List View"
                side="bottom"
              />
              <Tooltip
                trigger={
                  <Button
                    size="icon-sm"
                    variant="ghost"
                    isActive={viewMode === "minimal"}
                    onClick={() => onViewModeChange("minimal")}
                    className="rounded-md"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 10h18m-18 4h18m-18-8h18M3 6h18M3 18h18M3 14h18"
                      />
                    </svg>
                  </Button>
                }
                content="Minimal View"
                side="bottom"
              />
            </div>
          )}

          <Dropdown
            trigger={
              <Button
                variant="outline"
                size="sm"
                className="h-9 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 gap-2"
              >
                {styleItems.find((item) => item.isSelected)?.icon}
                <span className="text-sm hidden sm:inline">
                  {styleItems.find((item) => item.isSelected)?.label}
                </span>
                <IconAltArrowDown className="h-3.5 w-3.5 text-gray-400" />
              </Button>
            }
            className="w-auto"
            items={styleItems}
            menuClasses={{
              content:
                "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-md z-50",
              item: "flex items-center text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg p-2",
              shortcut: "ml-auto text-xs text-gray-500 dark:text-gray-500",
            }}
            optionClasses={{
              selected:
                "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100",
              destructive: "text-red-600 dark:text-red-400",
              disabled: "opacity-50 cursor-not-allowed",
            }}
          />
          <div className="flex-1 sm:w-64 max-w-sm">
            <SearchBar {...searchProps} variant="default" />
          </div>
        </div>
      </div>
    );
  }

  // Compact header
  return (
    <div className="flex flex-col w-full gap-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <h1 className="text-sm font-medium text-gray-900 dark:text-gray-50">
            Icons
          </h1>
          <div className="inline-flex h-5 items-center rounded-full border border-gray-200 dark:border-gray-800 px-2 text-xs text-gray-600 dark:text-gray-400">
            {loadedCount ?? count}/{count}
          </div>
        </div>

        <div className="flex items-center gap-2">
          {onViewModeChange && (
            <div className="flex rounded-md border border-gray-200 dark:border-gray-800 p-0.5 mr-1">
              <Button
                size="icon-sm"
                variant="ghost"
                isActive={viewMode === "grid"}
                onClick={() => onViewModeChange("grid")}
                className="h-6 w-6 rounded"
              >
                <svg
                  className="h-3 w-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
              </Button>
              <Button
                size="icon-sm"
                variant="ghost"
                isActive={viewMode === "minimal"}
                onClick={() => onViewModeChange("minimal")}
                className="h-6 w-6 rounded"
              >
                <svg
                  className="h-3 w-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 10h18m-18 4h18m-18-8h18M3 6h18M3 18h18M3 14h18"
                  />
                </svg>
              </Button>
            </div>
          )}

          <Dropdown
            trigger={
              <Button variant="subtle" size="sm" className="h-7 py-0 text-xs">
                {currentStyle}
                <IconAltArrowDown className="h-3 w-3 ml-1 text-gray-400" />
              </Button>
            }
            items={styleItems}
            menuClasses={{
              content:
                "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-md z-50",
              item: "text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded p-1.5",
              shortcut: "ml-auto text-xs text-gray-500 dark:text-gray-500",
            }}
          />
        </div>
      </div>

      <div className="flex w-full">
        <SearchBar {...searchProps} variant="minimal" className="flex-1" />
      </div>
    </div>
  );
};
