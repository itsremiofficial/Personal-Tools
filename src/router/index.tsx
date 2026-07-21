import { createBrowserRouter } from "react-router-dom";
import { routes } from "./routes";
import MainLayout from "@/layouts/MainLayout";

const finalRoutes = routes.map((route) => {
  const { errorElement: ee, ...rest } = route;
  return {
    ...rest,
    element: <MainLayout>{route.element}</MainLayout>,
    ...(ee ? { errorElement: <MainLayout>{ee}</MainLayout> } : {}),
  };
});

const router = createBrowserRouter(finalRoutes, {
  basename: import.meta.env.VITE_BASE_URL || "/Personal-Tools/",
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
