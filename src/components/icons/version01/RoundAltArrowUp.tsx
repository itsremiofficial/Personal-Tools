import { FC } from "react";

const IconRoundAltArrowUp: FC<IconProps> = ({
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
            opacity={duotone ? "0.5" : "1"}
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M15 13.5L12 10.5L9 13.5"
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
            d="M21.9998 11.9995C21.9998 6.47666 17.5226 1.99951 11.9998 1.99951C6.47691 1.99951 1.99976 6.47666 1.99976 11.9995C1.99976 17.5224 6.47691 21.9995 11.9998 21.9995C17.5226 21.9995 21.9998 17.5224 21.9998 11.9995Z"
            fill="currentColor"
          />
          <path
            d="M8.46943 12.9694C8.17653 13.2623 8.17653 13.7372 8.46943 14.0301C8.76232 14.323 9.23719 14.323 9.53009 14.0301L11.9998 11.5604L14.4694 14.0301C14.7623 14.323 15.2372 14.323 15.5301 14.0301C15.823 13.7372 15.823 13.2623 15.5301 12.9694L12.5301 9.96943C12.2372 9.67653 11.7623 9.67653 11.4694 9.96943L8.46943 12.9694Z"
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
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 9.75C12.1989 9.75 12.3897 9.82902 12.5303 9.96967L15.5303 12.9697C15.8232 13.2626 15.8232 13.7374 15.5303 14.0303C15.2374 14.3232 14.7626 14.3232 14.4697 14.0303L12 11.5607L9.53033 14.0303C9.23744 14.3232 8.76256 14.3232 8.46967 14.0303C8.17678 13.7374 8.17678 13.2626 8.46967 12.9697L11.4697 9.96967C11.6103 9.82902 11.8011 9.75 12 9.75Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconRoundAltArrowUp as IconComponent).keywords = [
  "round",
  "alt",
  "arrow",
  "up",
  "orbicular",
  "rotund",
  "orbiculate",
  "discoidal",
  "disklike",
  "discoid",
  "ringlike",
  "globular",
  "globose",
  "elevation",
  "el",
  "altitude",
  "backspace",
  "esc",
  "shadow",
  "ctrl",
  "variation",
  "variant",
  "pointer",
  "archer",
  "archery",
  "dart",
  "arrowhead",
  "bolt",
  "spike",
  "rope",
  "roof",
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

export default IconRoundAltArrowUp as IconComponent;
