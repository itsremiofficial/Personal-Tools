import React, { useMemo, useCallback } from "react";
import { useLocation } from "react-router-dom";
import Logo from "../components/Logo";
import { ArrowRight01Icon } from "hugeicons-react";
import IconPalette from "../components/Icon/Palette";
import { IconLayers, IconMoon, IconSun } from "../components/Icon";
import { useTheme } from "../hooks/useTheme";
import { useSidebar } from "../hooks/useSidebar";
import { NavItem } from "../components/NavItem";
import { cn } from "../hooks/formatSvgCode";

const Sidebar = () => {
  const { isDark, setDark } = useTheme();
  const { isOpen, isDelayedClosed, toggleSidebar } = useSidebar();
  const location = useLocation();

  const navItems = useMemo(
    () => [
      { path: "/", label: "Icon Generator", icon: IconLayers },
      {
        path: "/color-palette-generator",
        label: "Color Generator",
        icon: IconPalette,
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

  return (
    <div
      className={cn(
        "group/sidebar sidebar relative z-[999]",
        !isOpen && isDelayedClosed && "sidebar_opened"
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
            "border-[1.5px] !relative",
            "border-icu-300 bg-icu-100",
            "dark:border-icu-800/70 dark:bg-icu-1000/40",
            "h-full rounded-3xl flex flex-col backdrop-blur-3xl"
          )}
        >
          <div
            className={cn(
              "absolute -right-4 top-10 w-max h-max cursor-pointer p-1 z-100",
              "backdrop-blur-3xl rounded-lg border",
              "transition-colors duration-300",
              "text-icu-600 hover:text-icu-700",
              "border-icu-300 bg-icu-100 hover:bg-icu-200/60",
              "dark:text-icu-700 dark:hover:text-icu-700",
              "dark:border-icu-800/70 dark:bg-icu-1000/40 dark:hover:bg-icu-1000/70"
            )}
            onClick={toggleSidebar}
          >
            <ArrowRight01Icon
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
              <Logo
                className={cn(
                  "!transition-[width] duration-700 h-fit",
                  "text-icu-700 w-14 py-7",
                  isOpen && "w-20"
                )}
                fill
              />

              <ul
                className={cn(
                  "relative flex flex-col items-center justify-center mt-4 perfect-scrollbar px-4 w-full gap-3"
                )}
              >
                {navItems.map((item) => (
                  <NavItem
                    key={item.path}
                    {...item}
                    isActive={getIsActive(item.path)}
                    isOpen={isOpen}
                    isDelayedClosed={isDelayedClosed}
                  />
                ))}
              </ul>
            </div>

            {/* Theme Toggle Section */}
            <div className="w-full p-2">
              <div className="w-full flex flex-col items-center dark:border-icu-600/25 border border-icu-200 rounded-2xl p-2 pt-4">
                <span
                  className={cn(
                    "uppercase text-xs mb-2 font-medium dark:text-icu-600 text-center",
                    isOpen && "self-start ml-2"
                  )}
                >
                  Theme Toggle
                </span>
                <div className="flex flex-wrap w-full gap-2 transition-transform duration-700">
                  {/* Dark Mode Toggle */}
                  <span className="grow">
                    <input
                      className="peer hidden"
                      type="radio"
                      value="dark"
                      name="theme"
                      checked={isDark}
                      onChange={() => setDark(true)}
                      id="dark-mode"
                    />
                    <label
                      htmlFor="dark-mode"
                      className={cn(
                        "form-radiobtn px-3 py-3 gap-1",
                        isOpen && "px-5 gap-1"
                      )}
                    >
                      <IconMoon
                        fill={isDark}
                        className={`!h-fit transform-[width] duration-500 ease-fluid ${
                          isOpen ? "w-5" : "w-6"
                        }`}
                      />
                      <span
                        className={cn(
                          "text-[0px] transition-[font-size] duration-500 ease-fluid",
                          isOpen && "text-sm"
                        )}
                      >
                        Dark
                      </span>
                    </label>
                  </span>

                  {/* Light Mode Toggle */}
                  <span className="grow">
                    <input
                      className="peer hidden"
                      type="radio"
                      value="light"
                      name="theme"
                      checked={!isDark}
                      onChange={() => setDark(false)}
                      id="light-mode"
                    />
                    <label
                      htmlFor="light-mode"
                      className={cn(
                        "form-radiobtn px-3 py-3 gap-1",
                        isOpen && "px-5 gap-1"
                      )}
                    >
                      <IconSun
                        fill={!isDark}
                        className={`!h-fit transform-[width] duration-500 ease-fluid ${
                          isOpen ? "w-5" : "w-6"
                        }`}
                      />
                      <span
                        className={cn(
                          "text-[0px] transition-[font-size] duration-500 ease-fluid",
                          isOpen && "text-sm"
                        )}
                      >
                        Light
                      </span>
                    </label>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default React.memo(Sidebar);
