import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconAaveAave: FC<IconProps> = ({
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
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M8.66992 16L12.6699 7L16.6699 16"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.66992 12H12.6699"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
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
          <path d="M24.6699 0H0.669922V24H24.6699V0Z" fill="none" />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z"
            fill="currentColor"
          />
          <path
            d="M17.36 15.7L13.36 6.70004C13.12 6.16004 12.23 6.16004 11.99 6.70004L9.96999 11.25H8.67001C8.26001 11.25 7.92001 11.59 7.92001 12C7.92001 12.41 8.26001 12.75 8.67001 12.75H9.29L7.98 15.7C7.81 16.08 7.98001 16.52 8.36001 16.69C8.74001 16.86 9.18 16.69 9.35 16.31L10.93 12.76H12.67C13.08 12.76 13.42 12.42 13.42 12.01C13.42 11.6 13.08 11.26 12.67 11.26H11.6L12.67 8.86004L15.98 16.32C16.1 16.6 16.38 16.77 16.67 16.77C16.77 16.77 16.88 16.75 16.97 16.71C17.35 16.52 17.52 16.07 17.36 15.7Z"
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
            d="M12.6699 2C7.14992 2 2.66992 6.48 2.66992 12C2.66992 17.52 7.14992 22 12.6699 22C18.1899 22 22.6699 17.52 22.6699 12C22.6699 6.48 18.1899 2 12.6699 2ZM16.9699 16.69C16.8699 16.73 16.7699 16.75 16.6699 16.75C16.3799 16.75 16.1099 16.58 15.9799 16.3L12.6699 8.85L11.5999 11.25H12.6699C13.0799 11.25 13.4199 11.59 13.4199 12C13.4199 12.41 13.0799 12.75 12.6699 12.75H10.9399L9.35992 16.3C9.18992 16.68 8.73993 16.85 8.36993 16.68C7.98993 16.51 7.81993 16.07 7.98993 15.69L9.29993 12.74H8.66992C8.25992 12.74 7.91992 12.4 7.91992 11.99C7.91992 11.58 8.25992 11.24 8.66992 11.24H9.9599L11.9799 6.69C12.2199 6.15 13.1099 6.15 13.3499 6.69L17.3499 15.69C17.5199 16.07 17.3499 16.52 16.9699 16.69Z"
            fill="none"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconAaveAave as IconComponentType).keywords = [
  "aave",
  "eome",
  "biing",
  "wora",
  "thev",
  "oeing",
  "tney",
  "ebonics",
  "black english",
  "black english vernacular",
];

export default IconAaveAave as IconComponentType;
