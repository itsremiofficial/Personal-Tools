import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconMath: FC<IconProps> = ({
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
            d="M15.0908 5.63965H22.3708"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2.96973 5.64014H10.2497"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.0908 15.3301H22.3708"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.0908 21.3896H22.3708"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.7598 9.27V2"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.96973 22L10.2497 14.73"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.2497 22L2.96973 14.73"
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
            opacity={duotone ? "0.4" : "1"}
            d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2Z"
            fill="currentColor"
          />
          <path
            d="M11.1699 8.81006H6.66992C6.25992 8.81006 5.91992 8.47006 5.91992 8.06006C5.91992 7.65006 6.25992 7.31006 6.66992 7.31006H11.1699C11.5799 7.31006 11.9199 7.65006 11.9199 8.06006C11.9199 8.47006 11.5799 8.81006 11.1699 8.81006Z"
            fill="currentColor"
          />
          <path
            d="M18.6699 14.8101H14.1699C13.7599 14.8101 13.4199 14.4701 13.4199 14.0601C13.4199 13.6501 13.7599 13.3101 14.1699 13.3101H18.6699C19.0799 13.3101 19.4199 13.6501 19.4199 14.0601C19.4199 14.4701 19.0799 14.8101 18.6699 14.8101Z"
            fill="currentColor"
          />
          <path
            d="M18.6699 18.5601H14.1699C13.7599 18.5601 13.4199 18.2201 13.4199 17.8101C13.4199 17.4001 13.7599 17.0601 14.1699 17.0601H18.6699C19.0799 17.0601 19.4199 17.4001 19.4199 17.8101C19.4199 18.2201 19.0799 18.5601 18.6699 18.5601Z"
            fill="currentColor"
          />
          <path
            d="M18.6699 7.31006H17.1899V5.81006C17.1899 5.40006 16.8499 5.06006 16.4399 5.06006C16.0299 5.06006 15.6899 5.40006 15.6899 5.81006V7.31006H14.1699C13.7599 7.31006 13.4199 7.65006 13.4199 8.06006C13.4199 8.47006 13.7599 8.81006 14.1699 8.81006H15.6899V10.3101C15.6899 10.7201 16.0299 11.0601 16.4399 11.0601C16.8499 11.0601 17.1899 10.7201 17.1899 10.3101V8.81006H18.6699C19.0799 8.81006 19.4199 8.47006 19.4199 8.06006C19.4199 7.65006 19.0799 7.31006 18.6699 7.31006Z"
            fill="currentColor"
          />
          <path
            d="M9.98035 15.94L11.7004 14.22C11.9904 13.93 11.9904 13.45 11.7004 13.16C11.4104 12.87 10.9304 12.87 10.6404 13.16L8.92035 14.88L7.20035 13.16C6.91035 12.87 6.43035 12.87 6.14035 13.16C5.85035 13.45 5.85035 13.93 6.14035 14.22L7.86035 15.94L6.14035 17.66C5.85035 17.95 5.85035 18.43 6.14035 18.72C6.29035 18.87 6.48035 18.94 6.67035 18.94C6.86035 18.94 7.05035 18.87 7.20035 18.72L8.92035 17L10.6404 18.72C10.7904 18.87 10.9804 18.94 11.1704 18.94C11.3604 18.94 11.5504 18.87 11.7004 18.72C11.9904 18.43 11.9904 17.95 11.7004 17.66L9.98035 15.94Z"
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
            d="M16.8619 2H8.48187C4.84187 2 2.67188 4.17 2.67188 7.81V16.18C2.67188 19.83 4.84187 22 8.48187 22H16.8519C20.4919 22 22.6619 19.83 22.6619 16.19V7.81C22.6719 4.17 20.5019 2 16.8619 2ZM11.7019 17.66C11.9919 17.95 11.9919 18.43 11.7019 18.72C11.5519 18.87 11.3619 18.94 11.1719 18.94C10.9819 18.94 10.7919 18.87 10.6419 18.72L8.92188 17L7.20188 18.72C7.05188 18.86 6.86188 18.94 6.67188 18.94C6.48187 18.94 6.29187 18.87 6.14187 18.72C5.85187 18.43 5.85187 17.95 6.14187 17.66L7.86188 15.94L6.14187 14.22C5.85187 13.93 5.85187 13.45 6.14187 13.16C6.43187 12.87 6.91188 12.87 7.20188 13.16L8.92188 14.88L10.6419 13.16C10.9319 12.87 11.4119 12.87 11.7019 13.16C11.9919 13.45 11.9919 13.93 11.7019 14.22L9.98188 15.94L11.7019 17.66ZM11.1719 8.81H6.67188C6.26187 8.81 5.92188 8.47 5.92188 8.06C5.92188 7.65 6.26187 7.31 6.67188 7.31H11.1719C11.5819 7.31 11.9219 7.65 11.9219 8.06C11.9219 8.47 11.5819 8.81 11.1719 8.81ZM18.6719 18.56H14.1719C13.7619 18.56 13.4219 18.22 13.4219 17.81C13.4219 17.4 13.7619 17.06 14.1719 17.06H18.6719C19.0819 17.06 19.4219 17.4 19.4219 17.81C19.4219 18.22 19.0819 18.56 18.6719 18.56ZM18.6719 14.81H14.1719C13.7619 14.81 13.4219 14.47 13.4219 14.06C13.4219 13.65 13.7619 13.31 14.1719 13.31H18.6719C19.0819 13.31 19.4219 13.65 19.4219 14.06C19.4219 14.47 19.0819 14.81 18.6719 14.81ZM18.6719 8.81H17.1919V10.31C17.1919 10.72 16.8519 11.06 16.4419 11.06C16.0319 11.06 15.6919 10.72 15.6919 10.31V8.81H14.1719C13.7619 8.81 13.4219 8.47 13.4219 8.06C13.4219 7.65 13.7619 7.31 14.1719 7.31H15.6919V5.81C15.6919 5.4 16.0319 5.06 16.4419 5.06C16.8519 5.06 17.1919 5.4 17.1919 5.81V7.31H18.6719C19.0819 7.31 19.4219 7.65 19.4219 8.06C19.4219 8.47 19.0819 8.81 18.6719 8.81Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMath as IconComponentType).keywords = [
  "math",
  "mathematics",
  "mathematically",
  "calculus",
  "calculation",
  "calculated",
  "mathematician",
  "mathematical",
  "arithmetic",
  "algebra",
];

export default IconMath as IconComponentType;
