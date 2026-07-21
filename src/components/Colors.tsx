import { cn } from "@/lib";
import React, { useCallback, useMemo, useState } from "react";
import { useClipboard } from "@/hooks/useClipboard";
import { generateColorVariants } from "@/lib/colorVariantsGenerator";
import { isValidHex } from "@/lib/colorUtils";
import { useDebounce } from "@/hooks/useDebounce";
import { Button } from "./common/Button";
import { Card, CardBody } from "./common/Card";
import { IconCheck, IconCopy, IconCopy3, IconPalette } from "./icons/version01";
import { Input } from "./common/Input";

export const ColorCodeBlock: React.FC<ColorCodeBlockProps> = ({
  variants,
  colorName,
  className,
  variableName,
}) => {
  const { copyToClipboard, copied } = useClipboard();

  const formattedVariables = useMemo(() => {
    return variants
      .map((_variant, index) => {
        const colorSuffix = (index + 1) * 100; // For example: 100, 200, 300, etc.
        return `--${variableName}${index + 1}: var(--${colorName
          .toLowerCase()
          .replace(/\s+/g, "-")}-${colorSuffix});`;
      })
      .join("\n");
  }, [variants, colorName, variableName]);

  const handleCopy = () => copyToClipboard(formattedVariables, "Variables");
  const threecircle = variants[9]?.hex;
  const lines = formattedVariables.split("\n");
  const codeBlock = lines
    .map((line, i) => {
      const variant = variants[i];
      return `<pre><span style="background-color: ${variant.hex};"></span><code>${line}</code></pre>`;
    })
    .join("");

  return (
    <div className={`mockup-code relative w-full ${className}`}>
      <div className="relative flex gap-2 px-5 pb-6">
        {Array(3)
          .fill(null)
          .map((_, index) => (
            <span
              key={index}
              className="size-3 rounded-full"
              style={{ backgroundColor: threecircle }}
            ></span>
          ))}
      </div>

      <div
        dangerouslySetInnerHTML={{ __html: codeBlock }}
        className="pr-16 pt-5"
      />

      <button
        onClick={handleCopy}
        className={cn(
          "absolute top-3 right-3 px-3 py-1.5 rounded-xl text-sm flex items-center gap-2 font-medium transition-colors uppercase text-[12px] cursor-pointer",
          "bg-muted/80 hover:bg-muted text-muted-foreground",
        )}
      >
        {copied === "Variables" ? (
          <>
            Copied <IconCheck className="size-4.5" duotone={false} />
          </>
        ) : (
          <>
            Copy <IconCopy className="size-4" />
          </>
        )}
      </button>
    </div>
  );
};

interface ColorDotProps {
  color: string;
}

export const ColorDot: React.FC<ColorDotProps> = ({ color }) => (
  <div
    className="w-8 h-8 rounded-full mr-2"
    style={{ backgroundColor: color }}
  />
);

