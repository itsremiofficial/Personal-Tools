import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconTicket: FC<IconProps> = ({
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
            d="M20.1699 12.5C20.1699 11.12 21.2899 10 22.6699 10V9C22.6699 5 21.6699 4 17.6699 4H7.66992C3.66992 4 2.66992 5 2.66992 9V9.5C4.04992 9.5 5.16992 10.62 5.16992 12C5.16992 13.38 4.04992 14.5 2.66992 14.5V15C2.66992 19 3.66992 20 7.66992 20H17.6699C21.6699 20 22.6699 19 22.6699 15C21.2899 15 20.1699 13.88 20.1699 12.5Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10.6699 4L10.6699 20"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="5 5"
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
            d="M10.6699 9.08V6.25C10.2599 6.25 9.91992 5.91 9.91992 5.5V3.25H7.66992C3.25992 3.25 1.91992 4.59 1.91992 9V9.5C1.91992 9.91 2.25992 10.25 2.66992 10.25C3.62992 10.25 4.41992 11.04 4.41992 12C4.41992 12.96 3.62992 13.75 2.66992 13.75C2.25992 13.75 1.91992 14.09 1.91992 14.5V15C1.91992 19.41 3.25992 20.75 7.66992 20.75H9.91992V18.5C9.91992 18.09 10.2599 17.75 10.6699 17.75V14.92C10.2599 14.92 9.91992 14.58 9.91992 14.17V9.83C9.91992 9.42 10.2599 9.08 10.6699 9.08Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20.9199 12.5C20.9199 13.46 21.7099 14.25 22.6699 14.25C23.0799 14.25 23.4199 14.59 23.4199 15C23.4199 19.41 22.0799 20.75 17.6699 20.75H11.4199V18.5C11.4199 18.09 11.0799 17.75 10.6699 17.75V14.92C11.0799 14.92 11.4199 14.58 11.4199 14.17V9.83C11.4199 9.42 11.0799 9.08 10.6699 9.08V6.25C11.0799 6.25 11.4199 5.91 11.4199 5.5V3.25H17.6699C22.0799 3.25 23.4199 4.59 23.4199 9V10C23.4199 10.41 23.0799 10.75 22.6699 10.75C21.7099 10.75 20.9199 11.54 20.9199 12.5Z"
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
            d="M22.6719 10.75C23.0819 10.75 23.4219 10.41 23.4219 10V9C23.4219 4.59 22.0819 3.25 17.6719 3.25H11.4219V5.5C11.4219 5.91 11.0819 6.25 10.6719 6.25C10.2619 6.25 9.92188 5.91 9.92188 5.5V3.25H7.67188C3.26188 3.25 1.92188 4.59 1.92188 9V9.5C1.92188 9.91 2.26188 10.25 2.67188 10.25C3.63188 10.25 4.42188 11.04 4.42188 12C4.42188 12.96 3.63188 13.75 2.67188 13.75C2.26188 13.75 1.92188 14.09 1.92188 14.5V15C1.92188 19.41 3.26188 20.75 7.67188 20.75H9.92188V18.5C9.92188 18.09 10.2619 17.75 10.6719 17.75C11.0819 17.75 11.4219 18.09 11.4219 18.5V20.75H17.6719C22.0819 20.75 23.4219 19.41 23.4219 15C23.4219 14.59 23.0819 14.25 22.6719 14.25C21.7119 14.25 20.9219 13.46 20.9219 12.5C20.9219 11.54 21.7119 10.75 22.6719 10.75ZM11.4219 14.17C11.4219 14.58 11.0819 14.92 10.6719 14.92C10.2619 14.92 9.92188 14.58 9.92188 14.17V9.83C9.92188 9.42 10.2619 9.08 10.6719 9.08C11.0819 9.08 11.4219 9.42 11.4219 9.83V14.17Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconTicket as IconComponentType).keywords = [
  "ticket",
  "fine",
  "coupon",
  "itinerary",
  "passport",
  "place",
  "engineer",
  "flag",
  "airfare",
  "travel",
];

export default IconTicket as IconComponentType;
