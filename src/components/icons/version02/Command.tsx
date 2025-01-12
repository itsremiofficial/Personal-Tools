import { FC } from "react";

const IconCommand: FC<IconProps> = ({
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
            d="M16.6699 8H8.66992V16H16.6699V8Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.66992 22C7.31992 22 8.66992 20.65 8.66992 19V16H5.66992C4.01992 16 2.66992 17.35 2.66992 19C2.66992 20.65 4.01992 22 5.66992 22Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M5.66992 8H8.66992V5C8.66992 3.35 7.31992 2 5.66992 2C4.01992 2 2.66992 3.35 2.66992 5C2.66992 6.65 4.01992 8 5.66992 8Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.6699 8H19.6699C21.3199 8 22.6699 6.65 22.6699 5C22.6699 3.35 21.3199 2 19.6699 2C18.0199 2 16.6699 3.35 16.6699 5V8Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19.6699 22C21.3199 22 22.6699 20.65 22.6699 19C22.6699 17.35 21.3199 16 19.6699 16H16.6699V19C16.6699 20.65 18.0199 22 19.6699 22Z"
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
          <path d="M16.6699 8H8.66992V16H16.6699V8Z" fill="currentColor" />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M5.66992 22C7.31992 22 8.66992 20.65 8.66992 19V16H5.66992C4.01992 16 2.66992 17.35 2.66992 19C2.66992 20.65 4.01992 22 5.66992 22Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M5.66992 8H8.66992V5C8.66992 3.35 7.31992 2 5.66992 2C4.01992 2 2.66992 3.35 2.66992 5C2.66992 6.65 4.01992 8 5.66992 8Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.6699 8H19.6699C21.3199 8 22.6699 6.65 22.6699 5C22.6699 3.35 21.3199 2 19.6699 2C18.0199 2 16.6699 3.35 16.6699 5V8Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19.6699 22C21.3199 22 22.6699 20.65 22.6699 19C22.6699 17.35 21.3199 16 19.6699 16H16.6699V19C16.6699 20.65 18.0199 22 19.6699 22Z"
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
          <path d="M16.6699 8H8.66992V16H16.6699V8Z" fill="currentColor" />
          <path
            d="M2.66992 19C2.66992 20.65 4.01992 22 5.66992 22C7.31992 22 8.66992 20.65 8.66992 19V16H5.66992C4.01992 16 2.66992 17.35 2.66992 19Z"
            fill="currentColor"
          />
          <path
            d="M5.66992 2C4.01992 2 2.66992 3.35 2.66992 5C2.66992 6.65 4.01992 8 5.66992 8H8.66992V5C8.66992 3.35 7.31992 2 5.66992 2Z"
            fill="currentColor"
          />
          <path
            d="M22.6699 5C22.6699 3.35 21.3199 2 19.6699 2C18.0199 2 16.6699 3.35 16.6699 5V8H19.6699C21.3199 8 22.6699 6.65 22.6699 5Z"
            fill="currentColor"
          />
          <path
            d="M19.6699 16H16.6699V19C16.6699 20.65 18.0199 22 19.6699 22C21.3199 22 22.6699 20.65 22.6699 19C22.6699 17.35 21.3199 16 19.6699 16Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCommand as IconComponent).keywords = [
  "command",
  "control",
  "bidding",
  "mastery",
  "dominate",
  "instruction",
  "require",
  "statement",
  "compel",
  "overlook",
];

export default IconCommand as IconComponent;
