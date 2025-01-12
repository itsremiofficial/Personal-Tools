import { FC } from "react";

const IconGrid6: FC<IconProps> = ({
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
              d="M10.6699 2V22"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.6699 8.5H22.6699"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.6699 15.5H22.6699"
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
            d="M22.6699 7.81V8.5H9.66992V2H16.8599C20.4999 2 22.6699 4.17 22.6699 7.81Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.6699 15.5V16.19C22.6699 19.83 20.4999 22 16.8599 22H9.66992V15.5H22.6699Z"
            fill="currentColor"
          />
          <path
            d="M9.66992 2V22H8.47992C4.83992 22 2.66992 19.83 2.66992 16.19V7.81C2.66992 4.17 4.83992 2 8.47992 2H9.66992Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.6" : "1"}
            d="M22.6699 8.5H9.66992V15.5H22.6699V8.5Z"
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
            d="M22.6699 7.74995H10.4199V1.94995H16.8599C20.4999 1.94995 22.6699 4.11995 22.6699 7.74995Z"
            fill="currentColor"
          />
          <path
            d="M22.6699 16.25C22.6199 19.82 20.4599 21.95 16.8599 21.95H10.4199V16.25H22.6699Z"
            fill="currentColor"
          />
          <path
            d="M8.91992 1.94995V21.95H8.47992C4.83992 21.95 2.66992 19.78 2.66992 16.14V7.75995C2.66992 4.11995 4.83992 1.94995 8.47992 1.94995H8.91992Z"
            fill="currentColor"
          />
          <path
            d="M22.6699 9.25H10.4199V14.75H22.6699V9.25Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconGrid6 as IconComponent).keywords = [
  "grid",
  "6",
  "gridiron",
  "control grid",
  "power grid",
  "power system",
  "reference grid",
  "crossword",
  "card",
  "bars",
  "parcel",
  "private eye",
  "project management",
  "think tank",
  "diminishing returns",
  "financial advisor",
  "red ink",
  "lead time",
  "wall street",
  "boot camp",
];

export default IconGrid6 as IconComponent;
