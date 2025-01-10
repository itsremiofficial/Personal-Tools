import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconSmsSearch: FC<IconProps> = ({
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
            d="M12.6699 20.5H7.66992C4.66992 20.5 2.66992 19 2.66992 15.5V8.5C2.66992 5 4.66992 3.5 7.66992 3.5H17.6699C20.6699 3.5 22.6699 5 22.6699 8.5V11.5"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17.6699 9L14.5399 11.5C13.5099 12.32 11.8199 12.32 10.7899 11.5L7.66992 9"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M18.8699 21.4C20.6372 21.4 22.0699 19.9673 22.0699 18.2C22.0699 16.4327 20.6372 15 18.8699 15C17.1026 15 15.6699 16.4327 15.6699 18.2C15.6699 19.9673 17.1026 21.4 18.8699 21.4Z"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22.6699 22L21.6699 21"
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
            opacity={duotone ? "0.4" : "1"}
            d="M17.6699 20.5H7.66992C4.66992 20.5 2.66992 19 2.66992 15.5V8.5C2.66992 5 4.66992 3.5 7.66992 3.5H17.6699C20.6699 3.5 22.6699 5 22.6699 8.5V15.5C22.6699 19 20.6699 20.5 17.6699 20.5Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.256 8.53196C18.5145 8.85561 18.4617 9.32754 18.138 9.58605L15.0071 12.0868C13.7037 13.1244 11.6262 13.1244 10.3228 12.0868L10.321 12.0853L7.20097 9.58531C6.87773 9.3263 6.82565 8.85429 7.08466 8.53105C7.34367 8.2078 7.81568 8.15573 8.13893 8.41474L11.2579 10.914C12.0146 11.5155 13.3161 11.5154 14.0725 10.9135C14.0723 10.9136 14.0726 10.9135 14.0725 10.9135L17.2019 8.41401C17.5255 8.15551 17.9975 8.20832 18.256 8.53196Z"
            fill="currentColor"
          />
          <path
            d="M23.3298 21.47L22.5898 20.73C22.9698 20.15 23.1998 19.45 23.1998 18.7C23.1998 16.66 21.5398 15 19.4998 15C17.4598 15 15.7998 16.66 15.7998 18.7C15.7998 20.74 17.4598 22.4 19.4998 22.4C20.2498 22.4 20.9498 22.17 21.5298 21.79L22.2698 22.53C22.4198 22.68 22.6098 22.75 22.7998 22.75C22.9898 22.75 23.1798 22.68 23.3298 22.53C23.6198 22.24 23.6198 21.76 23.3298 21.47Z"
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
            d="M17.6699 3H7.66992C4.66992 3 2.66992 4.5 2.66992 8V15.96C2.66992 18.25 4.51992 20.1 6.80992 20.1H13.0699C13.6499 20.1 14.1499 19.61 14.0899 19.03C13.9499 17.5 14.4499 15.85 15.8099 14.52C16.3699 13.97 17.0599 13.55 17.8099 13.31C19.0599 12.91 20.2699 12.96 21.3399 13.33C21.9899 13.55 22.6699 13.08 22.6699 12.39V8C22.6699 4.5 20.6699 3 17.6699 3ZM18.1399 8.59L15.0099 11.09C14.3499 11.62 13.5099 11.88 12.6699 11.88C11.8299 11.88 10.9799 11.62 10.3299 11.09L7.19992 8.59C6.87992 8.33 6.82992 7.86 7.07992 7.53C7.33992 7.21 7.80992 7.15 8.12992 7.41L11.2599 9.91C12.0199 10.52 13.3099 10.52 14.0699 9.91L17.1999 7.41C17.5199 7.15 17.9999 7.2 18.2499 7.53C18.5099 7.86 18.4599 8.33 18.1399 8.59Z"
            fill="currentColor"
          />
          <path
            d="M23.3199 21.4499L22.5699 20.6999C22.9599 20.1099 23.1899 19.3999 23.1899 18.6399C23.1899 16.5599 21.5099 14.8799 19.4299 14.8799C17.3499 14.8799 15.6699 16.5599 15.6699 18.6299C15.6699 20.6999 17.3499 22.3899 19.4299 22.3899C20.1899 22.3899 20.8999 22.1599 21.4899 21.7699L22.2399 22.5199C22.3899 22.6699 22.5799 22.7399 22.7799 22.7399C22.9799 22.7399 23.1699 22.6699 23.3199 22.5199C23.6199 22.2299 23.6199 21.7499 23.3199 21.4499Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSmsSearch as IconComponentType).keywords = [
  "sms",
  "search",
  "ms",
  "master of science",
  "samarium",
  "atomic number 62",
  "mms",
  "isa",
  "scm",
  "hsd",
  "cms",
  "seek",
  "look for",
  "explore",
  "lookup",
  "research",
  "look",
  "hunting",
  "hunt",
  "seeking",
];

export default IconSmsSearch as IconComponentType;
