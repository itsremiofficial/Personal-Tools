export function formatSvgCode(svg: string, type: "stroke" | "duotone"): string {
  let formatted = svg
    .replace(/class=/g, "className=")
    .replace(/stroke-linecap/g, "strokeLinecap")
    .replace(/stroke-linejoin/g, "strokeLinejoin")
    .replace(/stroke-width/g, "strokeWidth");

  if (type === "stroke") {
    formatted = formatted.replace(
      /stroke="#[A-Za-z0-9]+"/,
      'stroke="currentColor"'
    );
  } else {
    formatted = formatted.replace(
      /fill="#[A-Za-z0-9]+"/,
      'fill="currentColor"'
    );
  }

  return formatted;
}
