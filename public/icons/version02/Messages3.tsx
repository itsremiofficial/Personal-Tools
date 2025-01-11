import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconMessages3: FC<IconProps> = ({
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
            d="M22.6699 6.25V11.35C22.6699 12.62 22.2499 13.69 21.4999 14.43C20.7599 15.18 19.6899 15.6 18.4199 15.6V17.41C18.4199 18.09 17.6599 18.5 17.0999 18.12L16.1299 17.48C16.2199 17.17 16.2599 16.83 16.2599 16.47V12.4C16.2599 10.36 14.8999 9 12.8599 9H6.06992C5.92992 9 5.79992 9.01002 5.66992 9.02002V6.25C5.66992 3.7 7.36992 2 9.91992 2H18.4199C20.9699 2 22.6699 3.7 22.6699 6.25Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.2599 12.4V16.47C16.2599 16.83 16.2199 17.17 16.1299 17.48C15.7599 18.95 14.5399 19.87 12.8599 19.87H10.1399L7.11992 21.88C6.66992 22.19 6.06992 21.86 6.06992 21.32V19.87C5.04992 19.87 4.19992 19.53 3.60992 18.94C3.00992 18.34 2.66992 17.49 2.66992 16.47V12.4C2.66992 10.5 3.84992 9.19002 5.66992 9.02002C5.79992 9.01002 5.92992 9 6.06992 9H12.8599C14.8999 9 16.2599 10.36 16.2599 12.4Z"
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
            d="M22.6699 6.25V11.35C22.6699 12.62 22.2499 13.69 21.4999 14.43C20.7599 15.18 19.6899 15.6 18.4199 15.6V17.41C18.4199 18.09 17.6599 18.5 17.0999 18.12L16.1299 17.48C16.2199 17.17 16.2599 16.83 16.2599 16.47V12.4C16.2599 10.36 14.8999 9 12.8599 9H6.06992C5.92992 9 5.79992 9.01002 5.66992 9.02002V6.25C5.66992 3.7 7.36992 2 9.91992 2H18.4199C20.9699 2 22.6699 3.7 22.6699 6.25Z"
            fill="currentColor"
          />
          <path
            d="M16.2599 12.4V16.47C16.2599 16.83 16.2199 17.17 16.1299 17.48C15.7599 18.95 14.5399 19.87 12.8599 19.87H10.1399L7.11992 21.88C6.66992 22.19 6.06992 21.86 6.06992 21.32V19.87C5.04992 19.87 4.19992 19.53 3.60992 18.94C3.00992 18.34 2.66992 17.49 2.66992 16.47V12.4C2.66992 10.5 3.84992 9.19002 5.66992 9.02002C5.79992 9.01002 5.92992 9 6.06992 9H12.8599C14.8999 9 16.2599 10.36 16.2599 12.4Z"
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
            d="M16.2599 12.4V16.47C16.2599 16.83 16.2199 17.17 16.1299 17.48C15.7599 18.95 14.5399 19.87 12.8599 19.87H10.1399L7.11992 21.88C6.66992 22.19 6.06992 21.86 6.06992 21.32V19.87C5.04992 19.87 4.19992 19.53 3.60992 18.94C3.00992 18.34 2.66992 17.49 2.66992 16.47V12.4C2.66992 10.5 3.84992 9.19 5.66992 9.02C5.79992 9.01 5.92992 9 6.06992 9H12.8599C14.8999 9 16.2599 10.36 16.2599 12.4Z"
            fill="currentColor"
          />
          <path
            d="M18.4199 15.6C19.6899 15.6 20.7599 15.18 21.4999 14.43C22.2499 13.69 22.6699 12.62 22.6699 11.35V6.25C22.6699 3.9 20.7699 2 18.4199 2H9.91992C7.56992 2 5.66992 3.9 5.66992 6.25V7C5.66992 7.28 5.88992 7.5 6.16992 7.5H12.8599C15.5699 7.5 17.7599 9.69 17.7599 12.4V15.1C17.7599 15.38 17.9799 15.6 18.2599 15.6H18.4199Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMessages3 as IconComponentType).keywords = [
  "messages",
  "3",
  "subject matter",
  "substance",
  "content",
  "mails",
  "things",
  "communication",
  "news",
  "correspondence",
  "copy",
  "omega",
  "wash out",
  "cut up",
  "pull out",
  "pull up",
  "pull over",
  "pull in",
  "work out",
  "ride down",
];

export default IconMessages3 as IconComponentType;