import { fetchKeywordsInBatches } from "./keywordUtils";

const extractComponentWords = (name: string): string[] => {
  // Extract words from camelCase/PascalCase and numbers
  const words =
    name
      .match(/[A-Z][a-z]+|\d+[a-z]*|[a-z]+/g)
      ?.map((word) => word.toLowerCase()) || [];
  return [...new Set(words)];
};

const generateComponentTemplate = (
  name: string,
  lineDuotoneSvg: string,
  boldDuotoneSvg: string,
  boldSvg: string,
  keywords: string[],
  includeKeywords: boolean = false
): string => {
  const interfaceDeclaration = !includeKeywords
    ? `
interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}
`
    : "";

  const baseTemplate = `import { FC } from 'react';
${interfaceDeclaration}
const Icon${name}: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        ${lineDuotoneSvg}
      ) : duotone ? (
        ${boldDuotoneSvg}
      ) : (
        ${boldSvg}
      )}
    </>
  );
};`;

  if (includeKeywords) {
    return `${baseTemplate}

// Keywords for search and categorization
(Icon${name} as IconComponent).keywords = ${JSON.stringify(keywords, null, 2)};

export default Icon${name} as IconComponent;`;
  }

  return `${baseTemplate}

export default Icon${name};`;
};

export const generateComponentCode = async (
  name: string,
  lineDuotoneSvg: string,
  boldDuotoneSvg: string,
  boldSvg: string,
  includeKeywords: boolean = false
): Promise<GeneratedResult> => {
  try {
    if (!name) {
      throw new Error("Component name is required");
    }

    if (!lineDuotoneSvg || !boldDuotoneSvg || !boldSvg) {
      throw new Error("All SVG variants are required");
    }

    // Validate SVG content
    const validateSvg = (svg: string, type: string) => {
      if (!svg.includes("<svg") || !svg.includes("</svg>")) {
        throw new Error(`Invalid ${type} SVG content`);
      }
    };

    validateSvg(lineDuotoneSvg, "Line Duotone");
    validateSvg(boldDuotoneSvg, "Bold Duotone");
    validateSvg(boldSvg, "Bold");

    const defaultName = name || "UnknownIcon";
    const fileName = `Icon${defaultName}.tsx`;

    const words = includeKeywords ? extractComponentWords(name) : [];
    const keywordSets = includeKeywords
      ? await fetchKeywordsInBatches(words)
      : [];
    const keywords = includeKeywords
      ? [...words, ...keywordSets.flat()].filter(
          (word, index, array) => array.indexOf(word) === index
        )
      : [];

    const output = generateComponentTemplate(
      name,
      lineDuotoneSvg,
      boldDuotoneSvg,
      boldSvg,
      keywords,
      includeKeywords
    );

    return {
      fileName,
      output,
      success: true,
      name: defaultName,
    };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";

    console.error(`Error generating component ${name}:`, errorMessage);

    return {
      fileName: `Icon${name}.tsx`,
      output: "",
      success: false,
      error: errorMessage,
      name,
    };
  }
};

export const generateComponentCodeSync = (
  name: string,
  lineDuotoneSvg: string,
  boldDuotoneSvg: string,
  boldSvg: string,
  includeKeywords: boolean = false
): GeneratedResult => {
  const defaultName = name || "UnknownIcon";
  const fileName = `Icon${defaultName}.tsx`;

  try {
    const output = generateComponentTemplate(
      name,
      lineDuotoneSvg,
      boldDuotoneSvg,
      boldSvg,
      [],
      includeKeywords
    );

    return {
      fileName: `Icon${name}.tsx`,
      output,
      success: true,
      name,
    };
  } catch (error) {
    return {
      fileName,
      output: "",
      success: false,
      error: error instanceof Error ? error.message : "Unknown error occurred",
      name: defaultName,
    };
  }
};
