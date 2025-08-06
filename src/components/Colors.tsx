import { cn } from "@/hooks";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { generateColorVariants } from "@/hooks/colorVarientsGenerator";
import { Button } from "./common/Button";
import { Card, CardBody } from "./common/Card";
import { IconCheck, IconCopy, IconPalette } from "./icons/version01";

export const ColorCodeBlock: React.FC<ColorCodeBlockProps> = ({
  variants,
  colorName,
  className,
  variableName,
}) => {
  const [isCopied, setIsCopied] = useState(false);

  const formattedVariables = useMemo(() => {
    return variants
      .map((variant, index) => {
        const colorSuffix = (index + 1) * 100; // For example: 100, 200, 300, etc.
        return `--${variableName}${index + 1}: var(--${colorName
          .toLowerCase()
          .replace(/\s+/g, "-")}-${colorSuffix});`;
      })
      .join("\n");
  }, [variants, colorName]);

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedVariables);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };
  const threecircle = variants[9].hex;
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
          "bg-icu-300 hover:bg-icu-400/70 text-icu-700 hover:text-icu-900",
          "dark:bg-icu-800/50 dark:hover:bg-icu-800 dark:text-icu-600 dark:hover:text-icu-400"
        )}
      >
        {isCopied ? (
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
              className={`text-sm px-10 py-2.5 select-none rounded-xl cursor-pointer flex grow justify-center font-medium relative !transition-color !duration-300 ${
                selectedFormat === value
                  ? "bg-icu-1100 !text-icu-100 dark:!bg-icu-800 dark:!text-icu-400"
                  : ""
              } 
              bg-icu-200 hover:bg-icu-1100 text-icu-800 hover:text-icu-100
              dark:bg-icu-800/50 dark:hover:bg-icu-800 dark:text-icu-700 dark:hover:text-icu-400
              `}
            >
              {label}
              <IconCheck
                duotone={false}
                className={`absolute top-1/2 right-3 transform -translate-y-1/2 !transition-opacity !duration-500
                  bg-icu-700/60 text-icu-100 dark:bg-icu-600/40 dark:text-icu-200
                  rounded-full p-0.5 size-6 opacity-0 ${
                    selectedFormat === value ? "opacity-100" : ""
                  }`}
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
        <span className=" transition-colors duration-300 text-xs text-icu-500 group-hover:text-icu-700 dark:text-icu-700 group-hover:dark:text-icu-600 font-mono whitespace-nowrap">
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
  const [baseColor, setBaseColor] = useState<string>(initBaseColor);
  const [colorName, setColorName] = useState<string>(initColorName);
  const [variableName, setVariableName] = useState<string>("color");
  const [copiedColors, setCopiedColors] = useState<Set<string>>(new Set());
  const [colorFormat, setColorFormat] = useState<ColorFormat>("hex");

  const [debouncedBaseColor, setDebouncedBaseColor] =
    useState<string>(baseColor);
  const [debouncedColorName, setDebouncedColorName] =
    useState<string>(colorName);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (/^#[0-9A-F]{6}$/i.test(debouncedBaseColor)) {
        setBaseColor(debouncedBaseColor);
      }
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [debouncedBaseColor]);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (debouncedColorName.trim()) {
        setColorName(debouncedColorName);
      }
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [debouncedColorName]);

  const colorVariants = useMemo(
    () => generateColorVariants(baseColor, colorName),
    [baseColor, colorName]
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
    [colorFormat]
  );

  const handleSingleCopy = useCallback(
    (variant: ColorVariant) => {
      const colorValue = getColorValue(variant);
      navigator.clipboard.writeText(
        `${variant.label.toLowerCase().replace(/\s+/g, "-")}: ${colorValue};`
      );
      setCopiedColors(new Set([variant.value]));
      setTimeout(() => setCopiedColors(new Set()), 3000);
    },
    [getColorValue]
  );

  const handleCopyAll = useCallback(() => {
    const allColors = colorVariants.map((variant) => variant.value);
    const colorString = colorVariants
      .map(
        (variant) =>
          `${variant.label.toLowerCase().replace(/\s+/g, "-")}: ${getColorValue(
            variant
          )};`
      )
      .join("\n");

    navigator.clipboard.writeText(colorString);
    setCopiedColors(new Set(allColors));
    setTimeout(() => setCopiedColors(new Set()), 3000);
  }, [colorVariants, getColorValue]);

  const handleColorChange = useCallback((color: { hex: string }) => {
    setBaseColor(color.hex);
  }, []);

  return (
    <>
      <Card
        className={cn(
          "w-full px-4 py-6 rounded-3xl border flex gap-4 items-center",
          "border-icu-300 bg-icu-100",
          "dark:border-icu-800/70 dark:bg-icu-1000/60",
          "text-icu-1100 dark:text-icu-100"
        )}
      >
        <IconPalette className="w-10 h-10 mx-3" fill />
        <div>
          <h2 className="text-xl font-medium">Color Palette Creator Tool</h2>
          <p className="text-sm text-icu-600">
            This tool is to create color variables/palette for one theme or
            multiple themes, choose wisely.
          </p>
        </div>
      </Card>
      <Card
        className={cn(
          "w-fit flex gap-4 flex-wrap xl:flex-nowrap lg:justify-center",
          "p-4 grow border backdrop-blur-3xl",
          "border-icu-300 bg-icu-100",
          "dark:border-icu-800/70 dark:bg-icu-1000/60"
        )}
      >
        <CardBody
          className={cn(
            "p-6 w-full rounded-3xl border flex flex-col gap-4 xl:min-w-2xl"
          )}
        >
          <h3 className="text-icu-1100 dark:text-icu-100">For Single Theme</h3>
          <div className="flex gap-4 w-full flex-col">
            <label className="space-y-4 flex flex-col justify-center w-full">
              <div className="flex gap-2 items-center justify-center relative">
                <input
                  type="text"
                  placeholder="Colors hex code"
                  value={debouncedBaseColor}
                  onChange={(e) => setDebouncedBaseColor(e.target.value)}
                  className={cn(
                    "shrink rounded-xl !p-3 border-[1.5px] w-max !ring-0 !outline-0 transition-colors duration-300",
                    "bg-icu-200 border-icu-400/70 text-icu-800",
                    "focus-visible:border-icu-600",
                    "dark:bg-icu-900 dark:border-icu-800/70 dark:text-icu-400",
                    "dark:focus-visible:border-icu-700/70"
                  )}
                />
                <input
                  type="text"
                  placeholder="Color Name eg: red or yellow"
                  value={debouncedColorName}
                  onChange={(e) => setDebouncedColorName(e.target.value)}
                  className={cn(
                    "grow rounded-xl !p-3 border-[1.5px] w-max !ring-0 !outline-0 transition-colors duration-300",
                    "bg-icu-200 border-icu-400/70 text-icu-800",
                    "focus-visible:border-icu-600",
                    "dark:bg-icu-900 dark:border-icu-800/70 dark:text-icu-400",
                    "dark:focus-visible:border-icu-700/70"
                  )}
                />
              </div>
            </label>
            <ColorFormatSelector
              selectedFormat={colorFormat}
              onChange={setColorFormat}
            />
          </div>

          {colorVariants.length > 8 && (
            <ul className="flex flex-col gap-2 py-2">
              <label
                htmlFor="Given Color"
                className="text-icu-900 dark:text-icu-500"
              >
                Given Color
              </label>
              <li key="9">
                <ColorVariantButton
                  variant={colorVariants[8]}
                  isCopied={copiedColors.has(colorVariants[8].value)}
                  onClick={() => handleSingleCopy(colorVariants[8])}
                  displayValue={getColorValue(colorVariants[8])}
                />
              </li>
            </ul>
          )}

          <div className="flex flex-col gap-2 py-2">
            <label
              htmlFor="Color Variants"
              className="text-icu-900 dark:text-icu-500"
            >
              Color Variants
            </label>
            <div className="flex gap-4">
              <ul className="grow space-y-2">
                {colorVariants.slice(0, 7).map((variant, index) => (
                  <li key={index}>
                    <ColorVariantButton
                      variant={variant}
                      isCopied={copiedColors.has(variant.value)}
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
                      isCopied={copiedColors.has(variant.value)}
                      onClick={() => handleSingleCopy(variant)}
                      displayValue={getColorValue(variant)}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Button onClick={handleCopyAll} size={"lg"} className="flex gap-2">
            Copy All <IconCopy className="size-5" />
          </Button>
        </CardBody>
        <CardBody
          className={cn("w-full p-6 rounded-3xl flex flex-col gap-4")}
        >
          <h3 className="text-icu-1100 dark:text-icu-100">
            For Mutiple Themes
          </h3>
          <input
            type="text"
            placeholder="Change Variable Name eg: color or primary"
            value={variableName}
            onChange={(e) => setVariableName(e.target.value)}
            className={cn(
              "rounded-xl !p-3 border-[1.5px] w-full !h-max !ring-0 !outline-0 transition-colors duration-300",
              "bg-icu-200 border-icu-400/70 text-icu-800",
              "focus-visible:border-icu-600",
              "dark:bg-icu-900 dark:border-icu-800/70 dark:text-icu-400",
              "dark:focus-visible:border-icu-700/70"
            )}
          />
          <ColorCodeBlock
            variants={colorVariants}
            colorFormat={colorFormat}
            colorName={colorName}
            className={`lg:min-w-max lg:w-full dark:text-icu-600`}
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
        "bg-emerald-50 text-emerald-600 dark:text-emerald-500 dark:bg-icu-1000/40"
      )}
    >
      Copied <IconCheck className="size-4.5" duotone={false} />
    </span>
  );
};
