import React, { useMemo, useCallback, useEffect, forwardRef } from "react";
import { useLocation } from "react-router-dom";
import { NavItem } from "@/components/NavItem";
import { useSidebar } from "@/hooks/useSidebar";
import {
  IconAltArrowRight,
  IconLayersMinimalistic,
  IconMagicStick3,
  IconMoon,
  IconPalette,
  IconSun,
} from "@/components/icons/version01";
import { cn } from "@/hooks";
import { useTheme } from "@/hooks/useTheme";
import { Logo } from "@/components";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useSmoothCorners } from "@/utils/SmoothCorners";
import { IconLayer } from "@/components/icons/version02";

const Sidebar = forwardRef<HTMLElement>((props, ref) => {
  const { isDark, setDark } = useTheme();
  const { isOpen, isDelayed, toggleSidebar } = useSidebar();
  const { smoothCorners, updateProgress } = useSmoothCorners("3,3", "10,3");
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: isOpen ? 1 : 0 });
    updateProgress(isOpen ? 1 : 0);
  }, [isOpen, controls, updateProgress]);
  const location = useLocation();

  const navItems = useMemo(
    () => [
      { path: "/", label: "Icons", icon: IconLayer },
      {
        path: "/color-palette-generator",
        label: "Color Generator",
        icon: IconPalette,
      },
      {
        path: "/icon-converter",
        label: "Icon Converter",
        icon: IconMagicStick3,
      },
    ],
    []
  );

  const getIsActive = useCallback(
    (path: string) => {
      if (path === "/") {
        return location.pathname === path || location.hash === "#/";
      }
      return location.pathname === path || location.hash === `#${path}`;
    },
    [location]
  );

  function ToggleItem({
    id,
    label,
    isActive,
    onChange,
    IconComponent,
    isOpen,
  }: {
    id: string;
    label: string;
    isActive: boolean;
    onChange: () => void;
    IconComponent: React.FC<IconProps>;
    isOpen: boolean;
  }) {
    return (
      <span className="grow">
        <input
          className="peer hidden"
          type="radio"
          value={label.toLowerCase()}
          name="theme"
          checked={isActive}
          onChange={onChange}
          id={id}
        />
        <motion.label
          htmlFor={id}
          style={
            {
              "--smooth-corners": smoothCorners,
            } as CustomStyles
          }
          className={cn(
            "form-radiobtn py-4 px-3 py-3flex items-center masked",
            isOpen && "px-5 gap-1 max-h-16"
          )}
          layout
          layoutDependency={isOpen}
        >
          <IconComponent
            fill={isActive}
            className={`!h-fit transform-[width] duration-500 ease-fluid ${
              isOpen ? "w-5" : "w-6"
            }`}
          />
          <AnimatePresence mode="wait">
            <motion.div
              layout
              layoutDependency={isOpen}
              initial={{ opacity: 0, width: 0 }}
              animate={{
                opacity: isOpen ? 1 : 0,
                width: isOpen ? "auto" : 0,
              }}
              exit={{ opacity: 0, width: 0 }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 200,
                opacity: { duration: 0.2 },
              }}
              className={cn("whitespace-nowrap overflow-hidden")}
            >
              {label}
            </motion.div>
          </AnimatePresence>
        </motion.label>
      </span>
    );
  }

  return (
    <aside
      ref={ref}
      className={cn(
        "group/sidebar sidebar relative z-50 !h-screen",
        !isOpen && "sidebar_opened"
      )}
    >
      <nav
        className={cn(
          "fixed p-2 min-h-screen h-full transition-all duration-700 ease-fluid",
          isOpen ? "w-[280px]" : "w-[110px]"
        )}
      >
        <div
          className={cn(
            "!relative h-full rounded-3xl flex flex-col",
            "bg-icu-100",
            "dark:bg-icu-1100/50"
          )}
        >
          <div
            className={cn(
              "absolute -right-3.5 top-10 w-max h-max cursor-pointer p-1.5 z-100",
              "backdrop-blur-3xl rounded-full",
              "transition-colors duration-300",
              "text-icu-600 hover:text-secondary",
              "dark:text-icu-600 dark:hover:text-primary-700",
              "bg-icu-100 dark:bg-icu-1100"
            )}
            onClick={toggleSidebar}
          >
            <IconAltArrowRight
              width="2.5"
              duotone={false}
              className={cn(
                "transition-transform duration-700 ease-fluid",
                "size-5 rotate-0 stroke-2",
                isOpen && "rotate-180"
              )}
            />
          </div>

          <div className="grow flex flex-col items-center justify-between">
            <div
              className={cn("flex flex-col items-center gap-6 w-full relative")}
            >
              {/* HEADER LOGO */}
              <div
                className={cn(
                  "flex justify-center",
                  "!transition-[width] duration-700 h-fit will-change-transform",
                  "text-primary-700 w-24",
                  isOpen && "w-40"
                )}
              >
                <Logo
                  className={cn(
                    "!transition-[width] duration-700 h-fit",
                    "text-icu-700 w-14 py-7",
                    isOpen && "w-20"
                  )}
                  fill
                />
              </div>

              <ul
                className={cn(
                  "h-full relative flex flex-col justify-center mt-4 perfect-scrollbar px-4 w-full gap-3"
                )}
              >
                {navItems.map((item) => (
                  <NavItem
                    key={item.path}
                    {...item}
                    isActive={getIsActive(item.path)}
                    isOpen={isOpen}
                    isDelayedClosed={isDelayed}
                  />
                ))}
              </ul>
            </div>

            {/* Theme Toggle Section */}
            <div className="w-full p-2">
              <div className="w-full flex flex-col items-center dark:border-icu-700 border border-icu-500 rounded-2xl p-2 pt-4">
                <span
                  className={cn(
                    "uppercase text-xs mb-2 font-medium dark:text-icu-200 text-center",
                    isOpen && "self-start ml-2"
                  )}
                >
                  Toggle Theme
                </span>
                <div className="flex flex-wrap w-full gap-2 transition-transform duration-700">
                  <ToggleItem
                    id="dark-mode"
                    label="Dark"
                    isActive={isDark}
                    onChange={() => setDark(true)}
                    IconComponent={IconMoon}
                    isOpen={isOpen}
                  />
                  <ToggleItem
                    id="light-mode"
                    label="Light"
                    isActive={!isDark}
                    onChange={() => setDark(false)}
                    IconComponent={IconSun}
                    isOpen={isOpen}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
});

Sidebar.displayName = "Sidebar";

export default React.memo(Sidebar);
