import { FC } from "react";

const IconGasStation: FC<IconProps> = ({
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
            d="M4.16992 22V5C4.16992 3 5.50992 2 7.16992 2H15.1699C16.8299 2 18.1699 3 18.1699 5V22H4.16992Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.66992 22H19.6699"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.34" : "1"}
            d="M9.05992 9.99998H13.2899C14.3299 9.99998 15.1799 9.49999 15.1799 8.10999V6.87999C15.1799 5.48999 14.3299 4.98999 13.2899 4.98999H9.05992C8.01992 4.98999 7.16992 5.48999 7.16992 6.87999V8.10999C7.16992 9.49999 8.01992 9.99998 9.05992 9.99998Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.16992 13H10.1699"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.34" : "1"}
            d="M18.1699 16.01L22.6699 16V10L20.6699 9"
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
            d="M4.16992 22V5C4.16992 3 5.50992 2 7.16992 2H15.1699C16.8299 2 18.1699 3 18.1699 5V22H4.16992Z"
            fill="currentColor"
          />
          <path
            d="M19.6699 22.75H2.66992C2.25992 22.75 1.91992 22.41 1.91992 22C1.91992 21.59 2.25992 21.25 2.66992 21.25H19.6699C20.0799 21.25 20.4199 21.59 20.4199 22C20.4199 22.41 20.0799 22.75 19.6699 22.75Z"
            fill="currentColor"
          />
          <path
            d="M8.55992 10H13.7899C14.8299 10 15.6799 9.5 15.6799 8.11V6.88C15.6699 5.5 14.8199 5 13.7799 5H8.54992C7.51992 5 6.66992 5.5 6.66992 6.89V8.12C6.66992 9.5 7.51992 10 8.55992 10Z"
            fill="currentColor"
          />
          <path
            d="M10.1699 13.75H7.16992C6.75992 13.75 6.41992 13.41 6.41992 13C6.41992 12.59 6.75992 12.25 7.16992 12.25H10.1699C10.5799 12.25 10.9199 12.59 10.9199 13C10.9199 13.41 10.5799 13.75 10.1699 13.75Z"
            fill="currentColor"
          />
          <path
            d="M23.4199 10V16C23.4199 16.41 23.0899 16.75 22.6699 16.75L18.1699 16.76V15.26L21.9199 15.25V10.46L20.3299 9.67002C19.9599 9.49002 19.8099 9.04002 19.9999 8.66002C20.1799 8.29002 20.6399 8.15002 21.0099 8.33002L23.0099 9.33002C23.2599 9.46002 23.4199 9.72002 23.4199 10Z"
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
            d="M23.0099 9.33L21.0099 8.33C20.6399 8.15 20.1799 8.29 19.9999 8.66C19.8099 9.04 19.9599 9.49 20.3299 9.67L21.9199 10.46V15.25L18.1699 15.26V5C18.1699 3 16.8299 2 15.1699 2H7.16992C5.50992 2 4.16992 3 4.16992 5V21.25H2.66992C2.25992 21.25 1.91992 21.59 1.91992 22C1.91992 22.41 2.25992 22.75 2.66992 22.75H19.6699C20.0799 22.75 20.4199 22.41 20.4199 22C20.4199 21.59 20.0799 21.25 19.6699 21.25H18.1699V16.76L22.6699 16.75C23.0899 16.75 23.4199 16.41 23.4199 16V10C23.4199 9.72 23.2599 9.46 23.0099 9.33ZM6.66992 6.89C6.66992 5.5 7.51992 5 8.55992 5H13.7899C14.8199 5 15.6699 5.5 15.6699 6.89V8.12C15.6699 9.5 14.8199 10 13.7799 10H8.55992C7.51992 10 6.66992 9.5 6.66992 8.11V6.89ZM7.16992 12.25H10.1699C10.5799 12.25 10.9199 12.59 10.9199 13C10.9199 13.41 10.5799 13.75 10.1699 13.75H7.16992C6.75992 13.75 6.41992 13.41 6.41992 13C6.41992 12.59 6.75992 12.25 7.16992 12.25Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconGasStation as IconComponent).keywords = [
  "gas",
  "station",
  "natural gas",
  "gasoline",
  "petrol",
  "gasolene",
  "swash",
  "throttle",
  "gun",
  "gas pedal",
  "blow",
  "place",
  "send",
  "post",
  "base",
  "railroad",
  "railway",
  "points",
  "subway",
  "parking",
];

export default IconGasStation as IconComponent;
