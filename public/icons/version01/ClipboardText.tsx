import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconClipboardText: FC<IconProps> = ({
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
            d="M7 14.5004H15"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M7 18.0004H12.5"
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
            d="M6.25 14.5004C6.25 14.0862 6.58579 13.7504 7 13.7504H15C15.4142 13.7504 15.75 14.0862 15.75 14.5004C15.75 14.9146 15.4142 15.2504 15 15.2504H7C6.58579 15.2504 6.25 14.9146 6.25 14.5004ZM6.25 18.0004C6.25 17.5862 6.58579 17.2504 7 17.2504H12.5C12.9142 17.2504 13.25 17.5862 13.25 18.0004C13.25 18.4146 12.9142 18.7504 12.5 18.7504H7C6.58579 18.7504 6.25 18.4146 6.25 18.0004Z"
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
            d="M9.5 2.00037C8.67157 2.00037 8 2.67194 8 3.50037V4.50037C8 5.32879 8.67157 6.00037 9.5 6.00037H14.5C15.3284 6.00037 16 5.32879 16 4.50037V3.50037C16 2.67194 15.3284 2.00037 14.5 2.00037H9.5Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.5 4.03698C5.24209 4.10756 4.44798 4.308 3.87868 4.87731C3 5.75599 3 7.1702 3 9.99863V15.9986C3 18.8271 3 20.2413 3.87868 21.1199C4.75736 21.9986 6.17157 21.9986 9 21.9986H15C17.8284 21.9986 19.2426 21.9986 20.1213 21.1199C21 20.2413 21 18.8271 21 15.9986V9.99863C21 7.1702 21 5.75599 20.1213 4.87731C19.552 4.308 18.7579 4.10756 17.5 4.03698V4.50037C17.5 6.15722 16.1569 7.50037 14.5 7.50037H9.5C7.84315 7.50037 6.5 6.15722 6.5 4.50037V4.03698ZM7 13.7504C6.58579 13.7504 6.25 14.0862 6.25 14.5004C6.25 14.9146 6.58579 15.2504 7 15.2504H15C15.4142 15.2504 15.75 14.9146 15.75 14.5004C15.75 14.0862 15.4142 13.7504 15 13.7504H7ZM7 17.2504C6.58579 17.2504 6.25 17.5862 6.25 18.0004C6.25 18.4146 6.58579 18.7504 7 18.7504H12.5C12.9142 18.7504 13.25 18.4146 13.25 18.0004C13.25 17.5862 12.9142 17.2504 12.5 17.2504H7Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconClipboardText as IconComponentType).keywords = [
  "clipboard",
  "text",
  "flipchart",
  "notebook",
  "pad",
  "notepad",
  "whiteboard",
  "pasteboard",
  "chalkboard",
  "sketchpad",
  "copy",
  "schoolbook",
  "textbook",
  "school text",
  "text edition",
  "textual matter",
  "writing",
  "letter",
  "paragraph",
  "manuscript",
];

export default IconClipboardText as IconComponentType;
