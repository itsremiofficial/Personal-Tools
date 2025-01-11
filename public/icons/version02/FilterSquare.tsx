import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconFilterSquare: FC<IconProps> = ({
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
            opacity={duotone ? "0.4" : "1"}
            d="M8.82992 6.64999H16.4999C17.1399 6.64999 17.6599 7.16999 17.6599 7.80999V9.08999C17.6599 9.55999 17.3699 10.14 17.0799 10.43L14.5799 12.64C14.2299 12.93 13.9999 13.51 13.9999 13.98V16.48C13.9999 16.83 13.7699 17.29 13.4799 17.47L12.6699 17.98C11.9099 18.45 10.8699 17.92 10.8699 16.99V13.91C10.8699 13.5 10.6399 12.98 10.3999 12.69L8.18992 10.36C7.89992 10.08 7.66992 9.54999 7.66992 9.19999V7.86999C7.66992 7.16999 8.18992 6.64999 8.82992 6.64999Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
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
            d="M22.6699 7.81V16.19C22.6699 19.83 20.4999 22 16.8599 22H8.47992C8.27992 22 8.07992 21.99 7.88992 21.98C6.65992 21.9 5.61992 21.55 4.79992 20.95C4.37992 20.66 4.00992 20.29 3.71992 19.87C3.02992 18.92 2.66992 17.68 2.66992 16.19V7.81C2.66992 4.37 4.60992 2.24 7.88992 2.03C8.07992 2.01 8.27992 2 8.47992 2H16.8599C18.3499 2 19.5899 2.36 20.5399 3.05C20.9599 3.34 21.3299 3.71 21.6199 4.13C22.3099 5.08 22.6699 6.32 22.6699 7.81Z"
            fill="currentColor"
          />
          <path
            d="M8.82992 6.64999H16.4999C17.1399 6.64999 17.6599 7.16999 17.6599 7.80999V9.08999C17.6599 9.55999 17.3699 10.14 17.0799 10.43L14.5799 12.64C14.2299 12.93 13.9999 13.51 13.9999 13.98V16.48C13.9999 16.83 13.7699 17.29 13.4799 17.47L12.6699 17.98C11.9099 18.45 10.8699 17.92 10.8699 16.99V13.91C10.8699 13.5 10.6399 12.98 10.3999 12.69L8.18992 10.36C7.89992 10.08 7.66992 9.54999 7.66992 9.19999V7.86999C7.66992 7.16999 8.18992 6.64999 8.82992 6.64999Z"
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
            d="M21.6199 4.13C21.3299 3.71 20.9599 3.34 20.5399 3.05C19.5899 2.36 18.3499 2 16.8599 2H8.47992C8.27992 2 8.07992 2.01 7.88992 2.03C4.60992 2.24 2.66992 4.37 2.66992 7.81V16.19C2.66992 17.68 3.02992 18.92 3.71992 19.87C4.00992 20.29 4.37992 20.66 4.79992 20.95C5.61992 21.55 6.65992 21.9 7.88992 21.98C8.07992 21.99 8.27992 22 8.47992 22H16.8599C20.4999 22 22.6699 19.83 22.6699 16.19V7.81C22.6699 6.32 22.3099 5.08 21.6199 4.13ZM9.12992 10.68L8.63992 10.17C8.37992 9.91 8.16992 9.44 8.16992 9.12V7.92C8.16992 7.29 8.63992 6.82 9.21992 6.82H11.3599C11.7699 6.82 12.0199 7.27 11.7999 7.62L9.94992 10.6C9.76992 10.89 9.35992 10.93 9.12992 10.68ZM17.1699 9.02C17.1699 9.44 16.9099 9.96 16.6499 10.22L14.3999 12.21C14.0899 12.47 13.8799 12.99 13.8799 13.41V15.66C13.8799 15.97 13.6699 16.39 13.4099 16.55L12.6699 17.02C11.9899 17.44 11.0499 16.97 11.0499 16.13V13.36C11.0499 12.99 10.8399 12.52 10.6299 12.26L10.3899 12C10.2299 11.83 10.1999 11.57 10.3199 11.36L12.9999 7.06C13.0999 6.91 13.2599 6.81 13.4399 6.81H16.1199C16.6999 6.81 17.1699 7.28 17.1699 7.86V9.02Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconFilterSquare as IconComponentType).keywords = [
  "filter",
  "square",
  "filtrate",
  "filter out",
  "percolate",
  "permeate",
  "trickle",
  "sink in",
  "strain",
  "dribble",
  "separate out",
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

export default IconFilterSquare as IconComponentType;