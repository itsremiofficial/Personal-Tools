import { readdir, readFile, writeFile, stat } from "fs";
import { join, resolve, dirname, extname } from "path";
import { fileURLToPath } from "url";
import prettier from "prettier";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const folderPath = resolve(__dirname, "../src/components/icons/"); // Change this to your folder path

async function formatCodeInFiles(directoryPath) {
  readdir(directoryPath, (err, files) => {
    if (err) {
      console.error("Error reading the directory", err);
      return;
    }

    files.forEach((file) => {
      const filePath = join(directoryPath, file);

      stat(filePath, (err, stats) => {
        if (err) {
          console.error("Error reading the file stats", err);
          return;
        }

        if (stats.isDirectory()) {
          // Recursively format files in subfolders
          formatCodeInFiles(filePath);
        } else if ([".js", ".ts", ".jsx", ".tsx"].includes(extname(filePath))) {
          // Only format JavaScript/TypeScript files
          readFile(filePath, "utf8", async (err, data) => {
            if (err) {
              console.error("Error reading the file", err);
              return;
            }

            try {
              const formatted = await prettier.format(data, {
                filepath: filePath,
              });
              writeFile(filePath, formatted, "utf8", (err) => {
                if (err) {
                  console.error("Error writing the file", err);
                } else {
                  console.log(`Formatted ${filePath}`);
                }
              });
            } catch (formatErr) {
              console.error("Error formatting the file", formatErr);
            }
          });
        }
      });
    });
  });
}

formatCodeInFiles(folderPath);
