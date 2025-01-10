import { FC } from "react";

const IconRuler: FC<IconProps> = ({
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
          <g clipPath="url(#clip0_12_78719)">
            <path
              d="M5.66992 17H19.6699C21.6699 17 22.6699 16 22.6699 14V10C22.6699 8 21.6699 7 19.6699 7H5.66992C3.66992 7 2.66992 8 2.66992 10V14C2.66992 16 3.66992 17 5.66992 17Z"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M18.6699 7V12"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M6.66992 7V11"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10.7199 7L10.6699 12"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M14.6699 7V10"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
            />
          </g>
          <defs>
            <clipPath>
              <rect
                width="24"
                height="24"
                fill="none"
                transform="translate(0.669922)"
              />
            </clipPath>
          </defs>
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
            d="M5.66992 17H19.6699C21.3299 17 22.6699 15.66 22.6699 14V10C22.6699 8.34 21.3299 7 19.6699 7H5.66992C4.00992 7 2.66992 8.34 2.66992 10V14C2.66992 15.66 4.00992 17 5.66992 17Z"
            fill="currentColor"
          />
          <path
            d="M19.4199 7V12C19.4199 12.41 19.0799 12.75 18.6699 12.75C18.2599 12.75 17.9199 12.41 17.9199 12V7H19.4199Z"
            fill="currentColor"
          />
          <path
            d="M7.41992 7V10.8C7.41992 11.21 7.07992 11.55 6.66992 11.55C6.25992 11.55 5.91992 11.21 5.91992 10.8V7H7.41992Z"
            fill="currentColor"
          />
          <path
            d="M11.4599 7L11.4199 12.01C11.4199 12.42 11.0799 12.75 10.6699 12.75C10.6699 12.75 10.6699 12.75 10.6599 12.75C10.2499 12.75 9.91992 12.41 9.91992 11.99L9.95992 7H11.4599Z"
            fill="currentColor"
          />
          <path
            d="M15.4199 7V9.6C15.4199 10.01 15.0799 10.35 14.6699 10.35C14.2599 10.35 13.9199 10.01 13.9199 9.6V7H15.4199Z"
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
            d="M19.6699 7C19.5299 7 19.4199 7.11 19.4199 7.25V12C19.4199 12.41 19.0799 12.75 18.6699 12.75C18.2599 12.75 17.9199 12.41 17.9199 12V7.25C17.9199 7.11 17.8099 7 17.6699 7H15.6699C15.5299 7 15.4199 7.11 15.4199 7.25V9.6C15.4199 10.01 15.0799 10.35 14.6699 10.35C14.2599 10.35 13.9199 10.01 13.9199 9.6V7.25C13.9199 7.11 13.8099 7 13.6699 7H11.7099C11.5699 7 11.4599 7.11 11.4599 7.25L11.4199 12.01C11.4199 12.42 11.0799 12.75 10.6699 12.75C10.6699 12.75 10.6699 12.75 10.6599 12.75C10.2499 12.75 9.91992 12.41 9.91992 11.99L9.95992 7.25C9.95992 7.11 9.84992 7 9.70992 7H7.66992C7.52992 7 7.41992 7.11 7.41992 7.25V10.8C7.41992 11.21 7.07992 11.55 6.66992 11.55C6.25992 11.55 5.91992 11.21 5.91992 10.8V7.25C5.91992 7.11 5.80992 7 5.66992 7C4.00992 7 2.66992 8.34 2.66992 10V14C2.66992 15.66 4.00992 17 5.66992 17H19.6699C21.3299 17 22.6699 15.66 22.6699 14V10C22.6699 8.34 21.3299 7 19.6699 7Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconRuler as IconComponent).keywords = [
  "ruler",
  "rule",
  "ndp",
  "head",
  "roi",
  "officer",
  "leadership",
  "boss",
  "leader",
  "administrator",
];

export default IconRuler as IconComponent;
