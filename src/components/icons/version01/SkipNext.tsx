import { FC } from "react";

const IconSkipNext: FC<IconProps> = ({
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
            d="M13.7003 6.83701C16.5668 9.0292 18 10.1253 18 12C18 13.8747 16.5668 14.9708 13.7003 17.163C12.909 17.7682 12.1242 18.3379 11.403 18.8127C10.7703 19.2292 10.0537 19.6601 9.31182 20.083C6.45208 21.7134 5.02221 22.5285 3.73977 21.626C2.45734 20.7235 2.34079 18.8341 2.10768 15.0554C2.04176 13.9867 2 12.9392 2 12C2 11.0609 2.04176 10.0133 2.10768 8.94462C2.34079 5.16589 2.45734 3.27652 3.73977 2.374C5.02221 1.47147 6.45208 2.28664 9.31182 3.91698C10.0537 4.33992 10.7703 4.77077 11.403 5.1873C12.1242 5.66208 12.909 6.23185 13.7003 6.83701Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M22 5V20"
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
            d="M13.7003 6.83701C16.5668 9.0292 18 10.1253 18 12C18 13.8747 16.5668 14.9708 13.7003 17.163C12.909 17.7682 12.1242 18.3379 11.403 18.8127C10.7703 19.2292 10.0537 19.6601 9.31182 20.083C6.45208 21.7134 5.02221 22.5285 3.73977 21.626C2.45734 20.7235 2.34079 18.8341 2.10768 15.0554C2.04176 13.9867 2 12.9392 2 12C2 11.0609 2.04176 10.0133 2.10768 8.94462C2.34079 5.16589 2.45734 3.27652 3.73977 2.374C5.02221 1.47147 6.45208 2.28664 9.31182 3.91698C10.0537 4.33992 10.7703 4.77077 11.403 5.1873C12.1242 5.66208 12.909 6.23185 13.7003 6.83701Z"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.5" : "1"}>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22 4.25C22.4142 4.25 22.75 4.58579 22.75 5V20C22.75 20.4142 22.4142 20.75 22 20.75C21.5858 20.75 21.25 20.4142 21.25 20V5C21.25 4.58579 21.5858 4.25 22 4.25Z"
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
            d="M13.7003 6.83701C16.5668 9.0292 18 10.1253 18 12C18 13.8747 16.5668 14.9708 13.7003 17.163C12.909 17.7682 12.1242 18.3379 11.403 18.8127C10.7703 19.2292 10.0537 19.6601 9.31182 20.083C6.45208 21.7134 5.02221 22.5285 3.73977 21.626C2.45734 20.7235 2.34079 18.8341 2.10768 15.0554C2.04176 13.9867 2 12.9392 2 12C2 11.0609 2.04176 10.0133 2.10768 8.94462C2.34079 5.16589 2.45734 3.27652 3.73977 2.374C5.02221 1.47147 6.45208 2.28664 9.31182 3.91698C10.0537 4.33992 10.7703 4.77077 11.403 5.1873C12.1242 5.66208 12.909 6.23185 13.7003 6.83701Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22 4.25C22.4142 4.25 22.75 4.58579 22.75 5V20C22.75 20.4142 22.4142 20.75 22 20.75C21.5858 20.75 21.25 20.4142 21.25 20V5C21.25 4.58579 21.5858 4.25 22 4.25Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSkipNext as IconComponent).keywords = [
  "skip",
  "next",
  "hop",
  "jump",
  "skim",
  "skitter",
  "pass over",
  "vamoose",
  "decamp",
  "cut",
  "omission",
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

export default IconSkipNext as IconComponent;
