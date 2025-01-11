import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconReceiptDiscount: FC<IconProps> = ({
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
            d="M2.66992 7V21C2.66992 21.83 3.60992 22.3 4.26992 21.8L5.97992 20.52C6.37992 20.22 6.93992 20.26 7.29992 20.62L8.95992 22.29C9.34992 22.68 9.98992 22.68 10.3799 22.29L12.0599 20.61C12.4099 20.26 12.9699 20.22 13.3599 20.52L15.0699 21.8C15.7299 22.29 16.6699 21.82 16.6699 21V4C16.6699 2.9 17.5699 2 18.6699 2H7.66992H6.66992C3.66992 2 2.66992 3.79 2.66992 6V7Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6.93945 13.73L12.3995 8.27002"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.5941 13.5H12.6031"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6.86462 8.5H6.87361"
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
            d="M22.6699 5.99996V8.41996C22.6699 9.99996 21.6699 11 20.0899 11H16.6699V4.00996C16.6699 2.89996 17.5799 1.98996 18.6899 1.99996C19.7799 2.00996 20.7799 2.44996 21.4999 3.16996C22.2199 3.89996 22.6699 4.89996 22.6699 5.99996Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2.66992 7V21C2.66992 21.83 3.60992 22.3 4.26992 21.8L5.97992 20.52C6.37992 20.22 6.93992 20.26 7.29992 20.62L8.95992 22.29C9.34992 22.68 9.98992 22.68 10.3799 22.29L12.0599 20.61C12.4099 20.26 12.9699 20.22 13.3599 20.52L15.0699 21.8C15.7299 22.29 16.6699 21.82 16.6699 21V4C16.6699 2.9 17.5699 2 18.6699 2H7.66992H6.66992C3.66992 2 2.66992 3.79 2.66992 6V7Z"
            fill="currentColor"
          />
          <path
            d="M12.0996 12.08C11.5496 12.08 11.0996 12.53 11.0996 13.08C11.0996 13.63 11.5496 14.08 12.0996 14.08C12.6496 14.08 13.0996 13.63 13.0996 13.08C13.0996 12.53 12.6496 12.08 12.0996 12.08Z"
            fill="currentColor"
          />
          <path
            d="M7.24023 10.0299C7.80023 10.0299 8.24023 9.57991 8.24023 9.02991C8.24023 8.47991 7.79023 8.02991 7.24023 8.02991C6.69023 8.02991 6.24023 8.47991 6.24023 9.02991C6.24023 9.57991 6.69023 10.0299 7.24023 10.0299Z"
            fill="currentColor"
          />
          <path
            d="M12.9299 7.73996C12.6399 7.44996 12.1599 7.44996 11.8699 7.73996L6.40988 13.2C6.11988 13.49 6.11988 13.97 6.40988 14.26C6.55988 14.41 6.74988 14.48 6.93988 14.48C7.12988 14.48 7.31988 14.41 7.46988 14.26L12.9299 8.79996C13.2199 8.50996 13.2199 8.02996 12.9299 7.73996Z"
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
            d="M7.66992 2H6.66992C3.66992 2 2.66992 3.79 2.66992 6V7V21C2.66992 21.83 3.60992 22.3 4.26992 21.8L5.97992 20.52C6.37992 20.22 6.93992 20.26 7.29992 20.62L8.95992 22.29C9.34992 22.68 9.98992 22.68 10.3799 22.29L12.0599 20.61C12.4099 20.26 12.9699 20.22 13.3599 20.52L15.0699 21.8C15.7299 22.29 16.6699 21.82 16.6699 21V4C16.6699 2.9 17.5699 2 18.6699 2H7.66992ZM7.23992 8.03C7.78992 8.03 8.23992 8.48 8.23992 9.03C8.23992 9.58 7.78992 10.03 7.23992 10.03C6.68992 10.03 6.23992 9.58 6.23992 9.03C6.23992 8.48 6.68992 8.03 7.23992 8.03ZM12.0999 14.08C11.5399 14.08 11.0999 13.63 11.0999 13.08C11.0999 12.53 11.5499 12.08 12.0999 12.08C12.6499 12.08 13.0999 12.53 13.0999 13.08C13.0999 13.63 12.6499 14.08 12.0999 14.08ZM12.9299 8.8L7.46992 14.26C7.31992 14.41 7.12992 14.48 6.93992 14.48C6.74992 14.48 6.55992 14.41 6.40992 14.26C6.11992 13.97 6.11992 13.49 6.40992 13.2L11.8699 7.74C12.1599 7.45 12.6399 7.45 12.9299 7.74C13.2199 8.03 13.2199 8.51 12.9299 8.8Z"
            fill="currentColor"
          />
          <path
            d="M18.6799 2V3.5C19.3399 3.5 19.9699 3.77 20.4299 4.22C20.9099 4.71 21.1699 5.34 21.1699 6V8.42C21.1699 9.16 20.8399 9.5 20.0899 9.5H18.1699V4.01C18.1699 3.73 18.3999 3.5 18.6799 3.5V2ZM18.6799 2C17.5699 2 16.6699 2.9 16.6699 4.01V11H20.0899C21.6699 11 22.6699 10 22.6699 8.42V6C22.6699 4.9 22.2199 3.9 21.4999 3.17C20.7699 2.45 19.7799 2.01 18.6799 2C18.6899 2 18.6799 2 18.6799 2Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconReceiptDiscount as IconComponentType).keywords = [
  "receipt",
  "discount",
  "receiving",
  "reception",
  "acknowledge",
  "recipient",
  "receptor",
  "granting",
  "receive",
  "grant",
  "remitting",
  "bank discount",
  "discount rate",
  "rebate",
  "deduction",
  "dismiss",
  "brush aside",
  "brush off",
  "ignore",
  "disregard",
];

export default IconReceiptDiscount as IconComponentType;