import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconSound: FC<IconProps> = ({
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
            d="M3.66992 8.25V15.75"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.16992 5.75V18.25"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.6699 3.25V20.75"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17.1699 5.75V18.25"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.6699 8.25V15.75"
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
            d="M3.66992 16.5C3.25992 16.5 2.91992 16.16 2.91992 15.75V8.25C2.91992 7.84 3.25992 7.5 3.66992 7.5C4.07992 7.5 4.41992 7.84 4.41992 8.25V15.75C4.41992 16.16 4.07992 16.5 3.66992 16.5Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.16992 19C7.75992 19 7.41992 18.66 7.41992 18.25V5.75C7.41992 5.34 7.75992 5 8.16992 5C8.57992 5 8.91992 5.34 8.91992 5.75V18.25C8.91992 18.66 8.57992 19 8.16992 19Z"
            fill="currentColor"
          />
          <path
            d="M12.6699 21.5C12.2599 21.5 11.9199 21.16 11.9199 20.75V3.25C11.9199 2.84 12.2599 2.5 12.6699 2.5C13.0799 2.5 13.4199 2.84 13.4199 3.25V20.75C13.4199 21.16 13.0799 21.5 12.6699 21.5Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17.1699 19C16.7599 19 16.4199 18.66 16.4199 18.25V5.75C16.4199 5.34 16.7599 5 17.1699 5C17.5799 5 17.9199 5.34 17.9199 5.75V18.25C17.9199 18.66 17.5799 19 17.1699 19Z"
            fill="currentColor"
          />
          <path
            d="M21.6699 16.5C21.2599 16.5 20.9199 16.16 20.9199 15.75V8.25C20.9199 7.84 21.2599 7.5 21.6699 7.5C22.0799 7.5 22.4199 7.84 22.4199 8.25V15.75C22.4199 16.16 22.0799 16.5 21.6699 16.5Z"
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
            d="M3.66992 16.5C3.25992 16.5 2.91992 16.16 2.91992 15.75V8.25C2.91992 7.84 3.25992 7.5 3.66992 7.5C4.07992 7.5 4.41992 7.84 4.41992 8.25V15.75C4.41992 16.16 4.07992 16.5 3.66992 16.5Z"
            fill="currentColor"
          />
          <path
            d="M8.16992 19C7.75992 19 7.41992 18.66 7.41992 18.25V5.75C7.41992 5.34 7.75992 5 8.16992 5C8.57992 5 8.91992 5.34 8.91992 5.75V18.25C8.91992 18.66 8.57992 19 8.16992 19Z"
            fill="currentColor"
          />
          <path
            d="M12.6699 21.5C12.2599 21.5 11.9199 21.16 11.9199 20.75V3.25C11.9199 2.84 12.2599 2.5 12.6699 2.5C13.0799 2.5 13.4199 2.84 13.4199 3.25V20.75C13.4199 21.16 13.0799 21.5 12.6699 21.5Z"
            fill="currentColor"
          />
          <path
            d="M17.1699 19C16.7599 19 16.4199 18.66 16.4199 18.25V5.75C16.4199 5.34 16.7599 5 17.1699 5C17.5799 5 17.9199 5.34 17.9199 5.75V18.25C17.9199 18.66 17.5799 19 17.1699 19Z"
            fill="currentColor"
          />
          <path
            d="M21.6699 16.5C21.2599 16.5 20.9199 16.16 20.9199 15.75V8.25C20.9199 7.84 21.2599 7.5 21.6699 7.5C22.0799 7.5 22.4199 7.84 22.4199 8.25V15.75C22.4199 16.16 22.0799 16.5 21.6699 16.5Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSound as IconComponentType).keywords = [
  "sound",
  "healthy",
  "strong",
  "intelligent",
  "good",
  "dependable",
  "sensible",
  "levelheaded",
  "substantial",
  "well-grounded",
];

export default IconSound as IconComponentType;
