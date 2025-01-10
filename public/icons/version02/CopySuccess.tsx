import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconCopySuccess: FC<IconProps> = ({
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
            d="M22.6699 11.1V6.9C22.6699 3.4 21.2699 2 17.7699 2H13.5699C10.0699 2 8.66992 3.4 8.66992 6.9V8H11.7699C15.2699 8 16.6699 9.4 16.6699 12.9V16H17.7699C21.2699 16 22.6699 14.6 22.6699 11.1Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.6699 17.1V12.9C16.6699 9.4 15.2699 8 11.7699 8H7.56992C4.06992 8 2.66992 9.4 2.66992 12.9V17.1C2.66992 20.6 4.06992 22 7.56992 22H11.7699C15.2699 22 16.6699 20.6 16.6699 17.1Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.75 15L8.7 16.95L12.59 13.05"
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
            d="M17.7697 2H13.5697C10.1197 2 8.71969 3.37 8.67969 6.75H11.7697C15.9697 6.75 17.9197 8.7 17.9197 12.9V15.99C21.2997 15.95 22.6697 14.55 22.6697 11.1V6.9C22.6697 3.4 21.2697 2 17.7697 2Z"
            fill="currentColor"
          />
          <path
            d="M11.7699 8H7.56992C4.06992 8 2.66992 9.4 2.66992 12.9V17.1C2.66992 20.6 4.06992 22 7.56992 22H11.7699C15.2699 22 16.6699 20.6 16.6699 17.1V12.9C16.6699 9.4 15.2699 8 11.7699 8ZM12.9599 13.65L9.24992 17.36C9.10992 17.5 8.92992 17.57 8.73992 17.57C8.54992 17.57 8.36992 17.5 8.22992 17.36L6.36992 15.5C6.08992 15.22 6.08992 14.77 6.36992 14.49C6.64992 14.21 7.09992 14.21 7.37992 14.49L8.72992 15.84L11.9399 12.63C12.2199 12.35 12.6699 12.35 12.9499 12.63C13.2299 12.91 13.2399 13.37 12.9599 13.65Z"
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
            d="M17.7697 2H13.5697C10.4866 2 9.04066 3.09409 8.73943 5.73901C8.67641 6.29235 9.13468 6.75 9.69159 6.75H11.7697C15.9697 6.75 17.9197 8.7 17.9197 12.9V14.9781C17.9197 15.535 18.3773 15.9933 18.9307 15.9303C21.5756 15.629 22.6697 14.1831 22.6697 11.1V6.9C22.6697 3.4 21.2697 2 17.7697 2Z"
            fill="currentColor"
          />
          <path
            d="M11.7699 8H7.56992C4.06992 8 2.66992 9.4 2.66992 12.9V17.1C2.66992 20.6 4.06992 22 7.56992 22H11.7699C15.2699 22 16.6699 20.6 16.6699 17.1V12.9C16.6699 9.4 15.2699 8 11.7699 8ZM12.9599 13.65L9.24992 17.36C9.10992 17.5 8.92992 17.57 8.73992 17.57C8.54992 17.57 8.36992 17.5 8.22992 17.36L6.36992 15.5C6.08992 15.22 6.08992 14.77 6.36992 14.49C6.64992 14.21 7.09992 14.21 7.37992 14.49L8.72992 15.84L11.9399 12.63C12.2199 12.35 12.6699 12.35 12.9499 12.63C13.2299 12.91 13.2399 13.37 12.9599 13.65Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCopySuccess as IconComponentType).keywords = [
  "copy",
  "success",
  "simulate",
  "transcript",
  "imitate",
  "emulate",
  "re-create",
  "ape",
  "written matter",
  "replicate",
  "replica",
  "achiever",
  "winner",
  "successful",
  "achievement",
  "accomplishment",
  "attainment",
  "successfully",
  "avail",
  "breakthrough",
];

export default IconCopySuccess as IconComponentType;
