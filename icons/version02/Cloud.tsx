import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconCloud: FC<IconProps> = ({
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
            d="M7.93996 13.01C7.40996 12.74 6.81996 12.6 6.21996 12.6C1.53996 12.93 1.53996 19.74 6.21996 20.07H17.31C18.66 20.08 19.96 19.58 20.95 18.67C24.24 15.8 22.48 10.03 18.15 9.48C16.59 0.110001 3.05996 3.67 6.26996 12.6"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.5195 9.92001C17.0395 9.66001 17.6095 9.52001 18.1895 9.51001"
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
            d="M21.1497 10.6901L2.67969 15.7201C2.78969 14.1301 3.77969 12.4601 5.77969 11.9701C5.18969 9.6401 5.68969 7.4501 7.20969 5.8601C8.93969 4.0501 11.6997 3.3301 14.0797 4.0701C16.2697 4.7401 17.8097 6.5401 18.3597 9.0401C19.4497 9.2901 20.4197 9.8601 21.1497 10.6901Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20.8399 18.7399C19.7999 19.6899 18.4399 20.2199 17.0199 20.2199H6.63992C3.89992 20.0199 2.66992 17.9099 2.66992 16.0299C2.66992 15.9299 2.66992 15.8299 2.67992 15.7199L21.1499 10.6899C21.7199 11.2999 22.1499 12.0499 22.4099 12.9099C23.0699 15.0799 22.4699 17.3099 20.8399 18.7399Z"
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
            d="M22.4099 12.9101C22.1499 12.0501 21.7199 11.3001 21.1499 10.6901C20.4199 9.8601 19.4499 9.2901 18.3599 9.0401C17.8099 6.5401 16.2699 4.7401 14.0799 4.0701C11.6999 3.3301 8.93992 4.0501 7.20992 5.8601C5.68992 7.4501 5.18992 9.6401 5.77992 11.9701C3.77992 12.4601 2.78992 14.1301 2.67992 15.7201C2.66992 15.8301 2.66992 15.9301 2.66992 16.0301C2.66992 17.9101 3.89992 20.0201 6.63992 20.2201H17.0199C18.4399 20.2201 19.7999 19.6901 20.8399 18.7401C22.4699 17.3101 23.0699 15.0801 22.4099 12.9101Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCloud as IconComponentType).keywords = [
  "cloud",
  "fog",
  "mist",
  "befog",
  "haze over",
  "becloud",
  "dapple",
  "mottle",
  "sully",
  "defile",
];

export default IconCloud as IconComponentType;
