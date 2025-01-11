import { FC } from "react";

const IconScanBarcode: FC<IconProps> = ({
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
            d="M2.66992 9V6.5C2.66992 4.01 4.67992 2 7.16992 2H9.66992"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.6699 2H18.1699C20.6599 2 22.6699 4.01 22.6699 6.5V9"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.6699 16V17.5C22.6699 19.99 20.6599 22 18.1699 22H16.6699"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.66992 22H7.16992C4.67992 22 2.66992 19.99 2.66992 17.5V15"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M11.1699 7V9C11.1699 10 10.6699 10.5 9.66992 10.5H7.66992C6.66992 10.5 6.16992 10 6.16992 9V7C6.16992 6 6.66992 5.5 7.66992 5.5H9.66992C10.6699 5.5 11.1699 6 11.1699 7Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19.1699 7V9C19.1699 10 18.6699 10.5 17.6699 10.5H15.6699C14.6699 10.5 14.1699 10 14.1699 9V7C14.1699 6 14.6699 5.5 15.6699 5.5H17.6699C18.6699 5.5 19.1699 6 19.1699 7Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M11.1699 15V17C11.1699 18 10.6699 18.5 9.66992 18.5H7.66992C6.66992 18.5 6.16992 18 6.16992 17V15C6.16992 14 6.66992 13.5 7.66992 13.5H9.66992C10.6699 13.5 11.1699 14 11.1699 15Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19.1699 15V17C19.1699 18 18.6699 18.5 17.6699 18.5H15.6699C14.6699 18.5 14.1699 18 14.1699 17V15C14.1699 14 14.6699 13.5 15.6699 13.5H17.6699C18.6699 13.5 19.1699 14 19.1699 15Z"
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
            d="M2.66992 9.75C2.25992 9.75 1.91992 9.41 1.91992 9V6.5C1.91992 3.6 4.27992 1.25 7.16992 1.25H9.66992C10.0799 1.25 10.4199 1.59 10.4199 2C10.4199 2.41 10.0799 2.75 9.66992 2.75H7.16992C5.09992 2.75 3.41992 4.43 3.41992 6.5V9C3.41992 9.41 3.07992 9.75 2.66992 9.75Z"
            fill="currentColor"
          />
          <path
            d="M22.6699 9.75C22.2599 9.75 21.9199 9.41 21.9199 9V6.5C21.9199 4.43 20.2399 2.75 18.1699 2.75H15.6699C15.2599 2.75 14.9199 2.41 14.9199 2C14.9199 1.59 15.2599 1.25 15.6699 1.25H18.1699C21.0599 1.25 23.4199 3.6 23.4199 6.5V9C23.4199 9.41 23.0799 9.75 22.6699 9.75Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M18.1699 22.75H16.6699C16.2599 22.75 15.9199 22.41 15.9199 22C15.9199 21.59 16.2599 21.25 16.6699 21.25H18.1699C20.2399 21.25 21.9199 19.57 21.9199 17.5V16C21.9199 15.59 22.2599 15.25 22.6699 15.25C23.0799 15.25 23.4199 15.59 23.4199 16V17.5C23.4199 20.4 21.0599 22.75 18.1699 22.75Z"
            fill="currentColor"
          />
          <path
            d="M9.66992 22.75H7.16992C4.27992 22.75 1.91992 20.4 1.91992 17.5V15C1.91992 14.59 2.25992 14.25 2.66992 14.25C3.07992 14.25 3.41992 14.59 3.41992 15V17.5C3.41992 19.57 5.09992 21.25 7.16992 21.25H9.66992C10.0799 21.25 10.4199 21.59 10.4199 22C10.4199 22.41 10.0799 22.75 9.66992 22.75Z"
            fill="currentColor"
          />
          <path
            d="M9.66992 5.25H7.66992C6.52992 5.25 5.91992 5.85 5.91992 7V9C5.91992 10.15 6.52992 10.75 7.66992 10.75H9.66992C10.8099 10.75 11.4199 10.15 11.4199 9V7C11.4199 5.85 10.8099 5.25 9.66992 5.25Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17.6699 5.25H15.6699C14.5299 5.25 13.9199 5.85 13.9199 7V9C13.9199 10.15 14.5299 10.75 15.6699 10.75H17.6699C18.8099 10.75 19.4199 10.15 19.4199 9V7C19.4199 5.85 18.8099 5.25 17.6699 5.25Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.66992 13.25H7.66992C6.52992 13.25 5.91992 13.85 5.91992 15V17C5.91992 18.15 6.52992 18.75 7.66992 18.75H9.66992C10.8099 18.75 11.4199 18.15 11.4199 17V15C11.4199 13.85 10.8099 13.25 9.66992 13.25Z"
            fill="currentColor"
          />
          <path
            d="M17.6699 13.25H15.6699C14.5299 13.25 13.9199 13.85 13.9199 15V17C13.9199 18.15 14.5299 18.75 15.6699 18.75H17.6699C18.8099 18.75 19.4199 18.15 19.4199 17V15C19.4199 13.85 18.8099 13.25 17.6699 13.25Z"
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
            d="M2.66992 9.75C2.25992 9.75 1.91992 9.41 1.91992 9V6.5C1.91992 3.6 4.27992 1.25 7.16992 1.25H9.66992C10.0799 1.25 10.4199 1.59 10.4199 2C10.4199 2.41 10.0799 2.75 9.66992 2.75H7.16992C5.09992 2.75 3.41992 4.43 3.41992 6.5V9C3.41992 9.41 3.07992 9.75 2.66992 9.75Z"
            fill="currentColor"
          />
          <path
            d="M22.6699 9.75C22.2599 9.75 21.9199 9.41 21.9199 9V6.5C21.9199 4.43 20.2399 2.75 18.1699 2.75H15.6699C15.2599 2.75 14.9199 2.41 14.9199 2C14.9199 1.59 15.2599 1.25 15.6699 1.25H18.1699C21.0599 1.25 23.4199 3.6 23.4199 6.5V9C23.4199 9.41 23.0799 9.75 22.6699 9.75Z"
            fill="currentColor"
          />
          <path
            d="M18.1699 22.75H16.6699C16.2599 22.75 15.9199 22.41 15.9199 22C15.9199 21.59 16.2599 21.25 16.6699 21.25H18.1699C20.2399 21.25 21.9199 19.57 21.9199 17.5V16C21.9199 15.59 22.2599 15.25 22.6699 15.25C23.0799 15.25 23.4199 15.59 23.4199 16V17.5C23.4199 20.4 21.0599 22.75 18.1699 22.75Z"
            fill="currentColor"
          />
          <path
            d="M9.66992 22.75H7.16992C4.27992 22.75 1.91992 20.4 1.91992 17.5V15C1.91992 14.59 2.25992 14.25 2.66992 14.25C3.07992 14.25 3.41992 14.59 3.41992 15V17.5C3.41992 19.57 5.09992 21.25 7.16992 21.25H9.66992C10.0799 21.25 10.4199 21.59 10.4199 22C10.4199 22.41 10.0799 22.75 9.66992 22.75Z"
            fill="currentColor"
          />
          <path
            d="M9.66992 5.25H7.66992C6.52992 5.25 5.91992 5.85 5.91992 7V9C5.91992 10.15 6.52992 10.75 7.66992 10.75H9.66992C10.8099 10.75 11.4199 10.15 11.4199 9V7C11.4199 5.85 10.8099 5.25 9.66992 5.25Z"
            fill="currentColor"
          />
          <path
            d="M17.6699 5.25H15.6699C14.5299 5.25 13.9199 5.85 13.9199 7V9C13.9199 10.15 14.5299 10.75 15.6699 10.75H17.6699C18.8099 10.75 19.4199 10.15 19.4199 9V7C19.4199 5.85 18.8099 5.25 17.6699 5.25Z"
            fill="currentColor"
          />
          <path
            d="M9.66992 13.25H7.66992C6.52992 13.25 5.91992 13.85 5.91992 15V17C5.91992 18.15 6.52992 18.75 7.66992 18.75H9.66992C10.8099 18.75 11.4199 18.15 11.4199 17V15C11.4199 13.85 10.8099 13.25 9.66992 13.25Z"
            fill="currentColor"
          />
          <path
            d="M17.6699 13.25H15.6699C14.5299 13.25 13.9199 13.85 13.9199 15V17C13.9199 18.15 14.5299 18.75 15.6699 18.75H17.6699C18.8099 18.75 19.4199 18.15 19.4199 17V15C19.4199 13.85 18.8099 13.25 17.6699 13.25Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconScanBarcode as IconComponent).keywords = [
  "scan",
  "barcode",
  "read",
  "run down",
  "glance over",
  "skim",
  "rake",
  "examine",
  "inspect",
  "finding",
  "scrutinize",
  "bar",
  "barcoding",
  "barcoded",
  "scanner",
  "scannable",
  "scanning",
  "scanners",
  "microprint",
];

export default IconScanBarcode as IconComponent;