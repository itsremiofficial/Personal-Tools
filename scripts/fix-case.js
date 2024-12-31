const fs = require("fs");
const path = require("path");

const componentsDir = path.join(__dirname, "../src/components");

function fixCasing(dir) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      fixCasing(filePath);
    } else {
      const ext = path.extname(file);
      const name = path.basename(file, ext);

      // Convert to PascalCase for components
      if (ext === ".tsx" && /^[a-z]/.test(name)) {
        const pascalCase = name.charAt(0).toUpperCase() + name.slice(1);
        const newPath = path.join(dir, pascalCase + ext);
        fs.renameSync(filePath, newPath);
        console.log(`Renamed: ${file} -> ${pascalCase}${ext}`);
      }
    }
  });
}

fixCasing(componentsDir);
