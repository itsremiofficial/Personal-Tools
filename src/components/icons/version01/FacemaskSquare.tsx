import { FC } from "react";

const IconFacemaskSquare: FC<IconProps> = ({
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
          <ellipse cx="15" cy="10.5" rx="1" ry="1.5" fill="currentColor" />
          <ellipse cx="9" cy="10.5" rx="1" ry="1.5" fill="currentColor" />
          <path
            d="M16.5 21.5001L17 15.0001L13.857 13.7429C12.6649 13.266 11.3351 13.266 10.143 13.7429L7 15.0001L7.5 21.5001"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M7 15L2.5 13"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M7 19L3.5 20.5"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M17 15L21.5 13"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M17 19L20.5 20.5"
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
            d="M3.46447 3.46447C2 4.92893 2 7.28595 2 12L2.00001 12.2498C2.09277 12.2498 2.1871 12.2671 2.2785 12.3036L6.99997 14.1918L9.8645 13.046C11.2354 12.4977 12.7646 12.4977 14.1355 13.046L17 14.1918L21.7215 12.3036C21.8129 12.2671 21.9072 12.2498 22 12.2498L22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447Z"
            fill="currentColor"
          />
          <path
            d="M10 10.5C10 11.3284 9.55228 12 9 12C8.44772 12 8 11.3284 8 10.5C8 9.67157 8.44772 9 9 9C9.55228 9 10 9.67157 10 10.5Z"
            fill="currentColor"
          />
          <path
            d="M16 10.5C16 11.3284 15.5523 12 15 12C14.4477 12 14 11.3284 14 10.5C14 9.67157 14.4477 9 15 9C15.5523 9 16 9.67157 16 10.5Z"
            fill="currentColor"
          />
          <path
            d="M21.9964 13.8096L17.7148 15.5219L17.509 18.4024L20.7956 19.811C20.8778 19.8462 20.9505 19.8944 21.0123 19.9522C21.8458 18.6897 21.976 16.8399 21.9964 13.8096Z"
            fill="currentColor"
          />
          <path
            d="M19.8879 21.0539L17.3959 19.9859L17.2631 21.8452C18.3638 21.7169 19.2095 21.4824 19.8879 21.0539Z"
            fill="currentColor"
          />
          <path
            d="M15.7514 21.9566C15.7516 21.9533 15.7518 21.9501 15.752 21.9469L16.213 15.4928L13.5785 14.439C12.5653 14.0338 11.435 14.0338 10.4217 14.439L7.78725 15.4928L8.24823 21.9469C8.24846 21.9501 8.24867 21.9533 8.24886 21.9566C9.3015 22.0003 10.5373 22.0003 12.0001 22.0003C13.4629 22.0003 14.6988 22.0003 15.7514 21.9566Z"
            fill="currentColor"
          />
          <path
            d="M6.73715 21.8452L6.60435 19.9859L4.11236 21.0539C4.79082 21.4824 5.63646 21.7169 6.73715 21.8452Z"
            fill="currentColor"
          />
          <path
            d="M2.98793 19.9522C3.04974 19.8944 3.12245 19.8462 3.2047 19.811L6.49125 18.4024L6.28551 15.5219L2.00391 13.8096C2.02426 16.8399 2.15451 18.6897 2.98793 19.9522Z"
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
            d="M21.9962 13.8093L17.7146 15.5216L17.5089 18.4021L20.7954 19.8106C20.8777 19.8459 20.9504 19.8941 21.0122 19.9519C21.8456 18.6894 21.9759 16.8396 21.9962 13.8093Z"
            fill="currentColor"
          />
          <path
            d="M19.8878 21.0536L17.3958 19.9856L17.263 21.8449C18.3637 21.7166 19.2093 21.4821 19.8878 21.0536Z"
            fill="currentColor"
          />
          <path
            d="M15.7513 21.9562C15.7515 21.953 15.7517 21.9498 15.7519 21.9466L16.2129 15.4925L13.5784 14.4387C12.5652 14.0334 11.4348 14.0334 10.4216 14.4387L7.78712 15.4925L8.24809 21.9466C8.24832 21.9498 8.24853 21.953 8.24872 21.9562C9.30136 22 10.5372 22 12 22C13.4628 22 14.6986 22 15.7513 21.9562Z"
            fill="currentColor"
          />
          <path
            d="M6.73701 21.8449L6.60421 19.9856L4.11222 21.0536C4.79068 21.4821 5.63633 21.7166 6.73701 21.8449Z"
            fill="currentColor"
          />
          <path
            d="M2.98779 19.9519C3.0496 19.8941 3.12231 19.8459 3.20456 19.8106L6.49111 18.4021L6.28537 15.5216L2.00377 13.8093C2.02413 16.8396 2.15438 18.6894 2.98779 19.9519Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.46447 3.46447C2 4.92893 2 7.28595 2 12L2.00001 12.2498C2.09277 12.2498 2.1871 12.2671 2.2785 12.3036L6.99997 14.1918L9.8645 13.046C11.2354 12.4977 12.7646 12.4977 14.1355 13.046L17 14.1918L21.7215 12.3036C21.8129 12.2671 21.9072 12.2498 22 12.2498L22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447ZM10 10.5C10 11.3284 9.55228 12 9 12C8.44772 12 8 11.3284 8 10.5C8 9.67157 8.44772 9 9 9C9.55228 9 10 9.67157 10 10.5ZM15 12C15.5523 12 16 11.3284 16 10.5C16 9.67157 15.5523 9 15 9C14.4477 9 14 9.67157 14 10.5C14 11.3284 14.4477 12 15 12Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconFacemaskSquare as IconComponent).keywords = [
  "facemask",
  "square",
  "diving mask",
  "scuba diving",
  "snorkel",
  "swimcap",
  "scuba",
  "backplate",
  "aqualung",
  "scaphander",
  "bailout",
  "quadrate",
  "right-angled",
  "squarely",
  "foursquare",
  "squarish",
  "conventional",
  "paid",
  "honorable",
  "honest",
];

export default IconFacemaskSquare as IconComponent;
