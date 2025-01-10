import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconHexHex: FC<IconProps> = ({
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
            d="M17.6699 3.34H7.66992L2.66992 12L7.66992 20.66H17.6699L22.6699 12L17.6699 3.34Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M11.54 14H7.70001L5.77002 17.33L7.70001 20.66H11.54L13.47 17.33L11.54 14Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.0098 8H7.6998L4.0498 14.33L7.6998 20.66H15.0098L18.6698 14.33L15.0098 8Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
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
          <path d="M24.6699 0H0.669922V24H24.6699V0Z" fill="none" />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17.6699 3.33997H7.66992L2.66992 12L7.66992 20.66H17.6699L22.6699 12L17.6699 3.33997Z"
            fill="currentColor"
          />
          <path
            d="M11.54 14H7.70001L5.77002 17.33L7.70001 20.66H11.54L13.47 17.33L11.54 14Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.6" : "1"}
            d="M15.0098 8H7.6998L4.0498 14.33L7.6998 20.66H15.0098L18.6698 14.33L15.0098 8Z"
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
            opacity={duotone ? "0.13" : "1"}
            d="M11.5398 14L13.4698 17.33L11.5498 20.66H7.66977L5.75977 17.35L7.69977 14H11.5398Z"
            fill="none"
          />
          <path
            d="M11.21 14.08H7.79C7.61 14.08 7.45001 14.18 7.36001 14.33L5.65002 17.29C5.56002 17.44 5.56002 17.64 5.65002 17.79L7.36001 20.75C7.45001 20.9 7.61 21 7.79 21H11.21C11.39 21 11.55 20.9 11.64 20.75L13.35 17.79C13.44 17.64 13.44 17.44 13.35 17.29L11.64 14.33C11.55 14.17 11.39 14.08 11.21 14.08Z"
            fill="none"
          />
          <path
            d="M22.9101 11.74C23.0001 11.9 23.0001 12.1 22.9101 12.26L17.9801 20.79C17.9101 20.92 17.7701 21 17.6201 21C17.3001 21 17.1001 20.65 17.2601 20.38L20.5501 14.68C20.6401 14.52 20.6401 14.32 20.5501 14.16L16.1501 6.53999C16.0601 6.37999 15.8901 6.27999 15.7001 6.27999H6.89008C6.70008 6.27999 6.54007 6.37999 6.44007 6.53999L3.17008 12.22C3.00008 12.52 2.57008 12.52 2.39008 12.22C2.31008 12.08 2.31008 11.91 2.39008 11.77L7.31009 3.24999C7.39009 3.08999 7.57007 2.98999 7.76007 2.98999H17.5501C17.7401 2.98999 17.9001 3.08999 18.0001 3.24999L22.9101 11.74Z"
            fill="none"
          />
          <path
            d="M18.7599 14.68L15.2599 20.74C15.1699 20.9 15 21 14.81 21H14.21C13.81 21 13.5599 20.57 13.7599 20.22L15.1599 17.8C15.2499 17.64 15.2499 17.44 15.1599 17.28L12.56 12.78C12.46 12.62 12.28 12.52 12.09 12.52H6.88995C6.69995 12.52 6.53994 12.62 6.43994 12.78L5.03994 15.2C4.83994 15.55 4.33995 15.55 4.13995 15.2L3.83996 14.69C3.74996 14.53 3.74996 14.33 3.83996 14.17L7.32995 8.11001C7.41995 7.95001 7.58993 7.85001 7.77993 7.85001H14.77C14.96 7.85001 15.1199 7.95001 15.2199 8.11001L18.7199 14.17C18.8399 14.32 18.8399 14.53 18.7599 14.68Z"
            fill="none"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconHexHex as IconComponentType).keywords = [
  "hex",
  "bewitch",
  "enchant",
  "glamour",
  "witch",
  "jinx",
  "curse",
  "hexadecimal",
  "charm",
  "spell",
];

export default IconHexHex as IconComponentType;
