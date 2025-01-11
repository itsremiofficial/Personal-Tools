import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconEthereumEth: FC<IconProps> = ({
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
            d="M11.1198 3.05L7.38983 7.71C6.53983 8.77 6.83983 10.13 8.04983 10.73L11.7798 12.6C12.2698 12.84 13.0698 12.84 13.5598 12.6L17.2898 10.73C18.4998 10.12 18.7998 8.76 17.9498 7.71L14.2198 3.05C13.3698 1.98 11.9698 1.98 11.1198 3.05Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.6699 2.3V7.56"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.46973 10.71L12.6697 7.56L16.8697 10.71"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.44003 14.43L11.05 15.15C12.08 15.61 13.26 15.61 14.3 15.15L15.91 14.43C17.35 13.79 18.68 15.53 17.68 16.75L14.22 20.98C13.37 22.02 11.98 22.02 11.12 20.98L7.67003 16.75C6.66003 15.53 7.99003 13.79 9.44003 14.43Z"
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
            opacity={duotone ? "0.4" : "1"}
            d="M18.1701 11.49C18.0601 11.58 17.9501 11.65 17.8201 11.71L16.7301 12.26L13.6601 13.79C13.1101 14.07 12.2201 14.07 11.6801 13.79L8.61007 12.26L7.52007 11.71C7.40007 11.64 7.29007 11.58 7.17007 11.49C6.11008 10.75 5.92007 9.4 6.77007 8.33L10.9401 3.13C11.2001 2.81 11.5101 2.57 11.8301 2.43C12.3701 2.17 12.9701 2.17 13.5001 2.43C13.8201 2.57 14.1401 2.81 14.3901 3.13L18.5601 8.33C19.4201 9.41 19.2301 10.76 18.1701 11.49Z"
            fill="currentColor"
          />
          <path
            d="M18.1699 11.49C18.0599 11.58 17.9499 11.65 17.8199 11.71L16.7299 12.26L12.6699 9.21L8.60992 12.27L7.51992 11.72C7.39992 11.65 7.28992 11.59 7.16992 11.5C7.20992 11.31 7.30992 11.14 7.47992 11.02L11.8299 7.75V2.44C12.3699 2.18 12.9699 2.18 13.4999 2.44V7.75L17.8499 11.02C18.0199 11.14 18.1199 11.3 18.1699 11.49Z"
            fill="currentColor"
          />
          <path
            d="M9.44003 14.43L11.05 15.15C12.08 15.61 13.26 15.61 14.3 15.15L15.91 14.43C17.35 13.79 18.68 15.53 17.68 16.75L14.22 20.98C13.37 22.02 11.98 22.02 11.12 20.98L7.67003 16.75C6.66003 15.53 7.99003 13.79 9.44003 14.43Z"
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
            d="M9.44003 14.43L11.05 15.15C12.08 15.61 13.26 15.61 14.3 15.15L15.91 14.43C17.35 13.79 18.68 15.53 17.68 16.75L14.22 20.98C13.37 22.02 11.98 22.02 11.12 20.98L7.67003 16.75C6.66003 15.53 7.99003 13.79 9.44003 14.43Z"
            fill="none"
          />
          <path
            d="M9.2397 11.67C8.9397 11.89 8.9797 12.35 9.3197 12.52L11.6697 13.69C12.2197 13.97 13.1097 13.97 13.6497 13.69L15.9997 12.52C16.3297 12.35 16.3697 11.9 16.0797 11.67L12.9697 9.33C12.7897 9.2 12.5497 9.2 12.3697 9.33L9.2397 11.67Z"
            fill="none"
          />
          <path
            d="M18.5497 8.23999L14.3797 3.03999C14.2997 2.93999 14.2097 2.84999 14.1197 2.75999C13.8597 2.50999 13.4897 2.73999 13.4897 3.09999V7.39999C13.4897 7.55999 13.5597 7.70999 13.6897 7.79999L17.8397 10.92L18.0197 11.05C18.1997 11.18 18.4497 11.18 18.5997 11.02C19.2997 10.26 19.2897 9.15999 18.5497 8.23999Z"
            fill="none"
          />
          <path
            d="M6.77978 8.33L10.9298 3.05C11.0098 2.95 11.0898 2.86 11.1798 2.77C11.4398 2.52 11.8098 2.74 11.8098 3.11V7.48C11.8098 7.64 11.7398 7.78 11.6098 7.88L7.47977 11.05L7.30978 11.18C7.12978 11.31 6.87978 11.31 6.71978 11.14C6.03978 10.37 6.04978 9.27 6.77978 8.33Z"
            fill="none"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconEthereumEth as IconComponentType).keywords = [
  "ethereum",
  "eth",
  "blockchain",
  "oracle",
  "hyperledger",
  "mainchain",
  "dapp",
  "cryptoprotocol",
  "web3",
  "ethernet",
  "distributed ledger",
  "bra",
  "nal",
  "athens",
  "reme",
  "ther",
  "ech",
  "eli",
  "ets",
];

export default IconEthereumEth as IconComponentType;