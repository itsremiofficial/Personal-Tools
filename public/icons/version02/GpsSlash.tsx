import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconGpsSlash: FC<IconProps> = ({
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
            d="M17.8799 6.6C16.5299 5.3 14.6899 4.5 12.6699 4.5C8.52992 4.5 5.16992 7.86 5.16992 12C5.16992 14.01 5.95992 15.84 7.24992 17.19"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.6699 4V2"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.66992 12H2.66992"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M9.66992 18.88C10.5899 19.28 11.5999 19.5 12.6699 19.5C16.8099 19.5 20.1699 16.14 20.1699 12C20.1699 10.93 19.9499 9.92 19.5499 9"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.6699 20V22"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.6699 12H22.6699"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M14.7899 9.88L10.5499 14.12C10.0099 13.58 9.66992 12.83 9.66992 12C9.66992 10.34 11.0099 9 12.6699 9C13.4999 9 14.2499 9.34 14.7899 9.88Z"
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
            d="M19.6095 8.06006L15.7795 11.8901C15.7895 11.9301 15.7895 11.9601 15.7895 12.0001C15.7895 13.7201 14.3895 15.1201 12.6695 15.1201C12.6295 15.1201 12.5995 15.1201 12.5595 15.1101L8.72949 18.9401C9.88949 19.6201 11.2395 20.0001 12.6695 20.0001C17.0795 20.0001 20.6695 16.4101 20.6695 12.0001C20.6695 10.5701 20.2895 9.22006 19.6095 8.06006Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M18.3199 6.35L14.8699 9.8C14.3099 9.23 13.5299 8.88 12.6699 8.88C10.9499 8.88 9.54992 10.28 9.54992 12C9.54992 12.86 9.89992 13.64 10.4699 14.2L7.01992 17.65C5.56992 16.2 4.66992 14.2 4.66992 12C4.66992 7.59 8.25992 4 12.6699 4C14.8699 4 16.8699 4.9 18.3199 6.35Z"
            fill="currentColor"
          />
          <path
            d="M14.8698 9.79988L10.4698 14.1999C9.8998 13.6399 9.5498 12.8599 9.5498 11.9999C9.5498 10.2799 10.9498 8.87988 12.6698 8.87988C13.5298 8.87988 14.3098 9.22988 14.8698 9.79988Z"
            fill="currentColor"
          />
          <path
            d="M13.4199 2V4.04H13.4099C13.1699 4.01 12.9199 4 12.6699 4C12.4199 4 12.1699 4.01 11.9299 4.04H11.9199V2C11.9199 1.59 12.2599 1.25 12.6699 1.25C13.0799 1.25 13.4199 1.59 13.4199 2Z"
            fill="currentColor"
          />
          <path
            d="M4.66992 12C4.66992 12.25 4.67992 12.51 4.70992 12.75H2.66992C2.25992 12.75 1.91992 12.41 1.91992 12C1.91992 11.59 2.25992 11.25 2.66992 11.25H4.70992C4.67992 11.49 4.66992 11.75 4.66992 12Z"
            fill="currentColor"
          />
          <path
            d="M13.4199 19.96V22C13.4199 22.41 13.0799 22.75 12.6699 22.75C12.2599 22.75 11.9199 22.41 11.9199 22V19.96H11.9299C12.1699 19.99 12.4199 20 12.6699 20C12.9199 20 13.1699 19.99 13.4099 19.96H13.4199Z"
            fill="currentColor"
          />
          <path
            d="M23.4199 12C23.4199 12.41 23.0799 12.75 22.6699 12.75H20.6299C20.6599 12.51 20.6699 12.25 20.6699 12C20.6699 11.75 20.6599 11.49 20.6299 11.25H22.6699C23.0799 11.25 23.4199 11.59 23.4199 12Z"
            fill="currentColor"
          />
          <path
            d="M22.4398 2.22988C22.1398 1.92988 21.6498 1.92988 21.3498 2.22988L2.8998 20.6899C2.5998 20.9899 2.5998 21.4799 2.8998 21.7799C3.0498 21.9199 3.2398 21.9999 3.4398 21.9999C3.6398 21.9999 3.8298 21.9199 3.9798 21.7699L22.4398 3.30988C22.7498 3.00988 22.7498 2.52988 22.4398 2.22988Z"
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
          <g clipPath="url(#clip0_12_64959)">
            <path
              d="M23.4199 12.0002C23.4199 12.4102 23.0799 12.7502 22.6699 12.7502H20.6299C20.2799 16.5602 17.2299 19.6102 13.4199 19.9602V22.0002C13.4199 22.4102 13.0799 22.7502 12.6699 22.7502C12.2599 22.7502 11.9199 22.4102 11.9199 22.0002V19.9602C11.3099 19.9102 10.7099 19.7802 10.1399 19.5902C9.42986 19.3502 9.20986 18.4502 9.73986 17.9202L12.5499 15.1102C12.5899 15.1202 12.6199 15.1202 12.6599 15.1202C14.3899 15.1202 15.7799 13.7302 15.7799 12.0002C15.7799 11.9602 15.7799 11.9302 15.7699 11.8902L18.5799 9.08019C19.1099 8.55019 20.0099 8.77019 20.2499 9.48019C20.4399 10.0502 20.5699 10.6402 20.6199 11.2602H22.6699C23.0799 11.2502 23.4199 11.5902 23.4199 12.0002Z"
              fill="currentColor"
            />
            <path
              d="M22.4399 2.23C22.1399 1.93 21.6499 1.93 21.3499 2.23L17.7399 5.84C16.5399 4.85 15.0399 4.2 13.4099 4.05V2C13.4099 1.59 13.0699 1.25 12.6599 1.25C12.2499 1.25 11.9099 1.59 11.9099 2V4.04C8.09992 4.4 5.04992 7.44 4.69992 11.25H2.66992C2.25992 11.25 1.91992 11.59 1.91992 12C1.91992 12.41 2.25992 12.75 2.66992 12.75H4.70992C4.85992 14.38 5.50992 15.88 6.49992 17.08L2.88992 20.69C2.58992 20.99 2.58992 21.48 2.88992 21.78C3.04992 21.92 3.23992 22 3.43992 22C3.63992 22 3.82992 21.92 3.97992 21.77L22.4399 3.31C22.7499 3.01 22.7499 2.53 22.4399 2.23ZM9.54992 12C9.54992 10.28 10.9499 8.88 12.6699 8.88C13.2499 8.88 13.7899 9.05 14.2499 9.33L9.99992 13.58C9.71992 13.12 9.54992 12.58 9.54992 12Z"
              fill="currentColor"
            />
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
      )}
    </>
  );
};

// Keywords for search and categorization
(IconGpsSlash as IconComponentType).keywords = [
  "gps",
  "slash",
  "general practitioner",
  "rtk",
  "spg",
  "gsp",
  "aps",
  "positioning",
  "sgp",
  "spl",
  "drs",
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

export default IconGpsSlash as IconComponentType;
