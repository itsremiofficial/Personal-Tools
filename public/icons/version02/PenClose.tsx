import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconPenClose: FC<IconProps> = ({
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
              d="M21.86 8.0399L18.68 4.85991C17.48 3.65991 15.83 3.71993 15.02 5.00993L13.25 7.80992L18.92 13.4799L21.72 11.7099C22.93 10.9399 23 9.1699 21.86 8.0399Z"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.9205 13.47L19.1605 17.59C19.3905 19.89 18.5905 20.69 16.4105 20.95L7.69052 21.98C5.85052 22.19 4.53052 20.87 4.75052 19.04L5.73052 10.76"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.25 7.80994L11.5 7.69995"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.9502 20.7799L9.1302 17.5898"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M11.6699 6.5C11.6699 6.91 11.6099 7.32001 11.4999 7.70001C11.3899 8.10001 11.2299 8.47001 11.0199 8.82001C10.7799 9.22001 10.4799 9.58 10.1299 9.88C9.33993 10.58 8.30992 11 7.16992 11C6.65992 11 6.17992 10.92 5.72992 10.76C4.70992 10.42 3.85992 9.72001 3.31992 8.82001C2.90992 8.14001 2.66992 7.34 2.66992 6.5C2.66992 5.08 3.31992 3.80999 4.35992 2.98999C5.12992 2.36999 6.10992 2 7.16992 2C9.65992 2 11.6699 4.01 11.6699 6.5Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.36925 7.68005L5.98926 5.30005"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.34972 5.32007L5.96973 7.70007"
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
            d="M22.3801 11.3499L19.37 13.2499L13.29 7.16993L15.18 4.15992C16.06 2.76992 17.83 2.70995 19.12 3.99995L22.53 7.40992C23.75 8.63992 23.6701 10.5299 22.3801 11.3499Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.6703 21.2898L7.31026 22.3898C6.66026 22.4698 6.08026 22.3698 5.59026 22.1298C5.07026 21.8698 4.66026 21.4698 4.40026 20.9398C4.16026 20.4498 4.07026 19.8798 4.14026 19.2398L5.18026 10.5298C5.35026 10.6198 5.54026 10.6998 5.73026 10.7598C6.18026 10.9198 6.66026 10.9998 7.17026 10.9998C8.31026 10.9998 9.34027 10.5798 10.1303 9.87982C10.4803 9.57982 10.7803 9.21982 11.0203 8.81982C11.2303 8.46982 11.3903 8.09983 11.5003 7.69983C11.5603 7.49983 11.6003 7.28982 11.6303 7.06982L13.2903 7.1698L19.3703 13.2598L19.6303 17.6798C19.8803 20.1598 19.0203 21.0198 16.6703 21.2898Z"
            fill="currentColor"
          />
          <path
            d="M9.45015 18.28L5.60014 22.13C5.07014 21.87 4.67016 21.47 4.41016 20.94L8.26015 17.09C8.60015 16.76 9.13015 16.76 9.45015 17.09C9.78015 17.42 9.78015 17.95 9.45015 18.28Z"
            fill="currentColor"
          />
          <path
            d="M7.16992 2C6.10992 2 5.12992 2.36999 4.35992 2.98999C3.31992 3.80999 2.66992 5.08 2.66992 6.5C2.66992 7.34 2.90992 8.14001 3.31992 8.82001C3.75992 9.55001 4.39992 10.15 5.17992 10.53C5.34992 10.62 5.53992 10.7 5.72992 10.76C6.17992 10.92 6.65992 11 7.16992 11C8.30992 11 9.33993 10.58 10.1299 9.88C10.4799 9.58 10.7799 9.22001 11.0199 8.82001C11.2299 8.47001 11.3899 8.10001 11.4999 7.70001C11.5599 7.50001 11.5999 7.29001 11.6299 7.07001C11.6599 6.88001 11.6699 6.69 11.6699 6.5C11.6699 4.01 9.65992 2 7.16992 2ZM8.89992 8.21002C8.74992 8.36002 8.55992 8.42999 8.36992 8.42999C8.17992 8.42999 7.98992 8.36002 7.83992 8.21002L7.17992 7.54999L6.48993 8.23999C6.33993 8.38999 6.14992 8.46002 5.95992 8.46002C5.76992 8.46002 5.57992 8.38999 5.42992 8.23999C5.13992 7.94999 5.13992 7.46999 5.42992 7.17999L6.11992 6.48999L5.45992 5.83002C5.16992 5.54002 5.16992 5.06002 5.45992 4.77002C5.74992 4.48002 6.22993 4.48002 6.51993 4.77002L7.17992 5.42999L7.80992 4.79999C8.09992 4.50999 8.57992 4.50999 8.86992 4.79999C9.15992 5.08999 9.15992 5.56999 8.86992 5.85999L8.23993 6.48999L8.89992 7.15002C9.19992 7.44002 9.19992 7.91002 8.89992 8.21002Z"
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
            d="M16.6703 21.2899L7.31026 22.3899C6.66026 22.4699 6.08026 22.3699 5.59026 22.1299C5.07026 21.8699 4.66026 21.4699 4.40026 20.9399C4.16026 20.4499 4.07026 19.8799 4.14026 19.2399L4.99026 12.0899C5.07026 12.1199 5.15026 12.1499 5.23026 12.1699C5.84026 12.3899 6.49026 12.4999 7.17026 12.4999C8.63026 12.4999 10.0403 11.9699 11.1103 11.0199C11.5703 10.6199 11.9803 10.1399 12.3103 9.58991C12.5903 9.11991 12.8003 8.61991 12.9403 8.12991C13.0103 7.86991 13.0703 7.58991 13.1103 7.30991C13.1203 7.25991 13.1203 7.20991 13.1203 7.15991L13.2903 7.16991L19.3703 13.2599L19.6303 17.6799C19.8803 20.1599 19.0203 21.0199 16.6703 21.2899Z"
            fill="currentColor"
          />
          <path
            d="M7.16992 2C6.10992 2 5.12992 2.37 4.35992 2.99C3.31992 3.81 2.66992 5.08 2.66992 6.5C2.66992 7.34 2.90992 8.14 3.31992 8.82C3.75992 9.55 4.39992 10.15 5.17992 10.53C5.34992 10.62 5.53992 10.7 5.72992 10.76C6.17992 10.92 6.65992 11 7.16992 11C8.30992 11 9.33992 10.58 10.1299 9.88C10.4799 9.58 10.7799 9.22 11.0199 8.82C11.2299 8.47 11.3899 8.1 11.4999 7.7C11.5599 7.5 11.5999 7.29 11.6299 7.07C11.6599 6.88 11.6699 6.69 11.6699 6.5C11.6699 4.01 9.65992 2 7.16992 2ZM8.89992 8.21C8.75992 8.35 8.55992 8.43 8.36992 8.43C8.17992 8.43 7.98992 8.35 7.83992 8.21L7.17992 7.55L6.49992 8.23C6.34992 8.38 6.15992 8.45 5.96992 8.45C5.77992 8.45 5.57992 8.38 5.43992 8.23C5.14992 7.94 5.14992 7.46 5.43992 7.17L6.12992 6.48L5.45992 5.83C5.16992 5.54 5.16992 5.06 5.45992 4.77C5.74992 4.48 6.22992 4.48 6.51992 4.77L7.17992 5.43L7.80992 4.8C8.09992 4.51 8.57992 4.51 8.86992 4.8C9.15992 5.09 9.15992 5.57 8.86992 5.86L8.23992 6.49L8.89992 7.15C9.19992 7.44 9.19992 7.91 8.89992 8.21Z"
            fill="currentColor"
          />
          <path
            d="M22.6695 10.2799L20.5995 11.5899C20.2095 11.8299 19.7095 11.7799 19.3895 11.4499L14.9595 7.0199C14.6395 6.6999 14.5795 6.1999 14.8195 5.8099L16.1295 3.7399C16.9295 2.4799 18.5295 2.4199 19.7195 3.5899L22.8295 6.6999C23.9195 7.8099 23.8495 9.5299 22.6695 10.2799Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconPenClose as IconComponentType).keywords = [
  "pen",
  "close",
  "playpen",
  "penitentiary",
  "compose",
  "indite",
  "write",
  "paddock",
  "corral",
  "basin",
  "sty",
  "confining",
  "restrained",
  "end",
  "terminus",
  "finis",
  "conclusion",
  "ending",
  "finish",
  "shut",
];

export default IconPenClose as IconComponentType;