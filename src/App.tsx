import { PropsWithChildren } from "react";

function App({ children }: PropsWithChildren) {
  return (
    <div className="antialiased relative">
      {children}
    </div>
  );
}

export default App;
