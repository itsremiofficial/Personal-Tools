import { FC } from "react";

const IconProgrammingArrows: FC<IconProps> = ({
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
            d="M19.6699 22C21.3268 22 22.6699 20.6569 22.6699 19C22.6699 17.3431 21.3268 16 19.6699 16C18.0131 16 16.6699 17.3431 16.6699 19C16.6699 20.6569 18.0131 22 19.6699 22Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M19.6699 16V6.5C19.6699 5.4 18.7699 4.5 17.6699 4.5H12.1699"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.6699 2L11.6699 4.5L14.6699 7"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.66992 8V17.5C5.66992 18.6 6.56992 19.5 7.66992 19.5H13.1699"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.6699 22L13.6699 19.5L10.6699 17"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M5.66992 8C7.32678 8 8.66992 6.65685 8.66992 5C8.66992 3.34315 7.32678 2 5.66992 2C4.01307 2 2.66992 3.34315 2.66992 5C2.66992 6.65685 4.01307 8 5.66992 8Z"
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
            d="M17.6699 3.74993H13.7399L15.1499 2.57995C15.4699 2.30995 15.5099 1.83995 15.2499 1.51995C14.9799 1.19995 14.5099 1.15992 14.1899 1.41992L11.1899 3.91992C11.0199 4.05992 10.9199 4.26993 10.9199 4.49993C10.9199 4.72993 11.0199 4.92995 11.1899 5.07995L14.1899 7.57995C14.3299 7.69995 14.4999 7.74993 14.6699 7.74993C14.8799 7.74993 15.0999 7.65991 15.2499 7.47991C15.5199 7.15991 15.4699 6.68992 15.1499 6.41992L13.7399 5.24993H17.6699C18.3599 5.24993 18.9199 5.80993 18.9199 6.49993V15.9999C18.9199 16.4099 19.2599 16.7499 19.6699 16.7499C20.0799 16.7499 20.4199 16.4099 20.4199 15.9999V6.49993C20.4199 4.97993 19.1899 3.74993 17.6699 3.74993Z"
            fill="currentColor"
          />
          <path
            d="M19.6699 22C21.3268 22 22.6699 20.6569 22.6699 19C22.6699 17.3431 21.3268 16 19.6699 16C18.0131 16 16.6699 17.3431 16.6699 19C16.6699 20.6569 18.0131 22 19.6699 22Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14.1499 18.92L11.1499 16.42C10.8299 16.15 10.3599 16.2 10.0899 16.52C9.81994 16.84 9.86991 17.31 10.1899 17.58L11.5999 18.75H7.66992C6.97992 18.75 6.41992 18.19 6.41992 17.5V8C6.41992 7.59 6.07992 7.25 5.66992 7.25C5.25992 7.25 4.91992 7.59 4.91992 8V17.5C4.91992 19.02 6.14992 20.25 7.66992 20.25H11.5999L10.1899 21.42C9.86991 21.69 9.82994 22.16 10.0899 22.48C10.2399 22.66 10.4499 22.75 10.6699 22.75C10.8399 22.75 11.0099 22.69 11.1499 22.58L14.1499 20.08C14.3199 19.94 14.4199 19.73 14.4199 19.5C14.4199 19.27 14.3199 19.07 14.1499 18.92Z"
            fill="currentColor"
          />
          <path
            d="M5.66992 8C7.32678 8 8.66992 6.65685 8.66992 5C8.66992 3.34315 7.32678 2 5.66992 2C4.01307 2 2.66992 3.34315 2.66992 5C2.66992 6.65685 4.01307 8 5.66992 8Z"
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
            d="M20.3999 16.0999C20.3999 16.0699 20.4199 16.0399 20.4199 15.9999V6.49993C20.4199 4.97993 19.1899 3.74993 17.6699 3.74993H13.7399L15.1499 2.57993C15.4699 2.30993 15.5099 1.83993 15.2499 1.51993C14.9799 1.19993 14.5099 1.15993 14.1899 1.41993L11.1899 3.91993C11.0199 4.05993 10.9199 4.26993 10.9199 4.49993C10.9199 4.72993 11.0199 4.92993 11.1899 5.07993L14.1899 7.57993C14.3299 7.69993 14.4999 7.74993 14.6699 7.74993C14.8799 7.74993 15.0999 7.65993 15.2499 7.47993C15.5199 7.15993 15.4699 6.68993 15.1499 6.41993L13.7399 5.24993H17.6699C18.3599 5.24993 18.9199 5.80993 18.9199 6.49993V15.9999C18.9199 16.0399 18.9399 16.0699 18.9399 16.0999C17.6399 16.4299 16.6699 17.5999 16.6699 18.9999C16.6699 20.6599 18.0099 21.9999 19.6699 21.9999C21.3299 21.9999 22.6699 20.6599 22.6699 18.9999C22.6699 17.5999 21.6999 16.4299 20.3999 16.0999Z"
            fill="currentColor"
          />
          <path
            d="M14.1499 18.92L11.1499 16.42C10.8299 16.15 10.3599 16.2 10.0899 16.52C9.81992 16.84 9.86992 17.31 10.1899 17.58L11.5999 18.75H7.66992C6.97992 18.75 6.41992 18.19 6.41992 17.5V8C6.41992 7.96 6.39992 7.93 6.39992 7.9C7.69992 7.57 8.66992 6.4 8.66992 5C8.66992 3.34 7.32992 2 5.66992 2C4.00992 2 2.66992 3.34 2.66992 5C2.66992 6.4 3.63992 7.57 4.93992 7.9C4.93992 7.93 4.91992 7.96 4.91992 8V17.5C4.91992 19.02 6.14992 20.25 7.66992 20.25H11.5999L10.1899 21.42C9.86992 21.69 9.82992 22.16 10.0899 22.48C10.2399 22.66 10.4499 22.75 10.6699 22.75C10.8399 22.75 11.0099 22.69 11.1499 22.58L14.1499 20.08C14.3199 19.94 14.4199 19.73 14.4199 19.5C14.4199 19.27 14.3199 19.07 14.1499 18.92Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconProgrammingArrows as IconComponent).keywords = [
  "programming",
  "arrows",
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
  "booms",
  "keys",
  "spires",
  "arrowheads",
  "dates",
  "deflections",
  "leaders",
  "spits",
];

export default IconProgrammingArrows as IconComponent;