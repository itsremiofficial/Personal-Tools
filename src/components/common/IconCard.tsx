import React, { memo } from "react";
import { cn } from "@/hooks";
import { Button } from "./Button";
import { ToggleGroup, ToggleGroupItem } from "./ToggleGroup";
import * as iv01 from "@/components/icon/version01";
import type { IconStyle } from "@/types";

interface IconCardProps {
  name: string;
  Icon: React.ComponentType<any>;
  currentStyle: IconStyle;
  onStyleChange: (style: IconStyle) => void;
  onCopy: () => void;
  onDownload: (name: string, version: string) => void;
  version: string; // Add version prop
}

export const IconCard = memo(
  ({
    name,
    Icon,
    currentStyle,
    onStyleChange,
    onCopy,
    onDownload,
    version, // Destructure version prop
  }: IconCardProps) => (
    <div
      className={cn("w-full h-full")}
      title={`Keywords: ${(Icon as any).keywords?.join(", ") || "No keywords"}`}
    >
      <div
        className={cn(
          "flex flex-col p-2 rounded-2xl gap-2 h-full",
          "bg-gray-200 text-icu-600",
          "dark:bg-icu-1100/30 dark:text-icu-600"
        )}
      >
        <div className="flex">
          <Icon
            className={cn(
              "grow w-full h-20 rounded-2xl text-2xl transition-all duration-300 linear p-4"
              // "bg-gray-200 text-icu-600",
              // "dark:bg-icu-800/30 dark:text-icu-600"
            )}
            fill={currentStyle !== "line"}
            duotone={currentStyle !== "bold"}
            width={1.2}
          />
          <div
            className={cn(
              "grow flex flex-col items-center justify-center gap-2"
            )}
          >
            <Button
              onClick={() => onCopy()}
              size="sm"
              className={cn(
                "grow !p-2 rounded-lg bg-white/90 hover:bg-white",
                "dark:!text-icu-700/70 dark:hover:!text-icu-500",
                "dark:!bg-icu-800/30 dark:hover:!bg-icu-800",
                "transition-colors duration-200 cursor-pointer"
              )}
              title="Copy component"
            >
              <iv01.IconCopy className="size-5" width={2} />
            </Button>
            <Button
              onClick={() => onDownload(name, version)} // Pass version to onDownload
              size="sm"
              className={cn(
                "grow !p-2 rounded-lg bg-white/90 hover:bg-white",
                "dark:!text-icu-600/70 dark:hover:!text-icu-400",
                "dark:!bg-icu-800/30 dark:hover:!bg-icu-800",
                "transition-colors duration-200 cursor-pointer"
              )}
              title="Download icon"
            >
              <iv01.IconDownloadMinimalistic className="size-5" width={2} />
            </Button>
          </div>
        </div>

        <ToggleGroup
          type="single"
          value={currentStyle}
          onValueChange={(value) => value && onStyleChange(value as IconStyle)}
          className="flex justify-between gap-2"
        >
          <ToggleGroupItem
            className="grow"
            value="line"
            aria-label="Line style"
          >
            Line
          </ToggleGroupItem>
          <ToggleGroupItem
            className="grow"
            value="bulk"
            aria-label="Bulk style"
          >
            Bulk
          </ToggleGroupItem>
          <ToggleGroupItem
            className="grow"
            value="bold"
            aria-label="Bold style"
          >
            Bold
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  )
);

IconCard.displayName = "IconCard";
