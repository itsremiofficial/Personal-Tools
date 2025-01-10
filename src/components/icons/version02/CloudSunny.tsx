import { FC } from "react";

const IconCloudSunny: FC<IconProps> = ({
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
            d="M20.9404 18.6799C19.9504 19.5899 18.6504 20.0899 17.3004 20.0799H6.21035C1.54035 19.7399 1.53035 12.9399 6.21035 12.5999H6.26035C3.56035 5.0599 12.7904 1.3399 16.6704 6.0299V6.0399C17.3704 6.8999 17.9004 8.0399 18.1404 9.4899C19.4704 9.6599 20.5504 10.3099 21.3204 11.2299C23.0704 13.2999 23.2204 16.6799 20.9404 18.6799Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.92977 13.0101C7.40977 12.7501 6.83977 12.6101 6.25977 12.6001"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.5195 9.92001C17.0395 9.66001 17.6095 9.52001 18.1895 9.51001"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.6399 8.5C22.6399 9.6 22.1299 10.59 21.3199 11.23C20.5499 10.31 19.4699 9.66 18.1399 9.49C17.8999 8.04 17.3699 6.9 16.6699 6.04V6.03C17.2999 5.39 18.1799 5 19.1399 5C21.0699 5 22.6399 6.57 22.6399 8.5Z"
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
            d="M21.2797 10.83C20.5097 9.90996 19.5197 9.30996 18.3697 9.04996C18.1097 7.88996 17.6597 6.88996 16.9997 6.05996C16.9797 6.02996 16.9597 5.99996 16.9397 5.97996C14.7397 3.31996 11.1397 3.32996 8.70969 4.70996C6.62969 5.89996 4.85969 8.40996 5.78969 11.99C3.65969 12.51 2.67969 14.37 2.67969 16.05C2.67969 17.93 3.90969 20.04 6.64969 20.24H16.9897C16.9997 20.24 17.0197 20.24 17.0297 20.24C18.4497 20.24 19.8097 19.71 20.8597 18.75C23.3697 16.53 23.0397 12.91 21.2797 10.83Z"
            fill="currentColor"
          />
          <path
            d="M22.4299 8.74001C22.4299 9.64001 22.1099 10.5 21.5299 11.16C21.4599 11.05 21.3699 10.94 21.2799 10.83C20.5199 9.92001 19.5199 9.30001 18.3699 9.05001C18.1199 7.89001 17.6599 6.90001 16.9999 6.07001C16.9899 6.04001 16.9599 6.01001 16.9399 5.99001C16.8399 5.87001 16.7299 5.76001 16.6299 5.65001C17.2399 5.23001 17.9399 5.01001 18.6999 5.01001C20.7599 5.01001 22.4299 6.68001 22.4299 8.74001Z"
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
            d="M21.2797 10.83C20.5097 9.90996 19.5197 9.30996 18.3697 9.04996C18.1097 7.88996 17.6597 6.88996 16.9997 6.05996C16.9797 6.02996 16.9597 5.99996 16.9397 5.97996C14.7397 3.31996 11.1397 3.32996 8.70969 4.70996C6.62969 5.89996 4.85969 8.40996 5.78969 11.99C3.65969 12.51 2.67969 14.37 2.67969 16.05C2.67969 17.93 3.90969 20.04 6.64969 20.24H16.9897C16.9997 20.24 17.0197 20.24 17.0297 20.24C18.4497 20.24 19.8097 19.71 20.8597 18.75C23.3697 16.53 23.0397 12.91 21.2797 10.83Z"
            fill="currentColor"
          />
          <path
            d="M22.4301 8.74001C22.4301 9.08001 22.3901 9.41001 22.2901 9.73001C21.5601 8.88001 20.6301 8.25001 19.6001 7.86001C19.2801 6.86001 18.8201 5.97001 18.2201 5.19001C18.1901 5.15001 18.1601 5.11001 18.1201 5.06001C18.3101 5.02001 18.5101 5.01001 18.7001 5.01001C20.7601 5.01001 22.4301 6.68001 22.4301 8.74001Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCloudSunny as IconComponent).keywords = [
  "cloud",
  "sunny",
  "fog",
  "mist",
  "befog",
  "haze over",
  "becloud",
  "dapple",
  "mottle",
  "sully",
  "defile",
  "sunshiny",
  "shining",
  "shiny",
  "bright",
  "clear",
  "cheerful",
  "cheery",
  "gay",
  "sunshine",
];

export default IconCloudSunny as IconComponent;
