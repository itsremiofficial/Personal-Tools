import { FC } from "react";

const IconCalendarSearch: FC<IconProps> = ({
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
            d="M8.66992 2V5"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.6699 2V5"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.8699 21.4C20.6372 21.4 22.0699 19.9673 22.0699 18.2C22.0699 16.4327 20.6372 15 18.8699 15C17.1026 15 15.6699 16.4327 15.6699 18.2C15.6699 19.9673 17.1026 21.4 18.8699 21.4Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.6699 22L21.6699 21"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M4.16992 9.09009H21.1699"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.0399 22H8.66992C5.16992 22 3.66992 20 3.66992 17V8.5C3.66992 5.5 5.16992 3.5 8.66992 3.5H16.6699C20.1699 3.5 21.6699 5.5 21.6699 8.5V13"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.6654 13.7H12.6744"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.96423 13.7H8.97322"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.96436 16.7H8.97334"
            stroke="currentColor"
            strokeWidth="2"
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
            d="M20.6699 9.84009C21.2199 9.84009 21.6699 10.2901 21.6699 10.8401V17.0001C21.6699 20.0001 20.1699 22.0001 16.6699 22.0001H8.66992C5.16992 22.0001 3.66992 20.0001 3.66992 17.0001V10.8401C3.66992 10.2901 4.11992 9.84009 4.66992 9.84009H20.6699Z"
            fill="currentColor"
          />
          <path
            d="M17.4202 3.56V2C17.4202 1.59 17.0802 1.25 16.6702 1.25C16.2602 1.25 15.9202 1.59 15.9202 2V3.5H9.42016V2C9.42016 1.59 9.08016 1.25 8.67016 1.25C8.26016 1.25 7.92016 1.59 7.92016 2V3.56C5.22016 3.81 3.91015 5.42 3.71015 7.81C3.69015 8.1 3.93015 8.34 4.21015 8.34H21.1302C21.4202 8.34 21.6602 8.09 21.6302 7.81C21.4302 5.42 20.1202 3.81 17.4202 3.56Z"
            fill="currentColor"
          />
          <path
            d="M16.3298 18.47L15.5898 17.73C15.9698 17.15 16.1998 16.45 16.1998 15.7C16.1998 13.66 14.5398 12 12.4998 12C10.4598 12 8.7998 13.66 8.7998 15.7C8.7998 17.74 10.4598 19.4 12.4998 19.4C13.2498 19.4 13.9498 19.17 14.5298 18.79L15.2698 19.53C15.4198 19.68 15.6098 19.75 15.7998 19.75C15.9898 19.75 16.1798 19.68 16.3298 19.53C16.6198 19.24 16.6198 18.76 16.3298 18.47Z"
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
            d="M17.4202 3.56V2C17.4202 1.59 17.0802 1.25 16.6702 1.25C16.2602 1.25 15.9202 1.59 15.9202 2V3.5H9.42015V2C9.42015 1.59 9.08015 1.25 8.67015 1.25C8.26015 1.25 7.92015 1.59 7.92015 2V3.56C5.22015 3.81 3.91015 5.42 3.71015 7.81C3.69015 8.1 3.93015 8.34 4.21015 8.34H21.1301C21.4202 8.34 21.6602 8.09 21.6301 7.81C21.4301 5.42 20.1202 3.81 17.4202 3.56Z"
            fill="currentColor"
          />
          <path
            d="M20.6699 9.84009H4.66992C4.11992 9.84009 3.66992 10.2901 3.66992 10.8401V17.0001C3.66992 20.0001 5.16992 22.0001 8.66992 22.0001H16.6699C20.1699 22.0001 21.6699 20.0001 21.6699 17.0001V10.8401C21.6699 10.2901 21.2199 9.84009 20.6699 9.84009ZM16.3299 19.5301C16.1799 19.6801 15.9899 19.7501 15.7999 19.7501C15.6099 19.7501 15.4199 19.6801 15.2699 19.5301L14.5299 18.7901C13.9499 19.1701 13.2499 19.4001 12.4999 19.4001C10.4599 19.4001 8.79992 17.7401 8.79992 15.7001C8.79992 13.6601 10.4599 12.0001 12.4999 12.0001C14.5399 12.0001 16.1999 13.6601 16.1999 15.7001C16.1999 16.4501 15.9699 17.1501 15.5899 17.7301L16.3299 18.4701C16.6199 18.7601 16.6199 19.2401 16.3299 19.5301Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCalendarSearch as IconComponent).keywords = [
  "calendar",
  "search",
  "timeline",
  "chronology",
  "rota",
  "scheduling",
  "timetable",
  "program",
  "time-scale",
  "timeframe",
  "timescale",
  "seek",
  "look for",
  "explore",
  "lookup",
  "research",
  "look",
  "hunting",
  "hunt",
  "seeking",
];

export default IconCalendarSearch as IconComponent;
