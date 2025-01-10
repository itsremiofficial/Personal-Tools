import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconMoreSquare: FC<IconProps> = ({
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
          <path
            opacity={duotone ? "0.34" : "1"}
            d="M16.6664 12H16.6754"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.34" : "1"}
            d="M12.6654 12H12.6744"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.34" : "1"}
            d="M8.66443 12H8.67341"
            stroke="currentColor"
            strokeWidth="2"
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
            d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2Z"
            fill="currentColor"
          />
          <path
            d="M12.6699 13C12.1099 13 11.6699 12.55 11.6699 12C11.6699 11.45 12.1199 11 12.6699 11C13.2199 11 13.6699 11.45 13.6699 12C13.6699 12.55 13.2299 13 12.6699 13Z"
            fill="currentColor"
          />
          <path
            d="M16.6699 13C16.1099 13 15.6699 12.55 15.6699 12C15.6699 11.45 16.1199 11 16.6699 11C17.2199 11 17.6699 11.45 17.6699 12C17.6699 12.55 17.2299 13 16.6699 13Z"
            fill="currentColor"
          />
          <path
            d="M8.66992 13C8.10992 13 7.66992 12.55 7.66992 12C7.66992 11.45 8.11992 11 8.66992 11C9.21992 11 9.66992 11.45 9.66992 12C9.66992 12.55 9.22992 13 8.66992 13Z"
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
            d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2ZM8.66992 13C8.10992 13 7.66992 12.55 7.66992 12C7.66992 11.45 8.11992 11 8.66992 11C9.21992 11 9.66992 11.45 9.66992 12C9.66992 12.55 9.22992 13 8.66992 13ZM12.6699 13C12.1099 13 11.6699 12.55 11.6699 12C11.6699 11.45 12.1199 11 12.6699 11C13.2199 11 13.6699 11.45 13.6699 12C13.6699 12.55 13.2299 13 12.6699 13ZM16.6699 13C16.1099 13 15.6699 12.55 15.6699 12C15.6699 11.45 16.1199 11 16.6699 11C17.2199 11 17.6699 11.45 17.6699 12C17.6699 12.55 17.2299 13 16.6699 13Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMoreSquare as IconComponentType).keywords = [
  "more",
  "square",
  "additional",
  "further",
  "added",
  "more than",
  "to a greater extent",
  "maximum",
  "farther",
  "anymore",
  "better",
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

export default IconMoreSquare as IconComponentType;
