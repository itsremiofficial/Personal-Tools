/**
 * Sanitizes file names for icon components by:
 * 1. Removing 'icon' prefix/suffix if present
 * 2. Removing 'svg' extension
 * 3. Converting to PascalCase
 * 4. Removing special characters
 */
export const sanitizeFileName = (fileName: string): string => {
  try {
    // Safety check
    if (!fileName) return "UnknownIcon";

    const name = fileName
      // Remove extension
      .replace(/\.svg$/i, "")
      // Split on special characters
      .split(/[-_.\s]+/)
      // Remove empty parts and 'icon'
      .filter((part) => part && part.toLowerCase() !== "icon")
      // Process each part
      .map((part, index) => {
        // Handle numbers
        if (/^\d+$/.test(part)) {
          return part;
        }
        // Capitalize first letter, lowercase rest
        return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
      })
      .join("");

    return name ? `${name}` : "UnknownIcon";
  } catch (error) {
    console.error("Error sanitizing filename:", fileName, error);
    return "UnknownIcon";
  }
};

// Test cases:
// console.log(sanitizeFileName('icon-home.svg')); // -> "HomeIcon"
// console.log(sanitizeFileName('arrow-right-2.svg')); // -> "ArrowRight2Icon"
// console.log(sanitizeFileName('01-home.svg')); // -> "01HomeIcon"
// console.log(sanitizeFileName('check_circle_01.svg')); // -> "CheckCircle01Icon"
