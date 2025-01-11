import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconWallet2: FC<IconProps> = ({
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
            d="M13.6699 9H7.66992"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.6701 10.9699V13.03C22.6701 13.58 22.2301 14.0299 21.6701 14.0499H19.7101C18.6301 14.0499 17.6401 13.2599 17.5501 12.1799C17.4901 11.5499 17.7301 10.9599 18.1501 10.5499C18.5201 10.1699 19.0301 9.94995 19.5901 9.94995H21.6701C22.2301 9.96995 22.6701 10.4199 22.6701 10.9699Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.1499 10.55C17.7299 10.96 17.4899 11.55 17.5499 12.18C17.6399 13.26 18.6299 14.05 19.7099 14.05H21.6699V15.5C21.6699 18.5 19.6699 20.5 16.6699 20.5H7.66992C4.66992 20.5 2.66992 18.5 2.66992 15.5V8.5C2.66992 5.78 4.30992 3.88 6.85992 3.56C7.11992 3.52 7.38992 3.5 7.66992 3.5H16.6699C16.9299 3.5 17.1799 3.50999 17.4199 3.54999C19.9999 3.84999 21.6699 5.76 21.6699 8.5V9.95001H19.5899C19.0299 9.95001 18.5199 10.17 18.1499 10.55Z"
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
            d="M22.6701 10.9699V13.03C22.6701 13.58 22.2301 14.0299 21.6701 14.0499H19.7101C18.6301 14.0499 17.6401 13.2599 17.5501 12.1799C17.4901 11.5499 17.7301 10.9599 18.1501 10.5499C18.5201 10.1699 19.0301 9.94995 19.5901 9.94995H21.6701C22.2301 9.96995 22.6701 10.4199 22.6701 10.9699Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M18.1499 10.55C17.7299 10.96 17.4899 11.55 17.5499 12.18C17.6399 13.26 18.6299 14.05 19.7099 14.05H21.6699V15.5C21.6699 18.5 19.6699 20.5 16.6699 20.5H7.66992C4.66992 20.5 2.66992 18.5 2.66992 15.5V8.5C2.66992 5.78 4.30992 3.88 6.85992 3.56C7.11992 3.52 7.38992 3.5 7.66992 3.5H16.6699C16.9299 3.5 17.1799 3.50999 17.4199 3.54999C19.9999 3.84999 21.6699 5.76 21.6699 8.5V9.95001H19.5899C19.0299 9.95001 18.5199 10.17 18.1499 10.55Z"
            fill="currentColor"
          />
          <path
            d="M13.6699 9.75H7.66992C7.25992 9.75 6.91992 9.41 6.91992 9C6.91992 8.59 7.25992 8.25 7.66992 8.25H13.6699C14.0799 8.25 14.4199 8.59 14.4199 9C14.4199 9.41 14.0799 9.75 13.6699 9.75Z"
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
            d="M22.6721 10.97V13.03C22.6721 13.58 22.2321 14.03 21.6721 14.05H19.7121C18.6321 14.05 17.6421 13.26 17.5521 12.18C17.4921 11.55 17.7321 10.96 18.1521 10.55C18.5221 10.17 19.0321 9.94995 19.5921 9.94995H21.6721C22.2321 9.96995 22.6721 10.42 22.6721 10.97Z"
            fill="currentColor"
          />
          <path
            d="M21.1419 15.55H19.7119C17.8119 15.55 16.2119 14.12 16.0519 12.3C15.9619 11.26 16.3419 10.22 17.1019 9.48C17.7419 8.82 18.6319 8.45 19.5919 8.45H21.1419C21.4319 8.45 21.6719 8.21 21.6419 7.92C21.4219 5.49 19.8119 3.83 17.4219 3.55C17.1819 3.51 16.9319 3.5 16.6719 3.5H7.67188C7.39187 3.5 7.12187 3.52 6.86188 3.56C4.31188 3.88 2.67188 5.78 2.67188 8.5V15.5C2.67188 18.26 4.91188 20.5 7.67188 20.5H16.6719C19.4719 20.5 21.4019 18.75 21.6419 16.08C21.6719 15.79 21.4319 15.55 21.1419 15.55ZM13.6719 9.75H7.67188C7.26188 9.75 6.92188 9.41 6.92188 9C6.92188 8.59 7.26188 8.25 7.67188 8.25H13.6719C14.0819 8.25 14.4219 8.59 14.4219 9C14.4219 9.41 14.0819 9.75 13.6719 9.75Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconWallet2 as IconComponentType).keywords = [
  "wallet",
  "2",
  "billfold",
  "notecase",
  "portfolio",
  "paper",
  "book",
  "paperwork",
  "briefcase",
  "suitcase",
  "cash",
  "wireless network",
  "sign on",
  "sign off",
  "put through",
  "back up",
  "ring up",
  "call up",
  "hang up",
  "read out",
];

export default IconWallet2 as IconComponentType;