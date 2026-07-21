import { memo, useState, useEffect } from "react";
import { cn } from "@/hooks";
import { Tabs, TabsList, TabsTrigger } from "./tabs";
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
          "bg-muted/20 p-2 flex flex-col h-full rounded-3xl flex-[1_1_0%] nth-last-of-type-[-n+5]:flex-[0_0_auto] min-w-52 transition-all duration-200 overflow-hidden",
          className,
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Icon Preview Area */}
        <div className="relative">
          <div className="p-3 sm:p-4 flex items-center justify-center rounded-t-xl">
            <Tooltip
              side="top"
              sideOffset={5}
              className="p-4"
              trigger={
                <div className="w-full h-full min-h-24 flex items-center justify-center">
                  <Icon
                    className="w-10 h-10 sm:w-12 sm:h-12 text-foreground transition-all duration-200 transform"
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
                  <p className="text-sm mb-4">
                    {formatIconName(name)}{" "}
                    <span className="text-foreground/30">- Keywords</span>
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {((Icon as IconComponent).keywords || []).map(
                      (keyword: string, index: number) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-[10px] bg-muted/60 rounded-full leading-none capitalize text-foreground/70"
                        >
                          {keyword}
                        </span>
                      ),
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
              <iv01.IconCopy3 className="h-5 w-5 text-foreground/50 hover:text-foreground cursor-pointer transition-colors" />
            </button>
            <button onClick={() => onDownload(name, version)}>
              <iv01.IconDownloadMinimalistic className="h-5 w-5 cursor-pointer text-foreground/50 hover:text-foreground transition-colors" />
            </button>
          </motion.div>
        </div>

        {/* Info and style selector */}
        <div className="space-y-2 flex-grow flex flex-col">
          <h3
            className="text-sm font-medium truncate text-foreground text-center tracking-wide"
            title={formatIconName(name)}
          >
            {formatIconName(name)}
          </h3>

          <div className="mt-auto pt-1">
            <Tabs
              value={localStyle}
              onValueChange={(v) => v && handleLocalStyleChange(v as IconStyle)}
              variant="pill"
              className="w-full border border-border/70 p-1 rounded-full"
            >
              <TabsList className="w-full">
                <TabsTrigger value="line" className="flex-1 text-xs py-2 px-4">
                  Line
                </TabsTrigger>
                <TabsTrigger value="bulk" className="flex-1 text-xs py-2 px-4">
                  Bulk
                </TabsTrigger>
                <TabsTrigger value="bold" className="flex-1 text-xs py-2 px-4">
                  Bold
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
      </div>
    );
  },
);

IconCard.displayName = "IconCard";
