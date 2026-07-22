import { memo, useState } from "react";
import { cn } from "@/lib";
import * as iv01 from "@/components/icons/version01";
import { Tooltip } from "./Tooltip";
import { AnimatePresence, motion } from "motion/react";
import { StatefulButton } from "./StatefulButton";

const formatIconName = (name: string): string => {
  const nameWithoutIcon = name.replace(/^Icon/, "");
  return nameWithoutIcon.replace(/([A-Z])/g, " $1").trim();
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

const actionBtn =
  "transition-[opacity, colors] text-xs font-medium rounded-full";

export const IconCard = memo(
  ({
    name,
    Icon,
    currentStyle,
    onCopy,
    onDownload,
    version,
    className,
  }: IconCardProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        className={cn(
          "bg-muted/20 p-2 flex flex-col h-full rounded-3xl flex-[1_1_232px] min-w-[232px] transition-all duration-200 overflow-hidden",
          className,
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="p-3 sm:p-4 flex items-center justify-center rounded-t-xl">
          <Tooltip
            side="top"
            sideOffset={5}
            className="p-4"
            trigger={
              <div className="w-full h-full min-h-24 relative flex items-center justify-center">
                <AnimatePresence>
                  <motion.div
                    key={currentStyle}
                    initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      rotate: 0,
                    }}
                    exit={{ opacity: 0, scale: 1.3, rotate: 10 }}
                    transition={{ duration: 0.18, ease: "easeInOut" }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <Icon
                      className="w-10 h-10 sm:w-12 sm:h-12 text-foreground"
                      fill={currentStyle === "bulk" || currentStyle === "bold"}
                      duotone={
                        currentStyle !== "bold" && currentStyle !== "line-solid"
                      }
                      width={1.2}
                    />
                  </motion.div>
                </AnimatePresence>
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
                    <span className="text-xs text-muted-foreground">
                      No keywords
                    </span>
                  )}
                </div>
              </div>
            }
          />
        </div>

        <div className="space-y-2 grow flex flex-col">
          <h3
            className="text-sm font-medium truncate text-foreground text-center tracking-wide"
            title={formatIconName(name)}
          >
            {formatIconName(name)}
          </h3>

          <div className="mt-auto flex items-center justify-between gap-1 p-1 border border-border rounded-full">
            <StatefulButton
              variant="default"
              idleIcon={<iv01.IconCopy3 duotone={false} className="size-4" />}
              idleLabel="Copy"
              loadingLabel="Copying"
              doneLabel="Copied"
              doneClassName="text-green-400"
              onAction={() => onCopy(currentStyle)}
              minWidth="7ch"
              aria-label={`Copy ${formatIconName(name)}`}
              className={cn(actionBtn, "flex-1")}
            />
            <StatefulButton
              variant="default"
              idleIcon={
                <iv01.IconDownloadMinimalistic
                  duotone={false}
                  className="size-4"
                />
              }
              idleLabel="Download"
              loadingLabel="Downloading"
              doneLabel="Downloaded"
              doneClassName="text-green-400"
              onAction={() => onDownload(name, version)}
              minWidth="10ch"
              aria-label={`Download ${formatIconName(name)}`}
              className={cn(actionBtn, "flex-1")}
            />
          </div>
        </div>
      </div>
    );
  },
);

IconCard.displayName = "IconCard";
