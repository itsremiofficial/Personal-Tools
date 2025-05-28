import { FC } from "react";

const IconFirstline: FC<IconProps> = ({
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
            d="M14.6719 4.5H21.6719"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.6719 9.5H21.6719"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M3.67188 14.5H21.6719"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.67188 19.5H21.6719"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10.1719 8.43V5.57C10.1719 4.45 9.72188 4 8.59188 4H5.74188C4.62188 4 4.17188 4.45 4.17188 5.57V8.42C4.17188 9.55 4.62188 10 5.74188 10H8.59188C9.72188 10 10.1719 9.55 10.1719 8.43Z"
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
            d="M21.6719 5.25H14.6719C14.2619 5.25 13.9219 4.91 13.9219 4.5C13.9219 4.09 14.2619 3.75 14.6719 3.75H21.6719C22.0819 3.75 22.4219 4.09 22.4219 4.5C22.4219 4.91 22.0819 5.25 21.6719 5.25Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21.6719 10.25H14.6719C14.2619 10.25 13.9219 9.91 13.9219 9.5C13.9219 9.09 14.2619 8.75 14.6719 8.75H21.6719C22.0819 8.75 22.4219 9.09 22.4219 9.5C22.4219 9.91 22.0819 10.25 21.6719 10.25Z"
            fill="currentColor"
          />
          <path
            d="M21.6719 15.25H3.67188C3.26188 15.25 2.92188 14.91 2.92188 14.5C2.92188 14.09 3.26188 13.75 3.67188 13.75H21.6719C22.0819 13.75 22.4219 14.09 22.4219 14.5C22.4219 14.91 22.0819 15.25 21.6719 15.25Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21.6719 20.25H3.67188C3.26188 20.25 2.92188 19.91 2.92188 19.5C2.92188 19.09 3.26188 18.75 3.67188 18.75H21.6719C22.0819 18.75 22.4219 19.09 22.4219 19.5C22.4219 19.91 22.0819 20.25 21.6719 20.25Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.59188 3.5H5.75187C4.35187 3.5 3.67188 4.18 3.67188 5.58V8.43C3.67188 9.83 4.35187 10.51 5.75187 10.51H8.60187C10.0019 10.51 10.6819 9.83 10.6819 8.43V5.58C10.6719 4.18 9.99188 3.5 8.59188 3.5Z"
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
            d="M21.6719 5.25H14.6719C14.2619 5.25 13.9219 4.91 13.9219 4.5C13.9219 4.09 14.2619 3.75 14.6719 3.75H21.6719C22.0819 3.75 22.4219 4.09 22.4219 4.5C22.4219 4.91 22.0819 5.25 21.6719 5.25Z"
            fill="currentColor"
          />
          <path
            d="M21.6719 10.25H14.6719C14.2619 10.25 13.9219 9.91 13.9219 9.5C13.9219 9.09 14.2619 8.75 14.6719 8.75H21.6719C22.0819 8.75 22.4219 9.09 22.4219 9.5C22.4219 9.91 22.0819 10.25 21.6719 10.25Z"
            fill="currentColor"
          />
          <path
            d="M21.6719 15.25H3.67188C3.26188 15.25 2.92188 14.91 2.92188 14.5C2.92188 14.09 3.26188 13.75 3.67188 13.75H21.6719C22.0819 13.75 22.4219 14.09 22.4219 14.5C22.4219 14.91 22.0819 15.25 21.6719 15.25Z"
            fill="currentColor"
          />
          <path
            d="M21.6719 20.25H3.67188C3.26188 20.25 2.92188 19.91 2.92188 19.5C2.92188 19.09 3.26188 18.75 3.67188 18.75H21.6719C22.0819 18.75 22.4219 19.09 22.4219 19.5C22.4219 19.91 22.0819 20.25 21.6719 20.25Z"
            fill="currentColor"
          />
          <path
            d="M8.59188 3.5H5.75187C4.35187 3.5 3.67188 4.18 3.67188 5.58V8.43C3.67188 9.83 4.35187 10.51 5.75187 10.51H8.60187C10.0019 10.51 10.6819 9.83 10.6819 8.43V5.58C10.6719 4.18 9.99188 3.5 8.59188 3.5Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconFirstline as IconComponent).keywords = [
  "firstline",
  "adjunctive",
  "antibacterial",
  "antibiotic",
  "anticonvulsant",
  "antidepressant",
  "antifungal",
  "antihypertensive",
  "antimicrobial",
  "antineoplastic",
];

export default IconFirstline as IconComponent;
