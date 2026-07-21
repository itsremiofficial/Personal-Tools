const normalizeFileName = (name: string) =>
  name.toLowerCase().replace(/[^a-z0-9]/g, "");

export interface ValidatedSet {
  name: string;
  lineDuotoneIndex: number;
  boldDuotoneIndex: number;
  boldIndex: number;
}

export interface ValidationResult {
  matchedSets: ValidatedSet[];
  unmatched: {
    lineDuotone: string[];
    boldDuotone: string[];
    bold: string[];
  };
}

export const validateFiles = (
  lineDuotoneNames: string[],
  boldDuotoneNames: string[],
  boldNames: string[],
): ValidationResult => {
  const lineDuotoneFiles = new Map(
    lineDuotoneNames.map((name, i) => [
      normalizeFileName(name),
      { name, index: i },
    ]),
  );

  const boldDuotoneFiles = new Map(
    boldDuotoneNames.map((name, i) => [
      normalizeFileName(name),
      { name, index: i },
    ]),
  );

  const boldFiles = new Map(
    boldNames.map((name, i) => [
      normalizeFileName(name),
      { name, index: i },
    ]),
  );

  const matchedSets = Array.from(lineDuotoneFiles.keys())
    .filter((key) => boldDuotoneFiles.has(key) && boldFiles.has(key))
    .map((key) => ({
      name: lineDuotoneFiles.get(key)!.name,
      lineDuotoneIndex: lineDuotoneFiles.get(key)!.index,
      boldDuotoneIndex: boldDuotoneFiles.get(key)!.index,
      boldIndex: boldFiles.get(key)!.index,
    }));

  const missingInBoldDuotone = Array.from(lineDuotoneFiles.keys())
    .filter((key) => !boldDuotoneFiles.has(key))
    .map((key) => lineDuotoneFiles.get(key)!.name);

  const missingInBold = Array.from(boldDuotoneFiles.keys())
    .filter((key) => !boldFiles.has(key))
    .map((key) => boldDuotoneFiles.get(key)!.name);

  return {
    matchedSets,
    unmatched: {
      lineDuotone: missingInBoldDuotone,
      boldDuotone: missingInBold,
      bold: Array.from(boldFiles.keys())
        .filter(
          (key) => !lineDuotoneFiles.has(key) || !boldDuotoneFiles.has(key),
        )
        .map((key) => boldFiles.get(key)!.name),
    },
  };
};
