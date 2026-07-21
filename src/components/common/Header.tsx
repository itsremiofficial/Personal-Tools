import React, { useEffect, useRef } from "react";
import { SearchBar } from "./SearchBar";
import {
  IconAirbudsCaseMinimalistic,
  IconEmojiFunnyCircle,
} from "../icons/version01";
import { Tabs, TabsList, TabsTrigger } from "./tabs";
import { cn } from "@/lib";
import { Card } from "./Card";

const styleItems: { value: IconStyle; label: string }[] = [
  { value: "line-solid", label: "Line" },
  { value: "line", label: "Duotone" },
  { value: "bulk", label: "Bulk" },
  { value: "bold", label: "Bold" },
];

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
  description?: string;
}

export const Header: React.FC<HeaderProps> = ({
  count,
  loadedCount,
  searchProps,
  onStyleChange,
  currentStyle = "line",
  isLoading: _isLoading,
}) => {
  const onStyleChangeRef = useRef(onStyleChange);
  onStyleChangeRef.current = onStyleChange;

  const renderIcon = (style: IconStyle) => {
    switch (style) {
      case "bold":
        return (
          <IconAirbudsCaseMinimalistic
            fill
            duotone={false}
            className="size-5"
          />
        );
      case "bulk":
        return <IconAirbudsCaseMinimalistic fill className="size-5" />;
      case "line":
        return <IconAirbudsCaseMinimalistic className="size-5" />;
      default:
        return (
          <IconAirbudsCaseMinimalistic duotone={false} className="size-5" />
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

  return (
    <Card
      className={cn(
        "w-full px-2 py-6 rounded-3xl flex flex-col lg:flex-row justify-between items-center gap-10 border-none bg-transparent",
      )}
    >
      <div className="flex items-center gap-2">
        <IconEmojiFunnyCircle className="size-14 mx-2" fill />
        <div>
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

      <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
        <Tabs
          value={currentStyle}
          onValueChange={(v) => onStyleChange?.(v as IconStyle)}
          variant="pill"
        >
          <TabsList className="border border-border">
            {styleItems.map(({ value, label }) => (
              <TabsTrigger
                key={value}
                value={value}
                className="gap-1.5 py-2 pl-3 pr-4"
              >
                {renderIcon(value as IconStyle)}
                <span className="text-sm">{label}</span>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
    </Card>
  );
};
