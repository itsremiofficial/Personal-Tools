import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconSquareTransferVertical: FC<IconProps> = ({
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
            d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M10 7L10 17L7 13.5625"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 17L14 7L17 10.4375"
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
            d="M3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355Z"
            fill="currentColor"
          />
          <path
            d="M13.25 7.00003C13.25 6.6874 13.4439 6.40756 13.7367 6.29779C14.0294 6.18801 14.3595 6.27134 14.5651 6.50688L17.5651 9.94438C17.8374 10.2565 17.8052 10.7302 17.4932 11.0026C17.1811 11.275 16.7073 11.2428 16.4349 10.9307L14.75 9.00003L14.75 17C14.75 17.4142 14.4142 17.75 14 17.75C13.5858 17.75 13.25 17.4142 13.25 17L13.25 7.00003Z"
            fill="currentColor"
          />
          <path
            d="M7.56508 13.0694C7.29272 12.7573 6.81894 12.7251 6.50686 12.9975C6.19478 13.2698 6.16258 13.7436 6.43494 14.0557L9.43494 17.4932C9.64051 17.7287 9.97063 17.8121 10.2634 17.7023C10.5561 17.5925 10.75 17.3127 10.75 17V7.00003C10.75 6.58582 10.4142 6.25003 10 6.25003C9.5858 6.25003 9.25001 6.58582 9.25001 7.00003V15L7.56508 13.0694Z"
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
            d="M3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355ZM7.56507 13.0693C7.29271 12.7573 6.81893 12.7251 6.50685 12.9974C6.19477 13.2698 6.16257 13.7436 6.43493 14.0557L9.43493 17.4932C9.6405 17.7287 9.97062 17.812 10.2633 17.7022C10.5561 17.5925 10.75 17.3126 10.75 17V7C10.75 6.58579 10.4142 6.25 10 6.25C9.58579 6.25 9.25 6.58579 9.25 7V15L7.56507 13.0693ZM13.7367 6.29775C13.4439 6.40753 13.25 6.68737 13.25 7L13.25 17C13.25 17.4142 13.5858 17.75 14 17.75C14.4142 17.75 14.75 17.4142 14.75 17L14.75 9L16.4349 10.9306C16.7073 11.2427 17.1811 11.2749 17.4931 11.0026C17.8052 10.7302 17.8374 10.2564 17.5651 9.94435L14.5651 6.50685C14.3595 6.2713 14.0294 6.18798 13.7367 6.29775Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSquareTransferVertical as IconComponentType).keywords = [
  "square",
  "transfer",
  "vertical",
  "quadrate",
  "right-angled",
  "squarely",
  "foursquare",
  "squarish",
  "conventional",
  "paid",
  "honorable",
  "honest",
  "transference",
  "transport",
  "transpose",
  "change",
  "transferral",
  "reassign",
  "remove",
  "transmit",
  "conveyance",
  "perpendicular",
  "plumb",
  "upright",
  "stand-up",
  "standing",
  "straight",
  "rearing",
  "erect",
  "erectile",
];

export default IconSquareTransferVertical as IconComponentType;
