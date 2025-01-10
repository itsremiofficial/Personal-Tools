import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconMouseCircle: FC<IconProps> = ({
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
            d="M21.6296 17.84L19.9996 18.39C19.5496 18.54 19.1896 18.89 19.0396 19.35L18.4896 20.98C18.0196 22.39 16.0396 22.36 15.5996 20.95L13.7496 15C13.3896 13.82 14.4796 12.72 15.6496 13.09L21.6096 14.94C23.0096 15.38 23.0296 17.37 21.6296 17.84Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.6699 12C22.6699 6.48 18.1899 2 12.6699 2C7.14992 2 2.66992 6.48 2.66992 12C2.66992 17.52 7.14992 22 12.6699 22"
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
            d="M21.6296 17.84L19.9996 18.39C19.5496 18.54 19.1896 18.89 19.0396 19.35L18.4896 20.98C18.0196 22.39 16.0396 22.36 15.5996 20.95L13.7496 15C13.3896 13.82 14.4796 12.72 15.6496 13.09L21.6096 14.94C23.0096 15.38 23.0296 17.37 21.6296 17.84Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.1699 21C17.4166 21 21.6699 16.7467 21.6699 11.5C21.6699 6.25329 17.4166 2 12.1699 2C6.92322 2 2.66992 6.25329 2.66992 11.5C2.66992 16.7467 6.92322 21 12.1699 21Z"
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
            d="M21.6296 17.84L19.9996 18.39C19.5496 18.54 19.1896 18.89 19.0396 19.35L18.4896 20.98C18.0196 22.39 16.0396 22.36 15.5996 20.95L13.7496 15C13.3896 13.82 14.4796 12.72 15.6496 13.09L21.6096 14.94C23.0096 15.38 23.0296 17.37 21.6296 17.84Z"
            fill="currentColor"
          />
          <path
            d="M21.6703 11.5C21.6703 11.93 21.6403 12.36 21.5903 12.78C21.5503 13.08 21.2403 13.26 20.9503 13.17L16.1003 11.66C15.0203 11.33 13.8703 11.61 13.0703 12.4C12.2703 13.2 11.9803 14.37 12.3203 15.45L13.8203 20.28C13.9103 20.57 13.7203 20.88 13.4203 20.92C13.0003 20.97 12.5903 21 12.1703 21C6.83032 21 2.53032 16.61 2.67032 11.23C2.81032 6.27 6.94032 2.14 11.9003 2C17.2803 1.86 21.6703 6.16 21.6703 11.5Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMouseCircle as IconComponentType).keywords = [
  "mouse",
  "circle",
  "creep",
  "pussyfoot",
  "sneak",
  "steal",
  "murine",
  "rodent",
  "rat",
  "weasel",
  "frog",
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

export default IconMouseCircle as IconComponentType;
