import MainLayout from "@/layouts/MainLayout";
import ErrorPage from "@/Pages/ErrorPage";
import { IconConverter, IconsList } from "./lazyComponents";

const routes = [
  {
    element: <MainLayout />,
    children: [
      { index: true, element: <IconsList /> },
      { path: "icon-converter", element: <IconConverter /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
];

export { routes };
