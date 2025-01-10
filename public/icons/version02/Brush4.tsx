import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconBrush4: FC<IconProps> = ({
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
          <g clipPath="url(#clip0_12_78657)">
            <path
              d="M10.1699 19.5V18H5.16992C4.61992 18 4.11992 17.78 3.75992 17.41C3.38992 17.05 3.16992 16.55 3.16992 16C3.16992 14.97 3.96992 14.11 4.97992 14.01C5.03992 14 5.09992 14 5.16992 14H20.1699C20.2399 14 20.2999 14 20.3599 14.01C20.8399 14.05 21.2599 14.26 21.5799 14.59C21.9899 14.99 22.2099 15.56 22.1599 16.18C22.0699 17.23 21.1199 18 20.0599 18H15.1699V19.5C15.1699 20.88 14.0499 22 12.6699 22C11.2899 22 10.1699 20.88 10.1699 19.5Z"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M20.8401 5.3L20.3601 14.01C20.3001 14 20.2401 14 20.1701 14H5.17008C5.10008 14 5.04008 14 4.98008 14.01L4.50008 5.3C4.32008 3.53 5.71008 2 7.48008 2H17.8601C19.6301 2 21.0201 3.53 20.8401 5.3Z"
                stroke="currentColor"
                strokeWidth={width}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.66016 2V7"
                stroke="currentColor"
                strokeWidth={width}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.6699 2V4"
                stroke="currentColor"
                strokeWidth={width}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </g>
          <defs>
            <clipPath>
              <rect
                width="24"
                height="24"
                fill="none"
                transform="translate(0.669922)"
              />
            </clipPath>
          </defs>
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
            d="M10.1699 19.5V18H5.16992C4.61992 18 4.11992 17.78 3.75992 17.41C3.38992 17.05 3.16992 16.55 3.16992 16C3.16992 14.97 3.96992 14.11 4.97992 14.01C5.03992 14 5.09992 14 5.16992 14H20.1699C20.2399 14 20.2999 14 20.3599 14.01C20.8399 14.05 21.2599 14.26 21.5799 14.59C21.9899 14.99 22.2099 15.56 22.1599 16.18C22.0699 17.23 21.1199 18 20.0599 18H15.1699V19.5C15.1699 20.88 14.0499 22 12.6699 22C11.2899 22 10.1699 20.88 10.1699 19.5Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20.8401 5.3L20.3601 14.01C20.3001 14 20.2401 14 20.1701 14H5.17008C5.10008 14 5.04008 14 4.98008 14.01L4.50008 5.3C4.32008 3.53 5.71008 2 7.48008 2H17.8601C19.6301 2 21.0201 3.53 20.8401 5.3Z"
            fill="currentColor"
          />
          <path
            d="M9.41016 2V7C9.41016 7.41 9.07016 7.75 8.66016 7.75C8.25016 7.75 7.91016 7.41 7.91016 7V2H9.41016Z"
            fill="currentColor"
          />
          <path
            d="M13.4199 2V4C13.4199 4.41 13.0799 4.75 12.6699 4.75C12.2599 4.75 11.9199 4.41 11.9199 4V2H13.4199Z"
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
            d="M10.1699 19.5V18H5.16992C4.61992 18 4.11992 17.78 3.75992 17.41C3.38992 17.05 3.16992 16.55 3.16992 16C3.16992 14.97 3.96992 14.11 4.97992 14.01C5.03992 14 5.09992 14 5.16992 14H20.1699C20.2399 14 20.2999 14 20.3599 14.01C20.8399 14.05 21.2599 14.26 21.5799 14.59C21.9899 14.99 22.2099 15.56 22.1599 16.18C22.0699 17.23 21.1199 18 20.0599 18H15.1699V19.5C15.1699 20.88 14.0499 22 12.6699 22C11.2899 22 10.1699 20.88 10.1699 19.5Z"
            fill="currentColor"
          />
          <path
            d="M17.8595 2H13.9195C13.6395 2 13.4195 2.22 13.4195 2.5V4C13.4195 4.41 13.0795 4.75 12.6695 4.75C12.5795 4.75 12.4995 4.73 12.4195 4.7C12.1295 4.6 11.9195 4.32 11.9195 4V2.5C11.9195 2.22 11.6995 2 11.4195 2H9.90952C9.62952 2 9.40952 2.22 9.40952 2.5V7C9.40952 7.41 9.06952 7.75 8.65952 7.75C8.24952 7.75 7.90952 7.41 7.90952 7V4.75V2.5C7.90952 2.23 7.70952 2.02 7.43952 2H7.40952C5.66952 2.04 4.31952 3.55 4.49952 5.3L4.86952 12.05C4.89952 12.58 5.33952 13 5.86952 13H19.4695C19.9995 13 20.4395 12.58 20.4695 12.05L20.8395 5.3C21.0195 3.53 19.6295 2 17.8595 2Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBrush4 as IconComponentType).keywords = [
  "brush",
  "4",
  "sweep",
  "copse",
  "thicket",
  "coppice",
  "brushwood",
  "clash",
  "skirmish",
  "kiss",
  "encounter",
  "dh",
  "f4f",
];

export default IconBrush4 as IconComponentType;
