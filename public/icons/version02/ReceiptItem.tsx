import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconReceiptItem: FC<IconProps> = ({
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
            d="M9.66992 13.01H12.6699"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.66992 9.01001H12.6699"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6.66602 13H6.675"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6.66541 9H6.67439"
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
            d="M12.6699 12.26H9.66992C9.25992 12.26 8.91992 12.6 8.91992 13.01C8.91992 13.42 9.25992 13.76 9.66992 13.76H12.6699C13.0799 13.76 13.4199 13.42 13.4199 13.01C13.4199 12.6 13.0799 12.26 12.6699 12.26Z"
            fill="currentColor"
          />
          <path
            d="M9.66992 9.76001H12.6699C13.0799 9.76001 13.4199 9.42001 13.4199 9.01001C13.4199 8.60001 13.0799 8.26001 12.6699 8.26001H9.66992C9.25992 8.26001 8.91992 8.60001 8.91992 9.01001C8.91992 9.42001 9.25992 9.76001 9.66992 9.76001Z"
            fill="currentColor"
          />
          <path
            d="M6.63965 8.01001C6.07965 8.01001 5.63965 8.46001 5.63965 9.01001C5.63965 9.56001 6.08965 10.01 6.63965 10.01C7.18965 10.01 7.63965 9.56001 7.63965 9.01001C7.63965 8.46001 7.18965 8.01001 6.63965 8.01001Z"
            fill="currentColor"
          />
          <path
            d="M6.63965 12.01C6.07965 12.01 5.63965 12.46 5.63965 13.01C5.63965 13.56 6.08965 14.01 6.63965 14.01C7.18965 14.01 7.63965 13.56 7.63965 13.01C7.63965 12.46 7.18965 12.01 6.63965 12.01Z"
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
            d="M7.66992 2H6.66992C3.66992 2 2.66992 3.79 2.66992 6V7V21C2.66992 21.83 3.60992 22.3 4.26992 21.8L5.97992 20.52C6.37992 20.22 6.93992 20.26 7.29992 20.62L8.95992 22.29C9.34992 22.68 9.98992 22.68 10.3799 22.29L12.0599 20.61C12.4099 20.26 12.9699 20.22 13.3599 20.52L15.0699 21.8C15.7299 22.29 16.6699 21.82 16.6699 21V4C16.6699 2.9 17.5699 2 18.6699 2H7.66992ZM6.63992 14.01C6.08992 14.01 5.63992 13.56 5.63992 13.01C5.63992 12.46 6.08992 12.01 6.63992 12.01C7.18992 12.01 7.63992 12.46 7.63992 13.01C7.63992 13.56 7.18992 14.01 6.63992 14.01ZM6.63992 10.01C6.08992 10.01 5.63992 9.56 5.63992 9.01C5.63992 8.46 6.08992 8.01 6.63992 8.01C7.18992 8.01 7.63992 8.46 7.63992 9.01C7.63992 9.56 7.18992 10.01 6.63992 10.01ZM12.6699 13.76H9.66992C9.25992 13.76 8.91992 13.42 8.91992 13.01C8.91992 12.6 9.25992 12.26 9.66992 12.26H12.6699C13.0799 12.26 13.4199 12.6 13.4199 13.01C13.4199 13.42 13.0799 13.76 12.6699 13.76ZM12.6699 9.76H9.66992C9.25992 9.76 8.91992 9.42 8.91992 9.01C8.91992 8.6 9.25992 8.26 9.66992 8.26H12.6699C13.0799 8.26 13.4199 8.6 13.4199 9.01C13.4199 9.42 13.0799 9.76 12.6699 9.76Z"
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
(IconReceiptItem as IconComponentType).keywords = [
  "receipt",
  "item",
  "receiving",
  "reception",
  "acknowledge",
  "recipient",
  "receptor",
  "granting",
  "receive",
  "grant",
  "remitting",
  "point",
  "particular",
  "token",
  "detail",
  "object",
  "thing",
  "concept",
  "notion",
  "status",
];

export default IconReceiptItem as IconComponentType;
