import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconTrontronTrx: FC<IconProps> = ({
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
            d="M3.31004 3.59L10.03 20.39C10.38 21.28 11.16 21.39 11.74 20.64L21.12 8.7C21.42 8.32 21.39 7.72 21.04 7.38L17.91 4.25C17.78 4.12 17.52 3.99 17.34 3.97L4.37003 2.23C3.43003 2.1 2.96004 2.71 3.31004 3.59Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M10.6697 21L11.6697 10L3.67969 2.90002"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.6699 4L11.6699 10L20.7099 8.19"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
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
          <path d="M24.6699 0H0.669922V24H24.6699V0Z" fill="none" />
          <path
            d="M21.3302 8.04C21.3302 8.27 21.2702 8.51 21.1202 8.7L11.7402 20.64C11.4002 21.07 11.0002 21.22 10.6602 21.1L10.6702 21L11.6702 10L20.7102 8.19L21.3302 8.04Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21.3299 8.04L20.7099 8.19L11.6699 10L17.6199 4.05C17.7399 4.1 17.8399 4.17 17.9099 4.24L21.0399 7.37C21.2199 7.55 21.3199 7.79 21.3299 8.04Z"
            fill="currentColor"
          />
          <path
            d="M17.6201 4.05L11.6701 10L3.68008 2.9L3.33008 2.56V2.55C3.53008 2.29 3.89008 2.16 4.37008 2.23L17.3301 3.96C17.4201 3.97 17.5201 4 17.6201 4.05Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M11.6698 10L10.6698 21L10.6598 21.1C10.4098 21.01 10.1798 20.77 10.0298 20.39L3.30983 3.59C3.13983 3.17 3.15983 2.81 3.32983 2.56L3.67983 2.9L11.6698 10Z"
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
            d="M20.0696 10.53C20.5896 10.43 20.9496 11.02 20.6296 11.44L13.6796 20.29C13.3296 20.74 12.6095 20.45 12.6695 19.89L13.3696 12.29C13.3896 12.04 13.5795 11.83 13.8295 11.78L20.0696 10.53Z"
            fill="none"
          />
          <path
            d="M22.3097 7.69C22.5297 7.93 22.4097 8.32 22.0997 8.39L13.6597 10.08C13.1097 10.19 12.7497 9.52 13.1497 9.12L18.1697 4.1C18.3997 3.87 18.7697 3.88 18.9897 4.11L22.3097 7.69Z"
            fill="none"
          />
          <path
            d="M15.3595 3.19C15.8295 3.25 16.0195 3.82 15.6895 4.16L12.1295 7.72C11.9195 7.93 11.5795 7.94 11.3495 7.74L6.00949 2.99C5.58949 2.62 5.90944 1.93 6.45944 2L15.3595 3.19Z"
            fill="none"
          />
          <path
            d="M11.3897 10.07C11.6597 10.31 11.7897 10.66 11.7697 11.01L10.9097 21.47C10.8597 22.07 10.0297 22.19 9.80971 21.63L2.95967 3.96C2.73967 3.4 3.4197 2.93 3.8697 3.33L11.3897 10.07Z"
            fill="none"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconTrontronTrx as IconComponentType).keywords = [
  "trontron",
  "trx",
  "compromise",
  "transact",
  "transaction",
  "transactional",
  "reduced",
  "aav",
];

export default IconTrontronTrx as IconComponentType;
