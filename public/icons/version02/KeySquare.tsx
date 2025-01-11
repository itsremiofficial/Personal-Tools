import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconKeySquare: FC<IconProps> = ({
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
              d="M16.9491 13.6096C15.8191 14.7396 14.1991 15.0896 12.7691 14.6396L10.1791 17.2196C9.99914 17.4096 9.62914 17.5296 9.35914 17.4896L8.15914 17.3296C7.75914 17.2796 7.39914 16.8996 7.33914 16.5096L7.17914 15.3096C7.13914 15.0496 7.26914 14.6796 7.44914 14.4896L10.0291 11.9096C9.58914 10.4796 9.92914 8.85965 11.0591 7.72965C12.6791 6.10965 15.3191 6.10965 16.9491 7.72965C18.5691 9.33965 18.5691 11.9796 16.9491 13.6096Z"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.1195 16.2799L10.2695 15.4199"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.0648 10.7002H14.0738"
              stroke="currentColor"
              strokeWidth="2"
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
            d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2Z"
            fill="currentColor"
          />
          <path
            d="M16.5601 8.10982C15.0801 6.63982 12.6801 6.63982 11.2101 8.10982C10.1801 9.12982 9.87012 10.6098 10.2701 11.9098L7.92012 14.2598C7.76012 14.4298 7.64012 14.7598 7.68012 14.9998L7.83012 16.0898C7.88012 16.4498 8.22012 16.7898 8.58012 16.8398L9.67012 16.9998C9.91012 17.0298 10.2401 16.9298 10.4101 16.7498L10.8201 16.3398C10.9201 16.2498 10.9201 16.0898 10.8201 15.9898L9.85012 15.0198C9.71012 14.8798 9.71012 14.6398 9.85012 14.4898C9.99012 14.3498 10.2301 14.3498 10.3801 14.4898L11.3501 15.4598C11.4401 15.5498 11.6001 15.5498 11.7001 15.4598L12.7601 14.4098C14.0501 14.8098 15.5301 14.4998 16.5601 13.4798C18.0401 11.9898 18.0401 9.58982 16.5601 8.10982ZM13.9201 11.9998C13.2301 11.9998 12.6701 11.4398 12.6701 10.7498C12.6701 10.0598 13.2301 9.49982 13.9201 9.49982C14.6101 9.49982 15.1701 10.0598 15.1701 10.7498C15.1701 11.4398 14.6101 11.9998 13.9201 11.9998Z"
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
            d="M13.9199 12C14.6103 12 15.1699 11.4404 15.1699 10.75C15.1699 10.0596 14.6103 9.5 13.9199 9.5C13.2296 9.5 12.6699 10.0596 12.6699 10.75C12.6699 11.4404 13.2296 12 13.9199 12Z"
            fill="currentColor"
          />
          <path
            d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2ZM16.5599 13.47C15.5299 14.49 14.0599 14.81 12.7599 14.4L11.6999 15.45C11.6099 15.54 11.4499 15.54 11.3499 15.45L10.3799 14.48C10.2399 14.34 9.99992 14.34 9.84992 14.48C9.69992 14.62 9.70992 14.86 9.84992 15.01L10.8199 15.98C10.9199 16.08 10.9199 16.24 10.8199 16.33L10.4099 16.74C10.2399 16.92 9.90992 17.03 9.66992 17L8.57992 16.85C8.21992 16.8 7.88992 16.46 7.82992 16.1L7.67992 15.01C7.63992 14.77 7.75992 14.44 7.91992 14.27L10.2699 11.92C9.86992 10.62 10.1799 9.15 11.2099 8.12C12.6799 6.65 15.0799 6.65 16.5599 8.12C18.0399 9.59 18.0399 11.99 16.5599 13.47Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconKeySquare as IconComponentType).keywords = [
  "key",
  "square",
  "winder",
  "kilo",
  "kilogram",
  "central",
  "kg",
  "discover",
  "operative",
  "describe",
  "identify",
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

export default IconKeySquare as IconComponentType;