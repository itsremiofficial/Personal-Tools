import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconMonitorRecorder: FC<IconProps> = ({
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
            d="M22.6699 11.89V12.78C22.6699 16.34 21.7799 17.22 18.2299 17.22H7.10992C3.55992 17.22 2.66992 16.33 2.66992 12.78V6.44C2.66992 2.89 3.55992 2 7.10992 2H8.66992"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.6699 17.22V22"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2.66992 13H22.6699"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.16992 22H17.1699"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.5297 9.37001H13.7697C12.3897 9.37001 11.9297 8.45001 11.9297 7.53001V4.01001C11.9297 2.91001 12.8297 2.01001 13.9297 2.01001H18.5297C19.5497 2.01001 20.3697 2.83001 20.3697 3.85001V7.53001C20.3697 8.55001 19.5497 9.37001 18.5297 9.37001Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.5801 7.91998L20.3701 7.06998V4.30998L21.5801 3.45998C22.1801 3.04998 22.6701 3.29998 22.6701 4.02998V7.35998C22.6701 8.08998 22.1801 8.33998 21.5801 7.91998Z"
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
            d="M21.6399 7.19V13.37H2.66992V7.19C2.66992 4.88 4.54992 3 6.85992 3H17.4499C19.7599 3 21.6399 4.88 21.6399 7.19Z"
            fill="currentColor"
          />
          <path
            d="M2.66992 13.3701V13.5601C2.66992 15.8801 4.54992 17.7501 6.85992 17.7501H10.4599C11.0099 17.7501 11.4599 18.2001 11.4599 18.7501V19.5701C11.4599 20.1201 11.0099 20.5701 10.4599 20.5701H8.19992C7.80992 20.5701 7.48992 20.8901 7.48992 21.2801C7.48992 21.6701 7.80992 21.9901 8.19992 21.9901H16.1299C16.5199 21.9901 16.8399 21.6701 16.8399 21.2801C16.8399 20.8901 16.5199 20.5701 16.1299 20.5701H13.8799C13.3299 20.5701 12.8799 20.1201 12.8799 19.5701V18.7501C12.8799 18.2001 13.3299 17.7501 13.8799 17.7501H17.4499C19.7699 17.7501 21.6399 15.8701 21.6399 13.5601V13.3701H2.66992Z"
            fill="currentColor"
          />
          <path
            d="M22.6599 2.36011L21.5299 3.15011V2.73011C21.5299 1.78011 20.7599 1.02011 19.8199 1.02011H15.5399C14.5099 1.01011 13.6699 1.85011 13.6699 2.88011V6.16011C13.6699 7.02011 14.0999 7.87011 15.3799 7.87011H19.8099C20.7599 7.87011 21.5199 7.10011 21.5199 6.16011V5.73011L22.6499 6.52011C23.2199 6.91011 23.6699 6.67011 23.6699 5.99011V2.89011C23.6699 2.21011 23.2199 1.98011 22.6599 2.36011Z"
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
            d="M21.6399 10.37V13.56C21.6399 15.88 19.7599 17.76 17.4399 17.76H13.8799C13.3299 17.76 12.8799 18.2 12.8799 18.76V19.58C12.8799 20.13 13.3299 20.58 13.8799 20.58H16.1399C16.5299 20.58 16.8499 20.89 16.8499 21.29C16.8499 21.68 16.5299 22 16.1399 22H8.19992C7.80992 22 7.48992 21.68 7.48992 21.29C7.48992 20.89 7.80992 20.58 8.19992 20.58H10.4599C11.0099 20.58 11.4599 20.13 11.4599 19.58V18.76C11.4599 18.2 11.0099 17.76 10.4599 17.76H6.85992C4.54992 17.76 2.66992 15.88 2.66992 13.56V7.19C2.66992 4.88 4.54992 3 6.85992 3H11.1699C11.7199 3 12.1699 3.45 12.1699 4V6.15C12.1699 8.08 13.4599 9.37 15.3799 9.37H20.6399C21.1899 9.37 21.6399 9.82 21.6399 10.37Z"
            fill="currentColor"
          />
          <path
            d="M22.6599 2.36011L21.5299 3.15011V2.73011C21.5299 1.78011 20.7599 1.02011 19.8199 1.02011H15.5399C14.5099 1.01011 13.6699 1.85011 13.6699 2.88011V6.16011C13.6699 7.02011 14.0999 7.87011 15.3799 7.87011H19.8099C20.7599 7.87011 21.5199 7.10011 21.5199 6.16011V5.73011L22.6499 6.52011C23.2199 6.91011 23.6699 6.67011 23.6699 5.99011V2.89011C23.6699 2.21011 23.2199 1.98011 22.6599 2.36011Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMonitorRecorder as IconComponentType).keywords = [
  "monitor",
  "recorder",
  "ride herd on",
  "supervise",
  "proctor",
  "reminder",
  "admonisher",
  "varan",
  "monitor lizard",
  "supervised",
  "manage",
  "registrar",
  "vertical flute",
  "fipple flute",
  "fipple pipe",
  "record-keeper",
  "recording equipment",
  "recording machine",
  "recording",
  "camcorder",
];

export default IconMonitorRecorder as IconComponentType;
