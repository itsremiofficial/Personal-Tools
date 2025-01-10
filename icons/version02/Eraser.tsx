import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconEraser: FC<IconProps> = ({
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
            d="M9.67188 22H15.6719C20.6719 22 22.6719 20 22.6719 15V9C22.6719 4 20.6719 2 15.6719 2H9.67188C4.67188 2 2.67188 4 2.67188 9V15C2.67188 20 4.67188 22 9.67188 22Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M7.66133 15.08L9.60132 17.02C10.2413 17.66 11.3013 17.66 11.9413 17.02L17.6913 11.27C18.3313 10.63 18.3313 9.57 17.6913 8.93L15.7513 6.99001C15.1113 6.35001 14.0513 6.35001 13.4113 6.99001L7.66133 12.74C7.01133 13.38 7.01133 14.43 7.66133 15.08Z"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.98145 10.4199L14.2514 14.6899"
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
            d="M16.8616 2H8.49165C4.85165 2 2.68164 4.17 2.68164 7.81V16.18C2.68164 19.82 4.85165 21.99 8.49165 21.99H16.8616C20.5016 21.99 22.6716 19.82 22.6716 16.18V7.81C22.6716 4.17 20.5016 2 16.8616 2Z"
            fill="currentColor"
          />
          <path
            d="M14.2523 14.69L11.9323 17.01C11.2923 17.66 10.2423 17.66 9.5923 17.01L7.6623 15.08C7.0123 14.43 7.0123 13.38 7.6623 12.74L9.9823 10.42L14.2523 14.69Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.6" : "1"}
            d="M17.6814 11.2599L14.2514 14.6899L9.98145 10.4199L13.4115 6.98994C14.0515 6.33994 15.1014 6.33994 15.7514 6.98994L17.6814 8.91994C18.3314 9.56994 18.3314 10.6199 17.6814 11.2599Z"
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
            d="M16.8619 2H8.48187C4.84187 2 2.67188 4.17 2.67188 7.81V16.18C2.67188 19.83 4.84187 22 8.48187 22H16.8519C20.4919 22 22.6619 19.83 22.6619 16.19V7.81C22.6719 4.17 20.5019 2 16.8619 2ZM13.1919 15.75L11.9319 17.01C11.2919 17.66 10.2419 17.66 9.59188 17.01L7.66187 15.08C7.01187 14.43 7.02187 13.39 7.66187 12.74L8.93188 11.48C9.13188 11.29 9.44188 11.29 9.64188 11.48L13.2019 15.04C13.3919 15.24 13.3919 15.56 13.1919 15.75ZM17.6819 11.26L14.6019 14.34C14.4019 14.54 14.0919 14.54 13.8919 14.34L10.3319 10.78C10.1319 10.58 10.1319 10.27 10.3319 10.07L13.4119 6.99C14.0519 6.34 15.1019 6.34 15.7519 6.99L17.6819 8.92C18.3319 9.57 18.3319 10.62 17.6819 11.26Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconEraser as IconComponentType).keywords = [
  "eraser",
  "clearance",
  "cleanup",
  "cleaning",
  "clean-up",
  "rough",
  "scratch",
  "cleansing",
  "cleanliness",
  "draft",
];

export default IconEraser as IconComponentType;
