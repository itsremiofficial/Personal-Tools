export function generateLocalKeywords(name: string): string[] {
  const words = name
    .replace(/([A-Z])/g, ' $1')
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean);
  return [...new Set(words)];
}

export const extractWordsFromFileName = (fileName: string): string[] => {
  return fileName
    .replace(/\.svg$/i, "")
    .split(/[^a-zA-Z0-9]+/)
    .filter((word) => word.length > 0);
};
