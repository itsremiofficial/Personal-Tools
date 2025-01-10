import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconCaseRound: FC<IconProps> = ({
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
            d="M3 12.0006C3 15.7718 3 19.6575 4.31802 20.829C5.63604 22.0006 7.75736 22.0006 12 22.0006C16.2426 22.0006 18.364 22.0006 19.682 20.829C21 19.6575 21 15.7718 21 12.0006"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M14.6603 14.2025L20.8579 12.3432C21.2688 12.22 21.4743 12.1583 21.6264 12.0361C21.7592 11.9294 21.8626 11.7904 21.9266 11.6325C22 11.4517 22 11.2372 22 10.8083C22 9.12088 22 8.27719 21.6703 7.63329C21.3834 7.07303 20.9276 6.6172 20.3673 6.33033C19.7234 6.00061 18.8797 6.00061 17.1923 6.00061H6.80765C5.12027 6.00061 4.27658 6.00061 3.63268 6.33032C3.07242 6.6172 2.61659 7.07303 2.32971 7.63329C2 8.27719 2 9.12088 2 10.8083C2 11.2372 2 11.4517 2.07336 11.6325C2.13743 11.7904 2.24079 11.9294 2.37363 12.0361C2.52574 12.1583 2.73118 12.22 3.14206 12.3432L9.33968 14.2025"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M14 12.5006H10C9.72386 12.5006 9.5 12.7245 9.5 13.0006V15.1621C9.5 15.3665 9.62448 15.5504 9.8143 15.6263L10.5144 15.9064C11.4681 16.2878 12.5319 16.2878 13.4856 15.9064L14.1857 15.6263C14.3755 15.5504 14.5 15.3665 14.5 15.1621V13.0006C14.5 12.7245 14.2761 12.5006 14 12.5006Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M9.1709 4.00061C9.58273 2.83542 10.694 2.00061 12.0002 2.00061C13.3064 2.00061 14.4177 2.83542 14.8295 4.00061"
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
            d="M17.1923 6.00049H6.80765C5.12027 6.00049 4.27658 6.00049 3.63268 6.3302C3.07242 6.61708 2.61659 7.07291 2.32971 7.63316C2 8.27707 2 9.12076 2 10.8081C2 11.2371 2 11.4516 2.07336 11.6324C2.13743 11.7903 2.24079 11.9292 2.37363 12.036C2.52574 12.1582 2.73118 12.2198 3.14206 12.3431L8.5 13.9505V15.1632C8.5 15.9288 8.95939 16.6346 9.68682 16.9301L10.2469 17.1577C11.3719 17.6148 12.6281 17.6148 13.7531 17.1577L14.3132 16.9301C15.0406 16.6346 15.5 15.9288 15.5 15.1632V13.9505L20.8579 12.3431C21.2688 12.2198 21.4743 12.1582 21.6264 12.036C21.7592 11.9292 21.8626 11.7903 21.9266 11.6324C22 11.4516 22 11.2371 22 10.8081C22 9.12076 22 8.27707 21.6703 7.63316C21.3834 7.07291 20.9276 6.61708 20.3673 6.3302C19.7234 6.00049 18.8797 6.00049 17.1923 6.00049ZM13.6 13.0005H10.4C10.1791 13.0005 10 13.1824 10 13.4068V15.1632C10 15.3293 10.0996 15.4787 10.2514 15.5404L10.8116 15.768C11.5745 16.078 12.4255 16.078 13.1885 15.768L13.7486 15.5404C13.9004 15.4787 14 15.3293 14 15.1632V13.4068C14 13.1824 13.8209 13.0005 13.6 13.0005Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M20.9579 12.3129C20.9469 12.3163 20.9356 12.3197 20.9242 12.3231L15.5 13.9504V15.1631C15.5 15.9287 15.0406 16.6344 14.3132 16.93L13.7531 17.1576C12.6281 17.6146 11.3719 17.6146 10.2469 17.1576L9.68682 16.93C8.95939 16.6344 8.5 15.9287 8.5 15.1631V13.9504L3 12.3003C3.0009 15.9756 3.03489 19.6883 4.318 20.8289C5.63601 22.0004 7.75733 22.0004 12 22.0004C16.2426 22.0004 18.3639 22.0004 19.682 20.8289C20.9651 19.6883 20.9991 15.9756 21 12.3003L20.9579 12.3129Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M9.1709 4.00049C9.58273 2.8353 10.694 2.00049 12.0002 2.00049C13.3064 2.00049 14.4177 2.8353 14.8295 4.00049"
            strokeWidth={width}
            strokeLinecap="round"
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
            d="M12.0002 2.75049C11.0217 2.75049 10.1873 3.37552 9.87803 4.25042C9.73999 4.64096 9.3115 4.84565 8.92096 4.70762C8.53043 4.56958 8.32573 4.14109 8.46377 3.75055C8.97821 2.29507 10.3662 1.25049 12.0002 1.25049C13.6341 1.25049 15.0222 2.29507 15.5366 3.75055C15.6747 4.14109 15.47 4.56958 15.0794 4.70762C14.6889 4.84565 14.2604 4.64096 14.1224 4.25042C13.8131 3.37552 12.9787 2.75049 12.0002 2.75049Z"
            fill="currentColor"
          />
          <path
            d="M14 12.5005H10C9.72386 12.5005 9.5 12.7243 9.5 13.0005V15.162C9.5 15.3664 9.62448 15.5503 9.8143 15.6262L10.5144 15.9063C11.4681 16.2877 12.5319 16.2877 13.4856 15.9063L14.1857 15.6262C14.3755 15.5503 14.5 15.3664 14.5 15.162V13.0005C14.5 12.7243 14.2761 12.5005 14 12.5005Z"
            fill="currentColor"
          />
          <path
            d="M8.01076 15.3696L3.00586 13.8682C3.03595 16.9827 3.21789 19.851 4.31792 20.8288C5.63593 22.0003 7.75726 22.0003 11.9999 22.0003C16.2425 22.0003 18.3639 22.0003 19.6819 20.8288C20.7819 19.851 20.9638 16.9827 20.9939 13.8682L15.9892 15.3696C15.913 16.1023 15.4372 16.7412 14.7428 17.0189L14.0426 17.299C12.7314 17.8235 11.2686 17.8235 9.95735 17.299L9.25722 17.0189C8.5628 16.7412 8.08702 16.1023 8.01076 15.3696Z"
            fill="currentColor"
          />
          <path
            d="M7.60893 5.00049H16.3911C18.8412 5.00049 20.0663 5.00049 20.8934 5.67347C21.0524 5.80282 21.1977 5.94811 21.327 6.10708C22 6.93419 22 8.15926 22 10.6094C22 11.2311 22 11.542 21.8492 11.7845C21.8199 11.8317 21.7866 11.8764 21.7498 11.9181C21.5609 12.1322 21.2631 12.2216 20.6676 12.4002L16 13.8005V13.0005C16 11.8959 15.1046 11.0005 14 11.0005H10C8.89543 11.0005 8 11.8959 8 13.0005V13.8005L3.3324 12.4002C2.7369 12.2216 2.43915 12.1322 2.25021 11.9181C2.21341 11.8764 2.18015 11.8317 2.15078 11.7845C2 11.542 2 11.2311 2 10.6094C2 8.15926 2 6.93419 2.67298 6.10708C2.80233 5.94811 2.94763 5.80282 3.10659 5.67347C3.9337 5.00049 5.15877 5.00049 7.60893 5.00049Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCaseRound as IconComponentType).keywords = [
  "case",
  "round",
  "event",
  "cause",
  "subject",
  "example",
  "eccentric",
  "showcase",
  "type",
  "instance",
  "character",
  "orbicular",
  "rotund",
  "orbiculate",
  "discoidal",
  "disklike",
  "discoid",
  "ringlike",
  "globular",
  "globose",
];

export default IconCaseRound as IconComponentType;
