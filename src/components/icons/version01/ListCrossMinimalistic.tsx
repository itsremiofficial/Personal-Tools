import { FC } from "react";

const IconListCrossMinimalistic: FC<IconProps> = ({
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
            d="M11 16.0002H3"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M15 16.0002L20 11.0002M20 16.0002L15 11.0002"
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
            d="M2.25 6.00024C2.25 5.58603 2.58579 5.25024 3 5.25024H20C20.4142 5.25024 20.75 5.58603 20.75 6.00024C20.75 6.41446 20.4142 6.75024 20 6.75024H3C2.58579 6.75024 2.25 6.41446 2.25 6.00024ZM2.25 11.0002C2.25 10.586 2.58579 10.2502 3 10.2502H11C11.4142 10.2502 11.75 10.586 11.75 11.0002C11.75 11.4145 11.4142 11.7502 11 11.7502H3C2.58579 11.7502 2.25 11.4145 2.25 11.0002ZM2.25 16.0002C2.25 15.586 2.58579 15.2502 3 15.2502H11C11.4142 15.2502 11.75 15.586 11.75 16.0002C11.75 16.4145 11.4142 16.7502 11 16.7502H3C2.58579 16.7502 2.25 16.4145 2.25 16.0002Z"
            fill="currentColor"
          />
          <path
            d="M14.4697 10.4699C14.7626 10.177 15.2374 10.177 15.5303 10.4699L17.5 12.4396L19.4697 10.4699C19.7626 10.177 20.2374 10.177 20.5303 10.4699C20.8232 10.7628 20.8232 11.2377 20.5303 11.5306L18.5607 13.5002L20.5303 15.4699C20.8232 15.7628 20.8232 16.2377 20.5303 16.5306C20.2374 16.8235 19.7626 16.8235 19.4697 16.5306L17.5 14.5609L15.5303 16.5306C15.2374 16.8235 14.7626 16.8235 14.4697 16.5306C14.1768 16.2377 14.1768 15.7628 14.4697 15.4699L16.4393 13.5002L14.4697 11.5306C14.1768 11.2377 14.1768 10.7628 14.4697 10.4699Z"
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
            d="M2.25 6.00024C2.25 5.58603 2.58579 5.25024 3 5.25024H20C20.4142 5.25024 20.75 5.58603 20.75 6.00024C20.75 6.41446 20.4142 6.75024 20 6.75024H3C2.58579 6.75024 2.25 6.41446 2.25 6.00024ZM2.25 11.0002C2.25 10.586 2.58579 10.2502 3 10.2502H11C11.4142 10.2502 11.75 10.586 11.75 11.0002C11.75 11.4145 11.4142 11.7502 11 11.7502H3C2.58579 11.7502 2.25 11.4145 2.25 11.0002ZM14.4697 10.4699C14.7626 10.177 15.2374 10.177 15.5303 10.4699L17.5 12.4396L19.4697 10.4699C19.7626 10.177 20.2374 10.177 20.5303 10.4699C20.8232 10.7628 20.8232 11.2377 20.5303 11.5306L18.5607 13.5002L20.5303 15.4699C20.8232 15.7628 20.8232 16.2377 20.5303 16.5306C20.2374 16.8235 19.7626 16.8235 19.4697 16.5306L17.5 14.5609L15.5303 16.5306C15.2374 16.8235 14.7626 16.8235 14.4697 16.5306C14.1768 16.2377 14.1768 15.7628 14.4697 15.4699L16.4393 13.5002L14.4697 11.5306C14.1768 11.2377 14.1768 10.7628 14.4697 10.4699ZM2.25 16.0002C2.25 15.586 2.58579 15.2502 3 15.2502H11C11.4142 15.2502 11.75 15.586 11.75 16.0002C11.75 16.4145 11.4142 16.7502 11 16.7502H3C2.58579 16.7502 2.25 16.4145 2.25 16.0002Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconListCrossMinimalistic as IconComponent).keywords = [
  "list",
  "cross",
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
  "foil",
  "crisscross",
  "intersect",
  "transverse",
  "transversal",
  "crosswise",
  "mark",
  "cut across",
  "hybridization",
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

export default IconListCrossMinimalistic as IconComponent;
