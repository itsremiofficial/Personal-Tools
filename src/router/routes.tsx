import { createHashRouter } from "react-router-dom";
import { lazy } from "react";
import App from "../App";
import MainLayout from "../layouts/MainLayout";

const IconsList = lazy(() => import("@/Pages/Icons"));
const IconConverter = lazy(() => import("@/Pages/IconConverter"));
const ColorPalette = lazy(() => import("@/Pages/ColorPalette"));

const router = createHashRouter([
  {
    path: "/",
    element: (
      <App>
        <MainLayout />
      </App>
    ),
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
