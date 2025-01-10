import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconMusicDashboard: FC<IconProps> = ({
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
            d="M22.6699 15V9C22.6699 4 20.6699 2 15.6699 2H9.66992C4.66992 2 2.66992 4 2.66992 9V15C2.66992 20 4.66992 22 9.66992 22H15.6699C20.6699 22 22.6699 20 22.6699 15Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.66992 2.5V21.5"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M12.1404 16.8C12.9633 16.8 13.6304 16.1329 13.6304 15.31C13.6304 14.4871 12.9633 13.82 12.1404 13.82C11.3175 13.82 10.6504 14.4871 10.6504 15.31C10.6504 16.1329 11.3175 16.8 12.1404 16.8Z"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.1009 14.31V8.47996C19.1009 7.23996 18.3209 7.07 17.5309 7.28L14.5509 8.09C14.0109 8.24 13.6309 8.66995 13.6309 9.28995V10.33V11.03V15.3"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.6004 15.8C18.4233 15.8 19.0904 15.1329 19.0904 14.31C19.0904 13.4871 18.4233 12.82 17.6004 12.82C16.7774 12.82 16.1104 13.4871 16.1104 14.31C16.1104 15.1329 16.7774 15.8 17.6004 15.8Z"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.6309 11.04L19.1009 9.54999"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
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
            d="M7.66992 2.04999V21.95C4.51992 21.66 2.66992 19.55 2.66992 16.19V7.81C2.66992 4.45 4.51992 2.33999 7.66992 2.04999Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.6699 7.81V16.19C22.6699 19.83 20.4999 22 16.8599 22H8.47992C8.19992 22 7.92992 21.99 7.66992 21.95V2.04999C7.92992 2.00999 8.19992 2 8.47992 2H16.8599C20.4999 2 22.6699 4.17 22.6699 7.81Z"
            fill="currentColor"
          />
          <path
            d="M19.1602 6.8C18.8402 6.55 18.2602 6.31001 17.3402 6.56001L14.3602 7.38002C13.4702 7.61002 12.8902 8.36 12.8902 9.3V11.05V13.21C12.6602 13.13 12.4102 13.07 12.1502 13.07C10.9102 13.07 9.91016 14.08 9.91016 15.31C9.91016 16.54 10.9202 17.55 12.1502 17.55C13.3702 17.55 14.3702 16.56 14.3902 15.35C14.3902 15.34 14.4002 15.33 14.4002 15.32V11.62L18.3702 10.54V12.22C18.1402 12.14 17.8902 12.08 17.6202 12.08C16.3802 12.08 15.3802 13.09 15.3802 14.32C15.3802 15.56 16.3902 16.56 17.6202 16.56C18.8402 16.56 19.8402 15.57 19.8602 14.35C19.8602 14.34 19.8702 14.33 19.8702 14.31V9.55V8.47999C19.8502 7.71999 19.6202 7.16 19.1602 6.8ZM12.1402 16.05C11.7302 16.05 11.4002 15.72 11.4002 15.31C11.4002 14.9 11.7302 14.57 12.1402 14.57C12.5502 14.57 12.8802 14.9 12.8802 15.31C12.8802 15.72 12.5402 16.05 12.1402 16.05ZM17.6002 15.05C17.1902 15.05 16.8602 14.72 16.8602 14.31C16.8602 13.9 17.1902 13.57 17.6002 13.57C18.0102 13.57 18.3402 13.9 18.3402 14.31C18.3402 14.72 18.0102 15.05 17.6002 15.05Z"
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
            d="M7.66992 3.25V20.75C7.66992 21.39 7.05992 21.9 6.43992 21.73C4.03992 21.05 2.66992 19.09 2.66992 16.19V7.81C2.66992 4.91 4.03992 2.95 6.43992 2.27C7.05992 2.1 7.66992 2.6 7.66992 3.25Z"
            fill="currentColor"
          />
          <path
            d="M13.14 14.37C12.76 14.37 12.46 14.68 12.46 15.05C12.46 15.42 12.77 15.73 13.14 15.73C13.52 15.73 13.83 15.42 13.83 15.05C13.83 14.68 13.52 14.37 13.14 14.37Z"
            fill="currentColor"
          />
          <path
            d="M18.19 13.45C17.81 13.45 17.5 13.76 17.5 14.14C17.5 14.52 17.81 14.82 18.19 14.82C18.57 14.82 18.88 14.51 18.88 14.14C18.88 13.77 18.57 13.45 18.19 13.45Z"
            fill="currentColor"
          />
          <path
            d="M16.8599 2H10.1699C9.61992 2 9.16992 2.45 9.16992 3V21C9.16992 21.55 9.61992 22 10.1699 22H16.8599C20.0699 22 22.6699 19.4 22.6699 16.19V7.81C22.6699 4.6 20.0699 2 16.8599 2ZM20.2699 9.74V14.14C20.2699 14.15 20.2599 14.16 20.2599 14.17C20.2399 15.3 19.3199 16.21 18.1899 16.21C17.0499 16.21 16.1199 15.28 16.1199 14.14C16.1199 13 17.0499 12.07 18.1899 12.07C18.4299 12.07 18.6599 12.12 18.8799 12.2V10.65L15.2099 11.65V15.07C15.2099 15.08 15.1999 15.09 15.1999 15.1C15.1799 16.23 14.2599 17.14 13.1299 17.14C11.9899 17.14 11.0599 16.21 11.0599 15.07C11.0599 13.93 11.9899 13 13.1299 13C13.3699 13 13.5999 13.05 13.8199 13.13V11.13V9.5C13.8199 8.64 14.3499 7.94 15.1799 7.73L17.9299 6.97C18.7899 6.74 19.3199 6.97 19.6199 7.2C20.0499 7.53 20.2599 8.05 20.2599 8.75V9.74H20.2699Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMusicDashboard as IconComponentType).keywords = [
  "music",
  "dashboard",
  "sheet music",
  "euphony",
  "medicine",
  "melody",
  "symphony",
  "orchestra",
  "musician",
  "song",
  "singing",
  "splashboard",
  "meter",
  "panel",
  "pane",
  "fascia",
  "board",
  "box",
  "console",
  "desk",
];

export default IconMusicDashboard as IconComponentType;
