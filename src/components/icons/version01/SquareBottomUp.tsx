import { FC } from "react";

const IconSquareBottomUp: FC<IconProps> = ({
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
            d="M3 21L11 13M11 13H5M11 13V19"
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
            d="M4.25 13C4.25 12.5858 4.58579 12.25 5 12.25H11C11.4142 12.25 11.75 12.5858 11.75 13V19C11.75 19.4142 11.4142 19.75 11 19.75C10.5858 19.75 10.25 19.4142 10.25 19V14.8107L3.53033 21.5303C3.23744 21.8232 2.76256 21.8232 2.46967 21.5303C2.17678 21.2374 2.17678 20.7626 2.46967 20.4697L9.18934 13.75H5C4.58579 13.75 4.25 13.4142 4.25 13Z"
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
            d="M5.56802 15.25L2.36272 18.4553C2 16.9913 2 14.9605 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C9.03955 22 7.00869 22 5.5447 21.6373L8.75 18.432V19C8.75 20.2426 9.75736 21.25 11 21.25C12.2426 21.25 13.25 20.2426 13.25 19V13C13.25 11.7574 12.2426 10.75 11 10.75H5C3.75736 10.75 2.75 11.7574 2.75 13C2.75 14.2426 3.75736 15.25 5 15.25H5.56802Z"
            fill="currentColor"
          />
          <path
            d="M5 12.25C4.58579 12.25 4.25 12.5858 4.25 13C4.25 13.4142 4.58579 13.75 5 13.75H9.18934L2.46967 20.4697C2.17678 20.7626 2.17678 21.2374 2.46967 21.5303C2.76256 21.8232 3.23744 21.8232 3.53033 21.5303L10.25 14.8107V19C10.25 19.4142 10.5858 19.75 11 19.75C11.4142 19.75 11.75 19.4142 11.75 19V13C11.75 12.5858 11.4142 12.25 11 12.25H5Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSquareBottomUp as IconComponent).keywords = [
  "square",
  "bottom",
  "up",
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

export default IconSquareBottomUp as IconComponent;
