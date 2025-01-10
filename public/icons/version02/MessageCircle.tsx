import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconMessageCircle: FC<IconProps> = ({
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
            opacity={duotone ? "0.4" : "1"}
            d="M17.9199 10.18V12.81C17.9199 12.98 17.9099 13.14 17.8899 13.3C17.7399 15.07 16.6899 15.95 14.7699 15.95H14.5099C14.3499 15.95 14.1899 16.03 14.0899 16.16L13.2999 17.21C12.9499 17.68 12.3899 17.68 12.0399 17.21L11.2499 16.16C11.1599 16.05 10.9699 15.95 10.8299 15.95H10.5699C8.46992 15.95 7.41992 15.43 7.41992 12.8V10.17C7.41992 8.25004 8.30992 7.20002 10.0699 7.05002C10.2299 7.03002 10.3899 7.02002 10.5599 7.02002H14.7599C16.8699 7.04002 17.9199 8.09002 17.9199 10.18Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z"
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
            d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z"
            fill="currentColor"
          />
          <path
            d="M17.9199 10.18V12.81C17.9199 12.98 17.9099 13.14 17.8899 13.3C17.7399 15.07 16.6899 15.95 14.7699 15.95H14.5099C14.3499 15.95 14.1899 16.03 14.0899 16.16L13.2999 17.21C12.9499 17.68 12.3899 17.68 12.0399 17.21L11.2499 16.16C11.1599 16.05 10.9699 15.95 10.8299 15.95H10.5699C8.46992 15.95 7.41992 15.43 7.41992 12.8V10.17C7.41992 8.25004 8.30992 7.20002 10.0699 7.05002C10.2299 7.03002 10.3899 7.02002 10.5599 7.02002H14.7599C16.8699 7.04002 17.9199 8.09002 17.9199 10.18Z"
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
            d="M12.6699 2C7.14992 2 2.66992 6.48 2.66992 12C2.66992 17.52 7.14992 22 12.6699 22C18.1899 22 22.6699 17.52 22.6699 12C22.6699 6.48 18.1899 2 12.6699 2ZM17.9199 12.81C17.9199 12.98 17.9099 13.14 17.8899 13.3C17.7399 15.07 16.6899 15.95 14.7699 15.95H14.5099C14.3499 15.95 14.1899 16.03 14.0899 16.16L13.2999 17.21C12.9499 17.68 12.3899 17.68 12.0399 17.21L11.2499 16.16C11.1599 16.05 10.9699 15.95 10.8299 15.95H10.5699C8.47992 15.95 7.41992 15.43 7.41992 12.8V10.17C7.41992 8.25 8.30992 7.2 10.0699 7.05C10.2299 7.04 10.3999 7.04 10.5699 7.04H14.7699C16.8599 7.04 17.9199 8.09 17.9199 10.19V12.81Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMessageCircle as IconComponentType).keywords = [
  "message",
  "circle",
  "subject matter",
  "substance",
  "content",
  "file",
  "communiqué",
  "transmission",
  "communication",
  "news",
  "advertisement",
  "round",
  "rotary",
  "environ",
  "roundabout",
  "circulate",
  "circuit",
  "encircle",
  "surround",
  "dress circle",
];

export default IconMessageCircle as IconComponentType;
