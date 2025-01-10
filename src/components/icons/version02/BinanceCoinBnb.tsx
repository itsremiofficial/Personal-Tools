import { FC } from "react";

const IconBinanceCoinBnb: FC<IconProps> = ({
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
            d="M12.6699 2L6.66992 8L8.66992 10L12.6699 6L16.6699 10L18.6699 8L12.6699 2Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.6699 22L6.66992 16L8.66992 14L12.6699 18L16.6699 14L18.6699 16L12.6699 22Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20.419 9.7523L18.1704 12.0009L20.419 14.2494L22.6676 12.0009L20.419 9.7523Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M4.91898 9.75225L2.67041 12.0008L4.91899 14.2494L7.16756 12.0008L4.91898 9.75225Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.6687 9.52605L10.1938 12.0009L12.6687 14.4758L15.1435 12.0009L12.6687 9.52605Z"
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
            d="M12.3201 2.35L7.02012 7.65C6.82012 7.85 6.82012 8.16 7.02012 8.36L8.31012 9.65C8.51012 9.85 8.82012 9.85 9.02012 9.65L12.3101 6.36C12.5101 6.16 12.8201 6.16 13.0201 6.36L16.3101 9.65C16.5101 9.85 16.8201 9.85 17.0201 9.65L18.3101 8.36C18.5101 8.16 18.5101 7.85 18.3101 7.65L13.0201 2.36C12.8301 2.16 12.5101 2.16 12.3201 2.35Z"
            fill="currentColor"
          />
          <path
            d="M12.3199 21.65L7.02988 16.36C6.82988 16.16 6.82988 15.85 7.02988 15.65L8.31988 14.36C8.51988 14.16 8.82988 14.16 9.02988 14.36L12.3199 17.65C12.5199 17.85 12.8299 17.85 13.0299 17.65L16.3199 14.36C16.5199 14.16 16.8299 14.16 17.0299 14.36L18.3199 15.65C18.5199 15.85 18.5199 16.16 18.3199 16.36L13.0299 21.65C12.8299 21.84 12.5099 21.84 12.3199 21.65Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20.7701 10.1L22.3101 11.64C22.5101 11.84 22.5101 12.15 22.3101 12.35L20.7701 13.9C20.5701 14.1 20.2601 14.1 20.0601 13.9L18.5201 12.36C18.3201 12.16 18.3201 11.85 18.5201 11.65L20.0601 10.11C20.2601 9.91 20.5801 9.91 20.7701 10.1Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M5.27012 10.1L6.81012 11.64C7.01012 11.84 7.01012 12.15 6.81012 12.35L5.27012 13.9C5.07012 14.1 4.76012 14.1 4.56012 13.9L3.02012 12.36C2.82012 12.16 2.82012 11.85 3.02012 11.65L4.57012 10.1C4.76012 9.91 5.08012 9.91 5.27012 10.1Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M13.0201 9.88L14.7901 11.65C14.9901 11.85 14.9901 12.16 14.7901 12.36L13.0201 14.13C12.8201 14.33 12.5101 14.33 12.3101 14.13L10.5401 12.36C10.3401 12.16 10.3401 11.85 10.5401 11.65L12.3101 9.88C12.5101 9.68 12.8301 9.68 13.0201 9.88Z"
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
            d="M12.3199 2.35L7.02988 7.64C6.82988 7.84 6.82988 8.15 7.02988 8.35L8.31988 9.64C8.51988 9.84 8.82988 9.84 9.02988 9.64L12.3199 6.35C12.5199 6.15 12.8299 6.15 13.0299 6.35L16.3199 9.64C16.5199 9.84 16.8299 9.84 17.0299 9.64L18.3199 8.35C18.5199 8.15 18.5199 7.84 18.3199 7.64L13.0299 2.35C12.8299 2.16 12.5099 2.16 12.3199 2.35Z"
            fill="none"
          />
          <path
            d="M12.3199 21.65L7.02988 16.36C6.82988 16.16 6.82988 15.85 7.02988 15.65L8.31988 14.36C8.51988 14.16 8.82988 14.16 9.02988 14.36L12.3199 17.65C12.5199 17.85 12.8299 17.85 13.0299 17.65L16.3199 14.36C16.5199 14.16 16.8299 14.16 17.0299 14.36L18.3199 15.65C18.5199 15.85 18.5199 16.16 18.3199 16.36L13.0299 21.65C12.8299 21.84 12.5099 21.84 12.3199 21.65Z"
            fill="none"
          />
          <path
            d="M20.7701 10.1L22.3101 11.64C22.5101 11.84 22.5101 12.15 22.3101 12.35L20.7701 13.89C20.5701 14.09 20.2601 14.09 20.0601 13.89L18.5201 12.35C18.3201 12.15 18.3201 11.84 18.5201 11.64L20.0601 10.1C20.2601 9.91 20.5801 9.91 20.7701 10.1Z"
            fill="none"
          />
          <path
            d="M5.27012 10.1L6.81011 11.64C7.01011 11.84 7.01011 12.15 6.81011 12.35L5.27012 13.89C5.07012 14.09 4.76011 14.09 4.56011 13.89L3.02012 12.35C2.82012 12.15 2.82012 11.84 3.02012 11.64L4.56011 10.1C4.76011 9.91 5.08012 9.91 5.27012 10.1Z"
            fill="none"
          />
          <path
            d="M13.0201 9.88L14.7901 11.65C14.9901 11.85 14.9901 12.16 14.7901 12.36L13.0201 14.13C12.8201 14.33 12.5101 14.33 12.3101 14.13L10.5401 12.36C10.3401 12.16 10.3401 11.85 10.5401 11.65L12.3101 9.88C12.5101 9.68 12.8301 9.68 13.0201 9.88Z"
            fill="none"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBinanceCoinBnb as IconComponent).keywords = [
  "binance",
  "coin",
  "bnb",
  "osaka exchange",
  "moscow exchange",
  "betfair",
  "betdaq",
  "tokyo commodity exchange",
  "btcc",
  "mirae asset securities",
  "guotai junan securities",
  "bitmex",
  "mint",
  "strike",
  "coinage",
  "euro",
  "bullion",
  "voucher",
  "currency",
  "money",
  "suite",
  "bank",
  "gnh",
  "nbb",
  "published",
  "used",
];

export default IconBinanceCoinBnb as IconComponent;
