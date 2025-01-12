import { FC } from "react";

const IconSortHorizontal: FC<IconProps> = ({
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
            d="M18 8L6 8M6 8L10.125 4M6 8L10.125 12"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M6 16L18 16M18 16L13.875 12M18 16L13.875 20"
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
            d="M10.875 4.00002C10.875 3.69877 10.6948 3.42676 10.4173 3.30934C10.1399 3.19192 9.81916 3.25188 9.60289 3.46159L5.47789 7.4616C5.33222 7.60285 5.25 7.79711 5.25 8.00002C5.25 8.20293 5.33222 8.39719 5.47789 8.53844L9.60289 12.5384C9.81916 12.7482 10.1399 12.8081 10.4173 12.6907C10.6948 12.5733 10.875 12.3013 10.875 12V8.75002L18 8.75002C18.4142 8.75002 18.75 8.41423 18.75 8.00002C18.75 7.58581 18.4142 7.25002 18 7.25002L10.875 7.25002V4.00002Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M13.125 12C13.125 11.6988 13.3052 11.4268 13.5827 11.3093C13.8601 11.1919 14.1808 11.2519 14.3971 11.4616L18.5221 15.4616C18.6678 15.6029 18.75 15.7971 18.75 16C18.75 16.2029 18.6678 16.3972 18.5221 16.5384L14.3971 20.5384C14.1808 20.7482 13.8601 20.8081 13.5827 20.6907C13.3052 20.5733 13.125 20.3013 13.125 20V16.75H6C5.58579 16.75 5.25 16.4142 5.25 16C5.25 15.5858 5.58579 15.25 6 15.25L13.125 15.25L13.125 12Z"
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
            d="M13.125 12C13.125 11.6988 13.3052 11.4268 13.5827 11.3093C13.8601 11.1919 14.1808 11.2519 14.3971 11.4616L18.5221 15.4616C18.6678 15.6029 18.75 15.7971 18.75 16C18.75 16.2029 18.6678 16.3972 18.5221 16.5384L14.3971 20.5384C14.1808 20.7482 13.8601 20.8081 13.5827 20.6907C13.3052 20.5733 13.125 20.3013 13.125 20V16.75H6C5.58579 16.75 5.25 16.4142 5.25 16C5.25 15.5858 5.58579 15.25 6 15.25L13.125 15.25L13.125 12Z"
            fill="currentColor"
          />
          <path
            d="M10.875 4.00002C10.875 3.69877 10.6948 3.42676 10.4173 3.30934C10.1399 3.19192 9.81916 3.25188 9.60289 3.46159L5.47789 7.4616C5.33222 7.60285 5.25 7.79711 5.25 8.00002C5.25 8.20293 5.33222 8.39719 5.47789 8.53844L9.60289 12.5384C9.81916 12.7482 10.1399 12.8081 10.4173 12.6907C10.6948 12.5733 10.875 12.3013 10.875 12V8.75002L18 8.75002C18.4142 8.75002 18.75 8.41423 18.75 8.00002C18.75 7.58581 18.4142 7.25002 18 7.25002L10.875 7.25002V4.00002Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSortHorizontal as IconComponent).keywords = [
  "sort",
  "horizontal",
  "classify",
  "assort",
  "class",
  "form",
  "kind",
  "sort out",
  "variety",
  "separate",
  "screen",
  "level",
  "flat",
  "crosswise",
  "swimming",
  "naiant",
  "cross-sectional",
  "transverse",
  "transversal",
  "landscape",
];

export default IconSortHorizontal as IconComponent;
