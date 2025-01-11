import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconClipboard: FC<IconProps> = ({
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
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M16 4.00208C18.175 4.01418 19.3529 4.11063 20.1213 4.87902C21 5.7577 21 7.17191 21 10.0003V16.0003C21 18.8288 21 20.243 20.1213 21.1217C19.2426 22.0003 17.8284 22.0003 15 22.0003H9C6.17157 22.0003 4.75736 22.0003 3.87868 21.1217C3 20.243 3 18.8288 3 16.0003V10.0003C3 7.17191 3 5.7577 3.87868 4.87902C4.64706 4.11063 5.82497 4.01418 8 4.00208"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M8 14.0004H16"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M7 10.5004H17"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M9 17.5004H15"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M8 3.50037C8 2.67194 8.67157 2.00037 9.5 2.00037H14.5C15.3284 2.00037 16 2.67194 16 3.50037V4.50037C16 5.32879 15.3284 6.00037 14.5 6.00037H9.5C8.67157 6.00037 8 5.32879 8 4.50037V3.50037Z"
            stroke="currentColor"
            strokeWidth={width}
          />
        </svg>
      ) : duotone ? (
        <svg
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M21 15.9986V9.99863C21 7.1702 21 5.75599 20.1213 4.87731C19.3529 4.10892 18.175 4.01247 16 4.00037H8C5.82497 4.01247 4.64706 4.10892 3.87868 4.87731C3 5.75599 3 7.1702 3 9.99863V15.9986C3 18.8271 3 20.2413 3.87868 21.1199C4.75736 21.9986 6.17157 21.9986 9 21.9986H15C17.8284 21.9986 19.2426 21.9986 20.1213 21.1199C21 20.2413 21 18.8271 21 15.9986Z"
            fill="currentColor"
          />
          <path
            d="M8 3.50037C8 2.67194 8.67157 2.00037 9.5 2.00037H14.5C15.3284 2.00037 16 2.67194 16 3.50037V4.50037C16 5.32879 15.3284 6.00037 14.5 6.00037H9.5C8.67157 6.00037 8 5.32879 8 4.50037V3.50037Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.25 10.5004C6.25 10.0862 6.58579 9.75037 7 9.75037H17C17.4142 9.75037 17.75 10.0862 17.75 10.5004C17.75 10.9146 17.4142 11.2504 17 11.2504H7C6.58579 11.2504 6.25 10.9146 6.25 10.5004ZM7.25 14.0004C7.25 13.5862 7.58579 13.2504 8 13.2504H16C16.4142 13.2504 16.75 13.5862 16.75 14.0004C16.75 14.4146 16.4142 14.7504 16 14.7504H8C7.58579 14.7504 7.25 14.4146 7.25 14.0004ZM8.25 17.5004C8.25 17.0862 8.58579 16.7504 9 16.7504H15C15.4142 16.7504 15.75 17.0862 15.75 17.5004C15.75 17.9146 15.4142 18.2504 15 18.2504H9C8.58579 18.2504 8.25 17.9146 8.25 17.5004Z"
            fill="currentColor"
          />
        </svg>
      ) : (
        <svg
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 3.50037C8 2.67194 8.67157 2.00037 9.5 2.00037H14.5C15.3284 2.00037 16 2.67194 16 3.50037V4.50037C16 5.32879 15.3284 6.00037 14.5 6.00037H9.5C8.67157 6.00037 8 5.32879 8 4.50037V3.50037Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.5 4.03698C5.24209 4.10756 4.44798 4.308 3.87868 4.87731C3 5.75599 3 7.1702 3 9.99863V15.9986C3 18.8271 3 20.2413 3.87868 21.1199C4.75736 21.9986 6.17157 21.9986 9 21.9986H15C17.8284 21.9986 19.2426 21.9986 20.1213 21.1199C21 20.2413 21 18.8271 21 15.9986V9.99863C21 7.1702 21 5.75599 20.1213 4.87731C19.552 4.308 18.7579 4.10756 17.5 4.03698V4.50037C17.5 6.15722 16.1569 7.50037 14.5 7.50037H9.5C7.84315 7.50037 6.5 6.15722 6.5 4.50037V4.03698ZM6.25 10.5004C6.25 10.0862 6.58579 9.75037 7 9.75037H17C17.4142 9.75037 17.75 10.0862 17.75 10.5004C17.75 10.9146 17.4142 11.2504 17 11.2504H7C6.58579 11.2504 6.25 10.9146 6.25 10.5004ZM7.25 14.0004C7.25 13.5862 7.58579 13.2504 8 13.2504H16C16.4142 13.2504 16.75 13.5862 16.75 14.0004C16.75 14.4146 16.4142 14.7504 16 14.7504H8C7.58579 14.7504 7.25 14.4146 7.25 14.0004ZM8.25 17.5004C8.25 17.0862 8.58579 16.7504 9 16.7504H15C15.4142 16.7504 15.75 17.0862 15.75 17.5004C15.75 17.9146 15.4142 18.2504 15 18.2504H9C8.58579 18.2504 8.25 17.9146 8.25 17.5004Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconClipboard as IconComponentType).keywords = [
  "clipboard",
  "flipchart",
  "notebook",
  "pad",
  "notepad",
  "whiteboard",
  "pasteboard",
  "chalkboard",
  "sketchpad",
  "copy",
];

export default IconClipboard as IconComponentType;