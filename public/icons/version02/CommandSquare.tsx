import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconCommandSquare: FC<IconProps> = ({
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
              d="M15.0701 9.6001H10.27V14.4001H15.0701V9.6001Z"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.46991 17.9999C9.45991 17.9999 10.2699 17.1899 10.2699 16.1999V14.3999H8.46991C7.47991 14.3999 6.66992 15.2099 6.66992 16.1999C6.66992 17.1899 7.47991 17.9999 8.46991 17.9999Z"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.46991 9.60001H10.2699V7.79999C10.2699 6.80999 9.45991 6 8.46991 6C7.47991 6 6.66992 6.80999 6.66992 7.79999C6.66992 8.78999 7.47991 9.60001 8.46991 9.60001Z"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.0698 9.60001H16.8698C17.8598 9.60001 18.6698 8.78999 18.6698 7.79999C18.6698 6.80999 17.8598 6 16.8698 6C15.8798 6 15.0698 6.80999 15.0698 7.79999V9.60001Z"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.8698 17.9999C17.8598 17.9999 18.6698 17.1899 18.6698 16.1999C18.6698 15.2099 17.8598 14.3999 16.8698 14.3999H15.0698V16.1999C15.0698 17.1899 15.8798 17.9999 16.8698 17.9999Z"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M9.66992 22H15.6699C20.6699 22 22.6699 20 22.6699 15V9C22.6699 4 20.6699 2 15.6699 2H9.66992C4.66992 2 2.66992 4 2.66992 9V15C2.66992 20 4.66992 22 9.66992 22Z"
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
            d="M16.8599 2H8.48993C4.84993 2 2.67993 4.17 2.67993 7.81V16.18C2.67993 19.82 4.84993 21.99 8.48993 21.99H16.8599C20.4999 21.99 22.6699 19.82 22.6699 16.18V7.81C22.6699 4.17 20.4999 2 16.8599 2Z"
            fill="currentColor"
          />
          <path
            d="M11.42 14.1501H13.9301C14.4201 14.1501 14.83 13.7501 14.83 13.2501V10.7401C14.83 10.2501 14.4301 9.84009 13.9301 9.84009H11.42C10.93 9.84009 10.52 10.2401 10.52 10.7401V13.2501C10.52 13.7501 10.92 14.1501 11.42 14.1501Z"
            fill="currentColor"
          />
          <path
            d="M8.46991 17.9999C9.45991 17.9999 10.2699 17.1899 10.2699 16.1999V15.3999C10.2699 14.8499 9.8199 14.3999 9.2699 14.3999H8.46991C7.47991 14.3999 6.66992 15.2099 6.66992 16.1999C6.66992 17.1899 7.47991 17.9999 8.46991 17.9999Z"
            fill="currentColor"
          />
          <path
            d="M8.46991 9.60001H9.2699C9.8199 9.60001 10.2699 9.15001 10.2699 8.60001V7.79999C10.2699 6.80999 9.45991 6 8.46991 6C7.47991 6 6.66992 6.80999 6.66992 7.79999C6.66992 8.78999 7.47991 9.60001 8.46991 9.60001Z"
            fill="currentColor"
          />
          <path
            d="M16.0698 9.60001H16.8698C17.8598 9.60001 18.6698 8.78999 18.6698 7.79999C18.6698 6.80999 17.8598 6 16.8698 6C15.8798 6 15.0698 6.80999 15.0698 7.79999V8.60001C15.0698 9.15001 15.5198 9.60001 16.0698 9.60001Z"
            fill="currentColor"
          />
          <path
            d="M16.8698 17.9999C17.8598 17.9999 18.6698 17.1899 18.6698 16.1999C18.6698 15.2099 17.8598 14.3999 16.8698 14.3999H16.0698C15.5198 14.3999 15.0698 14.8499 15.0698 15.3999V16.1999C15.0698 17.1899 15.8798 17.9999 16.8698 17.9999Z"
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
            d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2ZM10.2699 16.2C10.2699 17.19 9.45992 18 8.46992 18C7.47992 18 6.66992 17.19 6.66992 16.2C6.66992 15.21 7.47992 14.4 8.46992 14.4H9.26992C9.81992 14.4 10.2699 14.85 10.2699 15.4V16.2ZM10.2699 8.6C10.2699 9.15 9.81992 9.6 9.26992 9.6H8.46992C7.47992 9.6 6.66992 8.79 6.66992 7.8C6.66992 6.81 7.47992 6 8.46992 6C9.45992 6 10.2699 6.81 10.2699 7.8V8.6ZM14.8199 13.25C14.8199 13.74 14.4199 14.15 13.9199 14.15H11.4099C10.9199 14.15 10.5099 13.75 10.5099 13.25V10.74C10.5099 10.25 10.9099 9.84 11.4099 9.84H13.9199C14.4099 9.84 14.8199 10.24 14.8199 10.74V13.25ZM16.8699 18C15.8799 18 15.0699 17.19 15.0699 16.2V15.4C15.0699 14.85 15.5199 14.4 16.0699 14.4H16.8699C17.8599 14.4 18.6699 15.21 18.6699 16.2C18.6699 17.19 17.8599 18 16.8699 18ZM16.8699 9.6H16.0699C15.5199 9.6 15.0699 9.15 15.0699 8.6V7.8C15.0699 6.81 15.8799 6 16.8699 6C17.8599 6 18.6699 6.81 18.6699 7.8C18.6699 8.79 17.8599 9.6 16.8699 9.6Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCommandSquare as IconComponentType).keywords = [
  "command",
  "square",
  "control",
  "bidding",
  "mastery",
  "dominate",
  "instruction",
  "require",
  "statement",
  "compel",
  "overlook",
  "quadrate",
  "right-angled",
  "squarely",
  "foursquare",
  "squarish",
  "conventional",
  "paid",
  "honorable",
  "honest",
];

export default IconCommandSquare as IconComponentType;