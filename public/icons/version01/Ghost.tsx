import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconGhost: FC<IconProps> = ({
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
            d="M16 10.5C16 11.3284 15.5523 12 15 12C14.4477 12 14 11.3284 14 10.5C14 9.67157 14.4477 9 15 9C15.5523 9 16 9.67157 16 10.5Z"
            fill="currentColor"
          />
          <ellipse cx="9" cy="10.5" rx="1" ry="1.5" fill="currentColor" />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M22 19.723V12.3006C22 6.61173 17.5228 2 12 2C6.47715 2 2 6.61173 2 12.3006V19.723C2 21.0453 3.35098 21.9054 4.4992 21.314C5.42726 20.836 6.5328 20.9069 7.39614 21.4998C8.36736 22.1667 9.63264 22.1667 10.6039 21.4998L10.9565 21.2576C11.5884 20.8237 12.4116 20.8237 13.0435 21.2576L13.3961 21.4998C14.3674 22.1667 15.6326 22.1667 16.6039 21.4998C17.4672 20.9069 18.5727 20.836 19.5008 21.314C20.649 21.9054 22 21.0453 22 19.723Z"
            stroke="currentColor"
            strokeWidth={width}
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
            d="M22 19.2058V12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12V19.2058C2 20.4896 3.35098 21.3245 4.4992 20.7504C5.42726 20.2864 6.5328 20.3552 7.39614 20.9308C8.36736 21.5782 9.63264 21.5782 10.6039 20.9308L10.9565 20.6957C11.5884 20.2744 12.4116 20.2744 13.0435 20.6957L13.3961 20.9308C14.3674 21.5782 15.6326 21.5782 16.6039 20.9308C17.4672 20.3552 18.5727 20.2864 19.5008 20.7504C20.649 21.3245 22 20.4896 22 19.2058Z"
            fill="currentColor"
          />
          <path
            d="M15 12C15.5523 12 16 11.3284 16 10.5C16 9.67157 15.5523 9 15 9C14.4477 9 14 9.67157 14 10.5C14 11.3284 14.4477 12 15 12Z"
            fill="currentColor"
          />
          <path
            d="M10 10.5C10 11.3284 9.55228 12 9 12C8.44772 12 8 11.3284 8 10.5C8 9.67157 8.44772 9 9 9C9.55228 9 10 9.67157 10 10.5Z"
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
            d="M22 19.2058V12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12V19.2058C2 20.4896 3.35098 21.3245 4.4992 20.7504C5.42726 20.2864 6.5328 20.3552 7.39614 20.9308C8.36736 21.5782 9.63264 21.5782 10.6039 20.9308L10.9565 20.6957C11.5884 20.2744 12.4116 20.2744 13.0435 20.6957L13.3961 20.9308C14.3674 21.5782 15.6326 21.5782 16.6039 20.9308C17.4672 20.3552 18.5727 20.2864 19.5008 20.7504C20.649 21.3245 22 20.4896 22 19.2058ZM16 10.5C16 11.3284 15.5523 12 15 12C14.4477 12 14 11.3284 14 10.5C14 9.67157 14.4477 9 15 9C15.5523 9 16 9.67157 16 10.5ZM9 12C9.55228 12 10 11.3284 10 10.5C10 9.67157 9.55228 9 9 9C8.44772 9 8 9.67157 8 10.5C8 11.3284 8.44772 12 9 12Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconGhost as IconComponentType).keywords = [
  "ghost",
  "wraith",
  "specter",
  "spectre",
  "spook",
  "haunt",
  "obsess",
  "ghostwrite",
  "touch",
  "ghostwriter",
];

export default IconGhost as IconComponentType;
