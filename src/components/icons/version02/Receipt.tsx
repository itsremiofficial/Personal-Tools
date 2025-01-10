import { FC } from "react";

const IconReceipt: FC<IconProps> = ({
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
            d="M7.39992 19.7C8.21992 18.82 9.46992 18.89 10.1899 19.85L11.1999 21.2C12.0099 22.27 13.3199 22.27 14.1299 21.2L15.1399 19.85C15.8599 18.89 17.1099 18.82 17.9299 19.7C19.7099 21.6 21.1599 20.97 21.1599 18.31V7.04C21.1699 3.01 20.2299 2 16.4499 2H8.88992C5.10992 2 4.16992 3.01 4.16992 7.04V18.3C4.16992 20.97 5.62992 21.59 7.39992 19.7Z"
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
            d="M7.39992 19.7C8.21992 18.82 9.46992 18.89 10.1899 19.85L11.1999 21.2C12.0099 22.27 13.3199 22.27 14.1299 21.2L15.1399 19.85C15.8599 18.89 17.1099 18.82 17.9299 19.7C19.7099 21.6 21.1599 20.97 21.1599 18.31V7.04C21.1699 3.01 20.2299 2 16.4499 2H8.88992C5.10992 2 4.16992 3.01 4.16992 7.04V18.3C4.16992 20.97 5.62992 21.59 7.39992 19.7Z"
            fill="currentColor"
          />
          <path
            d="M16.6699 7.75H8.66992C8.25992 7.75 7.91992 7.41 7.91992 7C7.91992 6.59 8.25992 6.25 8.66992 6.25H16.6699C17.0799 6.25 17.4199 6.59 17.4199 7C17.4199 7.41 17.0799 7.75 16.6699 7.75Z"
            fill="currentColor"
          />
          <path
            d="M15.6699 11.75H9.66992C9.25992 11.75 8.91992 11.41 8.91992 11C8.91992 10.59 9.25992 10.25 9.66992 10.25H15.6699C16.0799 10.25 16.4199 10.59 16.4199 11C16.4199 11.41 16.0799 11.75 15.6699 11.75Z"
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
            d="M16.4519 2H8.89188C5.11188 2 4.17188 3.01 4.17188 7.04V18.3C4.17188 20.96 5.63188 21.59 7.40188 19.69L7.41187 19.68C8.23187 18.81 9.48188 18.88 10.1919 19.83L11.2019 21.18C12.0119 22.25 13.3219 22.25 14.1319 21.18L15.1419 19.83C15.8619 18.87 17.1119 18.8 17.9319 19.68C19.7119 21.58 21.1619 20.95 21.1619 18.29V7.04C21.1719 3.01 20.2319 2 16.4519 2ZM15.6719 11.75H9.67188C9.26188 11.75 8.92188 11.41 8.92188 11C8.92188 10.59 9.26188 10.25 9.67188 10.25H15.6719C16.0819 10.25 16.4219 10.59 16.4219 11C16.4219 11.41 16.0819 11.75 15.6719 11.75ZM16.6719 7.75H8.67188C8.26188 7.75 7.92188 7.41 7.92188 7C7.92188 6.59 8.26188 6.25 8.67188 6.25H16.6719C17.0819 6.25 17.4219 6.59 17.4219 7C17.4219 7.41 17.0819 7.75 16.6719 7.75Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconReceipt as IconComponent).keywords = [
  "receipt",
  "receiving",
  "reception",
  "acknowledge",
  "recipient",
  "receptor",
  "granting",
  "receive",
  "grant",
  "remitting",
];

export default IconReceipt as IconComponent;
