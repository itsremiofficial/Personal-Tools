import { FC } from "react";

const IconRefreshCircle: FC<IconProps> = ({
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
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M8.67969 14.5101C8.85969 14.8101 9.07968 15.0901 9.32968 15.3401C11.1697 17.1801 14.1597 17.1801 16.0097 15.3401C16.7597 14.5901 17.1897 13.64 17.3297 12.67"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.00977 11.3301C8.14977 10.3501 8.57977 9.41003 9.32977 8.66003C11.1698 6.82003 14.1598 6.82003 16.0098 8.66003C16.2698 8.92003 16.4798 9.20005 16.6598 9.49005"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.48975 17.18V14.51H11.1597"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.8497 6.82007V9.49005H14.1797"
              stroke="currentColor"
              strokeWidth={width}
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
            d="M17.43 11.9301C17.01 11.8601 16.64 12.1601 16.58 12.5701C16.46 13.4401 16.07 14.2201 15.47 14.8201C14.09 16.2001 11.95 16.3401 10.4 15.2701H11.15C11.56 15.2701 11.9 14.9301 11.9 14.5201C11.9 14.1101 11.56 13.7701 11.15 13.7701H8.47998C8.06998 13.7701 7.72998 14.1101 7.72998 14.5201V17.1901C7.72998 17.6001 8.06998 17.9401 8.47998 17.9401C8.88998 17.9401 9.22998 17.6001 9.22998 17.1901V16.2501C10.23 17.0601 11.44 17.4901 12.66 17.4901C14.06 17.4901 15.46 16.9601 16.53 15.8901C17.36 15.0601 17.89 13.9901 18.06 12.7901C18.13 12.3601 17.84 11.9801 17.43 11.9301Z"
            fill="currentColor"
          />
          <path
            d="M8.00985 12.0801C8.37985 12.0801 8.69984 11.8101 8.74984 11.4401C8.86984 10.5701 9.25985 9.79006 9.85985 9.19006C11.2399 7.81006 13.3799 7.67005 14.9299 8.74005H14.1799C13.7699 8.74005 13.4299 9.08005 13.4299 9.49005C13.4299 9.90005 13.7699 10.2401 14.1799 10.2401H16.8498C17.2598 10.2401 17.5998 9.90005 17.5998 9.49005V6.82007C17.5998 6.41007 17.2598 6.07007 16.8498 6.07007C16.4398 6.07007 16.0998 6.41007 16.0998 6.82007V7.76007C13.9498 6.02007 10.7999 6.13006 8.80987 8.12006C7.97987 8.95006 7.44984 10.02 7.27984 11.22C7.21984 11.63 7.50985 12.0101 7.91985 12.0701C7.93985 12.0801 7.97985 12.0801 8.00985 12.0801Z"
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
            d="M12.6699 2C7.14992 2 2.66992 6.48 2.66992 12C2.66992 17.52 7.14992 22 12.6699 22C18.1899 22 22.6699 17.52 22.6699 12C22.6699 6.48 18.1899 2 12.6699 2ZM7.26992 11.23C7.43992 10.04 7.96992 8.97 8.79992 8.13C10.7999 6.14 13.9499 6.03 16.0899 7.77V6.82C16.0899 6.41 16.4299 6.07 16.8399 6.07C17.2499 6.07 17.5899 6.41 17.5899 6.82V9.49C17.5899 9.9 17.2499 10.24 16.8399 10.24H14.1699C13.7599 10.24 13.4199 9.9 13.4199 9.49C13.4199 9.08 13.7599 8.74 14.1699 8.74H14.9199C13.3699 7.66 11.2299 7.81 9.84992 9.19C9.24992 9.79 8.86992 10.57 8.73992 11.44C8.68992 11.81 8.36992 12.08 7.99992 12.08C7.95992 12.08 7.92992 12.08 7.88992 12.07C7.49992 12.02 7.20992 11.64 7.26992 11.23ZM16.5399 15.87C15.4699 16.94 14.0699 17.47 12.6699 17.47C11.4499 17.47 10.2399 17.04 9.23992 16.23V17.17C9.23992 17.58 8.89992 17.92 8.48992 17.92C8.07992 17.92 7.73992 17.58 7.73992 17.17V14.5C7.73992 14.09 8.07992 13.75 8.48992 13.75H11.1599C11.5699 13.75 11.9099 14.09 11.9099 14.5C11.9099 14.91 11.5699 15.25 11.1599 15.25H10.4099C11.9599 16.33 14.0999 16.18 15.4799 14.8C16.0799 14.2 16.4599 13.42 16.5899 12.55C16.6499 12.14 17.0199 11.85 17.4399 11.91C17.8499 11.97 18.1299 12.35 18.0799 12.76C17.8999 13.97 17.3699 15.04 16.5399 15.87Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconRefreshCircle as IconComponent).keywords = [
  "refresh",
  "circle",
  "refreshen",
  "freshen",
  "review",
  "freshen up",
  "brush up",
  "refresher",
  "refreshment",
  "rejuvenate",
  "revive",
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

export default IconRefreshCircle as IconComponent;
