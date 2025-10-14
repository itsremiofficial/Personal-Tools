import { Outlet } from "react-router-dom";
import { memo, useEffect, useState } from "react";
import PreLoader from "@/components/PreLoader";

const ComingSoonLayout = memo(() => {
  const [isLoading, setIsLoading] = useState(true);

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

  return (
    <div className="flex relative">
      {isLoading && <PreLoader />}
      {!isLoading && (
        <main className="flex flex-col h-screen w-screen ml-auto">
          <Outlet />
        </main>
      )}
    </div>
  );
});

ComingSoonLayout.displayName = "ComingSoonLayout";

export default ComingSoonLayout;
