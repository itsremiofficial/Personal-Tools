import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconExplicit: FC<IconProps> = ({
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
            d="M15 7H10C9.44772 7 9 7.44772 9 8V12M15 17H10C9.44772 17 9 16.5523 9 16V12M9 12H15"
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
            d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22Z"
            fill="currentColor"
          />
          <path
            d="M8.25 8C8.25 7.0335 9.0335 6.25 10 6.25H15C15.4142 6.25 15.75 6.58579 15.75 7C15.75 7.41421 15.4142 7.75 15 7.75H10C9.86193 7.75 9.75 7.86193 9.75 8V11.25H15C15.4142 11.25 15.75 11.5858 15.75 12C15.75 12.4142 15.4142 12.75 15 12.75H9.75V16C9.75 16.1381 9.86193 16.25 10 16.25H15C15.4142 16.25 15.75 16.5858 15.75 17C15.75 17.4142 15.4142 17.75 15 17.75H10C9.0335 17.75 8.25 16.9665 8.25 16V8Z"
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
            d="M3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447ZM8.25 8C8.25 7.0335 9.0335 6.25 10 6.25H15C15.4142 6.25 15.75 6.58579 15.75 7C15.75 7.41421 15.4142 7.75 15 7.75H10C9.86193 7.75 9.75 7.86193 9.75 8V11.25H15C15.4142 11.25 15.75 11.5858 15.75 12C15.75 12.4142 15.4142 12.75 15 12.75H9.75V16C9.75 16.1381 9.86193 16.25 10 16.25H15C15.4142 16.25 15.75 16.5858 15.75 17C15.75 17.4142 15.4142 17.75 15 17.75H10C9.0335 17.75 8.25 16.9665 8.25 16V8Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconExplicit as IconComponentType).keywords = [
  "explicit",
  "definitive",
  "stated",
  "literal",
  "declared",
  "denotative",
  "unequivocal",
  "graphic",
  "express",
  "expressed",
];

export default IconExplicit as IconComponentType;
