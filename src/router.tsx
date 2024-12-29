import { createHashRouter } from "react-router-dom";
import App from "./App";
import MainLayout from "./layouts/MainLayout";
import IconConverter from "./Pages/IconConverter";
import ColorPalette from "./Pages/ColorPalette";

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
    ],
  },
]);

export default router;
