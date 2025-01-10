import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useSmoothCorners } from "@/utils/SmoothCorners";
import { cn } from "@/hooks";

export const NavItem = React.memo(
  ({ path, label, icon: IconComponent, isActive, isOpen }: NavItemProps) => {
    const { smoothCorners, updateProgress } = useSmoothCorners("3,3", "10,3");
    const controls = useAnimation();

    useEffect(() => {
      controls.start({ opacity: isOpen ? 1 : 0 });
      updateProgress(isOpen ? 1 : 0);
    }, [isOpen, controls, updateProgress]);

    return (
      <motion.div
        style={
          {
            "--smooth-corners": smoothCorners,
          } as CustomStyles
        }
        className={cn(
          "masked overflow-hidden rounded-2xl tracking-wide font-semibold will-change-transform select-none",
          "transition-colors duration-300",
          "text-icu-800 hover:text-icu-900",
          "bg-icu-200 hover:bg-icu-400/60",
          "dark:text-icu-700 dark:hover:text-icu-100",
          "dark:bg-icu-800/40 dark:hover:bg-icu-800",
          !isOpen && "max-h-[75px] aspect-square",
          isActive &&
            "bg-icu-400/60 text-icu-900 dark:bg-icu-800 dark:text-icu-300"
        )}
        layout
        layoutDependency={isOpen}
      >
        <Link
          className={cn(
            "px-4 py-6 flex items-center  gap-3",
            !isOpen && "!items-center h-full"
          )}
          to={path}
        >
          <div className={cn(!isOpen ? "" : "w-1/8")}>
            <IconComponent
              fill={isActive}
              duotone={false}
              className="w-7 h-7 !aspect-square"
            />
          </div>
          <motion.div
            animate={{ opacity: isOpen ? 1 : 0, width: isOpen ? "auto" : 0 }}
            transition={{
              opacity: { duration: 0.7, ease: [0.7, 0, 0.2, 1] },
              width: { duration: 0.7, ease: [0.7, 0, 0.2, 1] },
            }}
            className={cn("whitespace-nowrap")}
          >
            {label}
          </motion.div>
        </Link>
      </motion.div>
    );
  }
);

NavItem.displayName = "NavItem";
