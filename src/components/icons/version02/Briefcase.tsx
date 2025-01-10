import { FC } from "react";

const IconBriefcase: FC<IconProps> = ({
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
            d="M8.66975 22H16.6697C20.6897 22 21.4097 20.39 21.6197 18.43L22.3697 10.43C22.6397 7.99 21.9397 6 17.6697 6H7.66975C3.39975 6 2.69975 7.99 2.96975 10.43L3.71975 18.43C3.92975 20.39 4.64975 22 8.66975 22Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.66992 6V5.2C8.66992 3.43 8.66992 2 11.8699 2H13.4699C16.6699 2 16.6699 3.43 16.6699 5.2V6"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M14.6699 13V14C14.6699 14.01 14.6699 14.01 14.6699 14.02C14.6699 15.11 14.6599 16 12.6699 16C10.6899 16 10.6699 15.12 10.6699 14.03V13C10.6699 12 10.6699 12 11.6699 12H13.6699C14.6699 12 14.6699 12 14.6699 13Z"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22.3199 11C20.0099 12.68 17.3699 13.68 14.6699 14.02"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.28906 11.2695C5.53906 12.8095 8.07906 13.7395 10.6691 14.0295"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
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
            d="M21.76 6.98002C20.91 6.04002 19.49 5.57002 17.43 5.57002H17.19V5.53002C17.19 3.85002 17.19 1.77002 13.43 1.77002H11.91C8.14996 1.77002 8.14996 3.86002 8.14996 5.53002V5.58002H7.90996C5.83996 5.58002 4.42996 6.05002 3.57996 6.99002C2.58996 8.09002 2.61996 9.57002 2.71996 10.58L2.72996 10.65L2.82996 11.7C2.83996 11.71 2.85996 11.73 2.87996 11.74C3.20996 11.96 3.54996 12.18 3.90996 12.38C4.04996 12.47 4.19996 12.55 4.34996 12.63C6.05996 13.57 7.93996 14.2 9.84996 14.51C9.93996 15.45 10.35 16.55 12.54 16.55C14.73 16.55 15.16 15.46 15.23 14.49C17.27 14.16 19.24 13.45 21.02 12.41C21.08 12.38 21.12 12.35 21.17 12.32C21.63 12.06 22.06 11.78 22.48 11.47C22.5 11.46 22.52 11.44 22.53 11.42L22.57 11.06L22.62 10.59C22.63 10.53 22.63 10.48 22.64 10.41C22.72 9.40002 22.7 8.02002 21.76 6.98002ZM13.76 13.83C13.76 14.89 13.76 15.05 12.53 15.05C11.3 15.05 11.3 14.86 11.3 13.84V12.58H13.76V13.83ZM9.57996 5.57002V5.53002C9.57996 3.83002 9.57996 3.20002 11.91 3.20002H13.43C15.76 3.20002 15.76 3.84002 15.76 5.53002V5.58002H9.57996V5.57002Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21.1701 12.2999C21.1201 12.3299 21.0701 12.3599 21.0201 12.3899C19.2401 13.4299 17.2701 14.1299 15.2301 14.4699C15.1501 15.4299 14.7301 16.5299 12.5401 16.5299C10.3501 16.5299 9.93008 15.4399 9.85008 14.4899C7.94008 14.1899 6.06008 13.5599 4.35008 12.6099C4.20008 12.5299 4.05008 12.4499 3.91008 12.3599C3.55008 12.1599 3.21008 11.9399 2.88008 11.7199C2.86008 11.7099 2.84008 11.6899 2.83008 11.6799L3.44008 18.1899C3.65008 20.1799 4.47008 22.2299 8.87008 22.2299H16.4901C20.8901 22.2299 21.7101 20.1799 21.9201 18.1799L22.5501 11.3999C22.5401 11.4199 22.5201 11.4399 22.5001 11.4499C22.0701 11.7599 21.6301 12.0499 21.1701 12.2999Z"
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
            d="M21.76 6.98002C20.91 6.04002 19.49 5.57002 17.43 5.57002H17.19V5.53002C17.19 3.85002 17.19 1.77002 13.43 1.77002H11.91C8.14996 1.77002 8.14996 3.86002 8.14996 5.53002V5.58002H7.90996C5.83996 5.58002 4.42996 6.05002 3.57996 6.99002C2.58996 8.09002 2.61996 9.57002 2.71996 10.58L2.72996 10.65L2.80741 11.4633C2.82168 11.6131 2.90234 11.7484 3.02823 11.8307C3.26804 11.9877 3.66938 12.2464 3.90996 12.38C4.04996 12.47 4.19996 12.55 4.34996 12.63C6.05996 13.57 7.93996 14.2 9.84996 14.51C9.93996 15.45 10.35 16.55 12.54 16.55C14.73 16.55 15.16 15.46 15.23 14.49C17.27 14.16 19.24 13.45 21.02 12.41C21.08 12.38 21.12 12.35 21.17 12.32C21.5667 12.0958 21.9783 11.8195 22.3534 11.5489C22.4664 11.4673 22.5387 11.3413 22.5541 11.2028L22.57 11.06L22.62 10.59C22.63 10.53 22.63 10.48 22.64 10.41C22.72 9.40002 22.7 8.02002 21.76 6.98002ZM13.76 13.83C13.76 14.89 13.76 15.05 12.53 15.05C11.3 15.05 11.3 14.86 11.3 13.84V12.58H13.76V13.83ZM9.57996 5.57002V5.53002C9.57996 3.83002 9.57996 3.20002 11.91 3.20002H13.43C15.76 3.20002 15.76 3.84002 15.76 5.53002V5.58002H9.57996V5.57002Z"
            fill="currentColor"
          />
          <path
            d="M21.5432 13.7341C21.8968 13.5659 22.3041 13.8462 22.2687 14.2361L21.9098 18.19C21.6998 20.19 20.8798 22.23 16.4798 22.23H8.85977C4.45976 22.23 3.63977 20.19 3.42977 18.2L3.08905 14.4521C3.05401 14.0667 3.45197 13.7867 3.8046 13.9463C4.94402 14.4618 7.04716 15.3764 8.34633 15.7166C8.51064 15.7597 8.64354 15.8773 8.71548 16.0311C9.32245 17.3292 10.6389 18.02 12.5398 18.02C14.4219 18.02 15.7549 17.3026 16.3639 16.0013C16.436 15.8474 16.569 15.7298 16.7334 15.6865C18.1129 15.3235 20.3515 14.3012 21.5432 13.7341Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBriefcase as IconComponent).keywords = [
  "briefcase",
  "valise",
  "suitcase",
  "luggage",
  "baggage",
  "backpack",
  "satchel",
  "box",
  "purse",
  "bag",
];

export default IconBriefcase as IconComponent;
