import { lazy } from "react";
import ColorPalette from "../Pages/ColorPalette";
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
  // {
  //   path: "*",
  //   element: <ERROR404 />,
  //   layout: "dash",
  // },
];

export { routes };
