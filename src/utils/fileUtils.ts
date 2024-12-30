/**
 * Sanitizes file names for icon components by:
 * 1. Removing 'icon' prefix/suffix if present
 * 2. Removing 'svg' extension
 * 3. Converting to PascalCase
 * 4. Removing special characters
 */
export const sanitizeFileName = (fileName: string): string => {
  return (
    fileName
      // Remove file extension
      .replace(/\.svg$/i, "")
      // Remove 'icon' prefix or suffix (case insensitive)
      .replace(/^icon|icon$/i, "")
      // Replace special characters with spaces
      .replace(/[^a-zA-Z0-9]/g, " ")
      // Split into words
      .split(" ")
      // Filter out empty strings and 'svg'
      .filter((word) => word && word.toLowerCase() !== "svg")
      // Convert to PascalCase
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join("")
  );
};
