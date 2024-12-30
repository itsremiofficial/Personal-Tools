import { PropsWithChildren } from "react";
import { Toaster, ToasterProps } from "sonner";

function App({ children }: PropsWithChildren) {
  return (
    <div className="antialiased relative">
      {children}
      <Toaster
        toastOptions={{ className: "my-toast" }}
        position="top-center"
        richColors
      />
    </div>
  );
}

export default App;
