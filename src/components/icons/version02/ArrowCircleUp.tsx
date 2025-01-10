import { FC } from "react";

const IconArrowCircleUp: FC<IconProps> = ({
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
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.14014 13.26L12.6701 9.73999L16.2001 13.26"
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
            d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z"
            fill="currentColor"
          />
          <path
            d="M16.2001 14.01C16.0101 14.01 15.8201 13.94 15.6701 13.79L12.6701 10.79L9.67008 13.79C9.38008 14.08 8.90008 14.08 8.61008 13.79C8.32008 13.5 8.32008 13.02 8.61008 12.73L12.1401 9.20004C12.4301 8.91004 12.9101 8.91004 13.2001 9.20004L16.7301 12.73C17.0201 13.02 17.0201 13.5 16.7301 13.79C16.5801 13.94 16.3901 14.01 16.2001 14.01Z"
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
            d="M12.6699 2C7.15992 2 2.66992 6.49 2.66992 12C2.66992 17.51 7.15992 22 12.6699 22C18.1799 22 22.6699 17.51 22.6699 12C22.6699 6.49 18.1799 2 12.6699 2ZM16.7299 13.79C16.5799 13.94 16.3899 14.01 16.1999 14.01C16.0099 14.01 15.8199 13.94 15.6699 13.79L12.6699 10.79L9.66992 13.79C9.37992 14.08 8.89992 14.08 8.60992 13.79C8.31992 13.5 8.31992 13.02 8.60992 12.73L12.1399 9.2C12.4299 8.91 12.9099 8.91 13.1999 9.2L16.7299 12.73C17.0199 13.03 17.0199 13.5 16.7299 13.79Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconArrowCircleUp as IconComponent).keywords = [
  "arrow",
  "circle",
  "up",
  "pointer",
  "archer",
  "archery",
  "dart",
  "arrowhead",
  "bolt",
  "spike",
  "rope",
  "roof",
  "round",
  "rotary",
  "environ",
  "roundabout",
  "circulate",
  "circuit",
  "encircle",
  "surround",
  "dress circle",
  "upbound",
  "upwardly",
  "ascending",
  "upward",
  "upwards",
  "rising",
  "astir",
  "ahead",
  "awake",
];

export default IconArrowCircleUp as IconComponent;
