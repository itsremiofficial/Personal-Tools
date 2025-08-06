import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/hooks";

const buttonVariants = cva(
  "inline-flex relative items-center justify-center text-sm font-medium gap-2 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 dark:focus-visible:ring-gray-700 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-gray-900 text-gray-50 hover:bg-gray-800 active:bg-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 dark:active:bg-gray-300",
        outline:
          "bg-transparent border border-gray-200 text-gray-700 hover:bg-gray-100 hover:text-gray-900 active:bg-gray-200 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:active:bg-gray-700",
        ghost:
          "bg-transparent hover:bg-gray-100 text-gray-700 hover:text-gray-900 active:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:active:bg-gray-700",
        subtle:
          "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900 active:bg-gray-300 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-100 dark:active:bg-gray-600",
        link: "bg-transparent underline-offset-4 hover:underline text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100",
        danger:
          "bg-red-100 text-red-600 hover:bg-red-200 hover:text-red-700 active:bg-red-300 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/30 dark:hover:text-red-300",
      },
      size: {
        default: "h-10 px-4 py-2 rounded-lg",
        sm: "h-8 px-3 py-1.5 text-xs rounded-md",
        lg: "h-11 px-6 py-2.5 text-base rounded-lg",
        icon: "h-9 w-9 rounded-full p-2",
        "icon-sm": "h-7 w-7 rounded-full p-1.5",
      },
      isActive: {
        true: "ring-2 ring-gray-950/10 dark:ring-gray-300/10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
    compoundVariants: [
      {
        variant: "ghost",
        isActive: true,
        className: "bg-gray-100 dark:bg-gray-800",
      },
      {
        variant: "subtle",
        isActive: true,
        className: "bg-gray-200 dark:bg-gray-700",
      },
    ],
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, isActive, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, isActive }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
