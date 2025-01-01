import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { resolve } from "path";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import fs from "fs/promises";
import type { Connect } from "vite";

const iconDownloadPlugin = (): Plugin => ({
  name: "icon-download",
  configureServer(server) {
    server.middlewares.use(async (req, res, next) => {
      if (req.url?.startsWith("/api/icons/")) {
        const iconName = req.url.split("/").pop()?.split("?")[0];
        if (!iconName) {
          res.statusCode = 400;
          res.end("Icon name required");
          return;
        }

        try {
          // Use absolute path resolution
          const rootDir = server.config.root || process.cwd();
          const filePath = path.resolve(
            rootDir,
            "src",
            "components",
            "icons",
            `${iconName}.tsx`
          );

          // Verify the file exists and is within the project
          const relativePath = path.relative(rootDir, filePath);
          if (
            relativePath.startsWith("..") ||
            !relativePath.startsWith("src")
          ) {
            throw new Error("Invalid icon path");
          }

          const content = await fs.readFile(filePath, "utf-8");
          res.setHeader("Content-Type", "text/plain");
          res.setHeader(
            "Content-Disposition",
            `attachment; filename=${iconName}.tsx`
          );
          res.end(content);
        } catch (error) {
          console.error("Icon download error:", error);
          res.statusCode = 404;
          res.end("Icon not found");
        }
        return;
      }
      next();
    });
  },
  // Add build configuration
  config(config) {
    return {
      ...config,
      build: {
        ...config.build,
        rollupOptions: {
          ...config.build?.rollupOptions,
          external: [
            ...(Array.isArray(config.build?.rollupOptions?.external)
              ? config.build.rollupOptions.external
              : []),
            /^@\/components\/icons\/.+/,
          ],
        },
      },
    };
  },
});

export default defineConfig({
  plugins: [react(), tsconfigPaths(), tailwindcss(), iconDownloadPlugin()],
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
      "@components/ContextProvider": resolve(
        __dirname,
        "./src/components/ContextProvider"
      ), // Ensure exact casing
      os: "os-browserify/browser",
    },
  },
  base: "/react-icon-generator/",
  build: {
    sourcemap: true,
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.code === "MODULE_LEVEL_DIRECTIVE") return;
        warn(warning);
      },
    },
  },
  optimizeDeps: {
    include: ["os-browserify/browser"],
  },
  server: {
    fs: {
      strict: false,
      allow: [".."],
    },
  },
});
