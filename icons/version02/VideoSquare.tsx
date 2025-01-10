import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconVideoSquare: FC<IconProps> = ({
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
            opacity={duotone ? "0.4" : "1"}
            d="M9.76953 12V10.52C9.76953 8.61001 11.1195 7.84001 12.7695 8.79001L14.0495 9.53001L15.3295 10.27C16.9795 11.22 16.9795 12.78 15.3295 13.73L14.0495 14.47L12.7695 15.21C11.1195 16.16 9.76953 15.38 9.76953 13.48V12Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
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
            d="M9.76953 12V10.52C9.76953 8.61 11.1195 7.84 12.7695 8.79L14.0495 9.53L15.3295 10.27C16.9795 11.22 16.9795 12.78 15.3295 13.73L14.0495 14.47L12.7695 15.21C11.1195 16.16 9.76953 15.38 9.76953 13.48V12Z"
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
            d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2ZM15.3299 13.73L14.0499 14.47L12.7699 15.21C11.1199 16.16 9.76992 15.38 9.76992 13.48V12V10.52C9.76992 8.61 11.1199 7.84 12.7699 8.79L14.0499 9.53L15.3299 10.27C16.9799 11.22 16.9799 12.78 15.3299 13.73Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconVideoSquare as IconComponentType).keywords = [
  "video",
  "square",
  "tv",
  "television",
  "picture",
  "telecasting",
  "televised",
  "videotaping",
  "videotaped",
  "taping",
  "videotape",
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

export default IconVideoSquare as IconComponentType;
