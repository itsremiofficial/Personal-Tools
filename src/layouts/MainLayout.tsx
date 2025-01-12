import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { memo, useEffect, useState, useCallback } from "react";
import PreLoader from "@/components/PreLoader";

const MainLayout = memo(() => {
  const [isLoading, setIsLoading] = useState(true);
  const [isSidebarReady, setIsSidebarReady] = useState(false);

  useEffect(() => {
    if (document.readyState === "complete") {
      setIsLoading(false);
    } else {
      const handleLoad = () => {
        setTimeout(() => setIsLoading(false), 300);
      };

      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  const sidebarRef = useCallback((node: HTMLElement | null) => {
    if (node) {
      setIsSidebarReady(true);
    }
  }, []);

  return (
    <div className="flex relative">
      {isLoading && <PreLoader />}
      <Sidebar ref={sidebarRef} />
      {isSidebarReady && (
        <main className="main-content flex flex-col min-h-screen ml-auto">
          <Outlet />
        </main>
      )}
    </div>
  );
});

MainLayout.displayName = "MainLayout";

export default MainLayout;
