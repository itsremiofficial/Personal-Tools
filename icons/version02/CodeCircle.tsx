import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconCodeCircle: FC<IconProps> = ({
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
            d="M8.66992 10L6.66992 12L8.66992 14"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.6699 10L18.6699 12L16.6699 14"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M13.6699 9.66992L11.6699 14.33"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
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
            d="M8.66986 14.75C8.47986 14.75 8.28986 14.68 8.13986 14.53L6.13986 12.53C5.84986 12.24 5.84986 11.7599 6.13986 11.4699L8.13986 9.46994C8.42986 9.17994 8.90986 9.17994 9.19986 9.46994C9.48986 9.75994 9.48986 10.24 9.19986 10.53L7.72986 12L9.19986 13.4699C9.48986 13.7599 9.48986 14.24 9.19986 14.53C9.04986 14.68 8.85986 14.75 8.66986 14.75Z"
            fill="currentColor"
          />
          <path
            d="M16.6699 14.75C16.4799 14.75 16.2899 14.68 16.1399 14.53C15.8499 14.24 15.8499 13.7599 16.1399 13.4699L17.6099 12L16.1399 10.53C15.8499 10.24 15.8499 9.75994 16.1399 9.46994C16.4299 9.17994 16.9099 9.17994 17.1999 9.46994L19.1999 11.4699C19.4899 11.7599 19.4899 12.24 19.1999 12.53L17.1999 14.53C17.0499 14.68 16.8599 14.75 16.6699 14.75Z"
            fill="currentColor"
          />
          <path
            d="M11.67 15.0801C11.57 15.0801 11.47 15.0601 11.38 15.0201C11 14.8601 10.82 14.4201 10.99 14.0301L12.99 9.36004C13.15 8.98004 13.59 8.80002 13.97 8.97002C14.35 9.13002 14.53 9.57008 14.36 9.96008L12.36 14.6301C12.24 14.9101 11.96 15.0801 11.67 15.0801Z"
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
            d="M12.6699 2C7.14992 2 2.66992 6.48 2.66992 12C2.66992 17.52 7.14992 22 12.6699 22C18.1899 22 22.6699 17.52 22.6699 12C22.6699 6.48 18.1899 2 12.6699 2ZM9.19992 13.47C9.48992 13.76 9.48992 14.24 9.19992 14.53C9.04992 14.68 8.85992 14.75 8.66992 14.75C8.47992 14.75 8.28992 14.68 8.13992 14.53L6.13992 12.53C5.84992 12.24 5.84992 11.76 6.13992 11.47L8.13992 9.47C8.42992 9.18 8.90992 9.18 9.19992 9.47C9.48992 9.76 9.48992 10.24 9.19992 10.53L7.72992 12L9.19992 13.47ZM14.3599 9.96L12.3599 14.63C12.2399 14.91 11.9599 15.08 11.6699 15.08C11.5699 15.08 11.4699 15.06 11.3799 15.02C10.9999 14.86 10.8199 14.42 10.9899 14.03L12.9899 9.36C13.1499 8.98 13.5899 8.8 13.9699 8.97C14.3499 9.14 14.5199 9.58 14.3599 9.96ZM19.1999 12.53L17.1999 14.53C17.0499 14.68 16.8599 14.75 16.6699 14.75C16.4799 14.75 16.2899 14.68 16.1399 14.53C15.8499 14.24 15.8499 13.76 16.1399 13.47L17.6099 12L16.1399 10.53C15.8499 10.24 15.8499 9.76 16.1399 9.47C16.4299 9.18 16.9099 9.18 17.1999 9.47L19.1999 11.47C19.4899 11.76 19.4899 12.24 19.1999 12.53Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCodeCircle as IconComponentType).keywords = [
  "code",
  "circle",
  "encode",
  "cypher",
  "encipher",
  "cipher",
  "encrypt",
  "computer code",
  "codification",
  "inscribe",
  "write in code",
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

export default IconCodeCircle as IconComponentType;
