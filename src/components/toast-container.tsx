import { Toaster } from "sonner";
import { useTheme } from "@/hooks/useTheme";

/**
 * ToastContainer component that integrates with the app's theme system
 */
export const ToastContainer = () => {
  const { isDark } = useTheme();

  return (
    <Toaster
      theme={isDark ? "light" : "dark"}
      richColors
      expand={false}
      position="top-center"
      visibleToasts={1}
      toastOptions={{
        className: "my-toast",
        duration: 40000,
      }}
    />
  );
};
