import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconPet: FC<IconProps> = ({
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
            d="M5.07959 16.75C4.83959 19.64 7.01959 22 9.91959 22H14.7096C17.9696 22 20.2096 19.37 19.6696 16.15C19.0996 12.77 15.8396 10 12.4096 10C8.68959 10 5.38959 13.04 5.07959 16.75Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.34" : "1"}
            d="M11.1396 7.5C12.5204 7.5 13.6396 6.38071 13.6396 5C13.6396 3.61929 12.5204 2.5 11.1396 2.5C9.75894 2.5 8.63965 3.61929 8.63965 5C8.63965 6.38071 9.75894 7.5 11.1396 7.5Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.34" : "1"}
            d="M17.9697 8.7C19.0743 8.7 19.9697 7.80457 19.9697 6.7C19.9697 5.59543 19.0743 4.7 17.9697 4.7C16.8652 4.7 15.9697 5.59543 15.9697 6.7C15.9697 7.80457 16.8652 8.7 17.9697 8.7Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.34" : "1"}
            d="M21.6699 12.7C22.4983 12.7 23.1699 12.0284 23.1699 11.2C23.1699 10.3716 22.4983 9.7 21.6699 9.7C20.8415 9.7 20.1699 10.3716 20.1699 11.2C20.1699 12.0284 20.8415 12.7 21.6699 12.7Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.34" : "1"}
            d="M4.63965 10.7C5.74422 10.7 6.63965 9.80457 6.63965 8.7C6.63965 7.59543 5.74422 6.7 4.63965 6.7C3.53508 6.7 2.63965 7.59543 2.63965 8.7C2.63965 9.80457 3.53508 10.7 4.63965 10.7Z"
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
            d="M19.7502 15.72C19.1602 12.19 15.7702 9.32001 12.1902 9.32001C8.3002 9.32001 4.8802 12.47 4.5502 16.35C4.4202 17.85 4.9002 19.27 5.8902 20.34C6.8702 21.41 8.2502 22 9.7502 22H14.4302C16.1202 22 17.6002 21.34 18.6102 20.15C19.6202 18.96 20.0202 17.38 19.7502 15.72Z"
            fill="currentColor"
          />
          <path
            d="M10.9495 7.86C12.5677 7.86 13.8795 6.54819 13.8795 4.93C13.8795 3.31181 12.5677 2 10.9495 2C9.33134 2 8.01953 3.31181 8.01953 4.93C8.01953 6.54819 9.33134 7.86 10.9495 7.86Z"
            fill="currentColor"
          />
          <path
            d="M17.6099 9.02999C18.9575 9.02999 20.0499 7.93757 20.0499 6.58999C20.0499 5.24242 18.9575 4.14999 17.6099 4.14999C16.2623 4.14999 15.1699 5.24242 15.1699 6.58999C15.1699 7.93757 16.2623 9.02999 17.6099 9.02999Z"
            fill="currentColor"
          />
          <path
            d="M21.2195 12.93C22.2965 12.93 23.1695 12.057 23.1695 10.98C23.1695 9.90304 22.2965 9.03 21.2195 9.03C20.1426 9.03 19.2695 9.90304 19.2695 10.98C19.2695 12.057 20.1426 12.93 21.2195 12.93Z"
            fill="currentColor"
          />
          <path
            d="M4.60992 10.98C5.9575 10.98 7.04992 9.88758 7.04992 8.54001C7.04992 7.19243 5.9575 6.10001 4.60992 6.10001C3.26235 6.10001 2.16992 7.19243 2.16992 8.54001C2.16992 9.88758 3.26235 10.98 4.60992 10.98Z"
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
            d="M19.7502 15.72C19.1602 12.19 15.7702 9.32 12.1902 9.32C8.3002 9.32 4.8802 12.47 4.5502 16.35C4.4202 17.85 4.9002 19.27 5.8902 20.34C6.8702 21.41 8.2502 22 9.7502 22H14.4302C16.1202 22 17.6002 21.34 18.6102 20.15C19.6202 18.96 20.0202 17.38 19.7502 15.72Z"
            fill="currentColor"
          />
          <path
            d="M10.9495 7.86C12.5677 7.86 13.8795 6.54819 13.8795 4.93C13.8795 3.31181 12.5677 2 10.9495 2C9.33134 2 8.01953 3.31181 8.01953 4.93C8.01953 6.54819 9.33134 7.86 10.9495 7.86Z"
            fill="currentColor"
          />
          <path
            d="M17.6099 9.03C18.9575 9.03 20.0499 7.93758 20.0499 6.59C20.0499 5.24243 18.9575 4.15 17.6099 4.15C16.2623 4.15 15.1699 5.24243 15.1699 6.59C15.1699 7.93758 16.2623 9.03 17.6099 9.03Z"
            fill="currentColor"
          />
          <path
            d="M21.2195 12.93C22.2965 12.93 23.1695 12.057 23.1695 10.98C23.1695 9.90304 22.2965 9.03 21.2195 9.03C20.1426 9.03 19.2695 9.90304 19.2695 10.98C19.2695 12.057 20.1426 12.93 21.2195 12.93Z"
            fill="currentColor"
          />
          <path
            d="M4.60992 10.98C5.9575 10.98 7.04992 9.88757 7.04992 8.54C7.04992 7.19242 5.9575 6.1 4.60992 6.1C3.26235 6.1 2.16992 7.19242 2.16992 8.54C2.16992 9.88757 3.26235 10.98 4.60992 10.98Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconPet as IconComponentType).keywords = [
  "pet",
  "ducky",
  "positron emission tomography",
  "dearie",
  "deary",
  "loved",
  "darling",
  "favored",
  "favorite",
  "favourite",
];

export default IconPet as IconComponentType;
