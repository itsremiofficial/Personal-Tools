import { createHashRouter } from "react-router-dom";
import App from "../App";
import MainLayout from "../layouts/MainLayout";
import IconConverter from "../Pages/IconConverter";
import ColorPalette from "../Pages/ColorPalette";
import IconsList from "../Pages/Icons";

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
        element: <IconConverter />,
      },
      {
        path: "color-palette-generator",
        element: <ColorPalette />,
      },
      {
        path: "icons",
        element: <IconsList />,
      },
    ],
  },
]);

export default router;
