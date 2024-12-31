import { GeneratedResult, IconComponentType } from "../types";
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
  strokeSvg: string,
  duotoneSvg: string,
  keywords: string[],
  iconPropsPath: string
): string => {
  return `import { FC } from 'react';
import { IconProps, IconComponentType } from "${iconPropsPath}";

const Icon${name}: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        ${strokeSvg}
      ) : (
        ${duotoneSvg}
      )}
    </>
  );
};

// Keywords for search and categorization
(Icon${name} as IconComponentType).keywords = ${JSON.stringify(
    keywords,
    null,
    2
  )};

export default Icon${name} as IconComponentType;`;
};

export const generateComponentCode = async (
  name: string,
  strokeSvg: string,
  duotoneSvg: string,
  iconPropsPath: string = "../../types"
): Promise<GeneratedResult> => {
  const defaultName = name || "UnknownIcon";
  const fileName = `Icon${defaultName}.tsx`;

  if (!name) {
    return {
      fileName,
      output: "",
      success: false,
      error: "Component name is required",
      name: defaultName,
    };
  }

  try {
    const words = extractComponentWords(name);
    // Use batched keyword fetching
    const keywordSets = await fetchKeywordsInBatches(words);
    const keywords = [...words, ...keywordSets.flat()].filter(
      (word, index, array) => array.indexOf(word) === index
    );

    const output = generateComponentTemplate(
      name,
      strokeSvg,
      duotoneSvg,
      keywords,
      iconPropsPath
    );

    return {
      fileName,
      output,
      success: true,
      name: defaultName,
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

export const generateComponentCodeSync = (
  name: string,
  strokeSvg: string,
  duotoneSvg: string,
  iconPropsPath: string = "../../types"
): GeneratedResult => {
  const defaultName = name || "UnknownIcon";
  const fileName = `Icon${defaultName}.tsx`;

  try {
    const output = `import { FC } from 'react';
import { IconProps } from "${iconPropsPath}";

const Icon${name}: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        ${strokeSvg}
      ) : (
        ${duotoneSvg}
      )}
    </>
  );
};

export default Icon${name};`;

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
