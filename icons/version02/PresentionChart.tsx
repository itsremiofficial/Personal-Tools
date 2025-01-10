import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconPresentionChart: FC<IconProps> = ({
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
            d="M6.57016 17H18.7602C20.6602 17 21.6602 16 21.6602 14.1V2H3.66016V14.1C3.67016 16 4.67016 17 6.57016 17Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.66992 2H22.6699"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M8.66992 22L12.6699 20M12.6699 20V17M12.6699 20L16.6699 22"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.16992 11L11.3199 8.37C11.5699 8.16 11.8999 8.22 12.0699 8.5L13.2699 10.5C13.4399 10.78 13.7699 10.83 14.0199 10.63L17.1699 8"
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
            opacity={duotone ? "0.4" : "1"}
            d="M21.6699 2V14.1C21.6699 16 20.6699 17 18.7699 17H6.56992C4.66992 17 3.66992 16 3.66992 14.1V2H21.6699Z"
            fill="currentColor"
          />
          <path
            d="M22.6699 2.75H2.66992C2.25992 2.75 1.91992 2.41 1.91992 2C1.91992 1.59 2.25992 1.25 2.66992 1.25H22.6699C23.0799 1.25 23.4199 1.59 23.4199 2C23.4199 2.41 23.0799 2.75 22.6699 2.75Z"
            fill="currentColor"
          />
          <path
            d="M17.3402 22.34C17.2102 22.6 16.9402 22.75 16.6702 22.75C16.5602 22.75 16.4402 22.72 16.3402 22.67L12.6702 20.84L9.00017 22.67C8.90017 22.72 8.78019 22.75 8.67019 22.75C8.40019 22.75 8.13017 22.6 8.00017 22.34C7.81017 21.96 7.9602 21.51 8.3402 21.33L11.9202 19.54V17H13.4202V19.54L17.0002 21.33C17.3802 21.51 17.5302 21.96 17.3402 22.34Z"
            fill="currentColor"
          />
          <path
            d="M8.16985 11.7499C7.95985 11.7499 7.73986 11.6599 7.58986 11.4799C7.31986 11.1599 7.36984 10.6899 7.68984 10.4199L10.8399 7.78993C11.1299 7.54993 11.4998 7.44994 11.8498 7.50994C12.2098 7.56994 12.5199 7.78991 12.7099 8.10991L13.7598 9.85991L16.6898 7.41994C17.0098 7.14994 17.4798 7.19992 17.7498 7.51992C18.0198 7.83992 17.9699 8.30991 17.6499 8.57991L14.4998 11.2099C14.2098 11.4499 13.8399 11.5499 13.4899 11.4899C13.1299 11.4299 12.8198 11.2099 12.6298 10.8899L11.5799 9.13994L8.64986 11.5799C8.50986 11.6899 8.33985 11.7499 8.16985 11.7499Z"
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
            d="M22.6699 2.75H2.66992C2.25992 2.75 1.91992 2.41 1.91992 2C1.91992 1.59 2.25992 1.25 2.66992 1.25H22.6699C23.0799 1.25 23.4199 1.59 23.4199 2C23.4199 2.41 23.0799 2.75 22.6699 2.75Z"
            fill="currentColor"
          />
          <path
            d="M17.3402 22.34C17.2102 22.6 16.9402 22.75 16.6702 22.75C16.5602 22.75 16.4402 22.72 16.3402 22.67L12.6702 20.84L9.00018 22.67C8.90018 22.72 8.78018 22.75 8.67018 22.75C8.40018 22.75 8.13018 22.6 8.00018 22.34C7.81018 21.96 7.96018 21.51 8.34018 21.33L11.9202 19.54V17H13.4202V19.54L17.0002 21.33C17.3802 21.51 17.5302 21.96 17.3402 22.34Z"
            fill="currentColor"
          />
          <path
            d="M3.66992 2V14.1C3.66992 16 4.66992 17 6.56992 17H18.7699C20.6699 17 21.6699 16 21.6699 14.1V2H3.66992ZM17.6499 8.58L14.4999 11.21C14.2099 11.45 13.8399 11.55 13.4899 11.49C13.1299 11.43 12.8199 11.21 12.6299 10.89L11.5799 9.14L8.64992 11.58C8.50992 11.7 8.33992 11.75 8.16992 11.75C7.95992 11.75 7.73992 11.66 7.58992 11.48C7.31992 11.16 7.36992 10.69 7.68992 10.42L10.8399 7.79C11.1299 7.55 11.4999 7.45 11.8499 7.51C12.2099 7.57 12.5199 7.79 12.7099 8.11L13.7599 9.86L16.6899 7.42C17.0099 7.15 17.4799 7.2 17.7499 7.52C18.0099 7.84 17.9699 8.31 17.6499 8.58Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconPresentionChart as IconComponentType).keywords = [
  "presention",
  "chart",
  "presension",
  "presensation",
  "præterition",
  "præsumption",
  "prævision",
  "præsentation",
  "prejudice",
  "preexistency",
  "predjudice",
  "map",
  "cartography",
  "mapping",
  "cartographic",
  "plan",
  "diagram",
  "graphical",
  "diagrammatic",
  "blueprint",
];

export default IconPresentionChart as IconComponentType;
