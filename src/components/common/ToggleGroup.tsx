import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { cn } from "@/hooks";
import { cva, type VariantProps } from "class-variance-authority";

const toggleGroupVariants = cva(
  "inline-flex rounded-lg bg-transparent p-1 gap-1",
  {
    variants: {
      variant: {
        default: "bg-gray-100 dark:bg-gray-800/50",
        outline: "border border-gray-200 dark:border-gray-800",
        ghost: "bg-transparent",
      },
      size: {
        default: "p-1",
        sm: "p-0.5",
        lg: "p-1.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// Discriminated union for single/multiple with correct defaultValue types
type ToggleGroupSingleProps = Omit<
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root>,
  "type" | "value" | "onValueChange" | "defaultValue"
> & {
  type: "single";
  value?: string;
  onValueChange?: (value: string) => void;
  defaultValue?: string;
} & VariantProps<typeof toggleGroupVariants> & { className?: string };

type ToggleGroupMultipleProps = Omit<
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root>,
  "type" | "value" | "onValueChange" | "defaultValue"
> & {
  type: "multiple";
  value?: string[];
  onValueChange?: (value: string[]) => void;
  defaultValue?: string[];
} & VariantProps<typeof toggleGroupVariants> & { className?: string };

type ToggleGroupProps = ToggleGroupSingleProps | ToggleGroupMultipleProps;

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  ToggleGroupProps
>((props, ref) => {
  const { className, variant, size, ...rest } = props;
  if (props.type === "single") {
    const { type, value, onValueChange, defaultValue, ...other } =
      rest as ToggleGroupSingleProps;
    return (
      <ToggleGroupPrimitive.Root
        ref={ref}
        type="single"
        value={value}
        onValueChange={onValueChange}
        defaultValue={defaultValue}
        className={cn(toggleGroupVariants({ variant, size }), className)}
        {...other}
      />
    );
  } else {
    const { type, value, onValueChange, defaultValue, ...other } =
      rest as ToggleGroupMultipleProps;
    return (
      <ToggleGroupPrimitive.Root
        ref={ref}
        type="multiple"
        value={value}
        onValueChange={onValueChange}
        defaultValue={defaultValue}
        className={cn(toggleGroupVariants({ variant, size }), className)}
        {...other}
      />
    );
  }
});
ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;

const toggleGroupItemVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        default: [
          "hover:bg-gray-200 hover:text-gray-900",
          "data-[state=on]:bg-gray-800 data-[state=on]:text-gray-50",
          "dark:hover:bg-gray-800 dark:hover:text-gray-200 dark:text-gray-400",
          "dark:data-[state=on]:bg-gray-950 dark:data-[state=on]:text-gray-300 dark:data-[state=on]:font-bold",
        ],
        outline: [
          "hover:bg-gray-100 hover:text-gray-900",
          "data-[state=on]:bg-gray-900 data-[state=on]:text-gray-50",
          "dark:hover:bg-gray-800 dark:hover:text-gray-200",
          "dark:data-[state=on]:bg-gray-100 dark:data-[state=on]:text-gray-900",
        ],
        ghost: [
          "hover:bg-gray-100 hover:text-gray-900",
          "data-[state=on]:bg-gray-100 data-[state=on]:text-gray-900",
          "dark:hover:bg-gray-800 dark:hover:text-gray-200",
          "dark:data-[state=on]:bg-gray-800 dark:data-[state=on]:text-gray-100",
        ],
      },
      size: {
        default: "h-9 px-3 py-1.5",
        sm: "h-7 px-2.5 py-1 text-xs",
        lg: "h-10 px-4 py-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ToggleGroupItemProps
  extends React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item>,
    VariantProps<typeof toggleGroupItemVariants> {}

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  ToggleGroupItemProps
>(({ className, variant, size, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Item
    ref={ref}
    className={cn(toggleGroupItemVariants({ variant, size }), className)}
    {...props}
  >
    {children}
  </ToggleGroupPrimitive.Item>
));
ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

export { ToggleGroup, ToggleGroupItem };
