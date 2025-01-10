import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconDocumentSketch: FC<IconProps> = ({
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.99016 12H11.6402C11.9102 12 12.2502 12.18 12.3902 12.4L13.5202 14.1C13.7502 14.44 13.7002 14.95 13.4102 15.24L10.9502 17.7C10.6002 18.05 10.0202 18.05 9.67016 17.7L7.21016 15.24C6.92016 14.95 6.87016 14.44 7.10016 14.1L8.23016 12.4C8.39016 12.18 8.73016 12 8.99016 12Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
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
            d="M13.22 14L12.37 12.72C12.16 12.39 11.72 12.16 11.33 12.16H9.31003C8.92003 12.16 8.49003 12.39 8.27003 12.72L7.42003 14C7.09003 14.48 7.16003 15.17 7.57003 15.58L9.43003 17.44C9.67003 17.67 9.99003 17.8 10.32 17.8C10.65 17.8 10.97 17.67 11.21 17.44L13.07 15.58C13.47 15.17 13.53 14.48 13.22 14Z"
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
            d="M21.1699 10.19H18.2799C15.9099 10.19 13.9799 8.26 13.9799 5.89V3C13.9799 2.45 13.5299 2 12.9799 2H8.73992C5.65992 2 3.16992 4 3.16992 7.57V16.43C3.16992 20 5.65992 22 8.73992 22H16.5999C19.6799 22 22.1699 20 22.1699 16.43V11.19C22.1699 10.64 21.7199 10.19 21.1699 10.19ZM13.0699 15.58L11.2099 17.44C10.9799 17.67 10.6599 17.8 10.3199 17.8C9.97992 17.8 9.66992 17.67 9.42992 17.44L7.56992 15.58C7.15992 15.17 7.08992 14.48 7.41992 14L8.26992 12.72C8.47992 12.39 8.91992 12.16 9.30992 12.16H11.3199C11.7099 12.16 12.1399 12.39 12.3599 12.72L13.2199 14C13.5299 14.48 13.4699 15.17 13.0699 15.58Z"
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
(IconDocumentSketch as IconComponentType).keywords = [
  "document",
  "sketch",
  "papers",
  "text file",
  "written document",
  "documentation",
  "backgrounder",
  "workbook",
  "dossier",
  "handbook",
  "listing",
  "outline",
  "cartoon",
  "chalk out",
  "study",
  "survey",
  "vignette",
  "resume",
  "adumbrate",
  "drawing",
];

export default IconDocumentSketch as IconComponentType;
