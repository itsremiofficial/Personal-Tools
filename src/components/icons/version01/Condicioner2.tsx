import { FC } from "react";

const IconCondicioner2: FC<IconProps> = ({
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
            d="M2 11.0001C2 8.17169 2 6.75748 2.87868 5.8788C3.75736 5.00012 5.17157 5.00012 8 5.00012H16C18.8284 5.00012 20.2426 5.00012 21.1213 5.8788C22 6.75748 22 8.17169 22 11.0001C22 14.7714 22 16.657 20.8284 17.8286C19.6569 19.0001 17.7712 19.0001 14 19.0001H10C6.22876 19.0001 4.34315 19.0001 3.17157 17.8286C2 16.657 2 14.7714 2 11.0001Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M18 18.5001C18 17.0957 18 16.3934 17.6629 15.889C17.517 15.6706 17.3295 15.4831 17.1111 15.3372C16.6067 15.0001 15.9045 15.0001 14.5 15.0001H9.5C8.09554 15.0001 7.39331 15.0001 6.88886 15.3372C6.67048 15.4831 6.48298 15.6706 6.33706 15.889C6 16.3934 6 17.0957 6 18.5001"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M6 11.5001H18"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M6 9.00012H18"
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
            d="M2.87868 5.8788C2 6.75748 2 8.17169 2 11.0001C2 14.7714 2 16.657 3.17157 17.8286C3.69042 18.3474 4.34931 18.6365 5.25001 18.7975C5.25022 17.9656 5.25446 17.2669 5.32991 16.7056C5.41432 16.0779 5.59999 15.5111 6.05546 15.0556C6.51093 14.6001 7.07773 14.4144 7.70552 14.33C8.3003 14.2501 9.04952 14.2501 9.948 14.2501H14.052C14.9505 14.2501 15.6997 14.2501 16.2945 14.33C16.9223 14.4144 17.4891 14.6001 17.9445 15.0556C18.4 15.5111 18.5857 16.0779 18.6701 16.7056C18.7455 17.2669 18.7498 17.9656 18.75 18.7975C19.6507 18.6365 20.3096 18.3474 20.8284 17.8286C22 16.657 22 14.7714 22 11.0001C22 8.17169 22 6.75748 21.1213 5.8788C20.2426 5.00012 18.8284 5.00012 16 5.00012H8C5.17157 5.00012 3.75736 5.00012 2.87868 5.8788ZM5.25 11.5001C5.25 11.0859 5.58579 10.7501 6 10.7501H18C18.4142 10.7501 18.75 11.0859 18.75 11.5001C18.75 11.9143 18.4142 12.2501 18 12.2501H6C5.58579 12.2501 5.25 11.9143 5.25 11.5001ZM6 8.25012C5.58579 8.25012 5.25 8.58591 5.25 9.00012C5.25 9.41434 5.58579 9.75012 6 9.75012H18C18.4142 9.75012 18.75 9.41434 18.75 9.00012C18.75 8.58591 18.4142 8.25012 18 8.25012H6Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M5.25 18.7975C5.25021 17.9656 5.25445 17.2669 5.3299 16.7056C5.41431 16.0779 5.59998 15.5111 6.05545 15.0556C6.51092 14.6001 7.07772 14.4144 7.70551 14.33C8.30029 14.2501 9.04949 14.2501 9.94796 14.2501H14.052C14.9505 14.2501 15.6997 14.2501 16.2945 14.33C16.9223 14.4144 17.4891 14.6001 17.9445 15.0556C18.4 15.5111 18.5857 16.0779 18.6701 16.7056C18.7455 17.2669 18.7498 17.9656 18.75 18.7975H5.25Z"
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
            d="M2.87868 5.8788C2 6.75748 2 8.17169 2 11.0001C2 14.7714 2 16.657 3.17157 17.8286C3.69042 18.3474 4.34931 18.6365 5.25001 18.7975C5.25022 17.9656 5.25446 17.2669 5.32991 16.7056C5.41432 16.0779 5.59999 15.5111 6.05546 15.0556C6.51093 14.6001 7.07773 14.4144 7.70552 14.33C8.3003 14.2501 9.04952 14.2501 9.948 14.2501H14.052C14.9505 14.2501 15.6997 14.2501 16.2945 14.33C16.9223 14.4144 17.4891 14.6001 17.9445 15.0556C18.4 15.5111 18.5857 16.0779 18.6701 16.7056C18.7455 17.2669 18.7498 17.9656 18.75 18.7975C19.6507 18.6365 20.3096 18.3474 20.8284 17.8286C22 16.657 22 14.7714 22 11.0001C22 8.17169 22 6.75748 21.1213 5.8788C20.2426 5.00012 18.8284 5.00012 16 5.00012H8C5.17157 5.00012 3.75736 5.00012 2.87868 5.8788ZM5.25 11.5001C5.25 11.0859 5.58579 10.7501 6 10.7501H18C18.4142 10.7501 18.75 11.0859 18.75 11.5001C18.75 11.9143 18.4142 12.2501 18 12.2501H6C5.58579 12.2501 5.25 11.9143 5.25 11.5001ZM6 8.25012C5.58579 8.25012 5.25 8.58591 5.25 9.00012C5.25 9.41434 5.58579 9.75012 6 9.75012H18C18.4142 9.75012 18.75 9.41434 18.75 9.00012C18.75 8.58591 18.4142 8.25012 18 8.25012H6Z"
            fill="currentColor"
          />
          <path
            d="M17.25 18.9535C17.2499 18.0152 17.2474 17.3807 17.1835 16.9055C17.1214 16.4441 17.0142 16.2466 16.8839 16.1162C16.7536 15.9859 16.5561 15.8787 16.0946 15.8167C15.6116 15.7517 14.964 15.7501 14 15.7501H10C9.03599 15.7501 8.38843 15.7517 7.90539 15.8167C7.44393 15.8787 7.24644 15.9859 7.11612 16.1162C6.9858 16.2466 6.87858 16.4441 6.81654 16.9055C6.75265 17.3807 6.75007 18.0152 6.75 18.9535C7.64461 19.0001 8.7124 19.0001 10 19.0001H14C15.2876 19.0001 16.3554 19.0001 17.25 18.9535Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCondicioner2 as IconComponent).keywords = [
  "condicioner",
  "2",
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

export default IconCondicioner2 as IconComponent;
