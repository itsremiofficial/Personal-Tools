"use client";

import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/hooks";
import { ToggleSwitchProps } from "@/types";

const toggleVariants = cva(
  [
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
    "focus-visible:outline-none",
    "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
  ],
  {
    variants: {
      variant: {
        default:
          "text-icu-800 hover:text-icu-1100 bg-icu-300/50 hover:bg-icu-400/70 dark:text-icu-500 dark:hover:text-icu-400 dark:bg-icu-900/70 dark:hover:bg-icu-1000/50",
        outline: "border bg-transparent shadow-sm hover:bg-accent",
      },
      size: {
        sm: "h-8 px-1.5 min-w-8",
        default: "h-9 px-2 min-w-9",
        lg: "h-10 px-2.5 min-w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const ToggleSwitch = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
));

ToggleSwitch.displayName = "ToggleSwitch";

export const Toggle = React.memo(
  ({
    label,
    pressed,
    onPressedChange,
    size = "default",
    disabled = false,
    icon,
  }: ToggleSwitchProps) => (
    <ToggleSwitch
      pressed={pressed}
      onPressedChange={onPressedChange}
      size={size}
      disabled={disabled}
      className={cn(
        "border px-3 !py-5 cursor-pointer rounded-xl !leading-relaxed flex gap-2 select-none",
        "bg-transparent text-icu-800 border-icu-500 hover:bg-icu-200",
        "data-[state=on]:bg-icu-300 data-[state=on]:border-icu-300 data-[state=on]:text-icu-1000",
        "dark:hover:bg-icu-1100/70 dark:border-icu-800/70 dark:text-icu-500",
        "dark:data-[state=on]:bg-icu-1100 dark:data-[state=on]:border-icu-1100 dark:data-[state=on]:text-icu-500/80"
      )}
    >
      {label} {icon}
    </ToggleSwitch>
  )
);

Toggle.displayName = "Toggle";

export { toggleVariants };
