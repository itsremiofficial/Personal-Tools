export interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

export interface SmoothProps {
  className?: string;
  children?: React.ReactNode;
}

export type ColorFormat = "hex" | "rgb" | "oklch";

export type ColorVariant = {
  value: string;
  label: string;
  hex: string;
  rgb: string;
  oklch: string;
};

export interface ColorVariantsProps {
  baseColor: string;
  colorName: string;
}

export interface ColorFormatSelectorProps {
  selectedFormat: ColorFormat;
  onChange: (format: ColorFormat) => void;
}

export type ViewType = "default" | "forward" | "secret" | "remove";
