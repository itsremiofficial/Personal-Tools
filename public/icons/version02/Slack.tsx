import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconSlack: FC<IconProps> = ({
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
            d="M15.2101 2.26001C14.1801 2.26001 13.3501 3.09 13.3501 4.12V8.76001C13.3501 9.79001 14.1801 10.62 15.2101 10.62C16.2401 10.62 17.0701 9.79001 17.0701 8.76001V4.12C17.0701 3.09 16.2401 2.26001 15.2101 2.26001Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19.29 10.62H20.86C21.73 10.62 22.43 9.91999 22.43 9.04999C22.43 8.17999 21.73 7.48001 20.86 7.48001C19.99 7.48001 19.29 8.17999 19.29 9.04999V10.62Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.66992 9.23001C2.66992 10.26 3.49992 11.09 4.52992 11.09H9.16992C10.1999 11.09 11.0299 10.26 11.0299 9.23001C11.0299 8.20001 10.1999 7.37 9.16992 7.37H4.52992C3.49992 7.37 2.66992 8.20001 2.66992 9.23001Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M11.0301 5.13V3.56C11.0301 2.69 10.3301 1.98999 9.46013 1.98999C8.59013 1.98999 7.89014 2.69 7.89014 3.56C7.89014 4.43 8.59013 5.13 9.46013 5.13H11.0301Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.0997 21.77C11.1297 21.77 11.9597 20.94 11.9597 19.91V15.27C11.9597 14.24 11.1297 13.41 10.0997 13.41C9.06973 13.41 8.23975 14.24 8.23975 15.27V19.91C8.23975 20.93 9.06973 21.77 10.0997 21.77Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6.03014 13.41H4.46013C3.59013 13.41 2.89014 14.11 2.89014 14.98C2.89014 15.85 3.59013 16.55 4.46013 16.55C5.33013 16.55 6.03014 15.85 6.03014 14.98V13.41Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.6398 14.8C22.6398 13.77 21.8098 12.94 20.7798 12.94H16.1398C15.1098 12.94 14.2798 13.77 14.2798 14.8C14.2798 15.83 15.1098 16.66 16.1398 16.66H20.7798C21.8098 16.66 22.6398 15.83 22.6398 14.8Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14.2798 18.84V20.41C14.2798 21.28 14.9798 21.98 15.8498 21.98C16.7198 21.98 17.4198 21.28 17.4198 20.41C17.4198 19.54 16.7198 18.84 15.8498 18.84H14.2798Z"
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
            opacity={duotone ? "0.58" : "1"}
            d="M24.6699 0H0.669922V24H24.6699V0Z"
            fill="none"
          />
          <path
            d="M15.21 1.88C13.98 1.88 12.98 2.88001 12.98 4.11001V8.75001C12.98 9.98001 13.98 10.98 15.21 10.98C16.44 10.98 17.44 9.98001 17.44 8.75001V4.11001C17.44 2.89001 16.44 1.88 15.21 1.88Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20.8501 7.10999C19.7801 7.10999 18.9102 7.97999 18.9102 9.04999V10.62C18.9102 10.83 19.0801 11 19.2901 11H20.8602C21.9302 11 22.8002 10.13 22.8002 9.05998C22.8002 7.98998 21.9201 7.10999 20.8501 7.10999Z"
            fill="currentColor"
          />
          <path
            d="M9.1698 6.98999H4.5298C3.2998 6.98999 2.2998 7.98999 2.2998 9.21999C2.2998 10.45 3.2998 11.45 4.5298 11.45H9.1698C10.3998 11.45 11.3998 10.45 11.3998 9.21999C11.3998 7.98999 10.3998 6.98999 9.1698 6.98999Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.46001 1.62C8.39001 1.62 7.52002 2.48999 7.52002 3.55999C7.52002 4.62999 8.39001 5.49999 9.46001 5.49999H11.03C11.24 5.49999 11.41 5.33 11.41 5.12V3.55C11.4 2.5 10.53 1.62 9.46001 1.62Z"
            fill="currentColor"
          />
          <path
            d="M10.1001 13.03C8.87011 13.03 7.87012 14.03 7.87012 15.26V19.9C7.87012 21.13 8.87011 22.13 10.1001 22.13C11.3301 22.13 12.3301 21.13 12.3301 19.9V15.26C12.3301 14.03 11.3301 13.03 10.1001 13.03Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6.03001 13.03H4.46001C3.39001 13.03 2.52002 13.9 2.52002 14.97C2.52002 16.04 3.39001 16.91 4.46001 16.91C5.53001 16.91 6.40001 16.04 6.40001 14.97V13.4C6.40001 13.2 6.23001 13.03 6.03001 13.03Z"
            fill="currentColor"
          />
          <path
            d="M20.7802 12.5699H16.1402C14.9102 12.5699 13.9102 13.5699 13.9102 14.7999C13.9102 16.0299 14.9102 17.0299 16.1402 17.0299H20.7802C22.0102 17.0299 23.0101 16.0299 23.0101 14.7999C23.0101 13.5699 22.0102 12.5699 20.7802 12.5699Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.8499 18.47H14.2799C14.0699 18.47 13.8999 18.64 13.8999 18.85V20.42C13.8999 21.49 14.7699 22.36 15.8399 22.36C16.9099 22.36 17.7799 21.49 17.7799 20.42C17.7899 19.34 16.9199 18.47 15.8499 18.47Z"
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
            d="M15.21 1.88C13.98 1.88 12.98 2.87999 12.98 4.10999V8.75C12.98 9.98 13.98 10.98 15.21 10.98C16.44 10.98 17.44 9.98 17.44 8.75V4.10999C17.44 2.88999 16.44 1.88 15.21 1.88Z"
            fill="none"
          />
          <path
            d="M20.8501 7.10999C19.7801 7.10999 18.9102 7.97999 18.9102 9.04999V10.62C18.9102 10.83 19.0801 11 19.2901 11H20.8602C21.9302 11 22.8002 10.13 22.8002 9.06C22.8002 7.99 21.9201 7.10999 20.8501 7.10999Z"
            fill="none"
          />
          <path
            d="M9.1698 6.98999H4.5298C3.2998 6.98999 2.2998 7.99 2.2998 9.22C2.2998 10.45 3.2998 11.45 4.5298 11.45H9.1698C10.3998 11.45 11.3998 10.45 11.3998 9.22C11.3998 7.99 10.3998 6.98999 9.1698 6.98999Z"
            fill="none"
          />
          <path
            d="M9.46001 1.62C8.39001 1.62 7.52002 2.49 7.52002 3.56C7.52002 4.63 8.39001 5.5 9.46001 5.5H11.03C11.24 5.5 11.41 5.33 11.41 5.12V3.54999C11.4 2.49999 10.53 1.62 9.46001 1.62Z"
            fill="none"
          />
          <path
            d="M10.1001 13.03C8.87011 13.03 7.87012 14.03 7.87012 15.26V19.9C7.87012 21.13 8.87011 22.13 10.1001 22.13C11.3301 22.13 12.3301 21.13 12.3301 19.9V15.26C12.3301 14.03 11.3301 13.03 10.1001 13.03Z"
            fill="none"
          />
          <path
            d="M6.03001 13.03H4.46001C3.39001 13.03 2.52002 13.9 2.52002 14.97C2.52002 16.04 3.39001 16.91 4.46001 16.91C5.53001 16.91 6.40001 16.04 6.40001 14.97V13.4C6.40001 13.2 6.23001 13.03 6.03001 13.03Z"
            fill="none"
          />
          <path
            d="M20.7802 12.57H16.1402C14.9102 12.57 13.9102 13.57 13.9102 14.8C13.9102 16.03 14.9102 17.03 16.1402 17.03H20.7802C22.0102 17.03 23.0101 16.03 23.0101 14.8C23.0101 13.57 22.0102 12.57 20.7802 12.57Z"
            fill="none"
          />
          <path
            d="M15.8499 18.47H14.2799C14.0699 18.47 13.8999 18.64 13.8999 18.85V20.42C13.8999 21.49 14.7699 22.36 15.8399 22.36C16.9099 22.36 17.7799 21.49 17.7799 20.42C17.7899 19.34 16.9199 18.47 15.8499 18.47Z"
            fill="none"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSlack as IconComponentType).keywords = [
  "slack",
  "slow",
  "slack off",
  "slow up",
  "slow down",
  "slacken",
  "abate",
  "let up",
  "die away",
  "weak",
];

export default IconSlack as IconComponentType;
