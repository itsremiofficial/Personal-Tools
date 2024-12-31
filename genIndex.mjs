// generateIndex.mjs
import fs from "fs";
import path from "path";

const componentsDir = path.resolve("./src/components/icons");
const outputFile = path.resolve(componentsDir, "_index.tsx");

fs.readdir(componentsDir, (err, files) => {
  if (err) throw err;

  // Filter to only include .tsx files
  const componentImports = files
    .filter((file) => file.endsWith(".tsx"))
    .map((file) => {
      const componentName = path.basename(file, ".tsx");
      return `export { default as Icon${componentName} } from './${componentName}';`;
    })
    .join("\n");

  const outputContent = `export type { IconProps } from "@/types";\n${componentImports}`;

  // Write the imports to the index.ts file
  fs.writeFileSync(outputFile, outputContent, "utf8");
  console.log(`Successfully generated ${outputFile}`);
});
