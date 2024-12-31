export const sanitizeFileName = (fileName: string): string => {
  try {
    // Safety check
    if (!fileName) return "UnknownIcon";

    const name = fileName
      // Remove extension
      .replace(/\.svg$/i, "")
      // Capitalize letter after any non-alphanumeric character
      .replace(/[^a-zA-Z0-9]([a-zA-Z])/g, (_, char) => char.toUpperCase())
      // Remove all non-alphanumeric characters
      .replace(/[^a-zA-Z0-9]/g, "")
      // Ensure first letter is capitalized
      .replace(/^[a-z]/, (char) => char.toUpperCase());

    return name ? `${name}` : "UnknownIcon";
  } catch (error) {
    console.error("Error sanitizing filename:", fileName, error);
    return "UnknownIcon";
  }
};
