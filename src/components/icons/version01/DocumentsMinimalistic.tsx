import { FC } from "react";

const IconDocumentsMinimalistic: FC<IconProps> = ({
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
            d="M5 8.00049C5 5.17206 5 3.75785 5.87868 2.87917C6.75736 2.00049 8.17157 2.00049 11 2.00049H13C15.8284 2.00049 17.2426 2.00049 18.1213 2.87917C19 3.75785 19 5.17206 19 8.00049V16.0005C19 18.8289 19 20.2431 18.1213 21.1218C17.2426 22.0005 15.8284 22.0005 13 22.0005H11C8.17157 22.0005 6.75736 22.0005 5.87868 21.1218C5 20.2431 5 18.8289 5 16.0005V8.00049Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.7" : "1"}
            d="M9 13.0005H15"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M9 9.00049H15"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9 17.0005H12"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M2 19.0005V5.00049"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M22 19.0005V5.00049"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.75 2.00049H12.75C15.5784 2.00049 16.9926 2.00049 17.8713 2.87917C18.75 3.75785 18.75 5.17206 18.75 8.00049V16.0005C18.75 18.8289 18.75 20.2431 17.8713 21.1218C16.9926 22.0005 15.5784 22.0005 12.75 22.0005H10.75C7.92157 22.0005 6.50736 22.0005 5.62868 21.1218C4.75 20.2431 4.75 18.8289 4.75 16.0005V8.00049C4.75 5.17206 4.75 3.75785 5.62868 2.87917C6.50736 2.00049 7.92157 2.00049 10.75 2.00049ZM8 13.0005C8 12.5863 8.33579 12.2505 8.75 12.2505H14.75C15.1642 12.2505 15.5 12.5863 15.5 13.0005C15.5 13.4147 15.1642 13.7505 14.75 13.7505H8.75C8.33579 13.7505 8 13.4147 8 13.0005ZM8 9.00049C8 8.58627 8.33579 8.25049 8.75 8.25049H14.75C15.1642 8.25049 15.5 8.58627 15.5 9.00049C15.5 9.4147 15.1642 9.75049 14.75 9.75049H8.75C8.33579 9.75049 8 9.4147 8 9.00049ZM8 17.0005C8 16.5863 8.33579 16.2505 8.75 16.2505H11.75C12.1642 16.2505 12.5 16.5863 12.5 17.0005C12.5 17.4147 12.1642 17.7505 11.75 17.7505H8.75C8.33579 17.7505 8 17.4147 8 17.0005Z"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.5" : "1"}>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.75 4.25049C2.16421 4.25049 2.5 4.58627 2.5 5.00049V19.0005C2.5 19.4147 2.16421 19.7505 1.75 19.7505C1.33579 19.7505 1 19.4147 1 19.0005V5.00049C1 4.58627 1.33579 4.25049 1.75 4.25049Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21.75 4.25049C22.1642 4.25049 22.5 4.58627 22.5 5.00049V19.0005C22.5 19.4147 22.1642 19.7505 21.75 19.7505C21.3358 19.7505 21 19.4147 21 19.0005V5.00049C21 4.58627 21.3358 4.25049 21.75 4.25049Z"
              fill="currentColor"
            />
          </g>
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
            d="M10.75 2.00049H12.75C15.5784 2.00049 16.9926 2.00049 17.8713 2.87917C18.75 3.75785 18.75 5.17206 18.75 8.00049V16.0005C18.75 18.8289 18.75 20.2431 17.8713 21.1218C16.9926 22.0005 15.5784 22.0005 12.75 22.0005H10.75C7.92157 22.0005 6.50736 22.0005 5.62868 21.1218C4.75 20.2431 4.75 18.8289 4.75 16.0005V8.00049C4.75 5.17206 4.75 3.75785 5.62868 2.87917C6.50736 2.00049 7.92157 2.00049 10.75 2.00049ZM8 13.0005C8 12.5863 8.33579 12.2505 8.75 12.2505H14.75C15.1642 12.2505 15.5 12.5863 15.5 13.0005C15.5 13.4147 15.1642 13.7505 14.75 13.7505H8.75C8.33579 13.7505 8 13.4147 8 13.0005ZM8 9.00049C8 8.58627 8.33579 8.25049 8.75 8.25049H14.75C15.1642 8.25049 15.5 8.58627 15.5 9.00049C15.5 9.4147 15.1642 9.75049 14.75 9.75049H8.75C8.33579 9.75049 8 9.4147 8 9.00049ZM8 17.0005C8 16.5863 8.33579 16.2505 8.75 16.2505H11.75C12.1642 16.2505 12.5 16.5863 12.5 17.0005C12.5 17.4147 12.1642 17.7505 11.75 17.7505H8.75C8.33579 17.7505 8 17.4147 8 17.0005Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.75 4.25049C2.16421 4.25049 2.5 4.58627 2.5 5.00049V19.0005C2.5 19.4147 2.16421 19.7505 1.75 19.7505C1.33579 19.7505 1 19.4147 1 19.0005V5.00049C1 4.58627 1.33579 4.25049 1.75 4.25049Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.75 4.25049C22.1642 4.25049 22.5 4.58627 22.5 5.00049V19.0005C22.5 19.4147 22.1642 19.7505 21.75 19.7505C21.3358 19.7505 21 19.4147 21 19.0005V5.00049C21 4.58627 21.3358 4.25049 21.75 4.25049Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconDocumentsMinimalistic as IconComponent).keywords = [
  "documents",
  "minimalistic",
  "papers",
  "text file",
  "written document",
  "actions",
  "acts",
  "advices",
  "archives",
  "attachments",
  "attestations",
  "modularistic",
  "brutalistic",
  "localistic",
  "reductionist",
  "exhibitional",
  "monogynous",
  "simplificational",
  "reductionistic",
  "automatistic",
];

export default IconDocumentsMinimalistic as IconComponent;
