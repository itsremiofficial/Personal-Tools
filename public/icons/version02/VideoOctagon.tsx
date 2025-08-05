import { FC } from "react";

const IconVideoOctagon: FC<IconProps> = ({
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
            d="M21.7501 8.58003V15.42C21.7501 16.54 21.1501 17.58 20.1801 18.15L14.2401 21.58C13.2701 22.14 12.0701 22.14 11.0901 21.58L5.15009 18.15C4.18009 17.59 3.58008 16.55 3.58008 15.42V8.58003C3.58008 7.46003 4.18009 6.41999 5.15009 5.84999L11.0901 2.42C12.0601 1.86 13.2601 1.86 14.2401 2.42L20.1801 5.84999C21.1501 6.41999 21.7501 7.45003 21.7501 8.58003Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10.4199 12V10.8C10.4199 9.26001 11.5099 8.63005 12.8399 9.40005L13.8799 10L14.9199 10.6C16.2499 11.37 16.2499 12.63 14.9199 13.4L13.8799 14L12.8399 14.6C11.5099 15.37 10.4199 14.74 10.4199 13.2V12Z"
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
            d="M21.7501 8.58003V15.42C21.7501 16.54 21.1501 17.58 20.1801 18.15L14.2401 21.58C13.2701 22.14 12.0701 22.14 11.0901 21.58L5.15009 18.15C4.18009 17.59 3.58008 16.55 3.58008 15.42V8.58003C3.58008 7.46003 4.18009 6.41999 5.15009 5.84999L11.0901 2.42C12.0601 1.86 13.2601 1.86 14.2401 2.42L20.1801 5.84999C21.1501 6.41999 21.7501 7.45003 21.7501 8.58003Z"
            fill="currentColor"
          />
          <path
            d="M10.4199 12V10.8C10.4199 9.26001 11.5099 8.63005 12.8399 9.40005L13.8799 10L14.9199 10.6C16.2499 11.37 16.2499 12.63 14.9199 13.4L13.8799 14L12.8399 14.6C11.5099 15.37 10.4199 14.74 10.4199 13.2V12Z"
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
            d="M20.1798 5.85L14.2398 2.42C13.2698 1.86 12.0698 1.86 11.0898 2.42L5.15984 5.85C4.18984 6.41 3.58984 7.45 3.58984 8.58V15.42C3.58984 16.54 4.18984 17.58 5.15984 18.15L11.0998 21.58C12.0698 22.14 13.2698 22.14 14.2498 21.58L20.1898 18.15C21.1598 17.59 21.7598 16.55 21.7598 15.42V8.58C21.7498 7.45 21.1498 6.42 20.1798 5.85ZM14.9198 13.4L13.8798 14L12.8398 14.6C11.5098 15.37 10.4198 14.74 10.4198 13.2V12V10.8C10.4198 9.26 11.5098 8.63 12.8398 9.4L13.8798 10L14.9198 10.6C16.2498 11.37 16.2498 12.63 14.9198 13.4Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconVideoOctagon as IconComponent).keywords = [
  "video",
  "octagon",
  "tv",
  "television",
  "picture",
  "telecasting",
  "televised",
  "videotaping",
  "videotaped",
  "taping",
  "videotape",
  "decagon",
  "hexagon",
  "dodecagon",
  "octogonal",
  "hexagonal",
  "oval",
  "triangled",
  "triangle",
  "square",
];

export default IconVideoOctagon as IconComponent;
