import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconDirectInbox: FC<IconProps> = ({
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
              d="M12.6699 2V9L14.6699 7"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.6699 9L10.6699 7"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2.65039 13H7.06039C7.44039 13 7.78039 13.21 7.95039 13.55L9.12039 15.89C9.46039 16.57 10.1504 17 10.9104 17H14.4404C15.2004 17 15.8904 16.57 16.2304 15.89L17.4004 13.55C17.5704 13.21 17.9204 13 18.2904 13H22.6504"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.66992 4.12988C4.12992 4.64988 2.66992 6.72988 2.66992 10.9999V14.9999C2.66992 19.9999 4.66992 21.9999 9.66992 21.9999H15.6699C20.6699 21.9999 22.6699 19.9999 22.6699 14.9999V10.9999C22.6699 6.72988 21.2099 4.64988 17.6699 4.12988"
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
            d="M16.8599 4H8.47992C4.83992 4 2.66992 6.17 2.66992 9.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V9.81C22.6699 6.17 20.4999 4 16.8599 4Z"
            fill="currentColor"
          />
          <path
            d="M21.9699 12.23H18.4899C17.5099 12.23 16.6399 12.77 16.1999 13.65L15.3599 15.31C15.1599 15.71 14.7599 15.96 14.3199 15.96H11.0399C10.7299 15.96 10.2899 15.89 9.99992 15.31L9.15992 13.66C8.71992 12.79 7.83992 12.24 6.86992 12.24H3.36992C2.97992 12.24 2.66992 12.55 2.66992 12.94V16.2C2.66992 19.83 4.84992 22 8.48992 22H16.8699C20.2999 22 22.4099 20.12 22.6699 16.78V12.93C22.6699 12.55 22.3599 12.23 21.9699 12.23Z"
            fill="currentColor"
          />
          <path
            d="M15.2004 6.47C14.9104 6.18 14.4304 6.18 14.1404 6.47L13.4204 7.19V2C13.4204 1.59 13.0804 1.25 12.6704 1.25C12.2604 1.25 11.9204 1.59 11.9204 2V7.19L11.2004 6.47C10.9104 6.18 10.4304 6.18 10.1404 6.47C9.85035 6.76 9.85035 7.24 10.1404 7.53L12.1404 9.53C12.1504 9.54 12.1604 9.54 12.1604 9.55C12.2204 9.61 12.3004 9.66 12.3804 9.7C12.4804 9.73 12.5704 9.75 12.6704 9.75C12.7704 9.75 12.8604 9.73 12.9504 9.69C13.0404 9.65 13.1204 9.6 13.2004 9.53L15.2004 7.53C15.4904 7.24 15.4904 6.76 15.2004 6.47Z"
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
            d="M21.9699 12.23H18.4899C17.5099 12.23 16.6399 12.77 16.1999 13.65L15.3599 15.31C15.1599 15.71 14.7599 15.96 14.3199 15.96H11.0399C10.7299 15.96 10.2899 15.89 9.99992 15.31L9.15992 13.66C8.71992 12.79 7.83992 12.24 6.86992 12.24H3.36992C2.97992 12.24 2.66992 12.55 2.66992 12.94V16.2C2.66992 19.83 4.84992 22 8.48992 22H16.8699C20.2999 22 22.4099 20.12 22.6699 16.78V12.93C22.6699 12.55 22.3599 12.23 21.9699 12.23Z"
            fill="currentColor"
          />
          <path
            d="M13.4199 2C13.4199 1.59 13.0799 1.25 12.6699 1.25C12.2599 1.25 11.9199 1.59 11.9199 2V4H13.4199V2Z"
            fill="currentColor"
          />
          <path
            d="M22.6699 9.81V10.85C22.4499 10.77 22.2099 10.73 21.9699 10.73H18.4899C16.9399 10.73 15.5499 11.59 14.8599 12.97L14.1099 14.45H11.2499L10.4999 12.98C9.80992 11.59 8.41992 10.73 6.86992 10.73H3.36992C3.12992 10.73 2.88992 10.77 2.66992 10.85V9.81C2.66992 6.17 4.83992 4 8.47992 4H11.9199V7.19L11.1999 6.47C10.9099 6.18 10.4299 6.18 10.1399 6.47C9.84992 6.76 9.84992 7.24 10.1399 7.53L12.1399 9.53C12.1499 9.54 12.1599 9.54 12.1599 9.55C12.2299 9.61 12.2999 9.66 12.3799 9.69C12.4799 9.73 12.5699 9.75 12.6699 9.75C12.7699 9.75 12.8599 9.73 12.9499 9.69C13.0399 9.66 13.1299 9.6 13.1999 9.53L15.1999 7.53C15.4899 7.24 15.4899 6.76 15.1999 6.47C14.9099 6.18 14.4299 6.18 14.1399 6.47L13.4199 7.19V4H16.8599C20.4999 4 22.6699 6.17 22.6699 9.81Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconDirectInbox as IconComponentType).keywords = [
  "direct",
  "inbox",
  "straightforward",
  "directly",
  "forthright",
  "plainspoken",
  "man-to-man",
  "straight",
  "frank",
  "free-spoken",
  "outspoken",
  "mailbox",
  "letterbox",
  "email",
  "binder",
  "workbook",
  "cassette",
  "compartment",
  "rack",
  "lockbox",
];

export default IconDirectInbox as IconComponentType;
