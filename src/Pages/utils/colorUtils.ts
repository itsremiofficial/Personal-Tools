// Color space conversion utilities
const sRGBToLinear = (value: number): number => {
  const v = value / 255;
  return v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
};

const linearToOKLab = (
  r: number,
  g: number,
  b: number
): [number, number, number] => {
  const l = 0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b;
  const m = 0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b;
  const s = 0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b;

  const l_ = Math.cbrt(l);
  const m_ = Math.cbrt(m);
  const s_ = Math.cbrt(s);

  return [
    0.2104542553 * l_ + 0.793617785 * m_ - 0.0040720468 * s_,
    1.9779984951 * l_ - 2.428592205 * m_ + 0.4505937099 * s_,
    0.0259040371 * l_ + 0.7827717662 * m_ - 0.808675766 * s_,
  ];
};

// Add new conversion functions
const sRGBtoLinearRGB = (color: number): number => {
  const c = color / 255;
  return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
};

const linearRGBtoOKLAB = (
  r: number,
  g: number,
  b: number
): [number, number, number] => {
  const l = 0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b;
  const m = 0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b;
  const s = 0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b;

  const l_ = Math.cbrt(l);
  const m_ = Math.cbrt(m);
  const s_ = Math.cbrt(s);

  const L = 0.2104542553 * l_ + 0.793617785 * m_ - 0.0040720468 * s_;
  const a = 1.9779984951 * l_ - 2.428592205 * m_ + 0.4505937099 * s_;
  const b_ = 0.0259040371 * l_ + 0.7827717662 * m_ - 0.808675766 * s_;

  return [L, a, b_];
};

const OKLABtoOKLCH = (
  L: number,
  a: number,
  b: number
): [number, number, number] => {
  const C = Math.sqrt(a * a + b * b);
  let h = (Math.atan2(b, a) * 180) / Math.PI;
  if (h < 0) h += 360;
  return [L, C, h];
};

export const hexToRgb = (hex: string): [number, number, number] | null => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16),
      ]
    : null;
};

export const rgbToHex = (r: number, g: number, b: number): string =>
  `#${[r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("")}`;

export const rgbToString = (r: number, g: number, b: number): string =>
  `rgb(${r}, ${g}, ${b})`;

export const hexToOklch = (hex: string): string => {
  const rgb = hexToRgb(hex);
  if (!rgb) return "";

  // Convert to linear RGB
  const [r, g, b] = rgb.map(sRGBtoLinearRGB);

  // Convert to OKLAB
  const [L, a, b_] = linearRGBtoOKLAB(r, g, b);

  // Convert to OKLCH
  const [okL, okC, okH] = OKLABtoOKLCH(L, a, b_);

  // Scale values
  const scaledL = okL * 100;
  const scaledC = okC;

  return `oklch(${scaledL.toFixed(3)}% ${scaledC.toFixed(3)} ${okH.toFixed(
    3
  )})`;
};

export const adjustOklch = (
  hex: string,
  target: "light" | "dark",
  percentage: number
): string => {
  const rgb = hexToRgb(hex);
  if (!rgb) return hex;

  const [r, g, b] = rgb.map(sRGBtoLinearRGB);
  const [L, a, b_] = linearRGBtoOKLAB(r, g, b);
  const [okL, okC, okH] = OKLABtoOKLCH(L, a, b_);

  // Calculate base values
  const baseLightness = okL * 100;
  const baseChroma = okC;

  // Define fixed ranges for consistent scaling
  const maxLightness = 99.5;
  const minLightness = 0.5;
  const range = maxLightness - minLightness;

  let newL: number;
  let newC: number;

  if (target === "light") {
    // Create even distribution from base to white
    const availableRange = maxLightness - baseLightness;
    newL = baseLightness + (availableRange * percentage);
    
    // Smoothly reduce chroma as it gets lighter
    const chromaFactor = Math.cos((percentage * Math.PI) / 2);
    newC = baseChroma * chromaFactor;
  } else {
    // Create even distribution from base to black
    const availableRange = baseLightness - minLightness;
    newL = baseLightness - (availableRange * percentage);
    
    // Maintain more chroma in darker shades
    const chromaFactor = Math.cos((percentage * Math.PI) / 2.5);
    newC = baseChroma * chromaFactor;
  }

  // Ensure values stay within bounds
  newL = Math.max(minLightness, Math.min(maxLightness, newL));
  newC = Math.max(baseChroma * 0.1, newC); // Maintain minimum chroma

  return `oklch(${newL.toFixed(3)}% ${newC.toFixed(3)} ${okH.toFixed(3)})`;
};

export const adjustRGB = (
  r: number,
  g: number,
  b: number,
  target: "light" | "dark",
  percentage: number
): [number, number, number] => {
  if (target === "light") {
    return [
      Math.round(r + (255 - r) * percentage),
      Math.round(g + (255 - g) * percentage),
      Math.round(b + (255 - b) * percentage),
    ];
  }
  return [
    Math.round(r * (1 - percentage)),
    Math.round(g * (1 - percentage)),
    Math.round(b * (1 - percentage)),
  ];
};
