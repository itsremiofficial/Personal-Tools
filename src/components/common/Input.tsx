import { cn } from "@/hooks";
import * as React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "default" | "outline" | "filled";
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant = "default", ...props }, ref) => {
    const variantStyles = {
      default:
        "border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900",
      outline: "border border-gray-200 dark:border-gray-800 bg-transparent",
      filled: "border-none bg-gray-100 dark:bg-gray-800",
    };

    return (
      <input
        type={type}
        className={cn(
          "flex w-full rounded-lg px-3 py-2 text-sm transition-colors",
          "text-gray-900 dark:text-gray-50",
          "placeholder:text-gray-500 dark:placeholder:text-gray-500",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 dark:focus-visible:ring-gray-700",
          "disabled:cursor-not-allowed disabled:opacity-50",
          variantStyles[variant],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
