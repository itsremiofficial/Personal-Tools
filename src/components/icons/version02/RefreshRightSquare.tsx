import { FC } from "react";

const IconRefreshRightSquare: FC<IconProps> = ({
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
              d="M14.3399 7.51001C13.8399 7.36001 13.2899 7.26001 12.6699 7.26001C9.90992 7.26001 7.66992 9.50001 7.66992 12.26C7.66992 15.02 9.90992 17.26 12.6699 17.26C15.4299 17.26 17.6699 15.02 17.6699 12.26C17.6699 11.23 17.3599 10.28 16.8299 9.48001"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.0501 7.64999L13.3901 5.73999"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.0499 7.65002L13.1099 9.07002"
              stroke="currentColor"
              strokeWidth={width}
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
            d="M16.8599 2H8.48993C4.83993 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.82 4.83992 21.99 8.47992 21.99H16.8499C20.4899 21.99 22.6599 19.82 22.6599 16.18V7.81C22.6699 4.17 20.4999 2 16.8599 2Z"
            fill="currentColor"
          />
          <path
            d="M17.4499 9.06999C17.2199 8.71999 16.7499 8.62999 16.4099 8.85999C16.0699 9.08999 15.9699 9.55999 16.1999 9.89999C16.6699 10.6 16.9099 11.42 16.9099 12.26C16.9099 14.6 14.9999 16.51 12.6599 16.51C10.3199 16.51 8.40993 14.6 8.40993 12.26C8.40993 9.91999 10.3199 8.00999 12.6599 8.00999C12.8499 8.00999 13.0299 8.02999 13.2199 8.04999L12.6699 8.45999C12.3399 8.69999 12.2599 9.16999 12.5099 9.50999C12.6599 9.70999 12.8899 9.81999 13.1199 9.81999C13.2699 9.81999 13.4299 9.76999 13.5599 9.67999L15.4999 8.25999C15.5099 8.24999 15.5099 8.23999 15.5199 8.23999C15.5299 8.22999 15.5399 8.22999 15.5499 8.21999C15.5799 8.18999 15.5999 8.15999 15.6199 8.12999C15.6499 8.08999 15.6899 8.05999 15.7099 8.00999C15.7299 7.96999 15.7399 7.91999 15.7599 7.87999C15.7699 7.82999 15.7899 7.78999 15.7999 7.73999C15.8099 7.68999 15.7999 7.64999 15.7899 7.59999C15.7899 7.54999 15.7899 7.50999 15.7699 7.45999C15.7599 7.40999 15.7299 7.36999 15.7099 7.31999C15.6899 7.28999 15.6899 7.24999 15.6599 7.20999C15.6499 7.19999 15.6399 7.19999 15.6399 7.18999C15.6299 7.17999 15.6299 7.16999 15.6199 7.15999L13.9499 5.24999C13.6799 4.93999 13.1999 4.89999 12.8899 5.17999C12.5799 5.44999 12.5499 5.92999 12.8199 6.23999L13.0999 6.55999C12.9599 6.54999 12.8199 6.52999 12.6699 6.52999C9.49992 6.52999 6.91992 9.10999 6.91992 12.28C6.91992 15.45 9.49992 18.03 12.6699 18.03C15.8399 18.03 18.4199 15.45 18.4199 12.28C18.4199 11.12 18.0899 10.02 17.4499 9.06999Z"
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
            d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2ZM12.6699 18.01C9.49992 18.01 6.91992 15.43 6.91992 12.26C6.91992 9.09 9.49992 6.51 12.6699 6.51C12.8099 6.51 12.9599 6.53 13.0999 6.54L12.8199 6.22C12.5499 5.91 12.5799 5.43 12.8899 5.16C13.1999 4.89 13.6799 4.92 13.9499 5.23L15.6199 7.14C15.6299 7.15 15.6299 7.16 15.6399 7.17C15.6499 7.18 15.6599 7.18 15.6599 7.19C15.6799 7.22 15.6899 7.26 15.7099 7.3C15.7299 7.35 15.7599 7.39 15.7699 7.44C15.7799 7.49 15.7799 7.53 15.7899 7.58C15.7899 7.63 15.7999 7.67 15.7999 7.72C15.7999 7.77 15.7799 7.81 15.7599 7.86C15.7399 7.91 15.7299 7.96 15.7099 8C15.6899 8.04 15.6499 8.08 15.6199 8.12C15.5899 8.15 15.5799 8.19 15.5499 8.21C15.5399 8.22 15.5299 8.22 15.5199 8.23C15.5099 8.24 15.5099 8.25 15.4999 8.25L13.5599 9.67C13.4299 9.77 13.2699 9.81 13.1199 9.81C12.8899 9.81 12.6599 9.7 12.5099 9.5C12.2699 9.17 12.3399 8.7 12.6699 8.45L13.2299 8.04C13.0399 8.03 12.8599 8.01 12.6699 8.01C10.3299 8.01 8.41992 9.92 8.41992 12.26C8.41992 14.6 10.3299 16.51 12.6699 16.51C15.0099 16.51 16.9199 14.6 16.9199 12.26C16.9199 11.41 16.6699 10.6 16.2099 9.9C15.9799 9.56 16.0699 9.09 16.4199 8.86C16.7599 8.63 17.2299 8.72 17.4599 9.07C18.0899 10.02 18.4299 11.12 18.4299 12.26C18.4199 15.44 15.8399 18.01 12.6699 18.01Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconRefreshRightSquare as IconComponent).keywords = [
  "refresh",
  "right",
  "square",
  "refreshen",
  "freshen",
  "review",
  "freshen up",
  "brush up",
  "refresher",
  "refreshment",
  "rejuvenate",
  "revive",
  "straight",
  "precise",
  "right on",
  "accurate",
  "decently",
  "satisfactory",
  "exact",
  "powerful",
  "opportune",
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

export default IconRefreshRightSquare as IconComponent;