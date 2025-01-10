import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconScroll: FC<IconProps> = ({
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
            d="M9.66992 22H15.6699C20.6699 22 22.6699 20 22.6699 15V9C22.6699 4 20.6699 2 15.6699 2H9.66992C4.66992 2 2.66992 4 2.66992 9V15C2.66992 20 4.66992 22 9.66992 22Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10.27 8.96997L7.78 11.46C7.49 11.75 7.49 12.24 7.78 12.53L10.27 15.02"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.0698 8.96997L17.5598 11.46C17.8498 11.75 17.8498 12.24 17.5598 12.53L15.0698 15.02"
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
            d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2Z"
            fill="currentColor"
          />
          <path
            d="M10.2699 15.7799C10.0799 15.7799 9.88987 15.7099 9.73987 15.5599L7.24987 13.0699C6.65987 12.4799 6.65987 11.5299 7.24987 10.9399L9.73987 8.44992C10.0299 8.15992 10.5099 8.15992 10.7999 8.44992C11.0899 8.73992 11.0899 9.21992 10.7999 9.50992L8.30987 11.9999L10.7999 14.4999C11.0899 14.7899 11.0899 15.2699 10.7999 15.5599C10.6499 15.6999 10.4599 15.7799 10.2699 15.7799Z"
            fill="currentColor"
          />
          <path
            d="M15.07 15.7799C14.88 15.7799 14.69 15.7099 14.54 15.5599C14.25 15.2699 14.25 14.7899 14.54 14.4999L17.03 11.9999L14.54 9.49991C14.25 9.20991 14.25 8.72991 14.54 8.43991C14.83 8.14991 15.31 8.14991 15.6 8.43991L18.09 10.9299C18.68 11.5199 18.68 12.4699 18.09 13.0599L15.6 15.5499C15.46 15.6999 15.26 15.7799 15.07 15.7799Z"
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
            d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2ZM10.7999 14.5C11.0899 14.79 11.0899 15.27 10.7999 15.56C10.6499 15.71 10.4599 15.78 10.2699 15.78C10.0799 15.78 9.88992 15.71 9.73992 15.56L7.24992 13.07C6.65992 12.48 6.65992 11.53 7.24992 10.94L9.73992 8.45C10.0299 8.16 10.5099 8.16 10.7999 8.45C11.0899 8.74 11.0899 9.22 10.7999 9.51L8.30992 12L10.7999 14.5ZM18.0899 13.06L15.5999 15.55C15.4499 15.7 15.2599 15.77 15.0699 15.77C14.8799 15.77 14.6899 15.7 14.5399 15.55C14.2499 15.26 14.2499 14.78 14.5399 14.49L17.0299 12L14.5399 9.5C14.2499 9.21 14.2499 8.73 14.5399 8.44C14.8299 8.15 15.3099 8.15 15.5999 8.44L18.0899 10.93C18.6799 11.52 18.6799 12.48 18.0899 13.06Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconScroll as IconComponentType).keywords = [
  "scroll",
  "coil",
  "roll",
  "whorl",
  "curlicue",
  "gyre",
  "curl",
  "ringlet",
  "scrollbar",
  "tape",
];

export default IconScroll as IconComponentType;
