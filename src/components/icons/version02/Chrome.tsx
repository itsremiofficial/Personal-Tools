import { FC } from "react";

const IconChrome: FC<IconProps> = ({
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
            d="M12.6699 22C18.1899 22 22.6699 17.52 22.6699 12C22.6699 6.48 18.1899 2 12.6699 2C7.14992 2 2.66992 6.48 2.66992 12C2.66992 17.52 7.14992 22 12.6699 22Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M12.6699 16C14.8799 16 16.6699 14.21 16.6699 12C16.6699 9.79 14.8799 8 12.6699 8C10.4599 8 8.66992 9.79 8.66992 12C8.66992 14.21 10.4599 16 12.6699 16Z"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.8399 7.99988C18.8199 7.33988 15.6899 7.33988 12.6699 7.99988"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.61914 6.05957L4.63914 6.11957C5.64914 9.00957 7.19914 11.6896 9.20914 13.9996"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.5508 21.94C13.6108 19.67 15.1608 16.99 16.1008 14.08L16.1308 14"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
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
            d="M22.6699 12C22.6699 17.47 18.2799 21.91 12.8299 22H12.6699C12.0599 22 11.4599 21.94 10.8799 21.84C6.20992 20.99 2.66992 16.91 2.66992 12C2.66992 10.29 3.09992 8.68 3.85992 7.27C4.16992 6.7 4.52992 6.15 4.93992 5.65C6.77992 3.42 9.55992 2 12.6699 2C16.2299 2 19.3499 3.86 21.1199 6.66C21.4699 7.21 21.7699 7.8 22.0099 8.42C22.4399 9.53 22.6699 10.74 22.6699 12Z"
            fill="currentColor"
          />
          <path
            d="M15.7704 8.01999C17.8504 7.84999 19.9404 7.97999 22.0104 8.41999C21.7704 7.79999 21.4704 7.20999 21.1204 6.65999C18.2504 6.18999 15.3504 6.27999 12.4904 6.89999C10.0604 6.97999 8.08035 8.77999 7.71035 11.13C6.55035 9.44999 5.61035 7.61999 4.94035 5.64999C4.53035 6.14999 4.17035 6.69999 3.86035 7.26999C4.92035 9.95999 6.41035 12.36 8.32035 14.47C8.34035 14.49 8.37035 14.5 8.39035 14.52C9.30035 15.99 10.9104 16.9 12.6404 16.9C13.2504 16.9 13.8404 16.78 14.3904 16.57C13.4804 18.48 12.3204 20.25 10.8804 21.84C11.4604 21.94 12.0604 22 12.6704 22H12.8304C14.6804 19.74 16.0804 17.18 17.0204 14.3C17.4304 13.56 17.6504 12.73 17.6504 11.89C17.6504 10.32 16.9104 8.93999 15.7704 8.01999ZM15.6004 13.61C15.0004 14.66 13.8604 15.32 12.6404 15.32C11.4204 15.32 10.2904 14.66 9.68035 13.61C9.37035 13.07 9.22035 12.5 9.22035 11.89C9.22035 9.99999 10.7504 8.46999 12.6404 8.46999C14.5304 8.46999 16.0704 9.99999 16.0704 11.89C16.0704 12.5 15.9104 13.07 15.6004 13.61Z"
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
            d="M12.4895 6.9C15.3495 6.28 18.2495 6.19 21.1195 6.66C19.3495 3.86 16.2295 2 12.6695 2C9.55945 2 6.77945 3.42 4.93945 5.65C5.37945 6.95 5.93945 8.19 6.60945 9.37C6.98945 10.05 7.95945 10.02 8.34945 9.35C9.19945 7.92 10.7295 6.96 12.4895 6.9Z"
            fill="currentColor"
          />
          <path
            d="M8.38994 14.72C6.38994 12.58 4.82994 10.14 3.75994 7.44C2.25994 10.4 2.26994 14.03 4.09994 17.08C5.69994 19.75 8.33994 21.41 11.1999 21.84C12.0899 20.79 12.8699 19.67 13.5399 18.5C13.9299 17.82 13.3999 17.01 12.6199 17.01C10.9499 17.02 9.33994 16.2 8.38994 14.72Z"
            fill="currentColor"
          />
          <path
            d="M9.24023 12C9.24023 12.61 9.39023 13.18 9.70023 13.72C10.3102 14.77 11.4402 15.43 12.6602 15.43C13.8802 15.43 15.0202 14.77 15.6202 13.72C15.9302 13.18 16.0902 12.61 16.0902 12C16.0902 10.11 14.5502 8.58 12.6602 8.58C10.7802 8.57 9.24023 10.11 9.24023 12Z"
            fill="currentColor"
          />
          <path
            d="M22.0101 8.42C20.6401 8.13 19.2501 7.97 17.8701 7.95C17.0801 7.94 16.6301 8.8 17.0201 9.49C17.4201 10.2 17.6501 11.02 17.6501 11.89C17.6501 12.73 17.4301 13.56 17.0201 14.3C16.0801 17.18 14.6801 19.74 12.8301 22C18.2801 21.91 22.6701 17.47 22.6701 12C22.6701 10.74 22.4401 9.53 22.0101 8.42Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconChrome as IconComponent).keywords = [
  "chrome",
  "chromium-plate",
  "chrome-plated",
  "vanadium",
  "plated",
  "spinel",
  "magnesite",
  "cobalt",
  "molybdenum",
  "chromium",
];

export default IconChrome as IconComponent;
