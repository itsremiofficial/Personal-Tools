interface FileSet {
  name: string;
  lineDuotoneIndex: number;
  boldDuotoneIndex: number;
  boldIndex: number;
}

interface ValidationResult {
  matchedSets: FileSet[];
  unmatched: {
    lineDuotone: string[];
    boldDuotone: string[];
    bold: string[];
  };
}

export const validateFiles = (
  lineDuotoneNames: string[],
  boldDuotoneNames: string[],
  boldNames: string[]
): ValidationResult => {
  const normalizeFileName = (name: string) =>
    name.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Create maps with both normalized and original names
  const lineDuotoneMap = new Map(
    lineDuotoneNames.map(name => [normalizeFileName(name), name])
  );
  const boldDuotoneMap = new Map(
    boldDuotoneNames.map(name => [normalizeFileName(name), name])
  );
  const boldMap = new Map(
    boldNames.map(name => [normalizeFileName(name), name])
  );

  // First find complete matches (files that exist in all three types)
  const completeMatches = new Set(
    Array.from(lineDuotoneMap.keys())
      .filter(normalizedName => 
        boldDuotoneMap.has(normalizedName) && 
        boldMap.has(normalizedName)
      )
  );

  // Create matchedSets for component generation
  const matchedSets = Array.from(completeMatches).map(normalizedName => ({
    name: lineDuotoneMap.get(normalizedName)!,
    lineDuotoneIndex: lineDuotoneNames.findIndex(n => normalizeFileName(n) === normalizedName),
    boldDuotoneIndex: boldDuotoneNames.findIndex(n => normalizeFileName(n) === normalizedName),
    boldIndex: boldNames.findIndex(n => normalizeFileName(n) === normalizedName),
  }));

  // Get all unique file names across all types
  const allNames = new Set([
    ...lineDuotoneMap.keys(),
    ...boldDuotoneMap.keys(),
    ...boldMap.keys()
  ]);

  // Find missing files for each type (files that exist in other types but not in this one)
  const unmatched = {
    lineDuotone: Array.from(allNames)
      .filter(normalizedName => 
        !lineDuotoneMap.has(normalizedName) && 
        (boldDuotoneMap.has(normalizedName) || boldMap.has(normalizedName))
      )
      .map(normalizedName => 
        boldDuotoneMap.get(normalizedName) || 
        boldMap.get(normalizedName) || 
        normalizedName
      ),

    boldDuotone: Array.from(allNames)
      .filter(normalizedName => 
        !boldDuotoneMap.has(normalizedName) && 
        (lineDuotoneMap.has(normalizedName) || boldMap.has(normalizedName))
      )
      .map(normalizedName => 
        lineDuotoneMap.get(normalizedName) || 
        boldMap.get(normalizedName) || 
        normalizedName
      ),

    bold: Array.from(allNames)
      .filter(normalizedName => 
        !boldMap.has(normalizedName) && 
        (lineDuotoneMap.has(normalizedName) || boldDuotoneMap.has(normalizedName))
      )
      .map(normalizedName => 
        lineDuotoneMap.get(normalizedName) || 
        boldDuotoneMap.get(normalizedName) || 
        normalizedName
      ),
  };

  return { matchedSets, unmatched };
};
