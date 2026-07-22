const generateComponentTemplate = (
  name: string,
  lineDuotoneSvg: string,
  boldDuotoneSvg: string,
  boldSvg: string,
): string => {
  const interfaceDeclaration = `
interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}
`;

  return `import { FC } from 'react';
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
};

export default Icon${name};`;
};

export const generateComponentCode = (
  name: string,
  lineDuotoneSvg: string,
  boldDuotoneSvg: string,
  boldSvg: string,
): GeneratedResult => {
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

    const output = generateComponentTemplate(
      name,
      lineDuotoneSvg,
      boldDuotoneSvg,
      boldSvg,
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
): GeneratedResult => {
  return generateComponentCode(
    name,
    lineDuotoneSvg,
    boldDuotoneSvg,
    boldSvg,
  );
};
