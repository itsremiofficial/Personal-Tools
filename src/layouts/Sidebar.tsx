import { useMemo, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavItem } from "@/components/NavItem";
import { useSidebar } from "@/hooks/useSidebar";
import {
  IconAltArrowLeft,
  IconHamburgerMenu,
  IconMagicStick3,
  IconMoon,
  IconSun,
} from "@/components/icons/version01";
import { cn } from "@/lib";
import { EASE_OUT } from "@/lib/ease";
import { useTheme } from "@/hooks/useTheme";
import { Button, Logo } from "@/components";
import { motion, AnimatePresence } from "motion/react";
import { IconLayer, IconSidebarLeft } from "@/components/icons/version02";
import { Tabs, TabsList, TabsTrigger } from "@/components";

const Sidebar = () => {
  const { isDark, setDark } = useTheme();
  const { isOpen, mobileOpen, toggleSidebar, closeMobile } = useSidebar();
  const location = useLocation();

  const navItems = useMemo(
    () => [
      { path: "/", label: "Icons", icon: IconLayer },
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
      if (location.pathname === path) return true;
      if (path === "/" && location.pathname === "/icons") return true;
      return location.hash === `#${path}`;
    },
    [location],
  );

  const renderNav = (expanded: boolean) => (
    <nav
      className={cn(
        "h-full transition-[width] duration-700 ease-fluid bg-background border-r border-border",
        "shadow-sm",
        expanded ? "w-[240px]" : "w-18",
      )}
    >
      <Button
        onClick={toggleSidebar}
        size="icon"
        className={cn(
          "hidden md:flex absolute -right-3.5 top-16 rounded-full size-7 bg-background hover:bg-muted p-0! text-muted-foreground/70 transition-transform duration-700",
          expanded ? "" : "-rotate-180",
        )}
        aria-label="Toggle sidebar"
      >
        <IconAltArrowLeft
          className="size-4 mr-0.5"
          width={2.3}
          duotone={false}
        />
      </Button>
      <div className="relative h-full flex flex-col">
        <div className="h-20 flex justify-center items-center border-b border-border">
          <Link
            to="/"
            onClick={closeMobile}
            className={cn(
              "flex items-center gap-2 text-primary px-5 w-full",
              "transition-[width] duration-700 ease-fluid",
            )}
          >
            <Logo
              className={cn("transition-all duration-700 ease-fluid h-8!")}
              fill
            />
            <motion.span
              initial={false}
              animate={expanded ? "visible" : "hidden"}
              variants={{
                visible: {
                  display: "inline-flex",
                  transition: { delay: 0.35, staggerChildren: 0.06 },
                },
                hidden: {
                  display: "none",
                  transition: { staggerChildren: 0.03, staggerDirection: -1 },
                },
              }}
              className="text-4xl font-extrabold overflow-hidden inline-flex tracking-widest"
            >
              {"REMI".split("").map((char, i) => (
                <motion.span
                  key={i}
                  variants={{
                    visible: { opacity: 1, x: 0, filter: "blur(0px)" },
                    hidden: { opacity: 0, x: -6, filter: "blur(3px)" },
                  }}
                  transition={{ duration: 1, ease: EASE_OUT }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.span>
          </Link>
        </div>
        <div className="grow flex flex-col">
          <div className="flex flex-col items-center gap-6 w-full pt-6">
            <ul className="flex flex-col w-full gap-2 px-3 overflow-y-auto">
              <div className="flex items-center gap-2 px-2 text-[11px] font-medium uppercase tracking-widest text-sidebar-foreground/50">
                Menu
              </div>
              {navItems.map((item) => (
                <NavItem
                  key={item.path}
                  {...item}
                  isActive={getIsActive(item.path)}
                  isOpen={expanded}
                />
              ))}
            </ul>
          </div>

          <motion.div
            animate={{
              // width: expanded ? "auto" : 0,
              opacity: expanded ? 1 : 0,
            }}
            transition={{
              duration: 0.5,
              ease: EASE_OUT,
              delay: expanded ? 0.35 : 0,
            }}
            className="mt-auto px-2 pb-2 w-full! overflow-hidden whitespace-nowrap"
          >
            <div className="mb-2">
              <motion.div
                animate={{
                  // width: expanded ? "auto" : 0,
                  opacity: expanded ? 1 : 0,
                }}
                transition={{
                  duration: 0.5,
                  ease: EASE_OUT,
                  delay: expanded ? 0.35 : 0,
                }}
                className="flex items-center gap-2 px-2 mb-2 text-[11px] font-medium uppercase tracking-widest text-sidebar-foreground/50 overflow-hidden whitespace-nowrap"
              >
                Theme
              </motion.div>
              <Tabs
                value={isDark ? "dark" : "light"}
                onValueChange={(v) => setDark(v === "dark")}
                variant="pill"
                className="w-full bg-none"
              >
                <TabsList className="border border-border justify-between w-full p-1">
                  <TabsTrigger
                    value="dark"
                    indicatorClassName="bg-sidebar-primary/15 rounded-md"
                    className={`text-foreground ${expanded ? "px-5 py-3.5 gap-1.5" : "px-1.5"}`}
                  >
                    <IconMoon fill={isDark} className="size-5 shrink-0" />
                    <motion.div
                      initial={false}
                      animate={{
                        // width: expanded ? "auto" : 0,
                        opacity: expanded ? 1 : 0,
                      }}
                      transition={{ duration: 0.35, ease: EASE_OUT }}
                      className="overflow-hidden whitespace-nowrap text-sm"
                    >
                      Dark
                    </motion.div>
                  </TabsTrigger>
                  <TabsTrigger
                    value="light"
                    indicatorClassName="bg-sidebar-primary/15 rounded-md"
                    className={`text-foreground ${expanded ? "px-5 py-3.5 gap-1.5" : "px-1.5"}`}
                  >
                    <IconSun fill={!isDark} className="w-5 h-5 shrink-0" />
                    <motion.div
                      initial={false}
                      animate={{
                        // width: expanded ? "auto" : 0,
                        opacity: expanded ? 1 : 0,
                      }}
                      transition={{ duration: 0.35, ease: EASE_OUT }}
                      className="overflow-hidden whitespace-nowrap text-sm"
                    >
                      Light
                    </motion.div>
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </motion.div>
        </div>
      </div>
    </nav>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside
        className={cn(
          "group/sidebar sidebar relative z-50 h-screen",
          "max-md:hidden",
        )}
      >
        {renderNav(isOpen)}
      </aside>

      {/* Mobile sidebar overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-background/60 backdrop-blur-sm md:hidden"
              onClick={closeMobile}
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className={cn(
                "group/sidebar sidebar fixed top-0 left-0 z-50 h-screen",
                "md:hidden",
              )}
            >
              {renderNav(true)}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

Sidebar.displayName = "Sidebar";

export default Sidebar;
