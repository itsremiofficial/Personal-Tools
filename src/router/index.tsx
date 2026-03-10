import { createBrowserRouter } from "react-router-dom";
import { routes } from "./routes";
import MainLayout from "@/layouts/MainLayout";

const finalRoutes = routes.map((route) => {
  return {
    ...route,
    element: <MainLayout>{route.element}</MainLayout>,
  };
});

const router = createBrowserRouter(finalRoutes, {
  basename: "/Personal-Tools/",
  future: {
    v7_skipActionErrorRevalidation: true,
    v7_startTransition: true,
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_partialHydration: true,
    v7_normalizeFormMethod: true,
  },
});

export default router;
