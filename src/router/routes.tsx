// // routes.tsx
// import React from "react";
// import { RouteObject, createBrowserRouter } from "react-router-dom";
// import MainLayout from "../layouts/MainLayout";
// import ComingSoonLayout from "@/layouts/ComingSoonLayout";
// import {
//   ColorPalette,
//   ComingSoon,
//   IconConverter,
//   IconsList,
// } from "./lazyComponents";

// const routes: RouteObject[] = [
//   {
//     path: "/",
//     element: <ComingSoonLayout />,
//     children: [
//       {
//         index: true,
//         element: <ComingSoon />,
//       },
//     ],
//   },
//   {
//     path: "/tools",
//     element: <MainLayout />,
//     children: [
//       {
//         path: "icons",
//         element: <IconsList />,
//       },
//       {
//         path: "icon-converter",
//         element: <IconConverter />,
//       },
//       {
//         path: "color-palette-generator",
//         element: <ColorPalette />,
//       },
//     ],
//   },
// ];

// // createBrowserRouter(routes) returns a Router instance — pass that to RouterProvider.
// export const router = createBrowserRouter(routes);
// export default routes;

import {
  ColorPalette,
  ComingSoon,
  IconConverter,
  IconsList,
} from "./lazyComponents";

const routes = [
  // dashboard
  {
    path: "/",
    element: <ComingSoon />,
    layout: "site",
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
