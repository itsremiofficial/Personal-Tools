import React, { useMemo, useCallback, forwardRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavItem } from "@/components/NavItem";
import { useSidebar } from "@/hooks/useSidebar";
import {
  IconAltArrowRight,
  IconMagicStick3,
  IconMoon,
  IconPalette,
  IconSun,
} from "@/components/icons/version01";
import { cn } from "@/hooks";
import { useTheme } from "@/hooks/useTheme";
import { Logo } from "@/components";
import { motion } from "framer-motion";
import { IconLayer } from "@/components/icons/version02";
import { Tabs, TabsList, TabsTrigger } from "@/components/common/tabs";

const labelTransition = {
  width: { duration: 0.5, ease: [0.7, 0, 0.2, 1] },
  opacity: { duration: 0.2 },
};

const Sidebar = forwardRef<HTMLElement>((_props, ref) => {
  const { isDark, setDark } = useTheme();
  const { isOpen, toggleSidebar } = useSidebar();
  const location = useLocation();

  const navItems = useMemo(
    () => [
      { path: "/icons", label: "Icons", icon: IconLayer },
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
    [],
  );

  const getIsActive = useCallback(
    (path: string) => {
      if (path === "/") {
        return location.pathname === path || location.hash === "#/";
      }
      return location.pathname === path || location.hash === `#${path}`;
    },
    [location],
  );

  return (
    <aside
      ref={ref}
      className={cn(
        "group/sidebar sidebar relative z-50 h-screen",
        !isOpen && "sidebar_opened",
      )}
    >
      <nav
        className={cn(
          "fixed min-h-screen h-full transition-[width] duration-700 ease-fluid",
          "shadow-sm",
          isOpen ? "w-[240px]" : "w-20",
        )}
      >
        <div className="relative h-full flex flex-col">
          <div className="grow flex flex-col">
            <div className="flex flex-col items-center gap-6 w-full pt-4">
              <Link
                to="/"
                className={cn(
                  "flex justify-center transition-[width] duration-700 ease-fluid",
                  "text-sidebar-foreground",
                  isOpen ? "w-36" : "w-20",
                )}
              >
                <Logo
                  className={cn(
                    "transition-all duration-700 ease-fluid",
                    "text-sidebar-foreground",
                    isOpen ? "w-16" : "w-10",
                  )}
                  fill
                />
              </Link>

              <div className="w-full px-4">
                <div className="h-px bg-sidebar-border/50" />
              </div>

              <ul className="flex flex-col w-full gap-2 px-3 overflow-y-auto">
                {navItems.map((item) => (
                  <NavItem
                    key={item.path}
                    {...item}
                    isActive={getIsActive(item.path)}
                    isOpen={isOpen}
                  />
                ))}
              </ul>
            </div>

            <div className="mt-auto px-2 pb-2 w-full">
              {/* <div
                className={cn(
                  "flex items-center justify-between cursor-pointer",
                  "rounded-full p-2.5 border border-border",
                  "transition-colors",
                  "bg-sidebar text-muted-foreground/60 hover:text-muted-foreground",
                )}
                onClick={toggleSidebar}
              >
                <motion.span
                  animate={{
                    display: isOpen ? "block" : "none",
                  }}
                  transition={{ duration: 0.7, ease: [0.7, 0, 0.2, 1] }}
                >
                  Collapse
                </motion.span>
                <motion.div
                  animate={{
                    rotate: isOpen ? 180 : 0,
                  }}
                  transition={{ duration: 0.7, ease: [0.7, 0, 0.2, 1] }}
                  className="mr-1"
                >
                  <IconAltArrowRight
                    width={2.5}
                    duotone={false}
                    className="size-4 stroke-2"
                  />
                </motion.div>
              </div> */}
              <div className="mb-2">
                <div className="flex items-center gap-2 px-1 mb-2 mt-4">
                  <span className="text-[11px] font-medium uppercase tracking-widest text-sidebar-foreground/50">
                    Theme
                  </span>
                  <div
                    className={cn(
                      "h-px bg-sidebar-border/50 transition-opacity duration-500",
                      isOpen ? "flex-1" : "hidden",
                    )}
                  />
                </div>
                <Tabs
                  value={isDark ? "dark" : "light"}
                  onValueChange={(v) => setDark(v === "dark")}
                  variant="pill"
                  className="w-full bg-none"
                >
                  <TabsList className="border border-border justify-between w-full p-2">
                    <TabsTrigger
                      value="dark"
                      indicatorClassName="bg-sidebar-primary/15 rounded-md"
                      className={`text-foreground ${isOpen ? "px-5 py-3.5 gap-1.5" : "px-1.5"}`}
                    >
                      <IconMoon fill={isDark} className="w-5 h-5 shrink-0" />
                      <motion.div
                        initial={false}
                        animate={{
                          width: isOpen ? "auto" : 0,
                          opacity: isOpen ? 1 : 0,
                          display: isOpen ? "block" : "none",
                        }}
                        transition={labelTransition}
                        className="overflow-hidden whitespace-nowrap text-sm"
                      >
                        Dark
                      </motion.div>
                    </TabsTrigger>
                    <TabsTrigger
                      value="light"
                      indicatorClassName="bg-sidebar-primary/15 rounded-md"
                      className={`text-foreground ${isOpen ? "px-5 py-3.5 gap-1.5" : "px-1.5"}`}
                    >
                      <IconSun fill={!isDark} className="w-5 h-5 shrink-0" />
                      <motion.div
                        initial={false}
                        animate={{
                          width: isOpen ? "auto" : 0,
                          opacity: isOpen ? 1 : 0,
                          display: isOpen ? "block" : "none",
                        }}
                        transition={labelTransition}
                        className="overflow-hidden whitespace-nowrap text-sm"
                      >
                        Light
                      </motion.div>
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
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
