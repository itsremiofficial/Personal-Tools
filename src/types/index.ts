import { FileHandlerType } from "@/hooks/useFileHandler";
import { FC, ReactNode } from "react";
import { FileRejection } from "react-dropzone";

export interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
  keywords?: string[];
}

// Add new type for Icon components
export type IconComponentType = FC<IconProps> & {
  keywords: string[];
};

export interface SmoothCornerProps {
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

export interface GeneratedResult {
  fileName: string;
  output: string; // Simplified to just string
  success: boolean;
  error?: string;
  name: string;
}

export interface IconConverterState {
  outputs: string[]; // Simplified to string array
  logs: string[];
  error: string | null;
  missingFiles: {
    lineDuotone: string[];
    boldDuotone: string[];
    bold: string[];
  };
}

export interface ResultsSectionProps {
  outputs: string[];
  logs: string[];
  error: string | null;
  names: string[];
  onClear: () => void;
  disabled?: boolean;
  missingFiles: {
    lineDuotone: string[];
    boldDuotone: string[];
    bold: string[];
  };
}

export interface DownloadState {
  status: "idle" | "zipping" | "downloading" | "complete";
  progress: number;
}

export interface GenerateButtonProps {
  onClick: () => void;
  disabled: boolean;
  loading?: boolean;
  progress?: number;
}

export interface FileListProps extends Omit<FileHandlerType, "handleRejected"> {
  type: "lineDuotone" | "boldDuotone" | "bold"; // Update valid types
  disabled?: boolean;
  onClear: () => void;
}

export interface FileItemProps {
  file: File;
  onRemove: () => void;
  disabled?: boolean;
}

export interface FileDropzoneProps {
  onDrop: (files: File[]) => void;
  onReject: (rejections: FileRejection[]) => void;
  label: string;
  accept: Record<string, string[]>;
  disabled?: boolean;
  className?: string;
}

export interface ColorCodeBlockProps {
  variants: ColorVariant[];
  colorFormat: "hex" | "rgb" | "oklch";
  colorName: string;
  className: string;
  variableName: string;
}

export interface ToggleSwitchProps {
  label: string;
  icon?: ReactNode;
  pressed: boolean;
  onPressedChange: (pressed: boolean) => void;
  size?: "sm" | "default" | "lg";
  disabled?: boolean;
}
