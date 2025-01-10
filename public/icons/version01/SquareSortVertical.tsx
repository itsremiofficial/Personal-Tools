import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconSquareSortVertical: FC<IconProps> = ({
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
            d="M9.5 8L9.5 16M9.5 16L7 13.25M9.5 16L12 13.25"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.5 16L14.5 8M14.5 8L12 10.75M14.5 8L17 10.75"
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
            d="M12.555 11.2545C12.2763 11.561 11.802 11.5836 11.4955 11.305C11.189 11.0263 11.1664 10.552 11.4451 10.2455L13.9451 7.4955C14.0872 7.33914 14.2887 7.25 14.5 7.25C14.7113 7.25 14.9128 7.33914 15.055 7.4955L17.555 10.2455C17.8336 10.552 17.811 11.0263 17.5045 11.305C17.198 11.5836 16.7237 11.561 16.4451 11.2545L15.25 9.93996L15.25 16C15.25 16.4142 14.9142 16.75 14.5 16.75C14.0858 16.75 13.75 16.4142 13.75 16L13.75 9.93996L12.555 11.2545Z"
            fill="currentColor"
          />
          <path
            d="M7.55496 12.7455C7.27633 12.439 6.80199 12.4164 6.4955 12.695C6.18901 12.9737 6.16642 13.448 6.44505 13.7545L8.94505 16.5045C9.08719 16.6609 9.2887 16.75 9.50001 16.75C9.71131 16.75 9.91282 16.6609 10.055 16.5045L12.555 13.7545C12.8336 13.448 12.811 12.9737 12.5045 12.695C12.198 12.4164 11.7237 12.439 11.4451 12.7455L10.25 14.06V8C10.25 7.58579 9.91422 7.25 9.5 7.25C9.08579 7.25 8.75001 7.58579 8.75001 8V14.06L7.55496 12.7455Z"
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
            d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12ZM7.55495 12.7455C7.27632 12.439 6.80199 12.4164 6.49549 12.695C6.189 12.9737 6.16641 13.448 6.44504 13.7545L8.94504 16.5045C9.08719 16.6609 9.28869 16.75 9.5 16.75C9.71131 16.75 9.91281 16.6609 10.055 16.5045L12.555 13.7545C12.8336 13.448 12.811 12.9737 12.5045 12.695C12.198 12.4164 11.7237 12.439 11.445 12.7455L10.25 14.06V8C10.25 7.58579 9.91421 7.25 9.5 7.25C9.08579 7.25 8.75 7.58579 8.75 8V14.06L7.55495 12.7455ZM11.4955 11.305C11.802 11.5836 12.2763 11.561 12.555 11.2545L13.75 9.93995L13.75 16C13.75 16.4142 14.0858 16.75 14.5 16.75C14.9142 16.75 15.25 16.4142 15.25 16L15.25 9.93995L16.445 11.2545C16.7237 11.561 17.198 11.5836 17.5045 11.305C17.811 11.0263 17.8336 10.552 17.555 10.2455L15.055 7.49549C14.9128 7.33914 14.7113 7.25 14.5 7.25C14.2887 7.25 14.0872 7.33914 13.945 7.49549L11.445 10.2455C11.1664 10.552 11.189 11.0263 11.4955 11.305Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSquareSortVertical as IconComponentType).keywords = [
  "square",
  "sort",
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
  "classify",
  "assort",
  "class",
  "form",
  "kind",
  "sort out",
  "variety",
  "separate",
  "screen",
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

export default IconSquareSortVertical as IconComponentType;
