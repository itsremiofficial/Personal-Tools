import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconTextItalicSquare: FC<IconProps> = ({
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
            d="M8 17.0005H13.3333M10.6667 7.00049H16M10.6667 17.0005L13.3333 7.00049"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
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
            d="M2 12.0005C2 7.28644 2 4.92942 3.46447 3.46495C4.92893 2.00049 7.28595 2.00049 12 2.00049C16.714 2.00049 19.0711 2.00049 20.5355 3.46495C22 4.92942 22 7.28644 22 12.0005C22 16.7145 22 19.0716 20.5355 20.536C19.0711 22.0005 16.714 22.0005 12 22.0005C7.28595 22.0005 4.92893 22.0005 3.46447 20.536C2 19.0716 2 16.7145 2 12.0005Z"
            fill="currentColor"
          />
          <path
            d="M10.6667 6.25043H13.3162C13.3273 6.25018 13.3384 6.25018 13.3495 6.25043H16C16.4142 6.25043 16.75 6.58622 16.75 7.00043C16.75 7.41464 16.4142 7.75043 16 7.75043H13.9095L11.6429 16.2504H13.3333C13.7475 16.2504 14.0833 16.5862 14.0833 17.0004C14.0833 17.4146 13.7475 17.7504 13.3333 17.7504H10.6838C10.6727 17.7507 10.6616 17.7507 10.6505 17.7504H8C7.58579 17.7504 7.25 17.4146 7.25 17.0004C7.25 16.5862 7.58579 16.2504 8 16.2504H10.0905L12.3571 7.75043H10.6667C10.2525 7.75043 9.91667 7.41464 9.91667 7.00043C9.91667 6.58622 10.2525 6.25043 10.6667 6.25043Z"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.46447 3.46495C2 4.92942 2 7.28644 2 12.0005C2 16.7145 2 19.0716 3.46447 20.536C4.92893 22.0005 7.28595 22.0005 12 22.0005C16.714 22.0005 19.0711 22.0005 20.5355 20.536C22 19.0716 22 16.7145 22 12.0005C22 7.28644 22 4.92942 20.5355 3.46495C19.0711 2.00049 16.714 2.00049 12 2.00049C7.28595 2.00049 4.92893 2.00049 3.46447 3.46495ZM10.6667 6.25049H13.3162C13.3273 6.25024 13.3384 6.25024 13.3495 6.25049H16C16.4142 6.25049 16.75 6.58627 16.75 7.00049C16.75 7.4147 16.4142 7.75049 16 7.75049H13.9095L11.6429 16.2505H13.3333C13.7475 16.2505 14.0833 16.5863 14.0833 17.0005C14.0833 17.4147 13.7475 17.7505 13.3333 17.7505H10.6838C10.6727 17.7507 10.6616 17.7507 10.6505 17.7505H8C7.58579 17.7505 7.25 17.4147 7.25 17.0005C7.25 16.5863 7.58579 16.2505 8 16.2505H10.0905L12.3571 7.75049H10.6667C10.2525 7.75049 9.91667 7.4147 9.91667 7.00049C9.91667 6.58627 10.2525 6.25049 10.6667 6.25049Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconTextItalicSquare as IconComponentType).keywords = [
  "text",
  "italic",
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
  "italic language",
  "emphasis",
  "slanted",
  "italicized",
  "italicised",
  "serif",
  "italicize",
  "monospaced",
  "boldface",
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

export default IconTextItalicSquare as IconComponentType;
