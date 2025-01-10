import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconSquareBottomDown: FC<IconProps> = ({
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
            d="M13 21.9994C17.0551 21.9921 19.1785 21.8926 20.5356 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5356 3.46447C19.0711 2 16.7141 2 12 2C7.28599 2 4.92896 2 3.4645 3.46447C2.10747 4.8215 2.00791 6.94493 2.00061 11"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M11 13L3 21M3 21H9M3 21V15"
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
            d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.75 21C9.75 21.4142 9.41421 21.75 9 21.75H3C2.58579 21.75 2.25 21.4142 2.25 21V15C2.25 14.5858 2.58579 14.25 3 14.25C3.41421 14.25 3.75 14.5858 3.75 15V19.1893L10.4697 12.4697C10.7626 12.1768 11.2374 12.1768 11.5303 12.4697C11.8232 12.7626 11.8232 13.2374 11.5303 13.5303L4.81066 20.25H9C9.41421 20.25 9.75 20.5858 9.75 21Z"
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
            d="M9.75 21C9.75 21.4142 9.41421 21.75 9 21.75H3C2.58579 21.75 2.25 21.4142 2.25 21V15C2.25 14.5858 2.58579 14.25 3 14.25C3.41421 14.25 3.75 14.5858 3.75 15V19.1893L10.4697 12.4697C10.7626 12.1768 11.2374 12.1768 11.5303 12.4697C11.8232 12.7626 11.8232 13.2374 11.5303 13.5303L4.81066 20.25H9C9.41421 20.25 9.75 20.5858 9.75 21Z"
            fill="currentColor"
          />
          <path
            d="M2.00055 12.9836C2.30165 12.8341 2.64101 12.75 3 12.75C4.24264 12.75 5.25 13.7574 5.25 15V15.568L9.40901 11.409C10.2877 10.5303 11.7123 10.5303 12.591 11.409C13.4697 12.2877 13.4697 13.7123 12.591 14.591L8.43198 18.75H9C10.2426 18.75 11.25 19.7574 11.25 21C11.25 21.359 11.1659 21.6983 11.0164 21.9995C11.3324 22 11.6601 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 12.3399 2 12.6676 2.00055 12.9836Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSquareBottomDown as IconComponentType).keywords = [
  "square",
  "bottom",
  "down",
  "quadrate",
  "right-angled",
  "squarely",
  "foursquare",
  "squarish",
  "conventional",
  "paid",
  "honorable",
  "honest",
  "ass",
  "bed",
  "backside",
  "underside",
  "undersurface",
  "penetrate",
  "derriere",
  "fathom",
  "seat",
  "downwards",
  "downward",
  "downbound",
  "falling",
  "fallen",
  "pull down",
  "downwardly",
  "declining",
  "descending",
];

export default IconSquareBottomDown as IconComponentType;
