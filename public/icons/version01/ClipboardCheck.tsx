import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconClipboardCheck: FC<IconProps> = ({
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
            d="M16 4.00037C18.175 4.01247 19.3529 4.10892 20.1213 4.87731C21 5.75599 21 7.1702 21 9.99863V15.9986C21 18.8271 21 20.2413 20.1213 21.1199C19.2426 21.9986 17.8284 21.9986 15 21.9986H9C6.17157 21.9986 4.75736 21.9986 3.87868 21.1199C3 20.2413 3 18.8271 3 15.9986V9.99863C3 7.1702 3 5.75599 3.87868 4.87731C4.64706 4.10892 5.82497 4.01247 8 4.00037"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M9 13.4004L10.7143 15.0004L15 11.0004"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
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
            d="M15.5483 10.4886C15.8309 10.7914 15.8146 11.266 15.5117 11.5487L11.226 15.5487C10.9379 15.8176 10.4907 15.8176 10.2025 15.5487L8.48826 13.9487C8.18545 13.666 8.16909 13.1914 8.45171 12.8886C8.73434 12.5858 9.20893 12.5695 9.51174 12.8521L10.7143 13.9745L14.4883 10.4521C14.7911 10.1695 15.2657 10.1858 15.5483 10.4886Z"
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
            d="M6.5 4.03698C5.24209 4.10756 4.44798 4.308 3.87868 4.87731C3 5.75599 3 7.1702 3 9.99863V15.9986C3 18.8271 3 20.2413 3.87868 21.1199C4.75736 21.9986 6.17157 21.9986 9 21.9986H15C17.8284 21.9986 19.2426 21.9986 20.1213 21.1199C21 20.2413 21 18.8271 21 15.9986V9.99863C21 7.1702 21 5.75599 20.1213 4.87731C19.552 4.308 18.7579 4.10756 17.5 4.03698V4.50037C17.5 6.15722 16.1569 7.50037 14.5 7.50037H9.5C7.84315 7.50037 6.5 6.15722 6.5 4.50037V4.03698ZM15.5117 12.5487C15.8146 12.266 15.8309 11.7914 15.5483 11.4886C15.2657 11.1858 14.7911 11.1695 14.4883 11.4521L10.7143 14.9745L9.51174 13.8521C9.20893 13.5695 8.73434 13.5858 8.45171 13.8886C8.16909 14.1914 8.18545 14.666 8.48826 14.9487L10.2025 16.5487C10.4907 16.8176 10.9379 16.8176 11.226 16.5487L15.5117 12.5487Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconClipboardCheck as IconComponentType).keywords = [
  "clipboard",
  "check",
  "flipchart",
  "notebook",
  "pad",
  "notepad",
  "whiteboard",
  "pasteboard",
  "chalkboard",
  "sketchpad",
  "copy",
  "match",
  "hitch",
  "check out",
  "curb",
  "check into",
  "checkout",
  "turn back",
  "arrest",
  "hold",
];

export default IconClipboardCheck as IconComponentType;
