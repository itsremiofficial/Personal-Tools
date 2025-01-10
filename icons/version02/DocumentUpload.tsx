import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconDocumentUpload: FC<IconProps> = ({
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
              d="M9.66992 17V11L7.66992 13"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.66992 11L11.6699 13"
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
            d="M12.1999 12.47L10.1999 10.47C10.1899 10.46 10.1799 10.46 10.1799 10.45C10.1199 10.39 10.0399 10.34 9.95986 10.3C9.94986 10.3 9.94986 10.3 9.93986 10.3C9.85986 10.27 9.77986 10.26 9.69986 10.25C9.66986 10.25 9.64986 10.25 9.61986 10.25C9.55986 10.25 9.48986 10.27 9.42986 10.29C9.39986 10.3 9.37986 10.31 9.35986 10.32C9.27986 10.36 9.19986 10.4 9.13986 10.47L7.13986 12.47C6.84986 12.76 6.84986 13.24 7.13986 13.53C7.42986 13.82 7.90986 13.82 8.19986 13.53L8.91986 12.81V17C8.91986 17.41 9.25986 17.75 9.66986 17.75C10.0799 17.75 10.4199 17.41 10.4199 17V12.81L11.1399 13.53C11.2899 13.68 11.4799 13.75 11.6699 13.75C11.8599 13.75 12.0499 13.68 12.1999 13.53C12.4899 13.24 12.4899 12.76 12.1999 12.47Z"
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
            d="M21.1699 10.19H18.2799C15.9099 10.19 13.9799 8.26 13.9799 5.89V3C13.9799 2.45 13.5299 2 12.9799 2H8.73992C5.65992 2 3.16992 4 3.16992 7.57V16.43C3.16992 20 5.65992 22 8.73992 22H16.5999C19.6799 22 22.1699 20 22.1699 16.43V11.19C22.1699 10.64 21.7199 10.19 21.1699 10.19ZM12.1999 13.53C12.0499 13.68 11.8599 13.75 11.6699 13.75C11.4799 13.75 11.2899 13.68 11.1399 13.53L10.4199 12.81V17C10.4199 17.41 10.0799 17.75 9.66992 17.75C9.25992 17.75 8.91992 17.41 8.91992 17V12.81L8.19992 13.53C7.90992 13.82 7.42992 13.82 7.13992 13.53C6.84992 13.24 6.84992 12.76 7.13992 12.47L9.13992 10.47C9.20992 10.41 9.27992 10.36 9.35992 10.32C9.37992 10.31 9.40992 10.3 9.42992 10.29C9.48992 10.27 9.54992 10.26 9.61992 10.25C9.64992 10.25 9.66992 10.25 9.69992 10.25C9.77992 10.25 9.85992 10.27 9.93992 10.3C9.94992 10.3 9.94992 10.3 9.95992 10.3C10.0399 10.33 10.1199 10.39 10.1799 10.45C10.1899 10.46 10.1999 10.46 10.1999 10.47L12.1999 12.47C12.4899 12.76 12.4899 13.24 12.1999 13.53Z"
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
(IconDocumentUpload as IconComponentType).keywords = [
  "document",
  "upload",
  "papers",
  "text file",
  "written document",
  "documentation",
  "backgrounder",
  "workbook",
  "dossier",
  "handbook",
  "listing",
  "download",
  "loader",
  "reload",
  "uplink",
  "send",
  "sending",
  "charging",
  "recharge",
  "rechargeable",
];

export default IconDocumentUpload as IconComponentType;
