import { FC } from "react";

const IconCalendarMark: FC<IconProps> = ({
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
            d="M2 12.0005C2 8.22925 2 6.34363 3.17157 5.17206C4.34315 4.00049 6.22876 4.00049 10 4.00049H14C17.7712 4.00049 19.6569 4.00049 20.8284 5.17206C22 6.34363 22 8.22925 22 12.0005V14.0005C22 17.7717 22 19.6573 20.8284 20.8289C19.6569 22.0005 17.7712 22.0005 14 22.0005H10C6.22876 22.0005 4.34315 22.0005 3.17157 20.8289C2 19.6573 2 17.7717 2 14.0005V12.0005Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M7 4.00049V2.50049"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M17 4.00049V2.50049"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M2 9.00049H22"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <circle
            cx="16.5"
            cy="16.5005"
            r="1.5"
            stroke="currentColor"
            strokeWidth={width}
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
            d="M6.96006 2.00049C7.37758 2.00049 7.71605 2.31045 7.71605 2.6928V4.08932C8.38663 4.07741 9.13829 4.07741 9.98402 4.07741H14.016C14.8617 4.07741 15.6134 4.07741 16.284 4.08932V2.6928C16.284 2.31045 16.6224 2.00049 17.0399 2.00049C17.4575 2.00049 17.7959 2.31045 17.7959 2.6928V4.15057C19.2468 4.25696 20.1992 4.51806 20.899 5.15886C21.5987 5.79966 21.8838 6.67188 22 8.00049V9.00049H2V8.00049C2.11618 6.67188 2.4013 5.79966 3.10104 5.15886C3.80079 4.51806 4.75323 4.25696 6.20406 4.15057V2.6928C6.20406 2.31045 6.54253 2.00049 6.96006 2.00049Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M22 14.0005V12.0005C22 11.1615 21.9873 9.66575 21.9744 9.00049H2.00586C1.99296 9.66575 2.00564 11.1615 2.00564 12.0005V14.0005C2.00564 17.7717 2.00564 19.6573 3.17688 20.8289C4.34813 22.0005 6.23321 22.0005 10.0034 22.0005H14.0023C17.7724 22.0005 19.6575 22.0005 20.8288 20.8289C22 19.6573 22 17.7717 22 14.0005Z"
            fill="currentColor"
          />
          <path
            d="M18 16.5005C18 17.3289 17.3284 18.0005 16.5 18.0005C15.6716 18.0005 15 17.3289 15 16.5005C15 15.6721 15.6716 15.0005 16.5 15.0005C17.3284 15.0005 18 15.6721 18 16.5005Z"
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
            d="M7.75 2.50049C7.75 2.08627 7.41421 1.75049 7 1.75049C6.58579 1.75049 6.25 2.08627 6.25 2.50049V4.07975C4.81067 4.195 3.86577 4.47786 3.17157 5.17206C2.47737 5.86626 2.19451 6.81116 2.07926 8.25049H21.9207C21.8055 6.81116 21.5226 5.86626 20.8284 5.17206C20.1342 4.47786 19.1893 4.195 17.75 4.07975V2.50049C17.75 2.08627 17.4142 1.75049 17 1.75049C16.5858 1.75049 16.25 2.08627 16.25 2.50049V4.01339C15.5847 4.00049 14.839 4.00049 14 4.00049H10C9.16097 4.00049 8.41527 4.00049 7.75 4.01339V2.50049Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22 12.0005V14.0005C22 17.7717 22 19.6573 20.8284 20.8289C19.6569 22.0005 17.7712 22.0005 14 22.0005H10C6.22876 22.0005 4.34315 22.0005 3.17157 20.8289C2 19.6573 2 17.7717 2 14.0005V12.0005C2 11.1615 2 10.4158 2.0129 9.75049H21.9871C22 10.4158 22 11.1615 22 12.0005ZM16.5 18.0005C17.3284 18.0005 18 17.3289 18 16.5005C18 15.6721 17.3284 15.0005 16.5 15.0005C15.6716 15.0005 15 15.6721 15 16.5005C15 17.3289 15.6716 18.0005 16.5 18.0005Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCalendarMark as IconComponent).keywords = [
  "calendar",
  "mark",
  "timeline",
  "chronology",
  "rota",
  "scheduling",
  "timetable",
  "program",
  "time-scale",
  "timeframe",
  "timescale",
  "crisscross",
  "mark off",
  "set",
  "tag",
  "cross out",
  "cross off",
  "tick off",
  "check off",
  "label",
];

export default IconCalendarMark as IconComponent;
