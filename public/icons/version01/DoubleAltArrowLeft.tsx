import { FC } from "react";

const IconDoubleAltArrowLeft: FC<IconProps> = ({
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
            d="M13 19L7 12L13 5"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M16.9998 19L10.9998 12L16.9998 5"
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
            d="M17.75 19C17.75 19.3139 17.5546 19.5946 17.2602 19.7035C16.9658 19.8123 16.6348 19.7264 16.4306 19.4881L10.4306 12.4881C10.1898 12.2073 10.1898 11.7928 10.4306 11.5119L16.4306 4.51194C16.6348 4.27364 16.9658 4.18773 17.2602 4.29662C17.5546 4.40551 17.75 4.68618 17.75 5.00004L17.75 19Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.4881 19.5695C13.8026 19.2999 13.839 18.8264 13.5694 18.5119L7.98781 12L13.5694 5.48811C13.839 5.17361 13.8026 4.70014 13.4881 4.43057C13.1736 4.161 12.7001 4.19743 12.4306 4.51192L6.43056 11.5119C6.18981 11.7928 6.18981 12.2072 6.43056 12.4881L12.4306 19.4881C12.7001 19.8026 13.1736 19.839 13.4881 19.5695Z"
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
            d="M13.4881 4.43057C13.8026 4.70014 13.839 5.17361 13.5694 5.48811L7.98781 12L13.5694 18.5119C13.839 18.8264 13.8026 19.2999 13.4881 19.5695C13.1736 19.839 12.7001 19.8026 12.4306 19.4881L6.43056 12.4881C6.18981 12.2072 6.18981 11.7928 6.43056 11.5119L12.4306 4.51192C12.7001 4.19743 13.1736 4.161 13.4881 4.43057Z"
            fill="currentColor"
          />
          <path
            d="M17.75 5.00005C17.75 4.68619 17.5546 4.40553 17.2602 4.29664C16.9658 4.18774 16.6348 4.27366 16.4306 4.51196L10.4306 11.512C10.1898 11.7928 10.1898 12.2073 10.4306 12.4881L16.4306 19.4881C16.6348 19.7264 16.9658 19.8124 17.2602 19.7035C17.5546 19.5946 17.75 19.3139 17.75 19L17.75 5.00005Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconDoubleAltArrowLeft as IconComponent).keywords = [
  "double",
  "alt",
  "arrow",
  "left",
  "twofold",
  "duple",
  "twice",
  "dual",
  "reduplicate",
  "doubly",
  "multiple",
  "double up",
  "forked",
  "elevation",
  "el",
  "altitude",
  "backspace",
  "esc",
  "shadow",
  "ctrl",
  "variation",
  "variant",
  "pointer",
  "archer",
  "archery",
  "dart",
  "arrowhead",
  "bolt",
  "spike",
  "rope",
  "roof",
  "left-hand",
  "left-handed",
  "left over",
  "near",
  "leftover",
  "nigh",
  "remaining",
  "leftfield",
  "odd",
];

export default IconDoubleAltArrowLeft as IconComponent;
