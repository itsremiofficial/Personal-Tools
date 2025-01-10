import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconTask: FC<IconProps> = ({
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
            d="M11.6699 19.5H21.6699"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M11.6699 12.5H21.6699"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M11.6699 5.5H21.6699"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.66992 5.5L4.66992 6.5L7.66992 3.5"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.66992 12.5L4.66992 13.5L7.66992 10.5"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.66992 19.5L4.66992 20.5L7.66992 17.5"
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
            d="M20.67 19.26H11.6C11.15 19.26 10.78 18.89 10.78 18.44C10.78 17.99 11.15 17.62 11.6 17.62H20.67C21.12 17.62 21.49 17.99 21.49 18.44C21.49 18.9 21.12 19.26 20.67 19.26Z"
            fill="currentColor"
          />
          <path
            d="M20.67 12.97H11.6C11.15 12.97 10.78 12.6 10.78 12.15C10.78 11.7 11.15 11.33 11.6 11.33H20.67C21.12 11.33 21.49 11.7 21.49 12.15C21.49 12.6 21.12 12.97 20.67 12.97Z"
            fill="currentColor"
          />
          <path
            d="M20.67 6.67003H11.6C11.15 6.67003 10.78 6.30003 10.78 5.85003C10.78 5.40003 11.15 5.03003 11.6 5.03003H20.67C21.12 5.03003 21.49 5.40003 21.49 5.85003C21.49 6.30003 21.12 6.67003 20.67 6.67003Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M5.57985 8.03004C5.35985 8.03004 5.14985 7.94004 4.99985 7.79004L4.08985 6.88004C3.76985 6.56004 3.76985 6.04004 4.08985 5.72004C4.40985 5.40004 4.92985 5.40004 5.24985 5.72004L5.57985 6.05004L7.71985 3.91004C8.03985 3.59004 8.55985 3.59004 8.87985 3.91004C9.19985 4.23004 9.19985 4.75004 8.87985 5.07004L6.15985 7.79004C5.99985 7.94004 5.79985 8.03004 5.57985 8.03004Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M5.57985 14.33C5.36985 14.33 5.15985 14.25 4.99985 14.09L4.08985 13.18C3.76985 12.86 3.76985 12.34 4.08985 12.02C4.40985 11.7 4.92985 11.7 5.24985 12.02L5.57985 12.35L7.71985 10.21C8.03985 9.88997 8.55985 9.88997 8.87985 10.21C9.19985 10.53 9.19985 11.05 8.87985 11.37L6.15985 14.09C5.99985 14.25 5.78985 14.33 5.57985 14.33Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M5.57985 20.33C5.36985 20.33 5.15985 20.25 4.99985 20.09L4.08985 19.18C3.76985 18.86 3.76985 18.34 4.08985 18.02C4.40985 17.7 4.92985 17.7 5.24985 18.02L5.57985 18.35L7.71985 16.21C8.03985 15.89 8.55985 15.89 8.87985 16.21C9.19985 16.53 9.19985 17.05 8.87985 17.37L6.15985 20.09C5.99985 20.25 5.78985 20.33 5.57985 20.33Z"
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
            d="M20.67 19.26H11.6C11.15 19.26 10.78 18.89 10.78 18.44C10.78 17.99 11.15 17.62 11.6 17.62H20.67C21.12 17.62 21.49 17.99 21.49 18.44C21.49 18.9 21.12 19.26 20.67 19.26Z"
            fill="currentColor"
          />
          <path
            d="M20.67 12.97H11.6C11.15 12.97 10.78 12.6 10.78 12.15C10.78 11.7 11.15 11.33 11.6 11.33H20.67C21.12 11.33 21.49 11.7 21.49 12.15C21.49 12.6 21.12 12.97 20.67 12.97Z"
            fill="currentColor"
          />
          <path
            d="M20.67 6.67003H11.6C11.15 6.67003 10.78 6.30003 10.78 5.85003C10.78 5.40003 11.15 5.03003 11.6 5.03003H20.67C21.12 5.03003 21.49 5.40003 21.49 5.85003C21.49 6.30003 21.12 6.67003 20.67 6.67003Z"
            fill="currentColor"
          />
          <path
            d="M5.57985 8.03004C5.35985 8.03004 5.14985 7.94004 4.99985 7.79004L4.08985 6.88004C3.76985 6.56004 3.76985 6.04004 4.08985 5.72004C4.40985 5.40004 4.92985 5.40004 5.24985 5.72004L5.57985 6.05004L7.71985 3.91004C8.03985 3.59004 8.55985 3.59004 8.87985 3.91004C9.19985 4.23004 9.19985 4.75004 8.87985 5.07004L6.15985 7.79004C5.99985 7.94004 5.79985 8.03004 5.57985 8.03004Z"
            fill="currentColor"
          />
          <path
            d="M5.57985 14.33C5.36985 14.33 5.15985 14.25 4.99985 14.09L4.08985 13.18C3.76985 12.86 3.76985 12.34 4.08985 12.02C4.40985 11.7 4.92985 11.7 5.24985 12.02L5.57985 12.35L7.71985 10.21C8.03985 9.88997 8.55985 9.88997 8.87985 10.21C9.19985 10.53 9.19985 11.05 8.87985 11.37L6.15985 14.09C5.99985 14.25 5.78985 14.33 5.57985 14.33Z"
            fill="currentColor"
          />
          <path
            d="M5.57985 20.33C5.36985 20.33 5.15985 20.25 4.99985 20.09L4.08985 19.18C3.76985 18.86 3.76985 18.34 4.08985 18.02C4.40985 17.7 4.92985 17.7 5.24985 18.02L5.57985 18.35L7.71985 16.21C8.03985 15.89 8.55985 15.89 8.87985 16.21C9.19985 16.53 9.19985 17.05 8.87985 17.37L6.15985 20.09C5.99985 20.25 5.78985 20.33 5.57985 20.33Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconTask as IconComponentType).keywords = [
  "task",
  "job",
  "chore",
  "project",
  "labor",
  "tax",
  "undertaking",
  "work",
  "assignment",
  "mission",
];

export default IconTask as IconComponentType;
