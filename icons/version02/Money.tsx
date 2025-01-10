import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconMoney: FC<IconProps> = ({
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
            d="M17.6699 20.5H7.66992C4.66992 20.5 2.66992 19 2.66992 15.5V8.5C2.66992 5 4.66992 3.5 7.66992 3.5H17.6699C20.6699 3.5 22.6699 5 22.6699 8.5V15.5C22.6699 19 20.6699 20.5 17.6699 20.5Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.6699 15C14.3268 15 15.6699 13.6569 15.6699 12C15.6699 10.3431 14.3268 9 12.6699 9C11.0131 9 9.66992 10.3431 9.66992 12C9.66992 13.6569 11.0131 15 12.6699 15Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6.16992 9.5V14.5"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19.1699 9.5V14.5"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
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
            d="M17.6699 20.5H7.66992C4.66992 20.5 2.66992 19 2.66992 15.5V8.5C2.66992 5 4.66992 3.5 7.66992 3.5H17.6699C20.6699 3.5 22.6699 5 22.6699 8.5V15.5C22.6699 19 20.6699 20.5 17.6699 20.5Z"
            fill="currentColor"
          />
          <path
            d="M12.6699 15C14.3268 15 15.6699 13.6569 15.6699 12C15.6699 10.3431 14.3268 9 12.6699 9C11.0131 9 9.66992 10.3431 9.66992 12C9.66992 13.6569 11.0131 15 12.6699 15Z"
            fill="currentColor"
          />
          <path
            d="M6.16992 15.25C5.75992 15.25 5.41992 14.91 5.41992 14.5V9.5C5.41992 9.09 5.75992 8.75 6.16992 8.75C6.57992 8.75 6.91992 9.09 6.91992 9.5V14.5C6.91992 14.91 6.57992 15.25 6.16992 15.25Z"
            fill="currentColor"
          />
          <path
            d="M19.1699 15.25C18.7599 15.25 18.4199 14.91 18.4199 14.5V9.5C18.4199 9.09 18.7599 8.75 19.1699 8.75C19.5799 8.75 19.9199 9.09 19.9199 9.5V14.5C19.9199 14.91 19.5799 15.25 19.1699 15.25Z"
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
            d="M17.6719 3.5H7.67188C4.67188 3.5 2.67188 5 2.67188 8.5V15.5C2.67188 19 4.67188 20.5 7.67188 20.5H17.6719C20.6719 20.5 22.6719 19 22.6719 15.5V8.5C22.6719 5 20.6719 3.5 17.6719 3.5ZM6.92188 14.5C6.92188 14.91 6.58188 15.25 6.17188 15.25C5.76187 15.25 5.42188 14.91 5.42188 14.5V9.5C5.42188 9.09 5.76187 8.75 6.17188 8.75C6.58188 8.75 6.92188 9.09 6.92188 9.5V14.5ZM12.6719 15C11.0119 15 9.67188 13.66 9.67188 12C9.67188 10.34 11.0119 9 12.6719 9C14.3319 9 15.6719 10.34 15.6719 12C15.6719 13.66 14.3319 15 12.6719 15ZM19.9219 14.5C19.9219 14.91 19.5819 15.25 19.1719 15.25C18.7619 15.25 18.4219 14.91 18.4219 14.5V9.5C18.4219 9.09 18.7619 8.75 19.1719 8.75C19.5819 8.75 19.9219 9.09 19.9219 9.5V14.5Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMoney as IconComponentType).keywords = [
  "money",
  "rich",
  "monied",
  "wealthy",
  "affluent",
  "loaded",
  "flush",
  "muni",
  "finance",
  "financing",
];

export default IconMoney as IconComponentType;
