import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconSpeedometer: FC<IconProps> = ({
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
            opacity={duotone ? "0.4" : "1"}
            d="M19.8099 19.5C21.5799 17.7 22.6699 15.22 22.6699 12.5C22.6699 6.98 18.1899 2.5 12.6699 2.5C7.14992 2.5 2.66992 6.98 2.66992 12.5C2.66992 15.22 3.74992 17.68 5.50992 19.49"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.67 21.5C14.5368 21.5 16.05 19.9867 16.05 18.12C16.05 16.2533 14.5368 14.74 12.67 14.74C10.8033 14.74 9.29004 16.2533 9.29004 18.12C9.29004 19.9867 10.8033 21.5 12.67 21.5Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.9199 12H16.6699C17.4899 12 18.1699 11.33 18.1699 10.5C18.1699 9.68 17.4899 9 16.6699 9C15.8499 9 15.1699 9.67 15.1699 10.5V11.25C15.1699 11.66 15.5099 12 15.9199 12Z"
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
            d="M19.7701 20.3C19.5701 20.3 19.3701 20.2 19.2701 20.1C18.9701 19.8 18.9701 19.3 19.2701 19C20.9701 17.3 21.8701 15 21.8701 12.5C21.8701 7.4 17.7701 3.3 12.6701 3.3C7.57012 3.3 3.47012 7.4 3.47012 12.5C3.47012 14.9 4.37012 17.2 6.07012 19C6.37012 19.3 6.37012 19.8 6.07012 20.1C5.77012 20.4 5.27012 20.4 4.97012 20.1C2.97012 18.1 1.87012 15.4 1.87012 12.6C1.87012 6.6 6.77012 1.7 12.6701 1.7C18.5701 1.7 23.4701 6.5 23.4701 12.5C23.4701 15.3 22.3701 18 20.3701 20C20.1701 20.2 19.9701 20.3 19.7701 20.3Z"
            fill="currentColor"
          />
          <path
            d="M12.6695 22C14.8234 22 16.5695 20.2539 16.5695 18.1C16.5695 15.9461 14.8234 14.2 12.6695 14.2C10.5156 14.2 8.76953 15.9461 8.76953 18.1C8.76953 20.2539 10.5156 22 12.6695 22Z"
            fill="currentColor"
          />
          <path
            d="M16.6699 8.5C15.5699 8.5 14.6699 9.4 14.6699 10.5V11.3C14.6699 12 15.2699 12.5 15.8699 12.5H16.6699C17.7699 12.5 18.6699 11.6 18.6699 10.5C18.6699 9.4 17.7699 8.5 16.6699 8.5Z"
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
            d="M19.8099 20.25C19.6199 20.25 19.4299 20.18 19.2799 20.04C18.9799 19.75 18.9799 19.28 19.2699 18.98C20.9799 17.24 21.9199 14.94 21.9199 12.5C21.9199 7.4 17.7699 3.25 12.6699 3.25C7.56992 3.25 3.41992 7.4 3.41992 12.5C3.41992 14.93 4.34992 17.22 6.04992 18.96C6.33992 19.26 6.32992 19.73 6.03992 20.02C5.73992 20.31 5.26992 20.3 4.97992 20.01C3.00992 17.99 1.91992 15.32 1.91992 12.5C1.91992 6.57 6.73992 1.75 12.6699 1.75C18.5999 1.75 23.4199 6.57 23.4199 12.5C23.4199 15.33 22.3299 18.01 20.3399 20.03C20.1999 20.18 19.9999 20.25 19.8099 20.25Z"
            fill="currentColor"
          />
          <path
            d="M12.67 22C14.8129 22 16.55 20.2629 16.55 18.12C16.55 15.9771 14.8129 14.24 12.67 14.24C10.5272 14.24 8.79004 15.9771 8.79004 18.12C8.79004 20.2629 10.5272 22 12.67 22Z"
            fill="currentColor"
          />
          <path
            d="M16.6699 8.5C15.5699 8.5 14.6699 9.4 14.6699 10.5V11.25C14.6699 11.94 15.2299 12.5 15.9199 12.5H16.6699C17.7699 12.5 18.6699 11.6 18.6699 10.5C18.6699 9.4 17.7699 8.5 16.6699 8.5Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSpeedometer as IconComponentType).keywords = [
  "speedometer",
  "speed indicator",
  "tachograph",
  "odometer",
  "tachometer",
  "meter",
  "speedo",
  "trip",
  "tachometers",
  "cyclometer",
];

export default IconSpeedometer as IconComponentType;
