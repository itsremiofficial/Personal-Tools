import { FC } from "react";

const IconDocumentForward: FC<IconProps> = ({
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
            opacity={duotone ? "0.4" : "1"}
            d="M11.6699 17L13.6699 15L11.6699 13L13.6699 15H7.66992"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
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
            d="M11.6699 17.7499C11.4799 17.7499 11.2899 17.6799 11.1399 17.5299C10.8499 17.2399 10.8499 16.7599 11.1399 16.4699L11.8599 15.7499H7.66992C7.25992 15.7499 6.91992 15.4099 6.91992 14.9999C6.91992 14.5899 7.25992 14.2499 7.66992 14.2499H11.8599L11.1399 13.5299C10.9899 13.3799 10.9199 13.1899 10.9199 12.9999C10.9199 12.8099 10.9899 12.6199 11.1399 12.4699C11.4299 12.1799 11.9099 12.1799 12.1999 12.4699L14.1999 14.4699C14.3299 14.5999 14.3999 14.7699 14.4099 14.9299C14.4099 14.9799 14.4099 15.0399 14.4099 15.0899C14.3899 15.2299 14.3299 15.3599 14.2299 15.4799C14.2199 15.4899 14.1999 15.5099 14.1899 15.5199L12.1899 17.5199C12.0499 17.6799 11.8599 17.7499 11.6699 17.7499Z"
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
            d="M21.1699 10.19H18.2799C15.9099 10.19 13.9799 8.26 13.9799 5.89V3C13.9799 2.45 13.5299 2 12.9799 2H8.73992C5.65992 2 3.16992 4 3.16992 7.57V16.43C3.16992 20 5.65992 22 8.73992 22H16.5999C19.6799 22 22.1699 20 22.1699 16.43V11.19C22.1699 10.64 21.7199 10.19 21.1699 10.19ZM14.4199 14.94C14.4199 14.99 14.4199 15.05 14.4199 15.1C14.3999 15.24 14.3399 15.37 14.2399 15.49C14.2299 15.5 14.2099 15.52 14.1999 15.53L12.1999 17.53C12.0499 17.68 11.8599 17.75 11.6699 17.75C11.4799 17.75 11.2899 17.68 11.1399 17.53C10.8499 17.24 10.8499 16.76 11.1399 16.47L11.8599 15.75H7.66992C7.25992 15.75 6.91992 15.41 6.91992 15C6.91992 14.59 7.25992 14.25 7.66992 14.25H11.8599L11.1399 13.53C10.9899 13.38 10.9199 13.19 10.9199 13C10.9199 12.81 10.9899 12.62 11.1399 12.47C11.4299 12.18 11.9099 12.18 12.1999 12.47L14.1999 14.47C14.3299 14.61 14.3999 14.77 14.4199 14.94Z"
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
(IconDocumentForward as IconComponent).keywords = [
  "document",
  "forward",
  "papers",
  "text file",
  "written document",
  "documentation",
  "backgrounder",
  "workbook",
  "dossier",
  "handbook",
  "listing",
  "frontwards",
  "ahead",
  "frontward",
  "forrader",
  "front",
  "forth",
  "onwards",
  "onward",
  "advancing",
];

export default IconDocumentForward as IconComponent;
