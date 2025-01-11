import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconWalletRemove: FC<IconProps> = ({
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
            d="M22.6699 12V17C22.6699 20 20.6699 22 17.6699 22H8.29993C8.60993 21.74 8.8799 21.42 9.0899 21.06C9.4599 20.46 9.66992 19.75 9.66992 19C9.66992 16.79 7.87992 15 5.66992 15C4.46992 15 3.39992 15.53 2.66992 16.36V12C2.66992 9.28 4.30992 7.38 6.85992 7.06C7.11992 7.02 7.38992 7 7.66992 7H17.6699C17.9299 7 18.1799 7.00999 18.4199 7.04999C20.9999 7.34999 22.6699 9.26 22.6699 12Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M18.4203 7.04997C18.1803 7.00997 17.9303 6.99998 17.6703 6.99998H7.67035C7.39035 6.99998 7.12035 7.01998 6.86035 7.05998C7.00035 6.77998 7.20037 6.52001 7.44037 6.28001L10.6904 3.02C12.0604 1.66 14.2803 1.66 15.6503 3.02L17.4003 4.78996C18.0403 5.41996 18.3803 6.21997 18.4203 7.04997Z"
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
            d="M9.66992 19C9.66992 19.75 9.4599 20.46 9.0899 21.06C8.8799 21.42 8.60993 21.74 8.29993 22C7.59993 22.63 6.67992 23 5.66992 23C4.20992 23 2.93994 22.22 2.24994 21.06C1.87994 20.46 1.66992 19.75 1.66992 19C1.66992 17.99 2.04992 17.07 2.66992 16.36C3.39992 15.53 4.46992 15 5.66992 15C7.87992 15 9.66992 16.79 9.66992 19Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.73987 20.0399L4.62988 17.9299"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.70959 17.96L4.59961 20.0699"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
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
            d="M22.6699 12V17C22.6699 20 20.6699 22 17.6699 22H8.29993C8.60993 21.74 8.8799 21.42 9.0899 21.06C9.4599 20.46 9.66992 19.75 9.66992 19C9.66992 16.79 7.87992 15 5.66992 15C4.46992 15 3.39992 15.53 2.66992 16.36V12C2.66992 9.28 4.30992 7.38 6.85992 7.06C7.11992 7.02 7.38992 7 7.66992 7H17.6699C17.9299 7 18.1799 7.00999 18.4199 7.04999C20.9999 7.34999 22.6699 9.26 22.6699 12Z"
            fill="currentColor"
          />
          <path
            d="M18.4203 7.04997C18.1803 7.00997 17.9303 6.99998 17.6703 6.99998H7.67035C7.39035 6.99998 7.12035 7.01998 6.86035 7.05998C7.00035 6.77998 7.20037 6.52001 7.44037 6.28001L10.6904 3.02C12.0604 1.66 14.2803 1.66 15.6503 3.02L17.4003 4.78996C18.0403 5.41996 18.3803 6.21997 18.4203 7.04997Z"
            fill="currentColor"
          />
          <path
            d="M22.6699 12.5H19.6699C18.5699 12.5 17.6699 13.4 17.6699 14.5C17.6699 15.6 18.5699 16.5 19.6699 16.5H22.6699"
            fill="currentColor"
          />
          <path
            d="M5.66992 15C4.46992 15 3.39992 15.53 2.66992 16.36C2.04992 17.07 1.66992 17.99 1.66992 19C1.66992 19.75 1.87994 20.46 2.24994 21.06C2.93994 22.22 4.20992 23 5.66992 23C6.67992 23 7.59993 22.63 8.29993 22C8.60993 21.74 8.8799 21.42 9.0899 21.06C9.4599 20.46 9.66992 19.75 9.66992 19C9.66992 16.79 7.87992 15 5.66992 15ZM7.2699 20.58C7.1199 20.73 6.92993 20.8 6.73993 20.8C6.54993 20.8 6.3599 20.73 6.2099 20.58L5.67993 20.05L5.12994 20.6C4.97994 20.75 4.78991 20.82 4.59991 20.82C4.40991 20.82 4.21995 20.75 4.06995 20.6C3.77995 20.31 3.77995 19.83 4.06995 19.54L4.61993 18.99L4.0899 18.46C3.7999 18.17 3.7999 17.69 4.0899 17.4C4.3799 17.11 4.8599 17.11 5.1499 17.4L5.67993 17.93L6.17993 17.43C6.46993 17.14 6.94993 17.14 7.23993 17.43C7.52993 17.72 7.52993 18.2 7.23993 18.49L6.73993 18.99L7.2699 19.52C7.5599 19.81 7.5599 20.28 7.2699 20.58Z"
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
            d="M22.1719 12.5H19.6719C18.5719 12.5 17.6719 13.4 17.6719 14.5C17.6719 15.6 18.5719 16.5 19.6719 16.5H22.1719C22.4519 16.5 22.6719 16.28 22.6719 16V13C22.6719 12.72 22.4519 12.5 22.1719 12.5Z"
            fill="currentColor"
          />
          <path
            d="M5.67188 15C4.47187 15 3.40188 15.53 2.67188 16.36C2.05187 17.07 1.67188 17.99 1.67188 19C1.67188 19.75 1.88188 20.46 2.25188 21.06C2.94187 22.22 4.21187 23 5.67188 23C6.68188 23 7.60188 22.63 8.30188 22C8.61188 21.74 8.88188 21.42 9.09188 21.06C9.46187 20.46 9.67188 19.75 9.67188 19C9.67188 16.79 7.88188 15 5.67188 15ZM7.27187 20.58C7.12187 20.73 6.93188 20.8 6.74188 20.8C6.55188 20.8 6.36188 20.73 6.21187 20.58L5.68188 20.05L5.13188 20.6C4.98187 20.75 4.79188 20.82 4.60188 20.82C4.41188 20.82 4.22188 20.75 4.07188 20.6C3.78188 20.31 3.78188 19.83 4.07188 19.54L4.62188 18.99L4.09188 18.46C3.80188 18.17 3.80188 17.69 4.09188 17.4C4.38188 17.11 4.86188 17.11 5.15188 17.4L5.68188 17.93L6.18188 17.43C6.47188 17.14 6.95188 17.14 7.24188 17.43C7.53188 17.72 7.53188 18.2 7.24188 18.49L6.74188 18.99L7.27187 19.52C7.56187 19.81 7.56187 20.28 7.27187 20.58Z"
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
(IconWalletRemove as IconComponentType).keywords = [
  "wallet",
  "remove",
  "billfold",
  "notecase",
  "portfolio",
  "paper",
  "book",
  "paperwork",
  "briefcase",
  "suitcase",
  "cash",
  "take out",
  "get rid of",
  "take away",
  "move out",
  "bump off",
  "slay",
  "murder",
  "take",
  "transfer",
];

export default IconWalletRemove as IconComponentType;