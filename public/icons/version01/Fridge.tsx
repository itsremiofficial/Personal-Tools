import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconFridge: FC<IconProps> = ({
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
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 10.0001C4 6.22889 4 4.34327 5.17157 3.17169C6.34315 2.00012 8.22876 2.00012 12 2.00012C15.7712 2.00012 17.6569 2.00012 18.8284 3.17169C20 4.34327 20 6.22889 20 10.0001V13.0001C20 16.7714 20 18.657 18.8284 19.8285C17.6569 21.0001 15.7712 21.0001 12 21.0001C8.22876 21.0001 6.34315 21.0001 5.17157 19.8285C4 18.657 4 16.7714 4 13.0001V10.0001Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M17 21.0001V22.0001H16V21.0001M8 21.0001V22.0001H7V21.0001"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M20 11.5001H4"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M17 7.00012L17 9.00012"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M17 14.0001L17 16.0001"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
        </svg>
      ) : duotone ? (
        <svg
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 11.5001V13.0001C4 16.7714 4 18.657 5.17157 19.8285C5.47599 20.133 5.82861 20.3583 6.25 20.5251V22.0001C6.25 22.4143 6.58579 22.7501 7 22.7501H8C8.41421 22.7501 8.75 22.4143 8.75 22.0001V20.9535C9.64461 21.0001 10.7124 21.0001 12 21.0001C13.2876 21.0001 14.3554 21.0001 15.25 20.9535V22.0001C15.25 22.4143 15.5858 22.7501 16 22.7501H17C17.4142 22.7501 17.75 22.4143 17.75 22.0001V20.5251C18.1714 20.3583 18.524 20.133 18.8284 19.8285C20 18.657 20 16.7714 20 13.0001V11.5001H4ZM17 13.2501C17.4142 13.2501 17.75 13.5859 17.75 14.0001V16.0001C17.75 16.4143 17.4142 16.7501 17 16.7501C16.5858 16.7501 16.25 16.4143 16.25 16.0001V14.0001C16.25 13.5859 16.5858 13.2501 17 13.2501Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M4 10.0001C4 6.22889 4 4.34327 5.17157 3.17169C6.34315 2.00012 8.22876 2.00012 12 2.00012C15.7712 2.00012 17.6569 2.00012 18.8284 3.17169C20 4.34327 20 6.22889 20 10.0001V11.5001H4V10.0001Z"
            fill="currentColor"
          />
          <path
            d="M17.75 7.00012C17.75 6.58591 17.4142 6.25012 17 6.25012C16.5858 6.25012 16.25 6.58591 16.25 7.00012V9.00012C16.25 9.41434 16.5858 9.75012 17 9.75012C17.4142 9.75012 17.75 9.41434 17.75 9.00012V7.00012Z"
            fill="currentColor"
          />
        </svg>
      ) : (
        <svg
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.17157 3.17169C4 4.34327 4 6.22889 4 10.0001V10.7501H20V10.0001C20 6.22889 20 4.34327 18.8284 3.17169C17.6569 2.00012 15.7712 2.00012 12 2.00012C8.22876 2.00012 6.34315 2.00012 5.17157 3.17169ZM17 6.25012C17.4142 6.25012 17.75 6.58591 17.75 7.00012V9.00012C17.75 9.41434 17.4142 9.75012 17 9.75012C16.5858 9.75012 16.25 9.41434 16.25 9.00012V7.00012C16.25 6.58591 16.5858 6.25012 17 6.25012Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 12.2501V13.0001C4 16.7714 4 18.657 5.17157 19.8285C5.47599 20.133 5.82861 20.3583 6.25 20.5251V22.0001C6.25 22.4143 6.58579 22.7501 7 22.7501H8C8.41421 22.7501 8.75 22.4143 8.75 22.0001V20.9535C9.64461 21.0001 10.7124 21.0001 12 21.0001C13.2876 21.0001 14.3554 21.0001 15.25 20.9535V22.0001C15.25 22.4143 15.5858 22.7501 16 22.7501H17C17.4142 22.7501 17.75 22.4143 17.75 22.0001V20.5251C18.1714 20.3583 18.524 20.133 18.8284 19.8285C20 18.657 20 16.7714 20 13.0001V12.2501H4ZM17 13.2501C17.4142 13.2501 17.75 13.5859 17.75 14.0001V16.0001C17.75 16.4143 17.4142 16.7501 17 16.7501C16.5858 16.7501 16.25 16.4143 16.25 16.0001V14.0001C16.25 13.5859 16.5858 13.2501 17 13.2501Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconFridge as IconComponentType).keywords = [
  "fridge",
  "electric refrigerator",
  "refrigerator",
  "freezer",
  "refrigeration",
  "icebox",
  "cooler",
  "ice",
  "freeze",
  "coke",
];

export default IconFridge as IconComponentType;