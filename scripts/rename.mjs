import { readdir, rename } from "fs/promises";
import { join } from "path";

// Set the directory path
const folderPath = "public/iconns/line_duotone";

// The part of the filename you want to remove
const partToRemove = "Line Duotone_ ";

async function renameFiles() {
  try {
    // Read the directory contents
    const files = await readdir(folderPath);

    // Iterate over each file in the directory
    for (const file of files) {
      // Check if the filename starts with the part to remove
      if (file.startsWith(partToRemove)) {
        // Create the new filename by removing the part to remove from the start
        const newFilename = file.substring(partToRemove.length);
        // Get the full paths
        const oldFile = join(folderPath, file);
        const newFile = join(folderPath, newFilename);

        // Rename the file
        await rename(oldFile, newFile);
        console.log(`Renamed: ${file} -> ${newFilename}`);
      }
    }
    console.log("Renaming completed!");
  } catch (error) {
    console.error("Error renaming files:", error);
  }
}

// Run the function to rename files
renameFiles();
