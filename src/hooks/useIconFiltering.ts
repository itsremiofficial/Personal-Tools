import { useMemo } from "react";

export const useIconFiltering = (
  icons: IconMetadata[],
  searchQuery: string
) => {
  return useMemo(() => {
    if (!searchQuery.trim()) return icons;

    const searchTerms = searchQuery
      .toLowerCase()
      .split(/[,\s]+/) // Split by commas or whitespace
      .filter(Boolean)
      .map((term) => term.trim());

    if (!searchTerms.length) return icons;

    const searchCache = new Map<string, boolean>();

    return icons.filter(({ name, keywords = [] }) => {
      const cacheKey = `${name}-${searchQuery}`;
      if (searchCache.has(cacheKey)) {
        return searchCache.get(cacheKey);
      }

      // Create a searchable text from all available data
      const searchableContent = [
        name,
        ...keywords,
        name.replace(/([A-Z])/g, " $1").trim(), // Split camelCase
        name.replace(/Icon/g, ""), // Remove "Icon" suffix
      ]
        .join(" ")
        .toLowerCase();

      // Check if all search terms match somewhere in the searchable content
      const matches = searchTerms.every((term) => {
        // Support exact matches with quotes
        if (term.startsWith('"') && term.endsWith('"')) {
          const exactTerm = term.slice(1, -1);
          return searchableContent.includes(exactTerm);
        }
        // Regular partial matching
        return searchableContent.includes(term);
      });

      searchCache.set(cacheKey, matches);
      return matches;
    });
  }, [searchQuery, icons]);
};
