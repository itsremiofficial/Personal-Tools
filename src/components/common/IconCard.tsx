import { memo } from "react";
import { cn } from "@/lib";
import * as iv01 from "@/components/icons/version01";
import { Tooltip } from "./Tooltip";
import { AnimatePresence, motion } from "motion/react";
import { StatefulButton } from "./StatefulButton";
import { useIsMobile } from "@/hooks/useMobile";

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
  iconSize?: number;
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
    iconSize = 48,
  }: IconCardProps) => {
    const isMobile = useIsMobile();
    return (
      <div
        className={cn(
          "bg-muted/20 p-2 flex flex-col h-full rounded-3xl flex-[1_1_160px] sm:flex-[1_1_200px] md:flex-[1_1_232px] min-w-[160px] sm:min-w-[200px] md:min-w-[232px] transition-all duration-200 overflow-hidden",
          className,
        )}
      >
        <div className="p-2 sm:p-3 md:p-4 flex items-center justify-center rounded-t-xl">
          <Tooltip
            side="top"
            sideOffset={5}
            className="px-4 rounded-xl border-border/60 shadow-lg"
            delayDuration={500}
            trigger={
              <div className="w-full h-full min-h-16 sm:min-h-24 relative flex items-center justify-center">
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
                    <div
                      style={{ width: iconSize, height: iconSize }}
                      className="flex items-center justify-center"
                    >
                      <Icon
                        className="text-foreground w-full h-full"
                        fill={
                          currentStyle === "bulk" || currentStyle === "bold"
                        }
                        duotone={
                          currentStyle !== "bold" &&
                          currentStyle !== "line-solid"
                        }
                        width={1.2}
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            }
            content={
              <div className="max-w-xs">
                <p className="text-sm font-mono">{name}</p>
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
              aria-label={`Copy ${formatIconName(name)}`}
              labelClassName="hidden md:inline"
              minWidth={isMobile ? "4ch" : "7ch"}
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
              minWidth={isMobile ? "4ch" : "10ch"}
              doneClassName="text-green-400"
              onAction={() => onDownload(name, version)}
              aria-label={`Download ${formatIconName(name)}`}
              labelClassName="hidden md:inline"
              className={cn(actionBtn, "flex-1")}
            />
          </div>
        </div>
      </div>
    );
  },
);

IconCard.displayName = "IconCard";
