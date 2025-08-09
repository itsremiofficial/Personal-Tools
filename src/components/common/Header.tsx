import React, { useEffect, useState } from "react";
import { SearchBar } from "./SearchBar";
import { Button } from "./Button";
import {
  Icon4K,
  IconAirbudsCaseMinimalistic,
  IconBackpack,
} from "../icons/version01";
import { cn } from "@/hooks";

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
}

export const Header: React.FC<HeaderProps> = ({
  count,
  loadedCount,
  searchProps,
  onStyleChange,
  currentStyle = "line",
  isLoading,
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
      label: "Line",
      onClick: () => onStyleChange?.("line"),
      icon: <IconAirbudsCaseMinimalistic className="size-5" />,
      isSelected: currentStyle === "line",
    },
    {
      label: "Bulk",
      onClick: () => onStyleChange?.("bulk"),
      icon: <IconAirbudsCaseMinimalistic fill className="size-5" />,
      isSelected: currentStyle === "bulk",
    },
    {
      label: "Bold",
      onClick: () => onStyleChange?.("bold"),
      icon: (
        <IconAirbudsCaseMinimalistic fill duotone={false} className="size-5" />
      ),
      isSelected: currentStyle === "bold",
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

  return (
    <div className="flex flex-col sm:flex-row w-full justify-between items-center gap-3 ">
      <div className="flex items-center gap-3 w-full">
        <div className="flex items-center gap-2">
          <h1 className="text-base sm:text-lg font-medium text-icu-900 dark:text-icu-100">
            Icons Library
          </h1>
          <div className="inline-flex h-6 w-22 leading-none justify-center items-center rounded-full border border-icu-500 dark:border-icu-800 px-2.5 text-xs font-medium text-icu-800 dark:text-icu-400">
            {loadedCount ?? count}/{count}
          </div>
        </div>
        <div className="flex-1">
          <SearchBar {...searchProps} variant="embedded" />
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
        {/* View mode toggle */}
        <div className="hidden sm:flex items-center gap-1 rounded-lg border border-icu-400 dark:border-icu-800 dark:bg-icu-1100 p-1">
          {styleItems.map(({ label, onClick, icon, isSelected }) => (
            <Button
              key={label}
              size={isSelected ? "sm" : "icon"}
              variant={isSelected ? "subtle" : "ghost"}
              onClick={onClick}
              // isActive={isSelected}
              className={cn(
                "rounded-md h-8",
                "text-icu-600 hover:text-icu-1100",
                "dark:text-icu-700 dark:hover:text-icu-100",
                isSelected &&
                  "pr-4 leading-none text-icu-1000 dark:text-icu-100"
              )}
            >
              {icon}
              {isSelected && label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};
