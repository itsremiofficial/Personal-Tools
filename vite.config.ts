import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import fs from "fs/promises";

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
  base: "/",
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
