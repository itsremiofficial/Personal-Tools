import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/routes";
import TrayProvider from "./components/contextProvider/TrayProvider";
// Fix the import path to match the correct casing

// or if using the configured alias
// import { TrayProvider } from "@components/ContextProvider/TrayProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <TrayProvider>
      <RouterProvider router={router} />
    </TrayProvider>
  </React.StrictMode>
);
