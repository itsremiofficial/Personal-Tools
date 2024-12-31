import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.css";
import { RouterProvider } from "react-router-dom";
import TrayProvider from "@/components/contextProvider/TrayProvider";
import router from "./router/routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <TrayProvider>
      <RouterProvider router={router} />
    </TrayProvider>
  </React.StrictMode>
);
