import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconMoneroXmr: FC<IconProps> = ({
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
            d="M22.2101 15C20.9301 19.06 17.1401 22 12.6701 22C8.21014 22 4.43014 19.08 3.14014 15.04L7.67014 15V9L12.6701 15L17.6701 9V15H22.2101Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.6699 12C22.6699 13.05 22.5099 14.05 22.2099 15H17.6699V9L12.6699 15L7.66992 9V15L3.13992 15.04C2.83992 14.08 2.66992 13.06 2.66992 12C2.66992 6.48 7.14992 2 12.6699 2C18.1899 2 22.6699 6.48 22.6699 12Z"
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
          <path d="M24.6699 0H0.669922V24H24.6699V0Z" fill="none" />
          <path
            d="M22.2097 15C20.9296 19.06 17.1396 22 12.6696 22C8.20965 22 4.42965 19.08 3.13965 15.04H3.71965L7.66965 15V11.76C7.66965 10.84 8.81965 10.41 9.41965 11.11L12.6696 15L15.9196 11.11C16.5196 10.41 17.6696 10.84 17.6696 11.76V15H22.2097Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.6699 12C22.6699 13.05 22.5099 14.05 22.2099 15H17.6699V11.76C17.6699 10.84 16.5199 10.41 15.9199 11.11L12.6699 15L9.41992 11.11C8.81992 10.41 7.66992 10.84 7.66992 11.76V15L3.71992 15.04H3.13992C2.83992 14.08 2.66992 13.06 2.66992 12C2.66992 6.48 7.14992 2 12.6699 2C18.1899 2 22.6699 6.48 22.6699 12Z"
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
            d="M3.85012 15.03C3.50012 15.03 3.25012 15.38 3.38012 15.7C4.85012 19.4 8.46012 22 12.6701 22C16.8901 22 20.5001 19.38 21.9701 15.67C22.1001 15.35 21.8401 15 21.5001 15H18.1701C17.8901 15 17.6701 14.78 17.6701 14.5V11.76C17.6701 10.84 16.5201 10.41 15.9201 11.11L13.0501 14.54C12.8501 14.78 12.4801 14.78 12.2801 14.54L9.41012 11.11C8.82012 10.41 7.67012 10.84 7.67012 11.76V14.5C7.67012 14.78 7.45012 15 7.17012 15L3.85012 15.03Z"
            fill="none"
          />
          <path
            d="M22.6699 12.14C22.6699 12.45 22.6499 12.76 22.6099 13.06C22.5799 13.31 22.3599 13.5 22.0999 13.5H19.6699C19.3899 13.5 19.1699 13.28 19.1699 13V11.9C19.1699 10.89 18.6299 9.91 17.7099 9.49C16.6799 9.02 15.5099 9.28 14.7699 10.15L13.0499 12.2C12.8499 12.44 12.4799 12.44 12.2799 12.2L10.5499 10.13C9.82992 9.28 8.66992 9.02 7.62992 9.49C6.70992 9.91 6.16992 10.89 6.16992 11.9V12.88C6.16992 13.3 5.94992 13.52 5.66992 13.52L3.22992 13.53C2.97992 13.53 2.74992 13.34 2.71992 13.09C2.68992 12.73 2.66992 12.37 2.66992 12C2.66992 5.95 8.05992 1.14 14.2999 2.13C19.1299 2.89 22.7399 7.24 22.6699 12.14Z"
            fill="none"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMoneroXmr as IconComponentType).keywords = [
  "monero",
  "xmr",
  "bitcoin",
  "bitcoin gold",
  "platinum coin",
  "chilean peso",
  "romania and the euro",
  "mars",
  "pound",
  "firefox",
  "electron",
];

export default IconMoneroXmr as IconComponentType;
