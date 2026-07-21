import { TrayProvider } from "@/components/context/TrayProvider";
import { ToastContainer } from "./components/ToastContainer";
import PreLoader from "./components/PreLoader";
import "@/index.css";

import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import router from "./router";
import ErrorPage from "@/Pages/ErrorPage";

const root = createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <ErrorBoundary fallback={<ErrorPage />}>
      <TrayProvider>
        <ToastContainer />
        <Suspense fallback={<PreLoader />}>
          <RouterProvider router={router} />
        </Suspense>
      </TrayProvider>
    </ErrorBoundary>
  </React.StrictMode>,
);
