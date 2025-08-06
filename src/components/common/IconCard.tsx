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
    variant = "default",
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

    const variants = {
      default: (
        <div
          className={cn(
            "flex flex-col h-full rounded-3xl border border-icu-300 dark:border-gray-800 bg-white dark:bg-gray-900 transition-all duration-200 overflow-hidden",
            isHovered && "border-gray-400 dark:border-gray-700",
            className
          )}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Icon Preview Area */}
          <div className="relative">
            <div className="p-3 sm:p-4 flex items-center justify-center bg-gray-50 dark:bg-gray-950 rounded-t-xl">
              <Tooltip
                side="top"
                sideOffset={5}
                trigger={
                  <div className="w-full h-full min-h-24 flex items-center justify-center">
                    <Icon
                      className="w-10 h-10 sm:w-12 sm:h-12 text-gray-900 dark:text-gray-100 transition-all duration-200 transform"
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
                            className="px-2 py-0.5 text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full"
                          >
                            {keyword}
                          </span>
                        )
                      )}
                      {(!Icon.keywords || Icon.keywords.length === 0) && (
                        <span className="text-xs text-gray-500">
                          No keywords
                        </span>
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
                <iv01.IconCopy3 className="h-5 w-5 text-gray-600 dark:text-gray-400 cursor-pointer hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-200" />
              </button>
              <button onClick={() => onDownload(name, version)}>
                <iv01.IconDownloadMinimalistic className="h-5 w-5 text-gray-600 dark:text-gray-400 cursor-pointer hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-200" />
              </button>
            </motion.div>
          </div>

          {/* Info and style selector */}
          <div className="p-3 space-y-2 flex-grow flex flex-col">
            <h3
              className="text-xs font-medium truncate text-gray-700 dark:text-gray-300"
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
                className="flex w-full rounded-lg overflow-hidden"
              >
                <ToggleGroupItem
                  className="flex-1 text-xs"
                  value="line"
                  aria-label="Line style"
                >
                  Line
                </ToggleGroupItem>
                <ToggleGroupItem
                  className="flex-1 text-xs"
                  value="bulk"
                  aria-label="Bulk style"
                >
                  Bulk
                </ToggleGroupItem>
                <ToggleGroupItem
                  className="flex-1 text-xs"
                  value="bold"
                  aria-label="Bold style"
                >
                  Bold
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>
        </div>
      ),

      compact: (
        <div
          className={cn(
            "flex h-full rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transition-all duration-200 overflow-hidden",
            isHovered && "border-gray-300 dark:border-gray-700",
            className
          )}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Icon Preview Area - Enhanced with better aspect ratio and background */}
          <div className="flex items-center justify-center h-full min-w-16 w-16 bg-gray-50 dark:bg-gray-950 rounded-l-lg border-r border-gray-100 dark:border-gray-800">
            <Tooltip
              side="top"
              trigger={
                <div className="flex items-center justify-center p-3">
                  <Icon
                    className="w-9 h-9 text-gray-900 dark:text-gray-100 transition-transform duration-200"
                    style={{
                      transform: isHovered ? "scale(1.1)" : "scale(1)",
                    }}
                    fill={localStyle !== "line"}
                    duotone={localStyle !== "bold"}
                    width={1.2}
                  />
                </div>
              }
              content={formatIconName(name)}
            />
          </div>

          {/* Middle content area with name and keywords */}
          <div className="flex-1 p-3 flex flex-col justify-center min-w-0">
            <div className="flex items-center gap-2">
              <h3
                className="text-sm font-medium truncate text-gray-700 dark:text-gray-300"
                title={formatIconName(name)}
              >
                {formatIconName(name)}
              </h3>
              <span className="text-xs text-gray-500 dark:text-gray-500 bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded-full hidden sm:inline-block">
                {version}
              </span>
            </div>

            {/* Keywords - visible on hover or medium+ screens */}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isHovered || window.innerWidth > 768 ? 1 : 0,
                height: isHovered || window.innerWidth > 768 ? "auto" : 0,
              }}
              transition={{ duration: 0.2 }}
              className="mt-1 overflow-hidden"
            >
              <div className="flex flex-wrap gap-1 mt-1">
                {((Icon as IconComponent).keywords || [])
                  .slice(0, 3)
                  .map((keyword: string, index: number) => (
                    <span
                      key={index}
                      className="px-1.5 py-0.5 text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full"
                    >
                      {keyword}
                    </span>
                  ))}
                {(Icon as IconComponent).keywords &&
                  (Icon as IconComponent).keywords!.length > 3 && (
                    <span className="px-1.5 py-0.5 text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full">
                      +{(Icon as IconComponent).keywords!.length - 3} more
                    </span>
                  )}
              </div>
            </motion.div>
          </div>

          {/* Actions area on the right */}
          <div className="flex flex-col justify-between border-l border-gray-100 dark:border-gray-800 p-2 w-28 bg-gray-50/50 dark:bg-gray-900/50">
            {/* Style controls */}
            <ToggleGroup
              type="single"
              value={localStyle}
              onValueChange={(value: string) =>
                value && handleLocalStyleChange(value as IconStyle)
              }
              variant="outline"
              size="sm"
              className="flex w-full rounded-md overflow-hidden"
            >
              <ToggleGroupItem className="flex-1 p-0 h-7 text-xs" value="line">
                Line
              </ToggleGroupItem>
              <ToggleGroupItem className="flex-1 p-0 h-7 text-xs" value="bulk">
                Bulk
              </ToggleGroupItem>
              <ToggleGroupItem className="flex-1 p-0 h-7 text-xs" value="bold">
                Bold
              </ToggleGroupItem>
            </ToggleGroup>

            {/* Action buttons */}
            <div className="flex justify-end gap-2 mt-2">
              <Tooltip
                trigger={
                  <Button
                    onClick={() => onCopy(localStyle)}
                    size="icon-sm"
                    variant="ghost"
                    className="h-7 w-7 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-700 rounded-full"
                    aria-label="Copy component"
                  >
                    <iv01.IconCopy className="h-3.5 w-3.5 text-gray-600 dark:text-gray-400" />
                  </Button>
                }
                content="Copy component code"
                side="left"
              />
              <Tooltip
                trigger={
                  <Button
                    onClick={() => onDownload(name, version)}
                    size="icon-sm"
                    variant="ghost"
                    className="h-7 w-7 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-700 rounded-full"
                    aria-label="Download icon"
                  >
                    <iv01.IconDownloadMinimalistic className="h-3.5 w-3.5 text-gray-600 dark:text-gray-400" />
                  </Button>
                }
                content="Download icon"
                side="left"
              />
            </div>
          </div>
        </div>
      ),

      minimal: (
        <Tooltip
          trigger={
            <div
              className={cn(
                "flex flex-col items-center justify-center rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 aspect-square p-3 transition-all duration-200",
                isHovered && "border-gray-300 dark:border-gray-700",
                className
              )}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Icon
                className="w-8 h-8 text-gray-900 dark:text-gray-100 transition-transform duration-200"
                style={{
                  transform: isHovered ? "scale(1.15)" : "scale(1)",
                }}
                fill={localStyle !== "line"}
                duotone={localStyle !== "bold"}
                width={1.2}
              />
              <motion.div
                className="flex gap-1 mt-2 absolute bottom-1"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 5 }}
                transition={{ duration: 0.2 }}
              >
                <ToggleGroup
                  type="single"
                  value={localStyle}
                  onValueChange={(value: string) =>
                    value && handleLocalStyleChange(value as IconStyle)
                  }
                  variant="ghost"
                  size="sm"
                  className="bg-transparent"
                >
                  <ToggleGroupItem
                    className="h-5 w-5 p-0 rounded-full"
                    value="line"
                    aria-label="Line style"
                  >
                    <span className="text-[10px]">L</span>
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    className="h-5 w-5 p-0 rounded-full"
                    value="bulk"
                    aria-label="Bulk style"
                  >
                    <span className="text-[10px]">B</span>
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    className="h-5 w-5 p-0 rounded-full"
                    value="bold"
                    aria-label="Bold style"
                  >
                    <span className="text-[10px]">D</span>
                  </ToggleGroupItem>
                </ToggleGroup>
              </motion.div>
            </div>
          }
          content={
            <div className="space-y-2 w-48">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-medium">{formatIconName(name)}</h3>
                <div className="flex gap-1">
                  <Button
                    onClick={() => onCopy(localStyle)}
                    size="icon-sm"
                    variant="ghost"
                    className="h-6 w-6"
                    aria-label="Copy component"
                  >
                    <iv01.IconCopy className="h-3 w-3" />
                  </Button>
                  <Button
                    onClick={() => onDownload(name, version)}
                    size="icon-sm"
                    variant="ghost"
                    className="h-6 w-6"
                    aria-label="Download icon"
                  >
                    <iv01.IconDownloadMinimalistic className="h-3 w-3" />
                  </Button>
                </div>
              </div>
              {(Icon as IconComponent).keywords &&
                (Icon as IconComponent).keywords!.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {(Icon as IconComponent).keywords!.map(
                      (keyword: string, index: number) => (
                        <span
                          key={index}
                          className="px-1.5 py-0.5 text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full"
                        >
                          {keyword}
                        </span>
                      )
                    )}
                  </div>
                )}
            </div>
          }
          side="top"
          align="center"
          sideOffset={5}
        />
      ),
    };

    return variants[variant];
  }
);

IconCard.displayName = "IconCard";
