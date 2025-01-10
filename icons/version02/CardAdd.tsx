import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconCardAdd: FC<IconProps> = ({
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
              d="M17.1699 6.25H22.6699"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
            />
            <path
              d="M19.9199 9V3.5"
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
            d="M21.6399 1H18.6999C17.4299 1 16.6699 1.76 16.6699 3.03V5.97C16.6699 7.24 17.4299 8 18.6999 8H21.6399C22.9099 8 23.6699 7.24 23.6699 5.97V3.03C23.6699 1.76 22.9099 1 21.6399 1ZM22.5799 4.93C22.4799 5.03 22.3299 5.1 22.1699 5.11H20.7599L20.7699 6.5C20.7599 6.67 20.6999 6.81 20.5799 6.93C20.4799 7.03 20.3299 7.1 20.1699 7.1C19.8399 7.1 19.5699 6.83 19.5699 6.5V5.1L18.1699 5.11C17.8399 5.11 17.5699 4.83 17.5699 4.5C17.5699 4.17 17.8399 3.9 18.1699 3.9L19.5699 3.91V2.51C19.5699 2.18 19.8399 1.9 20.1699 1.9C20.4999 1.9 20.7699 2.18 20.7699 2.51L20.7599 3.9H22.1699C22.4999 3.9 22.7699 4.17 22.7699 4.5C22.7599 4.67 22.6899 4.81 22.5799 4.93Z"
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
            d="M20.6419 2H17.7019C16.4319 2 15.6719 2.76 15.6719 4.03V6.97C15.6719 8.24 16.4319 9 17.7019 9H20.6419C21.9119 9 22.6719 8.24 22.6719 6.97V4.03C22.6719 2.76 21.9119 2 20.6419 2ZM21.5819 5.93C21.4819 6.03 21.3319 6.1 21.1719 6.11H19.7619L19.7719 7.5C19.7619 7.67 19.7019 7.81 19.5819 7.93C19.4819 8.03 19.3319 8.1 19.1719 8.1C18.8419 8.1 18.5719 7.83 18.5719 7.5V6.1L17.1719 6.11C16.8419 6.11 16.5719 5.83 16.5719 5.5C16.5719 5.17 16.8419 4.9 17.1719 4.9L18.5719 4.91V3.51C18.5719 3.18 18.8419 2.9 19.1719 2.9C19.5019 2.9 19.7719 3.18 19.7719 3.51L19.7619 4.9H21.1719C21.5019 4.9 21.7719 5.17 21.7719 5.5C21.7619 5.67 21.6919 5.81 21.5819 5.93Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCardAdd as IconComponentType).keywords = [
  "card",
  "add",
  "scorecard",
  "batting order",
  "identity card",
  "visiting card",
  "calling card",
  "lineup",
  "poster",
  "placard",
  "tease",
  "total",
  "sum up",
  "tot up",
  "add up",
  "sum",
  "summate",
  "impart",
  "contribute",
  "supply",
];

export default IconCardAdd as IconComponentType;
