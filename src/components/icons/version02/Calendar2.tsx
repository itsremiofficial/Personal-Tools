import { FC } from "react";

const IconCalendar2: FC<IconProps> = ({
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
            opacity={duotone ? "0.4" : "1"}
            d="M4.16992 9.09009H21.1699"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.6699 8.5V17C21.6699 20 20.1699 22 16.6699 22H8.66992C5.16992 22 3.66992 20 3.66992 17V8.5C3.66992 5.5 5.16992 3.5 8.66992 3.5H16.6699C20.1699 3.5 21.6699 5.5 21.6699 8.5Z"
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
            d="M17.4201 3.56V2C17.4201 1.59 17.0801 1.25 16.6701 1.25C16.2601 1.25 15.9201 1.59 15.9201 2V3.5H9.42014V2C9.42014 1.59 9.08014 1.25 8.67014 1.25C8.26014 1.25 7.92014 1.59 7.92014 2V3.56C5.22014 3.81 3.91015 5.42 3.71015 7.81C3.69015 8.1 3.93015 8.34 4.21015 8.34H21.1301C21.4201 8.34 21.6601 8.09 21.6301 7.81C21.4301 5.42 20.1201 3.81 17.4201 3.56Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20.6699 9.84009C21.2199 9.84009 21.6699 10.2901 21.6699 10.8401V17.0001C21.6699 20.0001 20.1699 22.0001 16.6699 22.0001H8.66992C5.16992 22.0001 3.66992 20.0001 3.66992 17.0001V10.8401C3.66992 10.2901 4.11992 9.84009 4.66992 9.84009H20.6699Z"
            fill="currentColor"
          />
          <path
            d="M9.16992 14.9999C9.03992 14.9999 8.90992 14.9699 8.78992 14.9199C8.66992 14.8699 8.55993 14.7999 8.45993 14.7099C8.36993 14.6099 8.29991 14.4999 8.24991 14.3799C8.19991 14.2599 8.16992 14.1299 8.16992 13.9999C8.16992 13.8699 8.19991 13.7399 8.24991 13.6199C8.29991 13.4999 8.36993 13.3899 8.45993 13.2899C8.55993 13.1999 8.66992 13.1299 8.78992 13.0799C9.02992 12.9799 9.30993 12.9799 9.54993 13.0799C9.66993 13.1299 9.77991 13.1999 9.87991 13.2899C9.96991 13.3899 10.0399 13.4999 10.0899 13.6199C10.1399 13.7399 10.1699 13.8699 10.1699 13.9999C10.1699 14.1299 10.1399 14.2599 10.0899 14.3799C10.0399 14.4999 9.96991 14.6099 9.87991 14.7099C9.77991 14.7999 9.66993 14.8699 9.54993 14.9199C9.42993 14.9699 9.29992 14.9999 9.16992 14.9999Z"
            fill="currentColor"
          />
          <path
            d="M12.6699 15.0001C12.5399 15.0001 12.4099 14.9701 12.2899 14.9201C12.1699 14.8701 12.0599 14.8001 11.9599 14.7101C11.7799 14.5201 11.6699 14.2601 11.6699 14.0001C11.6699 13.7401 11.7799 13.4801 11.9599 13.2901C12.0599 13.2001 12.1699 13.1301 12.2899 13.0801C12.5299 12.9701 12.8099 12.9701 13.0499 13.0801C13.1699 13.1301 13.2799 13.2001 13.3799 13.2901C13.5599 13.4801 13.6699 13.7401 13.6699 14.0001C13.6699 14.2601 13.5599 14.5201 13.3799 14.7101C13.2799 14.8001 13.1699 14.8701 13.0499 14.9201C12.9299 14.9701 12.7999 15.0001 12.6699 15.0001Z"
            fill="currentColor"
          />
          <path
            d="M9.16992 18.4999C9.03992 18.4999 8.90992 18.4699 8.78992 18.4199C8.66992 18.3699 8.55993 18.2999 8.45993 18.2099C8.27993 18.0199 8.16992 17.7599 8.16992 17.4999C8.16992 17.2399 8.27993 16.9799 8.45993 16.7899C8.55993 16.6999 8.66992 16.6299 8.78992 16.5799C9.02992 16.4799 9.30993 16.4799 9.54993 16.5799C9.66993 16.6299 9.77991 16.6999 9.87991 16.7899C10.0599 16.9799 10.1699 17.2399 10.1699 17.4999C10.1699 17.7599 10.0599 18.0199 9.87991 18.2099C9.77991 18.2999 9.66993 18.3699 9.54993 18.4199C9.42993 18.4699 9.29992 18.4999 9.16992 18.4999Z"
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
            d="M20.6699 9.84009H4.66992C4.11992 9.84009 3.66992 10.2901 3.66992 10.8401V17.0001C3.66992 20.0001 5.16992 22.0001 8.66992 22.0001H16.6699C20.1699 22.0001 21.6699 20.0001 21.6699 17.0001V10.8401C21.6699 10.2901 21.2199 9.84009 20.6699 9.84009ZM9.87992 18.2101C9.77992 18.3001 9.66992 18.3701 9.54992 18.4201C9.42992 18.4701 9.29992 18.5001 9.16992 18.5001C9.03992 18.5001 8.90992 18.4701 8.78992 18.4201C8.66992 18.3701 8.55992 18.3001 8.45992 18.2101C8.27992 18.0201 8.16992 17.7601 8.16992 17.5001C8.16992 17.2401 8.27992 16.9801 8.45992 16.7901C8.55992 16.7001 8.66992 16.6301 8.78992 16.5801C9.02992 16.4801 9.30992 16.4801 9.54992 16.5801C9.66992 16.6301 9.77992 16.7001 9.87992 16.7901C10.0599 16.9801 10.1699 17.2401 10.1699 17.5001C10.1699 17.7601 10.0599 18.0201 9.87992 18.2101ZM10.0899 14.3801C10.0399 14.5001 9.96992 14.6101 9.87992 14.7101C9.77992 14.8001 9.66992 14.8701 9.54992 14.9201C9.42992 14.9701 9.29992 15.0001 9.16992 15.0001C9.03992 15.0001 8.90992 14.9701 8.78992 14.9201C8.66992 14.8701 8.55992 14.8001 8.45992 14.7101C8.36992 14.6101 8.29992 14.5001 8.24992 14.3801C8.19992 14.2601 8.16992 14.1301 8.16992 14.0001C8.16992 13.8701 8.19992 13.7401 8.24992 13.6201C8.29992 13.5001 8.36992 13.3901 8.45992 13.2901C8.55992 13.2001 8.66992 13.1301 8.78992 13.0801C9.02992 12.9801 9.30992 12.9801 9.54992 13.0801C9.66992 13.1301 9.77992 13.2001 9.87992 13.2901C9.96992 13.3901 10.0399 13.5001 10.0899 13.6201C10.1399 13.7401 10.1699 13.8701 10.1699 14.0001C10.1699 14.1301 10.1399 14.2601 10.0899 14.3801ZM13.3799 14.7101C13.2799 14.8001 13.1699 14.8701 13.0499 14.9201C12.9299 14.9701 12.7999 15.0001 12.6699 15.0001C12.5399 15.0001 12.4099 14.9701 12.2899 14.9201C12.1699 14.8701 12.0599 14.8001 11.9599 14.7101C11.7799 14.5201 11.6699 14.2601 11.6699 14.0001C11.6699 13.7401 11.7799 13.4801 11.9599 13.2901C12.0599 13.2001 12.1699 13.1301 12.2899 13.0801C12.5299 12.9701 12.8099 12.9701 13.0499 13.0801C13.1699 13.1301 13.2799 13.2001 13.3799 13.2901C13.5599 13.4801 13.6699 13.7401 13.6699 14.0001C13.6699 14.2601 13.5599 14.5201 13.3799 14.7101Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCalendar2 as IconComponent).keywords = [
  "calendar",
  "2",
  "timeline",
  "chronology",
  "rota",
  "scheduling",
  "timetable",
  "program",
  "time-scale",
  "timeframe",
  "timescale",
  "wireless network",
  "sign on",
  "sign off",
  "put through",
  "back up",
  "ring up",
  "call up",
  "hang up",
  "read out",
];

export default IconCalendar2 as IconComponent;
