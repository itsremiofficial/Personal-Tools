import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconSolanaSol: FC<IconProps> = ({
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
            d="M20.6701 3.5H6.17009C5.86009 3.5 5.5601 3.65 5.3701 3.9L3.8701 5.9C3.3801 6.56 3.85009 7.5 4.67009 7.5H19.1701C19.4801 7.5 19.7801 7.35 19.9701 7.1L21.4701 5.1C21.9601 4.44 21.4901 3.5 20.6701 3.5Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M4.67009 10H19.1701C19.4801 10 19.7801 10.15 19.9701 10.4L21.4701 12.4C21.9601 13.06 21.4901 14 20.6701 14H6.17009C5.86009 14 5.5601 13.85 5.3701 13.6L3.8701 11.6C3.3801 10.94 3.85009 10 4.67009 10Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
          />
          <path
            d="M20.6701 16.5H6.17009C5.86009 16.5 5.5601 16.65 5.3701 16.9L3.8701 18.9C3.3801 19.56 3.85009 20.5 4.67009 20.5H19.1701C19.4801 20.5 19.7801 20.35 19.9701 20.1L21.4701 18.1C21.9601 17.44 21.4901 16.5 20.6701 16.5Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
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
          <path d="M24.6699 0H0.669922V24H24.6699V0Z" fill="none" />
          <path
            d="M20.6701 3.5H6.1701C5.8601 3.5 5.5601 3.65 5.3701 3.9L3.8701 5.9C3.3801 6.56 3.8501 7.5 4.6701 7.5H19.1701C19.4801 7.5 19.7801 7.35 19.9701 7.1L21.4701 5.1C21.9601 4.44 21.4901 3.5 20.6701 3.5Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M4.6701 10H19.1701C19.4801 10 19.7801 10.15 19.9701 10.4L21.4701 12.4C21.9601 13.06 21.4901 14 20.6701 14H6.1701C5.8601 14 5.5601 13.85 5.3701 13.6L3.8701 11.6C3.3801 10.94 3.8501 10 4.6701 10Z"
            fill="currentColor"
          />
          <path
            d="M20.6701 16.5H6.1701C5.8601 16.5 5.5601 16.65 5.3701 16.9L3.8701 18.9C3.3801 19.56 3.8501 20.5 4.6701 20.5H19.1701C19.4801 20.5 19.7801 20.35 19.9701 20.1L21.4701 18.1C21.9601 17.44 21.4901 16.5 20.6701 16.5Z"
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
            d="M20.6701 3.5H6.17009C5.86009 3.5 5.5601 3.65 5.3701 3.9L3.8701 5.9C3.3801 6.56 3.85009 7.5 4.67009 7.5H19.1701C19.4801 7.5 19.7801 7.35 19.9701 7.1L21.4701 5.1C21.9601 4.44 21.4901 3.5 20.6701 3.5Z"
            fill="none"
          />
          <path
            d="M4.67009 10H19.1701C19.4801 10 19.7801 10.15 19.9701 10.4L21.4701 12.4C21.9601 13.06 21.4901 14 20.6701 14H6.17009C5.86009 14 5.5601 13.85 5.3701 13.6L3.8701 11.6C3.3801 10.94 3.85009 10 4.67009 10Z"
            fill="none"
          />
          <path
            d="M20.6701 16.5H6.17009C5.86009 16.5 5.5601 16.65 5.3701 16.9L3.8701 18.9C3.3801 19.56 3.85009 20.5 4.67009 20.5H19.1701C19.4801 20.5 19.7801 20.35 19.9701 20.1L21.4701 18.1C21.9601 17.44 21.4901 16.5 20.6701 16.5Z"
            fill="none"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSolanaSol as IconComponentType).keywords = [
  "solana",
  "sol",
  "solano",
  "saarc",
  "representative",
  "santamaria",
  "sabatini",
  "luana",
  "robina",
  "arana",
  "bermudez",
  "so",
  "soh",
  "colloidal solution",
  "colloidal suspension",
  "fa",
  "solenoid",
  "surface",
  "swirl",
  "sell",
];

export default IconSolanaSol as IconComponentType;
