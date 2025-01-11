import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconWalletSearch: FC<IconProps> = ({
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
            d="M12.6699 22H17.6699C20.6699 22 22.6699 20 22.6699 17V12C22.6699 9.3 20.9699 7.3 18.4699 7C18.2699 7 17.9699 7 17.6699 7H7.66992C7.36992 7 7.16992 6.99998 6.86992 7.09998C4.26992 7.39998 2.66992 9.3 2.66992 12C2.66992 12.3 2.66992 12.7 2.66992 13"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M18.4701 6.99995C18.2701 6.99995 17.9701 6.99995 17.6701 6.99995H7.67012C7.37012 6.99995 7.17012 6.99993 6.87012 7.09993C6.97012 6.79993 7.17012 6.59994 7.47012 6.29994L10.6701 2.99995C12.0701 1.59995 14.2701 1.59995 15.6701 2.99995L17.4701 4.79994C18.0701 5.39994 18.3701 6.19995 18.4701 6.99995Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.6699 12.5H19.6699C18.5699 12.5 17.6699 13.4 17.6699 14.5C17.6699 15.6 18.5699 16.5 19.6699 16.5H22.6699"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.46954 21.4C8.23954 21.4 9.66953 19.97 9.66953 18.2C9.66953 16.43 8.23954 15 6.46954 15C4.69954 15 3.26953 16.43 3.26953 18.2C3.26953 19.97 4.69954 21.4 6.46954 21.4Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.66992 22L3.66992 21"
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
            d="M18.4203 7.04997C18.1803 7.00997 17.9303 6.99998 17.6703 6.99998H7.67035C7.39035 6.99998 7.12035 7.01998 6.86035 7.05998C7.00035 6.77998 7.20035 6.52001 7.44035 6.28001L10.6903 3.02C12.0603 1.66 14.2804 1.66 15.6504 3.02L17.4004 4.78996C18.0404 5.41996 18.3803 6.21997 18.4203 7.04997Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2.66992 16.36V12C2.66992 9.28 4.30992 7.38 6.85992 7.06C7.11992 7.02 7.38992 7 7.66992 7H17.6699C17.9299 7 18.1799 7.00999 18.4199 7.04999C20.9999 7.34999 22.6699 9.26 22.6699 12V17C22.6699 19.76 20.4299 22 17.6699 22H8.29992H7.66992C4.90992 22 2.66992 19.76 2.66992 17V16.36Z"
            fill="currentColor"
          />
          <path
            d="M22.6699 12.5H19.6699C18.5699 12.5 17.6699 13.4 17.6699 14.5C17.6699 15.6 18.5699 16.5 19.6699 16.5H22.6699"
            fill="currentColor"
          />
          <path
            d="M1.89949 21.68L2.65949 20.92C2.25949 20.32 2.02949 19.6 2.02949 18.83C2.02949 16.72 3.73949 15.01 5.84949 15.01C7.95949 15.01 9.66949 16.72 9.66949 18.83C9.66949 20.94 7.95949 22.65 5.84949 22.65C5.07949 22.65 4.35949 22.42 3.75949 22.02L2.99949 22.78C2.84949 22.93 2.64949 23.01 2.44949 23.01C2.24949 23.01 2.04949 22.93 1.89949 22.78C1.58949 22.47 1.58949 21.98 1.89949 21.68Z"
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
            d="M1.90173 21.6817L2.66173 20.9217C2.26173 20.3217 2.03173 19.6017 2.03173 18.8317C2.03173 16.7217 3.74173 15.0117 5.85173 15.0117C7.96173 15.0117 9.67173 16.7117 9.67173 18.8217C9.67173 20.9317 7.96173 22.6417 5.85173 22.6417C5.08173 22.6417 4.36173 22.4117 3.76173 22.0117L3.00173 22.7717C2.84173 22.9217 2.64173 23.0017 2.44173 23.0017C2.24173 23.0017 2.04173 22.9217 1.89173 22.7717C1.59173 22.4717 1.59173 21.9817 1.90173 21.6817Z"
            fill="currentColor"
          />
          <path
            d="M22.1719 12.5H19.6719C18.5719 12.5 17.6719 13.4 17.6719 14.5C17.6719 15.6 18.5719 16.5 19.6719 16.5H22.1719C22.4519 16.5 22.6719 16.28 22.6719 16V13C22.6719 12.72 22.4519 12.5 22.1719 12.5Z"
            fill="currentColor"
          />
          <path
            d="M17.2021 5.40003C17.5021 5.69003 17.2521 6.14003 16.8321 6.14003L8.55208 6.13003C8.07208 6.13003 7.83208 5.55003 8.17208 5.21003L9.92208 3.45003C11.4021 1.98003 13.7921 1.98003 15.2721 3.45003L17.1621 5.36003C17.1721 5.37003 17.1921 5.39003 17.2021 5.40003Z"
            fill="currentColor"
          />
          <path
            d="M22.5422 18.66C21.9322 20.72 20.1722 22 17.7722 22H11.2722C10.8822 22 10.6322 21.57 10.7922 21.21C11.0922 20.51 11.2822 19.72 11.2822 19C11.2822 15.97 8.81223 13.5 5.78223 13.5C5.02223 13.5 4.28223 13.66 3.60223 13.96C3.23223 14.12 2.78223 13.87 2.78223 13.47V12C2.78223 9.28 4.42223 7.38 6.97223 7.06C7.22223 7.02 7.49223 7 7.77223 7H17.7722C18.0322 7 18.2822 7.01 18.5222 7.05C20.5422 7.28 22.0022 8.51 22.5422 10.34C22.6422 10.67 22.4022 11 22.0622 11H19.7722C17.6022 11 15.8822 12.98 16.3522 15.23C16.6822 16.87 18.2022 18 19.8722 18H22.0622C22.4122 18 22.6422 18.34 22.5422 18.66Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconWalletSearch as IconComponentType).keywords = [
  "wallet",
  "search",
  "billfold",
  "notecase",
  "portfolio",
  "paper",
  "book",
  "paperwork",
  "briefcase",
  "suitcase",
  "cash",
  "seek",
  "look for",
  "explore",
  "lookup",
  "research",
  "look",
  "hunting",
  "hunt",
  "seeking",
];

export default IconWalletSearch as IconComponentType;