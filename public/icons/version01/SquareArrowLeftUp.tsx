import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconSquareArrowLeftUp: FC<IconProps> = ({
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
            d="M15 15L9 9M9 9H13.5M9 9V13.5"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
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
            d="M3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447Z"
            fill="currentColor"
          />
          <path
            d="M8.42163 9.17188C8.42163 8.75766 8.75742 8.42188 9.17163 8.42188L13.4143 8.42188C13.8285 8.42187 14.1643 8.75766 14.1643 9.17188C14.1643 9.58609 13.8285 9.92187 13.4143 9.92188H10.9823L15.3588 14.2984C15.6517 14.5913 15.6517 15.0662 15.3588 15.3591C15.0659 15.652 14.591 15.652 14.2982 15.3591L9.92163 10.9825L9.92163 13.4145C9.92163 13.8287 9.58585 14.1645 9.17163 14.1645C8.75742 14.1645 8.42163 13.8287 8.42163 13.4145L8.42163 9.17188Z"
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
            d="M3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355ZM9.17157 8.42157C8.75736 8.42157 8.42157 8.75736 8.42157 9.17157L8.42157 13.4142C8.42157 13.8284 8.75736 14.1642 9.17157 14.1642C9.58579 14.1642 9.92157 13.8284 9.92157 13.4142L9.92157 10.9822L14.2981 15.3588C14.591 15.6517 15.0659 15.6517 15.3588 15.3588C15.6517 15.0659 15.6517 14.591 15.3588 14.2981L10.9822 9.92157H13.4142C13.8284 9.92157 14.1642 9.58579 14.1642 9.17157C14.1642 8.75736 13.8284 8.42157 13.4142 8.42157L9.17157 8.42157Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSquareArrowLeftUp as IconComponentType).keywords = [
  "square",
  "arrow",
  "left",
  "up",
  "quadrate",
  "right-angled",
  "squarely",
  "foursquare",
  "squarish",
  "conventional",
  "paid",
  "honorable",
  "honest",
  "pointer",
  "archer",
  "archery",
  "dart",
  "arrowhead",
  "bolt",
  "spike",
  "rope",
  "roof",
  "left-hand",
  "left-handed",
  "left over",
  "near",
  "leftover",
  "nigh",
  "remaining",
  "leftfield",
  "odd",
  "upbound",
  "upwardly",
  "ascending",
  "upward",
  "upwards",
  "rising",
  "astir",
  "ahead",
  "awake",
];

export default IconSquareArrowLeftUp as IconComponentType;
