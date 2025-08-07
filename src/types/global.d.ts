declare global {
  interface IconProps {
    className?: string;
    fill?: boolean;
    duotone?: boolean;
    width?: string | number;
    keywords?: string[];
  }

  type IconComponent = ComponentType<IconProps> & {
    keywords?: string[];
  };

  type IconStyle = "line" | "bulk" | "bold";

  interface IconMetadata {
    name: string;
    Icon: IconComponent;
    keywords: string[];
    version: string;
  }

  interface SmoothCornerProps {
    className?: string;
    children?: React.ReactNode;
  }

  type ColorFormat = "hex" | "rgb" | "oklch";

  type ColorVariant = {
    value: string;
    label: string;
    hex: string;
    rgb: string;
    oklch: string;
  };

  interface ColorVariantsProps {
    baseColor: string;
    colorName: string;
  }

  interface ColorFormatSelectorProps {
    selectedFormat: ColorFormat;
    onChange: (format: ColorFormat) => void;
  }

  type ViewType = "default" | "forward" | "secret" | "remove";

  interface GeneratedResult {
    fileName: string;
    output: string;
    success: boolean;
    error?: string;
    name: string;
  }

  interface IconConverterState {
    outputs: string[];
    logs: string[];
    error: string | null;
    missingFiles: {
      lineDuotone: string[];
      boldDuotone: string[];
      bold: string[];
    };
  }

  interface ResultsSectionProps {
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

  interface DownloadState {
    status: "idle" | "zipping" | "downloading" | "complete";
    progress: number;
  }

  interface GenerateButtonProps {
    onClick: () => void;
    disabled: boolean;
    loading?: boolean;
    progress?: number;
  }

  interface FileListProps extends Omit<FileHandlerType, "handleRejected"> {
    type: "lineDuotone" | "boldDuotone" | "bold";
    disabled?: boolean;
    onClear: () => void;
  }

  interface FileItemProps {
    file: File;
    onRemove: () => void;
    disabled?: boolean;
  }

  interface FileDropzoneProps {
    onDrop: (files: File[]) => void;
    onReject: (rejections: FileRejection[]) => void;
    label: string;
    accept: Record<string, string[]>;
    disabled?: boolean;
    className?: string;
  }

  interface ColorCodeBlockProps {
    variants: ColorVariant[];
    colorFormat: "hex" | "rgb" | "oklch";
    colorName: string;
    className: string;
    variableName: string;
  }

  interface ToggleSwitchProps {
    className?: string;
    label: string;
    icon?: ReactNode;
    pressed: boolean;
    onPressedChange: (pressed: boolean) => void;
    size?: "sm" | "default" | "lg";
    disabled?: boolean;
  }

  interface IconModule {
    [key: string]: IconComponent;
  }

  interface NavItemProps {
    path: string;
    label: string;
    icon: React.ComponentType<IconProps>;
    isActive: boolean;
    isOpen: boolean;
    isDelayedClosed?: boolean;
  }
  interface Window {
    __smoothCornersLoaded?: boolean;
  }

  interface CustomStyles extends React.CSSProperties {
    "--smooth-corners": string | MotionValue<string>;
  }
}

export {};
