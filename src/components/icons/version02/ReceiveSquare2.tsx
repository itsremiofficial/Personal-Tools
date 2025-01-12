import { FC } from "react";

const IconReceiveSquare2: FC<IconProps> = ({
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
            d="M9.66992 22H15.6699C20.6699 22 22.6699 20 22.6699 15V9C22.6699 4 20.6699 2 15.6699 2H9.66992C4.66992 2 2.66992 4 2.66992 9V15C2.66992 20 4.66992 22 9.66992 22Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M11.2598 13.34H15.4998V9.09998"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.4998 13.3399L9.83984 7.67993"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6.66992 16.51C10.5599 17.81 14.7799 17.81 18.6699 16.51"
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
            d="M16.8597 2H8.4897C4.8497 2 2.67969 4.17 2.67969 7.81V16.18C2.67969 19.82 4.8497 21.99 8.4897 21.99H16.8597C20.4997 21.99 22.6697 19.82 22.6697 16.18V7.81C22.6697 4.17 20.4997 2 16.8597 2Z"
            fill="currentColor"
          />
          <path
            d="M13.69 12.59H11.26C10.85 12.59 10.51 12.93 10.51 13.34C10.51 13.75 10.85 14.09 11.26 14.09H15.5C15.6 14.09 15.69 14.07 15.79 14.03C15.97 13.95 16.12 13.81 16.2 13.62C16.24 13.53 16.26 13.43 16.26 13.33V9.09999C16.26 8.68999 15.92 8.34999 15.51 8.34999C15.1 8.34999 14.76 8.68999 14.76 9.09999V11.53L10.3801 7.15C10.0901 6.86 9.61004 6.86 9.32004 7.15C9.03004 7.44 9.03004 7.91999 9.32004 8.20999L13.69 12.59Z"
            fill="currentColor"
          />
          <path
            d="M19.3801 16.28C19.2501 15.89 18.8301 15.68 18.4301 15.81C14.7101 17.05 10.6201 17.05 6.9001 15.81C6.5101 15.68 6.0801 15.89 5.9501 16.28C5.8201 16.67 6.0301 17.1 6.4201 17.23C8.4301 17.9 10.5401 18.24 12.6601 18.24C14.7801 18.24 16.8901 17.9 18.9001 17.23C19.3001 17.09 19.5101 16.67 19.3801 16.28Z"
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
            d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2ZM9.30992 7.15C9.59992 6.86 10.0799 6.86 10.3699 7.15L14.7499 11.53V9.1C14.7499 8.69 15.0899 8.35 15.4999 8.35C15.9099 8.35 16.2499 8.69 16.2499 9.1V13.34C16.2499 13.44 16.2299 13.53 16.1899 13.63C16.1099 13.81 15.9699 13.96 15.7799 14.04C15.6899 14.08 15.5899 14.1 15.4899 14.1H11.2499C10.8399 14.1 10.4999 13.76 10.4999 13.35C10.4999 12.94 10.8399 12.6 11.2499 12.6H13.6799L9.30992 8.21C9.01992 7.92 9.01992 7.45 9.30992 7.15ZM18.9099 17.22C16.8999 17.89 14.7899 18.23 12.6699 18.23C10.5499 18.23 8.43992 17.89 6.42992 17.22C6.03992 17.09 5.82992 16.66 5.95992 16.27C6.08992 15.88 6.50992 15.66 6.90992 15.8C10.6299 17.04 14.7199 17.04 18.4399 15.8C18.8299 15.67 19.2599 15.88 19.3899 16.27C19.5099 16.67 19.2999 17.09 18.9099 17.22Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconReceiveSquare2 as IconComponent).keywords = [
  "receive",
  "square",
  "2",
  "invite",
  "take in",
  "obtain",
  "get",
  "have",
  "meet",
  "undergo",
  "find",
  "encounter",
  "quadrate",
  "right-angled",
  "squarely",
  "foursquare",
  "squarish",
  "conventional",
  "paid",
  "honorable",
  "honest",
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

export default IconReceiveSquare2 as IconComponent;
