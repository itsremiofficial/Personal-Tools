import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex relative items-center justify-center text-sm tracking-wide focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer !transition-colors !duration-400 active:translate-y-[1px]",
  {
    variants: {
      variant: {
        default:
          "bg-accent hover:bg-accent-alt text-icu-100 hover:text-white dark:bg-icu-1000 dark:hover:bg-icu-1100 dark:text-icu-400 dark:hover:text-icu-200",
        secondary:
          "bg-transparent border dark:border-icu-500 dark:hover:bg-icu-700/70 dark:hover:border-icu-700/50 dark:text-icu-400 dark:hover:text-icu-100 text-icu-900 border-icu-900 hover:bg-icu-900 hover:text-icu-100",
        neutral:
          "text-icu-800 hover:text-icu-1100 bg-icu-300/50 hover:bg-icu-400/70 dark:text-icu-500 dark:hover:text-icu-400 dark:bg-icu-900/70 dark:hover:bg-icu-1000/50",
        danger:
          " bg-rose-200 hover:bg-rose-300/80 text-rose-500 hover:text-rose-600 dark:text-rose-400 dark:hover:text-rose-300 dark:bg-rose-700/20 dark:hover:bg-rose-700/30",
      },
      size: {
        default: "px-6 py-3 rounded-xl",
        sm: "rounded-xl px-3 py-2 text-xs",
        lg: "rounded-2xl px-10 py-5 !text-base",
        icon: "p-3 rounded-2xl !aspect-square",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={buttonVariants({ variant, size, className })}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
