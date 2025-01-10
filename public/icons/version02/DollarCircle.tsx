import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconDollarCircle: FC<IconProps> = ({
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
              d="M9.3418 14.3298C9.3418 15.6198 10.3318 16.6598 11.5618 16.6598H14.0718C15.1418 16.6598 16.0118 15.7498 16.0118 14.6298C16.0118 13.4098 15.4818 12.9798 14.6918 12.6998L10.6618 11.2998C9.8718 11.0198 9.3418 10.5898 9.3418 9.36984C9.3418 8.24984 10.2118 7.33984 11.2818 7.33984H13.7918C15.0218 7.33984 16.0118 8.37984 16.0118 9.66984"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.6699 6V18"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z"
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
            d="M12.6699 21.9C18.1928 21.9 22.6699 17.4229 22.6699 11.9C22.6699 6.37718 18.1928 1.90002 12.6699 1.90002C7.14707 1.90002 2.66992 6.37718 2.66992 11.9C2.66992 17.4229 7.14707 21.9 12.6699 21.9Z"
            fill="currentColor"
          />
          <path
            d="M14.9301 12L13.4201 11.47V8.08H13.7801C14.5901 8.08 15.2501 8.79 15.2501 9.66C15.2501 10.07 15.5901 10.41 16.0001 10.41C16.4101 10.41 16.7501 10.07 16.7501 9.66C16.7501 7.96 15.4201 6.58 13.7801 6.58H13.4201V6C13.4201 5.59 13.0801 5.25 12.6701 5.25C12.2601 5.25 11.9201 5.59 11.9201 6V6.58H11.2701C9.79008 6.58 8.58008 7.83 8.58008 9.36C8.58008 11.15 9.62008 11.72 10.4101 12L11.9201 12.53V15.91H11.5601C10.7501 15.91 10.0901 15.2 10.0901 14.33C10.0901 13.92 9.75008 13.58 9.34008 13.58C8.93008 13.58 8.59008 13.92 8.59008 14.33C8.59008 16.03 9.92008 17.41 11.5601 17.41H11.9201V18C11.9201 18.41 12.2601 18.75 12.6701 18.75C13.0801 18.75 13.4201 18.41 13.4201 18V17.42H14.0701C15.5501 17.42 16.7601 16.17 16.7601 14.64C16.7501 12.84 15.7101 12.27 14.9301 12ZM10.9101 10.59C10.4001 10.41 10.0901 10.24 10.0901 9.37C10.0901 8.66 10.6201 8.09 11.2801 8.09H11.9301V10.95L10.9101 10.59ZM14.0701 15.92H13.4201V13.06L14.4301 13.41C14.9401 13.59 15.2501 13.76 15.2501 14.63C15.2501 15.34 14.7201 15.92 14.0701 15.92Z"
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
            d="M13.4219 15.9199H14.0719C14.7219 15.9199 15.2619 15.3399 15.2619 14.6399C15.2619 13.7699 14.9519 13.5999 14.4419 13.4199L13.4319 13.0699V15.9199H13.4219Z"
            fill="currentColor"
          />
          <path
            d="M12.6419 1.90004C7.12194 1.92004 2.65194 6.41004 2.67194 11.93C2.69194 17.45 7.18194 21.92 12.7019 21.9C18.2219 21.88 22.6919 17.39 22.6719 11.87C22.6519 6.35004 18.1619 1.89004 12.6419 1.90004ZM14.9319 12C15.7119 12.27 16.7619 12.85 16.7619 14.64C16.7619 16.18 15.5519 17.42 14.0719 17.42H13.4219V18C13.4219 18.41 13.0819 18.75 12.6719 18.75C12.2619 18.75 11.9219 18.41 11.9219 18V17.42H11.5619C9.92194 17.42 8.59194 16.04 8.59194 14.34C8.59194 13.93 8.93194 13.59 9.34194 13.59C9.75194 13.59 10.0919 13.93 10.0919 14.34C10.0919 15.21 10.7519 15.92 11.5619 15.92H11.9219V12.54L10.4119 12C9.63194 11.73 8.58194 11.15 8.58194 9.36004C8.58194 7.82004 9.79194 6.58004 11.2719 6.58004H11.9219V6.00004C11.9219 5.59004 12.2619 5.25004 12.6719 5.25004C13.0819 5.25004 13.4219 5.59004 13.4219 6.00004V6.58004H13.7819C15.4219 6.58004 16.7519 7.96004 16.7519 9.66004C16.7519 10.07 16.4119 10.41 16.0019 10.41C15.5919 10.41 15.2519 10.07 15.2519 9.66004C15.2519 8.79004 14.5919 8.08004 13.7819 8.08004H13.4219V11.46L14.9319 12Z"
            fill="currentColor"
          />
          <path
            d="M10.0918 9.36996C10.0918 10.24 10.4018 10.41 10.9118 10.59L11.9218 10.94V8.07996H11.2718C10.6218 8.07996 10.0918 8.65996 10.0918 9.36996Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconDollarCircle as IconComponentType).keywords = [
  "dollar",
  "circle",
  "dollar bill",
  "dollar sign",
  "buck",
  "clam",
  "dollar mark",
  "one dollar bill",
  "loonie",
  "dime",
  "penny",
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

export default IconDollarCircle as IconComponentType;
