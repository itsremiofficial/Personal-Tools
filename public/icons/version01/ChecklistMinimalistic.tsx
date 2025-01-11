import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconChecklistMinimalistic: FC<IconProps> = ({
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
            d="M2 12.0002C2 7.2862 2 4.92918 3.46447 3.46471C4.92893 2.00024 7.28595 2.00024 12 2.00024C16.714 2.00024 19.0711 2.00024 20.5355 3.46471C22 4.92918 22 7.2862 22 12.0002C22 16.7143 22 19.0713 20.5355 20.5358C19.0711 22.0002 16.714 22.0002 12 22.0002C7.28595 22.0002 4.92893 22.0002 3.46447 20.5358C2 19.0713 2 16.7143 2 12.0002Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M6 15.8002L7.14286 17.0002L10 14.0002"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 8.80024L7.14286 10.0002L10 7.00024"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13 9.00024L18 9.00024"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M13 16.0002H18"
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
            d="M2 12.0002C2 7.2862 2 4.92918 3.46447 3.46471C4.92893 2.00024 7.28595 2.00024 12 2.00024C16.714 2.00024 19.0711 2.00024 20.5355 3.46471C22 4.92918 22 7.2862 22 12.0002C22 16.7143 22 19.0713 20.5355 20.5358C19.0711 22.0002 16.714 22.0002 12 22.0002C7.28595 22.0002 4.92893 22.0002 3.46447 20.5358C2 19.0713 2 16.7143 2 12.0002Z"
            fill="currentColor"
          />
          <path
            d="M10.5431 7.51749C10.8288 7.21754 10.8172 6.74281 10.5172 6.45714C10.2173 6.17148 9.74256 6.18306 9.4569 6.483L7.14286 8.91275L6.5431 8.283C6.25744 7.98306 5.78271 7.97148 5.48276 8.25714C5.18281 8.54281 5.17123 9.01754 5.4569 9.31749L6.59976 10.5175C6.74131 10.6661 6.9376 10.7502 7.14286 10.7502C7.34812 10.7502 7.5444 10.6661 7.68596 10.5175L10.5431 7.51749Z"
            fill="currentColor"
          />
          <path
            d="M13 8.25025C12.5858 8.25025 12.25 8.58603 12.25 9.00025C12.25 9.41446 12.5858 9.75025 13 9.75025H18C18.4142 9.75025 18.75 9.41446 18.75 9.00025C18.75 8.58603 18.4142 8.25025 18 8.25025H13Z"
            fill="currentColor"
          />
          <path
            d="M10.5431 14.5175C10.8288 14.2175 10.8172 13.7428 10.5172 13.4571C10.2173 13.1715 9.74256 13.1831 9.4569 13.483L7.14286 15.9127L6.5431 15.283C6.25744 14.9831 5.78271 14.9715 5.48276 15.2571C5.18281 15.5428 5.17123 16.0175 5.4569 16.3175L6.59976 17.5175C6.74131 17.6661 6.9376 17.7502 7.14286 17.7502C7.34812 17.7502 7.5444 17.6661 7.68596 17.5175L10.5431 14.5175Z"
            fill="currentColor"
          />
          <path
            d="M13 15.2502C12.5858 15.2502 12.25 15.586 12.25 16.0002C12.25 16.4145 12.5858 16.7502 13 16.7502H18C18.4142 16.7502 18.75 16.4145 18.75 16.0002C18.75 15.586 18.4142 15.2502 18 15.2502H13Z"
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
            d="M3.46447 3.46471C2 4.92918 2 7.2862 2 12.0002C2 16.7143 2 19.0713 3.46447 20.5358C4.92893 22.0002 7.28595 22.0002 12 22.0002C16.714 22.0002 19.0711 22.0002 20.5355 20.5358C22 19.0713 22 16.7143 22 12.0002C22 7.2862 22 4.92918 20.5355 3.46471C19.0711 2.00024 16.714 2.00024 12 2.00024C7.28595 2.00024 4.92893 2.00024 3.46447 3.46471ZM10.5431 7.51749C10.8288 7.21754 10.8172 6.74281 10.5172 6.45714C10.2173 6.17148 9.74256 6.18306 9.4569 6.483L7.14286 8.91275L6.5431 8.283C6.25744 7.98306 5.78271 7.97148 5.48276 8.25714C5.18281 8.54281 5.17123 9.01754 5.4569 9.31749L6.59976 10.5175C6.74131 10.6661 6.9376 10.7502 7.14286 10.7502C7.34812 10.7502 7.5444 10.6661 7.68596 10.5175L10.5431 7.51749ZM13 8.25025C12.5858 8.25025 12.25 8.58603 12.25 9.00025C12.25 9.41446 12.5858 9.75025 13 9.75025H18C18.4142 9.75025 18.75 9.41446 18.75 9.00025C18.75 8.58603 18.4142 8.25025 18 8.25025H13ZM10.5431 14.5175C10.8288 14.2175 10.8172 13.7428 10.5172 13.4571C10.2173 13.1715 9.74256 13.1831 9.4569 13.483L7.14286 15.9127L6.5431 15.283C6.25744 14.9831 5.78271 14.9715 5.48276 15.2571C5.18281 15.5428 5.17123 16.0175 5.4569 16.3175L6.59976 17.5175C6.74131 17.6661 6.9376 17.7502 7.14286 17.7502C7.34812 17.7502 7.5444 17.6661 7.68596 17.5175L10.5431 14.5175ZM13 15.2502C12.5858 15.2502 12.25 15.586 12.25 16.0002C12.25 16.4145 12.5858 16.7502 13 16.7502H18C18.4142 16.7502 18.75 16.4145 18.75 16.0002C18.75 15.586 18.4142 15.2502 18 15.2502H13Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconChecklistMinimalistic as IconComponentType).keywords = [
  "checklist",
  "minimalistic",
  "listed",
  "listing",
  "aide-mémoire",
  "inventory",
  "schedule",
  "audit",
  "reference",
  "summary",
  "directory",
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

export default IconChecklistMinimalistic as IconComponentType;