export const ColorFormatSelector: React.FC<ColorFormatSelectorProps> = ({
  selectedFormat,
  onChange,
}) => {
  const formats: {
    value: ColorFormat;
    label: string;
    notification?: number;
  }[] = [
    { value: "hex", label: "HEX" },
    { value: "rgb", label: "RGB" },
    { value: "oklch", label: "OKLCH" },
  ];

  return (
    <div className="container">
      <div className="tabs flex relative justify-center gap-4">
        {formats.map(({ value, label }, index) => (
          <React.Fragment key={value}>
            <input
              type="radio"
              id={`radio-${value}`}
              name="tabs"
              checked={selectedFormat === value}
              onChange={() => onChange(value)}
              className="hidden peer"
            />
            <label
              htmlFor={`radio-${value}`}
              id={"radio-" + (index + 1)}
              className={cn(
                "text-sm px-10 py-2.5 select-none rounded-xl cursor-pointer flex grow justify-center font-medium relative transition-colors",
                "bg-muted/40 hover:bg-muted text-muted-foreground hover:text-primary",
                selectedFormat === value && "bg-muted text-primary",
              )}
            >
              {label}
              <IconCheck
                duotone={false}
                className={cn(
                  "absolute top-1/2 right-3 bg-foreground/20 text-foreground transform -translate-y-1/2 !transition-opacity !duration-500 rounded-full p-0.5 size-6 opacity-0",
                  selectedFormat === value && "opacity-100",
                )}
              />
            </label>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

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
      aria-label={`Copy color ${variant.label}`}
      className={cn(
        "flex items-center cursor-pointer py-3 pl-3 pr-12 transition-colors duration-300 rounded-2xl w-full relative text-secondary group",
        "bg-muted/50 hover:bg-muted border border-border/70 text-muted-foreground",
      )}
    >
      <ColorDot color={variant.hex} />
      <div className="flex flex-col items-start">
        <span className="whitespace-nowrap text-sm font-medium">
          {variant.label.toLowerCase().replace(/\s+/g, "-")}
        </span>
        <IconCopy className="absolute top-1/2 right-2 transform -translate-y-1/2 text-muted-foreground/50 hover:text-muted-foreground size-5 transition-colors duration-300" />
        <span className=" transition-colors duration-300 text-xs text-muted-foreground/70 font-mono whitespace-nowrap">
          {displayValue}
        </span>
      </div>
      <CopyNotification show={isCopied} />
    </button>
  );
};

const ColorVariants: React.FC<ColorVariantsProps> = ({
  baseColor: initBaseColor,
  colorName: initColorName,
}) => {
  const [baseColorInput, setBaseColorInput] = useState<string>(initBaseColor);
  const [colorNameInput, setColorNameInput] = useState<string>(initColorName);
  const [variableName, setVariableName] = useState<string>("color");
  const [colorFormat, setColorFormat] = useState<ColorFormat>("hex");

  const { copyToClipboard, copied } = useClipboard();

  const debouncedBaseColor = useDebounce(baseColorInput, 300);
  const debouncedColorName = useDebounce(colorNameInput, 300);

  const isBaseColorValid =
    !debouncedBaseColor || isValidHex(debouncedBaseColor);
  const isColorNameValid =
    !debouncedColorName || /^[a-zA-Z\s-]+$/.test(debouncedColorName);

  const colorVariants = useMemo(
    () =>
      generateColorVariants(
        isValidHex(debouncedBaseColor) ? debouncedBaseColor : initBaseColor,
        debouncedColorName.trim() || initColorName,
      ),
    [debouncedBaseColor, debouncedColorName, initBaseColor, initColorName],
  );

  const getColorValue = useCallback(
    (variant: ColorVariant) => {
      switch (colorFormat) {
        case "rgb":
          return variant.rgb;
        case "oklch":
          return variant.oklch;
        default:
          return variant.hex;
      }
    },
    [colorFormat],
  );

  const handleSingleCopy = useCallback(
    (variant: ColorVariant) => {
      const colorValue = getColorValue(variant);
      copyToClipboard(
        `${variant.label.toLowerCase().replace(/\s+/g, "-")}: ${colorValue};`,
        variant.value,
      );
    },
    [getColorValue, copyToClipboard],
  );

  const handleCopyAll = useCallback(() => {
    const colorString = colorVariants
      .map(
        (variant) =>
          `${variant.label.toLowerCase().replace(/\s+/g, "-")}: ${getColorValue(
            variant,
          )};`,
      )
      .join("\n");

    copyToClipboard(colorString, "all");
  }, [colorVariants, getColorValue, copyToClipboard]);

  return (
    <>
      <Card
        className={cn(
          "w-fit flex gap-4 flex-wrap xl:flex-nowrap lg:justify-center",
          "grow",
        )}
      >
        <CardBody className={cn("p-6 w-full flex flex-col gap-4")}>
          <h3 className="text-foreground">For Single Theme</h3>
          <div className="flex gap-4 w-full flex-col">
            <label className="space-y-4 flex flex-col justify-center w-full">
              <div className="flex gap-2 items-start justify-center relative">
                <div className="shrink space-y-1">
                  <Input
                    type="text"
                    placeholder="Colors hex code"
                    value={baseColorInput}
                    onChange={setBaseColorInput}
                    error={
                      debouncedBaseColor && !isBaseColorValid
                        ? "Invalid hex color"
                        : false
                    }
                    success={isBaseColorValid && !!debouncedBaseColor}
                  />
                </div>
                <div className="grow space-y-1">
                  <Input
                    type="text"
                    placeholder="Color Name eg: red or yellow"
                    value={colorNameInput}
                    onChange={setColorNameInput}
                    error={
                      debouncedColorName && !isColorNameValid
                        ? "Only letters, spaces, and hyphens allowed"
                        : false
                    }
                    success={isColorNameValid && !!debouncedColorName}
                  />
                </div>
              </div>
            </label>
            <ColorFormatSelector
              selectedFormat={colorFormat}
              onChange={setColorFormat}
            />
          </div>

          {colorVariants.length > 8 && (
            <ul className="flex flex-col gap-2 py-2">
              <label htmlFor="Given Color" className="text-foreground">
                Given Color
              </label>
              <li key="9">
                <ColorVariantButton
                  variant={colorVariants[8]}
                  isCopied={
                    copied === colorVariants[8].value || copied === "all"
                  }
                  onClick={() => handleSingleCopy(colorVariants[8])}
                  displayValue={getColorValue(colorVariants[8])}
                />
              </li>
            </ul>
          )}

          <div className="flex flex-col gap-2 py-2">
            <div className="flex items-center justify-between">
              <label htmlFor="Color Variants" className="text-foreground">
                Color Variants
              </label>
              <Button
                onClick={handleCopyAll}
                variant={"subtle"}
                size={"sm"}
                className="w-max flex items-center rounded-xl"
              >
                Copy All <IconCopy3 className="size-5" />
              </Button>
            </div>
            <div className="flex gap-4">
              <ul className="grow space-y-2">
                {colorVariants.slice(0, 7).map((variant, index) => (
                  <li key={index}>
                    <ColorVariantButton
                      variant={variant}
                      isCopied={copied === variant.value || copied === "all"}
                      onClick={() => handleSingleCopy(variant)}
                      displayValue={getColorValue(variant)}
                    />
                  </li>
                ))}
              </ul>

              <ul className="grow space-y-2">
                {colorVariants.slice(8, 15).map((variant, index) => (
                  <li key={index + 10}>
                    <ColorVariantButton
                      variant={variant}
                      isCopied={copied === variant.value || copied === "all"}
                      onClick={() => handleSingleCopy(variant)}
                      displayValue={getColorValue(variant)}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardBody>
        <CardBody
          className={cn(
            "w-full p-6 flex flex-col gap-4 border-l border-border/60",
          )}
        >
          <h3 className="text-foreground">For Mutiple Themes</h3>
          <Input
            type="text"
            placeholder="Change Variable Name eg: color or primary"
            value={variableName}
            onChange={setVariableName}
          />
          <ColorCodeBlock
            variants={colorVariants}
            colorFormat={colorFormat}
            colorName={debouncedColorName || initColorName}
            className={`lg:min-w-max lg:w-full text-muted-foreground`}
            variableName={variableName}
          />
        </CardBody>
      </Card>
    </>
  );
};

export default ColorVariants;

interface CopyNotificationProps {
  show: boolean;
}

export const CopyNotification: React.FC<CopyNotificationProps> = ({ show }) => {
  if (!show) return null;

  return (
    <span
      className={cn(
        "absolute text-[9px] leading-none tracking-widest uppercase font-bold py-1 px-2 right-2 flex w-max rounded-full items-center gap-1 backdrop-blur-2xl",
        "bg-emerald-50 text-emerald-600 dark:text-emerald-500",
      )}
    >
      Copied <IconCheck className="size-4.5" duotone={false} />
    </span>
  );
};
