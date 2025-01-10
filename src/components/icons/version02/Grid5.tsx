import { FC } from "react";

const IconGrid5: FC<IconProps> = ({
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
              d="M10.6699 12H22.6699"
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
            opacity={duotone ? "0.6" : "1"}
            d="M22.6699 7.81V12H9.66992V2H16.8599C20.4999 2 22.6699 4.17 22.6699 7.81Z"
            fill="currentColor"
          />
          <path
            d="M9.66992 2V22H8.47992C4.83992 22 2.66992 19.83 2.66992 16.19V7.81C2.66992 4.17 4.83992 2 8.47992 2H9.66992Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.6699 12V16.19C22.6699 19.83 20.4999 22 16.8599 22H9.66992V12H22.6699Z"
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
            d="M8.91992 2V22H8.47992C4.83992 22 2.66992 19.83 2.66992 16.19V7.81C2.66992 4.17 4.83992 2 8.47992 2H8.91992Z"
            fill="currentColor"
          />
          <path
            d="M22.6699 7.81V11.25H10.4199V2H16.8599C20.4999 2 22.6699 4.17 22.6699 7.81Z"
            fill="currentColor"
          />
          <path
            d="M22.6699 12.75V16.19C22.6699 19.83 20.4999 22 16.8599 22H10.4199V12.75H22.6699Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconGrid5 as IconComponent).keywords = [
  "grid",
  "5",
  "gridiron",
  "control grid",
  "power grid",
  "power system",
  "reference grid",
  "crossword",
  "card",
  "bars",
  "parcel",
  "wash out",
  "cut up",
  "pull out",
  "pull up",
  "pull over",
  "pull in",
  "work out",
  "ride down",
  "rush hour",
];

export default IconGrid5 as IconComponent;
