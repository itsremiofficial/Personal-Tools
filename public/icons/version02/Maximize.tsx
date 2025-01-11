import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconMaximize: FC<IconProps> = ({
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
            d="M2.66992 9.98V9C2.66992 4 4.66992 2 9.66992 2H15.6699C20.6699 2 22.6699 4 22.6699 9V15C22.6699 20 20.6699 22 15.6699 22H14.6699"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M13.6699 11.0005L18.6799 5.98047H14.6699"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.6797 5.98047V9.99047"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M11.6699 16.15V18.85C11.6699 21.1 10.7699 22 8.51992 22H5.81992C3.56992 22 2.66992 21.1 2.66992 18.85V16.15C2.66992 13.9 3.56992 13 5.81992 13H8.51992C10.7699 13 11.6699 13.9 11.6699 16.15Z"
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
            d="M17.1499 2H9.18992C5.73992 2 3.66992 4.06 3.66992 7.52V15.47C3.66992 18.94 5.73992 21 9.18992 21H17.1399C20.5999 21 22.6599 18.94 22.6599 15.48V7.52C22.6699 4.06 20.5999 2 17.1499 2Z"
            fill="currentColor"
          />
          <path
            d="M11.6699 16.15V18.85C11.6699 21.1 10.7699 22 8.51992 22H5.81992C3.56992 22 2.66992 21.1 2.66992 18.85V16.15C2.66992 13.9 3.56992 13 5.81992 13H8.51992C10.7699 13 11.6699 13.9 11.6699 16.15Z"
            fill="currentColor"
          />
          <path
            d="M19.4199 5.95C19.4199 5.86 19.3999 5.78 19.3699 5.69C19.3699 5.68 19.3599 5.67 19.3599 5.67C19.3299 5.6 19.2799 5.53 19.2299 5.48C19.2099 5.46 19.1899 5.44 19.1699 5.43C19.1199 5.39 19.0699 5.35 19.0199 5.33C18.9999 5.32 18.9699 5.31 18.9499 5.3C18.8699 5.27 18.7799 5.25 18.6899 5.25H14.6699C14.2599 5.25 13.9199 5.59 13.9199 6C13.9199 6.41 14.2499 6.72 14.6699 6.72H16.8799L13.1399 10.47C12.8499 10.76 12.8499 11.24 13.1399 11.53C13.2899 11.68 13.4799 11.75 13.6699 11.75C13.8599 11.75 14.0499 11.68 14.1999 11.53L17.9299 7.79V9.99C17.9299 10.4 18.2699 10.74 18.6799 10.74C19.0899 10.74 19.4299 10.4 19.4299 9.99V5.97C19.4299 5.96 19.4299 5.96 19.4199 5.95Z"
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
            d="M11.6699 16.15V18.85C11.6699 21.1 10.7699 22 8.51992 22H5.81992C3.56992 22 2.66992 21.1 2.66992 18.85V16.15C2.66992 13.9 3.56992 13 5.81992 13H8.51992C10.7699 13 11.6699 13.9 11.6699 16.15Z"
            fill="currentColor"
          />
          <path
            d="M17.1499 2H9.18992C6.13992 2 3.66992 4.47 3.66992 7.52V10.5C3.66992 11.05 4.11992 11.5 4.66992 11.5H9.16992C11.3799 11.5 13.1699 13.29 13.1699 15.5V20C13.1699 20.55 13.6199 21 14.1699 21H17.1499C20.5999 21 22.6699 18.94 22.6699 15.48V7.52C22.6699 4.47 20.1999 2 17.1499 2ZM19.4299 9.99C19.4299 10.4 19.0899 10.74 18.6799 10.74C18.2699 10.74 17.9299 10.4 17.9299 9.99V7.79L14.1999 11.53C14.0499 11.68 13.8599 11.75 13.6699 11.75C13.4799 11.75 13.2899 11.68 13.1399 11.53C12.8499 11.24 12.8499 10.76 13.1399 10.47L16.8699 6.72H14.6699C14.2499 6.72 13.9199 6.39 13.9199 5.97C13.9199 5.56 14.2499 5.22 14.6699 5.22H18.6799C18.7699 5.22 18.8599 5.25 18.9399 5.28C18.9699 5.29 18.9899 5.3 19.0099 5.31C19.0699 5.34 19.1199 5.37 19.1699 5.42C19.1899 5.43 19.2099 5.45 19.2299 5.47C19.2799 5.53 19.3199 5.59 19.3599 5.66C19.3599 5.67 19.3699 5.68 19.3699 5.69C19.4099 5.77 19.4199 5.86 19.4199 5.95C19.4299 5.96 19.4299 5.96 19.4299 5.97V9.99Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMaximize as IconComponentType).keywords = [
  "maximize",
  "max",
  "maximum",
  "maximal",
  "optimum",
  "broaden",
  "optimal",
  "maximisation",
  "maximise",
  "optimizing",
];

export default IconMaximize as IconComponentType;