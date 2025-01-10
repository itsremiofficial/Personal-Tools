import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconShieldTick: FC<IconProps> = ({
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
            d="M11.1601 2.23006L6.17008 4.11006C5.02008 4.54006 4.08008 5.90006 4.08008 7.12006V14.5501C4.08008 15.7301 4.86008 17.2801 5.81008 17.9901L10.1101 21.2001C11.5201 22.2601 13.8401 22.2601 15.2501 21.2001L19.5501 17.9901C20.5001 17.2801 21.2801 15.7301 21.2801 14.5501V7.12006C21.2801 5.89006 20.3401 4.53006 19.1901 4.10006L14.2001 2.23006C13.3501 1.92006 11.9901 1.92006 11.1601 2.23006Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.71973 11.8702L11.3297 13.4802L15.6297 9.18018"
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
            d="M11.6297 2.06008L6.12973 4.12008C5.07973 4.52008 4.21973 5.76008 4.21973 6.89008V14.9901C4.21973 15.8001 4.74973 16.8701 5.39973 17.3501L10.8997 21.4601C11.8697 22.1901 13.4597 22.1901 14.4297 21.4601L19.9297 17.3501C20.5797 16.8601 21.1097 15.8001 21.1097 14.9901V6.89008C21.1097 5.77008 20.2497 4.52008 19.1997 4.13008L13.6997 2.07008C13.1397 1.85008 12.1997 1.85008 11.6297 2.06008Z"
            fill="currentColor"
          />
          <path
            d="M11.3302 14.2301C11.1402 14.2301 10.9502 14.1601 10.8002 14.0101L9.19016 12.4001C8.90016 12.1101 8.90016 11.6301 9.19016 11.3401C9.48016 11.0501 9.96016 11.0501 10.2502 11.3401L11.3302 12.4201L15.1002 8.65012C15.3902 8.36012 15.8702 8.36012 16.1602 8.65012C16.4502 8.94012 16.4502 9.42012 16.1602 9.71012L11.8602 14.0101C11.7102 14.1601 11.5202 14.2301 11.3302 14.2301Z"
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
            d="M19.2097 4.11984L13.7097 2.05984C13.1397 1.84984 12.2097 1.84984 11.6397 2.05984L6.13973 4.11984C5.07973 4.51984 4.21973 5.75984 4.21973 6.88984V14.9898C4.21973 15.7998 4.74973 16.8698 5.39973 17.3498L10.8997 21.4598C11.8697 22.1898 13.4597 22.1898 14.4297 21.4598L19.9297 17.3498C20.5797 16.8598 21.1097 15.7998 21.1097 14.9898V6.88984C21.1197 5.75984 20.2597 4.51984 19.2097 4.11984ZM16.1497 9.71984L11.8497 14.0198C11.6997 14.1698 11.5097 14.2398 11.3197 14.2398C11.1297 14.2398 10.9397 14.1698 10.7897 14.0198L9.18973 12.3998C8.89973 12.1098 8.89973 11.6298 9.18973 11.3398C9.47973 11.0498 9.95973 11.0498 10.2497 11.3398L11.3297 12.4198L15.0997 8.64984C15.3897 8.35984 15.8697 8.35984 16.1597 8.64984C16.4497 8.93984 16.4497 9.42984 16.1497 9.71984Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconShieldTick as IconComponentType).keywords = [
  "shield",
  "tick",
  "buckler",
  "screen",
  "harbor",
  "harbour",
  "armoured",
  "armor",
  "breastplate",
  "ribbon",
  "visor",
  "click",
  "ticktock",
  "beat",
  "ticktack",
  "retick",
  "ixodid",
  "acarid",
  "spinose",
  "gene",
];

export default IconShieldTick as IconComponentType;
