import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconPercentageCircle: FC<IconProps> = ({
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
            d="M9.00391 15.27L15.5439 8.72998"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.4136 10.37C10.0929 10.37 10.6436 9.81936 10.6436 9.14005C10.6436 8.46073 10.0929 7.91003 9.4136 7.91003C8.73429 7.91003 8.18359 8.46073 8.18359 9.14005C8.18359 9.81936 8.73429 10.37 9.4136 10.37Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.9536 16.09C16.6329 16.09 17.1836 15.5393 17.1836 14.86C17.1836 14.1807 16.6329 13.63 15.9536 13.63C15.2743 13.63 14.7236 14.1807 14.7236 14.86C14.7236 15.5393 15.2743 16.09 15.9536 16.09Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.6836 22C18.2064 22 22.6836 17.5228 22.6836 12C22.6836 6.47715 18.2064 2 12.6836 2C7.16075 2 2.68359 6.47715 2.68359 12C2.68359 17.5228 7.16075 22 12.6836 22Z"
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
            opacity={duotone ? "0.4" : "1"}
            d="M12.6836 22C18.2064 22 22.6836 17.5228 22.6836 12C22.6836 6.47715 18.2064 2 12.6836 2C7.16075 2 2.68359 6.47715 2.68359 12C2.68359 17.5228 7.16075 22 12.6836 22Z"
            fill="currentColor"
          />
          <path
            d="M9.00336 16.02C8.81336 16.02 8.62336 15.95 8.47336 15.8C8.18336 15.51 8.18336 15.03 8.47336 14.74L15.0233 8.19003C15.3133 7.90003 15.7933 7.90003 16.0833 8.19003C16.3733 8.48003 16.3733 8.96003 16.0833 9.25003L9.53336 15.8C9.38336 15.95 9.19336 16.02 9.00336 16.02Z"
            fill="currentColor"
          />
          <path
            d="M9.4136 7.66003C8.6036 7.66003 7.93359 8.32005 7.93359 9.14005C7.93359 9.95005 8.5936 10.62 9.4136 10.62C10.2236 10.62 10.8936 9.96005 10.8936 9.14005C10.8836 8.32005 10.2236 7.66003 9.4136 7.66003Z"
            fill="currentColor"
          />
          <path
            d="M15.9536 13.39C15.1436 13.39 14.4736 14.05 14.4736 14.87C14.4736 15.68 15.1336 16.35 15.9536 16.35C16.7636 16.35 17.4336 15.69 17.4336 14.87C17.4336 14.05 16.7736 13.39 15.9536 13.39Z"
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
            d="M12.6855 2C7.16555 2 2.68555 6.48 2.68555 12C2.68555 17.52 7.16555 22 12.6855 22C18.2055 22 22.6855 17.52 22.6855 12C22.6855 6.48 18.2055 2 12.6855 2ZM9.41555 7.66C10.2255 7.66 10.8955 8.32 10.8955 9.14C10.8955 9.95 10.2355 10.62 9.41555 10.62C8.60555 10.62 7.93555 9.96 7.93555 9.14C7.93555 8.32 8.59555 7.66 9.41555 7.66ZM9.53555 15.8C9.38555 15.95 9.19555 16.02 9.00555 16.02C8.81555 16.02 8.62555 15.95 8.47555 15.8C8.18555 15.51 8.18555 15.03 8.47555 14.74L15.0255 8.19C15.3155 7.9 15.7955 7.9 16.0855 8.19C16.3755 8.48 16.3755 8.96 16.0855 9.25L9.53555 15.8ZM15.9555 16.34C15.1455 16.34 14.4755 15.68 14.4755 14.86C14.4755 14.05 15.1355 13.38 15.9555 13.38C16.7655 13.38 17.4355 14.04 17.4355 14.86C17.4355 15.68 16.7755 16.34 15.9555 16.34Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconPercentageCircle as IconComponentType).keywords = [
  "percentage",
  "circle",
  "per centum",
  "percent",
  "pct",
  "part",
  "portion",
  "share",
  "centenary",
  "centennial",
  "percentile",
  "round",
  "rotary",
  "environ",
  "roundabout",
  "circulate",
  "circuit",
  "encircle",
  "surround",
  "dress circle",
];

export default IconPercentageCircle as IconComponentType;
