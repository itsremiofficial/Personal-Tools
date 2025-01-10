import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconDocumentDownload: FC<IconProps> = ({
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
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M9.66992 11V17L11.6699 15"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.66992 17L7.66992 15"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
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
            d="M12.9499 14.72C12.6599 14.43 12.1799 14.43 11.8899 14.72L11.1699 15.44V11.25C11.1699 10.84 10.8299 10.5 10.4199 10.5C10.0099 10.5 9.66986 10.84 9.66986 11.25V15.44L8.94986 14.72C8.65986 14.43 8.17986 14.43 7.88986 14.72C7.59986 15.01 7.59986 15.49 7.88986 15.78L9.88986 17.78C9.89986 17.79 9.90986 17.79 9.90986 17.8C9.96986 17.86 10.0499 17.91 10.1299 17.95C10.2299 17.98 10.3199 18 10.4199 18C10.5199 18 10.6099 17.98 10.6999 17.94C10.7899 17.9 10.8699 17.85 10.9499 17.78L12.9499 15.78C13.2399 15.49 13.2399 15.01 12.9499 14.72Z"
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
            d="M21.1699 10.19H18.2799C15.9099 10.19 13.9799 8.26 13.9799 5.89V3C13.9799 2.45 13.5299 2 12.9799 2H8.73992C5.65992 2 3.16992 4 3.16992 7.57V16.43C3.16992 20 5.65992 22 8.73992 22H16.5999C19.6799 22 22.1699 20 22.1699 16.43V11.19C22.1699 10.64 21.7199 10.19 21.1699 10.19ZM12.9499 15.78L10.9499 17.78C10.8799 17.85 10.7899 17.91 10.6999 17.94C10.6099 17.98 10.5199 18 10.4199 18C10.3199 18 10.2299 17.98 10.1399 17.94C10.0599 17.91 9.97992 17.85 9.91992 17.79C9.90992 17.78 9.89992 17.78 9.89992 17.77L7.89992 15.77C7.60992 15.48 7.60992 15 7.89992 14.71C8.18992 14.42 8.66992 14.42 8.95992 14.71L9.66992 15.44V11.25C9.66992 10.84 10.0099 10.5 10.4199 10.5C10.8299 10.5 11.1699 10.84 11.1699 11.25V15.44L11.8899 14.72C12.1799 14.43 12.6599 14.43 12.9499 14.72C13.2399 15.01 13.2399 15.49 12.9499 15.78Z"
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
(IconDocumentDownload as IconComponentType).keywords = [
  "document",
  "download",
  "papers",
  "text file",
  "written document",
  "documentation",
  "backgrounder",
  "workbook",
  "dossier",
  "handbook",
  "listing",
  "uploaded",
  "uploading",
  "upload",
  "downlink",
  "softcopy",
  "printable",
  "refresh",
  "transfer",
  "discovery",
];

export default IconDocumentDownload as IconComponentType;
