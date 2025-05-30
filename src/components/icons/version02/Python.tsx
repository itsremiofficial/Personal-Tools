import { FC } from "react";

const IconPython: FC<IconProps> = ({
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
            d="M8.22998 7.55998V3.89C8.22998 3.06 8.83999 2.36998 9.64999 2.23998C11.65 1.92998 13.69 1.92998 15.69 2.23998C16.51 2.36998 17.11 3.07 17.11 3.89V9.77999C17.11 11.01 16.12 12 14.89 12H10.45C9.21998 12 8.22998 12.99 8.22998 14.22V20.11C8.22998 20.94 8.83999 21.63 9.64999 21.76C11.65 22.07 13.69 22.07 15.69 21.76C16.51 21.63 17.11 20.93 17.11 20.11V16.44"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.1099 7.56H20.7799C21.6099 7.56 22.2999 8.17001 22.4299 8.98001C22.7399 10.98 22.7399 13.02 22.4299 15.02C22.2999 15.84 21.5999 16.44 20.7799 16.44H12.6699"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.67 7.56H4.54997C3.71997 7.56 3.02998 8.17001 2.89998 8.98001C2.58998 10.98 2.58998 13.02 2.89998 15.02C3.02998 15.84 3.72997 16.44 4.54997 16.44H8.21996"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10.6699 4.84998V4.84998"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14.6699 19.15V19.15"
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
            opacity={duotone ? "0.58" : "1"}
            d="M24.6699 0H0.669922V24H24.6699V0Z"
            fill="none"
          />
          <path
            d="M15.69 2.23006C13.69 1.92006 11.65 1.92006 9.64998 2.23006C8.82998 2.36006 8.22997 3.06005 8.22997 3.88005V7.56005H4.54997C3.72997 7.56005 3.02998 8.16006 2.89998 8.98006C2.58998 10.9801 2.58998 13.0201 2.89998 15.0201C3.02998 15.8401 3.72997 16.4401 4.54997 16.4401H8.22997V14.2201C8.22997 12.9901 9.21997 12.0001 10.45 12.0001H14.89C16.12 12.0001 17.11 11.0001 17.11 9.78005V3.88005C17.11 3.06005 16.51 2.36006 15.69 2.23006ZM11 5.58006C10.59 5.58006 10.19 5.19005 10.19 4.77005C10.19 4.35005 10.58 3.97006 11 3.97006C11.19 3.97006 11.42 4.06006 11.56 4.19006C11.71 4.33006 11.81 4.57005 11.81 4.77005C11.81 5.19005 11.42 5.58006 11 5.58006Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.44 8.98006C22.31 8.16006 21.61 7.56006 20.79 7.56006H17.11V9.78006C17.11 11.0001 16.12 12.0001 14.89 12.0001H10.45C9.21998 12.0001 8.22998 12.9901 8.22998 14.2201V20.1201C8.22998 20.9401 8.82999 21.6401 9.64999 21.7701C11.65 22.0801 13.69 22.0801 15.69 21.7701C16.51 21.6401 17.11 20.9401 17.11 20.1201V16.4401H20.79C21.61 16.4401 22.31 15.8401 22.44 15.0201C22.75 13.0201 22.75 10.9801 22.44 8.98006ZM14.34 20.0301C13.93 20.0301 13.53 19.6401 13.53 19.2201C13.53 18.8001 13.92 18.4101 14.34 18.4101C14.53 18.4101 14.76 18.5001 14.9 18.6301C15.05 18.7701 15.15 19.0101 15.15 19.2101C15.14 19.6401 14.75 20.0301 14.34 20.0301Z"
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
            d="M15.69 2.23C13.69 1.92 11.65 1.92 9.64998 2.23C8.82998 2.36 8.22997 3.05999 8.22997 3.87999V7.55998H4.54997C3.72997 7.55998 3.02998 8.16 2.89998 8.98C2.58998 10.98 2.58998 13.02 2.89998 15.02C3.02998 15.84 3.72997 16.44 4.54997 16.44H6.22997C6.50997 16.44 6.72997 16.22 6.72997 15.94V14.22C6.72997 12.17 8.39997 10.5 10.45 10.5H14.89C15.29 10.5 15.61 10.18 15.61 9.77999V6.55998C15.61 6.27998 15.83 6.05998 16.11 6.05998H16.61C16.89 6.05998 17.11 5.83998 17.11 5.55998V3.87999C17.11 3.05999 16.51 2.36 15.69 2.23ZM11 5.57997C10.59 5.57997 10.2 5.18999 10.2 4.77999C10.2 4.35999 10.59 3.96999 11 3.96999C11.2 3.96999 11.42 4.06 11.56 4.2C11.71 4.34 11.81 4.56999 11.81 4.77999C11.81 5.18999 11.42 5.57997 11 5.57997Z"
            fill="none"
          />
          <path
            d="M22.44 8.98001C22.31 8.16001 21.61 7.56 20.79 7.56H17.61C17.33 7.56 17.11 7.78 17.11 8.06V9.78C17.11 11 16.12 12 14.89 12H10.45C9.21998 12 8.22998 12.99 8.22998 14.22V20.12C8.22998 20.94 8.82999 21.64 9.64999 21.77C11.65 22.08 13.69 22.08 15.69 21.77C16.51 21.64 17.11 20.94 17.11 20.12V16.44H20.79C21.61 16.44 22.31 15.84 22.44 15.02C22.75 13.02 22.75 10.98 22.44 8.98001ZM14.34 20.03C13.93 20.03 13.53 19.64 13.53 19.22C13.53 18.8 13.92 18.41 14.34 18.41C14.53 18.41 14.76 18.5 14.9 18.63C15.05 18.77 15.15 19.01 15.15 19.21C15.14 19.64 14.75 20.03 14.34 20.03Z"
            fill="none"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconPython as IconComponent).keywords = [
  "python",
  "monty",
  "phyton",
  "django",
  "perl",
  "ocaml",
  "snakeskin",
  "snake",
  "anaconda",
  "crocodile",
];

export default IconPython as IconComponent;
