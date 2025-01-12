import { FC } from "react";

const IconServer2: FC<IconProps> = ({
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
            d="M2 17C2 15.1144 2 14.1716 2.58579 13.5858C3.17157 13 4.11438 13 6 13H18C19.8856 13 20.8284 13 21.4142 13.5858C22 14.1716 22 15.1144 22 17C22 18.8856 22 19.8284 21.4142 20.4142C20.8284 21 19.8856 21 18 21H6C4.11438 21 3.17157 21 2.58579 20.4142C2 19.8284 2 18.8856 2 17Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M2 6C2 4.11438 2 3.17157 2.58579 2.58579C3.17157 2 4.11438 2 6 2H18C19.8856 2 20.8284 2 21.4142 2.58579C22 3.17157 22 4.11438 22 6C22 7.88562 22 8.82843 21.4142 9.41421C20.8284 10 19.8856 10 18 10H6C4.11438 10 3.17157 10 2.58579 9.41421C2 8.82843 2 7.88562 2 6Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M13.5 6L18 6"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M6 7L6 5"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M9 7L9 5"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M13.5 17H18"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M6 18L6 16"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M9 18L9 16"
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
          <g opacity={duotone ? "0.5" : "1"}>
            <path
              d="M6 13H18C19.8856 13 20.8284 13 21.4142 13.5858C22 14.1716 22 15.1144 22 17C22 18.8856 22 19.8284 21.4142 20.4142C20.8284 21 19.8856 21 18 21H6C4.11438 21 3.17157 21 2.58579 20.4142C2 19.8284 2 18.8856 2 17C2 15.1144 2 14.1716 2.58579 13.5858C3.17157 13 4.11438 13 6 13Z"
              fill="currentColor"
            />
            <path
              d="M6 3H18C19.8856 3 20.8284 3 21.4142 3.58579C22 4.17157 22 5.11438 22 7C22 8.88562 22 9.82843 21.4142 10.4142C20.8284 11 19.8856 11 18 11H6C4.11438 11 3.17157 11 2.58579 10.4142C2 9.82843 2 8.88562 2 7C2 5.11438 2 4.17157 2.58579 3.58579C3.17157 3 4.11438 3 6 3Z"
              fill="currentColor"
            />
          </g>
          <path
            d="M12.75 7C12.75 6.58579 13.0858 6.25 13.5 6.25H18C18.4142 6.25 18.75 6.58579 18.75 7C18.75 7.41421 18.4142 7.75 18 7.75H13.5C13.0858 7.75 12.75 7.41421 12.75 7Z"
            fill="currentColor"
          />
          <path
            d="M6 8.75C5.58579 8.75 5.25 8.41421 5.25 8V6C5.25 5.58579 5.58579 5.25 6 5.25C6.41421 5.25 6.75 5.58579 6.75 6V8C6.75 8.41421 6.41421 8.75 6 8.75Z"
            fill="currentColor"
          />
          <path
            d="M9 8.75C8.58579 8.75 8.25 8.41421 8.25 8V6C8.25 5.58579 8.58579 5.25 9 5.25C9.41421 5.25 9.75 5.58579 9.75 6V8C9.75 8.41421 9.41421 8.75 9 8.75Z"
            fill="currentColor"
          />
          <path
            d="M12.75 17C12.75 16.5858 13.0858 16.25 13.5 16.25H18C18.4142 16.25 18.75 16.5858 18.75 17C18.75 17.4142 18.4142 17.75 18 17.75H13.5C13.0858 17.75 12.75 17.4142 12.75 17Z"
            fill="currentColor"
          />
          <path
            d="M6 18.75C5.58579 18.75 5.25 18.4142 5.25 18V16C5.25 15.5858 5.58579 15.25 6 15.25C6.41421 15.25 6.75 15.5858 6.75 16V18C6.75 18.4142 6.41421 18.75 6 18.75Z"
            fill="currentColor"
          />
          <path
            d="M9 18.75C8.58579 18.75 8.25 18.4142 8.25 18V16C8.25 15.5858 8.58579 15.25 9 15.25C9.41421 15.25 9.75 15.5858 9.75 16V18C9.75 18.4142 9.41421 18.75 9 18.75Z"
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
            d="M2.58579 3.58579C2 4.17157 2 5.11438 2 7C2 8.88562 2 9.82843 2.58579 10.4142C3.17157 11 4.11438 11 6 11H18C19.8856 11 20.8284 11 21.4142 10.4142C22 9.82843 22 8.88562 22 7C22 5.11438 22 4.17157 21.4142 3.58579C20.8284 3 19.8856 3 18 3H6C4.11438 3 3.17157 3 2.58579 3.58579ZM9 8.75C8.58579 8.75 8.25 8.41421 8.25 8V6C8.25 5.58579 8.58579 5.25 9 5.25C9.41421 5.25 9.75 5.58579 9.75 6V8C9.75 8.41421 9.41421 8.75 9 8.75ZM13.5 6.25C13.0858 6.25 12.75 6.58579 12.75 7C12.75 7.41421 13.0858 7.75 13.5 7.75H18C18.4142 7.75 18.75 7.41421 18.75 7C18.75 6.58579 18.4142 6.25 18 6.25H13.5ZM6 8.75C5.58579 8.75 5.25 8.41421 5.25 8L5.25 6C5.25 5.58579 5.58579 5.25 6 5.25C6.41421 5.25 6.75 5.58579 6.75 6V8C6.75 8.41421 6.41421 8.75 6 8.75Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.58579 13.5858C2 14.1716 2 15.1144 2 17C2 18.8856 2 19.8284 2.58579 20.4142C3.17157 21 4.11438 21 6 21H18C19.8856 21 20.8284 21 21.4142 20.4142C22 19.8284 22 18.8856 22 17C22 15.1144 22 14.1716 21.4142 13.5858C20.8284 13 19.8856 13 18 13H6C4.11438 13 3.17157 13 2.58579 13.5858ZM12.75 17C12.75 16.5858 13.0858 16.25 13.5 16.25H18C18.4142 16.25 18.75 16.5858 18.75 17C18.75 17.4142 18.4142 17.75 18 17.75H13.5C13.0858 17.75 12.75 17.4142 12.75 17ZM5.25 18C5.25 18.4142 5.58579 18.75 6 18.75C6.41421 18.75 6.75 18.4142 6.75 18V16C6.75 15.5858 6.41421 15.25 6 15.25C5.58579 15.25 5.25 15.5858 5.25 16L5.25 18ZM9 18.75C8.58579 18.75 8.25 18.4142 8.25 18V16C8.25 15.5858 8.58579 15.25 9 15.25C9.41421 15.25 9.75 15.5858 9.75 16V18C9.75 18.4142 9.41421 18.75 9 18.75Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconServer2 as IconComponent).keywords = [
  "server",
  "2",
  "host",
  "waiter",
  "server-side",
  "servlet",
  "mainframe",
  "tftp",
  "browser",
  "listserv",
  "serv",
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

export default IconServer2 as IconComponent;
