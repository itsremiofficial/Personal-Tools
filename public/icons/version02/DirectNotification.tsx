import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconDirectNotification: FC<IconProps> = ({
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
            d="M2.65039 13H6.44039C7.20039 13 7.89039 13.43 8.23039 14.11L9.12039 15.9C9.67039 17 10.6704 17 10.9104 17H14.4404C15.2004 17 15.8904 16.57 16.2304 15.89L17.1204 14.1C17.4604 13.42 18.1504 12.99 18.9104 12.99H22.6504"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19.6699 8C21.3268 8 22.6699 6.65685 22.6699 5C22.6699 3.34315 21.3268 2 19.6699 2C18.0131 2 16.6699 3.34315 16.6699 5C16.6699 6.65685 18.0131 8 19.6699 8Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.6699 2H9.66992C4.66992 2 2.66992 4 2.66992 9V15C2.66992 20 4.66992 22 9.66992 22H15.6699C20.6699 22 22.6699 20 22.6699 15V10"
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
            d="M19.6699 8C21.3268 8 22.6699 6.65685 22.6699 5C22.6699 3.34315 21.3268 2 19.6699 2C18.0131 2 16.6699 3.34315 16.6699 5C16.6699 6.65685 18.0131 8 19.6699 8Z"
            fill="currentColor"
          />
          <path
            d="M21.0099 12.72H17.6999C16.7699 12.72 15.9399 13.24 15.5199 14.06L14.7199 15.64C14.5299 16.02 14.1499 16.25 13.7299 16.25H10.6199C10.3299 16.25 9.89992 16.19 9.62992 15.63L8.83992 14.06C8.41992 13.23 7.58992 12.71 6.65992 12.71H3.32992C2.96992 12.72 2.66992 13.02 2.66992 13.38V16.47C2.66992 19.94 4.73992 22 8.19992 22H16.1599C19.4199 22 21.4299 20.21 21.6699 17.04V13.38C21.6699 13.02 21.3699 12.72 21.0099 12.72Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19.6699 9.5C17.1899 9.5 15.1699 7.48 15.1699 5C15.1699 4.28 15.3599 3.61 15.6599 3H8.18992C4.73992 3 2.66992 5.06 2.66992 8.52V16.47C2.66992 19.94 4.73992 22 8.18992 22H16.1399C19.5999 22 21.6599 19.94 21.6599 16.48V9.01C21.0599 9.31 20.3899 9.5 19.6699 9.5Z"
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
            d="M19.6699 8C21.3268 8 22.6699 6.65685 22.6699 5C22.6699 3.34315 21.3268 2 19.6699 2C18.0131 2 16.6699 3.34315 16.6699 5C16.6699 6.65685 18.0131 8 19.6699 8Z"
            fill="currentColor"
          />
          <path
            d="M21.0099 12.72H17.6999C16.7699 12.72 15.9399 13.24 15.5199 14.06L14.7199 15.64C14.5299 16.02 14.1499 16.25 13.7299 16.25H10.6199C10.3299 16.25 9.89992 16.19 9.62992 15.63L8.83992 14.06C8.41992 13.23 7.58992 12.71 6.65992 12.71H3.32992C2.96992 12.72 2.66992 13.02 2.66992 13.38V16.47C2.66992 19.94 4.73992 22 8.19992 22H16.1599C19.4199 22 21.4299 20.21 21.6699 17.04V13.38C21.6699 13.02 21.3699 12.72 21.0099 12.72Z"
            fill="currentColor"
          />
          <path
            d="M21.6699 10.4V11.33C21.4599 11.26 21.2399 11.22 21.0099 11.22H17.6999C16.1999 11.22 14.8499 12.05 14.1899 13.39L13.4899 14.76H10.8599L10.1799 13.4C9.49992 12.05 8.15992 11.22 6.65992 11.22H3.32992C3.09992 11.22 2.87992 11.26 2.66992 11.33V8.52C2.66992 5.47 5.13992 3 8.18992 3H14.2699C14.9099 3 15.3699 3.58 15.2499 4.2C15.0899 5 15.1599 5.87 15.5499 6.79C15.9999 7.83 16.8399 8.67 17.8799 9.12C18.7999 9.51 19.6699 9.58 20.4699 9.42C21.0899 9.3 21.6699 9.76 21.6699 10.4Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconDirectNotification as IconComponentType).keywords = [
  "direct",
  "notification",
  "straightforward",
  "directly",
  "forthright",
  "plainspoken",
  "man-to-man",
  "straight",
  "frank",
  "free-spoken",
  "outspoken",
  "apprisal",
  "notice",
  "telling",
  "presentment",
  "notifying",
  "notifier",
  "notify",
  "denunciation",
  "announcement",
];

export default IconDirectNotification as IconComponentType;