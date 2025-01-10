import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconPasswordMinimalistic: FC<IconProps> = ({
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
            d="M2 12.0005C2 8.22925 2 6.34363 3.17157 5.17206C4.34315 4.00049 6.22876 4.00049 10 4.00049H14C17.7712 4.00049 19.6569 4.00049 20.8284 5.17206C22 6.34363 22 8.22925 22 12.0005C22 15.7717 22 17.6573 20.8284 18.8289C19.6569 20.0005 17.7712 20.0005 14 20.0005H10C6.22876 20.0005 4.34315 20.0005 3.17157 18.8289C2 17.6573 2 15.7717 2 12.0005Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M9 12.0005C9 12.5528 8.55228 13.0005 8 13.0005C7.44772 13.0005 7 12.5528 7 12.0005C7 11.4482 7.44772 11.0005 8 11.0005C8.55228 11.0005 9 11.4482 9 12.0005Z"
            fill="currentColor"
          />
          <path
            d="M13 12.0005C13 12.5528 12.5523 13.0005 12 13.0005C11.4477 13.0005 11 12.5528 11 12.0005C11 11.4482 11.4477 11.0005 12 11.0005C12.5523 11.0005 13 11.4482 13 12.0005Z"
            fill="currentColor"
          />
          <path
            d="M17 12.0005C17 12.5528 16.5523 13.0005 16 13.0005C15.4477 13.0005 15 12.5528 15 12.0005C15 11.4482 15.4477 11.0005 16 11.0005C16.5523 11.0005 17 11.4482 17 12.0005Z"
            fill="currentColor"
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
            d="M3.17157 5.17206C2 6.34363 2 8.22925 2 12.0005C2 15.7717 2 17.6573 3.17157 18.8289C4.34315 20.0005 6.22876 20.0005 10 20.0005H14C17.7712 20.0005 19.6569 20.0005 20.8284 18.8289C22 17.6573 22 15.7717 22 12.0005C22 8.22925 22 6.34363 20.8284 5.17206C19.6569 4.00049 17.7712 4.00049 14 4.00049H10C6.22876 4.00049 4.34315 4.00049 3.17157 5.17206Z"
            fill="currentColor"
          />
          <path
            d="M8 13.0005C8.55228 13.0005 9 12.5528 9 12.0005C9 11.4482 8.55228 11.0005 8 11.0005C7.44772 11.0005 7 11.4482 7 12.0005C7 12.5528 7.44772 13.0005 8 13.0005Z"
            fill="currentColor"
          />
          <path
            d="M13 12.0005C13 12.5528 12.5523 13.0005 12 13.0005C11.4477 13.0005 11 12.5528 11 12.0005C11 11.4482 11.4477 11.0005 12 11.0005C12.5523 11.0005 13 11.4482 13 12.0005Z"
            fill="currentColor"
          />
          <path
            d="M16 13.0005C16.5523 13.0005 17 12.5528 17 12.0005C17 11.4482 16.5523 11.0005 16 11.0005C15.4477 11.0005 15 11.4482 15 12.0005C15 12.5528 15.4477 13.0005 16 13.0005Z"
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
            d="M3.17157 5.17206C2 6.34363 2 8.22925 2 12.0005C2 15.7717 2 17.6573 3.17157 18.8289C4.34315 20.0005 6.22876 20.0005 10 20.0005H14C17.7712 20.0005 19.6569 20.0005 20.8284 18.8289C22 17.6573 22 15.7717 22 12.0005C22 8.22925 22 6.34363 20.8284 5.17206C19.6569 4.00049 17.7712 4.00049 14 4.00049H10C6.22876 4.00049 4.34315 4.00049 3.17157 5.17206ZM8 13.0005C8.55228 13.0005 9 12.5528 9 12.0005C9 11.4482 8.55228 11.0005 8 11.0005C7.44772 11.0005 7 11.4482 7 12.0005C7 12.5528 7.44772 13.0005 8 13.0005ZM13 12.0005C13 12.5528 12.5523 13.0005 12 13.0005C11.4477 13.0005 11 12.5528 11 12.0005C11 11.4482 11.4477 11.0005 12 11.0005C12.5523 11.0005 13 11.4482 13 12.0005ZM16 13.0005C16.5523 13.0005 17 12.5528 17 12.0005C17 11.4482 16.5523 11.0005 16 11.0005C15.4477 11.0005 15 11.4482 15 12.0005C15 12.5528 15.4477 13.0005 16 13.0005Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconPasswordMinimalistic as IconComponentType).keywords = [
  "password",
  "minimalistic",
  "countersign",
  "watchword",
  "word",
  "parole",
  "passcode",
  "username",
  "passphrase",
  "codeword",
  "cleartext",
  "modularistic",
  "brutalistic",
  "localistic",
  "reductionist",
  "exhibitional",
  "monogynous",
  "simplificational",
  "reductionistic",
  "automatistic",
];

export default IconPasswordMinimalistic as IconComponentType;
