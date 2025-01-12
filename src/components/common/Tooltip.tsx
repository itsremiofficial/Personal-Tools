"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "@/hooks";

interface TooltipProps {
  trigger: React.ReactNode;
  content: React.ReactNode;
  contentProps?: React.ComponentPropsWithoutRef<
    typeof TooltipPrimitive.Content
  >;
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
  sideOffset?: number;
  className?: string;
  delayDuration?: number;
}

const tooltipContentStyles = cn(
  "z-50 overflow-hidden rounded-xl border px-3 py-2.5 text-sm shadow-md",
  "bg-icu-900 text-icu-100 border-icu-800/50",
  "dark:bg-icu-1000 dark:text-icu-300 dark:border-icu-800/50",
  "animate-in fade-in-0 zoom-in-95",
  "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
  "data-[side=bottom]:slide-in-from-top-2",
  "data-[side=left]:slide-in-from-right-2",
  "data-[side=right]:slide-in-from-left-2",
  "data-[side=top]:slide-in-from-bottom-2"
);

export const Tooltip = React.memo(
  React.forwardRef<
    React.ElementRef<typeof TooltipPrimitive.Content>,
    TooltipProps
  >(
    (
      {
        trigger,
        content,
        side = "top",
        sideOffset = 4,
        delayDuration = 200,
        className,
        contentProps,
        align,
      },
      ref
    ) => (
      <TooltipPrimitive.Provider delayDuration={delayDuration}>
        <TooltipPrimitive.Root>
          <TooltipPrimitive.Trigger asChild>{trigger}</TooltipPrimitive.Trigger>
          <TooltipPrimitive.Content
            ref={ref}
            side={side}
            align={
              align ??
              (side === "left" || side === "right" ? "start" : "center")
            }
            sideOffset={sideOffset}
            className={cn(tooltipContentStyles, className)}
            {...contentProps}
          >
            {content}
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Root>
      </TooltipPrimitive.Provider>
    )
  )
);

Tooltip.displayName = "Tooltip";
