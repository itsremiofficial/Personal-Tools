import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconWallet: FC<IconProps> = ({
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
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 8.00049H10"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.8333 9.00049H18.2308C16.4465 9.00049 15 10.3436 15 12.0005C15 13.6573 16.4465 15.0005 18.2308 15.0005H20.8333C20.9167 15.0005 20.9583 15.0005 20.9935 14.9983C21.5328 14.9655 21.9623 14.5666 21.9977 14.0659C22 14.0332 22 13.9945 22 13.9172V10.0838C22 10.0064 22 9.96775 21.9977 9.93509C21.9623 9.43433 21.5328 9.03545 20.9935 9.00263C20.9583 9.00049 20.9167 9.00049 20.8333 9.00049Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <circle
            opacity={duotone ? "0.4" : "1"}
            cx="18"
            cy="12.0005"
            r="1"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20.965 9.00049C20.8873 7.12819 20.6366 5.98023 19.8284 5.17206C18.6569 4.00049 16.7712 4.00049 13 4.00049L10 4.00049C6.22876 4.00049 4.34315 4.00049 3.17157 5.17206C2 6.34363 2 8.22925 2 12.0005C2 15.7717 2 17.6573 3.17157 18.8289C4.34315 20.0005 6.22876 20.0005 10 20.0005H13C16.7712 20.0005 18.6569 20.0005 19.8284 18.8289C20.6366 18.0207 20.8873 16.8728 20.965 15.0005"
            stroke="currentColor"
            strokeWidth={width}
          />
        </svg>
      ) : duotone ? (
        <svg
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.75 7.00049C5.33579 7.00049 5 7.33627 5 7.75049C5 8.1647 5.33579 8.50049 5.75 8.50049H9.75C10.1642 8.50049 10.5 8.1647 10.5 7.75049C10.5 7.33627 10.1642 7.00049 9.75 7.00049H5.75Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.1884 8.00426C21.1262 8.00044 21.0584 8.00047 20.9881 8.00049L20.9706 8.0005H18.2149C15.9435 8.0005 14 9.73655 14 12.0005C14 14.2644 15.9435 16.0005 18.2149 16.0005H20.9706L20.9881 16.0005C21.0584 16.0005 21.1262 16.0005 21.1884 15.9967C22.111 15.9402 22.927 15.2391 22.9956 14.2599C23.0001 14.1957 23 14.1265 23 14.0623L23 14.0449V9.95605L23 9.93864C23 9.87449 23.0001 9.80528 22.9956 9.74107C22.927 8.76188 22.111 8.06083 21.1884 8.00426ZM17.9706 13.0671C18.5554 13.0671 19.0294 12.5896 19.0294 12.0005C19.0294 11.4114 18.5554 10.9338 17.9706 10.9338C17.3858 10.9338 16.9118 11.4114 16.9118 12.0005C16.9118 12.5896 17.3858 13.0671 17.9706 13.0671Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M21.1394 8.00201C21.1394 6.8214 21.0965 5.55496 20.3418 4.64707C20.2689 4.55943 20.1914 4.47433 20.1088 4.39173C19.3604 3.64337 18.4114 3.31125 17.239 3.15362C16.0998 3.00046 14.6442 3.00047 12.8064 3.00049H10.6936C8.85583 3.00047 7.40019 3.00046 6.26098 3.15362C5.08856 3.31125 4.13961 3.64337 3.39124 4.39173C2.64288 5.1401 2.31076 6.08905 2.15314 7.26147C1.99997 8.40068 1.99999 9.8563 2 11.6941V11.8069C1.99999 13.6447 1.99997 15.1003 2.15314 16.2395C2.31076 17.4119 2.64288 18.3609 3.39124 19.1092C4.13961 19.8576 5.08856 20.1897 6.26098 20.3474C7.40018 20.5005 8.8558 20.5005 10.6935 20.5005H12.8064C14.6442 20.5005 16.0998 20.5005 17.239 20.3474C18.4114 20.1897 19.3604 19.8576 20.1088 19.1092C20.3133 18.9047 20.487 18.6849 20.6346 18.4491C21.0851 17.7296 21.1394 16.8478 21.1394 15.999C21.0912 16.0005 21.0404 16.0005 20.9882 16.0005L18.2149 16.0005C15.9435 16.0005 14 14.2644 14 12.0005C14 9.73656 15.9435 8.0005 18.2149 8.0005L20.9881 8.00049C21.0403 8.00047 21.0912 8.00045 21.1394 8.00201Z"
            fill="currentColor"
          />
        </svg>
      ) : (
        <svg
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.1009 8.00402C21.0442 8.00044 20.9825 8.00047 20.9186 8.00049L20.9026 8.0005H18.3941C16.3264 8.0005 14.5572 9.62805 14.5572 11.7505C14.5572 13.8729 16.3264 15.5005 18.3941 15.5005H20.9026L20.9186 15.5005C20.9825 15.5005 21.0442 15.5005 21.1009 15.497C21.9408 15.4439 22.6835 14.7867 22.746 13.8687C22.7501 13.8085 22.75 13.7436 22.75 13.6835L22.75 13.6672V9.83383L22.75 9.81751C22.75 9.75737 22.7501 9.69248 22.746 9.63229C22.6835 8.71429 21.9408 8.05706 21.1009 8.00402ZM18.1717 12.7505C18.704 12.7505 19.1355 12.3028 19.1355 11.7505C19.1355 11.1982 18.704 10.7505 18.1717 10.7505C17.6394 10.7505 17.2078 11.1982 17.2078 11.7505C17.2078 12.3028 17.6394 12.7505 18.1717 12.7505Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.9179 17.0005C21.067 16.9966 21.1799 17.1347 21.1394 17.2783C20.9387 17.9907 20.62 18.598 20.1088 19.1092C19.3604 19.8576 18.4114 20.1897 17.239 20.3474C16.0998 20.5005 14.6442 20.5005 12.8064 20.5005H10.6936C8.85583 20.5005 7.40019 20.5005 6.26098 20.3474C5.08856 20.1897 4.13961 19.8576 3.39124 19.1092C2.64288 18.3609 2.31076 17.4119 2.15314 16.2395C1.99997 15.1003 1.99998 13.6447 2 11.8069V11.6941C1.99998 9.85631 1.99997 8.40068 2.15314 7.26147C2.31076 6.08904 2.64288 5.1401 3.39124 4.39173C4.13961 3.64337 5.08856 3.31125 6.26098 3.15362C7.40019 3.00046 8.85582 3.00047 10.6936 3.00049L12.8064 3.00049C14.6442 3.00047 16.0998 3.00046 17.239 3.15362C18.4114 3.31125 19.3604 3.64337 20.1088 4.39173C20.62 4.90301 20.9386 5.51023 21.1394 6.22267C21.1799 6.36624 21.067 6.50436 20.9179 6.50049L18.394 6.5005C15.5574 6.5005 13.0571 8.7414 13.0571 11.7505C13.0571 14.7596 15.5574 17.0005 18.394 17.0005L20.9179 17.0005ZM5.75 7.00049C5.33579 7.00049 5 7.33628 5 7.75049C5 8.1647 5.33579 8.50049 5.75 8.50049H9.75C10.1642 8.50049 10.5 8.1647 10.5 7.75049C10.5 7.33628 10.1642 7.00049 9.75 7.00049H5.75Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconWallet as IconComponentType).keywords = [
  "wallet",
  "billfold",
  "notecase",
  "portfolio",
  "paper",
  "book",
  "paperwork",
  "briefcase",
  "suitcase",
  "cash",
];

export default IconWallet as IconComponentType;
