import { FC } from "react";

const IconArrowLeftUp: FC<IconProps> = ({
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
            d="M17.4697 18.5303C17.7626 18.8232 18.2374 18.8232 18.5303 18.5303C18.8232 18.2374 18.8232 17.7626 18.5303 17.4697L17.4697 18.5303ZM18.5303 17.4697L6.53033 5.46967L5.46967 6.53033L17.4697 18.5303L18.5303 17.4697Z"
            fill="currentColor"
          />
          <path
            d="M15 6H6V15"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.53033 15.5303C6.31583 15.7448 5.99324 15.809 5.71299 15.6929C5.43273 15.5768 5.25 15.3033 5.25 15V6C5.25 5.58579 5.58579 5.25 6 5.25L15 5.25C15.3033 5.25 15.5768 5.43273 15.6929 5.71299C15.809 5.99324 15.7448 6.31583 15.5303 6.53033L6.53033 15.5303Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M18.5303 17.4697C18.8232 17.7626 18.8232 18.2374 18.5303 18.5303C18.2374 18.8232 17.7626 18.8232 17.4697 18.5303L10.5 11.5607L11.5607 10.5L18.5303 17.4697Z"
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
            d="M18.5303 17.4697C18.8232 17.7626 18.8232 18.2374 18.5303 18.5303C18.2374 18.8232 17.7626 18.8232 17.4697 18.5303L10.5 11.5607L6.53033 15.5303C6.31583 15.7448 5.99324 15.809 5.71299 15.6929C5.43273 15.5768 5.25 15.3033 5.25 15V6C5.25 5.58579 5.58579 5.25 6 5.25L15 5.25C15.3033 5.25 15.5768 5.43273 15.6929 5.71299C15.809 5.99324 15.7448 6.31583 15.5303 6.53033L11.5607 10.5L18.5303 17.4697Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconArrowLeftUp as IconComponent).keywords = [
  "arrow",
  "left",
  "up",
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
  "upbound",
  "upwardly",
  "ascending",
  "upward",
  "upwards",
  "rising",
  "astir",
  "ahead",
  "awake",
];

export default IconArrowLeftUp as IconComponent;
