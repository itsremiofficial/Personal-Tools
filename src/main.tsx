import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/routes";
import { TrayProvider } from "@/components/ContextProvider/TrayProvider"; // Ensure correct casing

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <TrayProvider>
      <RouterProvider router={router} />
    </TrayProvider>
  </React.StrictMode>
);
