import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconQuoteDownCircle: FC<IconProps> = ({
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
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M7.67188 12.1599H10.3519C11.0619 12.1599 11.5419 12.6999 11.5419 13.3499V14.84C11.5419 15.49 11.0619 16.03 10.3519 16.03H8.86188C8.21188 16.03 7.67188 15.49 7.67188 14.84V12.1599Z"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.67188 12.16C7.67188 9.36997 8.19187 8.89997 9.76187 7.96997"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.8125 12.1599H16.4925C17.2025 12.1599 17.6825 12.6999 17.6825 13.3499V14.84C17.6825 15.49 17.2025 16.03 16.4925 16.03H15.0025C14.3525 16.03 13.8125 15.49 13.8125 14.84V12.1599Z"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.8125 12.16C13.8125 9.36997 14.3325 8.89997 15.9025 7.96997"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M12.6719 22C18.1947 22 22.6719 17.5228 22.6719 12C22.6719 6.47715 18.1947 2 12.6719 2C7.14903 2 2.67188 6.47715 2.67188 12C2.67188 17.5228 7.14903 22 12.6719 22Z"
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
            d="M12.6719 22C18.1947 22 22.6719 17.5228 22.6719 12C22.6719 6.47715 18.1947 2 12.6719 2C7.14903 2 2.67188 6.47715 2.67188 12C2.67188 17.5228 7.14903 22 12.6719 22Z"
            fill="currentColor"
          />
          <path
            d="M8.86188 16.78H10.3519C11.4419 16.78 12.2919 15.93 12.2919 14.84V13.35C12.2919 12.26 11.4419 11.41 10.3519 11.41H8.44188C8.52188 9.59997 8.94187 9.33 10.1519 8.62C10.5119 8.41 10.6219 7.95003 10.4119 7.59003C10.2719 7.35003 10.0219 7.21997 9.76187 7.21997C9.63187 7.21997 9.50188 7.25001 9.38188 7.32001C7.59188 8.38001 6.92188 9.07002 6.92188 12.15V14.82C6.92188 15.91 7.79188 16.78 8.86188 16.78Z"
            fill="currentColor"
          />
          <path
            d="M14.9918 16.78H16.4818C17.5718 16.78 18.4218 15.93 18.4218 14.84V13.35C18.4218 12.26 17.5718 11.41 16.4818 11.41H14.5717C14.6517 9.59997 15.0718 9.33 16.2818 8.62C16.6418 8.41 16.7517 7.95003 16.5417 7.59003C16.4017 7.35003 16.1518 7.21997 15.8918 7.21997C15.7618 7.21997 15.6317 7.25001 15.5117 7.32001C13.7217 8.38001 13.0518 9.07002 13.0518 12.15V14.82C13.0618 15.91 13.9318 16.78 14.9918 16.78Z"
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
            d="M12.6719 2C7.15188 2 2.67188 6.48 2.67188 12C2.67188 17.52 7.15188 22 12.6719 22C18.1919 22 22.6719 17.52 22.6719 12C22.6719 6.48 18.1919 2 12.6719 2ZM12.2819 14.84C12.2819 15.93 11.4319 16.78 10.3419 16.78H8.86187C7.79187 16.78 6.92188 15.91 6.92188 14.84V12.17C6.92188 9.09 7.59188 8.4 9.38188 7.34C9.50187 7.27 9.63188 7.24 9.76188 7.24C10.0219 7.24 10.2719 7.37 10.4119 7.61C10.6219 7.97 10.5019 8.43 10.1519 8.64C8.94187 9.34 8.52187 9.6 8.44187 11.41H10.3519C11.4419 11.41 12.2919 12.26 12.2919 13.35V14.84H12.2819ZM18.4219 14.84C18.4219 15.93 17.5719 16.78 16.4819 16.78H14.9919C13.9219 16.78 13.0519 15.91 13.0519 14.84V12.17C13.0519 9.09 13.7219 8.4 15.5119 7.34C15.6319 7.27 15.7619 7.24 15.8919 7.24C16.1519 7.24 16.4019 7.37 16.5419 7.61C16.7519 7.97 16.6319 8.43 16.2819 8.64C15.0719 9.36 14.6519 9.62 14.5719 11.43H16.4819C17.5719 11.43 18.4219 12.28 18.4219 13.37V14.84Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconQuoteDownCircle as IconComponentType).keywords = [
  "quote",
  "down",
  "circle",
  "quotation",
  "cite",
  "quotation mark",
  "inverted comma",
  "cited",
  "phrase",
  "naming",
  "recite",
  "read",
  "downwards",
  "downward",
  "downbound",
  "falling",
  "fallen",
  "pull down",
  "downwardly",
  "declining",
  "descending",
  "round",
  "rotary",
  "environ",
  "roundabout",
  "circulate",
  "circuit",
  "encircle",
  "surround",
  "dress circle",
];

export default IconQuoteDownCircle as IconComponentType;