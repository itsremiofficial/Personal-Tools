import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconRewind15SecondsBack: FC<IconProps> = ({
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
            d="M14 4.5L12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 7.89936 4.46819 4.3752 8 2.83209"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.5 8.5H13.8604C13.6452 8.5 13.4541 8.63772 13.386 8.84189L12.7194 10.8419C12.6114 11.1657 12.8524 11.5 13.1937 11.5H14.5C15.6046 11.5 16.5 12.3954 16.5 13.5C16.5 14.6046 15.6046 15.5 14.5 15.5H12.5"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M7.5 10.5L10 8.5V15.5"
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
            d="M10.3249 7.82403C10.5848 7.94892 10.75 8.2117 10.75 8.50001V15.5C10.75 15.9142 10.4142 16.25 10 16.25C9.58581 16.25 9.25003 15.9142 9.25003 15.5V10.0605L7.96855 11.0857C7.6451 11.3444 7.17313 11.292 6.91438 10.9685C6.65562 10.6451 6.70806 10.1731 7.03151 9.91436L9.53151 7.91436C9.75663 7.73425 10.0651 7.69914 10.3249 7.82403Z"
            fill="currentColor"
          />
          <path
            d="M12.6746 8.60472C12.8447 8.09429 13.3224 7.75001 13.8604 7.75001H16.5C16.9142 7.75001 17.25 8.08579 17.25 8.50001C17.25 8.91422 16.9142 9.25001 16.5 9.25001H14.0406L13.5406 10.75H14.5C16.0188 10.75 17.25 11.9812 17.25 13.5C17.25 15.0188 16.0188 16.25 14.5 16.25H12.5C12.0858 16.25 11.75 15.9142 11.75 15.5C11.75 15.0858 12.0858 14.75 12.5 14.75H14.5C15.1904 14.75 15.75 14.1904 15.75 13.5C15.75 12.8097 15.1904 12.25 14.5 12.25H13.1937C12.3405 12.25 11.7381 11.4141 12.0079 10.6047L12.6746 8.60472Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.324 1.67511C11.4489 1.41526 11.7117 1.25 12 1.25C12.7353 1.25 13.4541 1.32394 14.1492 1.46503C19.0563 2.46112 22.75 6.79837 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12C1.25 7.59065 3.90459 3.80298 7.69972 2.14482C8.07929 1.97898 8.52143 2.15224 8.68726 2.53181C8.8531 2.91137 8.67984 3.35351 8.30028 3.51935C5.03179 4.94742 2.75 8.20808 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 7.84953 18.5158 4.33622 14.75 3.16544V4.5C14.75 4.81852 14.5488 5.10229 14.2483 5.20772C13.9477 5.31315 13.6133 5.21724 13.4143 4.96852L11.4143 2.46852C11.2342 2.24339 11.1991 1.93496 11.324 1.67511Z"
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
            d="M10.3249 7.82403C10.5848 7.94892 10.75 8.2117 10.75 8.50001V15.5C10.75 15.9142 10.4142 16.25 10 16.25C9.58581 16.25 9.25003 15.9142 9.25003 15.5V10.0605L7.96855 11.0857C7.6451 11.3444 7.17313 11.292 6.91438 10.9685C6.65562 10.6451 6.70806 10.1731 7.03151 9.91436L9.53151 7.91436C9.75663 7.73425 10.0651 7.69914 10.3249 7.82403ZM12.6746 8.60472C12.8447 8.09429 13.3224 7.75001 13.8604 7.75001H16.5C16.9142 7.75001 17.25 8.08579 17.25 8.50001C17.25 8.91422 16.9142 9.25001 16.5 9.25001H14.0406L13.5406 10.75H14.5C16.0188 10.75 17.25 11.9812 17.25 13.5C17.25 15.0188 16.0188 16.25 14.5 16.25H12.5C12.0858 16.25 11.75 15.9142 11.75 15.5C11.75 15.0858 12.0858 14.75 12.5 14.75H14.5C15.1904 14.75 15.75 14.1904 15.75 13.5C15.75 12.8097 15.1904 12.25 14.5 12.25H13.1937C12.3405 12.25 11.7381 11.4141 12.0079 10.6047L12.6746 8.60472Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.324 1.67511C11.4489 1.41526 11.7117 1.25 12 1.25C12.7353 1.25 13.4541 1.32394 14.1492 1.46503C19.0563 2.46112 22.75 6.79837 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12C1.25 7.59065 3.90459 3.80298 7.69972 2.14482C8.07929 1.97898 8.52143 2.15224 8.68726 2.53181C8.8531 2.91137 8.67984 3.35351 8.30028 3.51935C5.03179 4.94742 2.75 8.20808 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 7.84953 18.5158 4.33622 14.75 3.16544V4.5C14.75 4.81852 14.5488 5.10229 14.2483 5.20772C13.9477 5.31315 13.6133 5.21724 13.4143 4.96852L11.4143 2.46852C11.2342 2.24339 11.1991 1.93496 11.324 1.67511Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconRewind15SecondsBack as IconComponentType).keywords = [
  "rewind",
  "15",
  "seconds",
  "back",
  "rollback",
  "regress",
  "backtrack",
  "retrogressive",
  "backward",
  "rewrite",
  "reverse",
  "retract",
  "cardinal",
  "xv",
  "mig",
  "pmr",
  "rr",
  "15th",
  "crystal",
  "ides",
  "115",
  "sec",
  "moment",
  "instant",
  "intermediate",
  "endorsement",
  "endorse",
  "indorse",
  "forward",
  "rearward",
  "rearwards",
  "backwards",
  "back up",
  "backmost",
  "rearmost",
  "hindermost",
  "support",
];

export default IconRewind15SecondsBack as IconComponentType;
