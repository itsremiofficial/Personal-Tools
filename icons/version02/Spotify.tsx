import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconSpotify: FC<IconProps> = ({
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
            d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.23975 9.32994C10.8697 7.88994 14.9797 8.39997 18.1597 10.67"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.60986 12.38C11.2599 11.33 14.2599 11.7 16.5799 13.36"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.5 15.41C11.49 14.62 13.74 14.9 15.48 16.14"
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
            opacity={duotone ? "0.58" : "1"}
            d="M24.6699 0H0.669922V24H24.6699V0Z"
            fill="none"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z"
            fill="currentColor"
          />
          <path
            d="M18.1497 11.42C17.9997 11.42 17.8497 11.37 17.7097 11.28C14.7297 9.14003 10.9097 8.67003 7.50966 10.03C7.11966 10.18 6.68965 9.99003 6.53965 9.61003C6.38965 9.23003 6.57965 8.79003 6.95965 8.64003C10.8397 7.10003 15.1897 7.63004 18.5897 10.07C18.9297 10.31 18.9997 10.78 18.7597 11.12C18.6197 11.31 18.3897 11.42 18.1497 11.42Z"
            fill="currentColor"
          />
          <path
            d="M16.5798 14.1101C16.4298 14.1101 16.2798 14.0601 16.1398 13.9701C14.0198 12.4501 11.3098 12.1201 8.87977 13.0801C8.49977 13.2301 8.05977 13.0401 7.90977 12.6601C7.75977 12.2701 7.94977 11.8401 8.32977 11.6901C11.2298 10.5401 14.4798 10.94 17.0098 12.76C17.3498 13 17.4198 13.47 17.1798 13.81C17.0398 14 16.8098 14.1101 16.5798 14.1101Z"
            fill="currentColor"
          />
          <path
            d="M15.4799 16.9001C15.3299 16.9001 15.1799 16.8501 15.0399 16.7601C13.4999 15.6601 11.5299 15.4201 9.76991 16.1101C9.38991 16.2601 8.94991 16.0701 8.79991 15.6901C8.64991 15.3001 8.83991 14.8701 9.21991 14.7201C11.4599 13.8301 13.9599 14.1401 15.9099 15.5401C16.2499 15.7801 16.3199 16.2501 16.0799 16.5901C15.9499 16.7901 15.7199 16.9001 15.4799 16.9001Z"
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
            d="M12.6699 2C7.14992 2 2.66992 6.48 2.66992 12C2.66992 17.52 7.14992 22 12.6699 22C18.1899 22 22.6699 17.52 22.6699 12C22.6699 6.48 18.1899 2 12.6699 2ZM16.0899 16.58C15.9399 16.79 15.7099 16.89 15.4799 16.89C15.3299 16.89 15.1799 16.84 15.0399 16.75C13.4999 15.65 11.5299 15.41 9.76993 16.1C9.38993 16.25 8.94993 16.06 8.79993 15.68C8.64993 15.29 8.83992 14.86 9.21992 14.71C11.4599 13.82 13.9599 14.13 15.9099 15.53C16.2599 15.78 16.3299 16.25 16.0899 16.58ZM17.1899 13.79C17.0399 14 16.8099 14.1 16.5799 14.1C16.4299 14.1 16.2799 14.05 16.1399 13.96C14.0199 12.44 11.3099 12.11 8.87993 13.07C8.49993 13.22 8.05993 13.03 7.90993 12.65C7.75993 12.26 7.94993 11.83 8.32993 11.68C11.2299 10.53 14.4799 10.93 17.0099 12.75C17.3499 12.99 17.4299 13.46 17.1899 13.79ZM18.7599 11.11C18.6099 11.32 18.3799 11.42 18.1499 11.42C17.9999 11.42 17.8499 11.37 17.7099 11.28C14.7299 9.14 10.9099 8.67 7.50992 10.03C7.11992 10.18 6.68992 9.98999 6.53992 9.60999C6.38992 9.22999 6.57992 8.79001 6.95992 8.64001C10.8399 7.10001 15.1899 7.63001 18.5899 10.07C18.9299 10.3 19.0099 10.77 18.7599 11.11Z"
            fill="none"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSpotify as IconComponentType).keywords = [
  "spotify",
  "ipod",
  "audioblog",
  "label",
  "folknik",
  "abba",
  "apple",
  "one-stop",
  "soundcloud rap",
  "music",
];

export default IconSpotify as IconComponentType;
