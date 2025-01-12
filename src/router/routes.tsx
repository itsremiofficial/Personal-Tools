import { createHashRouter } from "react-router-dom";
import { lazy } from "react";
import MainLayout from "../layouts/MainLayout";

const IconsList = lazy(() => import("@/Pages/Icons"));
const IconConverter = lazy(() => import("@/Pages/IconConverter"));
const ColorPalette = lazy(() => import("@/Pages/ColorPalette"));

const router = createHashRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <IconsList />,
      },
      {
        path: "icon-converter",
        element: <IconConverter />,
      },
      {
        path: "color-palette-generator",
        element: <ColorPalette />,
      },
    ],
  },
]);

export default router;
