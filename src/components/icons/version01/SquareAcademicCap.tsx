import { FC } from "react";

const IconSquareAcademicCap: FC<IconProps> = ({
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
            d="M9.78272 3.50014C11.2037 2.83394 12.7962 2.83394 14.2172 3.50014L20.9084 6.63713C22.3639 7.31948 22.3639 9.68154 20.9084 10.3639L14.2173 13.5008C12.7963 14.167 11.2038 14.167 9.78281 13.5008L3.0916 10.3639C1.63613 9.68149 1.63614 7.31944 3.0916 6.63708L9.78272 3.50014Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M2 8.50049V14.0005"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M19 11.5005V16.6259C19 17.6339 18.4965 18.5777 17.6147 19.0661C16.1463 19.8792 13.796 21.0005 12 21.0005C10.204 21.0005 7.8537 19.8792 6.38533 19.0661C5.5035 18.5777 5 17.6339 5 16.6259V11.5005"
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
            d="M14.2172 3.50014C12.7962 2.83394 11.2037 2.83394 9.78272 3.50014L3.0916 6.63708C2.0156 7.14153 1.73507 8.56401 2.25 9.54715L2.25 14.5005C2.25 14.9147 2.58579 15.2505 3 15.2505C3.41421 15.2505 3.75 14.9147 3.75 14.5005V10.6725L9.78281 13.5008C11.2038 14.167 12.7963 14.167 14.2173 13.5008L20.9084 10.3639C22.3639 9.68154 22.3639 7.31948 20.9084 6.63713L14.2172 3.50014Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M5 11.2585L9.78281 13.5008C11.2038 14.167 12.7963 14.167 14.2173 13.5008L19 11.2586V16.6257C19 17.6338 18.4965 18.5775 17.6147 19.0659C16.1463 19.8791 13.796 21.0003 12 21.0003C10.204 21.0003 7.8537 19.8791 6.38533 19.0659C5.5035 18.5775 5 17.6338 5 16.6257V11.2585Z"
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
            d="M14.2172 3.50014C12.7962 2.83394 11.2037 2.83394 9.78272 3.50014L3.0916 6.63708C2.0156 7.14153 1.73507 8.56401 2.25 9.54715L2.25 14.5005C2.25 14.9147 2.58579 15.2505 3 15.2505C3.41421 15.2505 3.75 14.9147 3.75 14.5005V10.6725L9.78281 13.5008C11.2038 14.167 12.7963 14.167 14.2173 13.5008L20.9084 10.3639C22.3639 9.68154 22.3639 7.31948 20.9084 6.63713L14.2172 3.50014Z"
            fill="currentColor"
          />
          <path
            d="M5 12.9152V16.6259C5 17.6339 5.5035 18.5777 6.38533 19.0661C7.8537 19.8792 10.204 21.0005 12 21.0005C13.796 21.0005 16.1463 19.8792 17.6147 19.0661C18.4965 18.5777 19 17.6339 19 16.6259V12.9153L14.854 14.859C13.0296 15.7143 10.9705 15.7143 9.14607 14.859L5 12.9152Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSquareAcademicCap as IconComponent).keywords = [
  "square",
  "academic",
  "cap",
  "quadrate",
  "right-angled",
  "squarely",
  "foursquare",
  "squarish",
  "conventional",
  "paid",
  "honorable",
  "honest",
  "scholarly",
  "donnish",
  "academician",
  "theoretical",
  "pedantic",
  "faculty member",
  "academy",
  "academe",
  "scholastic",
  "ceiling",
  "crownwork",
  "crest",
  "detonator",
  "chapiter",
  "pileus",
  "capital",
  "detonating device",
  "beanie",
];

export default IconSquareAcademicCap as IconComponent;
