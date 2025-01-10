import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconDocumentCopy: FC<IconProps> = ({
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
            d="M17.6699 13.4V16.4C17.6699 20.4 16.0699 22 12.0699 22H8.26992C4.26992 22 2.66992 20.4 2.66992 16.4V12.6C2.66992 8.6 4.26992 7 8.26992 7H11.2699"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.67 13.4H14.47C12.07 13.4 11.27 12.6 11.27 10.2V7L17.67 13.4Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.66992 5C7.66992 3.34 9.00992 2 10.6699 2H16.6699"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.6699 8V14.19C22.6699 15.74 21.4099 17 19.8599 17"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.6699 8H19.6699C17.4199 8 16.6699 7.25 16.6699 5V2L22.6699 8Z"
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
            opacity={duotone ? "0.4" : "1"}
            d="M16.1699 13.15H13.9999C12.2199 13.15 10.7699 11.71 10.7699 9.92V7.75C10.7699 7.34 10.4399 7 10.0199 7H6.84992C4.53992 7 2.66992 8.5 2.66992 11.18V17.82C2.66992 20.5 4.53992 22 6.84992 22H12.7399C15.0499 22 16.9199 20.5 16.9199 17.82V13.9C16.9199 13.48 16.5799 13.15 16.1699 13.15Z"
            fill="currentColor"
          />
          <path
            d="M18.4899 2H16.5199H15.4299H12.5999C10.3399 2 8.50993 3.44 8.42993 6.01C8.48993 6.01 8.53993 6 8.59993 6H11.4299H12.5199H14.4899C16.7999 6 18.6699 7.5 18.6699 10.18V12.15V14.86V16.83C18.6699 16.89 18.6599 16.94 18.6599 16.99C20.8899 16.92 22.6699 15.44 22.6699 12.83V10.86V8.15V6.18C22.6699 3.5 20.7999 2 18.4899 2Z"
            fill="currentColor"
          />
          <path
            d="M12.6498 7.14999C12.3398 6.83999 11.8098 7.04999 11.8098 7.47999V10.1C11.8098 11.2 12.7398 12.1 13.8798 12.1C14.5898 12.11 15.5798 12.11 16.4298 12.11C16.8598 12.11 17.0798 11.61 16.7798 11.31C15.6898 10.22 13.7498 8.26999 12.6498 7.14999Z"
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
            d="M16.1699 13.15H13.9999C12.2199 13.15 10.7699 11.71 10.7699 9.92V7.75C10.7699 7.34 10.4399 7 10.0199 7H6.84992C4.53992 7 2.66992 8.5 2.66992 11.18V17.82C2.66992 20.5 4.53992 22 6.84992 22H12.7399C15.0499 22 16.9199 20.5 16.9199 17.82V13.9C16.9199 13.48 16.5799 13.15 16.1699 13.15Z"
            fill="currentColor"
          />
          <path
            d="M18.4899 2H16.5199H15.4299H12.5999C10.3399 2 8.50993 3.44 8.42993 6.01C8.48993 6.01 8.53993 6 8.59993 6H11.4299H12.5199H14.4899C16.7999 6 18.6699 7.5 18.6699 10.18V12.15V14.86V16.83C18.6699 16.89 18.6599 16.94 18.6599 16.99C20.8899 16.92 22.6699 15.44 22.6699 12.83V10.86V8.15V6.18C22.6699 3.5 20.7999 2 18.4899 2Z"
            fill="currentColor"
          />
          <path
            d="M12.6498 7.14999C12.3398 6.83999 11.8098 7.04999 11.8098 7.47999V10.1C11.8098 11.2 12.7398 12.1 13.8798 12.1C14.5898 12.11 15.5798 12.11 16.4298 12.11C16.8598 12.11 17.0798 11.61 16.7798 11.31C15.6898 10.22 13.7498 8.26999 12.6498 7.14999Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconDocumentCopy as IconComponentType).keywords = [
  "document",
  "copy",
  "papers",
  "text file",
  "written document",
  "documentation",
  "backgrounder",
  "workbook",
  "dossier",
  "handbook",
  "listing",
  "simulate",
  "transcript",
  "imitate",
  "emulate",
  "re-create",
  "ape",
  "written matter",
  "replicate",
  "replica",
];

export default IconDocumentCopy as IconComponentType;
