export const sanitizeFileName = (fileName: string): string => {
  // Remove any special characters and convert to camelCase
  return fileName
    .replace(/[^a-zA-Z0-9]/g, ' ')
    .split(' ')
    .map((word, index) => 
      index === 0 
        ? word.toLowerCase() 
        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join('');
};
