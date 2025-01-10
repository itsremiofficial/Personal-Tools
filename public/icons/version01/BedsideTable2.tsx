import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconBedsideTable2: FC<IconProps> = ({
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
            d="M13 17.0001C13 17.5524 12.5523 18.0001 12 18.0001C11.4477 18.0001 11 17.5524 11 17.0001C11 16.4478 11.4477 16.0001 12 16.0001C12.5523 16.0001 13 16.4478 13 17.0001Z"
            fill="currentColor"
          />
          <path
            d="M2 10.0001C2 6.22889 2 4.34327 3.17157 3.17169C4.34315 2.00012 6.22876 2.00012 10 2.00012H14C17.7712 2.00012 19.6569 2.00012 20.8284 3.17169C22 4.34327 22 6.22889 22 10.0001V12.0001C22 15.7714 22 17.657 20.8284 18.8285C19.6569 20.0001 17.7712 20.0001 14 20.0001H10C6.22876 20.0001 4.34315 20.0001 3.17157 18.8285C2 17.657 2 15.7714 2 12.0001V10.0001Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2 14.0001H22"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2 8.00012H22"
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
            d="M3.17149 18.8286C2.32795 17.985 2.09176 16.7713 2.02563 14.7501L1.99976 14.0001H21.9742V14.7501C21.9081 16.7713 21.6719 17.985 20.8283 18.8286C20.5239 19.133 20.1713 19.3583 19.7499 19.5251V22.0001C19.7499 22.4143 19.4141 22.7501 18.9999 22.7501C18.5857 22.7501 18.2499 22.4143 18.2499 22.0001V19.8714C17.18 20.0001 15.8063 20.0001 13.9999 20.0001H9.99992C8.19356 20.0001 6.81981 20.0001 5.74992 19.8714V22.0001C5.74992 22.4143 5.41413 22.7501 4.99992 22.7501C4.5857 22.7501 4.24992 22.4143 4.24992 22.0001V19.5251C3.82853 19.3583 3.47591 19.133 3.17149 18.8286ZM12.9999 17.0001C12.9999 17.5524 12.5522 18.0001 11.9999 18.0001C11.4476 18.0001 10.9999 17.5524 10.9999 17.0001C10.9999 16.4478 11.4476 16.0001 11.9999 16.0001C12.5522 16.0001 12.9999 16.4478 12.9999 17.0001Z"
            fill="currentColor"
          />
          <path
            d="M3.17149 3.17169C2.32795 4.01524 2.09177 5.22894 2.02563 7.25012L1.99976 8.00012H21.9998L21.9742 7.25012C21.9081 5.22894 21.6719 4.01524 20.8283 3.17169C19.6568 2.00012 17.7712 2.00012 13.9999 2.00012H9.99992C6.22868 2.00012 4.34306 2.00012 3.17149 3.17169Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 10.0001C2 9.55819 2.00189 8.39215 2.00377 8.00012H22C22.0019 8.39215 22 9.55819 22 10.0001V12.0001C22 12.4421 22 13.6081 21.9981 14.0001H2.00189C2 13.6081 2 12.4421 2 12.0001V10.0001Z"
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
            d="M21.9743 7.25012H2.02572C2.09185 5.22894 2.32803 4.01524 3.17157 3.17169C4.34315 2.00012 6.22876 2.00012 10 2.00012H14C17.7712 2.00012 19.6569 2.00012 20.8284 3.17169C21.672 4.01524 21.9082 5.22894 21.9743 7.25012Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 10.0001C2 9.55819 2 9.14215 2.00189 8.75012H21.9981C22 9.14215 22 9.55819 22 10.0001V12.0001C22 12.4421 22 12.8581 21.9981 13.2501H2.00189C2 12.8581 2 12.4421 2 12.0001V10.0001Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.9743 14.7501H2.02572C2.09185 16.7713 2.32803 17.985 3.17157 18.8286C3.47599 19.133 3.82861 19.3583 4.25 19.5251V22.0001C4.25 22.4143 4.58579 22.7501 5 22.7501C5.41421 22.7501 5.75 22.4143 5.75 22.0001V19.8714C6.81989 20.0001 8.19364 20.0001 10 20.0001H14C15.8064 20.0001 17.1801 20.0001 18.25 19.8714V22.0001C18.25 22.4143 18.5858 22.7501 19 22.7501C19.4142 22.7501 19.75 22.4143 19.75 22.0001V19.5251C20.1714 19.3583 20.524 19.133 20.8284 18.8286C21.672 17.985 21.9082 16.7713 21.9743 14.7501ZM13 17.0001C13 17.5524 12.5523 18.0001 12 18.0001C11.4477 18.0001 11 17.5524 11 17.0001C11 16.4478 11.4477 16.0001 12 16.0001C12.5523 16.0001 13 16.4478 13 17.0001Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBedsideTable2 as IconComponentType).keywords = [
  "bedside",
  "table",
  "2",
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

export default IconBedsideTable2 as IconComponentType;
