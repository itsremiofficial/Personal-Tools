import { FC } from "react";

const IconEmojiNormal: FC<IconProps> = ({
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
            d="M9.66992 22H15.6699C20.6699 22 22.6699 20 22.6699 15V9C22.6699 4 20.6699 2 15.6699 2H9.66992C4.66992 2 2.66992 4 2.66992 9V15C2.66992 20 4.66992 22 9.66992 22Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.34" : "1"}
            d="M7.66992 8.25C8.66992 9.25 10.2999 9.25 11.3099 8.25"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.34" : "1"}
            d="M14.0303 8.25C15.0303 9.25 16.6603 9.25 17.6703 8.25"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.34" : "1"}
            d="M9.06992 13H16.2699C16.7699 13 17.1699 13.4 17.1699 13.9C17.1699 16.39 15.1599 18.4 12.6699 18.4C10.1799 18.4 8.16992 16.39 8.16992 13.9C8.16992 13.4 8.56992 13 9.06992 13Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
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
            d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2Z"
            fill="currentColor"
          />
          <path
            d="M9.49035 9.75C8.64035 9.75 7.79035 9.43 7.14035 8.78C6.85035 8.49 6.85035 8.01 7.14035 7.72C7.43035 7.43 7.91035 7.43 8.20035 7.72C8.91035 8.43 10.0704 8.43 10.7804 7.72C11.0704 7.43 11.5504 7.43 11.8404 7.72C12.1304 8.01 12.1304 8.49 11.8404 8.78C11.1904 9.42 10.3404 9.75 9.49035 9.75Z"
            fill="currentColor"
          />
          <path
            d="M15.8497 9.75C14.9997 9.75 14.1497 9.43 13.4997 8.78C13.2097 8.49 13.2097 8.01 13.4997 7.72C13.7897 7.43 14.2697 7.43 14.5597 7.72C15.2697 8.43 16.4297 8.43 17.1397 7.72C17.4297 7.43 17.9097 7.43 18.1997 7.72C18.4897 8.01 18.4897 8.49 18.1997 8.78C17.5497 9.42 16.6997 9.75 15.8497 9.75Z"
            fill="currentColor"
          />
          <path
            d="M16.2698 12.62H9.0698C8.3698 12.62 7.7998 13.19 7.7998 13.9C7.7998 16.59 9.9898 18.78 12.6798 18.78C15.3698 18.78 17.5598 16.59 17.5598 13.9C17.5498 13.2 16.9698 12.62 16.2698 12.62Z"
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
            d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2ZM7.13992 7.72C7.42992 7.43 7.90992 7.43 8.19992 7.72C8.90992 8.43 10.0699 8.43 10.7799 7.72C11.0699 7.43 11.5499 7.43 11.8399 7.72C12.1299 8.01 12.1299 8.49 11.8399 8.78C11.1899 9.43 10.3399 9.75 9.48992 9.75C8.63992 9.75 7.78992 9.43 7.13992 8.78C6.84992 8.48 6.84992 8.01 7.13992 7.72ZM12.6699 18.78C9.97992 18.78 7.78992 16.59 7.78992 13.9C7.78992 13.2 8.35992 12.62 9.05992 12.62H16.2599C16.9599 12.62 17.5299 13.19 17.5299 13.9C17.5499 16.59 15.3599 18.78 12.6699 18.78ZM18.1999 8.78C17.5499 9.43 16.6999 9.75 15.8499 9.75C14.9999 9.75 14.1499 9.43 13.4999 8.78C13.2099 8.49 13.2099 8.01 13.4999 7.72C13.7899 7.43 14.2699 7.43 14.5599 7.72C15.2699 8.43 16.4299 8.43 17.1399 7.72C17.4299 7.43 17.9099 7.43 18.1999 7.72C18.4899 8.01 18.4899 8.48 18.1999 8.78Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconEmojiNormal as IconComponent).keywords = [
  "emoji",
  "normal",
  "emoticon",
  "reaction",
  "react",
  "emote",
  "smiley",
  "sticker",
  "emojipasta",
  "reaction gif",
  "hashflag",
  "typical",
  "natural",
  "mean",
  "rule",
  "modal",
  "pattern",
  "convention",
  "regular",
  "average",
];

export default IconEmojiNormal as IconComponent;
