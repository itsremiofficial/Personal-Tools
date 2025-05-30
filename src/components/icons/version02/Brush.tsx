import { FC } from "react";

const IconBrush: FC<IconProps> = ({
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
            opacity={duotone ? "0.4" : "1"}
            d="M6.66992 2H18.6699C19.7699 2 20.6699 2.9 20.6699 4V8.32001H4.66992V4C4.66992 2.9 5.56992 2 6.66992 2Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.66992 8.32007V11.8801C4.66992 12.9601 5.24995 13.9601 6.19995 14.4901L9.15991 16.16C9.78991 16.51 10.1799 17.1801 10.1799 17.9001V20.0001C10.1799 21.1001 11.0799 22.0001 12.1799 22.0001H13.1799C14.2799 22.0001 15.1799 21.1001 15.1799 20.0001V17.9001C15.1799 17.1801 15.57 16.51 16.2 16.16L19.1599 14.4901C20.0999 13.9601 20.6899 12.9601 20.6899 11.8801V8.32007H4.66992Z"
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
            d="M6.66992 2H18.6699C19.7699 2 20.6699 2.9 20.6699 4V8.32001H4.66992V4C4.66992 2.9 5.56992 2 6.66992 2Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M4.66992 8.32007V11.8801C4.66992 12.9601 5.24995 13.9601 6.19995 14.4901L9.15991 16.1601C9.78991 16.5101 10.1799 17.1801 10.1799 17.9001V20.0001C10.1799 21.1001 11.0799 22.0001 12.1799 22.0001H13.1799C14.2799 22.0001 15.1799 21.1001 15.1799 20.0001V17.9001C15.1799 17.1801 15.57 16.5101 16.2 16.1601L19.1599 14.4901C20.0999 13.9601 20.6899 12.9601 20.6899 11.8801V8.32007H4.66992Z"
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
            d="M6.66992 2H18.6699C19.7699 2 20.6699 2.9 20.6699 4V7.32C20.6699 7.87 20.2199 8.32 19.6699 8.32H5.66992C5.11992 8.32 4.66992 7.87 4.66992 7.32V4C4.66992 2.9 5.56992 2 6.66992 2Z"
            fill="currentColor"
          />
          <path
            d="M4.66992 10.3201V11.8801C4.66992 12.9601 5.24992 13.9601 6.19992 14.4901L9.15992 16.1601C9.78992 16.5101 10.1799 17.1801 10.1799 17.9001V20.0001C10.1799 21.1001 11.0799 22.0001 12.1799 22.0001H13.1799C14.2799 22.0001 15.1799 21.1001 15.1799 20.0001V17.9001C15.1799 17.1801 15.5699 16.5101 16.1999 16.1601L19.1599 14.4901C20.0999 13.9601 20.6899 12.9601 20.6899 11.8801V10.3201C20.6899 9.77007 20.2399 9.32007 19.6899 9.32007H5.66992C5.11992 9.32007 4.66992 9.76007 4.66992 10.3201Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBrush as IconComponent).keywords = [
  "brush",
  "sweep",
  "copse",
  "thicket",
  "coppice",
  "brushwood",
  "clash",
  "skirmish",
  "kiss",
  "encounter",
];

export default IconBrush as IconComponent;
