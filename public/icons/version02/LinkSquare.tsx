import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconLinkSquare: FC<IconProps> = ({
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
              d="M8.85148 16.02C8.09148 15.95 7.34148 15.6 6.76148 14.99C5.44148 13.6 5.44148 11.32 6.76148 9.93001L8.95149 7.63002C10.2715 6.24002 12.4415 6.24002 13.7715 7.63002C15.0915 9.02002 15.0915 11.3 13.7715 12.69L12.6815 13.84"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.492 7.97998C17.252 8.04998 18.002 8.39998 18.582 9.00998C19.902 10.4 19.902 12.68 18.582 14.07L16.392 16.37C15.072 17.76 12.902 17.76 11.572 16.37C10.252 14.98 10.252 12.7 11.572 11.31L12.662 10.16"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M9.67188 22H15.6719C20.6719 22 22.6719 20 22.6719 15V9C22.6719 4 20.6719 2 15.6719 2H9.67188C4.67188 2 2.67188 4 2.67188 9V15C2.67188 20 4.67188 22 9.67188 22Z"
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
            d="M16.8616 2H8.49165C4.85165 2 2.68164 4.17 2.68164 7.81V16.18C2.68164 19.82 4.85165 21.99 8.49165 21.99H16.8616C20.5016 21.99 22.6716 19.82 22.6716 16.18V7.81C22.6716 4.17 20.5016 2 16.8616 2Z"
            fill="currentColor"
          />
          <path
            d="M8.85147 16.77C8.83147 16.77 8.80148 16.77 8.78148 16.77C7.81148 16.68 6.90148 16.23 6.22148 15.51C4.62148 13.83 4.62148 11.1 6.22148 9.41998L8.41149 7.11996C9.19149 6.29996 10.2415 5.83997 11.3615 5.83997C12.4815 5.83997 13.5315 6.28996 14.3115 7.11996C15.9115 8.79996 15.9115 11.53 14.3115 13.21L13.2215 14.36C12.9315 14.66 12.4615 14.67 12.1615 14.39C11.8615 14.1 11.8515 13.63 12.1315 13.33L13.2215 12.18C14.2815 11.07 14.2815 9.25997 13.2215 8.15997C12.2315 7.11997 10.4915 7.11997 9.49149 8.15997L7.30149 10.46C6.24149 11.57 6.24149 13.38 7.30149 14.48C7.73149 14.94 8.31148 15.22 8.92148 15.28C9.33148 15.32 9.63148 15.69 9.59148 16.1C9.56148 16.48 9.23147 16.77 8.85147 16.77Z"
            fill="currentColor"
          />
          <path
            d="M13.9811 18.1599C12.8611 18.1599 11.8111 17.7099 11.0311 16.8799C9.43105 15.1999 9.43105 12.4699 11.0311 10.7899L12.1211 9.63991C12.4111 9.33991 12.881 9.32988 13.181 9.60988C13.481 9.89988 13.491 10.3699 13.211 10.6699L12.1211 11.8199C11.0611 12.9299 11.0611 14.7399 12.1211 15.8399C13.1111 16.8799 14.851 16.8899 15.851 15.8399L18.041 13.5399C19.101 12.4299 19.101 10.6199 18.041 9.51989C17.611 9.05989 17.0311 8.7799 16.4211 8.7199C16.0111 8.6799 15.7111 8.30989 15.7511 7.89989C15.7911 7.48989 16.151 7.17991 16.571 7.22991C17.541 7.32991 18.4511 7.76989 19.1311 8.48989C20.7311 10.1699 20.7311 12.8999 19.1311 14.5799L16.9411 16.8799C16.1511 17.7099 15.1011 18.1599 13.9811 18.1599Z"
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
            d="M16.8619 2H8.48187C4.84187 2 2.67188 4.17 2.67188 7.81V16.18C2.67188 19.83 4.84187 22 8.48187 22H16.8519C20.4919 22 22.6619 19.83 22.6619 16.19V7.81C22.6719 4.17 20.5019 2 16.8619 2ZM8.85188 16.77C8.83188 16.77 8.80187 16.77 8.78187 16.77C7.81187 16.68 6.90188 16.23 6.22188 15.51C4.62188 13.83 4.62188 11.1 6.22188 9.42L8.41187 7.12C9.19187 6.3 10.2419 5.84 11.3619 5.84C12.4819 5.84 13.5319 6.29 14.3119 7.12C15.9119 8.8 15.9119 11.53 14.3119 13.21L13.2219 14.36C12.9319 14.66 12.4619 14.67 12.1619 14.39C11.8619 14.1 11.8519 13.63 12.1319 13.33L13.2219 12.18C14.2819 11.07 14.2819 9.26 13.2219 8.16C12.2319 7.12 10.4919 7.12 9.49187 8.16L7.30188 10.46C6.24188 11.57 6.24188 13.38 7.30188 14.48C7.73187 14.94 8.31187 15.22 8.92188 15.28C9.33187 15.32 9.63188 15.69 9.59188 16.1C9.56187 16.48 9.23188 16.77 8.85188 16.77ZM19.1219 14.59L16.9319 16.89C16.1519 17.71 15.1019 18.17 13.9819 18.17C12.8619 18.17 11.8119 17.72 11.0319 16.89C9.43187 15.21 9.43187 12.48 11.0319 10.8L12.1219 9.65C12.4119 9.35 12.8819 9.34 13.1819 9.62C13.4819 9.91 13.4919 10.38 13.2119 10.68L12.1219 11.83C11.0619 12.94 11.0619 14.75 12.1219 15.85C13.1119 16.89 14.8519 16.9 15.8519 15.85L18.0419 13.55C19.1019 12.44 19.1019 10.63 18.0419 9.53C17.6119 9.07 17.0319 8.79 16.4219 8.73C16.0119 8.69 15.7119 8.32 15.7519 7.91C15.7919 7.5 16.1519 7.19 16.5719 7.24C17.5419 7.34 18.4519 7.78 19.1319 8.5C20.7219 10.17 20.7219 12.91 19.1219 14.59Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconLinkSquare as IconComponentType).keywords = [
  "link",
  "square",
  "linkup",
  "connection",
  "nexus",
  "connexion",
  "connectedness",
  "connect",
  "tie-in",
  "unite",
  "associate",
  "quadrate",
  "right-angled",
  "squarely",
  "foursquare",
  "squarish",
  "conventional",
  "paid",
  "honorable",
  "honest",
];

export default IconLinkSquare as IconComponentType;
