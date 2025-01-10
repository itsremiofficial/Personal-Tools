import { useState, useCallback, useRef } from "react";

interface ModuleCache {
  module: IconModule;
  length: number;
}

export interface UseIconLoaderReturn {
  loadedIcons: IconMetadata[];
  isLoading: boolean;
  loadIconChunk: (
    start: number,
    end: number,
    prepend?: boolean
  ) => Promise<void>;
  preloadRange: (start: number, end: number) => Promise<void>;
  totalIcons: number;
}

export const useIconLoader = () => {
  const [loadedIcons, setLoadedIcons] = useState<IconMetadata[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const iconCache = useRef<Map<number, IconMetadata>>(new Map());
  const moduleCache = useRef<Record<string, ModuleCache>>({});
  const totalIconsRef = useRef(0);

  const loadModules = useCallback(async () => {
    if (moduleCache.current.v1) return moduleCache.current;

    const [v1, v2] = (await Promise.all([
      import("@/components/icons/version01"),
      import("@/components/icons/version02"),
    ])) as [IconModule, IconModule];

    moduleCache.current = {
      v1: { module: v1, length: Object.keys(v1).length },
      v2: { module: v2, length: Object.keys(v2).length },
    };

    totalIconsRef.current = Object.keys(v1).length + Object.keys(v2).length;

    return moduleCache.current;
  }, []);

  const loadIconsRange = useCallback(
    async (indices: number[], modules: typeof moduleCache.current) => {
      const { v1, v2 } = modules;
      const v1Length = v1.length;

      return indices
        .map((i) => {
          if (iconCache.current.has(i)) return iconCache.current.get(i)!;

          const isV1 = i < v1Length;
          const mod = isV1 ? v1 : v2;
          const idx = isV1 ? i : i - v1Length;
          const entries = Object.entries(mod.module);

          if (idx >= entries.length) return null;

          const [name, Icon] = entries[idx];
          const icon: IconMetadata = {
            name,
            Icon: Icon as IconComponent,
            keywords: (Icon as IconComponent).keywords || [],
            version: isV1 ? "v1" : "v2",
          };

          iconCache.current.set(i, icon);
          return icon;
        })
        .filter((icon): icon is IconMetadata => icon !== null);
    },
    []
  );

  const ensureIconsLoaded = useCallback(
    async (startIndex: number, endIndex: number, prepend = false) => {
      if (startIndex < 0) return;

      const missingIndices = Array.from({ length: endIndex - startIndex })
        .map((_, i) => startIndex + i)
        .filter((i) => !iconCache.current.has(i));

      if (!missingIndices.length) return;

      setIsLoading(true);
      try {
        const modules = await loadModules();
        const newIcons = await loadIconsRange(missingIndices, modules);

        if (newIcons.length) {
          setLoadedIcons((prev) =>
            prepend ? [...newIcons, ...prev] : [...prev, ...newIcons]
          );
        }
      } finally {
        setIsLoading(false);
      }
    },
    [loadModules, loadIconsRange]
  );

  const preloadRange = useCallback(
    (start: number, end: number) => {
      if (!isLoading) return ensureIconsLoaded(start, end, false);
      return Promise.resolve();
    },
    [ensureIconsLoaded, isLoading]
  );

  return {
    loadedIcons,
    isLoading,
    loadIconChunk: ensureIconsLoaded,
    preloadRange,
    totalIcons: totalIconsRef.current,
  };
};
