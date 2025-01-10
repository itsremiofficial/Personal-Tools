import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconRecoveryConvert: FC<IconProps> = ({
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
            d="M15.2699 12.5799V15.3099C15.2699 17.5899 14.3599 18.4999 12.0799 18.4999H9.35992C7.08992 18.4999 6.16992 17.5899 6.16992 15.3099V12.5799C6.16992 10.3099 7.07992 9.3999 9.35992 9.3999H12.0899C14.3599 9.3999 15.2699 10.3099 15.2699 12.5799Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.1703 8.68V11.41C19.1703 13.69 18.2603 14.6 15.9803 14.6H15.2703V12.58C15.2703 10.31 14.3603 9.4 12.0803 9.4H10.0703V8.68C10.0703 6.4 10.9803 5.5 13.2603 5.5H15.9903C18.2603 5.5 19.1703 6.41 19.1703 8.68Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.6699 15C22.6699 18.87 19.5399 22 15.6699 22L16.7199 20.25"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2.66992 9C2.66992 5.13 5.79992 2 9.66992 2L8.61992 3.75"
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
            d="M15.6701 22.75C15.4001 22.75 15.1501 22.6 15.0201 22.37C14.8901 22.13 14.8901 21.85 15.0301 21.61L16.0801 19.86C16.2901 19.5 16.7601 19.39 17.1101 19.6C17.4701 19.81 17.5801 20.27 17.3701 20.63L17.1001 21.08C19.8601 20.43 21.9301 17.95 21.9301 14.99C21.9301 14.58 22.2701 14.24 22.6801 14.24C23.0901 14.24 23.4301 14.58 23.4301 14.99C23.4201 19.27 19.9401 22.75 15.6701 22.75Z"
            fill="currentColor"
          />
          <path
            d="M2.66992 9.75C2.25992 9.75 1.91992 9.41 1.91992 9C1.91992 4.73 5.39992 1.25 9.66992 1.25C9.93992 1.25 10.1899 1.4 10.3199 1.63C10.4499 1.87 10.4499 2.15 10.3099 2.39L9.25992 4.14C9.04992 4.49 8.58992 4.61 8.22992 4.39C7.87992 4.18 7.75992 3.72 7.97992 3.36L8.24992 2.91C5.47992 3.56 3.41992 6.04 3.41992 9C3.41992 9.41 3.07992 9.75 2.66992 9.75Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.4699 12.63V15.57C15.4699 18.02 14.4899 19 12.0399 19H9.09992C6.64992 19 5.66992 18.02 5.66992 15.57V12.63C5.66992 10.18 6.64992 9.19995 9.09992 9.19995H12.0399C14.4899 9.19995 15.4699 10.18 15.4699 12.63Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.2399 5H13.2999C10.8899 5 9.90988 5.96 9.87988 8.32H12.0399C14.9799 8.32 16.3399 9.69 16.3399 12.62V14.78C18.7099 14.75 19.6599 13.77 19.6599 11.36V8.43C19.6699 5.98 18.6899 5 16.2399 5Z"
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
            d="M15.6701 22.75C15.4001 22.75 15.1501 22.6 15.0201 22.37C14.8901 22.13 14.8901 21.85 15.0301 21.61L16.0801 19.86C16.2901 19.5 16.7601 19.39 17.1101 19.6C17.4701 19.81 17.5801 20.27 17.3701 20.63L17.1001 21.08C19.8601 20.43 21.9301 17.95 21.9301 14.99C21.9301 14.58 22.2701 14.24 22.6801 14.24C23.0901 14.24 23.4301 14.58 23.4301 14.99C23.4201 19.27 19.9401 22.75 15.6701 22.75Z"
            fill="currentColor"
          />
          <path
            d="M2.66992 9.75C2.25992 9.75 1.91992 9.41 1.91992 9C1.91992 4.73 5.39992 1.25 9.66992 1.25C9.93992 1.25 10.1899 1.4 10.3199 1.63C10.4499 1.87 10.4499 2.15 10.3099 2.39L9.25992 4.14C9.04992 4.49 8.58992 4.61 8.22992 4.39C7.87992 4.18 7.75992 3.72 7.97992 3.36L8.24992 2.91C5.47992 3.56 3.41992 6.04 3.41992 9C3.41992 9.41 3.07992 9.75 2.66992 9.75Z"
            fill="currentColor"
          />
          <path
            d="M15.4699 12.63V15.57C15.4699 18.02 14.4899 19 12.0399 19H9.09992C6.64992 19 5.66992 18.02 5.66992 15.57V12.63C5.66992 10.18 6.64992 9.19995 9.09992 9.19995H12.0399C14.4899 9.19995 15.4699 10.18 15.4699 12.63Z"
            fill="currentColor"
          />
          <path
            d="M16.2399 5H13.2999C10.8899 5 9.90988 5.96 9.87988 8.32H12.0399C14.9799 8.32 16.3399 9.69 16.3399 12.62V14.78C18.7099 14.75 19.6599 13.77 19.6599 11.36V8.43C19.6699 5.98 18.6899 5 16.2399 5Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconRecoveryConvert as IconComponentType).keywords = [
  "recovery",
  "convert",
  "recuperation",
  "convalescence",
  "retrieval",
  "regaining",
  "retrieve",
  "recover",
  "rehabilitate",
  "reclaim",
  "regain",
  "change over",
  "change",
  "exchange",
  "turn",
  "win over",
  "convince",
  "commute",
  "transformation",
  "alter",
];

export default IconRecoveryConvert as IconComponentType;
