import { FC } from "react";

const IconTuning3: FC<IconProps> = ({
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
          <circle
            cx="12"
            cy="12.0005"
            r="2"
            transform="rotate(180 12 12.0005)"
            stroke="currentColor"
            strokeWidth={width}
          />
          <circle
            cx="20"
            cy="14.0005"
            r="2"
            transform="rotate(180 20 14.0005)"
            stroke="currentColor"
            strokeWidth={width}
          />
          <circle
            cx="2"
            cy="2"
            r="2"
            transform="matrix(-1 8.74228e-08 8.74228e-08 1 6 8.00049)"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M20 12.0005L20 5.00049"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M4 12.0005L4 19.0005"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M12 19.0005L12 14.0005"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M20 19.0005L20 16.0005"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M12 10.0005V5.00049M4 5.00049L4 7.66715"
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
            d="M4 12.0005C2.89543 12.0005 2 11.1051 2 10.0005C2 8.89592 2.89543 8.00049 4 8.00049C5.10457 8.00049 6 8.89592 6 10.0005C6 11.1051 5.10457 12.0005 4 12.0005Z"
            fill="currentColor"
          />
          <path
            d="M10 12.0005C10 10.8959 10.8954 10.0005 12 10.0005C13.1046 10.0005 14 10.8959 14 12.0005C14 13.1051 13.1046 14.0005 12 14.0005C10.8954 14.0005 10 13.1051 10 12.0005Z"
            fill="currentColor"
          />
          <path
            d="M18 14.0005C18 12.8959 18.8954 12.0005 20 12.0005C21.1046 12.0005 22 12.8959 22 14.0005C22 15.1051 21.1046 16.0005 20 16.0005C18.8954 16.0005 18 15.1051 18 14.0005Z"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.5" : "1"}>
            <path
              d="M12.75 10.1459C12.5184 10.0521 12.2652 10.0005 12 10.0005C11.7348 10.0005 11.4816 10.0521 11.25 10.1459V5.00049C11.25 4.58627 11.5858 4.25049 12 4.25049C12.4142 4.25049 12.75 4.58627 12.75 5.00049V10.1459Z"
              fill="currentColor"
            />
            <path
              d="M11.25 13.8551C11.4816 13.9489 11.7348 14.0005 12 14.0005C12.2652 14.0005 12.5184 13.9489 12.75 13.8551V19.0005C12.75 19.4147 12.4142 19.7505 12 19.7505C11.5858 19.7505 11.25 19.4147 11.25 19.0005V13.8551Z"
              fill="currentColor"
            />
            <path
              d="M19.25 12.1459C19.4816 12.0521 19.7348 12.0005 20 12.0005C20.2652 12.0005 20.5184 12.0521 20.75 12.1459V5.00049C20.75 4.58627 20.4142 4.25049 20 4.25049C19.5858 4.25049 19.25 4.58627 19.25 5.00049V12.1459Z"
              fill="currentColor"
            />
            <path
              d="M19.25 15.8551V19.0005C19.25 19.4147 19.5858 19.7505 20 19.7505C20.4142 19.7505 20.75 19.4147 20.75 19.0005V15.8551C20.5184 15.9489 20.2652 16.0005 20 16.0005C19.7348 16.0005 19.4816 15.9489 19.25 15.8551Z"
              fill="currentColor"
            />
            <path
              d="M4.75 8.14587C4.51839 8.05211 4.26523 8.00049 4 8.00049C3.73477 8.00049 3.48161 8.05212 3.25 8.14587V5.00049C3.25 4.58627 3.58579 4.25049 4 4.25049C4.41421 4.25049 4.75 4.58627 4.75 5.00049V8.14587Z"
              fill="currentColor"
            />
            <path
              d="M4.75 11.8551C4.51839 11.9489 4.26523 12.0005 4 12.0005C3.73478 12.0005 3.48161 11.9489 3.25 11.8551V19.0005C3.25 19.4147 3.58579 19.7505 4 19.7505C4.41421 19.7505 4.75 19.4147 4.75 19.0005L4.75 11.8551Z"
              fill="currentColor"
            />
          </g>
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
            d="M12 8.75049C11.5858 8.75049 11.25 8.4147 11.25 8.00049V5.00049C11.25 4.58627 11.5858 4.25049 12 4.25049C12.4142 4.25049 12.75 4.58627 12.75 5.00049V8.00049C12.75 8.4147 12.4142 8.75049 12 8.75049Z"
            fill="currentColor"
          />
          <path
            d="M4 12.0005C2.89543 12.0005 2 11.1051 2 10.0005C2 8.89592 2.89543 8.00049 4 8.00049C5.10457 8.00049 6 8.89592 6 10.0005C6 11.1051 5.10457 12.0005 4 12.0005Z"
            fill="currentColor"
          />
          <path
            d="M10 12.0005C10 10.8959 10.8954 10.0005 12 10.0005C13.1046 10.0005 14 10.8959 14 12.0005C14 13.1051 13.1046 14.0005 12 14.0005C10.8954 14.0005 10 13.1051 10 12.0005Z"
            fill="currentColor"
          />
          <path
            d="M18 14.0005C18 12.8959 18.8954 12.0005 20 12.0005C21.1046 12.0005 22 12.8959 22 14.0005C22 15.1051 21.1046 16.0005 20 16.0005C18.8954 16.0005 18 15.1051 18 14.0005Z"
            fill="currentColor"
          />
          <path
            d="M19.25 10.0005C19.25 10.4147 19.5858 10.7505 20 10.7505C20.4142 10.7505 20.75 10.4147 20.75 10.0005V5.00049C20.75 4.58627 20.4142 4.25049 20 4.25049C19.5858 4.25049 19.25 4.58627 19.25 5.00049V10.0005Z"
            fill="currentColor"
          />
          <path
            d="M4 13.2505C3.58579 13.2505 3.25 13.5863 3.25 14.0005L3.25 19.0005C3.25 19.4147 3.58579 19.7505 4 19.7505C4.41421 19.7505 4.75 19.4147 4.75 19.0005L4.75 14.0005C4.75 13.5863 4.41421 13.2505 4 13.2505Z"
            fill="currentColor"
          />
          <path
            d="M11.25 19.0005C11.25 19.4147 11.5858 19.7505 12 19.7505C12.4142 19.7505 12.75 19.4147 12.75 19.0005V16.0005C12.75 15.5863 12.4142 15.2505 12 15.2505C11.5858 15.2505 11.25 15.5863 11.25 16.0005V19.0005Z"
            fill="currentColor"
          />
          <path
            d="M20 19.7505C19.5858 19.7505 19.25 19.4147 19.25 19.0005V18.0005C19.25 17.5863 19.5858 17.2505 20 17.2505C20.4142 17.2505 20.75 17.5863 20.75 18.0005V19.0005C20.75 19.4147 20.4142 19.7505 20 19.7505Z"
            fill="currentColor"
          />
          <path
            d="M3.25 5.00049C3.25 4.58627 3.58579 4.25049 4 4.25049C4.41421 4.25049 4.75 4.58627 4.75 5.00049V6.00049C4.75 6.4147 4.41421 6.75049 4 6.75049C3.58579 6.75049 3.25 6.4147 3.25 6.00049L3.25 5.00049Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconTuning3 as IconComponent).keywords = [
  "tuning",
  "3",
  "melody",
  "tune up",
  "line",
  "strain",
  "air",
  "melodic line",
  "melodic phrase",
  "tuner",
  "audience",
  "omega",
  "wash out",
  "cut up",
  "pull out",
  "pull up",
  "pull over",
  "pull in",
  "work out",
  "ride down",
];

export default IconTuning3 as IconComponent;
