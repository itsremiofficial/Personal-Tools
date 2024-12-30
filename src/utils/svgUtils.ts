const replaceAttributes = (svg: string, isStroke: boolean = false): string => {
  // Use a single regex pass instead of multiple
  const replacements = {
    "stroke-width": "strokeWidth",
    "fill-rule": "fillRule",
    "clip-rule": "clipRule",
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

  // Apply stroke/fill attributes
  if (isStroke) {
    processedSvg = processedSvg
      .replace(/fill=["'].*?["']/g, 'fill="none"')
      .replace(/stroke=["'].*?["']/g, 'stroke="currentColor"');
  } else {
    processedSvg = processedSvg
      .replace(/stroke=["'].*?["']/g, "")
      .replace(/fill=["'].*?["']/g, 'fill="currentColor"');
  }

  // Add React props
  processedSvg = processedSvg
    .replace(/<svg/, "<svg className={className}")
    .replace(/opacity=["']([^"']+)["']/g, 'opacity={duotone ? "$1" : "1"}');

  return processedSvg;
};

export default replaceAttributes;
