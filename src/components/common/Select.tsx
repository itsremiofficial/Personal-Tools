"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { cn } from "@/hooks";
import { IconAltArrowRight } from "../icons/version01";

// Types
interface DropdownItem {
  label: string;
  shortcut?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  variant?: "destructive";
  items?: DropdownItem[];
  isSelected?: boolean; // Add this field
}

interface DropdownProps {
  trigger: React.ReactNode;
  items: DropdownItem[];
  className?: string;
  menuClasses?: {
    content?: string;
    item?: string;
    shortcut?: string;
    subTrigger?: string;
    subContent?: string;
  }; // Removed icon and selectedIcon
  optionClasses?: {
    selected?: string;
    destructive?: string;
    disabled?: string;
  };
}

// Styles
const menuItemStyles = cn(
  "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm",
  "outline-none transition-colors"
);

const menuContentStyles = cn(
  "z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-md",
  "data-[state=open]:animate-in data-[state=closed]:animate-out",
  "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
  "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
);

const {
  Root,
  Trigger,
  Group,
  Portal,
  Sub,
  SubTrigger: PrimitiveSubTrigger,
  SubContent: PrimitiveSubContent,
  Content: PrimitiveContent,
  Item: PrimitiveItem,
  Separator: PrimitiveSeparator,
} = DropdownMenuPrimitive;

// Enhanced Components
const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof PrimitiveSubTrigger>,
  React.ComponentPropsWithoutRef<typeof PrimitiveSubTrigger>
>(({ className, children, ...props }, ref) => (
  <PrimitiveSubTrigger
    ref={ref}
    className={cn(menuItemStyles, className)}
    {...props}
  >
    {children}
    <IconAltArrowRight className="ml-auto h-4 w-4" />
  </PrimitiveSubTrigger>
));

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof PrimitiveItem>,
  React.ComponentPropsWithoutRef<typeof PrimitiveItem> & {
    variant?: "destructive";
    isSelected?: boolean;
    menuClasses?: DropdownProps["menuClasses"];
    optionClasses?: DropdownProps["optionClasses"];
  }
>(
  (
    {
      className,
      children,
      variant,
      isSelected,
      menuClasses,
      optionClasses,
      ...props
    },
    ref
  ) => (
    <PrimitiveItem
      ref={ref}
      className={cn(
        menuItemStyles,
        variant === "destructive" &&
          (optionClasses?.destructive || "text-destructive"),
        isSelected && (optionClasses?.selected || "bg-icu-900 text-icu-300"),
        menuClasses?.item,
        className
      )}
      data-selected={isSelected}
      {...props}
    >
      {children}
    </PrimitiveItem>
  )
);

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof PrimitiveContent>,
  React.ComponentPropsWithoutRef<typeof PrimitiveContent>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <Portal>
    <PrimitiveContent
      ref={ref}
      sideOffset={sideOffset}
      className={cn(menuContentStyles, className)}
      {...props}
    />
  </Portal>
));

// Main Dropdown Component
const Dropdown = React.memo(
  ({
    trigger,
    items,
    className,
    menuClasses,
    optionClasses,
  }: DropdownProps) => {
    const renderMenuItem = React.useCallback(
      (item: DropdownItem) => (
        <DropdownMenuItem
          key={item.label}
          onClick={item.onClick}
          variant={item.variant}
          isSelected={item.isSelected}
          menuClasses={menuClasses}
          optionClasses={optionClasses}
        >
          {item.icon && <span className="mr-2">{item.icon}</span>}
          <span>{item.label}</span>
          {item.shortcut && (
            <span
              className={cn(
                "ml-auto text-xs tracking-widest opacity-60",
                menuClasses?.shortcut
              )}
            >
              {item.shortcut}
            </span>
          )}
        </DropdownMenuItem>
      ),
      [menuClasses, optionClasses]
    );

    const renderMenuItems = React.useCallback(
      (menuItems: DropdownItem[]) =>
        menuItems.map((item) => (
          <React.Fragment key={item.label}>
            {item.items ? (
              <Sub>
                <DropdownMenuSubTrigger>
                  {item.icon && <span className="mr-2">{item.icon}</span>}
                  {item.label}
                </DropdownMenuSubTrigger>
                <Portal>
                  <PrimitiveSubContent className={menuContentStyles}>
                    {item.items.map(renderMenuItem)}
                  </PrimitiveSubContent>
                </Portal>
              </Sub>
            ) : (
              renderMenuItem(item)
            )}
          </React.Fragment>
        )),
      [renderMenuItem]
    );

    return (
      <Root>
        <Trigger asChild>{trigger}</Trigger>
        <DropdownMenuContent
          className={cn(menuContentStyles, menuClasses?.content)}
        >
          <Group className={className}>{renderMenuItems(items)}</Group>
        </DropdownMenuContent>
      </Root>
    );
  }
);

Dropdown.displayName = "Dropdown";
DropdownMenuContent.displayName = "DropdownMenuContent";
DropdownMenuItem.displayName = "DropdownMenuItem";
DropdownMenuSubTrigger.displayName = "DropdownMenuSubTrigger";

export { Dropdown };
