import { FC } from "react";

const IconSquareAltArrowRight: FC<IconProps> = ({
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
            d="M10.5 9L13.5 12L10.5 15"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
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
            d="M20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355Z"
            fill="currentColor"
          />
          <path
            d="M9.96967 14.4697C9.67678 14.7626 9.67678 15.2374 9.96967 15.5303C10.2626 15.8232 10.7374 15.8232 11.0303 15.5303L14.0303 12.5303C14.171 12.3897 14.25 12.1989 14.25 12C14.25 11.8011 14.171 11.6103 14.0303 11.4697L11.0303 8.46967C10.7374 8.17678 10.2626 8.17678 9.96967 8.46967C9.67678 8.76256 9.67678 9.23744 9.96967 9.53033L12.4393 12L9.96967 14.4697Z"
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
            d="M3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355ZM9.96967 15.5303C9.67678 15.2374 9.67678 14.7626 9.96967 14.4697L12.4393 12L9.96967 9.53033C9.67678 9.23744 9.67678 8.76256 9.96967 8.46967C10.2626 8.17678 10.7374 8.17678 11.0303 8.46967L14.0303 11.4697C14.171 11.6103 14.25 11.8011 14.25 12C14.25 12.1989 14.171 12.3897 14.0303 12.5303L11.0303 15.5303C10.7374 15.8232 10.2626 15.8232 9.96967 15.5303Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSquareAltArrowRight as IconComponent).keywords = [
  "square",
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

export default IconSquareAltArrowRight as IconComponent;
