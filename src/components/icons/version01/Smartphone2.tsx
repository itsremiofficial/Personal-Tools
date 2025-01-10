import { FC } from "react";

const IconSmartphone2: FC<IconProps> = ({
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
            d="M4 10.0001C4 6.22889 4 4.34327 5.17157 3.17169C6.34315 2.00012 8.22876 2.00012 12 2.00012C15.7712 2.00012 17.6569 2.00012 18.8284 3.17169C20 4.34327 20 6.22889 20 10.0001V14.0001C20 17.7714 20 19.657 18.8284 20.8285C17.6569 22.0001 15.7712 22.0001 12 22.0001C8.22876 22.0001 6.34315 22.0001 5.17157 20.8285C4 19.657 4 17.7714 4 14.0001V10.0001Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M15 5.00012H9"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <circle
            opacity={duotone ? "0.5" : "1"}
            cx="12"
            cy="17.0001"
            r="2"
            stroke="currentColor"
            strokeWidth={width}
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
            opacity={duotone ? "0.5" : "1"}
            d="M5.17157 3.17169C4 4.34327 4 6.22889 4 10.0001V14.0001C4 17.7714 4 19.657 5.17157 20.8285C6.34315 22.0001 8.22876 22.0001 12 22.0001C15.7712 22.0001 17.6569 22.0001 18.8284 20.8285C20 19.657 20 17.7714 20 14.0001V10.0001C20 6.22889 20 4.34327 18.8284 3.17169C17.6569 2.00012 15.7712 2.00012 12 2.00012C8.22876 2.00012 6.34315 2.00012 5.17157 3.17169Z"
            fill="currentColor"
          />
          <path
            d="M9 4.25012C8.58579 4.25012 8.25 4.58591 8.25 5.00012C8.25 5.41434 8.58579 5.75012 9 5.75012H15C15.4142 5.75012 15.75 5.41434 15.75 5.00012C15.75 4.58591 15.4142 4.25012 15 4.25012H9Z"
            fill="currentColor"
          />
          <path
            d="M12 19.0001C13.1046 19.0001 14 18.1047 14 17.0001C14 15.8956 13.1046 15.0001 12 15.0001C10.8954 15.0001 10 15.8956 10 17.0001C10 18.1047 10.8954 19.0001 12 19.0001Z"
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
            d="M5.17157 3.17169C4 4.34327 4 6.22889 4 10.0001V14.0001C4 17.7714 4 19.657 5.17157 20.8285C6.34315 22.0001 8.22876 22.0001 12 22.0001C15.7712 22.0001 17.6569 22.0001 18.8284 20.8285C20 19.657 20 17.7714 20 14.0001V10.0001C20 6.22889 20 4.34327 18.8284 3.17169C17.6569 2.00012 15.7712 2.00012 12 2.00012C8.22876 2.00012 6.34315 2.00012 5.17157 3.17169ZM9 4.25012C8.58579 4.25012 8.25 4.58591 8.25 5.00012C8.25 5.41434 8.58579 5.75012 9 5.75012H15C15.4142 5.75012 15.75 5.41434 15.75 5.00012C15.75 4.58591 15.4142 4.25012 15 4.25012H9ZM12 19.0001C13.1046 19.0001 14 18.1047 14 17.0001C14 15.8956 13.1046 15.0001 12 15.0001C10.8954 15.0001 10 15.8956 10 17.0001C10 18.1047 10.8954 19.0001 12 19.0001Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSmartphone2 as IconComponent).keywords = [
  "smartphone",
  "2",
  "intelligent",
  "smart",
  "screenphone",
  "featurephone",
  "superphone",
  "touchphone",
  "mobile device",
  "cellular phone",
  "smartwatch",
  "wireless network",
  "sign on",
  "sign off",
  "put through",
  "back up",
  "ring up",
  "call up",
  "hang up",
  "read out",
];

export default IconSmartphone2 as IconComponent;
