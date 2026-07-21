import Sidebar from "./Sidebar";
import { Suspense, useEffect, useState, useCallback, PropsWithChildren } from "react";
import PreLoader from "@/components/PreLoader";

const PageSkeleton = () => (
  <div className="p-4 sm:p-6 space-y-6">
    <div className="flex items-center gap-3">
      <div className="h-9 w-48 rounded-lg bg-muted animate-pulse" />
      <div className="h-6 w-16 rounded-full bg-muted animate-pulse" />
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-3 sm:gap-4">
      {Array.from({ length: 16 }).map((_, i) => (
        <div key={i} className="aspect-square rounded-xl bg-muted animate-pulse" />
      ))}
    </div>
  </div>
);

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
        <main className="main-content bg-card/50 rounded-3xl flex flex-col min-h-screen ml-auto">
          <Suspense fallback={<PageSkeleton />}>
            {children}
          </Suspense>
        </main>
      )}
    </div>
  );
};

MainLayout.displayName = "MainLayout";

export default MainLayout;
