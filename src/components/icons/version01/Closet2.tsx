import { FC } from "react";

const IconCloset2: FC<IconProps> = ({
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
            d="M12 20.0001V2.00012"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M15 9.00012V13.0001"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M9 9.00012V13.0001"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M2 10.0001C2 6.22889 2 4.34327 3.17157 3.17169C4.34315 2.00012 6.22876 2.00012 10 2.00012H14C17.7712 2.00012 19.6569 2.00012 20.8284 3.17169C22 4.34327 22 6.22889 22 10.0001V12.0001C22 15.7714 22 17.657 20.8284 18.8285C19.6569 20.0001 17.7712 20.0001 14 20.0001H10C6.22876 20.0001 4.34315 20.0001 3.17157 18.8285C2 17.657 2 15.7714 2 12.0001V10.0001Z"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2.00012H10C6.22876 2.00012 4.34315 2.00012 3.17157 3.17169C2 4.34327 2 6.22889 2 10.0001V12.0001C2 15.7714 2 17.657 3.17157 18.8285C3.47599 19.133 3.82861 19.3583 4.25 19.5251V22.0001C4.25 22.4143 4.58579 22.7501 5 22.7501C5.41421 22.7501 5.75 22.4143 5.75 22.0001V19.8714C6.81989 20.0001 8.19364 20.0001 10 20.0001H12V2.00012ZM9 8.25012C9.41421 8.25012 9.75 8.58591 9.75 9.00012V13.0001C9.75 13.4143 9.41421 13.7501 9 13.7501C8.58579 13.7501 8.25 13.4143 8.25 13.0001V9.00012C8.25 8.58591 8.58579 8.25012 9 8.25012Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M14 20.0001H12V2.00012H14C17.7712 2.00012 19.6569 2.00012 20.8284 3.17169C22 4.34327 22 6.22889 22 10.0001V12.0001C22 15.7714 22 17.657 20.8284 18.8285C20.524 19.133 20.1714 19.3583 19.75 19.5251V22.0001C19.75 22.4143 19.4142 22.7501 19 22.7501C18.5858 22.7501 18.25 22.4143 18.25 22.0001V19.8714C17.1801 20.0001 15.8064 20.0001 14 20.0001Z"
            fill="currentColor"
          />
          <path
            d="M15.75 9.00012C15.75 8.58591 15.4142 8.25012 15 8.25012C14.5858 8.25012 14.25 8.58591 14.25 9.00012V13.0001C14.25 13.4143 14.5858 13.7501 15 13.7501C15.4142 13.7501 15.75 13.4143 15.75 13.0001V9.00012Z"
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
            d="M11.25 2.00012H10C6.22876 2.00012 4.34315 2.00012 3.17157 3.17169C2 4.34327 2 6.22889 2 10.0001V12.0001C2 15.7714 2 17.657 3.17157 18.8285C3.47599 19.133 3.82861 19.3583 4.25 19.5251V22.0001C4.25 22.4143 4.58579 22.7501 5 22.7501C5.41421 22.7501 5.75 22.4143 5.75 22.0001V19.8714C6.81989 20.0001 8.19364 20.0001 10 20.0001H11.25V2.00012ZM9 8.25012C9.41421 8.25012 9.75 8.58591 9.75 9.00012V13.0001C9.75 13.4143 9.41421 13.7501 9 13.7501C8.58579 13.7501 8.25 13.4143 8.25 13.0001V9.00012C8.25 8.58591 8.58579 8.25012 9 8.25012Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.75 20.0001H14C15.8064 20.0001 17.1801 20.0001 18.25 19.8714V22.0001C18.25 22.4143 18.5858 22.7501 19 22.7501C19.4142 22.7501 19.75 22.4143 19.75 22.0001V19.5251C20.1714 19.3583 20.524 19.133 20.8284 18.8285C22 17.657 22 15.7714 22 12.0001V10.0001C22 6.22889 22 4.34327 20.8284 3.17169C19.6569 2.00012 17.7712 2.00012 14 2.00012H12.75V20.0001ZM15 8.25012C15.4142 8.25012 15.75 8.58591 15.75 9.00012V13.0001C15.75 13.4143 15.4142 13.7501 15 13.7501C14.5858 13.7501 14.25 13.4143 14.25 13.0001V9.00012C14.25 8.58591 14.5858 8.25012 15 8.25012Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCloset2 as IconComponent).keywords = [
  "closet",
  "2",
  "cupboard",
  "wardrobe",
  "water closet",
  "press",
  "covert",
  "loo",
  "confidential",
  "secret",
  "private",
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

export default IconCloset2 as IconComponent;
