import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconReserve: FC<IconProps> = ({
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
            d="M19.6396 22H5.63965C2.63965 22 2.63965 20.65 2.63965 19V18C2.63965 17.45 3.08965 17 3.63965 17H21.6396C22.1896 17 22.6396 17.45 22.6396 18V19C22.6396 20.65 22.6396 22 19.6396 22Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.3895 13V17H3.93945V13C3.93945 9.16 6.64945 5.95 10.2595 5.18C10.7995 5.06 11.3595 5 11.9395 5H13.3895C13.9695 5 14.5395 5.06 15.0795 5.18C18.6895 5.96 21.3895 9.16 21.3895 13Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.34" : "1"}
            d="M15.1699 4.5C15.1699 4.74 15.1399 4.96 15.0799 5.18C14.5399 5.06 13.9699 5 13.3899 5H11.9399C11.3599 5 10.7999 5.06 10.2599 5.18C10.1999 4.96 10.1699 4.74 10.1699 4.5C10.1699 3.12 11.2899 2 12.6699 2C14.0499 2 15.1699 3.12 15.1699 4.5Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.34" : "1"}
            d="M15.6699 11H9.66992"
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
            d="M22.6396 18V19C22.6396 20.65 22.6396 22 19.6396 22H5.63965C2.63965 22 2.63965 20.65 2.63965 19V18C2.63965 17.45 3.08965 17 3.63965 17H21.6396C22.1896 17 22.6396 17.45 22.6396 18Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21.3895 13V17H3.93945V13C3.93945 9.16 6.64945 5.95 10.2595 5.18C10.7995 5.06 11.3595 5 11.9395 5H13.3895C13.9695 5 14.5395 5.06 15.0795 5.18C18.6895 5.96 21.3895 9.16 21.3895 13Z"
            fill="currentColor"
          />
          <path
            d="M15.1699 4.5C15.1699 4.74 15.1399 4.96 15.0799 5.18C14.5399 5.06 13.9699 5 13.3899 5H11.9399C11.3599 5 10.7999 5.06 10.2599 5.18C10.1999 4.96 10.1699 4.74 10.1699 4.5C10.1699 3.12 11.2899 2 12.6699 2C14.0499 2 15.1699 3.12 15.1699 4.5Z"
            fill="currentColor"
          />
          <path
            d="M15.6699 11.75H9.66992C9.25992 11.75 8.91992 11.41 8.91992 11C8.91992 10.59 9.25992 10.25 9.66992 10.25H15.6699C16.0799 10.25 16.4199 10.59 16.4199 11C16.4199 11.41 16.0799 11.75 15.6699 11.75Z"
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
            d="M22.6396 18V19C22.6396 20.65 22.6396 22 19.6396 22H5.63965C2.63965 22 2.63965 20.65 2.63965 19V18C2.63965 17.45 3.08965 17 3.63965 17H21.6396C22.1896 17 22.6396 17.45 22.6396 18Z"
            fill="currentColor"
          />
          <path
            d="M15.0795 5.18C15.1295 4.98 15.1595 4.79 15.1695 4.58C15.1995 3.42 14.4895 2.4 13.3695 2.1C11.6895 1.64 10.1695 2.9 10.1695 4.5C10.1695 4.74 10.1995 4.96 10.2595 5.18C6.64945 5.95 3.93945 9.16 3.93945 13V14.5C3.93945 15.05 4.38945 15.5 4.93945 15.5H20.3895C20.9395 15.5 21.3895 15.05 21.3895 14.5V13C21.3895 9.16 18.6895 5.96 15.0795 5.18ZM15.6695 11.75H9.66945C9.25945 11.75 8.91945 11.41 8.91945 11C8.91945 10.59 9.25945 10.25 9.66945 10.25H15.6695C16.0795 10.25 16.4195 10.59 16.4195 11C16.4195 11.41 16.0795 11.75 15.6695 11.75Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconReserve as IconComponentType).keywords = [
  "reserve",
  "set aside",
  "retain",
  "allow",
  "substitute",
  "stockpile",
  "hold",
  "appropriate",
  "reticence",
  "modesty",
];

export default IconReserve as IconComponentType;
