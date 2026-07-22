import { IconConverter, IconsList } from "./lazyComponents";
import ErrorPage from "@/Pages/ErrorPage";

const errorElement = <ErrorPage />;

const routes = [
  {
    path: "/",
    element: <IconsList />,
    errorElement,
    layout: "dash",
  },
  {
    path: "/icon-converter",
    element: <IconConverter />,
    errorElement,
    layout: "dash",
  },
  {
    path: "*",
    element: <ErrorPage />,
    layout: "dash",
  },
];

export { routes };
