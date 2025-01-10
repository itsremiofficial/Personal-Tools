import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconBubble: FC<IconProps> = ({
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
            d="M16.2599 12.26C19.0931 12.26 21.3899 9.96323 21.3899 7.13C21.3899 4.29678 19.0931 2 16.2599 2C13.4267 2 11.1299 4.29678 11.1299 7.13C11.1299 9.96323 13.4267 12.26 16.2599 12.26Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.03018 19.44C8.73122 19.44 10.1102 18.0611 10.1102 16.36C10.1102 14.659 8.73122 13.28 7.03018 13.28C5.32914 13.28 3.9502 14.659 3.9502 16.36C3.9502 18.0611 5.32914 19.44 7.03018 19.44Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17.2895 22C18.7033 22 19.8495 20.8539 19.8495 19.44C19.8495 18.0262 18.7033 16.88 17.2895 16.88C15.8756 16.88 14.7295 18.0262 14.7295 19.44C14.7295 20.8539 15.8756 22 17.2895 22Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
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
            d="M16.2599 1.75C13.2899 1.75 10.8799 4.16 10.8799 7.13C10.8799 10.1 13.2899 12.51 16.2599 12.51C19.2299 12.51 21.6399 10.1 21.6399 7.13C21.6399 4.16 19.2299 1.75 16.2599 1.75Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.03018 13.03C5.20018 13.03 3.7002 14.52 3.7002 16.36C3.7002 18.2 5.19018 19.69 7.03018 19.69C8.86018 19.69 10.3602 18.2 10.3602 16.36C10.3602 14.52 8.86018 13.03 7.03018 13.03Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17.2895 16.62C15.7395 16.62 14.4795 17.88 14.4795 19.43C14.4795 20.98 15.7395 22.24 17.2895 22.24C18.8395 22.24 20.0995 20.98 20.0995 19.43C20.0995 17.88 18.8395 16.62 17.2895 16.62Z"
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
            d="M16.2599 1.75C13.2899 1.75 10.8799 4.16 10.8799 7.13C10.8799 10.1 13.2899 12.51 16.2599 12.51C19.2299 12.51 21.6399 10.1 21.6399 7.13C21.6399 4.16 19.2299 1.75 16.2599 1.75Z"
            fill="currentColor"
          />
          <path
            d="M7.0302 13.03C5.2002 13.03 3.7002 14.52 3.7002 16.36C3.7002 18.2 5.1902 19.69 7.0302 19.69C8.8602 19.69 10.3602 18.2 10.3602 16.36C10.3602 14.52 8.8602 13.03 7.0302 13.03Z"
            fill="currentColor"
          />
          <path
            d="M17.2895 16.62C15.7395 16.62 14.4795 17.88 14.4795 19.43C14.4795 20.98 15.7395 22.24 17.2895 22.24C18.8395 22.24 20.0995 20.98 20.0995 19.43C20.0995 17.88 18.8395 16.62 17.2895 16.62Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBubble as IconComponentType).keywords = [
  "bubble",
  "guggle",
  "ripple",
  "burble",
  "gurgle",
  "belch",
  "burp",
  "eruct",
  "babble",
  "foam",
];

export default IconBubble as IconComponentType;
