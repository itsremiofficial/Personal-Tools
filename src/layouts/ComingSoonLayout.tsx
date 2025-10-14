import { PropsWithChildren, useEffect, useState } from "react";
import PreLoader from "@/components/PreLoader";
import App from "@/App";

const ComingSoonLayout = ({ children }: PropsWithChildren) => {
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
    <App>
      <div className="flex relative">
        {isLoading && <PreLoader />}
        {!isLoading && (
          <main className="flex flex-col h-screen w-screen ml-auto">
            {children}
          </main>
        )}
      </div>
    </App>
  );
};

ComingSoonLayout.displayName = "ComingSoonLayout";

export default ComingSoonLayout;
