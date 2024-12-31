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
