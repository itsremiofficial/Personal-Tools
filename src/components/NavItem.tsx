import { cn } from "@/hooks";
import { IconProps } from "@/types";
import React from "react";
import { Link } from "react-router-dom";
import SmoothCorner from "./common/SmoothCorner";
interface NavItemProps {
  path: string;
  label: string;
  icon: React.FC<IconProps>;
  isActive: boolean;
  isOpen: boolean;
  isDelayedClosed: boolean;
}

export const NavItem = React.memo(
  ({
    path,
    label,
    icon: IconComponent,
    isActive,
    isOpen,
    isDelayedClosed,
  }: NavItemProps) => {
    return (
      <SmoothCorner className="w-full navlink">
        <Link
          to={path}
          className={cn(
            "px-4 py-6 w-full overflow-hidden rounded-2xl tracking-wide font-medium flex items-center gap-3",
            "transition-colors duration-300",
            "text-icu-800 hover:text-icu-900",
            "bg-icu-200 hover:bg-icu-400/60",
            "dark:text-icu-700 dark:hover:text-icu-100",
            "dark:bg-icu-800/40 dark:hover:bg-icu-800",
            !isOpen && "!items-center",
            !isOpen && isDelayedClosed && "aspect-square",
            isActive &&
              "bg-icu-400/60 text-icu-900 dark:bg-icu-800 dark:text-icu-300"
          )}
        >
          <IconComponent
            fill={isActive}
            duotone={false}
            className="size-6 !aspect-square"
          />
          <span
            className={cn(
              "hidden opacity-0 transition-opacity duration-1000 ease-fluid whitespace-nowrap",
              isOpen && "opacity-100 inline-flex"
            )}
          >
            {label}
          </span>
        </Link>
      </SmoothCorner>
    );
  }
);

NavItem.displayName = "NavItem";
