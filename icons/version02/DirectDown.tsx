import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconDirectDown: FC<IconProps> = ({
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
            d="M9.84021 19.2901L3.74021 7.70015C2.29021 4.95015 5.22021 1.96015 8.00021 3.35015L11.2402 4.97015C12.1402 5.42015 13.2002 5.42015 14.1002 4.97015L17.3402 3.35015C20.1202 1.96015 23.0402 4.95015 21.6002 7.70015L15.5002 19.2901C14.3002 21.5701 11.0402 21.5701 9.84021 19.2901Z"
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
            d="M17.6901 2.7202L14.2101 4.4602C13.2401 4.9402 12.1101 4.9402 11.1401 4.4602L7.65014 2.7102C4.67014 1.2202 1.52014 4.4402 3.08014 7.3902L3.90014 8.9302C4.01014 9.1402 4.19014 9.3102 4.41014 9.4102L17.0601 15.1002C17.5801 15.3302 18.1901 15.1202 18.4501 14.6202L22.2601 7.3802C23.8101 4.4402 20.6701 1.2202 17.6901 2.7202Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.2704 16.3102L7.99037 12.5802C7.06037 12.1602 6.12037 13.1602 6.60037 14.0602L9.64037 19.8302C10.9304 22.2802 14.4304 22.2802 15.7204 19.8302L16.7904 17.7902C17.0704 17.2402 16.8304 16.5702 16.2704 16.3102Z"
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
          <g clipPath="url(#clip0_12_64928)">
            <path
              d="M17.6901 2.7202L14.2101 4.4602C13.2401 4.9402 12.1101 4.9402 11.1401 4.4602L7.65014 2.7102C4.67014 1.2202 1.52014 4.4402 3.08014 7.3902L3.90014 8.9302C4.01014 9.1402 4.19014 9.3102 4.41014 9.4102L17.0601 15.1002C17.5801 15.3302 18.1901 15.1202 18.4501 14.6202L22.2601 7.3802C23.8101 4.4402 20.6701 1.2202 17.6901 2.7202Z"
              fill="currentColor"
            />
            <path
              d="M16.2704 16.3102L7.99037 12.5802C7.06037 12.1602 6.12037 13.1602 6.60037 14.0602L9.64037 19.8302C10.9304 22.2802 14.4304 22.2802 15.7204 19.8302L16.7904 17.7902C17.0704 17.2402 16.8304 16.5702 16.2704 16.3102Z"
              fill="currentColor"
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
      )}
    </>
  );
};

// Keywords for search and categorization
(IconDirectDown as IconComponentType).keywords = [
  "direct",
  "down",
  "straightforward",
  "directly",
  "forthright",
  "plainspoken",
  "man-to-man",
  "straight",
  "frank",
  "free-spoken",
  "outspoken",
  "downwards",
  "downward",
  "downbound",
  "falling",
  "fallen",
  "pull down",
  "downwardly",
  "declining",
  "descending",
];

export default IconDirectDown as IconComponentType;
