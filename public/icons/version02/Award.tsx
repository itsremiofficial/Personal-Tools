import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconAward: FC<IconProps> = ({
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
            d="M4.92969 11.0199V15.9899C4.92969 17.8099 4.92969 17.8099 6.64969 18.9699L11.3797 21.6999C12.0897 22.1099 13.2497 22.1099 13.9597 21.6999L18.6897 18.9699C20.4097 17.8099 20.4097 17.8099 20.4097 15.9899V11.0199C20.4097 9.19994 20.4097 9.19994 18.6897 8.03994L13.9597 5.30994C13.2497 4.89994 12.0897 4.89994 11.3797 5.30994L6.64969 8.03994C4.92969 9.19994 4.92969 9.19994 4.92969 11.0199Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M18.1699 7.63V5C18.1699 3 17.1699 2 15.1699 2H10.1699C8.16992 2 7.16992 3 7.16992 5V7.56"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M13.2997 10.99L13.8697 11.88C13.9597 12.02 14.1597 12.16 14.3097 12.2L15.3297 12.46C15.9597 12.62 16.1297 13.16 15.7197 13.66L15.0497 14.47C14.9497 14.6 14.8697 14.83 14.8797 14.99L14.9397 16.04C14.9797 16.69 14.5197 17.02 13.9197 16.78L12.9397 16.39C12.7897 16.33 12.5397 16.33 12.3897 16.39L11.4097 16.78C10.8097 17.02 10.3497 16.68 10.3897 16.04L10.4497 14.99C10.4597 14.83 10.3797 14.59 10.2797 14.47L9.6097 13.66C9.1997 13.16 9.3697 12.62 9.9997 12.46L11.0197 12.2C11.1797 12.16 11.3797 12.01 11.4597 11.88L12.0297 10.99C12.3897 10.45 12.9497 10.45 13.2997 10.99Z"
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
            d="M18.62 7.7101L18.48 7.6301L17.09 6.8301L14.22 5.1701C13.34 4.6601 12 4.6601 11.12 5.1701L8.25002 6.8301L6.86002 7.6401L6.68002 7.7401C4.89002 8.9401 4.77002 9.1601 4.77002 11.0901V15.7001C4.77002 17.6301 4.89002 17.8501 6.72002 19.0801L11.12 21.6201C11.56 21.8801 12.11 22.0001 12.67 22.0001C13.22 22.0001 13.78 21.8801 14.22 21.6201L18.66 19.0501C20.45 17.8501 20.57 17.6301 20.57 15.7001V11.0901C20.57 9.1601 20.45 8.9401 18.62 7.7101Z"
            fill="currentColor"
          />
          <path
            d="M6.85986 7.64L8.24986 6.83L10.9899 5.25L11.1199 5.17C11.9999 4.66 13.3399 4.66 14.2199 5.17L14.3499 5.25L17.0899 6.83L18.4799 7.63V5.49C18.4799 3.24 17.2399 2 14.9899 2H10.3399C8.08986 2 6.85986 3.24 6.85986 5.49V7.64Z"
            fill="currentColor"
          />
          <path
            d="M15.5102 13.34L14.8902 14.1C14.7902 14.21 14.7202 14.43 14.7302 14.58L14.7902 15.56C14.8302 16.16 14.4002 16.47 13.8402 16.25L12.9302 15.89C12.7902 15.84 12.5502 15.84 12.4102 15.89L11.5002 16.25C10.9402 16.47 10.5102 16.16 10.5502 15.56L10.6102 14.58C10.6202 14.43 10.5502 14.21 10.4502 14.1L9.83016 13.34C9.44016 12.88 9.61016 12.37 10.1902 12.22L11.1402 11.98C11.2902 11.94 11.4702 11.8 11.5502 11.67L12.0802 10.85C12.4102 10.34 12.9302 10.34 13.2602 10.85L13.7902 11.67C13.8702 11.8 14.0502 11.94 14.2002 11.98L15.1502 12.22C15.7302 12.37 15.9002 12.88 15.5102 13.34Z"
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
            d="M18.4799 5.49V6.23L14.9399 4.18C13.5999 3.41 11.7299 3.41 10.3999 4.18L6.85986 6.24V5.49C6.85986 3.24 8.08986 2 10.3399 2H14.9999C17.2499 2 18.4799 3.24 18.4799 5.49Z"
            fill="currentColor"
          />
          <path
            d="M18.5099 7.96999L18.3699 7.89999L17.0099 7.11999L14.1899 5.48999C13.3299 4.98999 12.0099 4.98999 11.1499 5.48999L8.32992 7.10999L6.96992 7.90999L6.78992 7.99999C5.03992 9.17999 4.91992 9.39999 4.91992 11.29V15.81C4.91992 17.7 5.03992 17.92 6.82992 19.13L11.1499 21.62C11.5799 21.88 12.1199 21.99 12.6699 21.99C13.2099 21.99 13.7599 21.87 14.1899 21.62L18.5499 19.1C20.3099 17.92 20.4199 17.71 20.4199 15.81V11.29C20.4199 9.39999 20.2999 9.17999 18.5099 7.96999ZM15.4599 13.5L14.8499 14.25C14.7499 14.36 14.6799 14.57 14.6899 14.72L14.7499 15.68C14.7899 16.27 14.3699 16.57 13.8199 16.36L12.9299 16C12.7899 15.95 12.5599 15.95 12.4199 16L11.5299 16.35C10.9799 16.57 10.5599 16.26 10.5999 15.67L10.6599 14.71C10.6699 14.56 10.5999 14.35 10.4999 14.24L9.87992 13.5C9.49992 13.05 9.66992 12.55 10.2399 12.4L11.1699 12.16C11.3199 12.12 11.4899 11.98 11.5699 11.86L12.0899 11.06C12.4099 10.56 12.9199 10.56 13.2499 11.06L13.7699 11.86C13.8499 11.99 14.0299 12.12 14.1699 12.16L15.0999 12.4C15.6699 12.55 15.8399 13.05 15.4599 13.5Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconAward as IconComponentType).keywords = [
  "award",
  "grant",
  "honor",
  "accolade",
  "prize",
  "present",
  "honour",
  "laurels",
  "verdict",
  "citation",
];

export default IconAward as IconComponentType;