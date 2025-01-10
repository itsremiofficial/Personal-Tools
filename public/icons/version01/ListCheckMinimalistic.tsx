import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconListCheckMinimalistic: FC<IconProps> = ({
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
            d="M20 6.00024L3 6.00024"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M10 11.0002L3 11.0002"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M10 16.0002H3"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M14 13.5002L16.1 16.0002L20 11.0002"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
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
            d="M3 6.75024C3 6.33603 3.33579 6.00024 3.75 6.00024H20.75C21.1642 6.00024 21.5 6.33603 21.5 6.75024C21.5 7.16446 21.1642 7.50024 20.75 7.50024H3.75C3.33579 7.50024 3 7.16446 3 6.75024ZM3 11.7502C3 11.336 3.33579 11.0002 3.75 11.0002H10.75C11.1642 11.0002 11.5 11.336 11.5 11.7502C11.5 12.1645 11.1642 12.5002 10.75 12.5002H3.75C3.33579 12.5002 3 12.1645 3 11.7502ZM3 16.7502C3 16.336 3.33579 16.0002 3.75 16.0002H10.75C11.1642 16.0002 11.5 16.336 11.5 16.7502C11.5 17.1645 11.1642 17.5002 10.75 17.5002H3.75C3.33579 17.5002 3 17.1645 3 16.7502Z"
            fill="currentColor"
          />
          <path
            d="M21.2113 11.1589C21.5379 11.4137 21.5961 11.8849 21.3414 12.2116L17.4414 17.2116C17.3022 17.39 17.0899 17.4961 16.8636 17.5002C16.6373 17.5043 16.4213 17.406 16.2757 17.2327L14.1757 14.7327C13.9093 14.4155 13.9505 13.9424 14.2676 13.676C14.5848 13.4096 15.0579 13.4507 15.3243 13.7679L16.8284 15.5585L20.1586 11.289C20.4134 10.9624 20.8847 10.9041 21.2113 11.1589Z"
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
            d="M3 6.75024C3 6.33603 3.33579 6.00024 3.75 6.00024H20.75C21.1642 6.00024 21.5 6.33603 21.5 6.75024C21.5 7.16446 21.1642 7.50024 20.75 7.50024H3.75C3.33579 7.50024 3 7.16446 3 6.75024ZM21.2113 11.1589C21.5379 11.4136 21.5961 11.8849 21.3414 12.2115L17.4414 17.2115C17.3022 17.39 17.0899 17.496 16.8636 17.5001C16.6373 17.5042 16.4213 17.4059 16.2757 17.2326L14.1757 14.7326C13.9093 14.4155 13.9504 13.9424 14.2676 13.676C14.5848 13.4095 15.0579 13.4507 15.3243 13.7678L16.8284 15.5585L20.1586 11.289C20.4134 10.9624 20.8847 10.9041 21.2113 11.1589ZM3 11.7502C3 11.336 3.33579 11.0002 3.75 11.0002H10.75C11.1642 11.0002 11.5 11.336 11.5 11.7502C11.5 12.1645 11.1642 12.5002 10.75 12.5002H3.75C3.33579 12.5002 3 12.1645 3 11.7502ZM3 16.7502C3 16.336 3.33579 16.0002 3.75 16.0002H10.75C11.1642 16.0002 11.5 16.336 11.5 16.7502C11.5 17.1645 11.1642 17.5002 10.75 17.5002H3.75C3.33579 17.5002 3 17.1645 3 16.7502Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconListCheckMinimalistic as IconComponentType).keywords = [
  "list",
  "check",
  "minimalistic",
  "tilt",
  "inclination",
  "lean",
  "leaning",
  "name",
  "number",
  "sheet",
  "heel",
  "table",
  "match",
  "hitch",
  "check out",
  "curb",
  "check into",
  "checkout",
  "turn back",
  "arrest",
  "hold",
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

export default IconListCheckMinimalistic as IconComponentType;
