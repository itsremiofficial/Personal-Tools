import { FC } from "react";

const IconExternalDrive: FC<IconProps> = ({
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
            d="M16.6699 22H9.66992C6.66992 22 4.66992 20 4.66992 17V7C4.66992 4 6.66992 2 9.66992 2H16.6699C19.6699 2 21.6699 4 21.6699 7V17C21.6699 20 19.6699 22 16.6699 22Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.66992 15H21.6699"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.66992 12H8.66992"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.66992 9.5H8.66992"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.66992 7H8.66992"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17.1644 18.25H17.1734"
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
            d="M21.6699 6V13.25C21.6699 13.8023 21.2222 14.25 20.6699 14.25H5.66992C5.11764 14.25 4.66992 13.8023 4.66992 13.25V6C4.66992 3.79 6.45992 2 8.66992 2H17.6699C19.8799 2 21.6699 3.79 21.6699 6Z"
            fill="currentColor"
          />
          <path
            d="M8.66992 12.75H7.66992C7.25992 12.75 6.91992 12.41 6.91992 12C6.91992 11.59 7.25992 11.25 7.66992 11.25H8.66992C9.07992 11.25 9.41992 11.59 9.41992 12C9.41992 12.41 9.07992 12.75 8.66992 12.75Z"
            fill="currentColor"
          />
          <path
            d="M8.66992 10.25H7.66992C7.25992 10.25 6.91992 9.91 6.91992 9.5C6.91992 9.09 7.25992 8.75 7.66992 8.75H8.66992C9.07992 8.75 9.41992 9.09 9.41992 9.5C9.41992 9.91 9.07992 10.25 8.66992 10.25Z"
            fill="currentColor"
          />
          <path
            d="M8.66992 7.75H7.66992C7.25992 7.75 6.91992 7.41 6.91992 7C6.91992 6.59 7.25992 6.25 7.66992 6.25H8.66992C9.07992 6.25 9.41992 6.59 9.41992 7C9.41992 7.41 9.07992 7.75 8.66992 7.75Z"
            fill="currentColor"
          />
          <path
            d="M5.66992 15.75C5.11764 15.75 4.66992 16.1977 4.66992 16.75V18C4.66992 20.21 6.45992 22 8.66992 22H17.6699C19.8799 22 21.6699 20.21 21.6699 18V16.75C21.6699 16.1977 21.2222 15.75 20.6699 15.75H5.66992ZM18.3799 19.46C18.1899 19.64 17.9299 19.75 17.6699 19.75C17.4099 19.75 17.1499 19.64 16.9599 19.46C16.7799 19.27 16.6699 19.01 16.6699 18.75C16.6699 18.49 16.7799 18.23 16.9599 18.04C17.3299 17.67 17.9999 17.67 18.3799 18.04C18.5599 18.23 18.6699 18.49 18.6699 18.75C18.6699 19.01 18.5599 19.27 18.3799 19.46Z"
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
            d="M17.6699 2H8.66992C6.45992 2 4.66992 3.79 4.66992 6V13.25C4.66992 13.8 5.11992 14.25 5.66992 14.25H20.6699C21.2199 14.25 21.6699 13.8 21.6699 13.25V6C21.6699 3.79 19.8799 2 17.6699 2ZM8.66992 12.75H7.66992C7.25992 12.75 6.91992 12.41 6.91992 12C6.91992 11.59 7.25992 11.25 7.66992 11.25H8.66992C9.07992 11.25 9.41992 11.59 9.41992 12C9.41992 12.41 9.07992 12.75 8.66992 12.75ZM8.66992 10.25H7.66992C7.25992 10.25 6.91992 9.91 6.91992 9.5C6.91992 9.09 7.25992 8.75 7.66992 8.75H8.66992C9.07992 8.75 9.41992 9.09 9.41992 9.5C9.41992 9.91 9.07992 10.25 8.66992 10.25ZM8.66992 7.75H7.66992C7.25992 7.75 6.91992 7.41 6.91992 7C6.91992 6.59 7.25992 6.25 7.66992 6.25H8.66992C9.07992 6.25 9.41992 6.59 9.41992 7C9.41992 7.41 9.07992 7.75 8.66992 7.75Z"
            fill="currentColor"
          />
          <path
            d="M4.66992 16.75V18C4.66992 20.21 6.45992 22 8.66992 22H17.6699C19.8799 22 21.6699 20.21 21.6699 18V16.75C21.6699 16.2 21.2199 15.75 20.6699 15.75H5.66992C5.11992 15.75 4.66992 16.2 4.66992 16.75ZM18.3799 19.46C18.1899 19.64 17.9299 19.75 17.6699 19.75C17.4099 19.75 17.1499 19.64 16.9599 19.46C16.7799 19.27 16.6699 19.01 16.6699 18.75C16.6699 18.49 16.7799 18.23 16.9599 18.04C17.3299 17.67 17.9999 17.67 18.3799 18.04C18.5599 18.23 18.6699 18.49 18.6699 18.75C18.6699 19.01 18.5599 19.27 18.3799 19.46Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconExternalDrive as IconComponent).keywords = [
  "external",
  "drive",
  "exogenous",
  "international",
  "outside",
  "outer",
  "outward",
  "extrinsic",
  "extraneous",
  "foreign",
  "internal",
  "force",
  "effort",
  "driving force",
  "labour",
  "get",
  "push",
  "cause",
  "beat back",
  "movement",
];

export default IconExternalDrive as IconComponent;
