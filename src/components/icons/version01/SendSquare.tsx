import { FC } from "react";

const IconSendSquare: FC<IconProps> = ({
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
            d="M17 12L10 12M10 12L13 15M10 12L13 9"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 16L7 12L7 8"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
            stroke="currentColor"
            strokeWidth={width}
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
            d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
            fill="currentColor"
          />
          <path
            d="M7.75 8C7.75 7.58579 7.41421 7.25 7 7.25C6.58579 7.25 6.25 7.58579 6.25 8V16C6.25 16.4142 6.58579 16.75 7 16.75C7.41421 16.75 7.75 16.4142 7.75 16L7.75 8Z"
            fill="currentColor"
          />
          <path
            d="M17 12.75C17.4142 12.75 17.75 12.4142 17.75 12C17.75 11.5858 17.4142 11.25 17 11.25L11.8107 11.25L13.5303 9.53033C13.8232 9.23744 13.8232 8.76256 13.5303 8.46967C13.2374 8.17678 12.7626 8.17678 12.4697 8.46967L9.46967 11.4697C9.32902 11.6103 9.25 11.8011 9.25 12C9.25 12.1989 9.32902 12.3897 9.46967 12.5303L12.4697 15.5303C12.7626 15.8232 13.2374 15.8232 13.5303 15.5303C13.8232 15.2374 13.8232 14.7626 13.5303 14.4697L11.8107 12.75H17Z"
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
            d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12ZM17.75 12C17.75 12.4142 17.4142 12.75 17 12.75H11.8107L13.5303 14.4697C13.8232 14.7626 13.8232 15.2374 13.5303 15.5303C13.2374 15.8232 12.7626 15.8232 12.4697 15.5303L9.46967 12.5303C9.32902 12.3897 9.25 12.1989 9.25 12C9.25 11.8011 9.32902 11.6103 9.46967 11.4697L12.4697 8.46967C12.7626 8.17678 13.2374 8.17678 13.5303 8.46967C13.8232 8.76256 13.8232 9.23744 13.5303 9.53033L11.8107 11.25H17C17.4142 11.25 17.75 11.5858 17.75 12ZM7.75 8C7.75 7.58579 7.41421 7.25 7 7.25C6.58579 7.25 6.25 7.58579 6.25 8L6.25 16C6.25 16.4142 6.58579 16.75 7 16.75C7.41421 16.75 7.75 16.4142 7.75 16L7.75 8Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSendSquare as IconComponent).keywords = [
  "send",
  "square",
  "transmit",
  "charge",
  "transport",
  "mail",
  "base",
  "institutionalize",
  "place",
  "broadcast",
  "commit",
  "quadrate",
  "right-angled",
  "squarely",
  "foursquare",
  "squarish",
  "conventional",
  "paid",
  "honorable",
  "honest",
];

export default IconSendSquare as IconComponent;
