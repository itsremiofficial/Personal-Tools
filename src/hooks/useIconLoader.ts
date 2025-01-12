import { useState, useCallback, useEffect, useRef } from "react";
import { VIRTUALIZATION_CONFIG } from "@/constants/virtualization";

export const useIconLoader = (searchQuery: string) => {
  const [loadedIcons, setLoadedIcons] = useState<IconMetadata[]>([]);
  const [filteredIcons, setFilteredIcons] = useState<IconMetadata[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [totalIcons, setTotalIcons] = useState(0);
  const searchTimeout = useRef<NodeJS.Timeout>();
  const cachedIcons = useRef<IconMetadata[]>([]);

  // Load and cache all icon modules
  const loadAllIconModules = useCallback(async () => {
    try {
      if (cachedIcons.current.length > 0) {
        return cachedIcons.current;
      }

      const [v1Module, v2Module] = await Promise.all([
        import("@/components/icons/version01"),
        import("@/components/icons/version02"),
      ]);

      const allIcons: IconMetadata[] = [
        ...Object.entries(v1Module).map(([name, Icon]) => ({
          name,
          Icon: Icon as IconComponent,
          keywords: (Icon as IconComponent).keywords || [],
          version: "v1",
        })),
        ...Object.entries(v2Module).map(([name, Icon]) => ({
          name,
          Icon: Icon as IconComponent,
          keywords: (Icon as IconComponent).keywords || [],
          version: "v2",
        })),
      ];

      cachedIcons.current = allIcons;
      setTotalIcons(allIcons.length);
      return allIcons;
    } catch (error) {
      console.error("Failed to load icon modules:", error);
      return [];
    }
  }, []);

  // Update filtering logic
  useEffect(() => {
    let isActive = true;
    const filterIcons = async () => {
      if (!isActive) return;
      setIsSearching(true);

      try {
        const allIcons = await loadAllIconModules();
        if (!isActive) return;

        const filtered = searchQuery
          ? allIcons.filter(
              (icon) =>
                icon.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                icon.keywords?.some((keyword) =>
                  keyword.toLowerCase().includes(searchQuery.toLowerCase())
                )
            )
          : allIcons;

        setFilteredIcons(filtered);
        setLoadedIcons(filtered.slice(0, VIRTUALIZATION_CONFIG.INITIAL_CHUNK_SIZE));
      } finally {
        setTimeout(() => {
          if (isActive) {
            setIsSearching(false);
          }
        }, 300);
      }
    };

    filterIcons();
    return () => {
      isActive = false;
    };
  }, [searchQuery, loadAllIconModules]);

  const loadIconChunk = useCallback(
    async (start: number, end: number, prepend = false) => {
      if (start >= filteredIcons.length) return;

      setIsLoading(true);
      try {
        const chunk = filteredIcons.slice(start, end);
        setLoadedIcons((current) =>
          prepend ? [...chunk, ...current] : [...current, ...chunk]
        );
      } finally {
        setIsLoading(false);
      }
    },
    [filteredIcons]
  );

  const preloadRange = useCallback(async (start: number, end: number) => {
    // Optional: Implement preloading logic if needed
    return Promise.resolve();
  }, []);

  return {
    loadedIcons,
    filteredIcons,
    isLoading,
    isSearching,
    loadIconChunk,
    preloadRange,
    totalIcons,
  };
};
