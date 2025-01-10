import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconDirect: FC<IconProps> = ({
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
            opacity={duotone ? "0.4" : "1"}
            d="M2.66992 13H6.42992C7.18992 13 7.87992 13.43 8.21992 14.11L9.10992 15.9C9.66992 17 10.6699 17 10.9099 17H14.4399C15.1999 17 15.8899 16.57 16.2299 15.89L17.1199 14.1C17.4599 13.42 18.1499 12.99 18.9099 12.99H22.6499"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M11.0098 7H14.3398"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10.1699 10H15.1699"
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
            d="M21.9699 12.23H18.4899C17.5099 12.23 16.6399 12.77 16.1999 13.65L15.3599 15.31C15.1599 15.71 14.7599 15.96 14.3199 15.96H11.0399C10.7299 15.96 10.2899 15.89 9.99992 15.31L9.15992 13.66C8.71992 12.79 7.83992 12.24 6.86992 12.24H3.36992C2.97992 12.24 2.66992 12.55 2.66992 12.94V16.2C2.66992 19.83 4.84992 22 8.48992 22H16.8699C20.2999 22 22.4099 20.12 22.6699 16.78V12.93C22.6699 12.55 22.3599 12.23 21.9699 12.23Z"
            fill="currentColor"
          />
          <path
            d="M14.2199 7.7999H11.1199C10.7299 7.7999 10.4199 7.4899 10.4199 7.0999C10.4199 6.7099 10.7299 6.3999 11.1199 6.3999H14.2199C14.6099 6.3999 14.9199 6.7099 14.9199 7.0999C14.9199 7.4899 14.5999 7.7999 14.2199 7.7999Z"
            fill="currentColor"
          />
          <path
            d="M14.9996 10.5899H10.3396C9.94965 10.5899 9.63965 10.2799 9.63965 9.88994C9.63965 9.49994 9.94965 9.18994 10.3396 9.18994H14.9896C15.3796 9.18994 15.6896 9.49994 15.6896 9.88994C15.6896 10.2799 15.3796 10.5899 14.9996 10.5899Z"
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
            d="M21.9699 12.23H18.4899C17.5099 12.23 16.6399 12.77 16.1999 13.65L15.3599 15.31C15.1599 15.71 14.7599 15.96 14.3199 15.96H11.0399C10.7299 15.96 10.2899 15.89 9.99992 15.31L9.15992 13.66C8.71992 12.79 7.83992 12.24 6.86992 12.24H3.36992C2.97992 12.24 2.66992 12.55 2.66992 12.94V16.2C2.66992 19.83 4.84992 22 8.48992 22H16.8699C20.2999 22 22.4099 20.12 22.6699 16.78V12.93C22.6699 12.55 22.3599 12.23 21.9699 12.23Z"
            fill="currentColor"
          />
          <path
            d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V10.85C2.88992 10.77 3.12992 10.73 3.36992 10.73H6.86992C8.41992 10.73 9.80992 11.59 10.4999 12.98L11.2499 14.45H14.1099L14.8599 12.97C15.5499 11.59 16.9399 10.73 18.4899 10.73H21.9699C22.2099 10.73 22.4499 10.77 22.6699 10.85V7.81C22.6699 4.17 20.4999 2 16.8599 2ZM11.1199 5.41H14.2199C14.5999 5.41 14.9199 5.72 14.9199 6.1C14.9199 6.49 14.5999 6.8 14.2199 6.8H11.1199C10.7399 6.8 10.4199 6.49 10.4199 6.1C10.4199 5.72 10.7399 5.41 11.1199 5.41ZM14.9999 9.59H10.3399C9.95992 9.59 9.64992 9.28 9.64992 8.9C9.64992 8.51 9.95992 8.2 10.3399 8.2H14.9999C15.3799 8.2 15.6899 8.51 15.6899 8.9C15.6899 9.28 15.3799 9.59 14.9999 9.59Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconDirect as IconComponentType).keywords = [
  "direct",
  "straightforward",
  "directly",
  "forthright",
  "plainspoken",
  "man-to-man",
  "straight",
  "frank",
  "free-spoken",
  "outspoken",
];

export default IconDirect as IconComponentType;
