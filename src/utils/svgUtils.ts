const replaceAttributes = (svg: string, isStroke: boolean = false): string => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(svg, "image/svg+xml");
  const svgElement = doc.querySelector("svg");

  if (!svgElement) {
    throw new Error("Invalid SVG");
  }

  // Process the SVG string with all replacements
  let processedSvg = svgElement.outerHTML
    // Replace path attributes
    .replace(/<path[^>]*>/g, (match) => {
      return match
        .replace(/stroke=["'][#a-zA-Z0-9]+["']/g, 'stroke="currentColor"')
        .replace(/fill=["'][#a-zA-Z0-9]+["']/g, 'fill="currentColor"');
    })
    // Replace opacity with dynamic value
    .replace(
      /opacity=["'](.*?)["']/g,
      (_, value) => `opacity={duotone ? '${value}' : '1'}`
    )
    // Convert attribute names to camelCase
    .replace(/stroke-width=["'](.*?)["']/g, "strokeWidth={width}")
    .replace(/fill-rule/g, "fillRule")
    .replace(/clip-rule/g, "clipRule")
    .replace(/stroke-linecap/g, "strokeLinecap")
    .replace(/stroke-linejoin/g, "strokeLinejoin")
    .replace(/stroke-miterlimit/g, "strokeMiterlimit")
    .replace(/stop-color/g, "stopColor")
    .replace(/stop-opacity/g, "stopOpacity")
    .replace(/stroke-dasharray/g, "strokeDasharray")
    .replace(/stroke-dashoffset/g, "strokeDashoffset");

  // Apply stroke/fill based on type
  if (isStroke) {
    processedSvg = processedSvg
      .replace(/fill=["'].*?["']/g, 'fill="none"')
      .replace(/stroke=["'].*?["']/g, 'stroke="currentColor"');
  } else {
    processedSvg = processedSvg
      .replace(/stroke=["'].*?["']/g, '')
      .replace(/fill=["'].*?["']/g, 'fill="currentColor"');
  }

  // Add className prop to svg element
  processedSvg = processedSvg.replace(/<svg/, '<svg className={className}');

  return processedSvg;
};

export default replaceAttributes;
