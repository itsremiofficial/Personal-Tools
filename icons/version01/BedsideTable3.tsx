import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconBedsideTable3: FC<IconProps> = ({
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
            opacity={duotone ? "0.5" : "1"}
            d="M19 22.0001V20.5001M5 22.0001V20.5001"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M2 10.0001C2 6.22889 2 4.34327 3.17157 3.17169C4.34315 2.00012 6.22876 2.00012 10 2.00012H14C17.7712 2.00012 19.6569 2.00012 20.8284 3.17169C22 4.34327 22 6.22889 22 10.0001V12.0001C22 15.7714 22 17.657 20.8284 18.8285C19.6569 20.0001 17.7712 20.0001 14 20.0001H10C6.22876 20.0001 4.34315 20.0001 3.17157 18.8285C2 17.657 2 15.7714 2 12.0001V10.0001Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M9 15.5001H15"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M9 6.50012H15"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2 11.0001H22"
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
            d="M2 11.0001H22V12.0001C22 15.7714 22 17.657 20.8284 18.8285C20.524 19.133 20.1714 19.3583 19.75 19.5251V22.0001C19.75 22.4143 19.4142 22.7501 19 22.7501C18.5858 22.7501 18.25 22.4143 18.25 22.0001V19.8714C17.1801 20.0001 15.8064 20.0001 14 20.0001H10C8.19364 20.0001 6.81989 20.0001 5.75 19.8714V22.0001C5.75 22.4143 5.41421 22.7501 5 22.7501C4.58579 22.7501 4.25 22.4143 4.25 22.0001V19.5251C3.82861 19.3583 3.47599 19.133 3.17157 18.8285C2 17.657 2 15.7714 2 12.0001V11.0001ZM8.25 15.5001C8.25 15.0859 8.58579 14.7501 9 14.7501H15C15.4142 14.7501 15.75 15.0859 15.75 15.5001C15.75 15.9143 15.4142 16.2501 15 16.2501H9C8.58579 16.2501 8.25 15.9143 8.25 15.5001Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M3.17157 3.17169C2 4.34327 2 6.22889 2 10.0001V11.0001H22V10.0001C22 6.22889 22 4.34327 20.8284 3.17169C19.6569 2.00012 17.7712 2.00012 14 2.00012H10C6.22876 2.00012 4.34315 2.00012 3.17157 3.17169Z"
            fill="currentColor"
          />
          <path
            d="M9 5.75012C8.58579 5.75012 8.25 6.08591 8.25 6.50012C8.25 6.91434 8.58579 7.25012 9 7.25012H15C15.4142 7.25012 15.75 6.91434 15.75 6.50012C15.75 6.08591 15.4142 5.75012 15 5.75012H9Z"
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
            d="M2 10.0001C2 6.22889 2 4.34327 3.17157 3.17169C4.34315 2.00012 6.22876 2.00012 10 2.00012H14C17.7712 2.00012 19.6569 2.00012 20.8284 3.17169C22 4.34327 22 6.22889 22 10.0001V10.2501H2V10.0001ZM8.25 6.50012C8.25 6.08591 8.58579 5.75012 9 5.75012H15C15.4142 5.75012 15.75 6.08591 15.75 6.50012C15.75 6.91434 15.4142 7.25012 15 7.25012H9C8.58579 7.25012 8.25 6.91434 8.25 6.50012Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 11.7501H22V12.0001C22 15.7714 22 17.657 20.8284 18.8285C20.524 19.133 20.1714 19.3583 19.75 19.5251V22.0001C19.75 22.4143 19.4142 22.7501 19 22.7501C18.5858 22.7501 18.25 22.4143 18.25 22.0001V19.8714C17.1801 20.0001 15.8064 20.0001 14 20.0001H10C8.19364 20.0001 6.81989 20.0001 5.75 19.8714V22.0001C5.75 22.4143 5.41421 22.7501 5 22.7501C4.58579 22.7501 4.25 22.4143 4.25 22.0001V19.5251C3.82861 19.3583 3.47599 19.133 3.17157 18.8285C2 17.657 2 15.7714 2 12.0001V11.7501ZM8.25 15.5001C8.25 15.0859 8.58579 14.7501 9 14.7501H15C15.4142 14.7501 15.75 15.0859 15.75 15.5001C15.75 15.9143 15.4142 16.2501 15 16.2501H9C8.58579 16.2501 8.25 15.9143 8.25 15.5001Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBedsideTable3 as IconComponentType).keywords = [
  "bedside",
  "table",
  "3",
  "bed",
  "bunk",
  "crib",
  "staff",
  "ward",
  "deathbed",
  "pain",
  "patient",
  "sick",
  "board",
  "shelve",
  "mesa",
  "set back",
  "remit",
  "put over",
  "postpone",
  "put off",
  "defer",
  "omega",
  "wash out",
  "cut up",
  "pull out",
  "pull up",
  "pull over",
  "pull in",
  "work out",
  "ride down",
];

export default IconBedsideTable3 as IconComponentType;
