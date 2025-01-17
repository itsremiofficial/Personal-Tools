import { FC } from "react";

const IconListArrowUpMinimalistic: FC<IconProps> = ({
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
            d="M11 11.0002L3 11.0002"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M12 16.0002H3"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M15 11.5002L17.5 9.00024M17.5 9.00024L20 11.5002M17.5 9.00024V17.0002"
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
            d="M2.25 6.00024C2.25 5.58603 2.58579 5.25024 3 5.25024H20C20.4142 5.25024 20.75 5.58603 20.75 6.00024C20.75 6.41446 20.4142 6.75024 20 6.75024H3C2.58579 6.75024 2.25 6.41446 2.25 6.00024ZM2.25 11.0002C2.25 10.586 2.58579 10.2502 3 10.2502H11C11.4142 10.2502 11.75 10.586 11.75 11.0002C11.75 11.4145 11.4142 11.7502 11 11.7502H3C2.58579 11.7502 2.25 11.4145 2.25 11.0002ZM2.25 16.0002C2.25 15.586 2.58579 15.2502 3 15.2502H12C12.4142 15.2502 12.75 15.586 12.75 16.0002C12.75 16.4145 12.4142 16.7502 12 16.7502H3C2.58579 16.7502 2.25 16.4145 2.25 16.0002Z"
            fill="currentColor"
          />
          <path
            d="M16.9697 8.46991C17.2626 8.17702 17.7374 8.17702 18.0303 8.46991L20.5303 10.9699C20.8232 11.2628 20.8232 11.7377 20.5303 12.0306C20.2374 12.3235 19.7626 12.3235 19.4697 12.0306L18.25 10.8109V17.0002C18.25 17.4145 17.9142 17.7502 17.5 17.7502C17.0858 17.7502 16.75 17.4145 16.75 17.0002V10.8109L15.5303 12.0306C15.2374 12.3235 14.7626 12.3235 14.4697 12.0306C14.1768 11.7377 14.1768 11.2628 14.4697 10.9699L16.9697 8.46991Z"
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
            d="M2.25 6.00024C2.25 5.58603 2.58579 5.25024 3 5.25024H20C20.4142 5.25024 20.75 5.58603 20.75 6.00024C20.75 6.41446 20.4142 6.75024 20 6.75024H3C2.58579 6.75024 2.25 6.41446 2.25 6.00024ZM16.9697 8.46991C17.2626 8.17702 17.7374 8.17702 18.0303 8.46991L20.5303 10.9699C20.8232 11.2628 20.8232 11.7377 20.5303 12.0306C20.2374 12.3235 19.7626 12.3235 19.4697 12.0306L18.25 10.8109V17.0002C18.25 17.4145 17.9142 17.7502 17.5 17.7502C17.0858 17.7502 16.75 17.4145 16.75 17.0002V10.8109L15.5303 12.0306C15.2374 12.3235 14.7626 12.3235 14.4697 12.0306C14.1768 11.7377 14.1768 11.2628 14.4697 10.9699L16.9697 8.46991ZM2.25 11.0002C2.25 10.586 2.58579 10.2502 3 10.2502H11C11.4142 10.2502 11.75 10.586 11.75 11.0002C11.75 11.4145 11.4142 11.7502 11 11.7502H3C2.58579 11.7502 2.25 11.4145 2.25 11.0002ZM2.25 16.0002C2.25 15.586 2.58579 15.2502 3 15.2502H12C12.4142 15.2502 12.75 15.586 12.75 16.0002C12.75 16.4145 12.4142 16.7502 12 16.7502H3C2.58579 16.7502 2.25 16.4145 2.25 16.0002Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconListArrowUpMinimalistic as IconComponent).keywords = [
  "list",
  "arrow",
  "up",
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
  "pointer",
  "archer",
  "archery",
  "dart",
  "arrowhead",
  "bolt",
  "spike",
  "rope",
  "roof",
  "upbound",
  "upwardly",
  "ascending",
  "upward",
  "upwards",
  "rising",
  "astir",
  "ahead",
  "awake",
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

export default IconListArrowUpMinimalistic as IconComponent;
