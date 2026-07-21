import React, { useEffect, useState } from "react";
import { SearchBar } from "./SearchBar";
import { IconAirbudsCaseMinimalistic } from "../icons/version01";
import { Tabs, TabsList, TabsTrigger } from "./tabs";

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
        <div className="hidden sm:block">
          <Tabs
            value={currentStyle}
            onValueChange={(v) => onStyleChange?.(v as IconStyle)}
            variant="pill"
          >
            <TabsList className="border border-border">
              {styleItems.map(({ label, icon }) => (
                <TabsTrigger
                  key={label.toLowerCase()}
                  value={label.toLowerCase()}
                  className="gap-1.5 py-2 pl-3 pr-4"
                >
                  {icon}
                  <span className="text-sm">{label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </div>
    </div>
  );
};
