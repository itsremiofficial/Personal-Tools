import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconBookmark: FC<IconProps> = ({
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
            d="M9.66992 22H15.6699C20.6699 22 22.6699 20 22.6699 15V9C22.6699 4 20.6699 2 15.6699 2H9.66992C4.66992 2 2.66992 4 2.66992 9V15C2.66992 20 4.66992 22 9.66992 22Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17.6699 2.43994V12.4199C17.6699 14.3899 16.2599 15.1599 14.5299 14.1199L13.2099 13.3299C12.9099 13.1499 12.4299 13.1499 12.1299 13.3299L10.8099 14.1199C9.07992 15.1499 7.66992 14.3899 7.66992 12.4199V2.43994"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.66992 22H15.6699C20.6699 22 22.6699 20 22.6699 15V9C22.6699 4 20.6699 2 15.6699 2H9.66992C4.66992 2 2.66992 4 2.66992 9V15C2.66992 20 4.66992 22 9.66992 22Z"
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
            d="M16.8599 2H8.48992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.82 4.83992 21.99 8.47992 21.99H16.8499C20.4899 21.99 22.6599 19.82 22.6599 16.18V7.81C22.6699 4.17 20.4999 2 16.8599 2Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.9199 2.0002V12.42C16.9199 13.06 16.7299 13.54 16.3999 13.73C16.0599 13.93 15.5199 13.83 14.9199 13.47L13.5999 12.68C13.0899 12.37 12.2499 12.37 11.7399 12.68L10.4199 13.47C9.81992 13.83 9.27992 13.92 8.93992 13.73C8.60992 13.54 8.41992 13.06 8.41992 12.42V2.00027C8.44319 2.00009 8.46653 2 8.48992 2H16.8599C16.88 2 16.9 2.00007 16.9199 2.0002Z"
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
            d="M22.6699 7.81007V16.1901C22.6699 19.4001 20.0699 22.0001 16.8599 22.0001H8.47992C5.26992 22.0001 2.66992 19.4001 2.66992 16.1901V7.81007C2.66992 5.32007 3.68992 3.51007 5.49992 2.63007C6.15992 2.31007 6.91992 2.81007 6.91992 3.54007V12.4201C6.91992 13.6101 7.37992 14.5601 8.20992 15.0401C9.04992 15.5101 10.1099 15.4101 11.1899 14.7601L12.4899 13.9801C12.5699 13.9401 12.7699 13.9401 12.8299 13.9701L14.1499 14.7601C14.8699 15.1901 15.4899 15.3301 15.9899 15.3301C16.5099 15.3301 16.9099 15.1701 17.1499 15.0301C17.9599 14.5601 18.4199 13.6101 18.4199 12.4201V3.54007C18.4199 2.81007 19.1899 2.31007 19.8399 2.63007C21.6499 3.51007 22.6699 5.32007 22.6699 7.81007Z"
            fill="currentColor"
          />
          <path
            d="M15.9199 2C16.4699 2 16.9199 2.45 16.9199 3V12.42C16.9199 13.06 16.7299 13.54 16.3999 13.73C16.0599 13.93 15.5199 13.83 14.9199 13.47L13.5999 12.68C13.0899 12.37 12.2499 12.37 11.7399 12.68L10.4199 13.47C9.81992 13.83 9.27992 13.92 8.93992 13.73C8.60992 13.54 8.41992 13.06 8.41992 12.42V3C8.41992 2.45 8.86992 2 9.41992 2H15.9199Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBookmark as IconComponentType).keywords = [
  "bookmark",
  "bookmarker",
  "marking",
  "caller",
  "dialing",
  "dialer",
  "maker",
  "add",
  "marker",
  "make",
];

export default IconBookmark as IconComponentType;
