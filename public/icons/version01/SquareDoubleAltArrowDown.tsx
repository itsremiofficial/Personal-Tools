import { FC } from "react";

const IconSquareDoubleAltArrowDown: FC<IconProps> = ({
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
            d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M9 8.5L12 11.5L15 8.5"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 12.5L12 15.5L15 12.5"
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
            d="M3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28596 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28596 22 4.92893 22 3.46447 20.5355Z"
            fill="currentColor"
          />
          <path
            d="M14.4697 11.9697C14.7626 11.6768 15.2374 11.6768 15.5303 11.9697C15.8232 12.2626 15.8232 12.7374 15.5303 13.0303L12.5303 16.0303C12.2374 16.3232 11.7626 16.3232 11.4697 16.0303L8.46967 13.0303C8.17678 12.7374 8.17678 12.2626 8.46967 11.9697C8.76256 11.6768 9.23744 11.6768 9.53033 11.9697L12 14.4393L14.4697 11.9697Z"
            fill="currentColor"
          />
          <path
            d="M14.4697 7.96967C14.7626 7.67678 15.2374 7.67678 15.5303 7.96967C15.8232 8.26256 15.8232 8.73744 15.5303 9.03033L12.5303 12.0303C12.2374 12.3232 11.7626 12.3232 11.4697 12.0303L8.46967 9.03033C8.17678 8.73744 8.17678 8.26256 8.46967 7.96967C8.76256 7.67678 9.23744 7.67678 9.53033 7.96967L12 10.4393L14.4697 7.96967Z"
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
            d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22ZM8.46967 7.96967C8.17678 8.26256 8.17678 8.73744 8.46967 9.03033L11.4697 12.0303C11.7626 12.3232 12.2374 12.3232 12.5303 12.0303L15.5303 9.03033C15.8232 8.73744 15.8232 8.26256 15.5303 7.96967C15.2374 7.67678 14.7626 7.67678 14.4697 7.96967L12 10.4393L9.53033 7.96967C9.23744 7.67678 8.76256 7.67678 8.46967 7.96967ZM8.46967 11.9697C8.17678 12.2626 8.17678 12.7374 8.46967 13.0303L11.4697 16.0303C11.7626 16.3232 12.2374 16.3232 12.5303 16.0303L15.5303 13.0303C15.8232 12.7374 15.8232 12.2626 15.5303 11.9697C15.2374 11.6768 14.7626 11.6768 14.4697 11.9697L12 14.4393L9.53033 11.9697C9.23744 11.6768 8.76256 11.6768 8.46967 11.9697Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSquareDoubleAltArrowDown as IconComponent).keywords = [
  "square",
  "double",
  "alt",
  "arrow",
  "down",
  "quadrate",
  "right-angled",
  "squarely",
  "foursquare",
  "squarish",
  "conventional",
  "paid",
  "honorable",
  "honest",
  "twofold",
  "duple",
  "twice",
  "dual",
  "reduplicate",
  "doubly",
  "multiple",
  "double up",
  "forked",
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
  "downwards",
  "downward",
  "downbound",
  "falling",
  "fallen",
  "pull down",
  "downwardly",
  "declining",
  "descending",
];

export default IconSquareDoubleAltArrowDown as IconComponent;
