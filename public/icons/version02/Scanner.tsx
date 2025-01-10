import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconScanner: FC<IconProps> = ({
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
            d="M2.66992 9V7C2.66992 4 4.66992 2 7.66992 2H17.6699C20.6699 2 22.6699 4 22.6699 7V9"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.66992 15V17C2.66992 20 4.66992 22 7.66992 22H17.6699C20.6699 22 22.6699 20 22.6699 17V15"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2.66992 12H22.6699"
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
            d="M22.6699 9.75C22.2599 9.75 21.9199 9.41 21.9199 9V7C21.9199 4.42 20.2499 2.75 17.6699 2.75H7.66992C5.08992 2.75 3.41992 4.42 3.41992 7V9C3.41992 9.41 3.07992 9.75 2.66992 9.75C2.25992 9.75 1.91992 9.41 1.91992 9V7C1.91992 3.56 4.22992 1.25 7.66992 1.25H17.6699C21.1099 1.25 23.4199 3.56 23.4199 7V9C23.4199 9.41 23.0799 9.75 22.6699 9.75Z"
            fill="currentColor"
          />
          <path
            d="M17.6699 22.75H7.66992C4.22992 22.75 1.91992 20.44 1.91992 17V15C1.91992 14.59 2.25992 14.25 2.66992 14.25C3.07992 14.25 3.41992 14.59 3.41992 15V17C3.41992 19.58 5.08992 21.25 7.66992 21.25H17.6699C20.2499 21.25 21.9199 19.58 21.9199 17V15C21.9199 14.59 22.2599 14.25 22.6699 14.25C23.0799 14.25 23.4199 14.59 23.4199 15V17C23.4199 20.44 21.1099 22.75 17.6699 22.75Z"
            fill="currentColor"
          />
          <path
            d="M22.6699 12.75H2.66992C2.25992 12.75 1.91992 12.41 1.91992 12C1.91992 11.59 2.25992 11.25 2.66992 11.25H22.6699C23.0799 11.25 23.4199 11.59 23.4199 12C23.4199 12.41 23.0799 12.75 22.6699 12.75Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17.1699 9H8.16992C7.88992 9 7.66992 8.78 7.66992 8.5V6.5C7.66992 5.68 8.33992 5 9.16992 5H16.1699C16.9999 5 17.6699 5.68 17.6699 6.5V8.5C17.6699 8.78 17.4499 9 17.1699 9Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17.1699 15H8.16992C7.88992 15 7.66992 15.22 7.66992 15.5V17.5C7.66992 18.32 8.33992 19 9.16992 19H16.1699C16.9999 19 17.6699 18.32 17.6699 17.5V15.5C17.6699 15.22 17.4499 15 17.1699 15Z"
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
            d="M22.6699 9.75C22.2599 9.75 21.9199 9.41 21.9199 9V7C21.9199 4.42 20.2499 2.75 17.6699 2.75H7.66992C5.08992 2.75 3.41992 4.42 3.41992 7V9C3.41992 9.41 3.07992 9.75 2.66992 9.75C2.25992 9.75 1.91992 9.41 1.91992 9V7C1.91992 3.56 4.22992 1.25 7.66992 1.25H17.6699C21.1099 1.25 23.4199 3.56 23.4199 7V9C23.4199 9.41 23.0799 9.75 22.6699 9.75Z"
            fill="currentColor"
          />
          <path
            d="M17.6699 22.75H7.66992C4.22992 22.75 1.91992 20.44 1.91992 17V15C1.91992 14.59 2.25992 14.25 2.66992 14.25C3.07992 14.25 3.41992 14.59 3.41992 15V17C3.41992 19.58 5.08992 21.25 7.66992 21.25H17.6699C20.2499 21.25 21.9199 19.58 21.9199 17V15C21.9199 14.59 22.2599 14.25 22.6699 14.25C23.0799 14.25 23.4199 14.59 23.4199 15V17C23.4199 20.44 21.1099 22.75 17.6699 22.75Z"
            fill="currentColor"
          />
          <path
            d="M22.6699 12.75H2.66992C2.25992 12.75 1.91992 12.41 1.91992 12C1.91992 11.59 2.25992 11.25 2.66992 11.25H22.6699C23.0799 11.25 23.4199 11.59 23.4199 12C23.4199 12.41 23.0799 12.75 22.6699 12.75Z"
            fill="currentColor"
          />
          <path
            d="M17.1699 9H8.16992C7.88992 9 7.66992 8.78 7.66992 8.5V6.5C7.66992 5.67 8.33992 5 9.16992 5H16.1699C16.9999 5 17.6699 5.67 17.6699 6.5V8.5C17.6699 8.78 17.4499 9 17.1699 9Z"
            fill="currentColor"
          />
          <path
            d="M17.1699 15H8.16992C7.88992 15 7.66992 15.22 7.66992 15.5V17.5C7.66992 18.33 8.33992 19 9.16992 19H16.1699C16.9899 19 17.6699 18.33 17.6699 17.5V15.5C17.6699 15.22 17.4499 15 17.1699 15Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconScanner as IconComponentType).keywords = [
  "scanner",
  "scanned",
  "scanning",
  "digitizer",
  "recognizer",
  "digitisation",
  "digitization",
  "radio",
  "browser",
  "reader",
];

export default IconScanner as IconComponentType;
