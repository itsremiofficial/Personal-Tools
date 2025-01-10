import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconVideoAdd: FC<IconProps> = ({
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
            d="M22.6699 9V15C22.6699 15.23 22.6699 15.45 22.6499 15.67C22.6099 15.61 22.5599 15.55 22.5099 15.5C22.4999 15.49 22.4899 15.47 22.4799 15.46C21.6699 14.56 20.4799 14 19.1699 14C17.9099 14 16.7599 14.52 15.9399 15.36C15.1499 16.17 14.6699 17.28 14.6699 18.5C14.6699 19.34 14.9099 20.14 15.3199 20.82C15.5399 21.19 15.8199 21.53 16.1399 21.81C16.1599 21.82 16.1699 21.83 16.1799 21.84C16.2299 21.89 16.2799 21.93 16.3399 21.98C16.1299 22 15.8999 22 15.6699 22H9.66992C4.66992 22 2.66992 20 2.66992 15V9C2.66992 4 4.66992 2 9.66992 2H15.6699C20.6699 2 22.6699 4 22.6699 9Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M3.18945 7.10999H22.1494"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.18945 2.10999V6.96997"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.1494 2.10999V6.52002"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M23.6699 18.5C23.6699 18.86 23.6299 19.21 23.5399 19.55C23.4299 20 23.2499 20.43 23.0199 20.82C22.2399 22.12 20.8099 23 19.1699 23C18.0899 23 17.1099 22.62 16.3499 21.98C16.3399 21.98 16.3399 21.98 16.3399 21.98C16.2799 21.93 16.2299 21.89 16.1799 21.84C16.1699 21.83 16.1599 21.82 16.1399 21.81C15.8199 21.53 15.5399 21.19 15.3199 20.82C14.9099 20.14 14.6699 19.34 14.6699 18.5C14.6699 17.28 15.1499 16.17 15.9399 15.36C16.7599 14.52 17.9099 14 19.1699 14C20.4799 14 21.6699 14.56 22.4799 15.46C22.4899 15.47 22.4999 15.49 22.5099 15.5C22.5599 15.55 22.6099 15.61 22.6499 15.67C23.2899 16.44 23.6699 17.43 23.6699 18.5Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M20.8502 18.4802H17.4902"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.1699 16.84V20.2"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
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
            d="M22.6699 7.81V15.7C22.6699 15.69 22.6599 15.68 22.6499 15.67C22.6099 15.61 22.5599 15.55 22.5099 15.5C22.4999 15.49 22.4899 15.47 22.4799 15.46C21.6699 14.56 20.4799 14 19.1699 14C17.9099 14 16.7599 14.52 15.9399 15.36C15.1499 16.17 14.6699 17.28 14.6699 18.5C14.6699 19.34 14.9099 20.14 15.3199 20.82C15.5399 21.19 15.8199 21.53 16.1399 21.81C16.1599 21.82 16.1699 21.83 16.1799 21.84C16.2299 21.89 16.2799 21.93 16.3399 21.98C16.3399 21.98 16.3399 21.98 16.3499 21.98C16.3599 21.99 16.3699 22 16.3799 22H8.47992C4.83992 22 2.66992 19.83 2.66992 16.19V7.81C2.66992 7.3 2.70993 6.80999 2.79993 6.35999C3.30993 3.60999 5.33993 2.01 8.43993 2H16.8999C19.9999 2.01 22.0299 3.60999 22.5399 6.35999C22.6299 6.80999 22.6699 7.3 22.6699 7.81Z"
            fill="currentColor"
          />
          <path
            d="M22.6699 7.81V7.85999H2.66992V7.81C2.66992 7.3 2.70993 6.80999 2.79993 6.35999H8.43993V2H9.93993V6.35999H15.3999V2H16.8999V6.35999H22.5399C22.6299 6.80999 22.6699 7.3 22.6699 7.81Z"
            fill="currentColor"
          />
          <path
            d="M22.6699 15.7C22.6699 15.69 22.6599 15.68 22.6499 15.67C22.6099 15.61 22.5599 15.55 22.5099 15.5C22.4999 15.49 22.4899 15.47 22.4799 15.46C21.6699 14.56 20.4799 14 19.1699 14C17.9099 14 16.7599 14.52 15.9399 15.36C15.1499 16.17 14.6699 17.28 14.6699 18.5C14.6699 19.34 14.9099 20.14 15.3199 20.82C15.5399 21.19 15.8199 21.53 16.1399 21.81C16.1599 21.82 16.1699 21.83 16.1799 21.84C16.2299 21.89 16.2799 21.93 16.3399 21.98C16.3399 21.98 16.3399 21.98 16.3499 21.98C16.3599 21.99 16.3699 22 16.3799 22C17.1299 22.63 18.0999 23 19.1699 23C20.8099 23 22.2399 22.12 23.0199 20.82C23.2499 20.43 23.4299 20 23.5399 19.55C23.6299 19.21 23.6699 18.86 23.6699 18.5C23.6699 17.44 23.2999 16.46 22.6699 15.7ZM20.8499 19.23H19.9199V20.2C19.9199 20.61 19.5799 20.95 19.1699 20.95C18.7599 20.95 18.4199 20.61 18.4199 20.2V19.23H17.4899C17.0799 19.23 16.7399 18.89 16.7399 18.48C16.7399 18.07 17.0799 17.73 17.4899 17.73H18.4199V16.84C18.4199 16.43 18.7599 16.09 19.1699 16.09C19.5799 16.09 19.9199 16.43 19.9199 16.84V17.73H20.8499C21.2599 17.73 21.5999 18.07 21.5999 18.48C21.5999 18.89 21.2699 19.23 20.8499 19.23Z"
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
            d="M15.3995 5.86V2.5C15.3995 2.22 15.1795 2 14.8995 2H10.4395C10.1595 2 9.93945 2.22 9.93945 2.5V5.86C9.93945 6.14 10.1595 6.36 10.4395 6.36H14.8995C15.1795 6.36 15.3995 6.14 15.3995 5.86Z"
            fill="currentColor"
          />
          <path
            d="M7.92039 2.02C5.36039 2.18 3.61039 3.5 2.96039 5.7C2.86039 6.03 3.10039 6.36 3.44039 6.36H7.94039C8.22039 6.36 8.44039 6.14 8.44039 5.86V2.52C8.44039 2.24 8.20039 2 7.92039 2.02Z"
            fill="currentColor"
          />
          <path
            d="M17.4204 2.00999C19.9804 2.16999 21.7304 3.48999 22.3804 5.68999C22.4804 6.01999 22.2404 6.34999 21.9004 6.34999H17.4004C17.1204 6.34999 16.9004 6.12999 16.9004 5.84999V2.50999C16.9004 2.22999 17.1404 1.98999 17.4204 2.00999Z"
            fill="currentColor"
          />
          <path
            d="M22.6699 15.7C22.6699 15.69 22.6599 15.68 22.6499 15.67C22.6099 15.61 22.5599 15.55 22.5099 15.5C22.4999 15.49 22.4899 15.47 22.4799 15.46C21.6699 14.56 20.4799 14 19.1699 14C17.9099 14 16.7599 14.52 15.9399 15.36C15.1499 16.17 14.6699 17.28 14.6699 18.5C14.6699 19.34 14.9099 20.14 15.3199 20.82C15.5399 21.19 15.8199 21.53 16.1399 21.81C16.1599 21.82 16.1699 21.83 16.1799 21.84C16.2299 21.89 16.2799 21.93 16.3399 21.98C16.3399 21.98 16.3399 21.98 16.3499 21.98C16.3599 21.99 16.3699 22 16.3799 22C17.1299 22.63 18.0999 23 19.1699 23C20.8099 23 22.2399 22.12 23.0199 20.82C23.2499 20.43 23.4299 20 23.5399 19.55C23.6299 19.21 23.6699 18.86 23.6699 18.5C23.6699 17.44 23.2999 16.46 22.6699 15.7ZM20.8499 19.23H19.9199V20.2C19.9199 20.61 19.5799 20.95 19.1699 20.95C18.7599 20.95 18.4199 20.61 18.4199 20.2V19.23H17.4899C17.0799 19.23 16.7399 18.89 16.7399 18.48C16.7399 18.07 17.0799 17.73 17.4899 17.73H18.4199V16.84C18.4199 16.43 18.7599 16.09 19.1699 16.09C19.5799 16.09 19.9199 16.43 19.9199 16.84V17.73H20.8499C21.2599 17.73 21.5999 18.07 21.5999 18.48C21.5999 18.89 21.2699 19.23 20.8499 19.23Z"
            fill="currentColor"
          />
          <path
            d="M22.6699 8.35998V12.74C22.6699 13.11 22.2799 13.35 21.9499 13.18C21.1099 12.74 20.1499 12.5 19.1699 12.5C17.5599 12.5 15.9899 13.16 14.8699 14.31C13.7699 15.43 13.1699 16.92 13.1699 18.5C13.1699 19.31 13.4899 20.35 13.8899 21.22C14.0499 21.57 13.8099 22 13.4199 22H8.47992C5.26992 22 2.66992 19.4 2.66992 16.19V8.35998C2.66992 8.07998 2.88992 7.85999 3.16992 7.85999H22.1699C22.4499 7.85999 22.6699 8.07998 22.6699 8.35998Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconVideoAdd as IconComponentType).keywords = [
  "video",
  "add",
  "tv",
  "television",
  "picture",
  "telecasting",
  "televised",
  "videotaping",
  "videotaped",
  "taping",
  "videotape",
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

export default IconVideoAdd as IconComponentType;
