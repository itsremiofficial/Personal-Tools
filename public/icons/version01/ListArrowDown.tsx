import { FC } from "react";

const IconListArrowDown: FC<IconProps> = ({
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
            d="M15 17.5002L17.5 20.0002M17.5 20.0002L20 17.5002M17.5 20.0002V14.0002"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
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
            d="M17.5 13.2502C17.9142 13.2502 18.25 13.586 18.25 14.0002V18.1896L19.4697 16.9699C19.7626 16.677 20.2374 16.677 20.5303 16.9699C20.8232 17.2628 20.8232 17.7377 20.5303 18.0306L18.0303 20.5306C17.7374 20.8235 17.2626 20.8235 16.9697 20.5306L14.4697 18.0306C14.1768 17.7377 14.1768 17.2628 14.4697 16.9699C14.7626 16.677 15.2374 16.677 15.5303 16.9699L16.75 18.1896V14.0002C16.75 13.586 17.0858 13.2502 17.5 13.2502Z"
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
            d="M2.25 6.00024C2.25 5.58603 2.58579 5.25024 3 5.25024H21C21.4142 5.25024 21.75 5.58603 21.75 6.00024C21.75 6.41446 21.4142 6.75024 21 6.75024H3C2.58579 6.75024 2.25 6.41446 2.25 6.00024ZM2.25 10.0002C2.25 9.58603 2.58579 9.25024 3 9.25024H21C21.4142 9.25024 21.75 9.58603 21.75 10.0002C21.75 10.4145 21.4142 10.7502 21 10.7502H3C2.58579 10.7502 2.25 10.4145 2.25 10.0002ZM2.25 14.0002C2.25 13.586 2.58579 13.2502 3 13.2502H11C11.4142 13.2502 11.75 13.586 11.75 14.0002C11.75 14.4145 11.4142 14.7502 11 14.7502H3C2.58579 14.7502 2.25 14.4145 2.25 14.0002ZM17.5 13.2502C17.9142 13.2502 18.25 13.586 18.25 14.0002V18.1896L19.4697 16.9699C19.7626 16.677 20.2374 16.677 20.5303 16.9699C20.8232 17.2628 20.8232 17.7377 20.5303 18.0306L18.0303 20.5306C17.7374 20.8235 17.2626 20.8235 16.9697 20.5306L14.4697 18.0306C14.1768 17.7377 14.1768 17.2628 14.4697 16.9699C14.7626 16.677 15.2374 16.677 15.5303 16.9699L16.75 18.1896V14.0002C16.75 13.586 17.0858 13.2502 17.5 13.2502ZM2.25 18.0002C2.25 17.586 2.58579 17.2502 3 17.2502H11C11.4142 17.2502 11.75 17.586 11.75 18.0002C11.75 18.4145 11.4142 18.7502 11 18.7502H3C2.58579 18.7502 2.25 18.4145 2.25 18.0002Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconListArrowDown as IconComponent).keywords = [
  "list",
  "arrow",
  "down",
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
  "downwards",
  "downward",
  "downbound",
  "falling",
  "fallen",
  "pull down",
  "downwardly",
  "declining",
  "descending",
];

export default IconListArrowDown as IconComponent;
