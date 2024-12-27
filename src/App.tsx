import { useEffect, useState } from "react";
import { Button } from "./components/ui/button";
import { Moon02Icon, Sun03Icon } from "hugeicons-react";
import IconConverter from "./components/IconConverter";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode !== null ? JSON.parse(savedMode) : true;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode: boolean) => !prevMode);
  };

  return (
    <main className="min-h-screen p-4 md:p-8  overflow-hidden">
      <div className="fixed flex justify-end mb-4 right-10 z-50">
        <Button
          onClick={toggleDarkMode}
          size="icon"
          className="!bg-icu-800 hover:!bg-icu-700/70 !text-icu-100 hover:!text-icu-200 dark:!bg-icu-800 dark:hover:!bg-icu-700/70 dark:!text-icu-400 dark:hover:!text-icu-200"
        >
          {darkMode ? <Sun03Icon /> : <Moon02Icon />}
        </Button>
      </div>
      <IconConverter />
    </main>
  );
}

export default App;
