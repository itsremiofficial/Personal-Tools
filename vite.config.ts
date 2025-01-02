import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { resolve } from "path";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import fs from "fs/promises";

const iconDownloadPlugin = (): Plugin => ({
  name: "icon-download",
  configureServer(server) {
    server.middlewares.use(async (req, res, next) => {
      if (!req.url?.startsWith("/api/icons/")) {
        return next();
      }

      try {
        const urlParts = req.url.split("/");
        const iconNameWithQuery = urlParts.pop() || "";
        const iconName = iconNameWithQuery.split("?")[0];
        const queryVersion =
          new URLSearchParams(iconNameWithQuery.split("?")[1]).get("version") ||
          "v1";

        // Convert version format
        const version = queryVersion.replace(
          /^v(\d+)$/,
          (_, num) => `version${num.padStart(2, "0")}`
        );

        if (!iconName) {
          res.statusCode = 400;
          res.end("Icon name required");
          return;
        }

        const rootDir = server.config.root || process.cwd();
        const filePath = path.resolve(
          rootDir,
          "src",
          "components",
          "icon",
          version,
          `${iconName}.tsx`
        );

        const relativePath = path.relative(rootDir, filePath);
        if (relativePath.startsWith("..") || !relativePath.startsWith("src")) {
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
    });
  },
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
            /^@\/components\/icon\/v\d+\/.+/,
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
      "@icon": resolve(__dirname, "./src/components/icon"),
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
  server: {
    fs: {
      strict: false,
      allow: [".."],
    },
  },
});
