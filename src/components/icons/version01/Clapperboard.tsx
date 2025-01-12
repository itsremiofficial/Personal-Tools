import { FC } from "react";

const IconClapperboard: FC<IconProps> = ({
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
            d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M21.5 8H2.5M7 8L10.5 2.5M13.5 8L17 2.5"
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
            d="M10.0956 2.00445C6.62189 2.03072 4.71678 2.2121 3.46441 3.46447C2.60675 4.32213 2.25138 5.48593 2.10413 7.25002H6.59856L10.0956 2.00445Z"
            fill="currentColor"
          />
          <path
            d="M21.8958 7.25002C21.7485 5.48593 21.3931 4.32213 20.5355 3.46447C19.9382 2.86714 19.1923 2.51345 18.1987 2.30403L14.9013 7.25002H21.8958Z"
            fill="currentColor"
          />
          <path
            d="M16.54 2.08783C15.3292 2 13.8452 2 11.9999 2C11.967 2 11.9341 2 11.9014 2L8.40133 7.25002H13.0986L16.54 2.08783Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M2.02644 8.75C2 9.68872 2 10.7632 2 12C2 16.714 2 19.071 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.071 22 16.714 22 12C22 10.7632 22 9.68872 21.9736 8.75H2.02644Z"
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
            d="M10.0957 2.00445C6.62194 2.03072 4.71683 2.2121 3.46447 3.46447C2.6068 4.32213 2.25143 5.48593 2.10418 7.25002H6.59861L10.0957 2.00445Z"
            fill="currentColor"
          />
          <path
            d="M2.02644 8.75002C2 9.68875 2 10.7633 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 10.7633 22 9.68875 21.9736 8.75002H2.02644Z"
            fill="currentColor"
          />
          <path
            d="M21.8958 7.25002C21.7486 5.48593 21.3932 4.32213 20.5355 3.46447C19.9382 2.86714 19.1924 2.51345 18.1987 2.30403L14.9014 7.25002H21.8958Z"
            fill="currentColor"
          />
          <path
            d="M16.5401 2.08783C15.3293 2 13.8452 2 12 2C11.967 2 11.9342 2 11.9014 2L8.40139 7.25002H13.0986L16.5401 2.08783Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconClapperboard as IconComponent).keywords = [
  "clapperboard",
  "synchronizer",
  "photoboard",
  "film horse",
  "movie camera",
  "kinetoscope",
  "cinematoscope",
  "projectoscope",
  "gate",
  "moviola",
];

export default IconClapperboard as IconComponent;
