import { ColorPalette, IconConverter, IconsList } from "./lazyComponents";

const routes = [
  {
    path: "/",
    element: <IconsList />,
    layout: "dash",
  },
  {
    path: "/icons",
    element: <IconsList />,
    layout: "dash",
  },
  {
    path: "/icon-converter",
    element: <IconConverter />,
    layout: "dash",
  },
  {
    path: "/color-palette-generator",
    element: <ColorPalette />,
    layout: "dash",
  },
];

export { routes };
