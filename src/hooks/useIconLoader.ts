import { useState, useCallback, useEffect, useRef } from "react";
import { VIRTUALIZATION_CONFIG } from "@/constants/virtualization";

export const useIconLoader = (searchQuery: string) => {
  const [loadedIcons, setLoadedIcons] = useState<IconMetadata[]>([]);
  const [filteredIcons, setFilteredIcons] = useState<IconMetadata[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [totalIcons, setTotalIcons] = useState(0);
  const cachedIcons = useRef<IconMetadata[]>([]);
  const abortController = useRef<AbortController>();

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

  useEffect(() => {
    abortController.current?.abort();
    abortController.current = new AbortController();
    const { signal } = abortController.current;

    const filterIcons = async () => {
      if (signal.aborted) return;
      setIsSearching(true);

      try {
        const allIcons = await loadAllIconModules();
        if (signal.aborted) return;

        const filtered = searchQuery
          ? allIcons.filter(icon => {
              const searchTerms = searchQuery.toLowerCase().split(/\s+/).filter(Boolean);
              const searchableText = [
                icon.name.toLowerCase(),
                ...(icon.keywords?.map(k => k.toLowerCase()) || []),
                // Add more searchable fields here if needed
              ].join(' ');

              // Match if all search terms are found in any searchable text
              return searchTerms.every(term => {
                // Allow for partial matches and handle special characters
                const sanitizedTerm = term.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
                return new RegExp(sanitizedTerm, 'i').test(searchableText);
              });
            })
          : allIcons;

        setFilteredIcons(filtered);
        setLoadedIcons(filtered.slice(0, VIRTUALIZATION_CONFIG.INITIAL_CHUNK_SIZE));
      } finally {
        !signal.aborted && setTimeout(() => setIsSearching(false), 300);
      }
    };

    filterIcons();
    return () => abortController.current?.abort();
  }, [searchQuery, loadAllIconModules]);

  // Simplified loadIconChunk
  const loadIconChunk = useCallback((start: number, end: number, prepend = false) => {
    if (start >= filteredIcons.length) return;
    const chunk = filteredIcons.slice(start, end);
    setLoadedIcons(current => prepend ? [...chunk, ...current] : [...current, ...chunk]);
  }, [filteredIcons]);

  return { loadedIcons, filteredIcons, isLoading, isSearching, loadIconChunk, totalIcons };
};
