import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconSquareDoubleAltArrowRight: FC<IconProps> = ({
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
            d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M8.5 9L11.5 12L8.5 15"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.5 9L15.5 12L12.5 15"
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
            d="M20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355Z"
            fill="currentColor"
          />
          <path
            d="M11.9697 9.53033C11.6768 9.23744 11.6768 8.76256 11.9697 8.46967C12.2626 8.17678 12.7374 8.17678 13.0303 8.46967L16.0303 11.4697C16.3232 11.7626 16.3232 12.2374 16.0303 12.5303L13.0303 15.5303C12.7374 15.8232 12.2626 15.8232 11.9697 15.5303C11.6768 15.2374 11.6768 14.7626 11.9697 14.4697L14.4393 12L11.9697 9.53033Z"
            fill="currentColor"
          />
          <path
            d="M7.96967 9.53033C7.67678 9.23744 7.67678 8.76256 7.96967 8.46967C8.26256 8.17678 8.73744 8.17678 9.03033 8.46967L12.0303 11.4697C12.3232 11.7626 12.3232 12.2374 12.0303 12.5303L9.03033 15.5303C8.73744 15.8232 8.26256 15.8232 7.96967 15.5303C7.67678 15.2374 7.67678 14.7626 7.96967 14.4697L10.4393 12L7.96967 9.53033Z"
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
            d="M22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12ZM7.96967 9.53033C7.67678 9.23744 7.67678 8.76256 7.96967 8.46967C8.26256 8.17678 8.73744 8.17678 9.03033 8.46967L12.0303 11.4697C12.3232 11.7626 12.3232 12.2374 12.0303 12.5303L9.03033 15.5303C8.73744 15.8232 8.26256 15.8232 7.96967 15.5303C7.67678 15.2374 7.67678 14.7626 7.96967 14.4697L10.4393 12L7.96967 9.53033ZM11.9697 8.46967C11.6768 8.76256 11.6768 9.23744 11.9697 9.53033L14.4393 12L11.9697 14.4697C11.6768 14.7626 11.6768 15.2374 11.9697 15.5303C12.2626 15.8232 12.7374 15.8232 13.0303 15.5303L16.0303 12.5303C16.3232 12.2374 16.3232 11.7626 16.0303 11.4697L13.0303 8.46967C12.7374 8.17678 12.2626 8.17678 11.9697 8.46967Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSquareDoubleAltArrowRight as IconComponentType).keywords = [
  "square",
  "double",
  "alt",
  "arrow",
  "right",
  "quadrate",
  "right-angled",
  "squarely",
  "foursquare",
  "squarish",
  "conventional",
  "paid",
  "honorable",
  "honest",
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
  "straight",
  "precise",
  "right on",
  "accurate",
  "decently",
  "satisfactory",
  "exact",
  "powerful",
  "opportune",
];

export default IconSquareDoubleAltArrowRight as IconComponentType;
