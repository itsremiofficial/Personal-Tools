import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconActivity: FC<IconProps> = ({
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
            d="M9.66992 22H15.6699C20.6699 22 22.6699 20 22.6699 15V9C22.6699 4 20.6699 2 15.6699 2H9.66992C4.66992 2 2.66992 4 2.66992 9V15C2.66992 20 4.66992 22 9.66992 22Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.44" : "1"}
            d="M8 14.4898L10.38 11.3998C10.72 10.9598 11.35 10.8798 11.79 11.2198L13.62 12.6598C14.06 12.9998 14.69 12.9198 15.03 12.4898L17.34 9.50977"
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
            d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2Z"
            fill="currentColor"
          />
          <path
            d="M8.00003 15.24C7.84003 15.24 7.68003 15.19 7.54003 15.08C7.21003 14.83 7.15003 14.36 7.40003 14.03L9.78003 10.94C10.07 10.57 10.48 10.33 10.95 10.27C11.41 10.21 11.88 10.34 12.25 10.63L14.08 12.07C14.15 12.13 14.22 12.13 14.27 12.12C14.31 12.12 14.38 12.1 14.44 12.02L16.75 9.04001C17 8.71001 17.48 8.65001 17.8 8.91001C18.13 9.16001 18.19 9.63001 17.93 9.96001L15.62 12.94C15.33 13.31 14.92 13.55 14.45 13.6C13.98 13.66 13.52 13.53 13.15 13.24L11.32 11.8C11.25 11.74 11.17 11.74 11.13 11.75C11.09 11.75 11.02 11.77 10.96 11.85L8.58003 14.94C8.45003 15.14 8.23003 15.24 8.00003 15.24Z"
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
            d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2ZM17.9299 9.96L15.6199 12.94C15.3299 13.31 14.9199 13.55 14.4499 13.6C13.9799 13.66 13.5199 13.53 13.1499 13.24L11.3199 11.8C11.2499 11.74 11.1699 11.74 11.1299 11.75C11.0899 11.75 11.0199 11.77 10.9599 11.85L8.57992 14.94C8.42992 15.13 8.20992 15.23 7.98992 15.23C7.82992 15.23 7.66992 15.18 7.52992 15.07C7.19992 14.82 7.13992 14.35 7.38992 14.02L9.76992 10.93C10.0599 10.56 10.4699 10.32 10.9399 10.26C11.3999 10.2 11.8699 10.33 12.2399 10.62L14.0699 12.06C14.1399 12.12 14.2099 12.12 14.2599 12.11C14.2999 12.11 14.3699 12.09 14.4299 12.01L16.7399 9.03C16.9899 8.7 17.4699 8.64 17.7899 8.9C18.1199 9.17 18.1799 9.64 17.9299 9.96Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconActivity as IconComponentType).keywords = [
  "activity",
  "activeness",
  "action",
  "bodily process",
  "radioactivity",
  "bodily function",
  "body process",
  "natural action",
  "natural process",
  "functioning",
];

export default IconActivity as IconComponentType;
