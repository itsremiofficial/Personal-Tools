import { useState, useEffect, useCallback, useRef } from "react";

export const useTheme = () => {
  const userSet = useRef(localStorage.getItem("isDark") !== null);

  const [isDark, setIsDark] = useState(() => {
    const stored = localStorage.getItem("isDark");
    if (stored !== null) {
      return JSON.parse(stored);
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => {
      if (!userSet.current) {
        setIsDark(e.matches);
      }
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const setDark = useCallback(
    (value: boolean | ((prev: boolean) => boolean)) => {
      userSet.current = true;
      setIsDark((prev) => {
        const next = typeof value === "function" ? value(prev) : value;
        localStorage.setItem("isDark", JSON.stringify(next));
        return next;
      });
    },
    [],
  );

  const toggleTheme = useCallback(() => {
    userSet.current = true;
    setIsDark((prev) => {
      const next = !prev;
      localStorage.setItem("isDark", JSON.stringify(next));
      return next;
    });
  }, []);

  return { isDark, setDark, toggleTheme };
};
