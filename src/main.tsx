import { TrayProvider } from "@/components/context/TrayProvider";
import { ToastContainer } from "./components/toast-container";
import PreLoader from "./components/PreLoader";
import "@/index.css";

// const root = document.getElementById("root");
// if (!root) throw new Error("Root element not found");

// ReactDOM.createRoot(root).render(
//   <React.StrictMode>
//     <TrayProvider>
//       <Suspense fallback={<PreLoader />}>
//         <ToastContainer />
//         <RouterProvider router={router} />
//       </Suspense>
//     </TrayProvider>
//   </React.StrictMode>
// );

import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/routes";

const root = createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <TrayProvider>
      <Suspense fallback={<PreLoader />}>
        <ToastContainer />
        <RouterProvider router={router} />
      </Suspense>
    </TrayProvider>
  </React.StrictMode>
);
