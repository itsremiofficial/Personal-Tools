import { FC } from "react";

const IconReceiptEdit: FC<IconProps> = ({
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
            d="M21.1699 11.3V7.04001C21.1699 3.01001 20.2299 2 16.4499 2H8.88992C5.10992 2 4.16992 3.01001 4.16992 7.04001V18.3C4.16992 20.96 5.62993 21.59 7.39993 19.69L7.40991 19.68C8.22991 18.81 9.47991 18.88 10.1899 19.83L11.1999 21.18"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.66992 7H16.6699"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.66992 11H15.6699"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.88 14.77L15.34 18.31C15.2 18.45 15.07 18.71 15.04 18.9L14.85 20.25C14.78 20.74 15.12 21.0801 15.61 21.0101L16.96 20.82C17.15 20.79 17.42 20.66 17.55 20.52L21.09 16.9801C21.7 16.3701 21.99 15.6601 21.09 14.7601C20.2 13.8701 19.49 14.16 18.88 14.77Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.3701 15.28C18.6701 16.36 19.5101 17.2 20.5901 17.5"
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
            d="M7.40018 19.7C8.22018 18.82 9.47015 18.89 10.1902 19.85L11.2002 21.2C12.0102 22.27 13.3202 22.27 14.1302 21.2L15.1402 19.85C15.8602 18.89 17.1102 18.82 17.9302 19.7C19.7102 21.6 21.1602 20.97 21.1602 18.31V7.04999C21.1602 3.01999 20.2202 2.01001 16.4402 2.01001H8.88016C5.10016 2.01001 4.16016 3.01999 4.16016 7.04999V18.31C4.17016 20.97 5.63018 21.59 7.40018 19.7Z"
            fill="currentColor"
          />
          <path
            d="M15.5099 9.98993L15.0099 10.4999H14.9999L11.9699 13.5299C11.8399 13.6599 11.5699 13.7999 11.3799 13.8199L10.0299 14.0199C9.53985 14.0899 9.19987 13.7399 9.26987 13.2599L9.45988 11.8999C9.48988 11.7099 9.61986 11.4499 9.74986 11.3099L12.7899 8.27994L13.2899 7.76993C13.6199 7.43993 13.9899 7.19995 14.3899 7.19995C14.7299 7.19995 15.0999 7.35993 15.5099 7.76993C16.4099 8.66993 16.1199 9.37993 15.5099 9.98993Z"
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
            d="M16.4519 2H8.89188C5.11188 2 4.17188 3.01 4.17188 7.04V18.3C4.17188 20.96 5.63188 21.59 7.40188 19.69L7.41187 19.68C8.23187 18.81 9.48188 18.88 10.1919 19.83L11.2019 21.18C12.0119 22.25 13.3219 22.25 14.1319 21.18L15.1419 19.83C15.8619 18.87 17.1119 18.8 17.9319 19.68C19.7119 21.58 21.1619 20.95 21.1619 18.29V7.04C21.1719 3.01 20.2319 2 16.4519 2ZM15.5119 9.99L15.0119 10.5H15.0019L11.9719 13.53C11.8419 13.66 11.5719 13.8 11.3819 13.82L10.0319 14.02C9.54187 14.09 9.20188 13.74 9.27188 13.26L9.46187 11.9C9.49188 11.71 9.62187 11.45 9.75187 11.31L12.7919 8.28L13.2919 7.77C13.6219 7.44 13.9919 7.2 14.3919 7.2C14.7319 7.2 15.1019 7.36 15.5119 7.77C16.4119 8.67 16.1219 9.38 15.5119 9.99Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconReceiptEdit as IconComponent).keywords = [
  "receipt",
  "edit",
  "receiving",
  "reception",
  "acknowledge",
  "recipient",
  "receptor",
  "granting",
  "receive",
  "grant",
  "remitting",
  "redact",
  "edit out",
  "cut",
  "editor",
  "edition",
  "publication",
  "publish",
  "publishing",
  "authoring",
];

export default IconReceiptEdit as IconComponent;
