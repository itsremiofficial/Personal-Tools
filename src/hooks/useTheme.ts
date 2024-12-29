import { useState, useEffect, useCallback } from "react";

export const useTheme = () => {
  const [isDark, setDark] = useState(() => {
    const savedMode = localStorage.getItem("isDark");
    return savedMode ? JSON.parse(savedMode) : true;
  });

  useEffect(() => {
    localStorage.setItem("isDark", JSON.stringify(isDark));
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const toggleTheme = useCallback(() => {
    setDark((prev: boolean) => !prev);
  }, []);

  return { isDark, setDark, toggleTheme };
};
