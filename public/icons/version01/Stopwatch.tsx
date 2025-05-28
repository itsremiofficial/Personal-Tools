import { FC } from "react";

const IconStopwatch: FC<IconProps> = ({
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
            d="M21 13.0005C21 17.9711 16.9706 22.0005 12 22.0005C7.02944 22.0005 3 17.9711 3 13.0005C3 8.02993 7.02944 4.00049 12 4.00049C16.9706 4.00049 21 8.02993 21 13.0005Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M12 13.0005V9.00049"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 2.00049H14"
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
            d="M12 23.0005C16.9706 23.0005 21 18.9711 21 14.0005C21 9.02993 16.9706 5.00049 12 5.00049C7.02944 5.00049 3 9.02993 3 14.0005C3 18.9711 7.02944 23.0005 12 23.0005Z"
            fill="currentColor"
          />
          <path
            d="M12 9.25049C12.4142 9.25049 12.75 9.58627 12.75 10.0005V14.0005C12.75 14.4147 12.4142 14.7505 12 14.7505C11.5858 14.7505 11.25 14.4147 11.25 14.0005V10.0005C11.25 9.58627 11.5858 9.25049 12 9.25049Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.25 2.75049C9.25 2.33627 9.58579 2.00049 10 2.00049H14C14.4142 2.00049 14.75 2.33627 14.75 2.75049C14.75 3.1647 14.4142 3.50049 14 3.50049H10C9.58579 3.50049 9.25 3.1647 9.25 2.75049Z"
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
            d="M12 22.0005C16.9706 22.0005 21 17.9711 21 13.0005C21 8.02993 16.9706 4.00049 12 4.00049C7.02944 4.00049 3 8.02993 3 13.0005C3 17.9711 7.02944 22.0005 12 22.0005ZM12 8.25049C12.4142 8.25049 12.75 8.58627 12.75 9.00049V13.0005C12.75 13.4147 12.4142 13.7505 12 13.7505C11.5858 13.7505 11.25 13.4147 11.25 13.0005V9.00049C11.25 8.58627 11.5858 8.25049 12 8.25049Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.25 2.00049C9.25 1.58627 9.58579 1.25049 10 1.25049H14C14.4142 1.25049 14.75 1.58627 14.75 2.00049C14.75 2.4147 14.4142 2.75049 14 2.75049H10C9.58579 2.75049 9.25 2.4147 9.25 2.00049Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconStopwatch as IconComponent).keywords = [
  "stopwatch",
  "stopo watch",
  "clock",
  "watch",
  "timekeeping",
  "timer",
  "time",
  "timing",
  "wristwatch",
  "chronometer",
];

export default IconStopwatch as IconComponent;
