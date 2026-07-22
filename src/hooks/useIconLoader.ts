import { useState, useCallback, useEffect, useRef } from "react";
import { loadAllIcons as loadAllIconsFromRegistry } from "@/components/icons";
import { searchIcons, loadSearchIndex } from "@/lib/aiSearch";

export const useIconLoader = (searchQuery: string) => {
  const [filteredIcons, setFilteredIcons] = useState<IconMetadata[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [totalIcons, setTotalIcons] = useState(0);
  const [searchResults, setSearchResults] = useState<Set<string> | null>(null);
  const cachedIcons = useRef<IconMetadata[]>([]);
  const nameVersionMap = useRef<Map<string, string>>(new Map());

  const loadAllIconModules = useCallback(async () => {
    if (cachedIcons.current.length > 0) return cachedIcons.current;
    try {
      cachedIcons.current = await loadAllIconsFromRegistry();
      setTotalIcons(cachedIcons.current.length);
      for (const icon of cachedIcons.current) {
        nameVersionMap.current.set(icon.name, icon.version);
      }
      return cachedIcons.current;
    } catch (error) {
      console.error("Failed to load icon modules:", error);
      return [];
    }
  }, []);

  const filterIcons = useCallback(
    async (query: string) => {
      setIsSearching(true);
      const allIcons = await loadAllIconModules();
      let filtered = allIcons;
      if (query) {
        try {
          const results = await searchIcons(query);
          const scoreMap = new Map(results.map(r => [`${r.name}-${r.version}`, r.score]));
          const matchedNames = new Set(scoreMap.keys());
          setSearchResults(matchedNames);
          filtered = allIcons
            .filter(icon => matchedNames.has(`${icon.name}-${icon.version}`))
            .sort((a, b) => (scoreMap.get(`${b.name}-${b.version}`) || 0) - (scoreMap.get(`${a.name}-${a.version}`) || 0));
        } catch {
          const searchTerms = query.toLowerCase().split(/\s+/).filter(Boolean);
          filtered = allIcons.filter(icon => {
            const searchableText = [
              icon.name.toLowerCase(),
              ...(icon.keywords?.map(k => k.toLowerCase()) || []),
            ].join(' ');
            return searchTerms.every(term => {
              const sanitizedTerm = term.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
              return new RegExp(sanitizedTerm, 'i').test(searchableText);
            });
          });
        }
      } else {
        setSearchResults(null);
      }
      setFilteredIcons(filtered);
      setTimeout(() => setIsSearching(false), 200);
    },
    [loadAllIconModules]
  );

  useEffect(() => {
    setIsLoading(true);
    filterIcons(searchQuery).finally(() => setIsLoading(false));
  }, [searchQuery, filterIcons]);

  useEffect(() => {
    loadSearchIndex().catch(() => {});
  }, []);

  const reloadIcons = useCallback(() => {
    setIsLoading(true);
    filterIcons(searchQuery).finally(() => setIsLoading(false));
  }, [filterIcons, searchQuery]);

  return { filteredIcons, isLoading, isSearching, reloadIcons, totalIcons };
};
