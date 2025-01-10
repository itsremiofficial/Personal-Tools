import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconGallerySlash: FC<IconProps> = ({
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
            d="M4.03992 20.1C3.09992 18.97 2.66992 17.31 2.66992 15V9C2.66992 4 4.66992 2 9.66992 2H15.6699C17.8599 2 19.4699 2.38 20.5899 3.23"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.66992 10C9.77449 10 10.6699 9.10457 10.6699 8C10.6699 6.89543 9.77449 6 8.66992 6C7.56535 6 6.66992 6.89543 6.66992 8C6.66992 9.10457 7.56535 10 8.66992 10Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.6699 2L2.66992 22"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M22.6409 7.99023C22.6609 8.31023 22.6709 8.65023 22.6709 9.00023V15.0002C22.6709 20.0002 20.6709 22.0002 15.6709 22.0002H9.67086C8.93086 22.0002 8.25086 21.9602 7.63086 21.8602"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.0996 16.4502C12.3996 16.7502 12.8896 16.7502 13.1896 16.4502L18.2196 11.4102C18.9996 10.6302 20.2596 10.6302 21.0396 11.4102L22.6696 13.0502"
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
            d="M21.1299 3.54L4.20992 20.46C3.20992 19.46 2.66992 18.01 2.66992 16.19V7.81C2.66992 4.17 4.83992 2 8.47992 2H16.8599C18.6799 2 20.1299 2.54 21.1299 3.54Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.6702 7.81V13.9L21.0402 12.5C20.2602 11.83 19.0002 11.83 18.2202 12.5L14.0602 16.07C13.3502 16.68 12.2302 16.74 11.4502 16.22L22.2802 5.39C22.4202 5.77 22.5202 6.17 22.5802 6.6C22.6402 6.98 22.6702 7.39 22.6702 7.81Z"
            fill="currentColor"
          />
          <path
            d="M22.6696 13.9V16.19C22.6696 19.83 20.4996 22 16.8596 22H8.47957C8.05957 22 7.64957 21.97 7.26957 21.91C6.83957 21.85 6.43957 21.75 6.05957 21.61L11.4496 16.22C12.2296 16.74 13.3496 16.68 14.0596 16.07L18.2196 12.5C18.9996 11.83 20.2596 11.83 21.0396 12.5L22.6696 13.9Z"
            fill="currentColor"
          />
          <path
            d="M22.4398 2.23C22.1398 1.93 21.6498 1.93 21.3498 2.23L2.8998 20.69C2.5998 20.99 2.5998 21.48 2.8998 21.78C3.0498 21.92 3.2398 22 3.4398 22C3.6398 22 3.8298 21.92 3.9798 21.77L22.4398 3.31C22.7498 3.01 22.7498 2.53 22.4398 2.23Z"
            fill="currentColor"
          />
          <path
            d="M8.67004 10.38C9.98448 10.38 11.05 9.31444 11.05 8C11.05 6.68557 9.98448 5.62 8.67004 5.62C7.3556 5.62 6.29004 6.68557 6.29004 8C6.29004 9.31444 7.3556 10.38 8.67004 10.38Z"
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
            d="M22.4398 2.23C22.1398 1.93 21.6498 1.93 21.3498 2.23L2.8998 20.69C2.5998 20.99 2.5998 21.48 2.8998 21.78C3.0498 21.92 3.2398 22 3.4398 22C3.6398 22 3.8298 21.92 3.9798 21.77L22.4398 3.31C22.7498 3.01 22.7498 2.53 22.4398 2.23Z"
            fill="currentColor"
          />
          <path
            d="M9.67004 10.38C10.9845 10.38 12.05 9.31443 12.05 8C12.05 6.68556 10.9845 5.62 9.67004 5.62C8.3556 5.62 7.29004 6.68556 7.29004 8C7.29004 9.31443 8.3556 10.38 9.67004 10.38Z"
            fill="currentColor"
          />
          <path
            d="M22.2803 5.39L21.0603 6.61C21.1403 6.98 21.1703 7.38 21.1703 7.81V12.61L21.0403 12.5C20.2603 11.83 19.0003 11.83 18.2203 12.5L14.0603 16.07C13.3503 16.68 12.2303 16.74 11.4503 16.22L6.07031 21.6C6.11031 21.62 6.15031 21.63 6.19031 21.64C6.46031 21.73 6.73031 21.8 7.02031 21.86C7.12031 21.88 7.22031 21.9 7.33031 21.91C7.70031 21.96 8.08031 22 8.48031 22H16.8603C20.5003 22 22.6703 19.83 22.6703 16.19V7.81C22.6703 6.91 22.5403 6.1 22.2803 5.39Z"
            fill="currentColor"
          />
          <path
            d="M22.2796 5.39L21.0596 6.61C21.1396 6.98 21.1696 7.38 21.1696 7.81V12.61L21.0396 12.5C20.2596 11.83 18.9996 11.83 18.2196 12.5L14.0596 16.07C13.3496 16.68 12.2296 16.74 11.4496 16.22L6.05957 21.61C6.76957 21.87 7.57957 22 8.47957 22H16.8596C20.4996 22 22.6696 19.83 22.6696 16.19V7.81C22.6696 6.91 22.5396 6.1 22.2796 5.39Z"
            fill="currentColor"
          />
          <path
            d="M21.1299 3.54L20.0699 4.6C19.3499 3.87 18.2699 3.5 16.8599 3.5H8.47992C5.65992 3.5 4.16992 4.99 4.16992 7.81V16.19C4.16992 16.95 4.29992 17.6 4.51992 18.16L8.25992 15.65C8.59992 15.42 8.98992 15.3 9.37992 15.29L4.20992 20.46C3.80992 20.06 3.47992 19.58 3.22992 19.03C2.85992 18.23 2.66992 17.28 2.66992 16.19V7.81C2.66992 4.17 4.83992 2 8.47992 2H16.8599C18.6799 2 20.1299 2.54 21.1299 3.54Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconGallerySlash as IconComponentType).keywords = [
  "gallery",
  "slash",
  "art gallery",
  "heading",
  "verandah",
  "veranda",
  "drift",
  "picture gallery",
  "museum",
  "beaux-arts",
  "art",
  "flog",
  "gash",
  "lash",
  "cut",
  "slice",
  "whip",
  "thrash",
  "trounce",
  "thrash about",
];

export default IconGallerySlash as IconComponentType;
