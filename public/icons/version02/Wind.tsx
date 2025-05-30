import { FC } from "react";

const IconWind: FC<IconProps> = ({
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
            d="M2.66992 15H19.1699C21.0999 15 22.6699 16.57 22.6699 18.5C22.6699 20.43 21.0999 22 19.1699 22C17.2399 22 15.6699 20.43 15.6699 18.5V18"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2.66992 12H19.1699C21.0899 12 22.6699 10.43 22.6699 8.5C22.6699 6.58 21.0899 5 19.1699 5C17.2499 5 15.6699 6.57 15.6699 8.5V9"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.66992 9.00012H9.97992C11.4699 9.00012 12.6699 7.79012 12.6699 6.31012C12.6699 4.82012 11.4599 3.62012 9.97992 3.62012C8.48992 3.62012 7.28992 4.83012 7.28992 6.31012V6.69012"
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
            d="M19.1699 22.75C16.8299 22.75 14.9199 20.84 14.9199 18.5V18C14.9199 17.59 15.2599 17.25 15.6699 17.25C16.0799 17.25 16.4199 17.59 16.4199 18V18.5C16.4199 20.02 17.6499 21.25 19.1699 21.25C20.6899 21.25 21.9199 20.02 21.9199 18.5C21.9199 16.98 20.6899 15.75 19.1699 15.75H2.66992C2.25992 15.75 1.91992 15.41 1.91992 15C1.91992 14.59 2.25992 14.25 2.66992 14.25H19.1699C21.5099 14.25 23.4199 16.16 23.4199 18.5C23.4199 20.84 21.5099 22.75 19.1699 22.75Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19.1699 12.75H2.66992C2.25992 12.75 1.91992 12.41 1.91992 12C1.91992 11.59 2.25992 11.25 2.66992 11.25H19.1699C20.6899 11.25 21.9199 10.02 21.9199 8.5C21.9199 6.98 20.6899 5.75 19.1699 5.75C17.6499 5.75 16.4199 6.98 16.4199 8.5V9C16.4199 9.41 16.0799 9.75 15.6699 9.75C15.2599 9.75 14.9199 9.41 14.9199 9V8.5C14.9199 6.16 16.8299 4.25 19.1699 4.25C21.5099 4.25 23.4199 6.16 23.4199 8.5C23.4199 10.84 21.5099 12.75 19.1699 12.75Z"
            fill="currentColor"
          />
          <path
            d="M9.97992 9.75012H2.66992C2.25992 9.75012 1.91992 9.41012 1.91992 9.00012C1.91992 8.59012 2.25992 8.25012 2.66992 8.25012H9.97992C11.0499 8.25012 11.9199 7.38012 11.9199 6.31012C11.9199 5.24012 11.0499 4.37012 9.97992 4.37012C8.90992 4.37012 8.03992 5.24012 8.03992 6.31012V6.69012C8.03992 7.10012 7.69992 7.44012 7.28992 7.44012C6.87992 7.44012 6.53992 7.11012 6.53992 6.69012V6.31012C6.53992 4.41012 8.07992 2.87012 9.97992 2.87012C11.8799 2.87012 13.4199 4.41012 13.4199 6.31012C13.4199 8.21012 11.8799 9.75012 9.97992 9.75012Z"
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
            d="M19.1699 22.75C16.8299 22.75 14.9199 20.84 14.9199 18.5V18C14.9199 17.59 15.2599 17.25 15.6699 17.25C16.0799 17.25 16.4199 17.59 16.4199 18V18.5C16.4199 20.02 17.6499 21.25 19.1699 21.25C20.6899 21.25 21.9199 20.02 21.9199 18.5C21.9199 16.98 20.6899 15.75 19.1699 15.75H2.66992C2.25992 15.75 1.91992 15.41 1.91992 15C1.91992 14.59 2.25992 14.25 2.66992 14.25H19.1699C21.5099 14.25 23.4199 16.16 23.4199 18.5C23.4199 20.84 21.5099 22.75 19.1699 22.75Z"
            fill="currentColor"
          />
          <path
            d="M19.1699 12.75H2.66992C2.25992 12.75 1.91992 12.41 1.91992 12C1.91992 11.59 2.25992 11.25 2.66992 11.25H19.1699C20.6899 11.25 21.9199 10.02 21.9199 8.5C21.9199 6.98 20.6899 5.75 19.1699 5.75C17.6499 5.75 16.4199 6.98 16.4199 8.5V9C16.4199 9.41 16.0799 9.75 15.6699 9.75C15.2599 9.75 14.9199 9.41 14.9199 9V8.5C14.9199 6.16 16.8299 4.25 19.1699 4.25C21.5099 4.25 23.4199 6.16 23.4199 8.5C23.4199 10.84 21.5099 12.75 19.1699 12.75Z"
            fill="currentColor"
          />
          <path
            d="M9.97992 9.75012H2.66992C2.25992 9.75012 1.91992 9.41012 1.91992 9.00012C1.91992 8.59012 2.25992 8.25012 2.66992 8.25012H9.97992C11.0499 8.25012 11.9199 7.38012 11.9199 6.31012C11.9199 5.24012 11.0499 4.37012 9.97992 4.37012C8.90992 4.37012 8.03992 5.24012 8.03992 6.31012V6.69012C8.03992 7.10012 7.69992 7.44012 7.28992 7.44012C6.87992 7.44012 6.53992 7.11012 6.53992 6.69012V6.31012C6.53992 4.41012 8.07992 2.87012 9.97992 2.87012C11.8799 2.87012 13.4199 4.41012 13.4199 6.31012C13.4199 8.21012 11.8799 9.75012 9.97992 9.75012Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconWind as IconComponent).keywords = [
  "wind",
  "wind up",
  "tip",
  "steer",
  "hoist",
  "roll",
  "lead",
  "wrap",
  "meander",
  "curve",
];

export default IconWind as IconComponent;
