import { PropsWithChildren } from "react";
import { Toaster } from "sonner";

function App({ children }: PropsWithChildren) {
  return (
    <div className="antialiased relative">
      {children}
      <Toaster position="top-right" />
    </div>
  );
}

export default App;
