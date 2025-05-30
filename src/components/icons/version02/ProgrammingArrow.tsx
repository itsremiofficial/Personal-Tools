import { FC } from "react";

const IconProgrammingArrow: FC<IconProps> = ({
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
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M19.6699 16V6.5C19.6699 5.4 18.7699 4.5 17.6699 4.5H13.1699"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.6699 2L12.6699 4.5L15.6699 7"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M5.66992 9V16"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.91992 8.5C7.71485 8.5 9.16992 7.04493 9.16992 5.25C9.16992 3.45507 7.71485 2 5.91992 2C4.125 2 2.66992 3.45507 2.66992 5.25C2.66992 7.04493 4.125 8.5 5.91992 8.5Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.66992 22C7.32678 22 8.66992 20.6569 8.66992 19C8.66992 17.3431 7.32678 16 5.66992 16C4.01307 16 2.66992 17.3431 2.66992 19C2.66992 20.6569 4.01307 22 5.66992 22Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.6699 22C21.3268 22 22.6699 20.6569 22.6699 19C22.6699 17.3431 21.3268 16 19.6699 16C18.0131 16 16.6699 17.3431 16.6699 19C16.6699 20.6569 18.0131 22 19.6699 22Z"
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
            d="M6.41992 16.11V7.90001C7.70992 7.57001 8.66992 6.40001 8.66992 5.01001C8.66992 3.35001 7.32992 2.01001 5.66992 2.01001C4.00992 2.01001 2.66992 3.35001 2.66992 5.01001C2.66992 6.41001 3.62992 7.57001 4.91992 7.90001V16.11C3.62992 16.44 2.66992 17.61 2.66992 19C2.66992 20.66 4.00992 22 5.66992 22C7.32992 22 8.66992 20.66 8.66992 19C8.66992 17.6 7.70992 16.44 6.41992 16.11Z"
            fill="currentColor"
          />
          <path
            d="M20.4199 16.1099V6.49993C20.4199 4.97993 19.1899 3.74993 17.6699 3.74993H14.7399L16.1499 2.57993C16.4699 2.30993 16.5099 1.83993 16.2499 1.51993C15.9799 1.19993 15.5099 1.15993 15.1899 1.41993L12.1899 3.91993C12.0199 4.05993 11.9199 4.26993 11.9199 4.49993C11.9199 4.72993 12.0199 4.92993 12.1899 5.07993L15.1899 7.57993C15.3299 7.69993 15.4999 7.74993 15.6699 7.74993C15.8799 7.74993 16.0999 7.65993 16.2499 7.47993C16.5199 7.15993 16.4699 6.68993 16.1499 6.41993L14.7399 5.24993H17.6699C18.3599 5.24993 18.9199 5.80993 18.9199 6.49993V16.1099C17.6299 16.4399 16.6699 17.6099 16.6699 18.9999C16.6699 20.6599 18.0099 21.9999 19.6699 21.9999C21.3299 21.9999 22.6699 20.6599 22.6699 18.9999C22.6699 17.5999 21.7099 16.4399 20.4199 16.1099Z"
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
            d="M6.41992 16.11V7.89C7.70992 7.56 8.66992 6.4 8.66992 5C8.66992 3.34 7.32992 2 5.66992 2C4.00992 2 2.66992 3.34 2.66992 5C2.66992 6.4 3.62992 7.56 4.91992 7.89V16.1C3.62992 16.44 2.66992 17.6 2.66992 19C2.66992 20.66 4.00992 22 5.66992 22C7.32992 22 8.66992 20.66 8.66992 19C8.66992 17.6 7.70992 16.44 6.41992 16.11Z"
            fill="currentColor"
          />
          <path
            d="M20.4199 16.1099V6.49993C20.4199 4.97993 19.1899 3.74993 17.6699 3.74993H14.7399L16.1499 2.57993C16.4699 2.30993 16.5099 1.83993 16.2499 1.51993C15.9799 1.19993 15.5099 1.15993 15.1899 1.41993L12.1899 3.91993C12.0199 4.05993 11.9199 4.26993 11.9199 4.49993C11.9199 4.72993 12.0199 4.92993 12.1899 5.07993L15.1899 7.57993C15.3299 7.69993 15.4999 7.74993 15.6699 7.74993C15.8799 7.74993 16.0999 7.65993 16.2499 7.47993C16.5199 7.15993 16.4699 6.68993 16.1499 6.41993L14.7399 5.24993H17.6699C18.3599 5.24993 18.9199 5.80993 18.9199 6.49993V16.1099C17.6299 16.4399 16.6699 17.5999 16.6699 18.9999C16.6699 20.6599 18.0099 21.9999 19.6699 21.9999C21.3299 21.9999 22.6699 20.6599 22.6699 18.9999C22.6699 17.5999 21.7099 16.4399 20.4199 16.1099Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconProgrammingArrow as IconComponent).keywords = [
  "programming",
  "arrow",
  "computer programming",
  "scheduling",
  "airtime",
  "television",
  "broadcasting",
  "plan",
  "software",
  "programmer",
  "programmatic",
  "pointer",
  "archer",
  "archery",
  "dart",
  "arrowhead",
  "bolt",
  "spike",
  "rope",
  "roof",
];

export default IconProgrammingArrow as IconComponent;
