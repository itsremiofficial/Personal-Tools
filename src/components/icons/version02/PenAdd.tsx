import { FC } from "react";

const IconPenAdd: FC<IconProps> = ({
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
              d="M5.95117 20.7799L9.13118 17.5898"
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
            d="M7.18945 8.18005V4.82007"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.82973 6.5H5.46973"
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
            d="M7.16992 2C6.10992 2 5.12992 2.36999 4.35992 2.98999C3.31992 3.80999 2.66992 5.08 2.66992 6.5C2.66992 7.34 2.90992 8.14001 3.31992 8.82001C3.85992 9.72001 4.70992 10.42 5.72992 10.76C6.17992 10.92 6.65992 11 7.16992 11C8.30992 11 9.33993 10.58 10.1299 9.88C10.4799 9.58 10.7799 9.22001 11.0199 8.82001C11.2299 8.47001 11.3899 8.10001 11.4999 7.70001C11.6099 7.32001 11.6699 6.91 11.6699 6.5C11.6699 4.01 9.65992 2 7.16992 2ZM8.82993 7.25H7.93993V8.17999C7.93993 8.58999 7.59993 8.92999 7.18993 8.92999C6.77993 8.92999 6.43993 8.58999 6.43993 8.17999V7.25H5.46992C5.05992 7.25 4.71992 6.91 4.71992 6.5C4.71992 6.09 5.05992 5.75 5.46992 5.75H6.43993V4.82001C6.43993 4.41001 6.77993 4.07001 7.18993 4.07001C7.59993 4.07001 7.93993 4.41001 7.93993 4.82001V5.75H8.82993C9.23993 5.75 9.57993 6.09 9.57993 6.5C9.57993 6.91 9.24993 7.25 8.82993 7.25Z"
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
            d="M7.16992 2C6.10992 2 5.12992 2.37 4.35992 2.99C3.31992 3.81 2.66992 5.08 2.66992 6.5C2.66992 7.34 2.90992 8.14 3.31992 8.82C3.85992 9.72 4.70992 10.42 5.72992 10.76C6.17992 10.92 6.65992 11 7.16992 11C8.30992 11 9.33992 10.58 10.1299 9.88C10.4799 9.58 10.7799 9.22 11.0199 8.82C11.2299 8.47 11.3899 8.1 11.4999 7.7C11.6099 7.32 11.6699 6.91 11.6699 6.5C11.6699 4.01 9.65992 2 7.16992 2ZM8.82992 7.25H7.93992V8.18C7.93992 8.59 7.59992 8.93 7.18992 8.93C6.77992 8.93 6.43992 8.6 6.43992 8.18V7.25H5.46992C5.05992 7.25 4.71992 6.91 4.71992 6.5C4.71992 6.09 5.05992 5.75 5.46992 5.75H6.43992V4.82C6.43992 4.41 6.77992 4.07 7.18992 4.07C7.59992 4.07 7.93992 4.4 7.93992 4.82V5.75H8.82992C9.23992 5.75 9.57992 6.09 9.57992 6.5C9.57992 6.91 9.24992 7.25 8.82992 7.25Z"
            fill="currentColor"
          />
          <path
            d="M16.6703 21.2899L7.31026 22.3899C6.66026 22.4699 6.08026 22.3699 5.59026 22.1299C5.07026 21.8699 4.66026 21.4699 4.40026 20.9399C4.16026 20.4499 4.07026 19.8799 4.14026 19.2399L4.99026 12.0899C5.07026 12.1199 5.15026 12.1499 5.23026 12.1699C5.84026 12.3899 6.49026 12.4999 7.17026 12.4999C8.63026 12.4999 10.0403 11.9699 11.1103 11.0199C11.5703 10.6199 11.9803 10.1399 12.3103 9.58991C12.5903 9.11991 12.8003 8.61991 12.9403 8.12991C13.0103 7.86991 13.0703 7.58991 13.1103 7.30991C13.1203 7.25991 13.1203 7.20991 13.1203 7.15991L13.2903 7.16991L19.3703 13.2599L19.6303 17.6799C19.8803 20.1599 19.0203 21.0199 16.6703 21.2899Z"
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
(IconPenAdd as IconComponent).keywords = [
  "pen",
  "add",
  "playpen",
  "penitentiary",
  "compose",
  "indite",
  "write",
  "paddock",
  "corral",
  "basin",
  "sty",
  "total",
  "sum up",
  "tot up",
  "add up",
  "sum",
  "summate",
  "impart",
  "contribute",
  "supply",
];

export default IconPenAdd as IconComponent;
