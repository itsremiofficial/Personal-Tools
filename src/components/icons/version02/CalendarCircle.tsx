import { FC } from "react";

const IconCalendarCircle: FC<IconProps> = ({
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
            d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M10.5601 5.83008V7.83008"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.7798 5.83008V7.83008"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.19971 10.1401H17.1397"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.1699 17.6702H11.1699C8.66992 17.6702 7.16992 15.8702 7.16992 13.6702V10.6702C7.16992 8.47017 8.66992 6.67017 11.1699 6.67017H14.1699C16.6699 6.67017 18.1699 8.47017 18.1699 10.6702V13.6702C18.1699 15.8702 16.6699 17.6702 14.1699 17.6702Z"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
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
            d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z"
            fill="currentColor"
          />
          <path
            d="M17.8197 9.44009C17.3997 8.47009 16.6097 7.7201 15.5197 7.3801V6.59009C15.5197 6.18009 15.1797 5.84009 14.7697 5.84009C14.3597 5.84009 14.0197 6.18009 14.0197 6.59009V7.18008H11.3097V6.59009C11.3097 6.18009 10.9697 5.84009 10.5597 5.84009C10.1497 5.84009 9.80974 6.18009 9.80974 6.59009V7.3801C8.71974 7.7201 7.92972 8.47009 7.50973 9.44009C7.36973 9.77009 7.60972 10.1501 7.96972 10.1501H17.3397C17.7197 10.1401 17.9597 9.77009 17.8197 9.44009Z"
            fill="currentColor"
          />
          <path
            d="M17.6699 11.1401C17.9499 11.1401 18.1699 11.3601 18.1699 11.6401V14.1701C18.1699 16.3701 16.6699 18.1701 14.1699 18.1701H11.1699C8.66992 18.1701 7.16992 16.3701 7.16992 14.1701V11.6401C7.16992 11.3601 7.38992 11.1401 7.66992 11.1401H17.6699Z"
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
            d="M12.6699 2C7.14992 2 2.66992 6.48 2.66992 12C2.66992 17.52 7.14992 22 12.6699 22C18.1899 22 22.6699 17.52 22.6699 12C22.6699 6.48 18.1899 2 12.6699 2ZM7.51992 9.44C7.93992 8.47 8.72992 7.72 9.81992 7.38V6.58C9.81992 6.17 10.1599 5.83 10.5699 5.83C10.9799 5.83 11.3199 6.17 11.3199 6.58V7.17H14.0299V6.58C14.0299 6.17 14.3699 5.83 14.7799 5.83C15.1899 5.83 15.5299 6.17 15.5299 6.58V7.37C16.6199 7.71 17.4099 8.46 17.8299 9.43C17.9699 9.76 17.7299 10.14 17.3699 10.14H7.97992C7.61992 10.14 7.37992 9.77 7.51992 9.44ZM18.1699 14.17C18.1699 16.37 16.6699 18.17 14.1699 18.17H11.1699C8.66992 18.17 7.16992 16.37 7.16992 14.17V11.64C7.16992 11.36 7.38992 11.14 7.66992 11.14H17.6699C17.9499 11.14 18.1699 11.36 18.1699 11.64V14.17Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCalendarCircle as IconComponent).keywords = [
  "calendar",
  "circle",
  "timeline",
  "chronology",
  "rota",
  "scheduling",
  "timetable",
  "program",
  "time-scale",
  "timeframe",
  "timescale",
  "round",
  "rotary",
  "environ",
  "roundabout",
  "circulate",
  "circuit",
  "encircle",
  "surround",
  "dress circle",
];

export default IconCalendarCircle as IconComponent;
