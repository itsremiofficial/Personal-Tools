// routes.tsx
import React from "react";
import { RouteObject, createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ComingSoonLayout from "@/layouts/ComingSoonLayout";
import {
  ColorPalette,
  ComingSoon,
  IconConverter,
  IconsList,
} from "./lazyComponents";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <ComingSoonLayout />,
    children: [
      {
        index: true,
        element: <ComingSoon />,
      },
    ],
  },
  // {
  //   path: "/tools",
  //   element: <MainLayout />,
  //   children: [
  //     {
  //       element: <IconsList />,
  //     },
  //     {
  //       path: "icon-converter",
  //       element: <IconConverter />,
  //     },
  //     {
  //       path: "color-palette-generator",
  //       element: <ColorPalette />,
  //     },
  //   ],
  // },
];

// createBrowserRouter(routes) returns a Router instance — pass that to RouterProvider.
export const router = createBrowserRouter(routes);
export default routes;
