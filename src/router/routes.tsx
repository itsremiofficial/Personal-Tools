import { lazy } from "react";
const ErrorPage = lazy(() => import("../Pages/ErrorPage"));
const ColorPalette = lazy(() => import("../Pages/ColorPalette"));
const IconConverter = lazy(() => import("../Pages/IconConverter"));

const routes = [
  // dashboard
  {
    path: "/",
    element: <IconConverter />,
    layout: "dash",
  },
  {
    path: "/color-palette-generator",
    element: <ColorPalette />,
    layout: "dash",
  },
  {
    path: "*",
    element: <ErrorPage />,
    layout: "dash",
  },
];

export { routes };
