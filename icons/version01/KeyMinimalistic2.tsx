import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconKeyMinimalistic2: FC<IconProps> = ({
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
          <circle
            cx="15"
            cy="9.00049"
            r="7"
            stroke="currentColor"
            strokeWidth={width}
          />
          <circle
            opacity={duotone ? "0.5" : "1"}
            cx="15"
            cy="9.00049"
            r="2"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M3.5 20.5005L9.5 14.5005"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M6 21.0005L4.5 19.5005M6.5 17.5005L8 19.0005"
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
            d="M15 16.0005C18.866 16.0005 22 12.8665 22 9.00049C22 5.13449 18.866 2.00049 15 2.00049C11.134 2.00049 8 5.13449 8 9.00049C8 12.8665 11.134 16.0005 15 16.0005ZM15 11.0005C16.1046 11.0005 17 10.1051 17 9.00049C17 7.89592 16.1046 7.00049 15 7.00049C13.8954 7.00049 13 7.89592 13 9.00049C13 10.1051 13.8954 11.0005 15 11.0005Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M10.6089 14.4523C10.2187 14.1376 9.86294 13.7818 9.54824 13.3916L2.96967 19.9702C2.67678 20.2631 2.67678 20.7379 2.96967 21.0308C3.26256 21.3237 3.73744 21.3237 4.03033 21.0308L4.5 20.5612L5.46967 21.5308C5.76256 21.8237 6.23744 21.8237 6.53033 21.5308C6.82322 21.2379 6.82322 20.7631 6.53033 20.4702L5.56066 19.5005L6.5 18.5612L7.46967 19.5308C7.76256 19.8237 8.23744 19.8237 8.53033 19.5308C8.82322 19.2379 8.82322 18.7631 8.53033 18.4702L7.56066 17.5005L10.6089 14.4523Z"
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
            d="M15 16.0005C18.866 16.0005 22 12.8665 22 9.00049C22 5.1345 18.866 2.00049 15 2.00049C11.134 2.00049 8 5.1345 8 9.00049C8 10.6633 8.57979 12.1907 9.54824 13.3916L3.96995 18.9699L2.96967 19.9702C2.67678 20.2631 2.67678 20.7379 2.96967 21.0308C3.26256 21.3237 3.73744 21.3237 4.03033 21.0308L4.5 20.5611L5.46967 21.5308C5.76256 21.8237 6.23744 21.8237 6.53033 21.5308C6.82322 21.2379 6.82322 20.7631 6.53033 20.4702L5.56066 19.5005L6.5 18.5611L7.46967 19.5308C7.76256 19.8237 8.23744 19.8237 8.53033 19.5308C8.82322 19.2379 8.82322 18.7631 8.53033 18.4702L7.56066 17.5005L10.6089 14.4522C11.8098 15.4207 13.3372 16.0005 15 16.0005ZM15 11.0005C16.1046 11.0005 17 10.1051 17 9.00049C17 7.89592 16.1046 7.00049 15 7.00049C13.8954 7.00049 13 7.89592 13 9.00049C13 10.1051 13.8954 11.0005 15 11.0005Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconKeyMinimalistic2 as IconComponentType).keywords = [
  "key",
  "minimalistic",
  "2",
  "winder",
  "kilo",
  "kilogram",
  "central",
  "kg",
  "discover",
  "operative",
  "describe",
  "identify",
  "modularistic",
  "brutalistic",
  "localistic",
  "reductionist",
  "exhibitional",
  "monogynous",
  "simplificational",
  "reductionistic",
  "automatistic",
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

export default IconKeyMinimalistic2 as IconComponentType;
