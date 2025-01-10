import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconTextUnderlineCircle: FC<IconProps> = ({
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
            d="M2 12.0005C2 6.47764 6.47715 2.00049 12 2.00049C17.5228 2.00049 22 6.47764 22 12.0005C22 17.5233 17.5228 22.0005 12 22.0005C6.47715 22.0005 2 17.5233 2 12.0005Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M8 17.0005H16"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 7.00049V10.0005C8 12.2096 9.79086 14.0005 12 14.0005C14.2091 14.0005 16 12.2096 16 10.0005V7.00049"
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
            opacity={duotone ? "0.5" : "1"}
            d="M12 2.00049C6.47715 2.00049 2 6.47764 2 12.0005C2 17.5233 6.47715 22.0005 12 22.0005C17.5228 22.0005 22 17.5233 22 12.0005C22 6.47764 17.5228 2.00049 12 2.00049Z"
            fill="currentColor"
          />
          <path
            d="M7.25 17.0005C7.25 16.5863 7.58579 16.2505 8 16.2505H16C16.4142 16.2505 16.75 16.5863 16.75 17.0005C16.75 17.4147 16.4142 17.7505 16 17.7505H8C7.58579 17.7505 7.25 17.4147 7.25 17.0005Z"
            fill="currentColor"
          />
          <path
            d="M8.75 7.00049C8.75 6.58627 8.41421 6.25049 8 6.25049C7.58579 6.25049 7.25 6.58627 7.25 7.00049V10.0005C7.25 12.6238 9.37665 14.7505 12 14.7505C14.6234 14.7505 16.75 12.6238 16.75 10.0005V7.00049C16.75 6.58627 16.4142 6.25049 16 6.25049C15.5858 6.25049 15.25 6.58627 15.25 7.00049V10.0005C15.25 11.7954 13.7949 13.2505 12 13.2505C10.2051 13.2505 8.75 11.7954 8.75 10.0005V7.00049Z"
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
            d="M2 12.0005C2 6.47764 6.47715 2.00049 12 2.00049C17.5228 2.00049 22 6.47764 22 12.0005C22 17.5233 17.5228 22.0005 12 22.0005C6.47715 22.0005 2 17.5233 2 12.0005ZM7.25 17.0005C7.25 16.5863 7.58579 16.2505 8 16.2505H16C16.4142 16.2505 16.75 16.5863 16.75 17.0005C16.75 17.4147 16.4142 17.7505 16 17.7505H8C7.58579 17.7505 7.25 17.4147 7.25 17.0005ZM8.75 7.00049C8.75 6.58627 8.41421 6.25049 8 6.25049C7.58579 6.25049 7.25 6.58627 7.25 7.00049V10.0005C7.25 12.6238 9.37665 14.7505 12 14.7505C14.6234 14.7505 16.75 12.6238 16.75 10.0005V7.00049C16.75 6.58627 16.4142 6.25049 16 6.25049C15.5858 6.25049 15.25 6.58627 15.25 7.00049V10.0005C15.25 11.7954 13.7949 13.2505 12 13.2505C10.2051 13.2505 8.75 11.7954 8.75 10.0005V7.00049Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconTextUnderlineCircle as IconComponentType).keywords = [
  "text",
  "underline",
  "circle",
  "schoolbook",
  "textbook",
  "school text",
  "text edition",
  "textual matter",
  "writing",
  "letter",
  "paragraph",
  "manuscript",
  "underscore",
  "emphasize",
  "highlighting",
  "highlight",
  "highlights",
  "outline",
  "note",
  "accentuate",
  "draw",
  "round",
  "rotary",
  "environ",
  "roundabout",
  "circulate",
  "circuit",
  "encircle",
  "surround",
  "dress circle",
];

export default IconTextUnderlineCircle as IconComponentType;
