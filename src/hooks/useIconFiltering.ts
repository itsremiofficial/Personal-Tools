import { useMemo } from "react";

export const useIconFiltering = (
  icons: IconMetadata[],
  searchQuery: string
) => {
  return useMemo(() => {
    const searchTerms = searchQuery.toLowerCase().split(" ").filter(Boolean);
    if (!searchTerms.length) return icons;

    const searchCache = new Map<string, boolean>();

    return icons.filter(({ name, keywords }) => {
      const cacheKey = `${name}-${searchQuery}`;
      if (searchCache.has(cacheKey)) {
        return searchCache.get(cacheKey);
      }

      const searchString = `${name} ${keywords.join(" ")}`.toLowerCase();
      const matches = searchTerms.every((term) => searchString.includes(term));
      searchCache.set(cacheKey, matches);
      return matches;
    });
  }, [searchQuery, icons]);
};
