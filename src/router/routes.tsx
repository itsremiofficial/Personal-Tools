import { lazy } from "react";
import ColorPalette from "../Pages/ColorPalette";
const ReactIconGenerator = lazy(() => import("../Pages/ReactIconGeneretor"));

const routes = [
  // dashboard
  {
    path: "/",
    element: <ReactIconGenerator />,
    layout: "dash",
  },
  {
    path: "/color-palette-generator",
    element: <ColorPalette />,
    layout: "dash",
  },
  // {
  //   path: "*",
  //   element: <ERROR404 />,
  //   layout: "dash",
  // },
];

export { routes };
