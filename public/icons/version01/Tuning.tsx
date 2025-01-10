import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconTuning: FC<IconProps> = ({
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
            d="M10 9.50049C10 11.1573 8.65685 12.5005 7 12.5005C5.34315 12.5005 4 11.1573 4 9.50049C4 7.84363 5.34315 6.50049 7 6.50049C8.65685 6.50049 10 7.84363 10 9.50049Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M20 14.5005C20 12.8436 18.6569 11.5005 17 11.5005C15.3431 11.5005 14 12.8436 14 14.5005C14 16.1573 15.3431 17.5005 17 17.5005C18.6569 17.5005 20 16.1573 20 14.5005Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M17 11.0005L17.0415 2.00049M7 2.00049L7 6.00049"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M7 13.0005L7 22.0005M17 22.0005V18.0005"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
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
            d="M13.7523 14.5C13.7523 12.8431 15.0955 11.5 16.7523 11.5C18.4092 11.5 19.7523 12.8431 19.7523 14.5C19.7523 16.1569 18.4092 17.5 16.7523 17.5C15.0955 17.5 13.7523 16.1569 13.7523 14.5Z"
            fill="currentColor"
          />
          <path
            d="M3.75232 9.5C3.75232 11.1569 5.09546 12.5 6.75232 12.5C8.40917 12.5 9.75232 11.1569 9.75232 9.5C9.75232 7.84315 8.40917 6.5 6.75232 6.5C5.09547 6.5 3.75232 7.84315 3.75232 9.5Z"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.5" : "1"}>
            <path
              d="M7.46179 6.58416C7.23462 6.52915 6.99735 6.5 6.75327 6.5C6.47931 6.5 6.21394 6.53672 5.96179 6.60551L5.96179 2C5.96179 1.58579 6.29758 1.25 6.71179 1.25C7.12601 1.25 7.46179 1.58579 7.46179 2L7.46179 6.58416Z"
              fill="currentColor"
            />
            <path
              d="M5.96179 12.3945C6.21394 12.4633 6.47931 12.5 6.75327 12.5C6.99735 12.5 7.23462 12.4709 7.46179 12.4158L7.46179 22C7.46179 22.4142 7.12601 22.75 6.71179 22.75C6.29758 22.75 5.96179 22.4142 5.96179 22L5.96179 12.3945Z"
              fill="currentColor"
            />
            <path
              d="M15.9618 17.3945V22C15.9618 22.4142 16.2976 22.75 16.7118 22.75C17.126 22.75 17.4618 22.4142 17.4618 22V17.4158C17.2346 17.4708 16.9973 17.5 16.7533 17.5C16.4793 17.5 16.2139 17.4633 15.9618 17.3945Z"
              fill="currentColor"
            />
            <path
              d="M17.4618 11.5842V2C17.4618 1.58579 17.126 1.25 16.7118 1.25C16.2976 1.25 15.9618 1.58579 15.9618 2V11.6055C16.2139 11.5367 16.4793 11.5 16.7533 11.5C16.9973 11.5 17.2346 11.5291 17.4618 11.5842Z"
              fill="currentColor"
            />
          </g>
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
            d="M16.959 9.75049C16.5448 9.75049 16.209 9.4147 16.209 9.00049L16.209 2.00049C16.209 1.58627 16.5448 1.25049 16.959 1.25049C17.3732 1.25049 17.709 1.58627 17.709 2.00049L17.709 9.00049C17.709 9.4147 17.3732 9.75049 16.959 9.75049Z"
            fill="currentColor"
          />
          <path
            d="M7 12.5005C5.34315 12.5005 4 11.1573 4 9.50049C4 7.84363 5.34315 6.50049 7 6.50049C8.65685 6.50049 10 7.84363 10 9.50049C10 11.1573 8.65685 12.5005 7 12.5005Z"
            fill="currentColor"
          />
          <path
            d="M17 11.5005C15.3431 11.5005 14 12.8436 14 14.5005C14 16.1573 15.3431 17.5005 17 17.5005C18.6569 17.5005 20 16.1573 20 14.5005C20 12.8436 18.6569 11.5005 17 11.5005Z"
            fill="currentColor"
          />
          <path
            d="M6.20901 15.0005C6.20901 14.5863 6.5448 14.2505 6.95901 14.2505C7.37322 14.2505 7.70901 14.5863 7.70901 15.0005V22.0005C7.70901 22.4147 7.37322 22.7505 6.95901 22.7505C6.5448 22.7505 6.20901 22.4147 6.20901 22.0005V15.0005Z"
            fill="currentColor"
          />
          <path
            d="M16.959 22.7505C16.5448 22.7505 16.209 22.4147 16.209 22.0005V20.0005C16.209 19.5863 16.5448 19.2505 16.959 19.2505C17.3732 19.2505 17.709 19.5863 17.709 20.0005V22.0005C17.709 22.4147 17.3732 22.7505 16.959 22.7505Z"
            fill="currentColor"
          />
          <path
            d="M6.20901 2.00049C6.20901 1.58627 6.5448 1.25049 6.95901 1.25049C7.37322 1.25049 7.70901 1.58627 7.70901 2.00049V4.00049C7.70901 4.4147 7.37322 4.75049 6.95901 4.75049C6.5448 4.75049 6.20901 4.4147 6.20901 4.00049V2.00049Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconTuning as IconComponentType).keywords = [
  "tuning",
  "melody",
  "tune up",
  "line",
  "strain",
  "air",
  "melodic line",
  "melodic phrase",
  "tuner",
  "audience",
];

export default IconTuning as IconComponentType;
