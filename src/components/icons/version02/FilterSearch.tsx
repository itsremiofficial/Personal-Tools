import { FC } from "react";

const IconFilterSearch: FC<IconProps> = ({
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
            opacity={duotone ? "0.4" : "1"}
            d="M14.9895 19.07C14.9895 19.68 14.5895 20.48 14.0795 20.79L12.6695 21.7C11.3595 22.51 9.53949 21.6 9.53949 19.98V14.63C9.53949 13.92 9.13949 13.01 8.72949 12.51L4.88947 8.47C4.37947 7.96 3.97949 7.06001 3.97949 6.45001V4.13C3.97949 2.92 4.88951 2.01001 5.99951 2.01001H19.3395C20.4495 2.01001 21.3595 2.92 21.3595 4.03V6.25C21.3595 7.06 20.8495 8.07001 20.3495 8.57001"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.7401 16.52C18.5074 16.52 19.9401 15.0873 19.9401 13.32C19.9401 11.5527 18.5074 10.12 16.7401 10.12C14.9727 10.12 13.54 11.5527 13.54 13.32C13.54 15.0873 14.9727 16.52 16.7401 16.52Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.54 17.12L19.54 16.12"
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
            d="M20.42 15.41L19.5701 14.56C20.0101 13.89 20.27 13.1 20.27 12.24C20.27 9.89999 18.37 8 16.03 8C13.69 8 11.79 9.89999 11.79 12.24C11.79 14.58 13.69 16.48 16.03 16.48C16.89 16.48 17.69 16.22 18.35 15.78L19.2001 16.63C19.3701 16.8 19.5901 16.88 19.8101 16.88C20.0301 16.88 20.25 16.8 20.42 16.63C20.75 16.29 20.75 15.74 20.42 15.41Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6.08008 2H19.2501C20.3501 2 21.2501 2.90999 21.2501 4.01999V6.23999C21.2501 7.04999 20.7501 8.06 20.2501 8.56L15.9601 12.4C15.3601 12.91 14.9601 13.92 14.9601 14.72V19.06C14.9601 19.67 14.5601 20.47 14.0601 20.78L12.6601 21.69C11.3601 22.5 9.57013 21.59 9.57013 19.97V14.62C9.57013 13.91 9.17008 13 8.77008 12.5L4.9801 8.45999C4.4801 7.94999 4.08008 7.05 4.08008 6.44V4.12C4.09008 2.91 4.99008 2 6.08008 2Z"
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
            d="M21.3896 18.24L20.4496 17.3C20.9396 16.56 21.2296 15.67 21.2296 14.71C21.2296 12.11 19.1196 10 16.5196 10C13.9196 10 11.8096 12.11 11.8096 14.71C11.8096 17.31 13.9196 19.42 16.5196 19.42C17.4796 19.42 18.3596 19.13 19.1096 18.64L20.0496 19.58C20.2396 19.77 20.4796 19.86 20.7296 19.86C20.9796 19.86 21.2196 19.77 21.4096 19.58C21.7596 19.22 21.7596 18.62 21.3896 18.24Z"
            fill="currentColor"
          />
          <path
            d="M20.2498 4.02V6.24C20.2498 7.05 19.7498 8.06 19.2498 8.57L19.0698 8.73C18.9298 8.86 18.7198 8.89 18.5398 8.83C18.3398 8.76 18.1398 8.71 17.9398 8.66C17.4998 8.55 17.0298 8.5 16.5498 8.5C13.0998 8.5 10.2998 11.3 10.2998 14.75C10.2998 15.89 10.6098 17.01 11.1998 17.97C11.6998 18.81 12.3998 19.51 13.1598 19.98C13.3898 20.13 13.4798 20.45 13.2798 20.63C13.2098 20.69 13.1398 20.74 13.0698 20.79L11.6698 21.7C10.3698 22.51 8.57984 21.6 8.57984 19.98V14.63C8.57984 13.92 8.17984 13.01 7.77984 12.51L3.98984 8.47C3.48984 7.96 3.08984 7.05 3.08984 6.45V4.12C3.08984 2.91 3.98984 2 5.07984 2H18.2598C19.3498 2 20.2498 2.91 20.2498 4.02Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconFilterSearch as IconComponent).keywords = [
  "filter",
  "search",
  "filtrate",
  "filter out",
  "percolate",
  "permeate",
  "trickle",
  "sink in",
  "strain",
  "dribble",
  "separate out",
  "seek",
  "look for",
  "explore",
  "lookup",
  "research",
  "look",
  "hunting",
  "hunt",
  "seeking",
];

export default IconFilterSearch as IconComponent;