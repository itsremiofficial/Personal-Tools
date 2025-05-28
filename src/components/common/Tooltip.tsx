"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "@/hooks";
import { cva, type VariantProps } from "class-variance-authority";

const tooltipVariants = cva(
  "z-50 overflow-hidden border px-3 py-1.5 text-sm shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
  {
    variants: {
      variant: {
        default:
          "bg-white text-gray-950 border-gray-200 dark:bg-gray-900 dark:text-gray-50 dark:border-gray-800",
        invert:
          "bg-gray-900 text-gray-50 border-gray-800 dark:bg-gray-50 dark:text-gray-900 dark:border-gray-200",
        muted:
          "bg-gray-100 text-gray-900 border-gray-200 dark:bg-gray-800 dark:text-gray-50 dark:border-gray-700",
      },
      size: {
        default: "rounded-lg",
        sm: "rounded-md py-1 px-2 text-xs",
        lg: "rounded-xl py-2 px-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface TooltipProps extends React.PropsWithChildren {
  trigger: React.ReactNode;
  content?: React.ReactNode;
  contentProps?: React.ComponentPropsWithoutRef<
    typeof TooltipPrimitive.Content
  >;
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
  sideOffset?: number;
  variant?: VariantProps<typeof tooltipVariants>["variant"];
  size?: VariantProps<typeof tooltipVariants>["size"];
  className?: string;
  delayDuration?: number;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  disableHoverableContent?: boolean;
}

export const Tooltip = React.memo(
  React.forwardRef<
    React.ElementRef<typeof TooltipPrimitive.Content>,
    TooltipProps
  >(
    (
      {
        trigger,
        content,
        children,
        side = "top",
        sideOffset = 4,
        delayDuration = 200,
        variant,
        size,
        className,
        contentProps,
        align,
        ...props
      },
      ref
    ) => (
      <TooltipPrimitive.Provider delayDuration={delayDuration}>
        <TooltipPrimitive.Root {...props}>
          <TooltipPrimitive.Trigger asChild>{trigger}</TooltipPrimitive.Trigger>
          <TooltipPrimitive.Content
            ref={ref}
            side={side}
            align={
              align ??
              (side === "left" || side === "right" ? "start" : "center")
            }
            sideOffset={sideOffset}
            className={cn(tooltipVariants({ variant, size }), className)}
            {...contentProps}
          >
            {content || children}
            <TooltipPrimitive.Arrow className="fill-white dark:fill-gray-900" />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Root>
      </TooltipPrimitive.Provider>
    )
  )
);

Tooltip.displayName = "Tooltip";
