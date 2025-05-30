import { FC } from "react";

const IconReply2: FC<IconProps> = ({
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
            d="M9.5 17L4.5 12L9.5 7"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M4.5 12L14.5 12C16.1667 12 19.5 11 19.5 7"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.0303 17.5303C9.73744 17.8232 9.26256 17.8232 8.96967 17.5303L3.96967 12.5303C3.67678 12.2374 3.67678 11.7626 3.96967 11.4697L8.96967 6.46967C9.26256 6.17678 9.73744 6.17678 10.0303 6.46967C10.3232 6.76256 10.3232 7.23744 10.0303 7.53033L5.56066 12L10.0303 16.4697C10.3232 16.7626 10.3232 17.2374 10.0303 17.5303Z"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.5" : "1"}>
            <path
              d="M6.31066 12.75H14.5C15.4534 12.75 16.8667 12.4702 18.0632 11.6086C19.298 10.7196 20.25 9.24444 20.25 7C20.25 6.58578 19.9142 6.25 19.5 6.25C19.0858 6.25 18.75 6.58578 18.75 7C18.75 8.75556 18.0353 9.7804 17.1868 10.3913C16.3 11.0298 15.2133 11.25 14.5 11.25L6.31066 11.25L5.56066 12L6.31066 12.75Z"
              fill="currentColor"
            />
            <path
              d="M3.80691 12.2871C3.77024 12.1987 3.75 12.1017 3.75 12C3.75 12.0977 3.76897 12.1954 3.80691 12.2871Z"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.5 6.25C19.9142 6.25 20.25 6.58579 20.25 7C20.25 9.24444 19.298 10.7196 18.0632 11.6087C16.8667 12.4702 15.4534 12.75 14.5 12.75L6.31066 12.75L10.0303 16.4697C10.3232 16.7626 10.3232 17.2374 10.0303 17.5303C9.73744 17.8232 9.26256 17.8232 8.96967 17.5303L3.96967 12.5303C3.67678 12.2374 3.67678 11.7626 3.96967 11.4697L8.96967 6.46967C9.26256 6.17678 9.73744 6.17678 10.0303 6.46967C10.3232 6.76256 10.3232 7.23744 10.0303 7.53033L6.31066 11.25L14.5 11.25C15.2133 11.25 16.3 11.0298 17.1868 10.3913C18.0353 9.7804 18.75 8.75556 18.75 7C18.75 6.58579 19.0858 6.25 19.5 6.25Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconReply2 as IconComponent).keywords = [
  "reply",
  "2",
  "response",
  "respond",
  "answer",
  "answering",
  "responding",
  "responder",
  "respondent",
  "responsive",
  "reaction",
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

export default IconReply2 as IconComponent;
