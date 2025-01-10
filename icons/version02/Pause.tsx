import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconPause: FC<IconProps> = ({
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
            d="M11.3199 19.11V4.89C11.3199 3.54 10.7499 3 9.30992 3H5.67992C4.23992 3 3.66992 3.54 3.66992 4.89V19.11C3.66992 20.46 4.23992 21 5.67992 21H9.30992C10.7499 21 11.3199 20.46 11.3199 19.11Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.6695 19.11V4.89C21.6695 3.54 21.0995 3 19.6595 3H16.0295C14.5995 3 14.0195 3.54 14.0195 4.89V19.11C14.0195 20.46 14.5895 21 16.0295 21H19.6595C21.0995 21 21.6695 20.46 21.6695 19.11Z"
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
            d="M11.3199 19.11V4.89C11.3199 3.54 10.7499 3 9.30992 3H5.67992C4.23992 3 3.66992 3.54 3.66992 4.89V19.11C3.66992 20.46 4.23992 21 5.67992 21H9.30992C10.7499 21 11.3199 20.46 11.3199 19.11Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21.6695 19.11V4.89C21.6695 3.54 21.0995 3 19.6595 3H16.0295C14.5995 3 14.0195 3.54 14.0195 4.89V19.11C14.0195 20.46 14.5895 21 16.0295 21H19.6595C21.0995 21 21.6695 20.46 21.6695 19.11Z"
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
            d="M11.3199 19.11V4.89C11.3199 3.54 10.7499 3 9.30992 3H5.67992C4.23992 3 3.66992 3.54 3.66992 4.89V19.11C3.66992 20.46 4.23992 21 5.67992 21H9.30992C10.7499 21 11.3199 20.46 11.3199 19.11Z"
            fill="currentColor"
          />
          <path
            d="M21.6695 19.11V4.89C21.6695 3.54 21.0995 3 19.6595 3H16.0295C14.5995 3 14.0195 3.54 14.0195 4.89V19.11C14.0195 20.46 14.5895 21 16.0295 21H19.6595C21.0995 21 21.6695 20.46 21.6695 19.11Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconPause as IconComponentType).keywords = [
  "pause",
  "suspension",
  "intermit",
  "interruption",
  "hesitate",
  "break",
  "intermission",
  "respite",
  "hiatus",
  "stoppage",
];

export default IconPause as IconComponentType;
