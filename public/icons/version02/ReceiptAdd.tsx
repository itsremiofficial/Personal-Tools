import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconReceiptAdd: FC<IconProps> = ({
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
            d="M22.6699 6V8.42C22.6699 10 21.6699 11 20.0899 11H16.6699V4.01C16.6699 2.9 17.5799 2 18.6899 2C19.7799 2.01 20.7799 2.45 21.4999 3.17C22.2199 3.9 22.6699 4.9 22.6699 6Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.66992 7V21C2.66992 21.83 3.60993 22.3 4.26993 21.8L5.97992 20.52C6.37992 20.22 6.93993 20.26 7.29993 20.62L8.95992 22.29C9.34992 22.68 9.98993 22.68 10.3799 22.29L12.0599 20.61C12.4099 20.26 12.9699 20.22 13.3599 20.52L15.0699 21.8C15.7299 22.29 16.6699 21.82 16.6699 21V4C16.6699 2.9 17.5699 2 18.6699 2H7.66992H6.66992C3.66992 2 2.66992 3.79 2.66992 6V7Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M6.91992 10H12.4199"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.66992 12.75V7.25"
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
            d="M22.6699 6V8.42C22.6699 10 21.6699 11 20.0899 11H16.6699V4.01C16.6699 2.9 17.5799 2 18.6899 2C19.7799 2.01 20.7799 2.45 21.4999 3.17C22.2199 3.9 22.6699 4.9 22.6699 6Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2.66992 7V21C2.66992 21.83 3.60993 22.3 4.26993 21.8L5.97992 20.52C6.37992 20.22 6.93993 20.26 7.29993 20.62L8.95992 22.29C9.34992 22.68 9.98993 22.68 10.3799 22.29L12.0599 20.61C12.4099 20.26 12.9699 20.22 13.3599 20.52L15.0699 21.8C15.7299 22.29 16.6699 21.82 16.6699 21V4C16.6699 2.9 17.5699 2 18.6699 2H7.66992H6.66992C3.66992 2 2.66992 3.79 2.66992 6V7Z"
            fill="currentColor"
          />
          <path
            d="M12.4199 9.25H10.4199V7.25C10.4199 6.84 10.0799 6.5 9.66992 6.5C9.25992 6.5 8.91992 6.84 8.91992 7.25V9.25H6.91992C6.50992 9.25 6.16992 9.59 6.16992 10C6.16992 10.41 6.50992 10.75 6.91992 10.75H8.91992V12.75C8.91992 13.16 9.25992 13.5 9.66992 13.5C10.0799 13.5 10.4199 13.16 10.4199 12.75V10.75H12.4199C12.8299 10.75 13.1699 10.41 13.1699 10C13.1699 9.59 12.8299 9.25 12.4199 9.25Z"
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
            d="M18.6819 2V3.5C19.3419 3.5 19.9719 3.77 20.4319 4.22C20.9119 4.71 21.1719 5.34 21.1719 6V8.42C21.1719 9.16 20.8419 9.5 20.0919 9.5H18.1719V4.01C18.1719 3.73 18.4019 3.5 18.6819 3.5V2ZM18.6819 2C17.5719 2 16.6719 2.9 16.6719 4.01V11H20.0919C21.6719 11 22.6719 10 22.6719 8.42V6C22.6719 4.9 22.2219 3.9 21.5019 3.17C20.7719 2.45 19.7819 2.01 18.6819 2C18.6919 2 18.6819 2 18.6819 2Z"
            fill="currentColor"
          />
          <path
            d="M7.67188 2H6.67188C3.67188 2 2.67188 3.79 2.67188 6V7V21C2.67188 21.83 3.61187 22.3 4.27187 21.8L5.98187 20.52C6.38188 20.22 6.94187 20.26 7.30188 20.62L8.96187 22.29C9.35187 22.68 9.99188 22.68 10.3819 22.29L12.0619 20.61C12.4119 20.26 12.9719 20.22 13.3619 20.52L15.0719 21.8C15.7319 22.29 16.6719 21.82 16.6719 21V4C16.6719 2.9 17.5719 2 18.6719 2H7.67188ZM12.4219 10.75H10.4219V12.75C10.4219 13.16 10.0819 13.5 9.67188 13.5C9.26188 13.5 8.92188 13.16 8.92188 12.75V10.75H6.92188C6.51187 10.75 6.17188 10.41 6.17188 10C6.17188 9.59 6.51187 9.25 6.92188 9.25H8.92188V7.25C8.92188 6.84 9.26188 6.5 9.67188 6.5C10.0819 6.5 10.4219 6.84 10.4219 7.25V9.25H12.4219C12.8319 9.25 13.1719 9.59 13.1719 10C13.1719 10.41 12.8319 10.75 12.4219 10.75Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconReceiptAdd as IconComponentType).keywords = [
  "receipt",
  "add",
  "receiving",
  "reception",
  "acknowledge",
  "recipient",
  "receptor",
  "granting",
  "receive",
  "grant",
  "remitting",
  "total",
  "sum up",
  "tot up",
  "add up",
  "sum",
  "summate",
  "impart",
  "contribute",
  "supply",
];

export default IconReceiptAdd as IconComponentType;
