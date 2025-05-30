import { FC } from "react";

const IconTriangle: FC<IconProps> = ({
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
          <path
            d="M11.5698 2L1.56982 12L11.5698 22V18L5.56982 12L11.5698 6V2Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.5698 2L23.5698 12L13.5698 22V18L19.5698 12L13.5698 6V2Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M11.5698 9L8.56982 12L11.5698 15V9Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
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
            opacity={duotone ? "0.58" : "1"}
            d="M24.6699 0H0.669922V24H24.6699V0Z"
            fill="none"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10.7198 2.85003L1.92979 11.64C1.72979 11.84 1.72979 12.15 1.92979 12.35L10.7198 21.14C11.0398 21.45 11.5698 21.23 11.5698 20.79V18.2C11.5698 18.07 11.5198 17.94 11.4198 17.85L5.91978 12.35C5.71978 12.15 5.71978 11.84 5.91978 11.64L11.4198 6.14003C11.5098 6.05003 11.5698 5.92003 11.5698 5.79003V3.20003C11.5698 2.76003 11.0298 2.54003 10.7198 2.85003Z"
            fill="currentColor"
          />
          <path
            d="M14.4198 2.85003L23.2098 11.64C23.4098 11.84 23.4098 12.15 23.2098 12.35L14.4198 21.14C14.1098 21.45 13.5698 21.23 13.5698 20.79V18.2C13.5698 18.07 13.6198 17.94 13.7198 17.85L19.2198 12.35C19.4198 12.15 19.4198 11.84 19.2198 11.64L13.7198 6.14003C13.6298 6.05003 13.5698 5.92003 13.5698 5.79003V3.20003C13.5698 2.76003 14.1098 2.54003 14.4198 2.85003Z"
            fill="currentColor"
          />
          <path
            d="M10.7198 9.85003L8.92979 11.64C8.72979 11.84 8.72979 12.15 8.92979 12.35L10.7198 14.14C11.0398 14.45 11.5698 14.23 11.5698 13.79V10.2C11.5698 9.76003 11.0298 9.54003 10.7198 9.85003Z"
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
            d="M10.7198 2.85L1.92979 11.64C1.72979 11.84 1.72979 12.15 1.92979 12.35L10.7198 21.14C11.0398 21.45 11.5698 21.23 11.5698 20.79V18.2C11.5698 18.07 11.5198 17.94 11.4198 17.85L5.91978 12.35C5.71978 12.15 5.71978 11.84 5.91978 11.64L11.4198 6.14001C11.5098 6.05001 11.5698 5.92 11.5698 5.79V3.20001C11.5698 2.76001 11.0298 2.54 10.7198 2.85Z"
            fill="none"
          />
          <path
            d="M14.4198 2.85L23.2098 11.64C23.4098 11.84 23.4098 12.15 23.2098 12.35L14.4198 21.14C14.1098 21.45 13.5698 21.23 13.5698 20.79V18.2C13.5698 18.07 13.6198 17.94 13.7198 17.85L19.2198 12.35C19.4198 12.15 19.4198 11.84 19.2198 11.64L13.7198 6.14001C13.6298 6.05001 13.5698 5.92 13.5698 5.79V3.20001C13.5698 2.76001 14.1098 2.54 14.4198 2.85Z"
            fill="none"
          />
          <path
            d="M10.7198 9.85L8.92979 11.64C8.72979 11.84 8.72979 12.15 8.92979 12.35L10.7198 14.14C11.0398 14.45 11.5698 14.23 11.5698 13.79V10.2C11.5698 9.76001 11.0298 9.54 10.7198 9.85Z"
            fill="none"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconTriangle as IconComponent).keywords = [
  "triangle",
  "trigon",
  "trilateral",
  "triangular",
  "direction",
  "tripartite",
  "trio",
  "triptych",
  "delta",
  "wye",
];

export default IconTriangle as IconComponent;
