import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconCalculator: FC<IconProps> = ({
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
            d="M10.6699 22H14.6699C19.6699 22 21.6699 20 21.6699 15V9C21.6699 4 19.6699 2 14.6699 2H10.6699C5.66992 2 3.66992 4 3.66992 9V15C3.66992 20 5.66992 22 10.6699 22Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17.1699 7.58008V8.58008C17.1699 9.40008 16.4999 10.0801 15.6699 10.0801H9.66992C8.84992 10.0801 8.16992 9.41008 8.16992 8.58008V7.58008C8.16992 6.76008 8.83992 6.08008 9.66992 6.08008H15.6699C16.4999 6.08008 17.1699 6.75008 17.1699 7.58008Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.80604 14H8.81759"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.6652 14H12.6767"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.5243 14H16.5359"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.80604 17.5H8.81759"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.6652 17.5H12.6767"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.5243 17.5H16.5359"
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
            opacity={duotone ? "0.4" : "1"}
            d="M8.66992 22H16.6699C19.4299 22 21.6699 19.76 21.6699 17V7C21.6699 4.24 19.4299 2 16.6699 2H8.66992C5.90992 2 3.66992 4.24 3.66992 7V17C3.66992 19.76 5.90992 22 8.66992 22Z"
            fill="currentColor"
          />
          <path
            d="M15.67 5.70996H9.67004C8.64004 5.70996 7.79004 6.54996 7.79004 7.58996V8.58996C7.79004 9.61996 8.63004 10.47 9.67004 10.47H15.67C16.7 10.47 17.55 9.62996 17.55 8.58996V7.58996C17.55 6.54996 16.71 5.70996 15.67 5.70996Z"
            fill="currentColor"
          />
          <path
            d="M8.82982 14.9201C8.68982 14.9201 8.55982 14.8901 8.43982 14.8401C8.31982 14.7901 8.20982 14.7201 8.11982 14.6301C7.92982 14.4401 7.81982 14.1901 7.81982 13.9201C7.81982 13.7901 7.84982 13.6601 7.89982 13.5401C7.94982 13.4101 8.01982 13.3101 8.11982 13.2101C8.34982 12.9801 8.69982 12.8701 9.01982 12.9401C9.07982 12.9501 9.14982 12.9701 9.20982 13.0001C9.26982 13.0201 9.32982 13.0501 9.37982 13.0901C9.43982 13.1201 9.48982 13.1701 9.52982 13.2101C9.61982 13.3101 9.69982 13.4101 9.74982 13.5401C9.79982 13.6601 9.81982 13.7901 9.81982 13.9201C9.81982 14.1901 9.71982 14.4401 9.52982 14.6301C9.33982 14.8201 9.08982 14.9201 8.82982 14.9201Z"
            fill="currentColor"
          />
          <path
            d="M12.8198 14.9201C12.5598 14.9201 12.3098 14.8201 12.1198 14.6301C11.9298 14.4401 11.8198 14.1901 11.8198 13.9201C11.8198 13.6601 11.9298 13.4001 12.1198 13.2101C12.4898 12.8401 13.1598 12.8401 13.5298 13.2101C13.6198 13.3101 13.6998 13.4101 13.7498 13.5401C13.7998 13.6601 13.8198 13.7901 13.8198 13.9201C13.8198 14.1901 13.7198 14.4401 13.5298 14.6301C13.3398 14.8201 13.0898 14.9201 12.8198 14.9201Z"
            fill="currentColor"
          />
          <path
            d="M16.8198 14.9201C16.5598 14.9201 16.3098 14.8201 16.1198 14.6301C15.9298 14.4401 15.8198 14.1901 15.8198 13.9201C15.8198 13.6601 15.9298 13.4001 16.1198 13.2101C16.4898 12.8401 17.1598 12.8401 17.5298 13.2101C17.7198 13.4001 17.8298 13.6601 17.8298 13.9201C17.8298 14.0501 17.7998 14.1801 17.7498 14.3001C17.6998 14.4201 17.6298 14.5301 17.5298 14.6301C17.3398 14.8201 17.0898 14.9201 16.8198 14.9201Z"
            fill="currentColor"
          />
          <path
            d="M8.82982 18.92C8.55982 18.92 8.30982 18.82 8.11982 18.63C7.92982 18.44 7.81982 18.19 7.81982 17.92C7.81982 17.66 7.92982 17.4 8.11982 17.21C8.20982 17.12 8.31982 17.05 8.43982 17C8.68982 16.9 8.95982 16.9 9.20982 17C9.26982 17.02 9.32982 17.05 9.37982 17.09C9.43982 17.12 9.48982 17.17 9.52982 17.21C9.71982 17.4 9.82982 17.66 9.82982 17.92C9.82982 18.19 9.71982 18.44 9.52982 18.63C9.33982 18.82 9.08982 18.92 8.82982 18.92Z"
            fill="currentColor"
          />
          <path
            d="M12.8198 18.92C12.5598 18.92 12.3098 18.82 12.1198 18.63C11.9298 18.44 11.8198 18.19 11.8198 17.92C11.8198 17.85 11.8298 17.79 11.8398 17.72C11.8598 17.66 11.8798 17.6 11.8998 17.54C11.9298 17.48 11.9598 17.42 11.9898 17.36C12.0298 17.31 12.0698 17.26 12.1198 17.21C12.2098 17.12 12.3198 17.05 12.4398 17C12.8098 16.85 13.2498 16.93 13.5298 17.21C13.7198 17.4 13.8198 17.66 13.8198 17.92C13.8198 18.19 13.7198 18.44 13.5298 18.63C13.4398 18.72 13.3298 18.79 13.2098 18.84C13.0898 18.89 12.9598 18.92 12.8198 18.92Z"
            fill="currentColor"
          />
          <path
            d="M16.8198 18.92C16.6898 18.92 16.5598 18.89 16.4398 18.84C16.3198 18.79 16.2098 18.72 16.1198 18.63C15.9298 18.44 15.8298 18.19 15.8298 17.92C15.8298 17.66 15.9298 17.4 16.1198 17.21C16.3898 16.93 16.8398 16.85 17.2098 17C17.3298 17.05 17.4398 17.12 17.5298 17.21C17.7198 17.4 17.8198 17.66 17.8198 17.92C17.8198 18.19 17.7198 18.44 17.5298 18.63C17.3398 18.82 17.0898 18.92 16.8198 18.92Z"
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
            d="M16.6699 2H8.66992C5.90992 2 3.66992 4.24 3.66992 7V17C3.66992 19.76 5.90992 22 8.66992 22H16.6699C19.4299 22 21.6699 19.76 21.6699 17V7C21.6699 4.24 19.4299 2 16.6699 2ZM9.52992 18.63C9.33992 18.82 9.08992 18.92 8.82992 18.92C8.55992 18.92 8.30992 18.82 8.11992 18.63C7.92992 18.44 7.81992 18.19 7.81992 17.92C7.81992 17.66 7.92992 17.4 8.11992 17.21C8.20992 17.12 8.31992 17.05 8.43992 17C8.68992 16.9 8.95992 16.9 9.20992 17C9.26992 17.02 9.32992 17.05 9.37992 17.09C9.43992 17.12 9.48992 17.17 9.52992 17.21C9.71992 17.4 9.82992 17.66 9.82992 17.92C9.82992 18.19 9.71992 18.44 9.52992 18.63ZM7.81992 13.92C7.81992 13.79 7.84992 13.66 7.89992 13.54C7.94992 13.41 8.01992 13.31 8.11992 13.21C8.34992 12.98 8.69992 12.87 9.01992 12.94C9.07992 12.95 9.14992 12.97 9.20992 13C9.26992 13.02 9.32992 13.05 9.37992 13.09C9.43992 13.12 9.48992 13.17 9.52992 13.21C9.61992 13.31 9.69992 13.41 9.74992 13.54C9.79992 13.66 9.81992 13.79 9.81992 13.92C9.81992 14.19 9.71992 14.44 9.52992 14.63C9.33992 14.82 9.08992 14.92 8.82992 14.92C8.68992 14.92 8.55992 14.89 8.43992 14.84C8.31992 14.79 8.20992 14.72 8.11992 14.63C7.92992 14.44 7.81992 14.19 7.81992 13.92ZM13.5299 18.63C13.4399 18.72 13.3299 18.79 13.2099 18.84C13.0899 18.89 12.9599 18.92 12.8199 18.92C12.5599 18.92 12.3099 18.82 12.1199 18.63C11.9299 18.44 11.8199 18.19 11.8199 17.92C11.8199 17.85 11.8299 17.79 11.8399 17.72C11.8599 17.66 11.8799 17.6 11.8999 17.54C11.9299 17.48 11.9599 17.42 11.9899 17.36C12.0299 17.31 12.0699 17.26 12.1199 17.21C12.2099 17.12 12.3199 17.05 12.4399 17C12.8099 16.85 13.2499 16.93 13.5299 17.21C13.7199 17.4 13.8199 17.66 13.8199 17.92C13.8199 18.19 13.7199 18.44 13.5299 18.63ZM13.5299 14.63C13.3399 14.82 13.0899 14.92 12.8199 14.92C12.5599 14.92 12.3099 14.82 12.1199 14.63C11.9299 14.44 11.8199 14.19 11.8199 13.92C11.8199 13.66 11.9299 13.4 12.1199 13.21C12.4899 12.84 13.1599 12.84 13.5299 13.21C13.6199 13.31 13.6999 13.41 13.7499 13.54C13.7999 13.66 13.8199 13.79 13.8199 13.92C13.8199 14.19 13.7199 14.44 13.5299 14.63ZM9.66992 10.46C8.63992 10.46 7.78992 9.62 7.78992 8.58V7.58C7.78992 6.55 8.62992 5.7 9.66992 5.7H15.6699C16.6999 5.7 17.5499 6.54 17.5499 7.58V8.58C17.5499 9.61 16.7099 10.46 15.6699 10.46H9.66992ZM17.5299 18.63C17.3399 18.82 17.0899 18.92 16.8199 18.92C16.6899 18.92 16.5599 18.89 16.4399 18.84C16.3199 18.79 16.2099 18.72 16.1199 18.63C15.9299 18.44 15.8299 18.19 15.8299 17.92C15.8299 17.66 15.9299 17.4 16.1199 17.21C16.3899 16.93 16.8399 16.85 17.2099 17C17.3299 17.05 17.4399 17.12 17.5299 17.21C17.7199 17.4 17.8199 17.66 17.8199 17.92C17.8199 18.19 17.7199 18.44 17.5299 18.63ZM17.7499 14.3C17.6999 14.42 17.6299 14.53 17.5299 14.63C17.3399 14.82 17.0899 14.92 16.8199 14.92C16.5599 14.92 16.3099 14.82 16.1199 14.63C15.9299 14.44 15.8199 14.19 15.8199 13.92C15.8199 13.66 15.9299 13.4 16.1199 13.21C16.4899 12.84 17.1599 12.84 17.5299 13.21C17.7199 13.4 17.8299 13.66 17.8299 13.92C17.8299 14.05 17.7999 14.18 17.7499 14.3Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCalculator as IconComponentType).keywords = [
  "calculator",
  "computer",
  "figurer",
  "reckoner",
  "estimator",
  "calculating machine",
  "computing",
  "spreadsheet",
  "computation",
  "calculating",
];

export default IconCalculator as IconComponentType;
