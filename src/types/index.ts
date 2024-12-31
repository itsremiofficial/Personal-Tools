import { FileHandlerType } from "@/hooks/useFileHandler";
import { FileRejection } from "react-dropzone";

export interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

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
  name: string;
  success: boolean;
  output?: string;
  error?: string;
}

export interface IconConverterState {
  outputs: string[];
  logs: string[];
  error: string | null;
  missingFiles?: {
    stroke: string[];
    duotone: string[];
  };
}

export interface ResultsSectionProps {
  outputs: string[];
  logs: string[];
  error: string | null;
  names: string[];
  onClear: () => void;
  disabled?: boolean; // Add disabled prop
  missingFiles?: {
    stroke: string[];
    duotone: string[];
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
  type: "stroke" | "duotone";
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
  onReject: (rejections: FileRejection[]) => void; // Update type to match handler
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
