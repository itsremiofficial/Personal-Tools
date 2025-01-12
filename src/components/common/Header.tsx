import React, { useEffect } from "react";
import { SearchBar } from "./SearchBar";
import { Button } from "./Button";
import { IconAltArrowDown, IconBackpack } from "../icons/version01";
import { cn } from "@/hooks";
import { Dropdown } from "./Select";
import { LoadingSpinner } from "./LoadingSpinner";

interface HeaderProps {
  count: number;
  loadedCount?: number;
  searchProps: {
    searchQuery: string;
    onSearch: (query: string) => void;
    isVisible: boolean;
    onToggleVisibility: (visible: boolean) => void;
    isLoading?: boolean; // Add this prop
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
  const styleItems = [
    {
      label: "Line Style",
      onClick: () => onStyleChange?.("line"),
      icon: <IconBackpack />,
      isSelected: currentStyle === "line",
    },
    {
      label: "Bulk Style",
      onClick: () => onStyleChange?.("bulk"),
      icon: <IconBackpack fill />,
      isSelected: currentStyle === "bulk",
    },
    {
      label: "Bold Style",
      onClick: () => onStyleChange?.("bold"),
      icon: <IconBackpack fill duotone={false} />,
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
    <div className="panel-header flex w-full justify-between items-center gap-4">
      <div className="flex items-center gap-4 text-xl font-semibold dark:text-icu-500">
        Icons List ({loadedCount ?? count}/{count})
        {isLoading && <LoadingSpinner className="w-5 h-5 ml-2" />}
        <Dropdown
          trigger={
            <Button
              className={cn(
                "transition-colors focus:!ring-0 !py-2.5 !px-5 !font-normal",
                "bg-icu-200 hover:bg-icu-300 !text-icu-600 hover:!text-icu-500 active:bg-icu-300",
                "dark:hover:bg-icu-900 dark:active:bg-icu-800"
              )}
            >
              {styleItems.find((item) => item.isSelected)?.label}
              <IconAltArrowDown
                className="-me-1 ms-2 opacity-60 size-4"
                width={3}
              />
            </Button>
          }
          className="flex flex-col gap-1"
          items={styleItems}
          menuClasses={{
            content:
              "bg-icu-100 border-icu-400 dark:bg-icu-1000 dark:border-icu-900 rounded-2xl",
            item: "text-icu-700 hover:text-icu-800 hover:bg-icu-200 dark:text-icu-600 dark:hover:bg-icu-900 dark:hover:text-icu-400 cursor-pointer rounded-xl",
            shortcut: "text-icu-500",
          }}
          optionClasses={{
            selected:
              "bg-icu-300/70 !text-icu-900 dark:bg-icu-900 dark:!text-icu-400",
            destructive: "text-blue-400 hover:text-red-300 !cursor-pointer",
            disabled: "opacity-40",
          }}
        />
      </div>
      <SearchBar {...searchProps} isLoading={isLoading} />
    </div>
  );
};
