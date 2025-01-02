import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/hooks";
import { cva, type VariantProps } from "class-variance-authority";

const progressVariants = cva(
  "h-full w-full flex-1 transition-all duration-300 rounded-r-full",
  {
    variants: {
      variant: {
        primary: "bg-blue-600 dark:bg-blue-500",
        secondary: "bg-icu-400 dark:bg-icu-600",
        success: "bg-emerald-500 dark:bg-emerald-400",
        danger: "bg-rose-500 dark:bg-rose-400",
        warning: "bg-amber-500 dark:bg-amber-400",
        dark: "bg-icu-900 dark:bg-icu-400",
        neutral: "bg-icu-500 dark:bg-icu-600",
      },
    },
    defaultVariants: {
      variant: "neutral",
    },
  }
);

const rootVariants = cva("relative h-2 w-full overflow-hidden rounded-full", {
  variants: {
    variant: {
      primary: "bg-blue-200/70 dark:bg-blue-800/70",
      secondary: "bg-icu-200/50 dark:bg-icu-800/50",
      success: "bg-emerald-100 dark:bg-emerald-900/30",
      danger: "bg-rose-100 dark:bg-rose-900/30",
      warning: "bg-amber-100 dark:bg-amber-900/30",
      dark: "bg-icu-200 dark:bg-icu-800",
      neutral: "bg-icu-200/40 dark:bg-icu-800/40",
    },
  },
  defaultVariants: {
    variant: "neutral",
  },
});

interface ProgressProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>,
    VariantProps<typeof progressVariants> {
  value?: number;
  root?: string;
  indicator?: string;
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ root, indicator, value, variant, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(rootVariants({ variant }), root)}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className={cn(progressVariants({ variant }), indicator)}
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));

Progress.displayName = "Progress";

export { Progress, type ProgressProps };
