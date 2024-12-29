import { useCallback, useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Logo from "../components/Logo";
import { cn } from "../lib/utils";
import { ArrowRight01Icon, Moon02Icon, Sun01Icon } from "hugeicons-react";
import IconPalette from "../components/Icon/Palette";
import { IconProps } from "../types/types";
import IconLayers from "../components/Icon/IconLayers";
import IconMoon from "../components/Icon/IconMoon";
import IconSun from "../components/Icon/IconSun";

const Sidebar = () => {
  const [isDark, setDark] = useState(() => {
    const savedMode = localStorage.getItem("isDark");
    return savedMode ? JSON.parse(savedMode) : true;
  });

  useEffect(() => {
    localStorage.setItem("isDark", JSON.stringify(isDark));
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const toggleDark = useCallback(() => {
    setDark((prevMode: boolean) => !prevMode);
  }, []);

  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  const location = useLocation();

  const navItems = [
    { path: "/", label: "Icon Generator", icon: IconLayers },
    {
      path: "/color-palette-generator",
      label: "Color Generator",
      icon: IconPalette,
    },
  ];

  return (
    <div
      className={cn(
        "group/sidebar sidebar relative z-[999]",
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
              <div>
                <Logo
                  className={cn(
                    "!transition-[width] duration-700 h-fit",
                    "text-icu-700 w-14 py-7",
                    isOpen && "w-full py-10.5"
                  )}
                  fill={isOpen}
                />
              </div>
              <ul
                className={cn(
                  "flex flex-col items-center justify-center mt-4 perfect-scrollbar px-4 w-full gap-3"
                )}
              >
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  const IconComponent = item.icon as React.FC<IconProps>;
                  return (
                    <Link
                      to={item.path}
                      key={item.path}
                      className={cn(
                        "p-4 w-full overflow-hidden rounded-2xl tracking-wide font-semibold flex items-center gap-3",
                        "transition-colors duration-300 group/link",
                        "text-icu-800 hover:text-icu-900",
                        "bg-icu-200 hover:bg-icu-400/60",
                        "dark:text-icu-700 dark:hover:text-icu-100",
                        "dark:bg-icu-800/40 dark:hover:bg-icu-800",
                        !isOpen && "!items-center",
                        isActive &&
                          "bg-icu-400/60 text-icu-900 dark:bg-icu-800 dark:text-icu-300"
                      )}
                    >
                      <IconComponent
                        fill={isActive}
                        className="size-6 !aspect-square"
                      />
                      <span
                        className={cn(
                          "hidden opacity-0 transition-opacity duration-1000 ease-fluid whitespace-nowrap",
                          isOpen && "opacity-100 inline-flex"
                        )}
                      >
                        {item.label}
                      </span>

                      <div
                        className={cn(
                          "absolute left-full z-[100] opacity-0 translate-x-5 p-2 group-hover/link:translate-x-0 group-hover/link:opacity-100 transition-all duration-300 ease-fluid"
                        )}
                      >
                        <span
                          className={cn(
                            "whitespace-nowrap p-2 rounded-xl",
                            "dark:bg-icu-1000 dark:text-icu-600/80"
                          )}
                        >
                          {item.label}
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </ul>
            </div>

            {/* BOTTOM SECTION */}
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
                <div
                  className={`flex flex-wrap w-full gap-2
                  transition-transform duration-700`}
                >
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
                        `form-radiobtn px-3 py-3 gap-1`,
                        isOpen && `px-5 gap-1`
                      )}
                    >
                      <IconMoon
                        fill={isDark}
                        className={`!h-fit transform-[width] duration-500 ease-fluid  ${
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
                        `form-radiobtn px-3 py-3 gap-1`,
                        isOpen && `px-5 gap-1`
                      )}
                    >
                      <IconSun
                        fill={!isDark}
                        className={`!h-fit transform-[width] duration-500 ease-fluid  ${
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

export default Sidebar;
