import { FC } from "react";

const IconMinusSquare: FC<IconProps> = ({
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
            opacity={duotone ? "0.34" : "1"}
            d="M8.66992 12H16.6699"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.66992 22H15.6699C20.6699 22 22.6699 20 22.6699 15V9C22.6699 4 20.6699 2 15.6699 2H9.66992C4.66992 2 2.66992 4 2.66992 9V15C2.66992 20 4.66992 22 9.66992 22Z"
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
            d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2Z"
            fill="currentColor"
          />
          <path
            d="M16.6699 12.75H8.66992C8.25992 12.75 7.91992 12.41 7.91992 12C7.91992 11.59 8.25992 11.25 8.66992 11.25H16.6699C17.0799 11.25 17.4199 11.59 17.4199 12C17.4199 12.41 17.0799 12.75 16.6699 12.75Z"
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
            d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2ZM16.6699 12.75H8.66992C8.25992 12.75 7.91992 12.41 7.91992 12C7.91992 11.59 8.25992 11.25 8.66992 11.25H16.6699C17.0799 11.25 17.4199 11.59 17.4199 12C17.4199 12.41 17.0799 12.75 16.6699 12.75Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMinusSquare as IconComponent).keywords = [
  "minus",
  "square",
  "subtraction",
  "negative",
  "disadvantageous",
  "harmful",
  "sans",
  "min",
  "least",
  "unary",
  "nec",
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

export default IconMinusSquare as IconComponent;
