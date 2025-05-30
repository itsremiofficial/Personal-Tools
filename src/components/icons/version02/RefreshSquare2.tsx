import { FC } from "react";

const IconRefreshSquare2: FC<IconProps> = ({
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
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M18.1699 12C18.1699 15.04 15.7099 17.5 12.6699 17.5C9.62992 17.5 7.77991 14.44 7.77991 14.44M7.77991 14.44H10.2599M7.77991 14.44V17.19M7.16992 12C7.16992 8.96 9.60992 6.5 12.6699 6.5C16.3399 6.5 18.1699 9.56 18.1699 9.56M18.1699 9.56V6.81M18.1699 9.56H15.7299"
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
            d="M16.8599 2H8.48993C4.83993 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.82 4.83992 21.99 8.47992 21.99H16.8499C20.4899 21.99 22.6599 19.82 22.6599 16.18V7.81C22.6699 4.17 20.4999 2 16.8599 2Z"
            fill="currentColor"
          />
          <path
            d="M18.6703 11.27C18.2503 11.27 17.9203 11.6 17.9203 12.02C17.9103 13.42 17.3703 14.73 16.3903 15.71C15.4003 16.7 14.0803 17.25 12.6803 17.25C11.2803 17.25 9.96031 16.7 8.97031 15.71C8.94031 15.68 8.92032 15.65 8.89032 15.62H9.72031C10.1303 15.62 10.4703 15.28 10.4703 14.87C10.4703 14.46 10.1303 14.12 9.72031 14.12H7.07031C6.66031 14.12 6.32031 14.46 6.32031 14.87V17.52C6.32031 17.93 6.66031 18.27 7.07031 18.27C7.48031 18.27 7.82031 17.93 7.82031 17.52V16.67C7.85031 16.7 7.88031 16.74 7.91031 16.78C9.18031 18.05 10.8803 18.76 12.6803 18.76C14.4803 18.76 16.1803 18.06 17.4503 16.78C18.7103 15.52 19.4103 13.83 19.4203 12.03C19.4203 11.61 19.0803 11.28 18.6703 11.27Z"
            fill="currentColor"
          />
          <path
            d="M6.67014 12.65C7.08014 12.65 7.41014 12.32 7.42014 11.91C7.44014 10.54 7.99014 9.25 8.95014 8.28C9.94014 7.29 11.2601 6.74 12.6601 6.74C14.0601 6.74 15.3802 7.29 16.3702 8.28C16.4002 8.31 16.4201 8.34 16.4501 8.37H15.6202C15.2102 8.37 14.8702 8.71 14.8702 9.12C14.8702 9.53 15.2102 9.87 15.6202 9.87H18.2701C18.6801 9.87 19.0201 9.53 19.0201 9.12V6.48C19.0201 6.07 18.6801 5.73 18.2701 5.73C17.8601 5.73 17.5201 6.07 17.5201 6.48V7.34C17.4901 7.31 17.4602 7.27 17.4302 7.23C16.1602 5.96 14.4601 5.25 12.6601 5.25C10.8601 5.25 9.16014 5.95 7.89014 7.23C6.64014 8.47 5.94014 10.13 5.92014 11.89C5.91014 12.3 6.24013 12.64 6.66013 12.65C6.67013 12.65 6.67014 12.65 6.67014 12.65Z"
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
            d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2ZM5.91992 11.89C5.94992 10.13 6.64992 8.47 7.88992 7.23C9.16992 5.95 10.8699 5.25 12.6699 5.25C14.4699 5.25 16.1699 5.95 17.4399 7.23C17.4699 7.26 17.4999 7.3 17.5299 7.34V6.48C17.5299 6.07 17.8699 5.73 18.2799 5.73C18.6899 5.73 19.0299 6.07 19.0299 6.48V9.13C19.0299 9.54 18.6899 9.88 18.2799 9.88H15.6299C15.2199 9.88 14.8799 9.54 14.8799 9.13C14.8799 8.72 15.2199 8.38 15.6299 8.38H16.4599C16.4299 8.35 16.4099 8.32 16.3799 8.29C15.3899 7.3 14.0699 6.75 12.6699 6.75C11.2699 6.75 9.94992 7.3 8.95992 8.29C7.98992 9.26 7.44992 10.55 7.42992 11.92C7.41992 12.32 7.07992 12.65 6.66992 12.65H6.65992C6.24992 12.65 5.91992 12.3 5.91992 11.89ZM17.4399 16.77C16.1699 18.04 14.4699 18.75 12.6699 18.75C10.8699 18.75 9.16992 18.05 7.89992 16.77C7.86992 16.74 7.83992 16.7 7.80992 16.66V17.51C7.80992 17.92 7.46992 18.26 7.05992 18.26C6.64992 18.26 6.30992 17.92 6.30992 17.51V14.86C6.30992 14.45 6.64992 14.11 7.05992 14.11H9.70992C10.1199 14.11 10.4599 14.45 10.4599 14.86C10.4599 15.27 10.1199 15.61 9.70992 15.61H8.87992C8.90992 15.64 8.92992 15.67 8.95992 15.7C9.94992 16.69 11.2699 17.24 12.6699 17.24C14.0699 17.24 15.3899 16.69 16.3799 15.7C17.3599 14.72 17.9099 13.41 17.9099 12.01C17.9099 11.6 18.2499 11.26 18.6599 11.26C19.0699 11.26 19.4099 11.6 19.4099 12.01C19.4099 13.82 18.7099 15.51 17.4399 16.77Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconRefreshSquare2 as IconComponent).keywords = [
  "refresh",
  "square",
  "2",
  "refreshen",
  "freshen",
  "review",
  "freshen up",
  "brush up",
  "refresher",
  "refreshment",
  "rejuvenate",
  "revive",
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

export default IconRefreshSquare2 as IconComponent;
