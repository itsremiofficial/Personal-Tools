import { memo, useState, useEffect } from "react";
import { cn } from "@/hooks";
import { Button } from "./Button";
import { ToggleGroup, ToggleGroupItem } from "./ToggleGroup";
import * as iv01 from "@/components/icons/version01";
import { Tooltip } from "./Tooltip";
import { motion } from "framer-motion";

// Utility function to format icon names
const formatIconName = (name: string): string => {
  // Remove "Icon" prefix if it exists
  const nameWithoutIcon = name.replace(/^Icon/, "");

  // Split on capital letters and join with spaces
  return nameWithoutIcon
    .replace(/([A-Z])/g, " $1") // Add space before capital letters
    .trim(); // Remove leading space
};

interface IconCardProps {
  name: string;
  Icon: IconComponent;
  currentStyle: IconStyle;
  onStyleChange: (style: IconStyle) => void;
  onCopy: (style: IconStyle) => void;
  onDownload: (name: string, version: string) => void;
  version: string;
  className?: string;
  variant?: "default" | "compact" | "minimal";
}

export const IconCard = memo(
  ({
    name,
    Icon,
    currentStyle,
    onStyleChange,
    onCopy,
    onDownload,
    version,
    className, 
  }: IconCardProps) => {
    // Local style state for this specific icon
    const [localStyle, setLocalStyle] = useState<IconStyle>(currentStyle);
    const [isHovered, setIsHovered] = useState(false);

    // Update local style when global style changes
    useEffect(() => {
      setLocalStyle(currentStyle);
    }, [currentStyle]);

    // Handle local style change
    const handleLocalStyleChange = (style: IconStyle) => {
      setLocalStyle(style);
    };

    return (
      <div
        className={cn(
          "flex flex-col h-full rounded-3xl flex-[1_1_0%] nth-last-of-type-[-n+5]:flex-[0_0_auto] min-w-52 border border-icu-300 dark:border-icu-800 transition-all duration-200 overflow-hidden",
          isHovered && "border-icu-400 dark:border-icu-700",
          className
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Icon Preview Area */}
        <div className="relative">
          <div className="p-3 sm:p-4 flex items-center justify-center bg-icu-100 dark:bg-icu-1100 rounded-t-xl">
            <Tooltip
              side="top"
              sideOffset={5}
              trigger={
                <div className="w-full h-full min-h-24 flex items-center justify-center">
                  <Icon
                    className="w-10 h-10 sm:w-12 sm:h-12 text-icu-900 dark:text-icu-100 transition-all duration-200 transform"
                    style={{
                      transform: isHovered ? "scale(1.1)" : "scale(1)",
                    }}
                    fill={localStyle !== "line"}
                    duotone={localStyle !== "bold"}
                    width={1.2}
                  />
                </div>
              }
              content={
                <div className="max-w-xs">
                  <p className="text-sm font-medium mb-2">
                    {formatIconName(name)}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {((Icon as IconComponent).keywords || []).map(
                      (keyword: string, index: number) => (
                        <span
                          key={index}
                          className="px-2 py-0.5 text-xs bg-icu-100 dark:bg-icu-800 text-icu-600 dark:text-icu-400 rounded-full"
                        >
                          {keyword}
                        </span>
                      )
                    )}
                    {(!Icon.keywords || Icon.keywords.length === 0) && (
                      <span className="text-xs text-icu-500">No keywords</span>
                    )}
                  </div>
                </div>
              }
            />
          </div>

          {/* Action buttons with improved hover effect */}
          <motion.div
            className="absolute top-3 right-3 flex flex-col gap-3"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 10 }}
            transition={{ duration: 0.2 }}
          >
            <button onClick={() => onCopy(localStyle)}>
              <iv01.IconCopy3 className="h-5 w-5 text-icu-600 dark:text-icu-400 cursor-pointer hover:text-icu-800 dark:hover:text-icu-200 transition-colors duration-200" />
            </button>
            <button onClick={() => onDownload(name, version)}>
              <iv01.IconDownloadMinimalistic className="h-5 w-5 text-icu-600 dark:text-icu-400 cursor-pointer hover:text-icu-800 dark:hover:text-icu-200 transition-colors duration-200" />
            </button>
          </motion.div>
        </div>

        {/* Info and style selector */}
        <div className="p-3 space-y-2 flex-grow flex flex-col bg-icu-400 dark:bg-icu-1000/70">
          <h3
            className="text-xs font-medium truncate text-icu-1100 dark:text-white tracking-wide"
            title={formatIconName(name)}
          >
            {formatIconName(name)}
          </h3>

          <div className="mt-auto pt-1">
            <ToggleGroup
              type="single"
              value={localStyle}
              onValueChange={(value: string) =>
                value && handleLocalStyleChange(value as IconStyle)
              }
              variant="default"
              size="sm"
              className="flex w-full rounded-lg overflow-hidden p-1 gap-1"
            >
              <ToggleGroupItem
                className="flex-1 text-xs leading-none"
                value="line"
                aria-label="Line style"
              >
                Line
              </ToggleGroupItem>
              <ToggleGroupItem
                className="flex-1 text-xs leading-none"
                value="bulk"
                aria-label="Bulk style"
              >
                Bulk
              </ToggleGroupItem>
              <ToggleGroupItem
                className="flex-1 text-xs leading-none"
                value="bold"
                aria-label="Bold style"
              >
                Bold
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>
      </div>
    );
  }
);

IconCard.displayName = "IconCard";
