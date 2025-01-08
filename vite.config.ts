import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { resolve } from "path";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import fs from "fs/promises";

// const iconDownloadPlugin = (): Plugin => ({
//   name: "icon-download",
//   configureServer(server) {
//     server.middlewares.use(async (req, res, next) => {
//       if (!req.url?.startsWith("/api/icons/")) {
//         return next();
//       }

//       try {
//         const urlParts = req.url.split("/");
//         const iconNameWithQuery = urlParts.pop() || "";
//         const iconName = iconNameWithQuery.split("?")[0];
//         const queryVersion =
//           new URLSearchParams(iconNameWithQuery.split("?")[1]).get("version") ||
//           "v1";

//         // Convert version format
//         const version = queryVersion.replace(
//           /^v(\d+)$/,
//           (_, num) => `version${num.padStart(2, "0")}`
//         );

//         if (!iconName) {
//           res.statusCode = 400;
//           res.end("Icon name required");
//           return;
//         }

//         const rootDir = server.config.root || process.cwd();
//         const filePath = path.resolve(
//           rootDir,
//           "src",
//           "components",
//           "icons",
//           version,
//           `${iconName}.tsx`
//         );

//         const relativePath = path.relative(rootDir, filePath);
//         if (relativePath.startsWith("..") || !relativePath.startsWith("src")) {
//           throw new Error("Invalid icon path");
//         }

//         const content = await fs.readFile(filePath, "utf-8");
//         res.setHeader("Content-Type", "text/plain");
//         res.setHeader(
//           "Content-Disposition",
//           `attachment; filename=${iconName}.tsx`
//         );
//         res.end(content);
//       } catch (error) {
//         console.error("Icon download error:", error);
//         res.statusCode = 404;
//         res.end("Icon not found");
//       }
//     });
//   },
//   config(config) {
//     return {
//       ...config,
//       build: {
//         ...config.build,
//         rollupOptions: {
//           ...config.build?.rollupOptions,
//           external: [
//             ...(Array.isArray(config.build?.rollupOptions?.external)
//               ? config.build.rollupOptions.external
//               : []),
//             /^@\/components\/icons\/v\d+\/.+/,
//           ],
//         },
//       },
//     };
//   },
// });

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    tailwindcss(),
    {
      name: "icon-static-build",
      async writeBundle() {
        // Copy icons to public directory during build
        const iconSrcDir = path.resolve(__dirname, "src/components/icons");
        const iconDestDir = path.resolve(__dirname, "public/icons");

        try {
          await fs.mkdir(iconDestDir, { recursive: true });
          await copyIconsRecursively(iconSrcDir, iconDestDir);
        } catch (error) {
          console.error("Error copying icons:", error);
        }
      },
    },
  ],
  base: "/Personal-Tools/",
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

async function copyIconsRecursively(src: string, dest: string) {
  const entries = await fs.readdir(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      await fs.mkdir(destPath, { recursive: true });
      await copyIconsRecursively(srcPath, destPath);
    } else if (entry.name.endsWith(".tsx")) {
      await fs.copyFile(srcPath, destPath);
    }
  }
}
