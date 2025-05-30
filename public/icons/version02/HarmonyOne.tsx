import { FC } from "react";

const IconHarmonyOne: FC<IconProps> = ({
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
            d="M22.6699 5.74001C22.6699 7.44001 21.8299 9.04 20.3899 9.94C19.0899 10.76 17.2099 11.59 14.6699 11.88V5.74001C14.6699 3.68001 16.3499 2 18.4099 2H18.9299C20.9899 2 22.6699 3.68001 22.6699 5.74001Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.6699 8V18.26C22.6699 20.32 20.9899 22 18.9299 22H18.4099C16.3499 22 14.6699 20.32 14.6699 18.26V11.88C20.2499 11.23 22.6699 8 22.6699 8Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
          />
          <path
            d="M2.66992 18.26C2.66992 16.56 3.50995 14.96 4.94995 14.06C6.24995 13.24 8.12992 12.41 10.6699 12.12V18.26C10.6699 20.32 8.98993 22 6.92993 22H6.40991C4.34991 22 2.66992 20.32 2.66992 18.26Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2.66992 16V5.74001C2.66992 3.68001 4.34991 2 6.40991 2H6.92993C8.98993 2 10.6699 3.68001 10.6699 5.74001V12.12C5.08992 12.77 2.66992 16 2.66992 16Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
          />
          <path
            d="M10.6699 12.1C11.2999 12.04 11.9599 12 12.6699 12C13.3799 12 14.0399 11.96 14.6699 11.88"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
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
            opacity={duotone ? "0.58" : "1"}
            d="M24.6699 0H0.669922V24H24.6699V0Z"
            fill="none"
          />
          <path
            d="M22.6699 5.73999V18.26C22.6699 20.32 20.9899 22 18.9299 22H18.4099C16.3499 22 14.6699 20.32 14.6699 18.26V11.88C15.0199 11.84 15.3599 11.79 15.6799 11.72C17.7199 11.35 19.2699 10.65 20.3899 9.93999C21.8299 9.03999 22.6699 7.43999 22.6699 5.73999Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.6699 5.74C22.6699 7.44 21.8299 9.04 20.3899 9.94C19.2699 10.65 17.7199 11.35 15.6799 11.72C15.3599 11.79 15.0199 11.84 14.6699 11.88V12.63C13.4799 12.78 12.2099 12.7 10.7399 12.85L10.6699 12.86V18.26C10.6699 20.32 8.98993 22 6.92993 22H6.40991C4.34991 22 2.66992 20.32 2.66992 18.26C2.66992 18.17 2.66994 18.07 2.68994 17.98C2.76994 16.38 3.58995 14.91 4.94995 14.06C6.06995 13.35 7.6199 12.65 9.6499 12.28C9.9699 12.21 10.3199 12.16 10.6699 12.12V11.35C12.2299 11.21 13.4199 11.29 14.5799 11.14L14.6699 11.13V5.74C14.6699 3.68 16.3499 2 18.4099 2H18.9299C20.7599 2 22.2999 3.33 22.6099 5.08C22.6499 5.29 22.6699 5.51 22.6699 5.74Z"
            fill="currentColor"
          />
          <path
            d="M10.6699 5.74V12.12C10.3199 12.16 9.9699 12.21 9.6499 12.28C7.6199 12.65 6.06995 13.35 4.94995 14.06C3.58995 14.91 2.76994 16.38 2.68994 17.98C2.67994 17.99 2.66992 18 2.66992 18V5.74C2.66992 3.68 4.34991 2 6.40991 2H6.92993C8.98993 2 10.6699 3.68 10.6699 5.74Z"
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
            d="M22.6699 5.74001V18.26C22.6699 20.32 20.9899 22 18.9299 22H18.4099C16.3499 22 14.6699 20.32 14.6699 18.26V11.88C15.0199 11.84 15.3599 11.79 15.6799 11.72C17.7199 11.35 19.2699 10.65 20.3899 9.94C21.8299 9.04 22.6699 7.44001 22.6699 5.74001Z"
            fill="none"
          />
          <path
            d="M22.6699 5.74001C22.6699 7.44001 21.8299 9.04 20.3899 9.94C19.2699 10.65 17.7199 11.35 15.6799 11.72C15.3599 11.79 15.0199 11.84 14.6699 11.88V12.63C13.4799 12.78 12.2099 12.7 10.7399 12.85L10.6699 12.86V18.26C10.6699 20.32 8.98993 22 6.92993 22H6.40991C4.34991 22 2.66992 20.32 2.66992 18.26C2.66992 18.17 2.66994 18.07 2.68994 17.98C2.76994 16.38 3.58995 14.91 4.94995 14.06C6.06995 13.35 7.6199 12.65 9.6499 12.28C9.9699 12.21 10.3199 12.16 10.6699 12.12V11.35C12.2299 11.21 13.4199 11.29 14.5799 11.14L14.6699 11.13V5.74001C14.6699 3.68001 16.3499 2 18.4099 2H18.9299C20.7599 2 22.2999 3.33 22.6099 5.08C22.6499 5.29 22.6699 5.51001 22.6699 5.74001Z"
            fill="none"
          />
          <path
            d="M10.6699 5.74001V12.12C10.3199 12.16 9.9699 12.21 9.6499 12.28C7.6199 12.65 6.06995 13.35 4.94995 14.06C3.58995 14.91 2.76994 16.38 2.68994 17.98C2.67994 17.99 2.66992 18 2.66992 18V5.74001C2.66992 3.68001 4.34991 2 6.40991 2H6.92993C8.98993 2 10.6699 3.68001 10.6699 5.74001Z"
            fill="none"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconHarmonyOne as IconComponent).keywords = [
  "harmony",
  "one",
  "concord",
  "concordance",
  "harmoniousness",
  "musical harmony",
  "accordance",
  "accord",
  "congruity",
  "congruence",
  "consistency",
  "combined",
  "united",
  "same",
  "unity",
  "unitary",
  "cardinal",
  "one and only",
  "extraordinary",
];

export default IconHarmonyOne as IconComponent;
