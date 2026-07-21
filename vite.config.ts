import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import fs from "fs/promises";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      react(),
      tsconfigPaths(),
      tailwindcss(),
      {
        // Copies .tsx source files to public/icons/ so they can be fetched
        // at runtime for download (the raw TSX is not available after bundling).
        // The version directories (version01/, version02/) must match the
        // VERSION_MAP in src/lib/iconUtils.ts.
        name: "icon-static-build",
        async writeBundle() {
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
    base: env.VITE_BASE_URL || "/Personal-Tools/",
    build: {
      outDir: "dist",
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
  };
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
