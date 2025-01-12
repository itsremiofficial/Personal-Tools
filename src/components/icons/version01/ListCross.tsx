import { FC } from "react";

const IconListCross: FC<IconProps> = ({
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
            d="M15 18.5002L20 13.5002M20 18.5002L15 13.5002"
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
            d="M14.4697 12.9699C14.7626 12.677 15.2374 12.677 15.5303 12.9699L17.5 14.9396L19.4697 12.9699C19.7626 12.677 20.2374 12.677 20.5303 12.9699C20.8232 13.2628 20.8232 13.7377 20.5303 14.0306L18.5607 16.0002L20.5303 17.9699C20.8232 18.2628 20.8232 18.7377 20.5303 19.0306C20.2374 19.3235 19.7626 19.3235 19.4697 19.0306L17.5 17.0609L15.5303 19.0306C15.2374 19.3235 14.7626 19.3235 14.4697 19.0306C14.1768 18.7377 14.1768 18.2628 14.4697 17.9699L16.4393 16.0002L14.4697 14.0306C14.1768 13.7377 14.1768 13.2628 14.4697 12.9699Z"
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
            d="M2.25 6.00024C2.25 5.58603 2.58579 5.25024 3 5.25024H21C21.4142 5.25024 21.75 5.58603 21.75 6.00024C21.75 6.41446 21.4142 6.75024 21 6.75024H3C2.58579 6.75024 2.25 6.41446 2.25 6.00024ZM2.25 10.0002C2.25 9.58603 2.58579 9.25024 3 9.25024H21C21.4142 9.25024 21.75 9.58603 21.75 10.0002C21.75 10.4145 21.4142 10.7502 21 10.7502H3C2.58579 10.7502 2.25 10.4145 2.25 10.0002ZM14.4697 12.9699C14.7626 12.677 15.2374 12.677 15.5303 12.9699L17.5 14.9396L19.4697 12.9699C19.7626 12.677 20.2374 12.677 20.5303 12.9699C20.8232 13.2628 20.8232 13.7377 20.5303 14.0306L18.5607 16.0002L20.5303 17.9699C20.8232 18.2628 20.8232 18.7377 20.5303 19.0306C20.2374 19.3235 19.7626 19.3235 19.4697 19.0306L17.5 17.0609L15.5303 19.0306C15.2374 19.3235 14.7626 19.3235 14.4697 19.0306C14.1768 18.7377 14.1768 18.2628 14.4697 17.9699L16.4393 16.0002L14.4697 14.0306C14.1768 13.7377 14.1768 13.2628 14.4697 12.9699ZM2.25 14.0002C2.25 13.586 2.58579 13.2502 3 13.2502H11C11.4142 13.2502 11.75 13.586 11.75 14.0002C11.75 14.4145 11.4142 14.7502 11 14.7502H3C2.58579 14.7502 2.25 14.4145 2.25 14.0002ZM2.25 18.0002C2.25 17.586 2.58579 17.2502 3 17.2502H11C11.4142 17.2502 11.75 17.586 11.75 18.0002C11.75 18.4145 11.4142 18.7502 11 18.7502H3C2.58579 18.7502 2.25 18.4145 2.25 18.0002Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconListCross as IconComponent).keywords = [
  "list",
  "cross",
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
];

export default IconListCross as IconComponent;
