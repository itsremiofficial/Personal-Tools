import { FC } from "react";

const IconSkipPrevious: FC<IconProps> = ({
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
            d="M10.2997 6.83701C7.43324 9.0292 6 10.1253 6 12C6 13.8747 7.43324 14.9708 10.2997 17.163C11.091 17.7682 11.8758 18.3379 12.597 18.8127C13.2297 19.2292 13.9463 19.6601 14.6882 20.083C17.5479 21.7134 18.9778 22.5285 20.2602 21.626C21.5427 20.7235 21.6592 18.8341 21.8923 15.0554C21.9582 13.9867 22 12.9392 22 12C22 11.0609 21.9582 10.0133 21.8923 8.94462C21.6592 5.16589 21.5427 3.27652 20.2602 2.374C18.9778 1.47147 17.5479 2.28664 14.6882 3.91698C13.9463 4.33992 13.2297 4.77077 12.597 5.1873C11.8758 5.66208 11.091 6.23185 10.2997 6.83701Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M2 5V20"
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
            d="M10.2997 6.83701C7.43324 9.0292 6 10.1253 6 12C6 13.8747 7.43324 14.9708 10.2997 17.163C11.091 17.7682 11.8758 18.3379 12.597 18.8127C13.2297 19.2292 13.9463 19.6601 14.6882 20.083C17.5479 21.7134 18.9778 22.5285 20.2602 21.626C21.5427 20.7235 21.6592 18.8341 21.8923 15.0554C21.9582 13.9867 22 12.9392 22 12C22 11.0609 21.9582 10.0133 21.8923 8.94462C21.6592 5.16589 21.5427 3.27652 20.2602 2.374C18.9778 1.47147 17.5479 2.28664 14.6882 3.91698C13.9463 4.33992 13.2297 4.77077 12.597 5.1873C11.8758 5.66208 11.091 6.23185 10.2997 6.83701Z"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.5" : "1"}>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2 4.25C1.58579 4.25 1.25 4.58579 1.25 5V20C1.25 20.4142 1.58579 20.75 2 20.75C2.41421 20.75 2.75 20.4142 2.75 20V5C2.75 4.58579 2.41421 4.25 2 4.25Z"
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
            d="M10.2997 6.83701C7.43324 9.0292 6 10.1253 6 12C6 13.8747 7.43324 14.9708 10.2997 17.163C11.091 17.7682 11.8758 18.3379 12.597 18.8127C13.2297 19.2292 13.9463 19.6601 14.6882 20.083C17.5479 21.7134 18.9778 22.5285 20.2602 21.626C21.5427 20.7235 21.6592 18.8341 21.8923 15.0554C21.9582 13.9867 22 12.9392 22 12C22 11.0609 21.9582 10.0133 21.8923 8.94462C21.6592 5.16589 21.5427 3.27652 20.2602 2.374C18.9778 1.47147 17.5479 2.28664 14.6882 3.91698C13.9463 4.33992 13.2297 4.77077 12.597 5.1873C11.8758 5.66208 11.091 6.23185 10.2997 6.83701Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 4.25C1.58579 4.25 1.25 4.58579 1.25 5V20C1.25 20.4142 1.58579 20.75 2 20.75C2.41421 20.75 2.75 20.4142 2.75 20V5C2.75 4.58579 2.41421 4.25 2 4.25Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSkipPrevious as IconComponent).keywords = [
  "skip",
  "previous",
  "hop",
  "jump",
  "skim",
  "skitter",
  "pass over",
  "vamoose",
  "decamp",
  "cut",
  "omission",
  "preceding",
  "early",
  "premature",
  "former",
  "past",
  "old",
  "late",
  "foregoing",
  "antecedent",
];

export default IconSkipPrevious as IconComponent;
