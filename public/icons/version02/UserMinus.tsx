import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconUserMinus: FC<IconProps> = ({
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
            d="M12.6699 12C15.4313 12 17.6699 9.76142 17.6699 7C17.6699 4.23858 15.4313 2 12.6699 2C9.9085 2 7.66992 4.23858 7.66992 7C7.66992 9.76142 9.9085 12 12.6699 12Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M4.08008 22C4.08008 18.13 7.93011 15 12.6701 15C13.6301 15 14.5601 15.13 15.4301 15.37"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.6699 18C22.6699 18.32 22.6299 18.63 22.5499 18.93C22.4599 19.33 22.2999 19.72 22.0899 20.06C21.3999 21.22 20.1299 22 18.6699 22C17.6399 22 16.7099 21.61 16.0099 20.97C15.7099 20.71 15.4499 20.4 15.2499 20.06C14.8799 19.46 14.6699 18.75 14.6699 18C14.6699 16.92 15.0999 15.93 15.7999 15.21C16.5299 14.46 17.5499 14 18.6699 14C19.8499 14 20.9199 14.51 21.6399 15.33C22.2799 16.04 22.6699 16.98 22.6699 18Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.1597 17.98H17.1797"
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
            d="M21.6399 14.33C20.9199 13.51 19.8499 13 18.6699 13C17.5499 13 16.5299 13.46 15.7999 14.21C15.0999 14.93 14.6699 15.92 14.6699 17C14.6699 17.75 14.8799 18.46 15.2499 19.06C15.4499 19.4 15.7099 19.71 16.0099 19.97C16.7099 20.61 17.6399 21 18.6699 21C20.1299 21 21.3999 20.22 22.0899 19.06C22.2999 18.72 22.4599 18.33 22.5499 17.93C22.6299 17.63 22.6699 17.32 22.6699 17C22.6699 15.98 22.2799 15.04 21.6399 14.33ZM20.1699 17.73H17.1799C16.7699 17.73 16.4299 17.39 16.4299 16.98C16.4299 16.57 16.7699 16.23 17.1799 16.23H20.1699C20.5799 16.23 20.9199 16.57 20.9199 16.98C20.9199 17.39 20.5799 17.73 20.1699 17.73Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21.7601 21.5C21.7601 21.78 21.5401 22 21.2601 22H4.08008C3.80008 22 3.58008 21.78 3.58008 21.5C3.58008 17.36 7.6601 14 12.6701 14C13.7001 14 14.7001 14.14 15.6201 14.41C15.0301 15.11 14.6701 16.02 14.6701 17C14.6701 17.75 14.8801 18.46 15.2501 19.06C15.4501 19.4 15.7101 19.71 16.0101 19.97C16.7101 20.61 17.6401 21 18.6701 21C19.7901 21 20.8001 20.54 21.5201 19.8C21.6801 20.34 21.7601 20.91 21.7601 21.5Z"
            fill="currentColor"
          />
          <path
            d="M12.6699 12C15.4313 12 17.6699 9.76142 17.6699 7C17.6699 4.23858 15.4313 2 12.6699 2C9.9085 2 7.66992 4.23858 7.66992 7C7.66992 9.76142 9.9085 12 12.6699 12Z"
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
            d="M12.6701 14C7.66008 14 3.58008 17.36 3.58008 21.5C3.58008 21.78 3.80008 22 4.08008 22H21.2601C21.5401 22 21.7601 21.78 21.7601 21.5C21.7601 17.36 17.6801 14 12.6701 14Z"
            fill="currentColor"
          />
          <path
            d="M16.3799 3.66C15.4799 2.64 14.1399 2 12.6699 2C11.2699 2 9.98992 2.57 9.07992 3.51C8.20992 4.41 7.66992 5.65 7.66992 7C7.66992 7.94 7.92992 8.82 8.39992 9.57C8.64992 10 8.96992 10.39 9.34992 10.71C10.2199 11.51 11.3799 12 12.6699 12C14.4999 12 16.0799 11.02 16.9499 9.57C17.2099 9.14 17.4099 8.66 17.5199 8.16C17.6199 7.79 17.6699 7.4 17.6699 7C17.6699 5.72 17.1799 4.55 16.3799 3.66ZM14.5399 7.92H10.7999C10.2799 7.92 9.85992 7.5 9.85992 6.98C9.85992 6.46 10.2799 6.04 10.7999 6.04H14.5399C15.0599 6.04 15.4799 6.46 15.4799 6.98C15.4799 7.5 15.0599 7.92 14.5399 7.92Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconUserMinus as IconComponentType).keywords = [
  "user",
  "minus",
  "exploiter",
  "enjoyer",
  "drug user",
  "substance abuser",
  "customer",
  "client",
  "employer",
  "consumer",
  "employee",
  "subtraction",
  "negative",
  "disadvantageous",
  "harmful",
  "sans",
  "min",
  "least",
  "unary",
  "nec",
];

export default IconUserMinus as IconComponentType;