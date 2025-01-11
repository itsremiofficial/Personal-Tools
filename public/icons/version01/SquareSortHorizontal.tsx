import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconSquareSortHorizontal: FC<IconProps> = ({
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
            d="M16 9.5L8 9.5M8 9.5L10.75 7M8 9.5L10.75 12"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 14.5L16 14.5M16 14.5L13.25 12M16 14.5L13.25 17"
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
            d="M20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355Z"
            fill="currentColor"
          />
          <path
            d="M11.2545 11.445C11.561 11.7237 11.5836 12.198 11.305 12.5045C11.0263 12.811 10.552 12.8336 10.2455 12.555L7.4955 10.055C7.33914 9.91282 7.25 9.71131 7.25 9.50001C7.25 9.2887 7.33914 9.08719 7.4955 8.94505L10.2455 6.44505C10.552 6.16642 11.0263 6.18901 11.305 6.4955C11.5836 6.80199 11.561 7.27633 11.2545 7.55496L9.93996 8.75L16 8.75C16.4142 8.75 16.75 9.08579 16.75 9.5C16.75 9.91422 16.4142 10.25 16 10.25L9.93996 10.25L11.2545 11.445Z"
            fill="currentColor"
          />
          <path
            d="M12.7455 16.4451C12.439 16.7237 12.4164 17.198 12.695 17.5045C12.9737 17.811 13.448 17.8336 13.7545 17.555L16.5045 15.055C16.6609 14.9128 16.75 14.7113 16.75 14.5C16.75 14.2887 16.6609 14.0872 16.5045 13.945L13.7545 11.4451C13.448 11.1664 12.9737 11.189 12.695 11.4955C12.4164 11.802 12.439 12.2763 12.7455 12.555L14.06 13.75H8C7.58579 13.75 7.25 14.0858 7.25 14.5C7.25 14.9142 7.58579 15.25 8 15.25L14.06 15.25L12.7455 16.4451Z"
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
            d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12ZM12.7455 12.555C12.439 12.2763 12.4164 11.802 12.695 11.4955C12.9737 11.189 13.448 11.1664 13.7545 11.445L16.5045 13.945C16.6609 14.0872 16.75 14.2887 16.75 14.5C16.75 14.7113 16.6609 14.9128 16.5045 15.055L13.7545 17.555C13.448 17.8336 12.9737 17.811 12.695 17.5045C12.4164 17.198 12.439 16.7237 12.7455 16.445L14.06 15.25H8C7.58579 15.25 7.25 14.9142 7.25 14.5C7.25 14.0858 7.58579 13.75 8 13.75H14.06L12.7455 12.555ZM11.305 6.49549C11.5836 6.80199 11.561 7.27632 11.2545 7.55495L9.93996 8.75H16C16.4142 8.75 16.75 9.08579 16.75 9.5C16.75 9.91421 16.4142 10.25 16 10.25H9.93996L11.2545 11.445C11.561 11.7237 11.5836 12.198 11.305 12.5045C11.0263 12.811 10.552 12.8336 10.2455 12.555L7.4955 10.055C7.33914 9.91281 7.25 9.71131 7.25 9.5C7.25 9.28869 7.33914 9.08719 7.4955 8.94504L10.2455 6.44504C10.552 6.16641 11.0263 6.189 11.305 6.49549Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSquareSortHorizontal as IconComponentType).keywords = [
  "square",
  "sort",
  "horizontal",
  "quadrate",
  "right-angled",
  "squarely",
  "foursquare",
  "squarish",
  "conventional",
  "paid",
  "honorable",
  "honest",
  "classify",
  "assort",
  "class",
  "form",
  "kind",
  "sort out",
  "variety",
  "separate",
  "screen",
  "level",
  "flat",
  "crosswise",
  "swimming",
  "naiant",
  "cross-sectional",
  "transverse",
  "transversal",
  "landscape",
];

export default IconSquareSortHorizontal as IconComponentType;