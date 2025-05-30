import { FC } from "react";

const IconBluetooth2: FC<IconProps> = ({
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
            d="M5.31006 18.64L17.66 7.31998C18.17 6.84998 18.1601 6.09997 17.6201 5.64997L13.7701 2.43998C12.7701 1.60998 11.95 1.98998 11.95 3.28998V20.71C11.95 22.01 12.7701 22.39 13.7701 21.56L17.6201 18.35C18.1601 17.9 18.17 17.15 17.66 16.68L5.31006 5.35996"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M5.66992 13C6.22221 13 6.66992 12.5523 6.66992 12C6.66992 11.4477 6.22221 11 5.66992 11C5.11764 11 4.66992 11.4477 4.66992 12C4.66992 12.5523 5.11764 13 5.66992 13Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19.6699 13C20.2222 13 20.6699 12.5523 20.6699 12C20.6699 11.4477 20.2222 11 19.6699 11C19.1176 11 18.6699 11.4477 18.6699 12C18.6699 12.5523 19.1176 13 19.6699 13Z"
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
            opacity={duotone ? "0.4" : "1"}
            d="M16.8597 2H8.48969C4.84968 2 2.67969 4.17 2.67969 7.81V16.18C2.67969 19.82 4.84968 21.99 8.48969 21.99H16.8597C20.4997 21.99 22.6697 19.82 22.6697 16.18V7.81C22.6697 4.17 20.4997 2 16.8597 2Z"
            fill="currentColor"
          />
          <path
            d="M12.75 18.9999C12.52 18.9999 12.34 18.9399 12.24 18.8899C12.01 18.7799 11.47 18.4299 11.47 17.4499V14.0599L8.57001 16.7099C8.27001 16.9899 7.79001 16.9699 7.51001 16.6599C7.23001 16.3499 7.25003 15.8799 7.56003 15.5999L11.47 12.0199V11.9399L7.56003 8.39992C7.25003 8.11992 7.23001 7.64992 7.51001 7.33992C7.79001 7.02992 8.26001 7.00992 8.57001 7.28992L11.47 9.93992V6.54993C11.47 5.56993 12.01 5.20992 12.24 5.10992C12.47 4.99992 13.09 4.81992 13.84 5.44992L16.25 7.45993C16.58 7.72993 16.77 8.11992 16.78 8.52992C16.79 8.93992 16.62 9.33993 16.31 9.62993L13.72 11.9999L16.31 14.3699C16.62 14.6599 16.8 15.0599 16.79 15.4699C16.78 15.8799 16.59 16.2699 16.26 16.5399L13.85 18.5499C13.42 18.8999 13.04 18.9999 12.75 18.9999ZM12.97 13.2999V17.3199L15.28 15.3899L12.97 13.2999ZM12.97 6.67991V10.6399L15.28 8.51993L12.97 6.67991Z"
            fill="currentColor"
          />
          <path
            d="M7.29016 13.3801C6.53016 13.3801 5.91016 12.7601 5.91016 12.0001C5.91016 11.2401 6.53016 10.6201 7.29016 10.6201C8.05016 10.6201 8.67017 11.2401 8.67017 12.0001C8.67017 12.7601 8.05016 13.3801 7.29016 13.3801ZM7.29016 11.8801C7.22016 11.8801 7.17017 11.9401 7.17017 12.0001C7.17017 12.1401 7.42017 12.1401 7.42017 12.0001C7.42017 11.9301 7.36016 11.8801 7.29016 11.8801Z"
            fill="currentColor"
          />
          <path
            d="M18.0499 13.3801C17.2899 13.3801 16.6699 12.7601 16.6699 12.0001C16.6699 11.2401 17.2899 10.6201 18.0499 10.6201C18.8099 10.6201 19.4299 11.2401 19.4299 12.0001C19.4299 12.7601 18.7999 13.3801 18.0499 13.3801ZM18.0499 11.8801C17.9799 11.8801 17.9299 11.9401 17.9299 12.0001C17.9299 12.1401 18.1799 12.1401 18.1799 12.0001C18.1699 11.9301 18.1099 11.8801 18.0499 11.8801Z"
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
            d="M12.9697 17.32L15.2797 15.39L12.9697 13.3V17.32Z"
            fill="currentColor"
          />
          <path
            d="M12.9697 6.67993V10.6399L15.2797 8.51993L12.9697 6.67993Z"
            fill="currentColor"
          />
          <path
            d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2ZM5.91992 12C5.91992 11.24 6.53992 10.62 7.29992 10.62C8.05992 10.62 8.66992 11.24 8.66992 12C8.66992 12.76 8.04992 13.38 7.28992 13.38C6.52992 13.38 5.91992 12.76 5.91992 12ZM16.2399 16.54L13.8299 18.55C13.4199 18.9 13.0399 19 12.7499 19C12.5199 19 12.3399 18.94 12.2399 18.89C12.0099 18.78 11.4699 18.43 11.4699 17.45V14.06L8.56992 16.71C8.26992 16.99 7.78992 16.97 7.50992 16.66C7.22992 16.35 7.24992 15.88 7.55992 15.6L11.4699 12.02V11.94L7.55992 8.4C7.24992 8.12 7.22992 7.65 7.50992 7.34C7.78992 7.04 8.26992 7.01 8.56992 7.29L11.4699 9.94V6.56C11.4699 5.58 12.0099 5.22 12.2399 5.12C12.4699 5.01 13.0899 4.83 13.8399 5.46L16.2499 7.47C16.5799 7.74 16.7699 8.13 16.7799 8.54C16.7899 8.95 16.6199 9.35 16.3099 9.64L13.7099 12L16.2999 14.37C16.6099 14.66 16.7899 15.06 16.7799 15.47C16.7599 15.88 16.5699 16.27 16.2399 16.54ZM18.0499 13.38C17.2899 13.38 16.6699 12.76 16.6699 12C16.6699 11.24 17.2899 10.62 18.0499 10.62C18.8099 10.62 19.4299 11.24 19.4299 12C19.4299 12.76 18.7999 13.38 18.0499 13.38Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBluetooth2 as IconComponent).keywords = [
  "bluetooth",
  "2",
  "teeth",
  "tooth",
  "handsfree",
  "wireless",
  "ipod",
  "wifi",
  "stereo",
  "speakerphone",
  "headset",
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

export default IconBluetooth2 as IconComponent;
