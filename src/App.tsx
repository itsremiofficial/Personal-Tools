import { PropsWithChildren } from "react";
import { Toaster } from "sonner";

function App({ children }: PropsWithChildren) {
  return (
    <div className="antialiased relative">
      {/* <BackgroundGradientAnimation
        interactive={false}
        className="!absolute !z-[-2]"
        containerClassName="!absolute !z-[-2] h-full w-full"
      /> */}
      <div className="relative !z-2">
        {children}
        <Toaster
          toastOptions={{ className: "my-toast" }}
          position="top-center"
          richColors
        />
      </div>
    </div>
  );
}

export default App;
