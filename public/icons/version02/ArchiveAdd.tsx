import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconArchiveAdd: FC<IconProps> = ({
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
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M15.1699 10.6504H10.1699"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.6699 8.20996V13.21"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M17.4902 2H7.85023C5.72023 2 3.99023 3.74 3.99023 5.86V19.95C3.99023 21.75 5.28023 22.51 6.86023 21.64L11.7402 18.93C12.2602 18.64 13.1002 18.64 13.6102 18.93L18.4902 21.64C20.0702 22.52 21.3602 21.76 21.3602 19.95V5.86C21.3502 3.74 19.6202 2 17.4902 2Z"
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
            d="M17.4902 2H7.85023C5.72023 2 3.99023 3.74 3.99023 5.86V19.95C3.99023 21.75 5.28023 22.51 6.86023 21.64L11.7402 18.93C12.2602 18.64 13.1002 18.64 13.6102 18.93L18.4902 21.64C20.0702 22.52 21.3602 21.76 21.3602 19.95V5.86C21.3502 3.74 19.6202 2 17.4902 2Z"
            fill="currentColor"
          />
          <path
            d="M15.1699 9.89996H13.4199V8.20996C13.4199 7.79996 13.0799 7.45996 12.6699 7.45996C12.2599 7.45996 11.9199 7.79996 11.9199 8.20996V9.89996H10.1699C9.75992 9.89996 9.41992 10.24 9.41992 10.65C9.41992 11.06 9.75992 11.4 10.1699 11.4H11.9199V13.21C11.9199 13.62 12.2599 13.96 12.6699 13.96C13.0799 13.96 13.4199 13.62 13.4199 13.21V11.4H15.1699C15.5799 11.4 15.9199 11.06 15.9199 10.65C15.9199 10.24 15.5799 9.89996 15.1699 9.89996Z"
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
            d="M17.4902 2H7.85023C5.72023 2 3.99023 3.74 3.99023 5.86V19.95C3.99023 21.75 5.28023 22.51 6.86023 21.64L11.7402 18.93C12.2602 18.64 13.1002 18.64 13.6102 18.93L18.4902 21.64C20.0702 22.52 21.3602 21.76 21.3602 19.95V5.86C21.3502 3.74 19.6202 2 17.4902 2ZM15.1702 11.4H13.4202V13.21C13.4202 13.62 13.0802 13.96 12.6702 13.96C12.2602 13.96 11.9202 13.62 11.9202 13.21V11.4H10.1702C9.76023 11.4 9.42023 11.06 9.42023 10.65C9.42023 10.24 9.76023 9.9 10.1702 9.9H11.9202V8.21C11.9202 7.8 12.2602 7.46 12.6702 7.46C13.0802 7.46 13.4202 7.8 13.4202 8.21V9.9H15.1702C15.5802 9.9 15.9202 10.24 15.9202 10.65C15.9202 11.06 15.5802 11.4 15.1702 11.4Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconArchiveAdd as IconComponentType).keywords = [
  "archive",
  "add",
  "file away",
  "archival",
  "file",
  "record-keeping",
  "registry",
  "record",
  "photo",
  "filer",
  "filename",
  "total",
  "sum up",
  "tot up",
  "add up",
  "sum",
  "summate",
  "impart",
  "contribute",
  "supply",
];

export default IconArchiveAdd as IconComponentType;
