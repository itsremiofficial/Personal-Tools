import { FC } from "react";

const IconAirplaneSquare: FC<IconProps> = ({
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
            d="M10.5295 19L12.2095 17.58C12.4595 17.37 12.8795 17.37 13.1395 17.58L14.8095 19C15.1995 19.2 15.6795 19 15.8195 18.58L16.1395 17.62C16.2195 17.39 16.1395 17.05 15.9695 16.88L14.3295 15.23C14.2095 15.11 14.1195 14.88 14.1195 14.72V12.87C14.1195 12.45 14.4295 12.25 14.8195 12.41L18.1695 13.85C18.7195 14.09 19.1795 13.79 19.1795 13.19V12.26C19.1795 11.78 18.8195 11.22 18.3695 11.03L14.4295 9.32999C14.2595 9.25999 14.1295 9.04999 14.1295 8.86999V6.79999C14.1295 6.11999 13.6295 5.31999 13.0295 5.00999C12.8095 4.89999 12.5595 4.89999 12.3395 5.00999C11.7295 5.30999 11.2395 6.11999 11.2395 6.79999V8.86999C11.2395 9.04999 11.0995 9.25999 10.9395 9.32999L6.99945 11.03C6.55945 11.22 6.18945 11.78 6.18945 12.26V13.19C6.18945 13.79 6.63945 14.09 7.19945 13.85L10.5495 12.41C10.9295 12.24 11.2495 12.45 11.2495 12.87V14.72C11.2495 14.89 11.1495 15.12 11.0395 15.23L9.36945 16.87C9.19945 17.04 9.11945 17.38 9.19945 17.61L9.51945 18.57C9.65945 19 10.1295 19.2 10.5295 19Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.66992 22H15.6699C20.6699 22 22.6699 20 22.6699 15V9C22.6699 4 20.6699 2 15.6699 2H9.66992C4.66992 2 2.66992 4 2.66992 9V15C2.66992 20 4.66992 22 9.66992 22Z"
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
            d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2Z"
            fill="currentColor"
          />
          <path
            d="M10.5295 19L12.2095 17.58C12.4595 17.37 12.8795 17.37 13.1395 17.58L14.8095 19C15.1995 19.2 15.6795 19 15.8195 18.58L16.1395 17.62C16.2195 17.39 16.1395 17.05 15.9695 16.88L14.3295 15.23C14.2095 15.11 14.1195 14.88 14.1195 14.72V12.87C14.1195 12.45 14.4295 12.25 14.8195 12.41L18.1695 13.85C18.7195 14.09 19.1795 13.79 19.1795 13.19V12.26C19.1795 11.78 18.8195 11.22 18.3695 11.03L14.4295 9.32999C14.2595 9.25999 14.1295 9.04999 14.1295 8.86999V6.79999C14.1295 6.11999 13.6295 5.31999 13.0295 5.00999C12.8095 4.89999 12.5595 4.89999 12.3395 5.00999C11.7295 5.30999 11.2395 6.11999 11.2395 6.79999V8.86999C11.2395 9.04999 11.0995 9.25999 10.9395 9.32999L6.99945 11.03C6.55945 11.22 6.18945 11.78 6.18945 12.26V13.19C6.18945 13.79 6.63945 14.09 7.19945 13.85L10.5495 12.41C10.9295 12.24 11.2495 12.45 11.2495 12.87V14.72C11.2495 14.89 11.1495 15.12 11.0395 15.23L9.36945 16.87C9.19945 17.04 9.11945 17.38 9.19945 17.61L9.51945 18.57C9.65945 19 10.1295 19.2 10.5295 19Z"
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
            d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2ZM19.1799 13.19C19.1799 13.79 18.7199 14.09 18.1699 13.85L14.8199 12.41C14.4299 12.25 14.1199 12.45 14.1199 12.87V14.72C14.1199 14.88 14.2099 15.11 14.3299 15.23L15.9699 16.88C16.1399 17.05 16.2199 17.39 16.1399 17.62L15.8199 18.58C15.6799 19 15.1999 19.2 14.8099 19L13.1399 17.58C12.8799 17.37 12.4599 17.37 12.2099 17.58L10.5299 19C10.1299 19.2 9.65992 19 9.51992 18.57L9.19992 17.61C9.11992 17.38 9.19992 17.04 9.36992 16.87L11.0399 15.23C11.1499 15.12 11.2499 14.89 11.2499 14.72V12.87C11.2499 12.45 10.9299 12.24 10.5499 12.41L7.19992 13.85C6.63992 14.09 6.18992 13.79 6.18992 13.19V12.26C6.18992 11.78 6.55992 11.22 6.99992 11.03L10.9399 9.33C11.0999 9.26 11.2399 9.05 11.2399 8.87V6.8C11.2399 6.12 11.7299 5.31 12.3399 5.01C12.5599 4.9 12.8099 4.9 13.0299 5.01C13.6299 5.32 14.1299 6.12 14.1299 6.8V8.87C14.1299 9.05 14.2599 9.26 14.4299 9.33L18.3699 11.03C18.8199 11.22 19.1799 11.78 19.1799 12.26V13.19Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconAirplaneSquare as IconComponent).keywords = [
  "airplane",
  "square",
  "aeroplane",
  "plane",
  "jetliner",
  "warplane",
  "helicopter",
  "aviation",
  "airport",
  "airliner",
  "aircraft",
  "quadrate",
  "right-angled",
  "squarely",
  "foursquare",
  "squarish",
  "conventional",
  "paid",
  "honorable",
  "honest",
];

export default IconAirplaneSquare as IconComponent;
