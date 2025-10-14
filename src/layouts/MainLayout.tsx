import Sidebar from "./Sidebar";
import { useEffect, useState, useCallback, PropsWithChildren } from "react";
import PreLoader from "@/components/PreLoader";

const MainLayout = ({ children }: PropsWithChildren) => {
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
          {children}
        </main>
      )}
    </div>
  );
};

MainLayout.displayName = "MainLayout";

export default MainLayout;
