export const replaceAttributes = (
  svg: string,
  isStroke: boolean = false
): string => {
  // Use a single regex pass instead of multiple
  const replacements = {
    "stroke-width": "strokeWidth",
    "fill-rule": "fillRule",
    "clip-rule": "clipRule",
    "clip-path": "clipPath",
    "stroke-linecap": "strokeLinecap",
    "stroke-linejoin": "strokeLinejoin",
    "stroke-miterlimit": "strokeMiterlimit",
    "stop-color": "stopColor",
    "stop-opacity": "stopOpacity",
    "stroke-dasharray": "strokeDasharray",
    "stroke-dashoffset": "strokeDashoffset",
  };

  let processedSvg = svg;

  // Do all replacements in one pass
  processedSvg = processedSvg.replace(
    new RegExp(Object.keys(replacements).join("|"), "g"),
    (matched) => replacements[matched as keyof typeof replacements]
  );

  // Handle fill attributes based on value
  processedSvg = processedSvg.replace(
    /fill=["']([^"']+)["']/g,
    (match, fillValue) => {
      // If fill has a color value (starts with #), replace with currentColor
      if (fillValue.startsWith('#')) {
        return 'fill="currentColor"';
      }
      // Otherwise set to none
      return 'fill="none"';
    }
  );

  // Apply stroke/fill attributes
  if (isStroke) {
    processedSvg = processedSvg.replace(
      /stroke=["'].*?["']/g,
      'stroke="currentColor"'
    );
  } else {
    processedSvg = processedSvg.replace(/stroke=["'].*?["']/g, "");
  }

  // Add React props and replace width
  processedSvg = processedSvg
    .replace(/<svg/, "<svg className={className}")
    .replace(/opacity=["']([^"']+)["']/g, 'opacity={duotone ? "$1" : "1"}')
    .replace(/strokeWidth=["']1\.5["']/g, "strokeWidth={width}");

  return processedSvg;
};
