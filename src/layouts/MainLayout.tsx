import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { memo, useEffect, useState } from "react";
import PreLoader from "@/components/PreLoader";

const MainLayout = memo(() => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if the document is already loaded
    if (document.readyState === "complete") {
      setIsLoading(false);
    } else {
      const handleLoad = () => {
        // Add a small delay to ensure smooth transition
        setTimeout(() => setIsLoading(false), 300);
      };

      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <div className="flex relative">
      {isLoading && <PreLoader />}
      <Sidebar />
      <main className="main-content flex flex-col min-h-screen ml-auto">
        <Outlet />
      </main>
    </div>
  );
});

MainLayout.displayName = "MainLayout";

export default MainLayout;
