import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconTextUnderline: FC<IconProps> = ({
  className,
  fill = false,
  duotone = true,
  width = "1.5",
}) => {
  return (
    <>
      {!fill ? (
        <svg
          className={className}
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M5.67188 21H19.6719"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.67188 3V10C5.67188 13.87 8.80188 17 12.6719 17C16.5419 17 19.6719 13.87 19.6719 10V3"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : duotone ? (
        <svg
          className={className}
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.6719 7.81V16.19C22.6719 19.83 20.5019 22 16.8619 22H8.48187C8.28188 22 8.08187 21.99 7.89187 21.98C6.66187 21.9 5.62188 21.55 4.80188 20.95C4.38188 20.66 4.01187 20.29 3.72187 19.87C3.03187 18.92 2.67188 17.68 2.67188 16.19V7.81C2.67188 4.37 4.61187 2.24 7.89187 2.03C8.08187 2.01 8.28188 2 8.48187 2H16.8619C18.3519 2 19.5919 2.36 20.5419 3.05C20.9619 3.34 21.3319 3.71 21.6219 4.13C22.3119 5.08 22.6719 6.32 22.6719 7.81Z"
            fill="currentColor"
          />
          <path
            d="M17.5018 18.96H7.8418C7.4318 18.96 7.0918 18.62 7.0918 18.21C7.0918 17.8 7.4318 17.46 7.8418 17.46H17.5118C17.9218 17.46 18.2618 17.8 18.2618 18.21C18.2618 18.62 17.9218 18.96 17.5018 18.96Z"
            fill="currentColor"
          />
          <path
            d="M12.6718 16.2C9.5918 16.2 7.0918 13.7 7.0918 10.62V5.79004C7.0918 5.38004 7.4318 5.04004 7.8418 5.04004C8.2518 5.04004 8.5918 5.38004 8.5918 5.79004V10.62C8.5918 12.87 10.4218 14.7 12.6718 14.7C14.9218 14.7 16.7518 12.87 16.7518 10.62V5.79004C16.7518 5.38004 17.0918 5.04004 17.5018 5.04004C17.9118 5.04004 18.2518 5.38004 18.2518 5.79004V10.62C18.2518 13.7 15.7518 16.2 12.6718 16.2Z"
            fill="currentColor"
          />
        </svg>
      ) : (
        <svg
          className={className}
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.6219 4.13C21.3319 3.71 20.9619 3.34 20.5419 3.05C19.5919 2.36 18.3519 2 16.8619 2H8.48187C8.28188 2 8.08187 2.01 7.89187 2.03C4.61187 2.24 2.67188 4.37 2.67188 7.81V16.19C2.67188 17.68 3.03187 18.92 3.72187 19.87C4.01187 20.29 4.38188 20.66 4.80188 20.95C5.62188 21.55 6.66187 21.9 7.89187 21.98C8.08187 21.99 8.28188 22 8.48187 22H16.8619C20.5019 22 22.6719 19.83 22.6719 16.19V7.81C22.6719 6.32 22.3119 5.08 21.6219 4.13ZM17.5019 18.96H7.84188C7.43188 18.96 7.09188 18.62 7.09188 18.21C7.09188 17.8 7.43188 17.46 7.84188 17.46H17.5119C17.9219 17.46 18.2619 17.8 18.2619 18.21C18.2619 18.62 17.9219 18.96 17.5019 18.96ZM18.2519 10.62C18.2519 13.7 15.7519 16.2 12.6719 16.2C9.59188 16.2 7.09188 13.7 7.09188 10.62V5.79C7.09188 5.38 7.43188 5.04 7.84188 5.04C8.25187 5.04 8.59188 5.38 8.59188 5.79V10.62C8.59188 12.87 10.4219 14.7 12.6719 14.7C14.9219 14.7 16.7519 12.87 16.7519 10.62V5.79C16.7519 5.38 17.0919 5.04 17.5019 5.04C17.9119 5.04 18.2519 5.38 18.2519 5.79V10.62Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconTextUnderline as IconComponentType).keywords = [
  "text",
  "underline",
  "schoolbook",
  "textbook",
  "school text",
  "text edition",
  "textual matter",
  "writing",
  "letter",
  "paragraph",
  "manuscript",
  "underscore",
  "emphasize",
  "highlighting",
  "highlight",
  "highlights",
  "outline",
  "note",
  "accentuate",
  "draw",
];

export default IconTextUnderline as IconComponentType;
