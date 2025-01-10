import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconHeart: FC<IconProps> = ({
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
            d="M12 5.501C7.50016 0.82583 2 4.27453 2 9.13746C2 14.0004 6.01943 16.5918 8.96173 18.9112C10 19.7297 11 20.5004 12 20.5004"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M12 5.501C16.4998 0.82583 22 4.27453 22 9.13746C22 14.0004 17.9806 16.5918 15.0383 18.9112C14 19.7297 13 20.5004 12 20.5004"
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
            opacity={duotone ? "0.5" : "1"}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.10627 18.2472C5.29819 16.0837 2 13.5425 2 9.13746C2 4.27453 7.50016 0.82583 12 5.501V20.5004C11 20.5004 10 19.7297 8.96173 18.9112C8.68471 18.6929 8.39814 18.4721 8.10627 18.2472Z"
            fill="currentColor"
          />
          <path
            d="M15.0383 18.9112C17.9806 16.5918 22 14.0004 22 9.13746C22 4.27453 16.4998 0.82583 12 5.501V20.5004C13 20.5004 14 19.7297 15.0383 18.9112Z"
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
            d="M2 9.13746C2 14.0004 6.01943 16.5918 8.96173 18.9112C10 19.7297 11 20.5004 12 20.5004C13 20.5004 14 19.7297 15.0383 18.9112C17.9806 16.5918 22 14.0004 22 9.13746C22 4.27453 16.4998 0.82583 12 5.501C7.50016 0.82583 2 4.27453 2 9.13746Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconHeart as IconComponentType).keywords = [
  "heart",
  "nerve",
  "marrow",
  "eye",
  "nub",
  "pith",
  "bosom",
  "spunk",
  "core",
  "meat",
];

export default IconHeart as IconComponentType;
