import { FC } from "react";

const IconNext: FC<IconProps> = ({
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
            d="M4.42969 7.21999V16.79C4.42969 18.75 6.55967 19.98 8.25967 19L12.4097 16.61L16.5597 14.21C18.2597 13.23 18.2597 10.78 16.5597 9.79998L12.4097 7.39998L8.25967 5.01C6.55967 4.03 4.42969 5.24999 4.42969 7.21999Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20.9102 18.18V5.82001"
            stroke="currentColor"
            strokeWidth={width}
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
            d="M4.42969 7.21999V16.79C4.42969 18.75 6.55967 19.98 8.25967 19L12.4097 16.61L16.5597 14.21C18.2597 13.23 18.2597 10.78 16.5597 9.79998L12.4097 7.39998L8.25967 5.01C6.55967 4.03 4.42969 5.24999 4.42969 7.21999Z"
            fill="currentColor"
          />
          <path
            d="M20.9102 18.93C20.5002 18.93 20.1602 18.59 20.1602 18.18V5.82001C20.1602 5.41001 20.5002 5.07001 20.9102 5.07001C21.3202 5.07001 21.6602 5.41001 21.6602 5.82001V18.18C21.6602 18.59 21.3302 18.93 20.9102 18.93Z"
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
            d="M4.42969 7.22V16.79C4.42969 18.75 6.55969 19.98 8.25969 19L12.4097 16.61L16.5597 14.21C18.2597 13.23 18.2597 10.78 16.5597 9.8L12.4097 7.4L8.25969 5.01C6.55969 4.03 4.42969 5.25 4.42969 7.22Z"
            fill="currentColor"
          />
          <path
            d="M20.9102 18.93C20.5002 18.93 20.1602 18.59 20.1602 18.18V5.82C20.1602 5.41 20.5002 5.07 20.9102 5.07C21.3202 5.07 21.6602 5.41 21.6602 5.82V18.18C21.6602 18.59 21.3302 18.93 20.9102 18.93Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconNext as IconComponent).keywords = [
  "next",
  "adjacent",
  "following",
  "succeeding",
  "side by side",
  "incoming",
  "future",
  "close",
  "proximate",
  "here",
];

export default IconNext as IconComponent;
