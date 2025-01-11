import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconRam: FC<IconProps> = ({
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
            d="M4.16992 7V17C4.16992 20 5.63992 22 9.16992 22H16.1699C19.6399 22 21.1699 20 21.1699 17V15.83C21.1699 15.3 20.9599 14.79 20.5799 14.42L19.7499 13.59C19.3699 13.21 19.1599 12.71 19.1599 12.18V10C19.1599 9.45 19.6099 9 20.1599 9C20.7099 9 21.1599 8.55 21.1599 8V7C21.1599 4 19.6299 2 16.1599 2H9.15992C5.63992 2 4.16992 4 4.16992 7Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.66039 21.97L8.65039 19C8.65039 17.89 9.54039 17 10.6504 17H14.6604C15.7604 17 16.6504 17.89 16.6604 18.99L16.6904 21.98"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14.6396 7.78003H8.63965"
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
            d="M19.1699 10V12.17C19.1699 12.7 19.3799 13.21 19.7599 13.59L20.5799 14.41C20.9599 14.79 21.1699 15.3 21.1699 15.83V17C21.1699 19.85 19.7899 21.8 16.6799 21.98L16.6599 18.99C16.6499 17.89 15.7599 17 14.6599 17H10.6499C9.53992 17 8.64992 17.9 8.64992 19L8.65992 21.98C5.49992 21.8 4.16992 19.85 4.16992 17V7C4.16992 4 5.63992 2 9.16992 2H16.1699C19.6399 2 21.1699 4 21.1699 7V8C21.1699 8.55 20.7199 9 20.1699 9C19.6199 9 19.1699 9.45 19.1699 10Z"
            fill="currentColor"
          />
          <path
            d="M16.6804 21.98C16.5204 21.99 16.3504 22 16.1704 22H9.17039C8.99039 22 8.82039 22 8.66039 21.98L8.65039 19C8.65039 17.9 9.54039 17 10.6504 17H14.6604C15.7604 17 16.6504 17.89 16.6604 18.99L16.6804 21.98Z"
            fill="currentColor"
          />
          <path
            d="M14.6396 8.53003H8.63965C8.22965 8.53003 7.88965 8.19003 7.88965 7.78003C7.88965 7.37003 8.22965 7.03003 8.63965 7.03003H14.6396C15.0496 7.03003 15.3896 7.37003 15.3896 7.78003C15.3896 8.19003 15.0596 8.53003 14.6396 8.53003Z"
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
            d="M20.1699 9C20.7199 9 21.1699 8.55 21.1699 8V7C21.1699 4 19.6399 2 16.1699 2H9.16992C5.63992 2 4.16992 4 4.16992 7V17C4.16992 19.3139 5.0482 21.0255 7.06485 21.6836C7.36641 21.782 7.65887 21.5422 7.65776 21.2249L7.64992 19C7.64992 17.34 8.99992 16 10.6499 16H14.6599C16.2999 16 17.6499 17.34 17.6599 18.98L17.6756 21.227C17.6778 21.5435 17.9716 21.7801 18.2717 21.6794C20.2598 21.0126 21.1699 19.3027 21.1699 17V15.83C21.1699 15.3 20.9599 14.79 20.5799 14.41L19.7599 13.59C19.3799 13.21 19.1699 12.7 19.1699 12.17V10C19.1699 9.45 19.6199 9 20.1699 9ZM14.6399 8.53H8.63992C8.22992 8.53 7.88992 8.19 7.88992 7.78C7.88992 7.37 8.22992 7.03 8.63992 7.03H14.6399C15.0499 7.03 15.3899 7.37 15.3899 7.78C15.3899 8.19 15.0599 8.53 14.6399 8.53Z"
            fill="currentColor"
          />
          <path
            d="M16.6803 20.97C16.6858 21.5261 16.2365 21.98 15.6803 21.98H9.66366C9.11398 21.98 8.66736 21.5364 8.66368 20.9867L8.65039 19C8.65039 17.9 9.54039 17 10.6504 17H14.6604C15.7604 17 16.6504 17.89 16.6604 18.99L16.6803 20.97Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconRam as IconComponentType).keywords = [
  "ram",
  "random-access memory",
  "random access memory",
  "pound",
  "jampack",
  "pack",
  "cram",
  "run",
  "drive",
  "crash",
];

export default IconRam as IconComponentType;