import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { SidebarProvider } from "@/hooks/useSidebar";
import { PageHeaderProvider } from "@/hooks/usePageHeader";
import { Header } from "@/components/common/Header";
import Sidebar from "./Sidebar";

const PageSkeleton = () => (
  <div className="p-4 sm:p-6 space-y-6">
    <div className="flex items-center gap-3">
      <div className="h-9 w-48 rounded-lg bg-muted animate-pulse" />
      <div className="h-6 w-16 rounded-full bg-muted animate-pulse" />
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-3 sm:gap-4">
      {Array.from({ length: 16 }).map((_, i) => (
        <div
          key={i}
          className="aspect-square rounded-xl bg-muted animate-pulse"
        />
      ))}
    </div>
  </div>
);

const MainLayout = () => {
  return (
    <SidebarProvider>
      <PageHeaderProvider>
        <div className="h-screen md:grid md:grid-cols-[auto_1fr] overflow-hidden">
          <Sidebar />
          <div className="flex flex-col min-w-0 overflow-hidden max-md:h-full">
            <Header />
            <main className="flex-1 overflow-auto">
              <Suspense fallback={<PageSkeleton />}>
                <Outlet />
              </Suspense>
            </main>
          </div>
        </div>
      </PageHeaderProvider>
    </SidebarProvider>
  );
};

MainLayout.displayName = "MainLayout";

export default MainLayout;
