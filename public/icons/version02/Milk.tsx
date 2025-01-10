import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconMilk: FC<IconProps> = ({
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
            d="M18.6699 15V19C18.6699 20.65 17.3199 22 15.6699 22H9.66992C8.01992 22 6.66992 20.65 6.66992 19V13.98L10.5599 14C11.2899 14 12.0099 14.17 12.6699 14.5C13.3299 14.83 14.0499 15 14.7899 15H18.6699Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M18.6699 10.83V15H14.7899C14.0499 15 13.3299 14.83 12.6699 14.5C12.0099 14.17 11.2899 14 10.5599 14L6.66992 13.98V10.83C6.66992 10.37 6.92995 9.74 7.25995 9.41L9.37994 7.28999C9.55994 7.10999 9.66992 6.85 9.66992 6.59V5H15.6699V6.59C15.6699 6.85 15.7799 7.10999 15.9599 7.28999L18.0799 9.41C18.4099 9.74 18.6699 10.37 18.6699 10.83Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.6699 16V15"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.66992 14.98V13.98"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.1699 5H10.1699C9.33992 5 8.66992 4.32 8.66992 3.5C8.66992 2.68 9.33992 2 10.1699 2H15.1699C15.9999 2 16.6699 2.68 16.6699 3.5C16.6699 4.32 15.9999 5 15.1699 5Z"
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
            d="M18.6699 15V19C18.6699 20.65 17.3199 22 15.6699 22H9.66992C8.01992 22 6.66992 20.65 6.66992 19V13.98L10.5599 14C11.2899 14 12.0099 14.17 12.6699 14.5C13.3299 14.83 14.0499 15 14.7899 15H18.6699Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M18.6699 10.83V15H14.7899C14.0499 15 13.3299 14.83 12.6699 14.5C12.0099 14.17 11.2899 14 10.5599 14L6.66992 13.98V10.83C6.66992 10.37 6.92995 9.74003 7.25995 9.41003L9.37994 7.29003C9.55994 7.11003 9.66992 6.85003 9.66992 6.59003V4.91003C9.82992 4.97003 9.98992 5.00003 10.1699 5.00003H15.1699C15.3499 5.00003 15.5099 4.97003 15.6699 4.91003V6.59003C15.6699 6.85003 15.7799 7.11003 15.9599 7.29003L18.0799 9.41003C18.4099 9.74003 18.6699 10.37 18.6699 10.83Z"
            fill="currentColor"
          />
          <path
            d="M15.1699 2H10.1699C9.33992 2 8.66992 2.67 8.66992 3.5C8.66992 4.15 9.08992 4.71 9.66992 4.91C9.82992 4.97 9.98992 5 10.1699 5H15.1699C15.3499 5 15.5099 4.97 15.6699 4.91C16.2499 4.71 16.6699 4.15 16.6699 3.5C16.6699 2.67 15.9999 2 15.1699 2Z"
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
            d="M18.6699 16V19C18.6699 20.65 17.3199 22 15.6699 22H9.66992C8.01992 22 6.66992 20.65 6.66992 19V14.99C6.66992 14.44 7.11992 13.99 7.67992 13.99L10.5599 14C11.2499 14 11.9299 14.15 12.5599 14.45C13.2499 14.77 13.9799 15 14.7499 15H17.6699C18.2199 15 18.6699 15.45 18.6699 16Z"
            fill="currentColor"
          />
          <path
            d="M18.0799 9.41L15.9599 7.29C15.7699 7.1 15.6699 6.85 15.6699 6.59V4.91C16.2499 4.71 16.6699 4.15 16.6699 3.5C16.6699 2.67 15.9999 2 15.1699 2H10.1699C9.33992 2 8.66992 2.67 8.66992 3.5C8.66992 4.15 9.08992 4.71 9.66992 4.91V6.59C9.66992 6.85 9.56992 7.1 9.37992 7.29L7.25992 9.41C6.93992 9.73 6.66992 10.38 6.66992 10.83V11.48C6.66992 12.03 7.10992 12.48 7.65992 12.48L10.5699 12.5C11.5499 12.5 12.5399 12.74 13.4199 13.2C13.8399 13.42 14.3199 13.5 14.7899 13.5H17.6699C18.2199 13.5 18.6699 13.05 18.6699 12.5V10.83C18.6699 10.38 18.3999 9.73 18.0799 9.41Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMilk as IconComponentType).keywords = [
  "milk",
  "milky",
  "milklike",
  "whitish",
  "opaque",
  "milk river",
  "lactate",
  "cream",
  "soup",
  "breastmilk",
];

export default IconMilk as IconComponentType;
