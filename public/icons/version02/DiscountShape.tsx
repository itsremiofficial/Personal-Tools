import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconDiscountShape: FC<IconProps> = ({
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
            d="M4.65979 14.6601L3.1398 13.14C2.5198 12.52 2.5198 11.5 3.1398 10.88L4.65979 9.36002C4.91979 9.10002 5.12979 8.59001 5.12979 8.23001V6.07999C5.12979 5.19999 5.8498 4.48001 6.7298 4.48001H8.8798C9.2398 4.48001 9.7498 4.27004 10.0098 4.01004L11.5298 2.49002C12.1498 1.87002 13.1698 1.87002 13.7898 2.49002L15.3098 4.01004C15.5698 4.27004 16.0798 4.48001 16.4398 4.48001H18.5898C19.4698 4.48001 20.1898 5.19999 20.1898 6.07999V8.23001C20.1898 8.59001 20.3998 9.10002 20.6598 9.36002L22.1798 10.88C22.7998 11.5 22.7998 12.52 22.1798 13.14L20.6598 14.6601C20.3998 14.9201 20.1898 15.4301 20.1898 15.7901V17.94C20.1898 18.82 19.4698 19.5401 18.5898 19.5401H16.4398C16.0798 19.5401 15.5698 19.75 15.3098 20.01L13.7898 21.5301C13.1698 22.1501 12.1498 22.1501 11.5298 21.5301L10.0098 20.01C9.7498 19.75 9.2398 19.5401 8.8798 19.5401H6.7298C5.8498 19.5401 5.12979 18.82 5.12979 17.94V15.7901C5.12979 15.4201 4.91979 14.9101 4.65979 14.6601Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.66992 15L15.6699 9"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.1644 14.5H15.1734"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10.1644 9.5H10.1734"
            stroke="currentColor"
            strokeWidth="2"
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
            d="M4.65979 14.6599L3.1398 13.1399C2.5198 12.5199 2.5198 11.4999 3.1398 10.8799L4.65979 9.3599C4.91979 9.0999 5.12979 8.58989 5.12979 8.22989V6.07993C5.12979 5.19993 5.8498 4.47989 6.7298 4.47989H8.8798C9.2398 4.47989 9.7498 4.26992 10.0098 4.00992L11.5298 2.4899C12.1498 1.8699 13.1698 1.8699 13.7898 2.4899L15.3098 4.00992C15.5698 4.26992 16.0798 4.47989 16.4398 4.47989H18.5898C19.4698 4.47989 20.1898 5.19993 20.1898 6.07993V8.22989C20.1898 8.58989 20.3998 9.0999 20.6598 9.3599L22.1798 10.8799C22.7998 11.4999 22.7998 12.5199 22.1798 13.1399L20.6598 14.6599C20.3998 14.9199 20.1898 15.4299 20.1898 15.7899V17.9399C20.1898 18.8199 19.4698 19.5399 18.5898 19.5399H16.4398C16.0798 19.5399 15.5698 19.7499 15.3098 20.0099L13.7898 21.5299C13.1698 22.1499 12.1498 22.1499 11.5298 21.5299L10.0098 20.0099C9.7498 19.7499 9.2398 19.5399 8.8798 19.5399H6.7298C5.8498 19.5399 5.12979 18.8199 5.12979 17.9399V15.7899C5.12979 15.4199 4.91979 14.9099 4.65979 14.6599Z"
            fill="currentColor"
          />
          <path
            d="M15.6702 16C15.1102 16 14.6602 15.55 14.6602 15C14.6602 14.45 15.1102 14 15.6602 14C16.2102 14 16.6602 14.45 16.6602 15C16.6602 15.55 16.2202 16 15.6702 16Z"
            fill="currentColor"
          />
          <path
            d="M9.67993 10C9.11993 10 8.66992 9.55 8.66992 9C8.66992 8.45 9.11992 8 9.66992 8C10.2199 8 10.6699 8.45 10.6699 9C10.6699 9.55 10.2299 10 9.67993 10Z"
            fill="currentColor"
          />
          <path
            d="M9.67035 15.75C9.48035 15.75 9.29035 15.68 9.14035 15.53C8.85035 15.24 8.85035 14.7599 9.14035 14.4699L15.1404 8.46994C15.4304 8.17994 15.9103 8.17994 16.2003 8.46994C16.4903 8.75994 16.4903 9.24 16.2003 9.53L10.2003 15.53C10.0503 15.68 9.86035 15.75 9.67035 15.75Z"
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
            d="M22.2018 10.87L20.6818 9.35001C20.4218 9.09 20.2118 8.58001 20.2118 8.22001V6.06C20.2118 5.18 19.4918 4.46 18.6118 4.46H16.4618C16.1018 4.46 15.5918 4.25 15.3318 3.99L13.8118 2.47C13.1918 1.85 12.1718 1.85 11.5518 2.47L10.0118 3.99C9.76176 4.25 9.25176 4.46 8.88176 4.46H6.73176C5.85176 4.46 5.13176 5.18 5.13176 6.06V8.21C5.13176 8.57 4.92176 9.08 4.66176 9.34L3.14176 10.86C2.52176 11.48 2.52176 12.5 3.14176 13.12L4.66176 14.64C4.92176 14.9 5.13176 15.41 5.13176 15.77V17.92C5.13176 18.8 5.85176 19.52 6.73176 19.52H8.88176C9.24176 19.52 9.75176 19.73 10.0118 19.99L11.5318 21.51C12.1518 22.13 13.1718 22.13 13.7918 21.51L15.3118 19.99C15.5718 19.73 16.0818 19.52 16.4418 19.52H18.5918C19.4718 19.52 20.1918 18.8 20.1918 17.92V15.77C20.1918 15.41 20.4018 14.9 20.6618 14.64L22.1818 13.12C22.8318 12.51 22.8318 11.49 22.2018 10.87ZM8.67176 9C8.67176 8.45 9.12176 8 9.67176 8C10.2218 8 10.6718 8.45 10.6718 9C10.6718 9.55 10.2318 10 9.67176 10C9.12176 10 8.67176 9.55 8.67176 9ZM10.2018 15.53C10.0518 15.68 9.86176 15.75 9.67176 15.75C9.48176 15.75 9.29176 15.68 9.14176 15.53C8.85176 15.24 8.85176 14.76 9.14176 14.47L15.1418 8.47001C15.4318 8.18001 15.9118 8.18001 16.2018 8.47001C16.4918 8.76 16.4918 9.24 16.2018 9.53L10.2018 15.53ZM15.6718 16C15.1118 16 14.6618 15.55 14.6618 15C14.6618 14.45 15.1118 14 15.6618 14C16.2118 14 16.6618 14.45 16.6618 15C16.6618 15.55 16.2218 16 15.6718 16Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconDiscountShape as IconComponentType).keywords = [
  "discount",
  "shape",
  "bank discount",
  "discount rate",
  "rebate",
  "deduction",
  "dismiss",
  "brush aside",
  "brush off",
  "ignore",
  "disregard",
  "form",
  "determine",
  "pattern",
  "embodiment",
  "influence",
  "frame",
  "configuration",
  "build",
  "regulate",
];

export default IconDiscountShape as IconComponentType;
