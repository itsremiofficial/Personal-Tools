import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconArrowCircleDown: FC<IconProps> = ({
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
            d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.14014 10.74L12.6701 14.26L16.2001 10.74"
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
            d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z"
            fill="currentColor"
          />
          <path
            d="M12.6701 15.01C12.4801 15.01 12.2901 14.94 12.1401 14.79L8.61008 11.26C8.32008 10.97 8.32008 10.49 8.61008 10.2C8.90008 9.91004 9.38008 9.91004 9.67008 10.2L12.6701 13.2L15.6701 10.2C15.9601 9.91004 16.4401 9.91004 16.7301 10.2C17.0201 10.49 17.0201 10.97 16.7301 11.26L13.2001 14.79C13.0501 14.94 12.8601 15.01 12.6701 15.01Z"
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
            d="M12.6699 2C7.15992 2 2.66992 6.49 2.66992 12C2.66992 17.51 7.15992 22 12.6699 22C18.1799 22 22.6699 17.51 22.6699 12C22.6699 6.49 18.1799 2 12.6699 2ZM16.7299 11.27L13.1999 14.8C13.0499 14.95 12.8599 15.02 12.6699 15.02C12.4799 15.02 12.2899 14.95 12.1399 14.8L8.60992 11.27C8.31992 10.98 8.31992 10.5 8.60992 10.21C8.89992 9.92 9.37992 9.92 9.66992 10.21L12.6699 13.21L15.6699 10.21C15.9599 9.92 16.4399 9.92 16.7299 10.21C17.0199 10.5 17.0199 10.97 16.7299 11.27Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconArrowCircleDown as IconComponentType).keywords = [
  "arrow",
  "circle",
  "down",
  "pointer",
  "archer",
  "archery",
  "dart",
  "arrowhead",
  "bolt",
  "spike",
  "rope",
  "roof",
  "round",
  "rotary",
  "environ",
  "roundabout",
  "circulate",
  "circuit",
  "encircle",
  "surround",
  "dress circle",
  "downwards",
  "downward",
  "downbound",
  "falling",
  "fallen",
  "pull down",
  "downwardly",
  "declining",
  "descending",
];

export default IconArrowCircleDown as IconComponentType;
