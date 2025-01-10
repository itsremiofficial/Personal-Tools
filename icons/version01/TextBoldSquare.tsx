import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconTextBoldSquare: FC<IconProps> = ({
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
            opacity={duotone ? "0.5" : "1"}
            d="M2 12.0005C2 7.28644 2 4.92942 3.46447 3.46495C4.92893 2.00049 7.28595 2.00049 12 2.00049C16.714 2.00049 19.0711 2.00049 20.5355 3.46495C22 4.92942 22 7.28644 22 12.0005C22 16.7145 22 19.0716 20.5355 20.536C19.0711 22.0005 16.714 22.0005 12 22.0005C7.28595 22.0005 4.92893 22.0005 3.46447 20.536C2 19.0716 2 16.7145 2 12.0005Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M8 7.52223C8 6.68179 8.68131 6.00049 9.52174 6.00049H12C13.6569 6.00049 15 7.34363 15 9.00049C15 10.6573 13.6569 12.0005 12 12.0005H8V7.52223Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M8 12.0005H13C14.6569 12.0005 16 13.3436 16 15.0005C16 16.6573 14.6569 18.0005 13 18.0005H9.17647C8.52672 18.0005 8 17.4738 8 16.824V12.0005Z"
            stroke="currentColor"
            strokeWidth={width}
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
            opacity={duotone ? "0.5" : "1"}
            d="M3.46447 3.46495C2 4.92942 2 7.28644 2 12.0005C2 16.7145 2 19.0716 3.46447 20.536C4.92893 22.0005 7.28595 22.0005 12 22.0005C16.714 22.0005 19.0711 22.0005 20.5355 20.536C22 19.0716 22 16.7145 22 12.0005C22 7.28644 22 4.92942 20.5355 3.46495C19.0711 2.00049 16.714 2.00049 12 2.00049C7.28595 2.00049 4.92893 2.00049 3.46447 3.46495Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.52174 5.25049C8.26709 5.25049 7.25 6.26758 7.25 7.52223V16.824C7.25 17.888 8.11251 18.7505 9.17647 18.7505H13C15.0711 18.7505 16.75 17.0716 16.75 15.0005C16.75 13.5272 15.9004 12.2524 14.6645 11.6392C15.3356 10.9616 15.75 10.0295 15.75 9.00049C15.75 6.92942 14.0711 5.25049 12 5.25049H9.52174ZM14.25 9.00049C14.25 10.2431 13.2426 11.2505 12 11.2505H8.75V7.52223C8.75 7.09601 9.09552 6.75049 9.52174 6.75049H12C13.2426 6.75049 14.25 7.75785 14.25 9.00049ZM8.75 16.824V12.7505H13C14.2426 12.7505 15.25 13.7578 15.25 15.0005C15.25 16.2431 14.2426 17.2505 13 17.2505H9.17647C8.94094 17.2505 8.75 17.0596 8.75 16.824Z"
            fill="currentColor"
          />
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
            d="M14.25 9.00049C14.25 10.2431 13.2426 11.2505 12 11.2505H8.75V7.52223C8.75 7.09601 9.09552 6.75049 9.52174 6.75049H12C13.2426 6.75049 14.25 7.75785 14.25 9.00049Z"
            fill="currentColor"
          />
          <path
            d="M8.75 16.824V12.7505H13C14.2426 12.7505 15.25 13.7578 15.25 15.0005C15.25 16.2431 14.2426 17.2505 13 17.2505H9.17647C8.94094 17.2505 8.75 17.0596 8.75 16.824Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.46447 3.46495C2 4.92942 2 7.28644 2 12.0005C2 16.7145 2 19.0716 3.46447 20.536C4.92893 22.0005 7.28595 22.0005 12 22.0005C16.714 22.0005 19.0711 22.0005 20.5355 20.536C22 19.0716 22 16.7145 22 12.0005C22 7.28644 22 4.92942 20.5355 3.46495C19.0711 2.00049 16.714 2.00049 12 2.00049C7.28595 2.00049 4.92893 2.00049 3.46447 3.46495ZM7.25 7.52223C7.25 6.26758 8.26709 5.25049 9.52174 5.25049H12C14.0711 5.25049 15.75 6.92942 15.75 9.00049C15.75 10.0295 15.3356 10.9616 14.6645 11.6392C15.9004 12.2524 16.75 13.5272 16.75 15.0005C16.75 17.0716 15.0711 18.7505 13 18.7505H9.17647C8.11251 18.7505 7.25 17.888 7.25 16.824V7.52223Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconTextBoldSquare as IconComponentType).keywords = [
  "text",
  "bold",
  "square",
  "schoolbook",
  "textbook",
  "school text",
  "text edition",
  "textual matter",
  "writing",
  "letter",
  "paragraph",
  "manuscript",
  "vaulting",
  "heroic",
  "heroical",
  "steep",
  "overreaching",
  "enterprising",
  "bluff",
  "daredevil",
  "positive",
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

export default IconTextBoldSquare as IconComponentType;
