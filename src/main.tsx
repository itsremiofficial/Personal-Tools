import React from "react";
import ReactDOM from "react-dom/client";

// Tailwind css
import "./index.css";
// Router
import { RouterProvider } from "react-router-dom";
import router from "./router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
