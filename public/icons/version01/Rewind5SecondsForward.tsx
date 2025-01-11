import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconRewind5SecondsForward: FC<IconProps> = ({
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
            d="M10 4.5L12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 7.89936 19.5318 4.3752 16 2.83209"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 8.5H11.3604C11.1452 8.5 10.9541 8.63772 10.886 8.84189L10.2194 10.8419C10.1114 11.1657 10.3524 11.5 10.6937 11.5H12C13.1046 11.5 14 12.3954 14 13.5C14 14.6046 13.1046 15.5 12 15.5H10"
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
            d="M10.1745 8.60472C10.3447 8.09429 10.8223 7.75 11.3604 7.75H14C14.4142 7.75 14.75 8.08579 14.75 8.5C14.75 8.91421 14.4142 9.25 14 9.25H11.5406L11.0406 10.75H12C13.5188 10.75 14.75 11.9812 14.75 13.5C14.75 15.0188 13.5188 16.25 12 16.25H10C9.58579 16.25 9.25 15.9142 9.25 15.5C9.25 15.0858 9.58579 14.75 10 14.75H12C12.6904 14.75 13.25 14.1904 13.25 13.5C13.25 12.8096 12.6904 12.25 12 12.25H10.6937C9.84052 12.25 9.23805 11.4141 9.50786 10.6047L10.1745 8.60472Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.676 1.67511C12.5511 1.41526 12.2883 1.25 12 1.25C11.2647 1.25 10.5459 1.32394 9.8508 1.46503C4.94367 2.46112 1.25 6.79837 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 7.59065 20.0954 3.80298 16.3003 2.14482C15.9207 1.97898 15.4786 2.15224 15.3127 2.53181C15.1469 2.91137 15.3202 3.35351 15.6997 3.51935C18.9682 4.94742 21.25 8.20808 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 7.84953 5.48421 4.33622 9.25 3.16544V4.5C9.25 4.81852 9.45118 5.10229 9.75175 5.20772C10.0523 5.31315 10.3867 5.21724 10.5857 4.96852L12.5857 2.46852C12.7658 2.24339 12.8009 1.93496 12.676 1.67511Z"
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
            d="M10.1745 8.60472C10.3447 8.09429 10.8223 7.75 11.3604 7.75H14C14.4142 7.75 14.75 8.08579 14.75 8.5C14.75 8.91421 14.4142 9.25 14 9.25H11.5406L11.0406 10.75H12C13.5188 10.75 14.75 11.9812 14.75 13.5C14.75 15.0188 13.5188 16.25 12 16.25H10C9.58579 16.25 9.25 15.9142 9.25 15.5C9.25 15.0858 9.58579 14.75 10 14.75H12C12.6904 14.75 13.25 14.1904 13.25 13.5C13.25 12.8096 12.6904 12.25 12 12.25H10.6937C9.84052 12.25 9.23805 11.4141 9.50786 10.6047L10.1745 8.60472Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.676 1.67511C12.5511 1.41526 12.2883 1.25 12 1.25C11.2647 1.25 10.5459 1.32394 9.8508 1.46503C4.94367 2.46112 1.25 6.79837 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 7.59065 20.0954 3.80298 16.3003 2.14482C15.9207 1.97898 15.4786 2.15224 15.3127 2.53181C15.1469 2.91137 15.3202 3.35351 15.6997 3.51935C18.9682 4.94742 21.25 8.20808 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 7.84953 5.48421 4.33622 9.25 3.16544V4.5C9.25 4.81852 9.45118 5.10229 9.75175 5.20772C10.0523 5.31315 10.3867 5.21724 10.5857 4.96852L12.5857 2.46852C12.7658 2.24339 12.8009 1.93496 12.676 1.67511Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconRewind5SecondsForward as IconComponentType).keywords = [
  "rewind",
  "5",
  "seconds",
  "forward",
  "rollback",
  "regress",
  "backtrack",
  "retrogressive",
  "backward",
  "rewrite",
  "back",
  "reverse",
  "retract",
  "wash out",
  "cut up",
  "pull out",
  "pull up",
  "pull over",
  "pull in",
  "work out",
  "ride down",
  "rush hour",
  "sec",
  "moment",
  "instant",
  "intermediate",
  "endorsement",
  "endorse",
  "indorse",
  "frontwards",
  "ahead",
  "frontward",
  "forrader",
  "front",
  "forth",
  "onwards",
  "onward",
  "advancing",
];

export default IconRewind5SecondsForward as IconComponentType;