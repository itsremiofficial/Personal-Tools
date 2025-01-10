import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconHeartCircle: FC<IconProps> = ({
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
            d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.9995 17.4501C12.8195 17.5101 12.5095 17.5101 12.3295 17.4501C10.7695 16.9201 7.26953 14.6901 7.26953 10.9101C7.26953 9.24013 8.60953 7.89014 10.2695 7.89014C11.2495 7.89014 12.1195 8.36013 12.6695 9.10013C13.2095 8.37013 14.0895 7.89014 15.0695 7.89014C16.7295 7.89014 18.0695 9.24013 18.0695 10.9101C18.0695 14.6901 14.5695 16.9201 12.9995 17.4501Z"
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
            d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z"
            fill="currentColor"
          />
          <path
            d="M12.9995 16.9999C12.8195 17.0599 12.5095 17.0599 12.3295 16.9999C10.7695 16.4699 7.26953 14.2399 7.26953 10.4599C7.26953 8.78993 8.60953 7.43994 10.2695 7.43994C11.2495 7.43994 12.1195 7.90993 12.6695 8.64993C13.2095 7.91993 14.0895 7.43994 15.0695 7.43994C16.7295 7.43994 18.0695 8.78993 18.0695 10.4599C18.0695 14.2399 14.5695 16.4699 12.9995 16.9999Z"
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
            d="M12.6699 2C7.14992 2 2.66992 6.48 2.66992 12C2.66992 17.52 7.14992 22 12.6699 22C18.1899 22 22.6699 17.52 22.6699 12C22.6699 6.48 18.1899 2 12.6699 2ZM12.9999 17C12.8199 17.06 12.5099 17.06 12.3299 17C10.7699 16.47 7.26992 14.24 7.26992 10.46C7.26992 8.79 8.60992 7.44 10.2699 7.44C11.2499 7.44 12.1199 7.91 12.6699 8.65C13.2099 7.92 14.0899 7.44 15.0699 7.44C16.7299 7.44 18.0699 8.79 18.0699 10.46C18.0699 14.24 14.5699 16.47 12.9999 17Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconHeartCircle as IconComponentType).keywords = [
  "heart",
  "circle",
  "nerve",
  "marrow",
  "eye",
  "nub",
  "pith",
  "bosom",
  "spunk",
  "core",
  "meat",
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

export default IconHeartCircle as IconComponentType;
