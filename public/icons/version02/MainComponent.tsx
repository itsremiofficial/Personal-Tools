import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconMainComponent: FC<IconProps> = ({
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
            d="M21.6197 14.55L15.2297 20.94C13.8297 22.34 11.5297 22.34 10.1197 20.94L3.72969 14.55C2.32969 13.15 2.32969 10.85 3.72969 9.44001L10.1197 3.05C11.5197 1.65 13.8197 1.65 15.2297 3.05L21.6197 9.44001C23.0197 10.85 23.0197 13.15 21.6197 14.55Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M6.91992 6.25L18.4199 17.75"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.4199 6.25L6.91992 17.75"
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
            d="M21.6199 14.55L18.9499 17.22L17.8899 18.28L15.2199 20.95C13.8199 22.35 11.5199 22.35 10.1199 20.95L7.44993 18.28L6.38994 17.22L3.71992 14.55C2.31992 13.15 2.31992 10.85 3.71992 9.45002L6.38994 6.78001L7.44993 5.72001L10.1199 3.05C11.5199 1.65 13.8199 1.65 15.2199 3.05L17.8899 5.72001L18.9499 6.78001L21.6199 9.45002C23.0199 10.85 23.0199 13.15 21.6199 14.55Z"
            fill="currentColor"
          />
          <path
            d="M13.7296 12L18.9496 17.22L17.8896 18.28L12.6696 13.06L7.44965 18.28L6.38965 17.22L11.6096 12L6.38965 6.77997L7.44965 5.71997L12.6696 10.94L17.8896 5.71997L18.9496 6.77997L13.7296 12Z"
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
            d="M17.1797 5.01L15.2197 3.05C13.8197 1.65 11.5197 1.65 10.1197 3.05L8.15969 5.01C7.76969 5.4 7.76969 6.04 8.15969 6.43L11.9697 10.24C12.3597 10.63 12.9897 10.63 13.3797 10.24L17.1897 6.43C17.5697 6.04 17.5697 5.4 17.1797 5.01Z"
            fill="currentColor"
          />
          <path
            d="M5.67992 7.49001L3.71992 9.45001C2.31992 10.85 2.31992 13.15 3.71992 14.55L5.67992 16.51C6.06992 16.9 6.69992 16.9 7.08992 16.51L10.8999 12.7C11.2899 12.31 11.2899 11.68 10.8999 11.29L7.09992 7.49001C6.70992 7.10001 6.06992 7.10001 5.67992 7.49001Z"
            fill="currentColor"
          />
          <path
            d="M21.62 9.45001L19.66 7.49001C19.27 7.10001 18.64 7.10001 18.25 7.49001L14.44 11.3C14.05 11.69 14.05 12.32 14.44 12.71L18.25 16.52C18.64 16.91 19.27 16.91 19.66 16.52L21.62 14.56C23.02 13.15 23.02 10.85 21.62 9.45001Z"
            fill="currentColor"
          />
          <path
            d="M8.15997 18.99L10.12 20.95C11.52 22.35 13.82 22.35 15.22 20.95L17.18 18.99C17.57 18.6 17.57 17.97 17.18 17.58L13.37 13.77C12.98 13.38 12.35 13.38 11.96 13.77L8.14997 17.58C7.76997 17.96 7.76997 18.6 8.15997 18.99Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMainComponent as IconComponentType).keywords = [
  "main",
  "component",
  "principal",
  "primary",
  "important",
  "independent",
  "chief",
  "intense",
  "briny",
  "of import",
  "prime",
  "constituent",
  "part",
  "fractional",
  "portion",
  "factor",
  "ingredient",
  "element",
  "component part",
  "piece",
];

export default IconMainComponent as IconComponentType;
