import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconVolumeSlash: FC<IconProps> = ({
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
            d="M15.6699 8.37V7.41C15.6699 4.43 13.5999 3.29 11.0799 4.87L8.15992 6.7C7.83992 6.89 7.46992 7 7.09992 7H5.66992C3.66992 7 2.66992 8 2.66992 10V14C2.66992 16 3.66992 17 5.66992 17H7.66992"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M11.0801 19.13C13.6001 20.71 15.6701 19.56 15.6701 16.59V12.95"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19.4799 9.42C20.3799 11.57 20.1099 14.08 18.6699 16"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21.82 7.8C23.29 11.29 22.85 15.37 20.5 18.5"
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
            d="M18.6702 16.75C18.5102 16.75 18.3602 16.7 18.2202 16.6C17.8902 16.35 17.8202 15.88 18.0702 15.55C19.3302 13.87 19.6002 11.64 18.7902 9.71C18.6302 9.33 18.8102 8.89 19.1902 8.73C19.5702 8.57 20.0102 8.75 20.1702 9.13C21.1902 11.55 20.8402 14.36 19.2702 16.46C19.1202 16.65 18.9002 16.75 18.6702 16.75Z"
            fill="currentColor"
          />
          <path
            d="M20.5003 19.25C20.3403 19.25 20.1903 19.2 20.0503 19.1C19.7203 18.85 19.6503 18.38 19.9003 18.05C22.0403 15.2 22.5103 11.38 21.1303 8.09C20.9703 7.71 21.1503 7.27 21.5303 7.11C21.9103 6.95 22.3503 7.13 22.5103 7.51C24.1003 11.29 23.5603 15.67 21.1003 18.95C20.9603 19.15 20.7303 19.25 20.5003 19.25Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14.7104 12.96C15.3404 12.33 16.4204 12.78 16.4204 13.67V16.6C16.4204 18.32 15.8004 19.61 14.6904 20.23C14.2404 20.48 13.7404 20.6 13.2204 20.6C12.4204 20.6 11.5604 20.33 10.6804 19.78L10.0404 19.38C9.50039 19.04 9.41039 18.28 9.86039 17.83L14.7104 12.96Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14.6899 3.78C13.5699 3.16 12.1399 3.32 10.6799 4.23L7.75992 6.06C7.55992 6.18 7.32992 6.25 7.09992 6.25H6.16992H5.66992C3.24992 6.25 1.91992 7.58 1.91992 10V14C1.91992 16.42 3.24992 17.75 5.66992 17.75H6.16992H6.91992L16.4199 8.25V7.41C16.4199 5.69 15.7999 4.4 14.6899 3.78Z"
            fill="currentColor"
          />
          <path
            d="M22.4398 2.23C22.1398 1.93 21.6498 1.93 21.3498 2.23L2.8998 20.69C2.5998 20.99 2.5998 21.48 2.8998 21.78C3.0498 21.92 3.2398 22 3.4398 22C3.6398 22 3.8298 21.92 3.9798 21.77L22.4398 3.31C22.7498 3.01 22.7498 2.53 22.4398 2.23Z"
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
            d="M18.6702 16.75C18.5102 16.75 18.3602 16.7 18.2202 16.6C17.8902 16.35 17.8202 15.88 18.0702 15.55C19.3302 13.87 19.6002 11.64 18.7902 9.71C18.6302 9.33 18.8102 8.89 19.1902 8.73C19.5702 8.57 20.0102 8.75 20.1702 9.13C21.1902 11.55 20.8402 14.36 19.2702 16.46C19.1202 16.65 18.9002 16.75 18.6702 16.75Z"
            fill="currentColor"
          />
          <path
            d="M20.5003 19.25C20.3403 19.25 20.1903 19.2 20.0503 19.1C19.7203 18.85 19.6503 18.38 19.9003 18.05C22.0403 15.2 22.5103 11.38 21.1303 8.09C20.9703 7.71 21.1503 7.27 21.5303 7.11C21.9103 6.95 22.3503 7.13 22.5103 7.51C24.1003 11.29 23.5603 15.67 21.1003 18.95C20.9603 19.15 20.7303 19.25 20.5003 19.25Z"
            fill="currentColor"
          />
          <path
            d="M14.7104 12.96C15.3404 12.33 16.4204 12.78 16.4204 13.67V16.6C16.4204 18.32 15.8004 19.61 14.6904 20.23C14.2404 20.48 13.7404 20.6 13.2204 20.6C12.4204 20.6 11.5604 20.33 10.6804 19.78L10.0404 19.38C9.50039 19.04 9.41039 18.28 9.86039 17.83L14.7104 12.96Z"
            fill="currentColor"
          />
          <path
            d="M22.4399 2.23C22.1399 1.93 21.6499 1.93 21.3499 2.23L16.3999 7.18C16.3399 5.58 15.7399 4.38 14.6799 3.79C13.5599 3.17 12.1299 3.33 10.6699 4.24L7.75992 6.06C7.55992 6.18 7.32992 6.25 7.09992 6.25H6.16992H5.66992C3.24992 6.25 1.91992 7.58 1.91992 10V14C1.91992 16.42 3.24992 17.75 5.66992 17.75H5.82992L2.88992 20.69C2.58992 20.99 2.58992 21.48 2.88992 21.78C3.04992 21.92 3.23992 22 3.43992 22C3.63992 22 3.82992 21.92 3.97992 21.77L22.4399 3.31C22.7499 3.01 22.7499 2.53 22.4399 2.23Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconVolumeSlash as IconComponentType).keywords = [
  "volume",
  "slash",
  "loudness",
  "book",
  "mass",
  "bulk",
  "intensity",
  "quantum",
  "weight",
  "density",
  "potentiometer",
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

export default IconVolumeSlash as IconComponentType;