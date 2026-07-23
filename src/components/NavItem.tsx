import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { cn } from "@/lib";
import { EASE_OUT } from "@/lib/ease";
import { useSidebar } from "@/hooks/useSidebar";

export const NavItem = React.memo(
  ({ path, label, icon: IconComponent, isActive, isOpen }: NavItemProps) => {
    const { closeMobile } = useSidebar();
    return (
      <li>
        <Link
          onClick={closeMobile}
          className={cn(
            "relative flex items-center gap-3 rounded-xl",
            "select-none",
            "transition-colors",
            "p-3",
            "bg-muted/40 text-muted-foreground hover:bg-muted hover:text-foreground",
            isActive && "bg-sidebar-accent text-sidebar-accent-foreground",
          )}
          to={path}
        >
          <div
            className={cn(
              "absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 rounded-r-full",
              "transition-all duration-300",
              isActive ? "h-1/2 bg-sidebar-accent-foreground/30" : "h-0",
            )}
          />
          <IconComponent fill={isActive} className="size-5 shrink-0" />
          <motion.div
            initial={false}
            animate={{
              width: isOpen ? "auto" : 0,
              opacity: isOpen ? 1 : 0,
            }}
            transition={{ duration: 0.35, ease: EASE_OUT }}
            className="overflow-hidden whitespace-nowrap text-sm"
          >
            {label}
          </motion.div>
        </Link>
      </li>
    );
  },
);

NavItem.displayName = "NavItem";
