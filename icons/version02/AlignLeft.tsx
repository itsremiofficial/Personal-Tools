import { FC } from "react";

const IconAlignLeft: FC<IconProps> = ({
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
            opacity={duotone ? "0.4" : "1"}
            d="M5.77002 19.25H17.57C19.07 19.25 19.67 18.61 19.67 17.02V15.98C19.67 14.39 19.07 13.75 17.57 13.75H5.77002"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M5.77002 5.25H12.57C14.07 5.25 14.67 5.89 14.67 7.48V8.52C14.67 10.11 14.07 10.75 12.57 10.75H5.77002"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.66992 1.98999V21.99"
            stroke="currentColor"
            strokeWidth={width}
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
            d="M20.0498 15.98V17.02C20.0498 18.61 19.4498 19.25 17.9298 19.25H6.0498V13.75H17.9298C19.4498 13.75 20.0498 14.39 20.0498 15.98Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.0498 7.48V8.52C15.0498 10.11 14.4398 10.75 12.9298 10.75H6.0498V5.25H12.9298C14.4398 5.25 15.0498 5.89 15.0498 7.48Z"
            fill="currentColor"
          />
          <path
            d="M6.05002 22C5.64002 22 5.30002 21.66 5.30002 21.25V2.75C5.29002 2.33 5.63002 2 6.05002 2C6.47002 2 6.80002 2.34 6.80002 2.75V21.25C6.79002 21.66 6.46002 22 6.05002 22Z"
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
            d="M20.0498 15.98V17.02C20.0498 18.61 19.4498 19.25 17.9298 19.25H6.0498V13.75H17.9298C19.4498 13.75 20.0498 14.39 20.0498 15.98Z"
            fill="currentColor"
          />
          <path
            d="M15.0498 7.48V8.52C15.0498 10.11 14.4398 10.75 12.9298 10.75H6.0498V5.25H12.9298C14.4398 5.25 15.0498 5.89 15.0498 7.48Z"
            fill="currentColor"
          />
          <path
            d="M6.05002 22C5.64002 22 5.30002 21.66 5.30002 21.25V2.75C5.29002 2.33 5.63002 2 6.05002 2C6.47002 2 6.80002 2.34 6.80002 2.75V21.25C6.79002 21.66 6.46002 22 6.05002 22Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconAlignLeft as IconComponent).keywords = [
  "align",
  "left",
  "line up",
  "adjust",
  "coordinate",
  "aline",
  "array",
  "alignment",
  "link",
  "combine",
  "integrate",
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

export default IconAlignLeft as IconComponent;
