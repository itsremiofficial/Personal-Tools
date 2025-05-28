import { FC } from "react";

const IconLinkMinimalistic: FC<IconProps> = ({
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
            d="M8.99991 12.0004H14.9999"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M9 18.0005H8C4.68629 18.0005 2 15.3142 2 12.0005C2 8.68678 4.68629 6.00049 8 6.00049H9"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M15 6.00049H16C19.3137 6.00049 22 8.68678 22 12.0005C22 15.3142 19.3137 18.0005 16 18.0005H15"
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
          <g opacity={duotone ? "0.5" : "1"}>
            <path
              d="M8 6.75049C5.10051 6.75049 2.75 9.10099 2.75 12.0005C2.75 14.9 5.10051 17.2505 8 17.2505H9C9.41421 17.2505 9.75 17.5863 9.75 18.0005C9.75 18.4147 9.41421 18.7505 9 18.7505H8C4.27208 18.7505 1.25 15.7284 1.25 12.0005C1.25 8.27257 4.27208 5.25049 8 5.25049H9C9.41421 5.25049 9.75 5.58627 9.75 6.00049C9.75 6.4147 9.41421 6.75049 9 6.75049H8Z"
              fill="currentColor"
            />
            <path
              d="M15 5.25049C14.5858 5.25049 14.25 5.58627 14.25 6.00049C14.25 6.4147 14.5858 6.75049 15 6.75049H16C18.8995 6.75049 21.25 9.10099 21.25 12.0005C21.25 14.9 18.8995 17.2505 16 17.2505H15C14.5858 17.2505 14.25 17.5863 14.25 18.0005C14.25 18.4147 14.5858 18.7505 15 18.7505H16C19.7279 18.7505 22.75 15.7284 22.75 12.0005C22.75 8.27257 19.7279 5.25049 16 5.25049H15Z"
              fill="currentColor"
            />
          </g>
          <path
            d="M8.25 12.0005C8.25 11.5863 8.58579 11.2505 9 11.2505H15C15.4142 11.2505 15.75 11.5863 15.75 12.0005C15.75 12.4147 15.4142 12.7505 15 12.7505H9C8.58579 12.7505 8.25 12.4147 8.25 12.0005Z"
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
            d="M8 6.75049C5.10051 6.75049 2.75 9.10099 2.75 12.0005C2.75 14.9 5.10051 17.2505 8 17.2505H9C9.41421 17.2505 9.75 17.5863 9.75 18.0005C9.75 18.4147 9.41421 18.7505 9 18.7505H8C4.27208 18.7505 1.25 15.7284 1.25 12.0005C1.25 8.27257 4.27208 5.25049 8 5.25049H9C9.41421 5.25049 9.75 5.58627 9.75 6.00049C9.75 6.4147 9.41421 6.75049 9 6.75049H8Z"
            fill="currentColor"
          />
          <path
            d="M8.24991 12.0004C8.24991 11.5862 8.58569 11.2504 8.99991 11.2504H14.9999C15.4141 11.2504 15.7499 11.5862 15.7499 12.0004C15.7499 12.4146 15.4141 12.7504 14.9999 12.7504H8.99991C8.58569 12.7504 8.24991 12.4146 8.24991 12.0004Z"
            fill="currentColor"
          />
          <path
            d="M15 5.25049C14.5858 5.25049 14.25 5.58627 14.25 6.00049C14.25 6.4147 14.5858 6.75049 15 6.75049H16C18.8995 6.75049 21.25 9.10099 21.25 12.0005C21.25 14.9 18.8995 17.2505 16 17.2505H15C14.5858 17.2505 14.25 17.5863 14.25 18.0005C14.25 18.4147 14.5858 18.7505 15 18.7505H16C19.7279 18.7505 22.75 15.7284 22.75 12.0005C22.75 8.27257 19.7279 5.25049 16 5.25049H15Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconLinkMinimalistic as IconComponent).keywords = [
  "link",
  "minimalistic",
  "linkup",
  "connection",
  "nexus",
  "connexion",
  "connectedness",
  "connect",
  "tie-in",
  "unite",
  "associate",
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

export default IconLinkMinimalistic as IconComponent;
