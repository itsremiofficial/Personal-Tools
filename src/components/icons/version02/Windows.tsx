import { FC } from "react";

const IconWindows: FC<IconProps> = ({
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
            opacity={duotone ? "0.4" : "1"}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.6699 2L12.6699 4V11H22.6699V2Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.6699 22L12.6699 20V13H22.6699V22Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.6699 4.29999L2.66992 6V11H10.6699V4.29999Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.6699 19.7L2.66992 18V13H10.6699V19.7Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
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
            opacity={duotone ? "0.4" : "1"}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.4699 2.23998L13.4699 3.83997C12.9999 3.92997 12.6699 4.33998 12.6699 4.81998V9.99998C12.6699 10.55 13.1199 11 13.6699 11H21.6699C22.2199 11 22.6699 10.55 22.6699 9.99998V3.21998C22.6699 2.58998 22.0899 2.11998 21.4699 2.23998Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.4699 21.76L13.4699 20.16C12.9999 20.07 12.6699 19.66 12.6699 19.18V14C12.6699 13.45 13.1199 13 13.6699 13H21.6699C22.2199 13 22.6699 13.45 22.6699 14V20.78C22.6699 21.41 22.0899 21.88 21.4699 21.76Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.4599 4.55996L3.4599 5.83995C2.9999 5.93995 2.66992 6.34996 2.66992 6.81996V9.99996C2.66992 10.55 3.11992 11 3.66992 11H9.66992C10.2199 11 10.6699 10.55 10.6699 9.99996V5.52996C10.6699 4.89996 10.0799 4.41996 9.4599 4.55996Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.4599 19.44L3.4599 18.16C2.9999 18.06 2.66992 17.65 2.66992 17.18V14C2.66992 13.45 3.11992 13 3.66992 13H9.66992C10.2199 13 10.6699 13.45 10.6699 14V18.47C10.6699 19.1 10.0799 19.58 9.4599 19.44Z"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.4699 2.23998L13.4699 3.83998C12.9999 3.92998 12.6699 4.33999 12.6699 4.81999V9.99999C12.6699 10.55 13.1199 11 13.6699 11H21.6699C22.2199 11 22.6699 10.55 22.6699 9.99999V3.21999C22.6699 2.58999 22.0899 2.11998 21.4699 2.23998Z"
            fill="none"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.4699 21.76L13.4699 20.16C12.9999 20.07 12.6699 19.66 12.6699 19.18V14C12.6699 13.45 13.1199 13 13.6699 13H21.6699C22.2199 13 22.6699 13.45 22.6699 14V20.78C22.6699 21.41 22.0899 21.88 21.4699 21.76Z"
            fill="none"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.4599 4.55999L3.4599 5.82998C2.9999 5.92998 2.66992 6.33999 2.66992 6.80999V9.99999C2.66992 10.55 3.11992 11 3.66992 11H9.66992C10.2199 11 10.6699 10.55 10.6699 9.99999V5.52999C10.6699 4.89999 10.0799 4.41999 9.4599 4.55999Z"
            fill="none"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.4599 19.44L3.4599 18.17C2.9999 18.07 2.66992 17.66 2.66992 17.19V14C2.66992 13.45 3.11992 13 3.66992 13H9.66992C10.2199 13 10.6699 13.45 10.6699 14V18.47C10.6699 19.1 10.0799 19.58 9.4599 19.44Z"
            fill="none"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconWindows as IconComponent).keywords = [
  "windows",
  "windowpane",
  "taskbar",
  "microsoft",
  "ups",
  "times",
  "win",
  "exhaust",
  "wells",
  "panes",
];

export default IconWindows as IconComponent;
