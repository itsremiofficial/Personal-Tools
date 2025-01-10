import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconArchiveBook: FC<IconProps> = ({
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
            d="M21.6699 7V17C21.6699 20 20.1699 22 16.6699 22H8.66992C5.16992 22 3.66992 20 3.66992 17V7C3.66992 4 5.16992 2 8.66992 2H16.6699C20.1699 2 21.6699 4 21.6699 7Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.1699 2V9.85999C16.1699 10.3 15.6499 10.52 15.3299 10.23L13.0099 8.09003C12.8199 7.91003 12.5199 7.91003 12.3299 8.09003L10.0099 10.23C9.68995 10.52 9.16992 10.3 9.16992 9.85999V2H16.1699Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M13.9199 14H18.1699"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.66992 18H18.1699"
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
            d="M21.6699 7V17C21.6699 20 20.1699 22 16.6699 22H8.66992C5.16992 22 3.66992 20 3.66992 17V7C3.66992 4 5.16992 2 8.66992 2H16.6699C20.1699 2 21.6699 4 21.6699 7Z"
            fill="currentColor"
          />
          <path
            d="M16.1699 2V9.85999C16.1699 10.3 15.6499 10.52 15.3299 10.23L13.0099 8.09C12.8199 7.91 12.5199 7.91 12.3299 8.09L10.0099 10.23C9.68995 10.53 9.16992 10.3 9.16992 9.85999V2H16.1699Z"
            fill="currentColor"
          />
          <path
            d="M18.1699 14.75H13.9199C13.5099 14.75 13.1699 14.41 13.1699 14C13.1699 13.59 13.5099 13.25 13.9199 13.25H18.1699C18.5799 13.25 18.9199 13.59 18.9199 14C18.9199 14.41 18.5799 14.75 18.1699 14.75Z"
            fill="currentColor"
          />
          <path
            d="M18.1699 18.75H9.66992C9.25992 18.75 8.91992 18.41 8.91992 18C8.91992 17.59 9.25992 17.25 9.66992 17.25H18.1699C18.5799 17.25 18.9199 17.59 18.9199 18C18.9199 18.41 18.5799 18.75 18.1699 18.75Z"
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
            d="M15.6 2.5V8.4C15.6 8.84 15.08 9.06 14.76 8.77L13.01 7.16C12.82 6.98 12.52 6.98 12.33 7.16L10.58 8.76C10.26 9.06 9.73999 8.83 9.73999 8.4V2.5C9.73999 2.22 9.95999 2 10.24 2H15.1C15.38 2 15.6 2.22 15.6 2.5Z"
            fill="currentColor"
          />
          <path
            d="M17.6499 2.06001C17.3599 2.02001 17.0999 2.27001 17.0999 2.56001V8.58001C17.0999 9.34001 16.6499 10.03 15.9499 10.34C15.2499 10.64 14.4399 10.51 13.8799 9.99001L13.0099 9.19001C12.8199 9.01001 12.5299 9.01001 12.3299 9.19001L11.4599 9.99001C11.0999 10.33 10.6299 10.5 10.1599 10.5C9.89992 10.5 9.63992 10.45 9.38992 10.34C8.68992 10.03 8.23992 9.34001 8.23992 8.58001V2.56001C8.23992 2.27001 7.97992 2.02001 7.68992 2.06001C4.88992 2.41001 3.66992 4.30001 3.66992 7.00001V17C3.66992 20 5.16992 22 8.66992 22H16.6699C20.1699 22 21.6699 20 21.6699 17V7.00001C21.6699 4.30001 20.4499 2.41001 17.6499 2.06001ZM18.1699 18.75H9.66992C9.25992 18.75 8.91992 18.41 8.91992 18C8.91992 17.59 9.25992 17.25 9.66992 17.25H18.1699C18.5799 17.25 18.9199 17.59 18.9199 18C18.9199 18.41 18.5799 18.75 18.1699 18.75ZM18.1699 14.75H13.9199C13.5099 14.75 13.1699 14.41 13.1699 14C13.1699 13.59 13.5099 13.25 13.9199 13.25H18.1699C18.5799 13.25 18.9199 13.59 18.9199 14C18.9199 14.41 18.5799 14.75 18.1699 14.75Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconArchiveBook as IconComponentType).keywords = [
  "archive",
  "book",
  "file away",
  "archival",
  "file",
  "record-keeping",
  "registry",
  "record",
  "photo",
  "filer",
  "filename",
  "daybook",
  "script",
  "playscript",
  "ledger",
  "account book",
  "volume",
  "reserve",
  "hold",
];

export default IconArchiveBook as IconComponentType;
