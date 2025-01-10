import { FC } from "react";

const IconUFO2: FC<IconProps> = ({
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
            d="M17 7.21094C19.989 7.93258 22 9.28138 22 10.8262C22 13.1313 17.5228 14.9999 12 14.9999C6.47715 14.9999 2 13.1313 2 10.8262C2 9.28138 4.01099 7.93258 7 7.21094"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M7 7.72876C7 5.11714 9.11714 3 11.7288 3H12.2712C14.8829 3 17 5.11714 17 7.72876C17 7.90601 16.9458 8.07918 16.8003 8.18039C16.3862 8.4684 15.1898 9 12 9C8.81016 9 7.6138 8.4684 7.19972 8.18039C7.0542 8.07918 7 7.90601 7 7.72876Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth={width}
          />
          <circle
            opacity={duotone ? "0.5" : "1"}
            cx="12"
            cy="12"
            r="1"
            fill="currentColor"
          />
          <circle cx="7" cy="11" r="1" fill="currentColor" />
          <circle cx="17" cy="11" r="1" fill="currentColor" />
          <path
            d="M12 21V18"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M18 20V17"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M6 20V17"
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
            d="M5.67459 7.59351C3.4317 8.35888 2 9.52279 2 10.8263C2 13.1313 6.47715 14.9999 12 14.9999C17.5228 14.9999 22 13.1313 22 10.8263C22 9.52279 20.5683 8.35887 18.3254 7.59351C18.2008 7.88378 17.9937 8.17752 17.6568 8.41187C16.8685 8.96014 15.3013 9.50005 12 9.50005C8.6987 9.50005 7.1315 8.96014 6.34322 8.41187C6.00629 8.17752 5.79918 7.88378 5.67459 7.59351ZM12 13C12.5523 13 13 12.5523 13 12C13 11.4478 12.5523 11 12 11C11.4477 11 11 11.4478 11 12C11 12.5523 11.4477 13 12 13ZM8 11C8 11.5523 7.55228 12 7 12C6.44772 12 6 11.5523 6 11C6 10.4478 6.44772 10 7 10C7.55228 10 8 10.4478 8 11ZM17 12C17.5523 12 18 11.5523 18 11C18 10.4478 17.5523 10 17 10C16.4477 10 16 10.4478 16 11C16 11.5523 16.4477 12 17 12Z"
            fill="currentColor"
          />
          <path
            d="M12 17.25C12.4142 17.25 12.75 17.5858 12.75 18V21C12.75 21.4143 12.4142 21.75 12 21.75C11.5858 21.75 11.25 21.4143 11.25 21V18C11.25 17.5858 11.5858 17.25 12 17.25Z"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.5" : "1"}>
            <path
              d="M7.05498 7.0054C7.40316 4.73714 9.3631 3 11.7288 3H12.2712C14.6369 3 16.5968 4.73714 16.945 7.0054C16.9131 7.07425 16.866 7.13466 16.8003 7.18039C16.3862 7.4684 15.1898 8 12 8C8.81016 8 7.6138 7.4684 7.19972 7.18039C7.13397 7.13466 7.08687 7.07425 7.05498 7.0054Z"
              fill="currentColor"
            />
            <path
              d="M6 16.25C6.41421 16.25 6.75 16.5858 6.75 17V20C6.75 20.4142 6.41421 20.75 6 20.75C5.58579 20.75 5.25 20.4142 5.25 20V17C5.25 16.5858 5.58579 16.25 6 16.25Z"
              fill="currentColor"
            />
            <path
              d="M18.75 17C18.75 16.5858 18.4142 16.25 18 16.25C17.5858 16.25 17.25 16.5858 17.25 17V20C17.25 20.4142 17.5858 20.75 18 20.75C18.4142 20.75 18.75 20.4142 18.75 20V17Z"
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
            d="M5.67459 7.59346C3.4317 8.35883 2 9.52274 2 10.8262C2 13.1313 6.47715 14.9999 12 14.9999C17.5228 14.9999 22 13.1313 22 10.8262C22 9.52274 20.5683 8.35883 18.3254 7.59346C18.2008 7.88374 17.9937 8.17747 17.6568 8.41182C16.8685 8.96009 15.3013 9.5 12 9.5C8.6987 9.5 7.1315 8.96009 6.34322 8.41182C6.00629 8.17747 5.79918 7.88374 5.67459 7.59346ZM12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13ZM8 11C8 11.5523 7.55228 12 7 12C6.44772 12 6 11.5523 6 11C6 10.4477 6.44772 10 7 10C7.55228 10 8 10.4477 8 11ZM17 12C17.5523 12 18 11.5523 18 11C18 10.4477 17.5523 10 17 10C16.4477 10 16 10.4477 16 11C16 11.5523 16.4477 12 17 12Z"
            fill="currentColor"
          />
          <path
            d="M7.05498 7.0054C7.40316 4.73714 9.3631 3 11.7288 3H12.2712C14.6369 3 16.5968 4.73714 16.945 7.0054C16.9131 7.07425 16.866 7.13466 16.8003 7.18039C16.3862 7.4684 15.1898 8 12 8C8.81016 8 7.6138 7.4684 7.19972 7.18039C7.13397 7.13466 7.08687 7.07425 7.05498 7.0054Z"
            fill="currentColor"
          />
          <path
            d="M6 16.25C6.41421 16.25 6.75 16.5858 6.75 17V20C6.75 20.4142 6.41421 20.75 6 20.75C5.58579 20.75 5.25 20.4142 5.25 20V17C5.25 16.5858 5.58579 16.25 6 16.25Z"
            fill="currentColor"
          />
          <path
            d="M18.75 17C18.75 16.5858 18.4142 16.25 18 16.25C17.5858 16.25 17.25 16.5858 17.25 17V20C17.25 20.4142 17.5858 20.75 18 20.75C18.4142 20.75 18.75 20.4142 18.75 20V17Z"
            fill="currentColor"
          />
          <path
            d="M12 17.25C12.4142 17.25 12.75 17.5858 12.75 18V21C12.75 21.4142 12.4142 21.75 12 21.75C11.5858 21.75 11.25 21.4142 11.25 21V18C11.25 17.5858 11.5858 17.25 12 17.25Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconUFO2 as IconComponent).keywords = [
  "2",
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

export default IconUFO2 as IconComponent;
