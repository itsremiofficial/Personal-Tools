import { FC } from "react";

const IconElement1: FC<IconProps> = ({
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
            d="M11.1699 19.9V4.1C11.1699 2.6 10.5299 2 8.93992 2H4.89992C3.30992 2 2.66992 2.6 2.66992 4.1V19.9C2.66992 21.4 3.30992 22 4.89992 22H8.93992C10.5299 22 11.1699 21.4 11.1699 19.9Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.6699 10.9V4.1C22.6699 2.6 22.0299 2 20.4399 2H16.3999C14.8099 2 14.1699 2.6 14.1699 4.1V10.9C14.1699 12.4 14.8099 13 16.3999 13H20.4399C22.0299 13 22.6699 12.4 22.6699 10.9Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.6699 19.9V18.1C22.6699 16.6 22.0299 16 20.4399 16H16.3999C14.8099 16 14.1699 16.6 14.1699 18.1V19.9C14.1699 21.4 14.8099 22 16.3999 22H20.4399C22.0299 22 22.6699 21.4 22.6699 19.9Z"
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
            d="M11.6699 19.9V4.1C11.6699 2.6 11.0299 2 9.43992 2H5.39992C3.80992 2 3.16992 2.6 3.16992 4.1V19.9C3.16992 21.4 3.80992 22 5.39992 22H9.43992C11.0299 22 11.6699 21.4 11.6699 19.9Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.1699 10.9V4.1C22.1699 2.6 21.5299 2 19.9399 2H15.8999C14.3099 2 13.6699 2.6 13.6699 4.1V10.9C13.6699 12.4 14.3099 13 15.8999 13H19.9399C21.5299 13 22.1699 12.4 22.1699 10.9Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.1699 19.9V17.1C22.1699 15.6 21.5299 15 19.9399 15H15.8999C14.3099 15 13.6699 15.6 13.6699 17.1V19.9C13.6699 21.4 14.3099 22 15.8999 22H19.9399C21.5299 22 22.1699 21.4 22.1699 19.9Z"
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
            d="M11.6699 19.9V4.1C11.6699 2.6 11.0299 2 9.43992 2H5.39992C3.80992 2 3.16992 2.6 3.16992 4.1V19.9C3.16992 21.4 3.80992 22 5.39992 22H9.43992C11.0299 22 11.6699 21.4 11.6699 19.9Z"
            fill="currentColor"
          />
          <path
            d="M22.1699 10.9V4.1C22.1699 2.6 21.5299 2 19.9399 2H15.8999C14.3099 2 13.6699 2.6 13.6699 4.1V10.9C13.6699 12.4 14.3099 13 15.8999 13H19.9399C21.5299 13 22.1699 12.4 22.1699 10.9Z"
            fill="currentColor"
          />
          <path
            d="M22.1699 19.9V17.1C22.1699 15.6 21.5299 15 19.9399 15H15.8999C14.3099 15 13.6699 15.6 13.6699 17.1V19.9C13.6699 21.4 14.3099 22 15.8999 22H19.9399C21.5299 22 22.1699 21.4 22.1699 19.9Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconElement1 as IconComponent).keywords = [
  "element",
  "1",
  "chemical element",
  "ingredient",
  "component",
  "constituent",
  "factor",
  "elemental",
  "stone",
  "facet",
  "nutrient",
  "wash out",
  "cut up",
  "pull out",
  "pull in",
  "pull up",
  "pull over",
  "work out",
  "ride down",
  "rush hour",
];

export default IconElement1 as IconComponent;
