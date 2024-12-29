/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useCallback, useEffect } from "react";
import { ColorVariantButton } from "./ColorVariantButton";
import { ColorFormatSelector } from "./ColorFormatSelector";
import { ColorVariant, ColorVariantsProps, ColorFormat } from "../types/color";
import IconCopy from "./IconCopy";
import { ColorCodeBlock } from "./ColorCodeBlock";
import { generateColorVariants } from "../utils/colorVarientsGenerator";
import { cn } from "../../lib/utils";
import { Button } from "../../components/ui/button";

const ColorVariants: React.FC<ColorVariantsProps> = ({
  baseColor: initBaseColor,
  colorName: initColorName,
}) => {
  const [baseColor, setBaseColor] = useState<string>(initBaseColor);
  const [colorName, setColorName] = useState<string>(initColorName);
  const [variableName, setVariableName] = useState<string>("color");
  const [copiedColors, setCopiedColors] = useState<Set<string>>(new Set());
  // const [isPickerVisible, setPickerVisible] = useState<boolean>(false);
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

  const colorVariants = generateColorVariants(baseColor, colorName);

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
    <div
      className={cn(
        "w-fit flex p-5 gap-4 rounded-3xl flex-wrap lg:flex-nowrap lg:justify-center",
        "p-4 grow rounded-3xl max-h-screen overflow-y-auto"
      )}
    >
      <div
        className={cn(
          "p-6 w-full rounded-3xl border flex flex-col gap-4",
          "border-icu-300 bg-icu-100",
          "dark:border-icu-800/70 dark:bg-icu-1000/40"
        )}
      >
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
          <ul className="w-full mb-2">
            <label htmlFor="Given Color" className="pb-2">
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

        <div>
          <label htmlFor="Color Variants" className="pb-2 w-full">
            Color Variants
          </label>
          <div className="flex gap-4 w-full">
            <ul className="w-full space-y-2">
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

            <ul className="w-full space-y-2">
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
      </div>
      <div
        className={cn(
          "w-full h-full p-6 rounded-3xl border",
          "border-icu-300 bg-icu-100",
          "dark:border-icu-800/70 dark:bg-icu-1000/40"
        )}
      >
        <input
          type="text"
          placeholder="Change Variable Name eg: color or primary"
          value={variableName}
          onChange={(e) => setVariableName(e.target.value)}
          className={cn(
            "grow rounded-xl !p-3 border-[1.5px] w-full mb-4 !ring-0 !outline-0 transition-colors duration-300",
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
          className={`lg:min-w-max lg:w-full`}
          variableName={variableName}
        />
      </div>
    </div>
  );
};

export default ColorVariants;
