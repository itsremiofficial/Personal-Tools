import { useEffect, useState } from "react";
import IconConverter from "./components/iconConverter";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <main className="min-h-screen p-4 md:p-8">
      <div className="flex justify-end mb-4">
        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 border rounded-md focus:outline-none"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
      <IconConverter />
    </main>
  );
}

export default App;
