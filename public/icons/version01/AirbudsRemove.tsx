import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconAirbudsRemove: FC<IconProps> = ({
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
            d="M18 11.5V11.3C18 10.7477 18.4477 10.3 19 10.3C20.6569 10.3 22 8.95685 22 7.3V5.1875C22 5.0134 22 4.92635 21.9964 4.8528C21.9207 3.31169 20.6883 2.07932 19.1472 2.00361C19.0736 2 18.9866 2 18.8125 2C18.5223 2 18.3773 2 18.2547 2.00602C15.6861 2.13221 13.6322 4.18614 13.506 6.75466C13.5 6.87726 13.5 7.02234 13.5 7.3125V13.5"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M10.5 19V19.75C10.5 20.9926 9.49264 22 8.25 22C7.00736 22 6 20.9926 6 19.75V19M10.5 19V9.3125C10.5 9.02234 10.5 8.87726 10.494 8.75466C10.3678 6.18614 8.31386 4.13221 5.74534 4.00602C5.62274 4 5.47766 4 5.1875 4C5.0134 4 4.92635 4 4.8528 4.00361C3.31169 4.07932 2.07932 5.31169 2.00361 6.8528C2 6.92635 2 7.0134 2 7.1875V9.3C2 10.9569 3.34315 12.3 5 12.3C5.55228 12.3 6 12.7477 6 13.3V19M10.5 19H6"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M19.5 5V7.5"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M4.5 7V9.5"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <circle
            opacity={duotone ? "0.5" : "1"}
            cx="18"
            cy="18"
            r="4"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M17.0003 19L19 17M18.9997 19L17 17"
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
            d="M22 18C22 20.2091 20.2091 22 18 22C15.7909 22 14 20.2091 14 18C14 15.7909 15.7909 14 18 14C20.2091 14 22 15.7909 22 18Z"
            fill="currentColor"
          />
          <path
            d="M16.4697 16.4696C16.7626 16.1768 17.2375 16.1768 17.5304 16.4697L18 16.9394L18.4696 16.4697C18.7625 16.1768 19.2374 16.1768 19.5303 16.4696C19.8232 16.7625 19.8232 17.2374 19.5304 17.5303L19.0606 18.0001L19.5301 18.4697C19.823 18.7626 19.8229 19.2375 19.53 19.5304C19.2371 19.8232 18.7622 19.8232 18.4694 19.5303L18 19.0609L17.5306 19.5303C17.2378 19.8232 16.7629 19.8232 16.47 19.5304C16.1771 19.2375 16.177 18.7626 16.4699 18.4697L16.9394 18.0001L16.4696 17.5303C16.1768 17.2374 16.1768 16.7625 16.4697 16.4696Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22 7.3V5.1875C22 5.01349 22 4.92634 21.9962 4.8528C21.916 3.31169 20.6112 2.07932 18.9794 2.00361C18.9015 2 18.8093 2 18.625 2C18.3178 2 18.1642 2 18.0343 2.00602C15.3147 2.13221 13.14 4.18614 13.0064 6.75466C13 6.87726 13 7.02234 13 7.3125V15.7055C13.8387 13.8808 15.6469 12.5941 17.7647 12.5049V11.3C17.7647 10.7477 18.2388 10.3 18.8235 10.3C20.5778 10.3 22 8.95685 22 7.3ZM20.25 5C20.25 4.58579 19.9142 4.25 19.5 4.25C19.0858 4.25 18.75 4.58579 18.75 5V7.5C18.75 7.91421 19.0858 8.25 19.5 8.25C19.9142 8.25 20.25 7.91421 20.25 7.5V5Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M2 9.3V7.1875C2 7.01349 2 6.92634 2.00383 6.8528C2.08399 5.31169 3.38884 4.07932 5.02061 4.00361C5.09849 4 5.19066 4 5.375 4C5.68223 4 5.83584 4 5.96565 4.00602C8.68526 4.13221 10.86 6.18614 10.9936 8.75466C11 8.87726 11 9.02234 11 9.3125V18.25V19.75C11 20.9926 9.93338 22 8.61765 22C7.30191 22 6.23529 20.9926 6.23529 19.75V18.25V13.3C6.23529 12.7477 5.76124 12.3 5.17647 12.3C3.42215 12.3 2 10.9569 2 9.3Z"
            fill="currentColor"
          />
          <path
            d="M11.0001 18.25H6.23535V19.75H11.0001V18.25Z"
            fill="currentColor"
          />
          <path
            d="M4.5 6.25C4.08579 6.25 3.75 6.58579 3.75 7V9.5C3.75 9.91421 4.08579 10.25 4.5 10.25C4.91421 10.25 5.25 9.91421 5.25 9.5V7C5.25 6.58579 4.91421 6.25 4.5 6.25Z"
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
            d="M18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22ZM16.4697 16.4696C16.7626 16.1768 17.2375 16.1768 17.5304 16.4697L18 16.9394L18.4696 16.4697C18.7625 16.1768 19.2374 16.1768 19.5303 16.4696C19.8232 16.7625 19.8232 17.2374 19.5304 17.5303L19.0606 18.0001L19.5301 18.4697C19.823 18.7626 19.8229 19.2375 19.53 19.5304C19.2371 19.8232 18.7622 19.8232 18.4694 19.5303L18 19.0609L17.5306 19.5303C17.2378 19.8232 16.7629 19.8232 16.47 19.5304C16.1771 19.2375 16.177 18.7626 16.4699 18.4697L16.9394 18.0001L16.4696 17.5303C16.1768 17.2374 16.1768 16.7625 16.4697 16.4696Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 7.1875V9.3C2 10.9569 3.42215 12.3 5.17647 12.3C5.76124 12.3 6.23529 12.7477 6.23529 13.3V18.25H11V9.3125C11 9.02234 11 8.87726 10.9936 8.75466C10.86 6.18614 8.68526 4.13221 5.96565 4.00602C5.83584 4 5.68223 4 5.375 4C5.19066 4 5.09849 4 5.02061 4.00361C3.38884 4.07932 2.08399 5.31169 2.00383 6.8528C2 6.92634 2 7.01349 2 7.1875ZM3.75 7C3.75 6.58579 4.08579 6.25 4.5 6.25C4.91421 6.25 5.25 6.58579 5.25 7V9.5C5.25 9.91421 4.91421 10.25 4.5 10.25C4.08579 10.25 3.75 9.91421 3.75 9.5V7Z"
            fill="currentColor"
          />
          <path
            d="M8.61765 22C9.93338 22 11 20.9926 11 19.75H6.23529C6.23529 20.9926 7.30191 22 8.61765 22Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22 7.3V5.1875C22 5.01349 22 4.92634 21.9962 4.8528C21.916 3.31169 20.6112 2.07932 18.9794 2.00361C18.9015 2 18.8093 2 18.625 2C18.3178 2 18.1642 2 18.0343 2.00602C15.3147 2.13221 13.14 4.18614 13.0064 6.75466C13 6.87726 13 7.02234 13 7.3125V15.7055C13.8387 13.8808 15.6469 12.5941 17.7647 12.5049V11.3C17.7647 10.7477 18.2388 10.3 18.8235 10.3C20.5778 10.3 22 8.95685 22 7.3ZM19.5 4.25C19.9142 4.25 20.25 4.58579 20.25 5V7.5C20.25 7.91421 19.9142 8.25 19.5 8.25C19.0858 8.25 18.75 7.91421 18.75 7.5V5C18.75 4.58579 19.0858 4.25 19.5 4.25Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconAirbudsRemove as IconComponentType).keywords = [
  "airbuds",
  "remove",
  "take out",
  "get rid of",
  "take away",
  "move out",
  "bump off",
  "slay",
  "murder",
  "take",
  "transfer",
];

export default IconAirbudsRemove as IconComponentType;
