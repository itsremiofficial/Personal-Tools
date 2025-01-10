import { PropsWithChildren, Suspense } from "react";
import { Toaster } from "sonner";
import { ErrorBoundary } from "react-error-boundary";

const ErrorFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <p>Something went wrong. Please reload the page.</p>
  </div>
);

function App({ children }: PropsWithChildren) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="antialiased relative">
          <div className="relative">
            {children}
            <Toaster
              toastOptions={{
                className: "my-toast",
                duration: 4000,
              }}
              position="top-center"
              richColors
              closeButton
            />
          </div>
        </div>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
