import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconList: FC<IconProps> = ({
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
            d="M4 17.0002H11"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M4 12.0002L11 12.0002"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M4 7.00024L11 7.00024"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M17 4.00024L17 20.0002M17 4.00024L14 8.00024M17 4.00024L20 8.00024M17 20.0002L20 16.0002M17 20.0002L14 16.0002"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17 3.25024C17.2361 3.25024 17.4584 3.36139 17.6 3.55024L20.6 7.55024C20.8486 7.88162 20.7814 8.35172 20.45 8.60024C20.1187 8.84877 19.6486 8.78161 19.4 8.45024L17.75 6.25025V17.7502L19.4 15.5502C19.6486 15.2189 20.1187 15.1517 20.45 15.4002C20.7814 15.6488 20.8486 16.1189 20.6 16.4502L17.6 20.4502C17.4584 20.6391 17.2361 20.7502 17 20.7502C16.764 20.7502 16.5417 20.6391 16.4 20.4502L13.4 16.4502C13.1515 16.1189 13.2187 15.6488 13.55 15.4002C13.8814 15.1517 14.3515 15.2189 14.6 15.5502L16.25 17.7502V6.25024L14.6 8.45024C14.3515 8.78162 13.8814 8.84877 13.55 8.60024C13.2187 8.35172 13.1515 7.88161 13.4 7.55024L16.4 3.55024C16.5417 3.36139 16.764 3.25024 17 3.25024Z"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.5" : "1"}>
            <path
              d="M3.25 7.00024C3.25 6.58603 3.58579 6.25024 4 6.25024H11C11.4142 6.25024 11.75 6.58603 11.75 7.00024C11.75 7.41446 11.4142 7.75024 11 7.75024H4C3.58579 7.75024 3.25 7.41446 3.25 7.00024Z"
              fill="currentColor"
            />
            <path
              d="M3.25 12.0002C3.25 11.586 3.58579 11.2502 4 11.2502H11C11.4142 11.2502 11.75 11.586 11.75 12.0002C11.75 12.4145 11.4142 12.7502 11 12.7502H4C3.58579 12.7502 3.25 12.4145 3.25 12.0002Z"
              fill="currentColor"
            />
            <path
              d="M3.25 17.0002C3.25 16.586 3.58579 16.2502 4 16.2502H11C11.4142 16.2502 11.75 16.586 11.75 17.0002C11.75 17.4145 11.4142 17.7502 11 17.7502H4C3.58579 17.7502 3.25 17.4145 3.25 17.0002Z"
              fill="currentColor"
            />
          </g>
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
            d="M17 3.25024C17.2361 3.25024 17.4584 3.36139 17.6 3.55024L20.6 7.55024C20.8485 7.88162 20.7814 8.35172 20.45 8.60024C20.1186 8.84877 19.6485 8.78161 19.4 8.45024L17.75 6.25025V17.7502L19.4 15.5502C19.6485 15.2189 20.1186 15.1517 20.45 15.4002C20.7814 15.6488 20.8485 16.1189 20.6 16.4502L17.6 20.4502C17.4584 20.6391 17.2361 20.7502 17 20.7502C16.7639 20.7502 16.5416 20.6391 16.4 20.4502L13.4 16.4502C13.1515 16.1189 13.2186 15.6488 13.55 15.4002C13.8814 15.1517 14.3515 15.2189 14.6 15.5502L16.25 17.7502V6.25024L14.6 8.45024C14.3515 8.78162 13.8814 8.84877 13.55 8.60024C13.2186 8.35172 13.1515 7.88161 13.4 7.55024L16.4 3.55024C16.5416 3.36139 16.7639 3.25024 17 3.25024ZM3.25 7.00024C3.25 6.58603 3.58579 6.25024 4 6.25024H11C11.4142 6.25024 11.75 6.58603 11.75 7.00024C11.75 7.41446 11.4142 7.75024 11 7.75024H4C3.58579 7.75024 3.25 7.41446 3.25 7.00024ZM3.25 12.0002C3.25 11.586 3.58579 11.2502 4 11.2502H11C11.4142 11.2502 11.75 11.586 11.75 12.0002C11.75 12.4145 11.4142 12.7502 11 12.7502H4C3.58579 12.7502 3.25 12.4145 3.25 12.0002ZM3.25 17.0002C3.25 16.586 3.58579 16.2502 4 16.2502H11C11.4142 16.2502 11.75 16.586 11.75 17.0002C11.75 17.4145 11.4142 17.7502 11 17.7502H4C3.58579 17.7502 3.25 17.4145 3.25 17.0002Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconList as IconComponentType).keywords = [
  "list",
  "tilt",
  "inclination",
  "lean",
  "leaning",
  "name",
  "number",
  "sheet",
  "heel",
  "table",
];

export default IconList as IconComponentType;
