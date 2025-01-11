import { FC } from "react";

const IconBitcoinBtc: FC<IconProps> = ({
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
            d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M9.44971 7.66998H14.8697C16.0697 7.66998 17.0397 8.74998 17.0397 9.83998C17.0397 11.04 16.0697 12.01 14.8697 12.01H9.44971V7.66998Z"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.44971 12H15.6397C17.0097 12 18.1197 12.97 18.1197 14.17C18.1197 15.37 17.0097 16.34 15.6397 16.34H9.44971V12Z"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.2397 16.33V18.5"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.54 16.33V18.5"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.2397 5.5V7.67"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.54 5.5V7.67"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.5097 7.66998H7.71973"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.5097 16.33H7.71973"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
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
            opacity={duotone ? "0.4" : "1"}
            d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z"
            fill="currentColor"
          />
          <path
            d="M17.1597 11.61C17.5397 11.12 17.7797 10.5 17.7797 9.83C17.7797 8.28 16.4197 6.91 14.8597 6.91H13.9797V5.5C13.9797 5.09 13.6397 4.75 13.2297 4.75C12.8197 4.75 12.4797 5.09 12.4797 5.5V6.92H11.4997H11.2697V5.5C11.2697 5.09 10.9297 4.75 10.5197 4.75C10.1097 4.75 9.78973 5.09 9.78973 5.5V6.92H9.44973H7.71973C7.30973 6.92 6.96973 7.26 6.96973 7.67C6.96973 8.08 7.30973 8.42 7.71973 8.42H8.69973V12V15.58H7.71973C7.30973 15.58 6.96973 15.92 6.96973 16.33C6.96973 16.74 7.30973 17.08 7.71973 17.08H9.44973H9.77973V18.5C9.77973 18.91 10.1197 19.25 10.5297 19.25C10.9397 19.25 11.2797 18.91 11.2797 18.5V17.08H11.5097H12.4897V18.5C12.4897 18.91 12.8297 19.25 13.2397 19.25C13.6497 19.25 13.9897 18.91 13.9897 18.5V17.08H15.6397C17.4197 17.08 18.8697 15.77 18.8697 14.16C18.8697 13.06 18.1697 12.1 17.1597 11.61ZM11.5097 8.42H14.8697C15.6697 8.42 16.2897 9.18 16.2897 9.84C16.2897 10.62 15.6497 11.26 14.8697 11.26H10.1997V8.42H11.5097ZM15.6397 15.58H11.5097H10.1997V12.75H14.8697H15.6397C16.5897 12.75 17.3697 13.39 17.3697 14.17C17.3697 14.95 16.5897 15.58 15.6397 15.58Z"
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
            d="M15.6397 12.75H14.8697H10.1997V15.58H11.5097H15.6397C16.5897 15.58 17.3697 14.94 17.3697 14.16C17.3697 13.38 16.5897 12.75 15.6397 12.75Z"
            fill="none"
          />
          <path
            d="M12.6699 2C7.14992 2 2.66992 6.48 2.66992 12C2.66992 17.52 7.14992 22 12.6699 22C18.1899 22 22.6699 17.52 22.6699 12C22.6699 6.48 18.1899 2 12.6699 2ZM15.6399 17.08H13.9899V18.5C13.9899 18.91 13.6499 19.25 13.2399 19.25C12.8299 19.25 12.4899 18.91 12.4899 18.5V17.08H11.5099H11.2799V18.5C11.2799 18.91 10.9399 19.25 10.5299 19.25C10.1199 19.25 9.77992 18.91 9.77992 18.5V17.08H9.44992H7.71992C7.30992 17.08 6.96992 16.74 6.96992 16.33C6.96992 15.92 7.30992 15.58 7.71992 15.58H8.69992V12V8.42H7.71992C7.30992 8.42 6.96992 8.08 6.96992 7.67C6.96992 7.26 7.30992 6.92 7.71992 6.92H9.44992H9.77992V5.5C9.77992 5.09 10.1199 4.75 10.5299 4.75C10.9399 4.75 11.2799 5.09 11.2799 5.5V6.92H11.5099H12.4899V5.5C12.4899 5.09 12.8299 4.75 13.2399 4.75C13.6499 4.75 13.9899 5.09 13.9899 5.5V6.92H14.8699C16.4199 6.92 17.7899 8.28 17.7899 9.84C17.7899 10.51 17.5499 11.12 17.1699 11.62C18.1799 12.11 18.8699 13.07 18.8699 14.18C18.8699 15.77 17.4199 17.08 15.6399 17.08Z"
            fill="none"
          />
          <path
            d="M16.2897 9.83C16.2897 9.17 15.6697 8.41 14.8697 8.41H11.5097H10.1997V11.24H14.8697C15.6497 11.25 16.2897 10.61 16.2897 9.83Z"
            fill="none"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBitcoinBtc as IconComponent).keywords = [
  "bitcoin",
  "btc",
  "coin",
  "cryptocurrency",
  "cryptocoin",
  "crypto-currency",
  "dogecoin",
  "ether",
  "millibitcoin",
  "bitcoin faucet",
  "bitcent",
  "tbt",
  "cct",
  "ctc",
  "tcc",
  "pipeline",
  "chn",
  "clc",
  "effects",
  "tbc",
];

export default IconBitcoinBtc as IconComponent;