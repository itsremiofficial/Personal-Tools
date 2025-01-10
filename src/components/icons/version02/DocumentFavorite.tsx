import { FC } from "react";

const IconDocumentFavorite: FC<IconProps> = ({
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
            d="M22.6699 10V15C22.6699 20 20.6699 22 15.6699 22H9.66992C4.66992 22 2.66992 20 2.66992 15V9C2.66992 4 4.66992 2 9.66992 2H14.6699"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.6699 10H18.6699C15.6699 10 14.6699 9 14.6699 6V2L22.6699 10Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.2897 15.73C6.9597 14.7 7.3497 13.43 8.4197 13.08C8.9897 12.9 9.6897 13.05 10.0797 13.6C10.4497 13.03 11.1797 12.9 11.7397 13.08C12.8197 13.43 13.1997 14.7 12.8797 15.73C12.3697 17.36 10.5797 18.21 10.0797 18.21C9.5897 18.2 7.8197 17.37 7.2897 15.73Z"
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
            d="M21.1699 10.19H18.2799C15.9099 10.19 13.9799 8.26 13.9799 5.89V3C13.9799 2.45 13.5299 2 12.9799 2H8.73992C5.65992 2 3.16992 4 3.16992 7.57V16.43C3.16992 20 5.65992 22 8.73992 22H16.5999C19.6799 22 22.1699 20 22.1699 16.43V11.19C22.1699 10.64 21.7199 10.19 21.1699 10.19Z"
            fill="currentColor"
          />
          <path
            d="M16.4701 2.20999C16.0601 1.79999 15.3501 2.07999 15.3501 2.64999V6.13999C15.3501 7.59999 16.5901 8.80999 18.1001 8.80999C19.0501 8.81999 20.3701 8.81999 21.5001 8.81999C22.0701 8.81999 22.3701 8.14999 21.9701 7.74999C20.5301 6.29999 17.9501 3.68999 16.4701 2.20999Z"
            fill="currentColor"
          />
          <path
            d="M11.8301 12.7299C11.2401 12.5399 10.6101 12.6499 10.1701 12.9999C9.71012 12.6499 9.10012 12.5399 8.52012 12.7299C7.25012 13.1399 6.85012 14.5899 7.20012 15.6999C7.74012 17.3999 9.53012 18.2699 10.1801 18.2699C10.8101 18.2699 12.6301 17.3699 13.1601 15.6999C13.5001 14.5899 13.1001 13.1399 11.8301 12.7299Z"
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
            d="M21.1699 10.19H18.2799C15.9099 10.19 13.9799 8.26 13.9799 5.89V3C13.9799 2.45 13.5299 2 12.9799 2H8.73992C5.65992 2 3.16992 4 3.16992 7.57V16.43C3.16992 20 5.65992 22 8.73992 22H16.5999C19.6799 22 22.1699 20 22.1699 16.43V11.19C22.1699 10.64 21.7199 10.19 21.1699 10.19ZM13.1499 15.7C12.6299 17.37 10.7999 18.27 10.1699 18.27C9.52992 18.27 7.73992 17.4 7.18992 15.7C6.82992 14.59 7.23992 13.14 8.50992 12.73C9.08992 12.54 9.70992 12.65 10.1599 13C10.6099 12.65 11.2299 12.54 11.8199 12.73C13.0999 13.14 13.4999 14.59 13.1499 15.7Z"
            fill="currentColor"
          />
          <path
            d="M18.1001 8.80999C19.0501 8.81999 20.3701 8.81999 21.5001 8.81999C22.0701 8.81999 22.3701 8.14999 21.9701 7.74999C20.5301 6.29999 17.9501 3.68999 16.4701 2.20999C16.0601 1.79999 15.3501 2.07999 15.3501 2.64999V6.13999C15.3501 7.59999 16.5901 8.80999 18.1001 8.80999Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconDocumentFavorite as IconComponent).keywords = [
  "document",
  "favorite",
  "papers",
  "text file",
  "written document",
  "documentation",
  "backgrounder",
  "workbook",
  "dossier",
  "handbook",
  "listing",
  "favored",
  "favourite",
  "preferred",
  "popular",
  "loved",
  "deary",
  "darling",
  "dearie",
  "front-runner",
];

export default IconDocumentFavorite as IconComponent;
