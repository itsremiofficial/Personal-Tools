import React from "react";
import { ColorDot } from "./ColorDot";
import { CopyNotification } from "./CopyNotification";
import IconCopy from "./IconCopy";
import { cn } from "../../hooks/formatSvgCode.ts";
import { ColorVariant } from "../../types";

interface ColorVariantButtonProps {
  variant: ColorVariant;
  isCopied: boolean;
  onClick: () => void;
  displayValue: string;
}

export const ColorVariantButton: React.FC<ColorVariantButtonProps> = ({
  variant,
  isCopied,
  onClick,
  displayValue,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center cursor-pointer py-3 pl-3 pr-12 transition-colors duration-300 rounded-xl w-full relative text-secondary group ",
        "bg-icu-200 hover:bg-icu-300",
        "text-icu-800 hover:text-icu-1000",
        "dark:bg-icu-900 dark:hover:bg-icu-800/60",
        "dark:text-icu-500 dark:hover:text-icu-400"
      )}
    >
      <ColorDot color={variant.hex} />
      <div className="flex flex-col items-start">
        <span className="whitespace-nowrap text-sm font-medium">
          {variant.label.toLowerCase().replace(/\s+/g, "-")}
        </span>
        <IconCopy className="absolute top-1/2 right-2 transform -translate-y-1/2 text-icu-500 group-hover:text-icu-700 dark:text-icu-800 dark:group-hover:text-icu-600 size-5 transition-colors duration-300" />
        <span className=" transition-colors duration-300 text-xs text-icu-500 group-hover:text-icu-700 dark:text-icu-700/60 group-hover:dark:text-icu-600 font-mono whitespace-nowrap">
          {displayValue}
        </span>
      </div>
      <CopyNotification show={isCopied} />
    </button>
  );
};
