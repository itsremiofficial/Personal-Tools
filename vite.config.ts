import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { resolve } from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tsconfigPaths(), tailwindcss()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@components": resolve(__dirname, "./src/components"),
      "@common": resolve(__dirname, "./src/components/common"),
      "@icons": resolve(__dirname, "./src/components/icons"),
      "@pages": resolve(__dirname, "./src/pages"),
      "@utils": resolve(__dirname, "./src/utils"),
      "@hooks": resolve(__dirname, "./src/hooks"),
      "@types": resolve(__dirname, "./src/types"),
      "@ui": resolve(__dirname, "./src/components/ui"),
      "@components/ContextProvider": resolve(__dirname, "./src/components/ContextProvider"), // Ensure exact casing
    },
  },
  base: "/Personal-Tools/",
  build: {
    sourcemap: true,
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE') return;
        warn(warning);
      },
    },
  },
});
