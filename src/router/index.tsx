import { createBrowserRouter } from "react-router-dom";
import { routes } from "./routes";

const router = createBrowserRouter(routes, {
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
