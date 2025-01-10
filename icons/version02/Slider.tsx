import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconSlider: FC<IconProps> = ({
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
            d="M15.6699 22H9.66992C7.16992 22 5.66992 20.2 5.66992 18V6C5.66992 3.8 7.16992 2 9.66992 2H15.6699C18.1699 2 19.6699 3.8 19.6699 6V18C19.6699 20.2 18.1699 22 15.6699 22Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M5.66992 16.01H19.6699"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2.66992 4V20"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.6699 4V20"
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
            d="M19.6699 16.01V18C19.6699 20.2 18.1699 22 15.6699 22H9.66992C7.16992 22 5.66992 20.2 5.66992 18V16.01H19.6699Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19.6699 6V16.01H5.66992V6C5.66992 3.8 7.16992 2 9.66992 2H15.6699C18.1699 2 19.6699 3.8 19.6699 6Z"
            fill="currentColor"
          />
          <path
            d="M3.66992 20.75C3.25992 20.75 2.91992 20.41 2.91992 20V4C2.91992 3.59 3.25992 3.25 3.66992 3.25C4.07992 3.25 4.41992 3.59 4.41992 4V20C4.41992 20.41 4.07992 20.75 3.66992 20.75Z"
            fill="currentColor"
          />
          <path
            d="M21.6699 20.75C21.2599 20.75 20.9199 20.41 20.9199 20V4C20.9199 3.59 21.2599 3.25 21.6699 3.25C22.0799 3.25 22.4199 3.59 22.4199 4V20C22.4199 20.41 22.0799 20.75 21.6699 20.75Z"
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
            d="M18.6699 16.01C19.2199 16.01 19.6699 16.46 19.6699 17.01V18C19.6699 20.2 18.1699 22 15.6699 22H9.66992C7.16992 22 5.66992 20.2 5.66992 18V17.01C5.66992 16.46 6.11992 16.01 6.66992 16.01H18.6699Z"
            fill="currentColor"
          />
          <path
            d="M19.6699 6V13.5C19.6699 14.05 19.2199 14.5 18.6699 14.5H6.66992C6.11992 14.5 5.66992 14.05 5.66992 13.5V6C5.66992 3.8 7.16992 2 9.66992 2H15.6699C18.1699 2 19.6699 3.8 19.6699 6Z"
            fill="currentColor"
          />
          <path
            d="M3.66992 20.75C3.25992 20.75 2.91992 20.41 2.91992 20V4C2.91992 3.59 3.25992 3.25 3.66992 3.25C4.07992 3.25 4.41992 3.59 4.41992 4V20C4.41992 20.41 4.07992 20.75 3.66992 20.75Z"
            fill="currentColor"
          />
          <path
            d="M21.6699 20.75C21.2599 20.75 20.9199 20.41 20.9199 20V4C20.9199 3.59 21.2599 3.25 21.6699 3.25C22.0799 3.25 22.4199 3.59 22.4199 4V20C22.4199 20.41 22.0799 20.75 21.6699 20.75Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSlider as IconComponentType).keywords = [
  "slider",
  "luger",
  "pseudemys scripta",
  "yellow-bellied terrapin",
  "bushing",
  "skid",
  "glider",
  "scroll",
  "scrollbar",
  "track",
];

export default IconSlider as IconComponentType;
