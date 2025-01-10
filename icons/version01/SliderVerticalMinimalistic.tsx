import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconSliderVerticalMinimalistic: FC<IconProps> = ({
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
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 8C6 5.17157 6 3.75736 6.87868 2.87868C7.75736 2 9.17157 2 12 2C14.8284 2 16.2426 2 17.1213 2.87868C18 3.75736 18 5.17157 18 8V16C18 18.8284 18 20.2426 17.1213 21.1213C16.2426 22 14.8284 22 12 22C9.17157 22 7.75736 22 6.87868 21.1213C6 20.2426 6 18.8284 6 16V8Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M21 4.5L21 19.5"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M3 4.5L3 19.5"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
        </svg>
      ) : duotone ? (
        <svg
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.84613 8C5.84613 5.17157 5.84613 3.75736 6.74734 2.87868C7.64855 2 9.09903 2 12 2C14.9009 2 16.3514 2 17.2526 2.87868C18.1538 3.75736 18.1538 5.17157 18.1538 8V16C18.1538 18.8284 18.1538 20.2426 17.2526 21.1213C16.3514 22 14.9009 22 12 22C9.09903 22 7.64855 22 6.74734 21.1213C5.84613 20.2426 5.84613 18.8284 5.84613 16V8Z"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.5" : "1"}>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.76923 3.75C3.19407 3.75 3.53846 4.08579 3.53846 4.5V19.5C3.53846 19.9142 3.19407 20.25 2.76923 20.25C2.3444 20.25 2 19.9142 2 19.5V4.5C2 4.08579 2.3444 3.75 2.76923 3.75ZM21.2308 3.75C21.6556 3.75 22 4.08579 22 4.5V19.5C22 19.9142 21.6556 20.25 21.2308 20.25C20.8059 20.25 20.4615 19.9142 20.4615 19.5V4.5C20.4615 4.08579 20.8059 3.75 21.2308 3.75Z"
              fill="currentColor"
            />
          </g>
        </svg>
      ) : (
        <svg
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.84615 8C5.84615 5.17157 5.84615 3.75736 6.74736 2.87868C7.64857 2 9.09905 2 12 2C14.901 2 16.3514 2 17.2526 2.87868C18.1538 3.75736 18.1538 5.17157 18.1538 8V16C18.1538 18.8284 18.1538 20.2426 17.2526 21.1213C16.3514 22 14.901 22 12 22C9.09905 22 7.64857 22 6.74736 21.1213C5.84615 20.2426 5.84615 18.8284 5.84615 16V8Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.76923 3.75C3.19407 3.75 3.53846 4.08579 3.53846 4.5V19.5C3.53846 19.9142 3.19407 20.25 2.76923 20.25C2.3444 20.25 2 19.9142 2 19.5V4.5C2 4.08579 2.3444 3.75 2.76923 3.75ZM21.2308 3.75C21.6556 3.75 22 4.08579 22 4.5V19.5C22 19.9142 21.6556 20.25 21.2308 20.25C20.8059 20.25 20.4615 19.9142 20.4615 19.5V4.5C20.4615 4.08579 20.8059 3.75 21.2308 3.75Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSliderVerticalMinimalistic as IconComponentType).keywords = [
  "slider",
  "vertical",
  "minimalistic",
  "luger",
  "pseudemys scripta",
  "yellow-bellied terrapin",
  "bushing",
  "skid",
  "glider",
  "scroll",
  "scrollbar",
  "track",
  "perpendicular",
  "plumb",
  "upright",
  "stand-up",
  "standing",
  "straight",
  "rearing",
  "erect",
  "erectile",
  "modularistic",
  "brutalistic",
  "localistic",
  "reductionist",
  "exhibitional",
  "monogynous",
  "simplificational",
  "reductionistic",
  "automatistic",
];

export default IconSliderVerticalMinimalistic as IconComponentType;
