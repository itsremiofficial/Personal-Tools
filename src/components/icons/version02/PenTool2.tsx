import { FC } from "react";

const IconPenTool2: FC<IconProps> = ({
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
              d="M11.4202 22.5001H13.9402C14.9002 22.5001 15.5202 21.8201 15.3402 20.9901L14.9302 19.1802H10.4302L10.0202 20.9901C9.84025 21.7701 10.5202 22.5001 11.4202 22.5001Z"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.9305 19.1702L16.6605 17.6301C17.6305 16.7701 17.6705 16.1701 16.9005 15.2001L13.8505 11.3302C13.2105 10.5202 12.1605 10.5202 11.5205 11.3302L8.47047 15.2001C7.70047 16.1701 7.70046 16.8001 8.71046 17.6301L10.4405 19.1702"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.6797 11.1201V13.6501"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M13.1895 5H12.1895C11.6395 5 11.1895 4.55 11.1895 4V3C11.1895 2.45 11.6395 2 12.1895 2H13.1895C13.7395 2 14.1895 2.45 14.1895 3V4C14.1895 4.55 13.7395 5 13.1895 5Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.93945 14.17H4.93945C5.48945 14.17 5.93945 13.72 5.93945 13.17V12.17C5.93945 11.62 5.48945 11.1699 4.93945 11.1699H3.93945C3.38945 11.1699 2.93945 11.62 2.93945 12.17V13.17C2.93945 13.72 3.38945 14.17 3.93945 14.17Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.3994 14.17H20.3994C19.8494 14.17 19.3994 13.72 19.3994 13.17V12.17C19.3994 11.62 19.8494 11.1699 20.3994 11.1699H21.3994C21.9494 11.1699 22.3994 11.62 22.3994 12.17V13.17C22.3994 13.72 21.9494 14.17 21.3994 14.17Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.1899 3.56006C7.37993 4.01006 4.41992 7.24004 4.41992 11.17"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.9194 11.17C20.9194 7.25004 17.9795 4.03006 14.1895 3.56006"
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
            d="M13.1895 1.5H12.1895C11.3595 1.5 10.6895 2.17 10.6895 3V4C10.6895 4.83 11.3595 5.5 12.1895 5.5H13.1895C14.0195 5.5 14.6895 4.83 14.6895 4V3C14.6895 2.17 14.0195 1.5 13.1895 1.5Z"
            fill="currentColor"
          />
          <path
            d="M4.93945 10.6699H3.93945C3.10945 10.6699 2.43945 11.3399 2.43945 12.1699V13.1699C2.43945 13.9999 3.10945 14.6699 3.93945 14.6699H4.93945C5.76945 14.6699 6.43945 13.9999 6.43945 13.1699V12.1699C6.43945 11.3399 5.75945 10.6699 4.93945 10.6699Z"
            fill="currentColor"
          />
          <path
            d="M21.3994 10.6699H20.3994C19.5694 10.6699 18.8994 11.3399 18.8994 12.1699V13.1699C18.8994 13.9999 19.5694 14.6699 20.3994 14.6699H21.3994C22.2294 14.6699 22.8994 13.9999 22.8994 13.1699V12.1699C22.8994 11.3399 22.2294 10.6699 21.3994 10.6699Z"
            fill="currentColor"
          />
          <path
            d="M4.41992 11.9201C4.00992 11.9201 3.66992 11.5801 3.66992 11.1701C3.66992 6.90007 6.86992 3.31008 11.1099 2.81008C11.5099 2.77008 11.8899 3.06005 11.9399 3.47005C11.9899 3.88005 11.6899 4.25007 11.2799 4.30007C7.79992 4.71007 5.16992 7.66007 5.16992 11.1701C5.16992 11.5801 4.82992 11.9201 4.41992 11.9201Z"
            fill="currentColor"
          />
          <path
            d="M20.9199 11.92C20.5099 11.92 20.1699 11.58 20.1699 11.17C20.1699 7.68003 17.5599 4.73005 14.0999 4.31005C13.6899 4.26005 13.3999 3.89003 13.4499 3.48003C13.4999 3.07003 13.8799 2.78007 14.2899 2.83007C18.4999 3.34007 21.6799 6.93004 21.6799 11.18C21.6699 11.58 21.3399 11.92 20.9199 11.92Z"
            fill="currentColor"
          />
          <path
            d="M13.9597 22.0099H11.3897C10.4697 22.0099 9.78974 21.2698 9.95974 20.4698L10.3798 18.6199H14.9697L15.3897 20.4698C15.5797 21.3198 14.9397 22.0099 13.9597 22.0099Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.7397 17.0499L14.9697 18.6199H10.3797L8.60973 17.0499C7.57973 16.2099 7.57973 15.5599 8.35973 14.5699L11.4797 10.6299C11.6997 10.3599 11.9497 10.1699 12.2197 10.0799C12.5097 9.97988 12.8297 9.97988 13.1197 10.0799C13.3897 10.1799 13.6397 10.3599 13.8597 10.6299L16.9797 14.5699C17.7597 15.5599 17.7297 16.1799 16.7397 17.0499Z"
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
            d="M21.6495 10.7C21.4295 6.8 18.5395 3.55 14.6795 2.89C14.6195 2.12 13.9795 1.5 13.1895 1.5H12.1895C11.3995 1.5 10.7695 2.11 10.6995 2.88C6.81945 3.52 3.90945 6.78 3.68945 10.7C2.97945 10.82 2.43945 11.43 2.43945 12.17V13.17C2.43945 14 3.10945 14.67 3.93945 14.67H4.93945C5.76945 14.67 6.43945 14 6.43945 13.17V12.17C6.43945 11.43 5.89945 10.82 5.18945 10.7C5.39945 7.58 7.68945 4.99 10.7495 4.39C10.9195 5.03 11.4995 5.5 12.1895 5.5H13.1895C13.8795 5.5 14.4495 5.03 14.6295 4.4C17.6695 5.01 19.9395 7.6 20.1495 10.7C19.4395 10.82 18.8995 11.43 18.8995 12.17V13.17C18.8995 14 19.5695 14.67 20.3995 14.67H21.3995C22.2295 14.67 22.8995 14 22.8995 13.17V12.17C22.8995 11.43 22.3595 10.81 21.6495 10.7Z"
            fill="currentColor"
          />
          <path
            d="M16.4402 16.55L14.8002 18H10.5502L8.91024 16.55C7.96024 15.77 7.96024 15.17 8.68024 14.25L11.5702 10.59C11.7702 10.34 12.0002 10.17 12.2602 10.08C12.5302 9.98995 12.8202 9.98995 13.1002 10.08C13.3502 10.17 13.5802 10.34 13.7902 10.59L16.6702 14.24C17.4002 15.16 17.3602 15.73 16.4402 16.55Z"
            fill="currentColor"
          />
          <path
            d="M13.9901 21.9998H11.4001C10.4801 21.9998 9.79009 21.2498 9.97009 20.4498L10.2801 19.0598C10.3401 18.7798 10.5901 18.5898 10.8701 18.5898H14.5201C14.8001 18.5898 15.0401 18.7798 15.1101 19.0598L15.4201 20.4498C15.6101 21.2998 14.9701 21.9998 13.9901 21.9998Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconPenTool2 as IconComponent).keywords = [
  "pen",
  "tool",
  "2",
  "playpen",
  "penitentiary",
  "compose",
  "indite",
  "write",
  "paddock",
  "corral",
  "basin",
  "sty",
  "pecker",
  "shaft",
  "prick",
  "joyride",
  "puppet",
  "tool around",
  "creature",
  "drive",
  "dick",
  "wireless network",
  "sign on",
  "sign off",
  "put through",
  "back up",
  "ring up",
  "call up",
  "hang up",
  "read out",
];

export default IconPenTool2 as IconComponent;
