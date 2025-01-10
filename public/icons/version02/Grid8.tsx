import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconGrid8: FC<IconProps> = ({
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
              d="M2.66992 12H22.6699"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.91992 12V21.5"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.4199 22V12"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.91992 12V2"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.4199 12V2.54004"
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
            opacity={duotone ? "0.4" : "1"}
            d="M22.6699 7.81V12H16.4199V2H16.8599C20.4999 2 22.6699 4.17 22.6699 7.81Z"
            fill="currentColor"
          />
          <path
            d="M22.6699 12V16.19C22.6699 19.83 20.4999 22 16.8599 22H16.4199V12H22.6699Z"
            fill="currentColor"
          />
          <path
            d="M8.91992 12V22H8.47992C4.83992 22 2.66992 19.83 2.66992 16.19V12H8.91992Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.47992 2C4.83992 2 2.66992 4.17 2.66992 7.81V12H8.91992V2H8.47992Z"
            fill="currentColor"
          />
          <path d="M16.4199 2H8.91992V12H16.4199V2Z" fill="currentColor" />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.4199 12H8.91992V22H16.4199V12Z"
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
            d="M22.6699 7.81003V11.25H17.4199V2.03003C20.7199 2.23003 22.6699 4.36003 22.6699 7.81003Z"
            fill="currentColor"
          />
          <path
            d="M22.6699 12.75V16.19C22.6699 19.64 20.7199 21.77 17.4199 21.97V12.75H22.6699Z"
            fill="currentColor"
          />
          <path
            d="M7.91992 12.75V21.97C4.61992 21.77 2.66992 19.64 2.66992 16.19V12.75H7.91992Z"
            fill="currentColor"
          />
          <path
            d="M7.91992 2.03003V11.25H2.66992V7.81003C2.66992 4.36003 4.61992 2.23003 7.91992 2.03003Z"
            fill="currentColor"
          />
          <path d="M15.9199 2H9.41992V11.25H15.9199V2Z" fill="currentColor" />
          <path
            d="M15.9199 12.75H9.41992V22H15.9199V12.75Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconGrid8 as IconComponentType).keywords = [
  "grid",
  "8",
  "gridiron",
  "control grid",
  "power grid",
  "power system",
  "reference grid",
  "crossword",
  "card",
  "bars",
  "parcel",
  "cck",
  "wireless network",
  "sign on",
  "sign off",
  "back up",
  "put through",
  "ring up",
  "call up",
  "hang up",
];

export default IconGrid8 as IconComponentType;
