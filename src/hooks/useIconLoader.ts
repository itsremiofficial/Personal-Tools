import { useState, useCallback, useEffect, useRef } from "react";

export const useIconLoader = (searchQuery: string) => {
  const [filteredIcons, setFilteredIcons] = useState<IconMetadata[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [totalIcons, setTotalIcons] = useState(0);
  const cachedIcons = useRef<IconMetadata[]>([]);

  const loadAllIconModules = useCallback(async () => {
    if (cachedIcons.current.length > 0) return cachedIcons.current;
    try {
      const modules = await Promise.all([
        import("@/components/icons/version01"),
        import("@/components/icons/version02"),
      ]);

      cachedIcons.current = modules.flatMap((module, index) =>
        Object.entries(module).map(([name, Icon]) => ({
          name,
          Icon: Icon as IconComponent,
          keywords: (Icon as IconComponent).keywords || [],
          version: `v${index + 1}`,
        }))
      );

      setTotalIcons(cachedIcons.current.length);
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
      setFilteredIcons(filtered);
      setTimeout(() => setIsSearching(false), 200);
    },
    [loadAllIconModules]
  );

  useEffect(() => {
    setIsLoading(true);
    filterIcons(searchQuery).finally(() => setIsLoading(false));
  }, [searchQuery, filterIcons]);

  const reloadIcons = useCallback(() => {
    setIsLoading(true);
    filterIcons(searchQuery).finally(() => setIsLoading(false));
  }, [filterIcons, searchQuery]);

  return { filteredIcons, isLoading, isSearching, reloadIcons, totalIcons };
};
