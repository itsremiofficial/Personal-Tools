import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconCategory: FC<IconProps> = ({
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
            d="M5.66992 10H7.66992C9.66992 10 10.6699 9 10.6699 7V5C10.6699 3 9.66992 2 7.66992 2H5.66992C3.66992 2 2.66992 3 2.66992 5V7C2.66992 9 3.66992 10 5.66992 10Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.6699 10H19.6699C21.6699 10 22.6699 9 22.6699 7V5C22.6699 3 21.6699 2 19.6699 2H17.6699C15.6699 2 14.6699 3 14.6699 5V7C14.6699 9 15.6699 10 17.6699 10Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.34" : "1"}
            d="M17.6699 22H19.6699C21.6699 22 22.6699 21 22.6699 19V17C22.6699 15 21.6699 14 19.6699 14H17.6699C15.6699 14 14.6699 15 14.6699 17V19C14.6699 21 15.6699 22 17.6699 22Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.66992 22H7.66992C9.66992 22 10.6699 21 10.6699 19V17C10.6699 15 9.66992 14 7.66992 14H5.66992C3.66992 14 2.66992 15 2.66992 17V19C2.66992 21 3.66992 22 5.66992 22Z"
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
            d="M7.90992 2H6.00992C3.81992 2 2.66992 3.15 2.66992 5.33V7.23C2.66992 9.41 3.81992 10.56 5.99992 10.56H7.89992C10.0799 10.56 11.2299 9.41 11.2299 7.23V5.33C11.2399 3.15 10.0899 2 7.90992 2Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19.3399 2H17.4399C15.2599 2 14.1099 3.15 14.1099 5.33V7.23C14.1099 9.41 15.2599 10.56 17.4399 10.56H19.3399C21.5199 10.56 22.6699 9.41 22.6699 7.23V5.33C22.6699 3.15 21.5199 2 19.3399 2Z"
            fill="currentColor"
          />
          <path
            d="M19.3399 13.4302H17.4399C15.2599 13.4302 14.1099 14.5802 14.1099 16.7602V18.6602C14.1099 20.8402 15.2599 21.9902 17.4399 21.9902H19.3399C21.5199 21.9902 22.6699 20.8402 22.6699 18.6602V16.7602C22.6699 14.5802 21.5199 13.4302 19.3399 13.4302Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.90992 13.4302H6.00992C3.81992 13.4302 2.66992 14.5802 2.66992 16.7602V18.6602C2.66992 20.8502 3.81992 22.0002 5.99992 22.0002H7.89992C10.0799 22.0002 11.2299 20.8502 11.2299 18.6702V16.7702C11.2399 14.5802 10.0899 13.4302 7.90992 13.4302Z"
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
            d="M7.90992 2H6.00992C3.81992 2 2.66992 3.15 2.66992 5.33V7.23C2.66992 9.41 3.81992 10.56 5.99992 10.56H7.89992C10.0799 10.56 11.2299 9.41 11.2299 7.23V5.33C11.2399 3.15 10.0899 2 7.90992 2Z"
            fill="currentColor"
          />
          <path
            d="M19.3399 2H17.4399C15.2599 2 14.1099 3.15 14.1099 5.33V7.23C14.1099 9.41 15.2599 10.56 17.4399 10.56H19.3399C21.5199 10.56 22.6699 9.41 22.6699 7.23V5.33C22.6699 3.15 21.5199 2 19.3399 2Z"
            fill="currentColor"
          />
          <path
            d="M19.3399 13.4302H17.4399C15.2599 13.4302 14.1099 14.5802 14.1099 16.7602V18.6602C14.1099 20.8402 15.2599 21.9902 17.4399 21.9902H19.3399C21.5199 21.9902 22.6699 20.8402 22.6699 18.6602V16.7602C22.6699 14.5802 21.5199 13.4302 19.3399 13.4302Z"
            fill="currentColor"
          />
          <path
            d="M7.90992 13.4302H6.00992C3.81992 13.4302 2.66992 14.5802 2.66992 16.7602V18.6602C2.66992 20.8502 3.81992 22.0002 5.99992 22.0002H7.89992C10.0799 22.0002 11.2299 20.8502 11.2299 18.6702V16.7702C11.2399 14.5802 10.0899 13.4302 7.90992 13.4302Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCategory as IconComponentType).keywords = [
  "category",
  "class",
  "family",
  "classification",
  "categorization",
  "subcategory",
  "categorized",
  "type",
  "classified",
  "kind",
];

export default IconCategory as IconComponentType;
