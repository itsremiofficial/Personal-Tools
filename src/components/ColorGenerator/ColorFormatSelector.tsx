import React from "react";
import { IconTickCircle } from "./IconTickCircle";
import { ColorFormat, ColorFormatSelectorProps } from "../../types";

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
              className={`px-10 py-2 select-none rounded-xl cursor-pointer flex grow justify-center font-medium relative !transition-color !duration-300 ${
                selectedFormat === value
                  ? "!bg-accent !text-icu-100 dark:!bg-icu-800 dark:!text-icu-400"
                  : ""
              } 
              bg-icu-200 hover:bg-accent text-icu-800 hover:text-icu-100
              dark:bg-icu-800/50 dark:hover:bg-icu-800 dark:text-icu-700 dark:hover:text-icu-400
              `}
            >
              {label}
              <IconTickCircle
                className={`absolute top-1/2 right-2 transform -translate-y-1/2 !transition-opacity !duration-500
                  bg-blue-700/40 text-icu-100 dark:bg-icu-600/40 dark:text-icu-200
                  rounded-full p-1 size-5 opacity-0 ${
                    selectedFormat === value ? "opacity-100" : ""
                  }`}
                width={4}
              />
            </label>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
