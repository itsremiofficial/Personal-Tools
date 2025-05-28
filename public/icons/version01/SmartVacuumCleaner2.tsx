import { FC } from "react";

const IconSmartVacuumCleaner2: FC<IconProps> = ({
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
            d="M22 12.0001C22 17.523 17.5228 22.0001 12 22.0001C6.47715 22.0001 2 17.523 2 12.0001C2 6.47727 6.47715 2.00012 12 2.00012C17.5228 2.00012 22 6.47727 22 12.0001Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M15 9.00012C15 10.657 13.6569 12.0001 12 12.0001C10.3431 12.0001 9 10.657 9 9.00012C9 7.34327 10.3431 6.00012 12 6.00012C13.6569 6.00012 15 7.34327 15 9.00012Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M12 18.0001V16.0001"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M2 22.0001L4.5 19.5001"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M22 22.0001L19.5 19.5001"
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
            opacity={duotone ? "0.5" : "1"}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.06066 19.0001L2.53033 22.5304C2.23744 22.8233 1.76256 22.8233 1.46967 22.5304C1.17678 22.2375 1.17678 21.7627 1.46967 21.4698L5 17.9395L6.06066 19.0001Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.9393 19.0001L21.4697 22.5304C21.7626 22.8233 22.2374 22.8233 22.5303 22.5304C22.8232 22.2375 22.8232 21.7627 22.5303 21.4698L19 17.9395L17.9393 19.0001Z"
            fill="currentColor"
          />
          <path
            d="M9.75 8.75012C9.75 7.50748 10.7574 6.50012 12 6.50012C13.2426 6.50012 14.25 7.50748 14.25 8.75012C14.25 9.99276 13.2426 11.0001 12 11.0001C10.7574 11.0001 9.75 9.99276 9.75 8.75012Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 21.5001C17.5228 21.5001 22 17.023 22 11.5001C22 5.97727 17.5228 1.50012 12 1.50012C6.47715 1.50012 2 5.97727 2 11.5001C2 17.023 6.47715 21.5001 12 21.5001ZM8.25 8.75012C8.25 6.67905 9.92893 5.00012 12 5.00012C14.0711 5.00012 15.75 6.67905 15.75 8.75012C15.75 10.8212 14.0711 12.5001 12 12.5001C9.92893 12.5001 8.25 10.8212 8.25 8.75012ZM12.75 15.7501C12.75 15.3359 12.4142 15.0001 12 15.0001C11.5858 15.0001 11.25 15.3359 11.25 15.7501V17.7501C11.25 18.1643 11.5858 18.5001 12 18.5001C12.4142 18.5001 12.75 18.1643 12.75 17.7501V15.7501Z"
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
            d="M12 6.50012C10.7574 6.50012 9.75 7.50748 9.75 8.75012C9.75 9.99276 10.7574 11.0001 12 11.0001C13.2426 11.0001 14.25 9.99276 14.25 8.75012C14.25 7.50748 13.2426 6.50012 12 6.50012Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.5209 19.3317C16.7701 20.839 14.4915 21.7501 12 21.7501C9.50853 21.7501 7.22987 20.839 5.47906 19.3317L2.53033 22.2805C2.23744 22.5733 1.76256 22.5733 1.46967 22.2805C1.17678 21.9876 1.17678 21.5127 1.46967 21.2198L4.4184 18.2711C2.91114 16.5202 2 14.2416 2 11.7501C2 6.22727 6.47715 1.75012 12 1.75012C17.5228 1.75012 22 6.22727 22 11.7501C22 14.2416 21.0889 16.5202 19.5816 18.2711L22.5303 21.2198C22.8232 21.5127 22.8232 21.9876 22.5303 22.2805C22.2374 22.5733 21.7626 22.5733 21.4697 22.2805L18.5209 19.3317ZM8.25 8.75012C8.25 6.67905 9.92893 5.00012 12 5.00012C14.0711 5.00012 15.75 6.67905 15.75 8.75012C15.75 10.8212 14.0711 12.5001 12 12.5001C9.92893 12.5001 8.25 10.8212 8.25 8.75012ZM12.75 15.7501C12.75 15.3359 12.4142 15.0001 12 15.0001C11.5858 15.0001 11.25 15.3359 11.25 15.7501V17.7501C11.25 18.1643 11.5858 18.5001 12 18.5001C12.4142 18.5001 12.75 18.1643 12.75 17.7501V15.7501Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSmartVacuumCleaner2 as IconComponent).keywords = [
  "smart",
  "vacuum",
  "cleaner",
  "2",
  "hurt",
  "ache",
  "raffish",
  "rakish",
  "snappy",
  "cagy",
  "impertinent",
  "dashing",
  "impudent",
  "vacuity",
  "vacuum-clean",
  "vacuum cleaner",
  "hoover",
  "void",
  "emptiness",
  "vacancy",
  "vacant",
  "empty",
  "dry cleaner",
  "cleanser",
  "cleansing agent",
  "wiper",
  "screen",
  "filtering",
  "filter",
  "cleansing",
  "sanitation",
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

export default IconSmartVacuumCleaner2 as IconComponent;
