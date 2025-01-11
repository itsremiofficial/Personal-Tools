import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconDanger: FC<IconProps> = ({
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
            d="M12.6699 9V14"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.6703 21.41H6.61034C3.14034 21.41 1.69034 18.93 3.37034 15.9L6.49034 10.28L9.43034 5C11.2103 1.79 14.1303 1.79 15.9103 5L18.8503 10.29L21.9703 15.91C23.6503 18.94 22.1903 21.42 18.7303 21.42H12.6703V21.41Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.34" : "1"}
            d="M12.6641 17H12.673"
            stroke="currentColor"
            strokeWidth="2"
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
            d="M22.4304 15.92L16.0304 4.4C15.1704 2.85 13.9804 2 12.6704 2C11.3604 2 10.1704 2.85 9.31039 4.4L2.91039 15.92C2.10039 17.39 2.01039 18.8 2.66039 19.91C3.31039 21.02 4.59039 21.63 6.27039 21.63H19.0704C20.7504 21.63 22.0304 21.02 22.6804 19.91C23.3304 18.8 23.2404 17.38 22.4304 15.92Z"
            fill="currentColor"
          />
          <path
            d="M12.6699 14.75C12.2599 14.75 11.9199 14.41 11.9199 14V9C11.9199 8.59 12.2599 8.25 12.6699 8.25C13.0799 8.25 13.4199 8.59 13.4199 9V14C13.4199 14.41 13.0799 14.75 12.6699 14.75Z"
            fill="currentColor"
          />
          <path
            d="M12.6699 18C12.6099 18 12.5399 17.99 12.4699 17.98C12.4099 17.97 12.3499 17.95 12.2899 17.92C12.2299 17.9 12.1699 17.87 12.1099 17.83C12.0599 17.79 12.0099 17.75 11.9599 17.71C11.7799 17.52 11.6699 17.26 11.6699 17C11.6699 16.74 11.7799 16.48 11.9599 16.29C12.0099 16.25 12.0599 16.21 12.1099 16.17C12.1699 16.13 12.2299 16.1 12.2899 16.08C12.3499 16.05 12.4099 16.03 12.4699 16.02C12.5999 15.99 12.7399 15.99 12.8599 16.02C12.9299 16.03 12.9899 16.05 13.0499 16.08C13.1099 16.1 13.1699 16.13 13.2299 16.17C13.2799 16.21 13.3299 16.25 13.3799 16.29C13.5599 16.48 13.6699 16.74 13.6699 17C13.6699 17.26 13.5599 17.52 13.3799 17.71C13.3299 17.75 13.2799 17.79 13.2299 17.83C13.1699 17.87 13.1099 17.9 13.0499 17.92C12.9899 17.95 12.9299 17.97 12.8599 17.98C12.7999 17.99 12.7299 18 12.6699 18Z"
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
            d="M22.4304 15.92L16.0304 4.4C15.1704 2.85 13.9804 2 12.6704 2C11.3604 2 10.1704 2.85 9.31039 4.4L2.91039 15.92C2.10039 17.39 2.01039 18.8 2.66039 19.91C3.31039 21.02 4.59039 21.63 6.27039 21.63H19.0704C20.7504 21.63 22.0304 21.02 22.6804 19.91C23.3304 18.8 23.2404 17.38 22.4304 15.92ZM11.9204 9C11.9204 8.59 12.2604 8.25 12.6704 8.25C13.0804 8.25 13.4204 8.59 13.4204 9V14C13.4204 14.41 13.0804 14.75 12.6704 14.75C12.2604 14.75 11.9204 14.41 11.9204 14V9ZM13.3804 17.71C13.3304 17.75 13.2804 17.79 13.2304 17.83C13.1704 17.87 13.1104 17.9 13.0504 17.92C12.9904 17.95 12.9304 17.97 12.8604 17.98C12.8004 17.99 12.7304 18 12.6704 18C12.6104 18 12.5404 17.99 12.4704 17.98C12.4104 17.97 12.3504 17.95 12.2904 17.92C12.2304 17.9 12.1704 17.87 12.1104 17.83C12.0604 17.79 12.0104 17.75 11.9604 17.71C11.7804 17.52 11.6704 17.26 11.6704 17C11.6704 16.74 11.7804 16.48 11.9604 16.29C12.0104 16.25 12.0604 16.21 12.1104 16.17C12.1704 16.13 12.2304 16.1 12.2904 16.08C12.3504 16.05 12.4104 16.03 12.4704 16.02C12.6004 15.99 12.7404 15.99 12.8604 16.02C12.9304 16.03 12.9904 16.05 13.0504 16.08C13.1104 16.1 13.1704 16.13 13.2304 16.17C13.2804 16.21 13.3304 16.25 13.3804 16.29C13.5604 16.48 13.6704 16.74 13.6704 17C13.6704 17.26 13.5604 17.52 13.3804 17.71Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconDanger as IconComponentType).keywords = [
  "danger",
  "peril",
  "risk",
  "jeopardize",
  "hazardous",
  "dangerous",
  "dangerously",
  "dangerousness",
  "endangering",
  "hazard",
];

export default IconDanger as IconComponentType;