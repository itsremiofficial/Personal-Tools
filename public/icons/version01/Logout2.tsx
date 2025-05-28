import { FC } from "react";

const IconLogout2: FC<IconProps> = ({
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
            d="M12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M10 12H20M20 12L17 9M20 12L17 15"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
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
            d="M12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4V20Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.4697 8.46967C16.1768 8.76256 16.1768 9.23744 16.4697 9.53033L18.1893 11.25H10C9.58579 11.25 9.25 11.5858 9.25 12C9.25 12.4142 9.58579 12.75 10 12.75H18.1893L16.4697 14.4697C16.1768 14.7626 16.1768 15.2374 16.4697 15.5303C16.7626 15.8232 17.2374 15.8232 17.5303 15.5303L20.5303 12.5303C20.8232 12.2374 20.8232 11.7626 20.5303 11.4697L17.5303 8.46967C17.2374 8.17678 16.7626 8.17678 16.4697 8.46967Z"
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
            d="M16.4697 8.46967C16.1768 8.76256 16.1768 9.23744 16.4697 9.53033L18.1893 11.25H10C9.58579 11.25 9.25 11.5858 9.25 12C9.25 12.4142 9.58579 12.75 10 12.75H18.1893L16.4697 14.4697C16.1768 14.7626 16.1768 15.2374 16.4697 15.5303C16.7626 15.8232 17.2374 15.8232 17.5303 15.5303L20.5303 12.5303C20.8232 12.2374 20.8232 11.7626 20.5303 11.4697L17.5303 8.46967C17.2374 8.17678 16.7626 8.17678 16.4697 8.46967Z"
            fill="currentColor"
          />
          <path
            d="M4 12C4 16.4183 7.58172 20 12 20V16.25C12 15.3072 12 14.8358 11.7071 14.5429C11.4142 14.25 10.9428 14.25 10 14.25L-nan -nanL10 14.25C8.75736 14.25 7.75 13.2426 7.75 12C7.75 10.7574 8.75736 9.75 10 9.75L-nan -nanL10 9.75C10.9428 9.75 11.4142 9.75 11.7071 9.45711C12 9.16421 12 8.69281 12 7.75V4C7.58172 4 4 7.58172 4 12Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconLogout2 as IconComponent).keywords = [
  "logout",
  "2",
  "logoff",
  "output",
  "closure",
  "off",
  "unplug",
  "disconnect",
  "teardown",
  "disconnection",
  "disengagement",
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

export default IconLogout2 as IconComponent;
