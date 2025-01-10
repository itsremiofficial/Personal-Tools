import { FC } from "react";

const IconCardCoin: FC<IconProps> = ({
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
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.66992 17.0601H12.6699"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.88989 13.5H10.45C12.23 13.5 12.6699 13.94 12.6699 15.7V19.81C12.6699 21.57 12.23 22.01 10.45 22.01H4.88989C3.10989 22.01 2.66992 21.57 2.66992 19.81V15.7C2.66992 13.94 3.10989 13.5 4.88989 13.5Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.6699 15C22.6699 18.87 19.5399 22 15.6699 22L16.7199 20.25"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2.66992 9C2.66992 5.13 5.79992 2 9.66992 2L8.61993 3.75"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.1699 11C21.6552 11 23.6699 8.98528 23.6699 6.5C23.6699 4.01472 21.6552 2 19.1699 2C16.6846 2 14.6699 4.01472 14.6699 6.5C14.6699 8.98528 16.6846 11 19.1699 11Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : duotone ? (
        <svg
          className={className}
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.6699 15.7V16.31H2.66992V15.7C2.66992 13.94 3.10989 13.5 4.88989 13.5H10.45C12.23 13.5 12.6699 13.94 12.6699 15.7Z"
            fill="currentColor"
          />
          <path
            d="M2.66992 16.3101V17.8101V19.8001C2.66992 21.5601 3.10989 22.0001 4.88989 22.0001H10.45C12.23 22.0001 12.6699 21.5601 12.6699 19.8001V17.8101V16.3101H2.66992Z"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22.6699 14.25C23.0841 14.25 23.4199 14.5858 23.4199 15C23.4199 19.2842 19.9541 22.75 15.6699 22.75C15.3997 22.75 15.1504 22.6047 15.0173 22.3695C14.8841 22.1344 14.8878 21.8458 15.0268 21.6141L16.0768 19.8641C16.2899 19.5089 16.7506 19.3938 17.1058 19.6069C17.461 19.82 17.5761 20.2807 17.363 20.6359L17.0917 21.0881C19.8608 20.4456 21.9199 17.9666 21.9199 15C21.9199 14.5858 22.2557 14.25 22.6699 14.25Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.24813 2.91194C5.47902 3.55436 3.41992 6.03342 3.41992 9C3.41992 9.41421 3.08414 9.75 2.66992 9.75C2.25571 9.75 1.91992 9.41421 1.91992 9C1.91992 4.71579 5.38571 1.25 9.66992 1.25C9.94012 1.25 10.1894 1.39534 10.3226 1.63047C10.4557 1.8656 10.4521 2.15417 10.313 2.38587L9.26306 4.13587C9.04995 4.49105 8.58925 4.60623 8.23407 4.39312C7.87888 4.18001 7.7637 3.71932 7.97681 3.36413L8.24813 2.91194Z"
              fill="currentColor"
            />
          </g>
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M23.6699 6.5H14.6699C14.6699 8.98 16.6899 11 19.1699 11C21.6599 11 23.6699 8.98 23.6699 6.5Z"
            fill="currentColor"
          />
          <path
            d="M23.6699 6.5C23.6699 4.01 21.6599 2 19.1699 2C16.6899 2 14.6699 4.01 14.6699 6.5H23.6699Z"
            fill="currentColor"
          />
        </svg>
      ) : (
        <svg
          className={className}
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.6699 15.7V15.81C12.6699 16.09 12.4499 16.31 12.1699 16.31H3.16992C2.88992 16.31 2.66992 16.09 2.66992 15.81V15.7C2.66992 13.94 3.10992 13.5 4.88992 13.5H10.4499C12.2299 13.5 12.6699 13.94 12.6699 15.7Z"
            fill="currentColor"
          />
          <path
            d="M3.16992 17.3101C2.88992 17.3101 2.66992 17.5301 2.66992 17.8101V18.8101V19.8001C2.66992 21.5601 3.10992 22.0001 4.88992 22.0001H10.4499C12.2299 22.0001 12.6699 21.5601 12.6699 19.8001V18.8101V17.8101C12.6699 17.5301 12.4499 17.3101 12.1699 17.3101H3.16992Z"
            fill="currentColor"
          />
          <path
            d="M22.6699 15C22.6699 18.87 19.5399 22 15.6699 22L16.7199 20.25"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.66992 9C2.66992 5.13 5.79992 2 9.66992 2L8.61992 3.75"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.1699 11C21.6552 11 23.6699 8.98528 23.6699 6.5C23.6699 4.01472 21.6552 2 19.1699 2C16.6846 2 14.6699 4.01472 14.6699 6.5C14.6699 8.98528 16.6846 11 19.1699 11Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCardCoin as IconComponent).keywords = [
  "card",
  "coin",
  "scorecard",
  "batting order",
  "identity card",
  "visiting card",
  "calling card",
  "lineup",
  "poster",
  "placard",
  "tease",
  "mint",
  "strike",
  "coinage",
  "euro",
  "bullion",
  "voucher",
  "currency",
  "money",
  "suite",
];

export default IconCardCoin as IconComponent;
