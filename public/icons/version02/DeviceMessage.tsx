import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconDeviceMessage: FC<IconProps> = ({
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
            d="M22.6699 5.25V9.15002C22.6699 10.64 21.9099 11.76 20.6699 12.2C20.2899 12.33 19.8699 12.4 19.4199 12.4H16.8199L13.9299 14.33C13.4999 14.61 12.9199 14.3 12.9199 13.79V12.4C11.9499 12.4 11.1299 12.08 10.5599 11.51C9.98992 10.94 9.66992 10.12 9.66992 9.15002V5.25C9.66992 4.8 9.73992 4.38 9.86992 4C10.3099 2.76 11.4299 2 12.9199 2H19.4199C21.3699 2 22.6699 3.3 22.6699 5.25Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M20.6699 12.2V13.9C20.6699 17.05 18.8699 18.4 16.1699 18.4H7.16992C4.46992 18.4 2.66992 17.05 2.66992 13.9V8.5C2.66992 5.35 4.46992 4 7.16992 4H9.86992C9.73992 4.38 9.66992 4.8 9.66992 5.25V9.15002C9.66992 10.12 9.98992 10.94 10.5599 11.51C11.1299 12.08 11.9499 12.4 12.9199 12.4V13.79C12.9199 14.3 13.4999 14.61 13.9299 14.33L16.8199 12.4H19.4199C19.8699 12.4 20.2899 12.33 20.6699 12.2Z"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.07031 22H15.2703"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.6699 18.3999V21.9999"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M19.1654 7.25H19.1744"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.3656 7.25H16.3746"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.5658 7.25H13.5748"
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
            d="M20.6699 12.2V13.9C20.6699 17.05 18.8699 18.4 16.1699 18.4H7.16992C4.46992 18.4 2.66992 17.05 2.66992 13.9V8.5C2.66992 5.35 4.46992 4 7.16992 4H9.86992C9.73992 4.38 9.66992 4.8 9.66992 5.25V9.15002C9.66992 10.12 9.98992 10.94 10.5599 11.51C11.1299 12.08 11.9499 12.4 12.9199 12.4V13.79C12.9199 14.3 13.4999 14.61 13.9299 14.33L16.8199 12.4H19.4199C19.8699 12.4 20.2899 12.33 20.6699 12.2Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.6699 5.25V9.15002C22.6699 10.64 21.9099 11.76 20.6699 12.2C20.2899 12.33 19.8699 12.4 19.4199 12.4H16.8199L13.9299 14.33C13.4999 14.61 12.9199 14.3 12.9199 13.79V12.4C11.9499 12.4 11.1299 12.08 10.5599 11.51C9.98992 10.94 9.66992 10.12 9.66992 9.15002V5.25C9.66992 4.8 9.73992 4.38 9.86992 4C10.3099 2.76 11.4299 2 12.9199 2H19.4199C21.3699 2 22.6699 3.3 22.6699 5.25Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.2703 21.2499H12.4203V18.3999C12.4203 17.9899 12.0803 17.6499 11.6703 17.6499C11.2603 17.6499 10.9203 17.9899 10.9203 18.3999V21.2499H8.07031C7.66031 21.2499 7.32031 21.5899 7.32031 21.9999C7.32031 22.4099 7.66031 22.7499 8.07031 22.7499H15.2703C15.6803 22.7499 16.0203 22.4099 16.0203 21.9999C16.0203 21.5899 15.6803 21.2499 15.2703 21.2499Z"
            fill="currentColor"
          />
          <path
            d="M16.1104 8C15.6904 8 15.3604 7.66 15.3604 7.25C15.3604 6.84 15.7004 6.5 16.1104 6.5C16.5204 6.5 16.8604 6.84 16.8604 7.25C16.8604 7.66 16.5204 8 16.1104 8Z"
            fill="currentColor"
          />
          <path
            d="M18.9199 8C18.4999 8 18.1699 7.66 18.1699 7.25C18.1699 6.84 18.5099 6.5 18.9199 6.5C19.3299 6.5 19.6699 6.84 19.6699 7.25C19.6699 7.66 19.3299 8 18.9199 8Z"
            fill="currentColor"
          />
          <path
            d="M13.29 8C12.87 8 12.54 7.66 12.54 7.25C12.54 6.84 12.88 6.5 13.29 6.5C13.7 6.5 14.04 6.84 14.04 7.25C14.04 7.66 13.71 8 13.29 8Z"
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
            d="M19.4199 13.9H17.5737C17.3756 13.9 17.1821 13.9588 17.0175 14.069L14.7599 15.58C14.3999 15.82 13.9799 15.93 13.5699 15.93C13.2199 15.93 12.8699 15.85 12.5499 15.67C12.0681 15.4153 11.7142 14.9475 11.5404 14.423C11.4012 14.0029 11.1236 13.6136 10.7236 13.4244C10.2644 13.2073 9.85035 12.9204 9.49992 12.57C8.63992 11.71 8.16992 10.5 8.16992 9.15V5.25V5C8.16992 4.44772 7.72221 4 7.16992 4C4.46992 4 2.66992 5.35 2.66992 8.5V13.9C2.66992 17.05 4.46992 18.4 7.16992 18.4H10.9199V21.25H8.06992C7.65992 21.25 7.31992 21.59 7.31992 22C7.31992 22.41 7.65992 22.75 8.06992 22.75H15.2699C15.6799 22.75 16.0199 22.41 16.0199 22C16.0199 21.59 15.6799 21.25 15.2699 21.25H12.4199V18.4H16.1699C18.5653 18.4 20.2523 17.3374 20.6025 14.898C20.681 14.3513 20.2222 13.9 19.6699 13.9H19.4199Z"
            fill="currentColor"
          />
          <path
            d="M19.4199 2H12.9199C11.4299 2 10.3099 2.76 9.86992 4C9.73992 4.38 9.66992 4.8 9.66992 5.25V9.15C9.66992 10.12 9.98992 10.94 10.5599 11.51C11.1299 12.08 11.9499 12.4 12.9199 12.4V13.79C12.9199 14.3 13.4999 14.61 13.9299 14.33L16.8199 12.4H19.4199C19.8699 12.4 20.2899 12.33 20.6699 12.2C21.9099 11.76 22.6699 10.64 22.6699 9.15V5.25C22.6699 3.3 21.3699 2 19.4199 2ZM13.2899 8C12.8699 8 12.5399 7.66 12.5399 7.25C12.5399 6.84 12.8699 6.5 13.2899 6.5C13.7099 6.5 14.0399 6.84 14.0399 7.25C14.0399 7.66 13.7099 8 13.2899 8ZM16.1099 8C15.6899 8 15.3599 7.66 15.3599 7.25C15.3599 6.84 15.6999 6.5 16.1099 6.5C16.5199 6.5 16.8599 6.84 16.8599 7.25C16.8599 7.66 16.5199 8 16.1099 8ZM18.9199 8C18.4999 8 18.1699 7.66 18.1699 7.25C18.1699 6.84 18.5099 6.5 18.9199 6.5C19.3299 6.5 19.6699 6.84 19.6699 7.25C19.6699 7.66 19.3299 8 18.9199 8Z"
            fill="currentColor"
          />
          <path
            d="M22.6699 5.25V9.15C22.6699 10.64 21.9099 11.76 20.6699 12.2C20.2899 12.33 19.8699 12.4 19.4199 12.4H16.8199L13.9299 14.33C13.4999 14.61 12.9199 14.3 12.9199 13.79V12.4C11.9499 12.4 11.1299 12.08 10.5599 11.51C9.98992 10.94 9.66992 10.12 9.66992 9.15V5.25C9.66992 4.8 9.73992 4.38 9.86992 4C10.3099 2.76 11.4299 2 12.9199 2H19.4199C21.3699 2 22.6699 3.3 22.6699 5.25Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconDeviceMessage as IconComponentType).keywords = [
  "device",
  "message",
  "twist",
  "gimmick",
  "contrivance",
  "machinery",
  "apparatus",
  "contraption",
  "mechanism",
  "machine",
  "charger",
  "subject matter",
  "substance",
  "content",
  "file",
  "communiqué",
  "transmission",
  "communication",
  "news",
  "advertisement",
];

export default IconDeviceMessage as IconComponentType;
