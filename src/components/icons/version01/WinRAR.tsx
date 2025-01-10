import { FC } from "react";

const IconWinRAR: FC<IconProps> = ({
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
            d="M12.2679 3C12.2245 3.07519 12.1858 3.15353 12.1522 3.23463C12 3.60218 12 4.06812 12 5V9M12.2679 3C12.4869 2.62082 12.8257 2.32164 13.2346 2.15224C13.6022 2 14.0681 2 15 2C15.9319 2 16.3978 2 16.7654 2.15224C17.1743 2.32164 17.5131 2.62082 17.7321 3M12.2679 3H5C4.06812 3 3.60218 3 3.23463 3.15224C2.74458 3.35523 2.35523 3.74458 2.15224 4.23463C2 4.60218 2 5.06812 2 6C2 6.93188 2 7.39782 2.15224 7.76537C2.35523 8.25542 2.74458 8.64477 3.23463 8.84776C3.60218 9 4.06812 9 5 9H12M17.7321 3H19C19.9319 3 20.3978 3 20.7654 3.15224C21.2554 3.35523 21.6448 3.74458 21.8478 4.23463C22 4.60218 22 5.06812 22 6C22 6.93188 22 7.39782 21.8478 7.76537C21.6448 8.25542 21.2554 8.64477 20.7654 8.84776C20.3978 9 19.9319 9 19 9H18M17.7321 3C17.7755 3.07519 17.8142 3.15353 17.8478 3.23463C18 3.60218 18 4.06812 18 5V9M18 9L18 15M12 9V15M18 15V19C18 19.9319 18 20.3978 17.8478 20.7654C17.8142 20.8465 17.7755 20.9248 17.7321 21M18 15H19C19.9319 15 20.3978 15 20.7654 15.1522C21.2554 15.3552 21.6448 15.7446 21.8478 16.2346C22 16.6022 22 17.0681 22 18C22 18.9319 22 19.3978 21.8478 19.7654C21.6448 20.2554 21.2554 20.6448 20.7654 20.8478C20.3978 21 19.9319 21 19 21H17.7321M12 15H5C4.06812 15 3.60218 15 3.23463 15.1522C2.74458 15.3552 2.35523 15.7446 2.15224 16.2346C2 16.6022 2 17.0681 2 18C2 18.9319 2 19.3978 2.15224 19.7654C2.35523 20.2554 2.74458 20.6448 3.23463 20.8478C3.60218 21 4.06812 21 5 21H12.2679M12 15L12 19C12 19.9319 12 20.3978 12.1522 20.7654C12.1858 20.8465 12.2245 20.9248 12.2679 21M12.2679 21C12.4869 21.3792 12.8257 21.6784 13.2346 21.8478C13.6022 22 14.0681 22 15 22C15.9319 22 16.3978 22 16.7654 21.8478C17.1743 21.6784 17.5131 21.3792 17.7321 21"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M5 9C4.06812 9 3.60218 9 3.23463 9.15224C2.74458 9.35523 2.35523 9.74458 2.15224 10.2346C2 10.6022 2 11.0681 2 12C2 12.9319 2 13.3978 2.15224 13.7654C2.35523 14.2554 2.74458 14.6448 3.23463 14.8478C3.60218 15 4.06812 15 5 15M19 9C19.9319 9 20.3978 9 20.7654 9.15224C21.2554 9.35523 21.6448 9.74458 21.8478 10.2346C22 10.6022 22 11.0681 22 12C22 12.9319 22 13.3978 21.8478 13.7654C21.6448 14.2554 21.2554 14.6448 20.7654 14.8478C20.3978 15 19.9319 15 19 15"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M15 11L15 13"
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
          <g opacity={duotone ? "0.3" : "1"}>
            <path
              d="M4.66602 9C3.73413 9 3.26819 9 2.90065 8.84776C2.41059 8.64477 2.02124 8.25542 1.81826 7.76537C1.66602 7.39782 1.66602 6.93188 1.66602 6C1.66602 5.06812 1.66602 4.60217 1.81826 4.23463C2.02124 3.74458 2.41059 3.35523 2.90065 3.15224C3.26819 3 3.73413 3 4.66602 3H11.934C11.8905 3.07519 11.8518 3.15353 11.8183 3.23463C11.666 3.60217 11.666 4.06812 11.666 5L11.666 9H4.66602Z"
              fill="currentColor"
            />
            <path
              d="M21.666 6C21.666 6.93188 21.666 7.39782 21.5138 7.76537C21.3108 8.25542 20.9214 8.64477 20.4314 8.84776C20.0638 9 19.5979 9 18.666 9H17.666V5C17.666 4.06812 17.666 3.60217 17.5138 3.23463C17.4802 3.15353 17.4415 3.07519 17.3981 3H18.666C19.5979 3 20.0638 3 20.4314 3.15224C20.9214 3.35523 21.3108 3.74458 21.5138 4.23463C21.666 4.60217 21.666 5.06812 21.666 6Z"
              fill="currentColor"
            />
          </g>
          <g opacity={duotone ? "0.7" : "1"}>
            <path
              d="M17.5138 20.7654C17.666 20.3978 17.666 19.9319 17.666 19V15H18.666C19.5979 15 20.0638 15 20.4314 15.1522C20.9214 15.3552 21.3108 15.7446 21.5138 16.2346C21.666 16.6022 21.666 17.0681 21.666 18C21.666 18.9319 21.666 19.3978 21.5138 19.7654C21.3108 20.2554 20.9214 20.6448 20.4314 20.8478C20.0638 21 19.5979 21 18.666 21H17.3981C17.4415 20.9248 17.4802 20.8465 17.5138 20.7654Z"
              fill="currentColor"
            />
            <path
              d="M11.934 21H4.66602C3.73413 21 3.26819 21 2.90065 20.8478C2.41059 20.6448 2.02124 20.2554 1.81826 19.7654C1.66602 19.3978 1.66602 18.9319 1.66602 18C1.66602 17.0681 1.66602 16.6022 1.81826 16.2346C2.02124 15.7446 2.41059 15.3552 2.90065 15.1522C3.26819 15 3.73413 15 4.66602 15H11.666V19C11.666 19.9319 11.666 20.3978 11.8183 20.7654C11.8518 20.8465 11.8905 20.9248 11.934 21Z"
              fill="currentColor"
            />
          </g>
          <g opacity={duotone ? "0.5" : "1"}>
            <path
              d="M17.666 9H18.666C19.5979 9 20.0638 9 20.4314 9.15224C20.9214 9.35523 21.3108 9.74458 21.5138 10.2346C21.666 10.6022 21.666 11.0681 21.666 12C21.666 12.9319 21.666 13.3978 21.5138 13.7654C21.3108 14.2554 20.9214 14.6448 20.4314 14.8478C20.0638 15 19.5979 15 18.666 15H17.666V9Z"
              fill="currentColor"
            />
            <path
              d="M11.666 9V15H4.66602C3.73413 15 3.26819 15 2.90065 14.8478C2.41059 14.6448 2.02124 14.2554 1.81826 13.7654C1.66602 13.3978 1.66602 12.9319 1.66602 12C1.66602 11.0681 1.66602 10.6022 1.81826 10.2346C2.02124 9.74458 2.41059 9.35523 2.90065 9.15224C3.26819 9 3.73413 9 4.66602 9H11.666Z"
              fill="currentColor"
            />
          </g>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.5138 3.23463C17.666 3.60218 17.666 4.06812 17.666 5L17.666 19C17.666 19.9319 17.666 20.3978 17.5138 20.7654C17.4802 20.8465 17.4415 20.9248 17.3981 21C17.1792 21.3792 16.8403 21.6784 16.4314 21.8478C16.0638 22 15.5979 22 14.666 22C13.7341 22 13.2682 22 12.9006 21.8478C12.4917 21.6784 12.1529 21.3792 11.934 21C11.8905 20.9248 11.8518 20.8465 11.8183 20.7654C11.666 20.3978 11.666 19.9319 11.666 19V5C11.666 4.06812 11.666 3.60218 11.8183 3.23463C11.8518 3.15353 11.8905 3.07519 11.934 3C12.1529 2.62082 12.4917 2.32164 12.9006 2.15224C13.2682 2 13.7341 2 14.666 2C15.5979 2 16.0638 2 16.4314 2.15224C16.8403 2.32164 17.1792 2.62082 17.3981 3C17.4415 3.07519 17.4802 3.15353 17.5138 3.23463ZM15.416 11C15.416 10.5858 15.0802 10.25 14.666 10.25C14.2518 10.25 13.916 10.5858 13.916 11L13.916 13C13.916 13.4142 14.2518 13.75 14.666 13.75C15.0802 13.75 15.416 13.4142 15.416 13L15.416 11Z"
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
            d="M17.8478 3.23463C18 3.60218 18 4.06812 18 5V19C18 19.9319 18 20.3978 17.8478 20.7654C17.8142 20.8465 17.7755 20.9248 17.7321 21C17.5131 21.3792 17.1743 21.6784 16.7654 21.8478C16.3978 22 15.9319 22 15 22C14.0681 22 13.6022 22 13.2346 21.8478C12.8257 21.6784 12.4869 21.3792 12.2679 21C12.2245 20.9248 12.1858 20.8465 12.1522 20.7654C12 20.3978 12 19.9319 12 19V5C12 4.06812 12 3.60218 12.1522 3.23463C12.1858 3.15353 12.2245 3.07519 12.2679 3C12.4869 2.62082 12.8257 2.32164 13.2346 2.15224C13.6022 2 14.0681 2 15 2C15.9319 2 16.3978 2 16.7654 2.15224C17.1743 2.32164 17.5131 2.62082 17.7321 3C17.7755 3.07519 17.8142 3.15353 17.8478 3.23463ZM15.75 11C15.75 10.5858 15.4142 10.25 15 10.25C14.5858 10.25 14.25 10.5858 14.25 11V13C14.25 13.4142 14.5858 13.75 15 13.75C15.4142 13.75 15.75 13.4142 15.75 13V11Z"
            fill="currentColor"
          />
          <path
            d="M10.65 21C10.5728 20.7212 10.5398 20.4498 10.5225 20.1964C10.5 19.8658 10.5 19.4721 10.5 19.0435V4.95649C10.5 4.52794 10.5 4.13424 10.5225 3.80358C10.5398 3.55021 10.5728 3.27883 10.65 3H5C4.06812 3 3.60218 3 3.23463 3.15224C2.74458 3.35523 2.35523 3.74458 2.15224 4.23463C2 4.60218 2 5.06812 2 6C2 6.93188 2 7.39782 2.15224 7.76537C2.35523 8.25542 2.74458 8.64477 3.23463 8.84776C3.60218 9 4.06812 9 5 9C4.06812 9 3.60218 9 3.23463 9.15224C2.74458 9.35523 2.35523 9.74458 2.15224 10.2346C2 10.6022 2 11.0681 2 12C2 12.9319 2 13.3978 2.15224 13.7654C2.35523 14.2554 2.74458 14.6448 3.23463 14.8478C3.60218 15 4.06812 15 5 15C4.06812 15 3.60218 15 3.23463 15.1522C2.74458 15.3552 2.35523 15.7446 2.15224 16.2346C2 16.6022 2 17.0681 2 18C2 18.9319 2 19.3978 2.15224 19.7654C2.35523 20.2554 2.74458 20.6448 3.23463 20.8478C3.60218 21 4.06812 21 5 21H10.65Z"
            fill="currentColor"
          />
          <path
            d="M19.3501 20.9996C20.0549 20.9973 20.447 20.9796 20.7654 20.8478C21.2554 20.6448 21.6448 20.2554 21.8478 19.7654C22 19.3978 22 18.9319 22 18C22 17.0681 22 16.6022 21.8478 16.2346C21.6448 15.7446 21.2554 15.3552 20.7654 15.1522C20.4703 15.03 20.1119 15.0059 19.5 15.0012V19.0435C19.5 19.4721 19.5001 19.8658 19.4775 20.1964C19.4602 20.4497 19.4272 20.7209 19.3501 20.9996Z"
            fill="currentColor"
          />
          <path
            d="M19.5 14.9988C20.1119 14.9941 20.4703 14.97 20.7654 14.8478C21.2554 14.6448 21.6448 14.2554 21.8478 13.7654C22 13.3978 22 12.9319 22 12C22 11.0681 22 10.6022 21.8478 10.2346C21.6448 9.74458 21.2554 9.35523 20.7654 9.15224C20.4703 9.03004 20.1119 9.00593 19.5 9.00117L19.5 14.9988Z"
            fill="currentColor"
          />
          <path
            d="M19.5 8.99883C20.1119 8.99407 20.4703 8.96996 20.7654 8.84776C21.2554 8.64477 21.6448 8.25542 21.8478 7.76537C22 7.39782 22 6.93188 22 6C22 5.06812 22 4.60218 21.8478 4.23463C21.6448 3.74458 21.2554 3.35523 20.7654 3.15224C20.447 3.02038 20.0549 3.00273 19.3501 3.00037C19.4272 3.27907 19.4602 3.55032 19.4775 3.80359C19.5001 4.13424 19.5 4.52793 19.5 4.95648V8.99883Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconWinRAR as IconComponent).keywords = [
  "win",
  "gain ground",
  "gain",
  "make headway",
  "get ahead",
  "advance",
  "profits",
  "winnings",
  "conquer",
  "overcome",
];

export default IconWinRAR as IconComponent;
