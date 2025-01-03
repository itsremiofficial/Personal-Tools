import React, { memo } from "react";
import { cn } from "@/hooks";
import { Button } from "./Button";
import { ToggleGroup, ToggleGroupItem } from "./ToggleGroup";
import * as iv01 from "@/components/icons/version01";
import type { IconComponentType, IconProps, IconStyle } from "@/types";
import { Tooltip } from "./Tooltip";

interface IconCardProps {
  name: string;
  Icon: React.ComponentType<IconProps>;
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
    <div className={cn("w-full h-full")}>
      <div
        className={cn(
          "flex flex-col p-2 rounded-2xl gap-2 h-full",
          "bg-icu-200/70 text-icu-800",
          "dark:bg-icu-1100/30 dark:text-icu-400"
        )}
      >
        <div className="flex">
          <Tooltip
            className={cn(
              "bg-icu-100 text-icu-100 border-icu-500/50",
              "dark:bg-icu-1100 dark:text-icu-300 dark:border-icu-800/50"
            )}
            trigger={
              <div className="grow">
                <Icon
                  className={cn(
                    "w-full h-20 rounded-2xl text-2xl transition-all duration-300 linear p-4"
                  )}
                  fill={currentStyle !== "line"}
                  duotone={currentStyle !== "bold"}
                  width={1.2}
                />
              </div>
            }
            content={
              <div className="max-w-60">
                <p className="text-sm font-medium mb-2 text-icu-900 dark:text-icu-300">
                  Keywords
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {(Icon as IconComponentType).keywords?.map(
                    (keyword, index) => (
                      <span
                        key={index}
                        className={cn(
                          "px-2 py-0.5 text-xs rounded-lg",
                          "bg-icu-200 text-icu-700",
                          "dark:bg-icu-1000 dark:text-icu-400"
                        )}
                      >
                        {keyword}
                      </span>
                    )
                  ) || (
                    <span className="text-xs text-icu-400">No keywords</span>
                  )}
                </div>
              </div>
            }
            side="right"
            sideOffset={-15}
          />
          <div
            className={cn("flex flex-col items-center justify-center gap-2")}
          >
            <Button
              onClick={() => onCopy()}
              size="sm"
              className={cn(
                "grow !p-2 rounded-lg",
                "!text-icu-600 hover:!text-icu-800",
                "!bg-icu-300 hover:!bg-icu-400/70",
                "dark:!text-icu-700 dark:hover:!text-icu-400",
                "dark:!bg-icu-1100/50 dark:hover:!bg-icu-1100",
                "transition-colors duration-200 cursor-pointer"
              )}
              title="Copy component"
            >
              <iv01.IconCopy className="size-5" width={2} />
            </Button>
            <Button
              onClick={() => onDownload(name, version)}
              size="sm"
              className={cn(
                "grow !p-2 rounded-lg",
                "!text-icu-600 hover:!text-icu-800",
                "!bg-icu-300 hover:!bg-icu-400/70",
                "dark:!text-icu-700 dark:hover:!text-icu-400",
                "dark:!bg-icu-1100/50 dark:hover:!bg-icu-1100",
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
          className={cn(
            "flex justify-between gap-2",
            "bg-icu-300 dark:text-icu-600"
          )}
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
