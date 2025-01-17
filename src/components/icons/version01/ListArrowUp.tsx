import { FC } from "react";

const IconListArrowUp: FC<IconProps> = ({
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
            d="M21 6.00024L3 6.00024"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M21 10.0002L3 10.0002"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M11 14.0002L3 14.0002"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M11 18.0002H3"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M20 16.5002L17.5 14.0002M17.5 14.0002L15 16.5002M17.5 14.0002V20.0002"
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
            d="M2.25 6.00024C2.25 5.58603 2.58579 5.25024 3 5.25024H21C21.4142 5.25024 21.75 5.58603 21.75 6.00024C21.75 6.41446 21.4142 6.75024 21 6.75024H3C2.58579 6.75024 2.25 6.41446 2.25 6.00024ZM2.25 10.0002C2.25 9.58603 2.58579 9.25024 3 9.25024H21C21.4142 9.25024 21.75 9.58603 21.75 10.0002C21.75 10.4145 21.4142 10.7502 21 10.7502H3C2.58579 10.7502 2.25 10.4145 2.25 10.0002ZM2.25 14.0002C2.25 13.586 2.58579 13.2502 3 13.2502H11C11.4142 13.2502 11.75 13.586 11.75 14.0002C11.75 14.4145 11.4142 14.7502 11 14.7502H3C2.58579 14.7502 2.25 14.4145 2.25 14.0002ZM2.25 18.0002C2.25 17.586 2.58579 17.2502 3 17.2502H11C11.4142 17.2502 11.75 17.586 11.75 18.0002C11.75 18.4145 11.4142 18.7502 11 18.7502H3C2.58579 18.7502 2.25 18.4145 2.25 18.0002Z"
            fill="currentColor"
          />
          <path
            d="M16.9697 13.4699C17.2626 13.177 17.7374 13.177 18.0303 13.4699L20.5303 15.9699C20.8232 16.2628 20.8232 16.7377 20.5303 17.0306C20.2374 17.3235 19.7626 17.3235 19.4697 17.0306L18.25 15.8109V20.0002C18.25 20.4145 17.9142 20.7502 17.5 20.7502C17.0858 20.7502 16.75 20.4145 16.75 20.0002V15.8109L15.5303 17.0306C15.2374 17.3235 14.7626 17.3235 14.4697 17.0306C14.1768 16.7377 14.1768 16.2628 14.4697 15.9699L16.9697 13.4699Z"
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
            d="M2.25 6.00024C2.25 5.58603 2.58579 5.25024 3 5.25024H21C21.4142 5.25024 21.75 5.58603 21.75 6.00024C21.75 6.41446 21.4142 6.75024 21 6.75024H3C2.58579 6.75024 2.25 6.41446 2.25 6.00024ZM2.25 10.0002C2.25 9.58603 2.58579 9.25024 3 9.25024H21C21.4142 9.25024 21.75 9.58603 21.75 10.0002C21.75 10.4145 21.4142 10.7502 21 10.7502H3C2.58579 10.7502 2.25 10.4145 2.25 10.0002ZM2.25 14.0002C2.25 13.586 2.58579 13.2502 3 13.2502H11C11.4142 13.2502 11.75 13.586 11.75 14.0002C11.75 14.4145 11.4142 14.7502 11 14.7502H3C2.58579 14.7502 2.25 14.4145 2.25 14.0002ZM16.9697 13.4699C17.2626 13.177 17.7374 13.177 18.0303 13.4699L20.5303 15.9699C20.8232 16.2628 20.8232 16.7377 20.5303 17.0306C20.2374 17.3235 19.7626 17.3235 19.4697 17.0306L18.25 15.8109V20.0002C18.25 20.4145 17.9142 20.7502 17.5 20.7502C17.0858 20.7502 16.75 20.4145 16.75 20.0002V15.8109L15.5303 17.0306C15.2374 17.3235 14.7626 17.3235 14.4697 17.0306C14.1768 16.7377 14.1768 16.2628 14.4697 15.9699L16.9697 13.4699ZM2.25 18.0002C2.25 17.586 2.58579 17.2502 3 17.2502H11C11.4142 17.2502 11.75 17.586 11.75 18.0002C11.75 18.4145 11.4142 18.7502 11 18.7502H3C2.58579 18.7502 2.25 18.4145 2.25 18.0002Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconListArrowUp as IconComponent).keywords = [
  "list",
  "arrow",
  "up",
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
];

export default IconListArrowUp as IconComponent;
