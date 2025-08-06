import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "@/index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/routes";
import { TrayProvider } from "@/components/context/TrayProvider";
import { ToastContainer } from "./components/toast-container";

const root = document.getElementById("root");
if (!root) throw new Error("Root element not found");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <TrayProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <ToastContainer />
        <RouterProvider router={router} />
      </Suspense>
    </TrayProvider>
  </React.StrictMode>
);
