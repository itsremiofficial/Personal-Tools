import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconCardRemove: FC<IconProps> = ({
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
            d="M2.66992 8.5H14.1699"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6.66992 16.5H8.66992"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M11.1699 16.5H15.1699"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.6699 12.03V16.11C22.6699 19.62 21.7799 20.5 18.2299 20.5H7.10992C3.55992 20.5 2.66992 19.62 2.66992 16.11V7.89C2.66992 4.38 3.55992 3.5 7.10992 3.5H14.1699"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M17.9785 8.18957L21.8585 4.30957"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
            />
            <path
              d="M21.8585 8.18957L17.9785 4.30957"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
            />
          </g>
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
            d="M22.6699 7.77002V9.00002H2.66992V7.54002C2.66992 5.25002 4.52992 3.40002 6.81992 3.40002H16.6699V5.97002C16.6699 7.24002 17.4299 8.00002 18.6999 8.00002H21.6399C22.0399 8.00002 22.3799 7.93002 22.6699 7.77002Z"
            fill="currentColor"
          />
          <path
            d="M2.66992 9V16.46C2.66992 18.75 4.52992 20.6 6.81992 20.6H18.5199C20.8099 20.6 22.6699 18.75 22.6699 16.46V9H2.66992ZM8.66992 17.25H6.66992C6.25992 17.25 5.91992 16.91 5.91992 16.5C5.91992 16.09 6.25992 15.75 6.66992 15.75H8.66992C9.07992 15.75 9.41992 16.09 9.41992 16.5C9.41992 16.91 9.07992 17.25 8.66992 17.25ZM15.1699 17.25H11.1699C10.7599 17.25 10.4199 16.91 10.4199 16.5C10.4199 16.09 10.7599 15.75 11.1699 15.75H15.1699C15.5799 15.75 15.9199 16.09 15.9199 16.5C15.9199 16.91 15.5799 17.25 15.1699 17.25Z"
            fill="currentColor"
          />
          <path
            d="M21.6399 1H18.6999C17.4299 1 16.6699 1.76 16.6699 3.03V5.97C16.6699 7.24 17.4299 8 18.6999 8H21.6399C22.9099 8 23.6699 7.24 23.6699 5.97V3.03C23.6699 1.76 22.9099 1 21.6399 1ZM22.0099 5.49C22.1199 5.62 22.1799 5.76 22.1799 5.93C22.1799 6.07 22.1199 6.23 22.0099 6.34C21.7799 6.57 21.3899 6.57 21.1599 6.34L20.1699 5.35L19.1899 6.35C18.9599 6.58 18.5699 6.58 18.3299 6.34C18.0999 6.11 18.0999 5.72 18.3299 5.49L19.3299 4.51L18.3399 3.52C18.1099 3.29 18.0999 2.9 18.3299 2.66C18.5599 2.42 18.9499 2.43 19.1899 2.67L20.1699 3.66L21.1699 2.66C21.3999 2.43 21.7899 2.43 22.0199 2.66C22.1299 2.79 22.1799 2.94 22.1899 3.1C22.1899 3.24 22.1299 3.4 22.0299 3.52L21.0299 4.52L22.0099 5.49Z"
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
            d="M2.67188 11.46V16.46C2.67188 18.75 4.52187 20.6 6.81187 20.6H18.5219C20.8119 20.6 22.6719 18.74 22.6719 16.45V11.46C22.6719 10.79 22.1319 10.25 21.4619 10.25H3.88188C3.21188 10.25 2.67188 10.79 2.67188 11.46ZM8.67188 17.25H6.67188C6.26187 17.25 5.92188 16.91 5.92188 16.5C5.92188 16.09 6.26187 15.75 6.67188 15.75H8.67188C9.08187 15.75 9.42188 16.09 9.42188 16.5C9.42188 16.91 9.08187 17.25 8.67188 17.25ZM15.1719 17.25H11.1719C10.7619 17.25 10.4219 16.91 10.4219 16.5C10.4219 16.09 10.7619 15.75 11.1719 15.75H15.1719C15.5819 15.75 15.9219 16.09 15.9219 16.5C15.9219 16.91 15.5819 17.25 15.1719 17.25Z"
            fill="currentColor"
          />
          <path
            d="M14.1719 4.61002V7.54002C14.1719 8.21002 13.6319 8.75002 12.9619 8.75002H3.88188C3.20188 8.75002 2.67188 8.19002 2.67188 7.52002C2.68187 6.39002 3.13188 5.36002 3.88188 4.61002C4.63188 3.86002 5.67188 3.40002 6.81187 3.40002H12.9619C13.6319 3.40002 14.1719 3.94002 14.1719 4.61002Z"
            fill="currentColor"
          />
          <path
            d="M20.6419 2H17.7019C16.4319 2 15.6719 2.76 15.6719 4.03V6.97C15.6719 8.24 16.4319 9 17.7019 9H20.6419C21.9119 9 22.6719 8.24 22.6719 6.97V4.03C22.6719 2.76 21.9119 2 20.6419 2ZM21.0119 6.49C21.1219 6.62 21.1819 6.76 21.1819 6.93C21.1819 7.07 21.1219 7.23 21.0119 7.34C20.7819 7.57 20.3919 7.57 20.1619 7.34L19.1719 6.35L18.1919 7.35C17.9619 7.58 17.5719 7.58 17.3319 7.34C17.1019 7.11 17.1019 6.72 17.3319 6.49L18.3319 5.51L17.3419 4.52C17.1119 4.29 17.1019 3.9 17.3319 3.66C17.5619 3.42 17.9519 3.43 18.1919 3.67L19.1719 4.66L20.1719 3.66C20.4019 3.43 20.7919 3.43 21.0219 3.66C21.1319 3.79 21.1819 3.94 21.1919 4.1C21.1919 4.24 21.1319 4.4 21.0319 4.52L20.0319 5.52L21.0119 6.49Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCardRemove as IconComponentType).keywords = [
  "card",
  "remove",
  "scorecard",
  "batting order",
  "identity card",
  "visiting card",
  "calling card",
  "lineup",
  "poster",
  "placard",
  "tease",
  "take out",
  "get rid of",
  "take away",
  "move out",
  "bump off",
  "slay",
  "murder",
  "take",
  "transfer",
];

export default IconCardRemove as IconComponentType;
