import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib";

export const buttonVariants = cva(
  "inline-flex relative items-center justify-center text-sm font-medium gap-2 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-muted/60 text-primary/70 hover:text-primary hover:bg-muted active:bg-muted",
        outline:
          "bg-transparent border border-gray-200 text-gray-700 hover:bg-gray-100 hover:text-gray-900 active:bg-gray-200",
        ghost: "bg-transparent hover:bg-muted text-foreground",
        subtle:
          "bg-muted text-muted-foreground/80 hover:bg-muted hover:text-primary active:bg-muted/60",
        link: "bg-transparent underline-offset-4 hover:underline text-gray-700 hover:text-gray-900",
        danger:
          "bg-red-950/30 text-red-400 hover:bg-red-950/50 hover:text-red-300 active:bg-red-950/50",
      },
      size: {
        default: "h-10 px-4 py-2 rounded-lg",
        sm: "h-8 px-3 py-1.5 text-xs rounded-md",
        lg: "h-11 px-6 py-2.5 text-base rounded-lg",
        icon: "h-9 w-9 rounded-full p-2",
        "icon-sm": "h-7 w-7 rounded-full p-1.5",
      },
      isActive: {
        true: "ring-2 ring-gray-950/10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
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
  },
);
Button.displayName = "Button";

export { Button };
