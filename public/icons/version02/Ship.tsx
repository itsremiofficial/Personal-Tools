import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconShip: FC<IconProps> = ({
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
            d="M21.0897 12.3699C21.9597 12.7199 22.4997 13.7499 22.2997 14.6599L21.8897 16.5199C21.1797 19.7199 18.6697 21.9999 15.0497 21.9999H10.2897C6.66966 21.9999 4.15966 19.7199 3.44966 16.5199L3.03966 14.6599C2.83966 13.7499 3.37965 12.7199 4.24965 12.3699L5.66967 11.7999L11.1797 9.58993C12.1397 9.20993 13.1997 9.20993 14.1597 9.58993L19.6697 11.7999L21.0897 12.3699Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.6699 22V10"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M19.6699 8V11.8L14.1599 9.59C13.1999 9.21 12.1399 9.21 11.1799 9.59L5.66992 11.8V8C5.66992 6.35 7.01992 5 8.66992 5H16.6699C18.3199 5 19.6699 6.35 19.6699 8Z"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.1699 5H10.1699V3C10.1699 2.45 10.6199 2 11.1699 2H14.1699C14.7199 2 15.1699 2.45 15.1699 3V5Z"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
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
            d="M22.2997 14.6601L21.8897 16.5201C21.1797 19.72 18.6697 22.0001 15.0497 22.0001H10.2897C6.66966 22.0001 4.15966 19.72 3.44966 16.5201L3.03966 14.6601C2.83966 13.7501 3.37965 12.7201 4.24965 12.3701L5.66967 11.8L11.1797 9.59006C11.6597 9.40006 12.1697 9.30005 12.6697 9.30005C13.1697 9.30005 13.6797 9.40006 14.1597 9.59006L19.6697 11.8L21.0897 12.3701C21.9597 12.7201 22.4997 13.7501 22.2997 14.6601Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19.6699 8V11.8L14.1599 9.59C13.1999 9.21 12.1399 9.21 11.1799 9.59L5.66992 11.8V8C5.66992 6.35 7.01992 5 8.66992 5H16.6699C18.3199 5 19.6699 6.35 19.6699 8Z"
            fill="currentColor"
          />
          <path
            d="M15.1699 5H10.1699V3C10.1699 2.45 10.6199 2 11.1699 2H14.1699C14.7199 2 15.1699 2.45 15.1699 3V5Z"
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
            d="M22.2997 14.66L21.8897 16.52C21.1797 19.72 18.6697 22 15.0497 22H10.2897C6.66966 22 4.15966 19.72 3.44966 16.52L3.03966 14.66C2.83966 13.75 3.37966 12.72 4.24966 12.37L5.66966 11.8L11.1797 9.59005C11.6597 9.40005 12.1697 9.30005 12.6697 9.30005C13.1697 9.30005 13.6797 9.40005 14.1597 9.59005L19.6697 11.8L21.0897 12.37C21.9597 12.72 22.4997 13.75 22.2997 14.66Z"
            fill="currentColor"
          />
          <path
            d="M19.6699 8V9.44C19.6699 9.79 19.3099 10.04 18.9799 9.9L14.7099 8.19C13.3999 7.68 11.9399 7.68 10.6199 8.2L6.35992 9.91C6.02992 10.05 5.66992 9.8 5.66992 9.45V8C5.66992 6.35 7.01992 5 8.66992 5H16.6699C18.3199 5 19.6699 6.35 19.6699 8Z"
            fill="currentColor"
          />
          <path
            d="M15.1699 5H10.1699V3C10.1699 2.45 10.6199 2 11.1699 2H14.1699C14.7199 2 15.1699 2.45 15.1699 3V5Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconShip as IconComponentType).keywords = [
  "ship",
  "transport",
  "send",
  "shipboard",
  "vessel",
  "cruiser",
  "barge",
  "sailing",
  "houseboat",
  "shipbuilding",
];

export default IconShip as IconComponentType;
