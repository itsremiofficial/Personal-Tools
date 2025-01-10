import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconArrangeSquare: FC<IconProps> = ({
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
              d="M17.8198 13.8201L14.7798 16.8601"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.52002 13.8201H17.82"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.52002 10.18L10.56 7.14001"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.82 10.1799H7.52002"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
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
            d="M18.52 13.5299C18.44 13.3499 18.3 13.1999 18.11 13.1199C18.02 13.0799 17.92 13.0599 17.82 13.0599H7.52002C7.11002 13.0599 6.77002 13.3999 6.77002 13.8099C6.77002 14.2199 7.11002 14.5599 7.52002 14.5599H16.02L14.26 16.3199C13.97 16.6099 13.97 17.0899 14.26 17.3799C14.41 17.5299 14.6 17.5999 14.79 17.5999C14.98 17.5999 15.17 17.5299 15.32 17.3799L18.36 14.3399C18.43 14.2699 18.48 14.1899 18.52 14.0999C18.59 13.9199 18.59 13.7099 18.52 13.5299Z"
            fill="currentColor"
          />
          <path
            d="M6.82008 10.47C6.90008 10.65 7.04008 10.8 7.23008 10.88C7.32008 10.92 7.42008 10.94 7.52008 10.94H17.8301C18.2401 10.94 18.5801 10.6 18.5801 10.19C18.5801 9.77997 18.2401 9.43997 17.8301 9.43997H9.33008L11.0901 7.67997C11.3801 7.38997 11.3801 6.90997 11.0901 6.61997C10.8001 6.32997 10.3201 6.32997 10.0301 6.61997L6.99008 9.64997C6.92008 9.71997 6.86008 9.80997 6.82008 9.89997C6.75008 10.08 6.75008 10.29 6.82008 10.47Z"
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
            d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2ZM18.5199 14.1C18.4799 14.19 18.4299 14.27 18.3599 14.34L15.3199 17.38C15.1699 17.53 14.9799 17.6 14.7899 17.6C14.5999 17.6 14.4099 17.53 14.2599 17.38C13.9699 17.09 13.9699 16.61 14.2599 16.32L16.0199 14.56H7.51992C7.10992 14.56 6.76992 14.22 6.76992 13.81C6.76992 13.4 7.10992 13.06 7.51992 13.06H17.8299C17.9299 13.06 18.0199 13.08 18.1199 13.12C18.2999 13.2 18.4499 13.34 18.5299 13.53C18.5899 13.71 18.5899 13.92 18.5199 14.1ZM17.8199 10.93H7.51992C7.41992 10.93 7.32992 10.91 7.22992 10.87C7.04992 10.79 6.89992 10.65 6.81992 10.46C6.73992 10.28 6.73992 10.07 6.81992 9.89C6.85992 9.8 6.90992 9.72 6.97992 9.65L10.0199 6.61C10.3099 6.32 10.7899 6.32 11.0799 6.61C11.3699 6.9 11.3699 7.38 11.0799 7.67L9.32992 9.43H17.8299C18.2399 9.43 18.5799 9.77 18.5799 10.18C18.5799 10.59 18.2399 10.93 17.8199 10.93Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconArrangeSquare as IconComponentType).keywords = [
  "arrange",
  "square",
  "order",
  "put",
  "set up",
  "fix up",
  "stage",
  "bring about",
  "format",
  "do",
  "set",
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

export default IconArrangeSquare as IconComponentType;
