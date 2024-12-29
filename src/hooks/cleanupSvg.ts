const cleanupSvg = (svgContent: string): string => {
  // Find the start of the <svg tag
  const svgStart = svgContent.indexOf("<svg");
  if (svgStart === -1) return svgContent;

  // Get only the SVG content
  let cleaned = svgContent.slice(svgStart);

  // Remove unnecessary attributes and empty style tags
  cleaned = cleaned
    // Remove empty style attributes
    .replace(/style=""/g, "")
    .replace(/style=''/g, "")
    // Remove style attributes with content
    .replace(/style="[^"]*"/g, "")
    .replace(/style='[^']*'/g, "")
    // Remove enable-background attributes
    .replace(/enable-background="[^"]*"/g, "")
    // Remove xmlns:xlink attributes
    .replace(/xmlns:xlink="[^"]*"/g, "")
    // Remove xml:space attributes
    .replace(/xml:space="[^"]*"/g, "")
    // Remove data-name attributes
    .replace(/data-name="[^"]*"/g, "")
    // Remove id attributes
    .replace(/id="[^"]*"/g, "")
    .replace(/id='[^']*'/g, "")
    // Remove empty style blocks
    .replace(/<style[^>]*>[\s\S]*?<\/style>/g, "")
    // Remove XML comments
    .replace(/<!--[\s\S]*?-->/g, "")
    // Remove xmlns attributes except the main one
    .replace(
      /xmlns="http:\/\/www.w3.org\/2000\/svg"([^>]*?)xmlns="[^"]*"/g,
      'xmlns="http://www.w3.org/2000/svg"$1'
    )
    // Clean up multiple spaces
    .replace(/\s+/g, " ")
    // Clean up spaces between tags
    .replace(/>\s+</g, "><")
    // Remove empty newlines
    .replace(/^\s*[\r\n]/gm, "")
    // Clean up self-closing tags
    .replace(/(\s*)\/>/g, " />");

  return cleaned;
};

export default cleanupSvg;
