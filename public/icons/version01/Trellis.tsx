import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconTrellis: FC<IconProps> = ({
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
            opacity={duotone ? "0.5" : "1"}
            d="M19 22.0001V21.5001M5 22.0001V21.5001"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M12 21.0001V15.0001"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M2.87867 20.1214L2.34834 20.6518H2.34834L2.87867 20.1214ZM2.00172 16.0002L1.25174 16.0044L2.00172 16.0002ZM21.1213 20.1214L21.6516 20.6518L21.1213 20.1214ZM21.9982 16.0002L22.7482 16.0044V16.0044L21.9982 16.0002ZM16 20.2501H7.99999V21.7501H16V20.2501ZM7.99999 20.2501C6.56457 20.2501 5.56346 20.2485 4.80811 20.147C4.07433 20.0483 3.68576 19.8679 3.409 19.5911L2.34834 20.6518C2.95025 21.2537 3.70813 21.5126 4.60824 21.6336C5.48677 21.7517 6.60698 21.7501 7.99999 21.7501V20.2501ZM1.25174 16.0044C1.25776 17.0859 1.28364 17.9872 1.41894 18.7238C1.55817 19.4818 1.82341 20.1268 2.34834 20.6518L3.409 19.5911C3.16554 19.3477 2.99837 19.0196 2.89425 18.4528C2.7862 17.8646 2.7578 17.0895 2.75171 15.996L1.25174 16.0044ZM16 21.7501C17.393 21.7501 18.5132 21.7517 19.3917 21.6336C20.2918 21.5126 21.0497 21.2537 21.6516 20.6518L20.591 19.5911C20.3142 19.8679 19.9256 20.0483 19.1919 20.147C18.4365 20.2485 17.4354 20.2501 16 20.2501V21.7501ZM21.2483 15.996C21.2422 17.0895 21.2138 17.8646 21.1057 18.4528C21.0016 19.0196 20.8344 19.3477 20.591 19.5911L21.6516 20.6518C22.1766 20.1268 22.4418 19.4818 22.581 18.7238C22.7163 17.9872 22.7422 17.0859 22.7482 16.0044L21.2483 15.996ZM2.99999 15.7501H21V14.2501H2.99999V15.7501ZM22.7482 16.0044C22.7536 15.0326 21.9644 14.2501 21 14.2501V15.7501C21.1401 15.7501 21.249 15.8633 21.2483 15.996L22.7482 16.0044ZM2.75171 15.996C2.75097 15.8633 2.85986 15.7501 2.99999 15.7501V14.2501C2.03555 14.2501 1.24633 15.0326 1.25174 16.0044L2.75171 15.996Z"
            fill="currentColor"
          />
          <path
            d="M20.5 15.0001V6.13759C20.5 5.74965 20.5 5.55568 20.4822 5.42302C20.359 4.50707 19.8459 3.94522 18.9449 3.73964C18.8144 3.70987 18.5429 3.68518 18 3.63583C16.9981 3.54475 15.8169 3.19603 14.7687 2.81468C13.2754 2.2714 12.5288 1.99976 12 1.99976C11.4712 1.99976 10.7246 2.2714 9.23133 2.81468C8.18314 3.19603 7.00193 3.54475 6 3.63583C5.45709 3.68519 5.18562 3.70987 5.05512 3.73964C4.15409 3.94522 3.64099 4.50707 3.51784 5.42302C3.5 5.55568 3.5 5.74965 3.5 6.13759V15.0001"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M15 18.0001L17 18.0001"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M7 18.0001L9 18.0001"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M14.5 11.0001L13.5 12.0001M13.5 8.00012L10.5 11.0001M10.5 7.00012L9.5 8.00012"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
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
            opacity={duotone ? "0.5" : "1"}
            d="M20.5 15.0001V6.13759C20.5 5.74965 20.5 5.55568 20.4822 5.42302C20.359 4.50707 19.8459 3.94522 18.9449 3.73964C18.8144 3.70987 18.5428 3.68518 18 3.63583C16.9981 3.54475 15.8169 3.19603 14.7687 2.81468C13.2754 2.2714 12.5288 1.99976 12 1.99976C11.4712 1.99976 10.7246 2.2714 9.23133 2.81468C8.18314 3.19603 7.00193 3.54475 6 3.63583C5.45709 3.68519 5.18562 3.70987 5.05512 3.73964C4.15409 3.94522 3.64099 4.50707 3.51784 5.42302C3.5 5.55568 3.5 5.74965 3.5 6.13759V15.0001H11.25V21.0001H12.75V15.0001H20.5Z"
            fill="currentColor"
          />
          <path
            d="M14.0303 8.53045C14.3232 8.23756 14.3232 7.76269 14.0303 7.46979C13.7374 7.1769 13.2626 7.1769 12.9697 7.46979L9.96967 10.4698C9.67678 10.7627 9.67678 11.2376 9.96967 11.5305C10.2626 11.8233 10.7374 11.8233 11.0303 11.5305L14.0303 8.53045Z"
            fill="currentColor"
          />
          <path
            d="M11.0303 7.53045C11.3232 7.23756 11.3232 6.76269 11.0303 6.46979C10.7374 6.1769 10.2626 6.1769 9.96967 6.46979L8.96967 7.46979C8.67678 7.76269 8.67678 8.23756 8.96967 8.53045C9.26256 8.82335 9.73744 8.82335 10.0303 8.53045L11.0303 7.53045Z"
            fill="currentColor"
          />
          <path
            d="M15.0303 11.5305C15.3232 11.2376 15.3232 10.7627 15.0303 10.4698C14.7374 10.1769 14.2626 10.1769 13.9697 10.4698L12.9697 11.4698C12.6768 11.7627 12.6768 12.2376 12.9697 12.5305C13.2626 12.8233 13.7374 12.8233 14.0303 12.5305L15.0303 11.5305Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.00023 15.0001H11.25V21.0001H8.00023C7.1228 21.0001 6.38147 21.0001 5.75 20.9739V22.0001C5.75 22.4143 5.41421 22.7501 5 22.7501C4.58579 22.7501 4.25 22.4143 4.25 22.0001V20.8111C3.66924 20.6846 3.23107 20.4736 2.87891 20.1214C2.11053 19.3531 2.01408 18.1752 2.00197 16.0002C1.99889 15.4479 2.44795 15.0001 3.00023 15.0001ZM6.25 18.0001C6.25 17.5859 6.58579 17.2501 7 17.2501L9 17.2501C9.41421 17.2501 9.75 17.5859 9.75 18.0001C9.75 18.4143 9.41421 18.7501 9 18.7501L7 18.7501C6.58579 18.7501 6.25 18.4143 6.25 18.0001Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.0002 21.0001H12.75V15.0001H21.0002C21.5525 15.0001 22.0016 15.4479 21.9985 16.0002C21.9864 18.1752 21.8899 19.3531 21.1216 20.1214C20.7693 20.4737 20.331 20.6847 19.75 20.8112V22.0001C19.75 22.4143 19.4142 22.7501 19 22.7501C18.5858 22.7501 18.25 22.4143 18.25 22.0001V20.9739C17.6186 21.0001 16.8774 21.0001 16.0002 21.0001ZM15 17.2501C14.5858 17.2501 14.25 17.5859 14.25 18.0001C14.25 18.4143 14.5858 18.7501 15 18.7501L17 18.7501C17.4142 18.7501 17.75 18.4143 17.75 18.0001C17.75 17.5859 17.4142 17.2501 17 17.2501L15 17.2501Z"
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
            d="M20.5 14.0001V6.13759C20.5 5.74965 20.5 5.55568 20.4822 5.42302C20.359 4.50707 19.8459 3.94522 18.9449 3.73964C18.8144 3.70987 18.5428 3.68518 18 3.63583C16.9981 3.54475 15.8169 3.19603 14.7687 2.81468C13.2754 2.2714 12.5288 1.99976 12 1.99976C11.4712 1.99976 10.7246 2.2714 9.23133 2.81468C8.18314 3.19603 7.00193 3.54475 6 3.63583C5.45709 3.68519 5.18562 3.70987 5.05512 3.73964C4.15409 3.94522 3.64099 4.50707 3.51784 5.42302C3.5 5.55568 3.5 5.74965 3.5 6.13759V14.0001H20.5ZM11.0303 6.46979C11.3232 6.76269 11.3232 7.23756 11.0303 7.53045L10.0303 8.53045C9.73744 8.82335 9.26256 8.82335 8.96967 8.53045C8.67678 8.23756 8.67678 7.76269 8.96967 7.46979L9.96967 6.46979C10.2626 6.1769 10.7374 6.1769 11.0303 6.46979ZM14.0303 7.46979C14.3232 7.76269 14.3232 8.23756 14.0303 8.53045L11.0303 11.5305C10.7374 11.8233 10.2626 11.8233 9.96967 11.5305C9.67678 11.2376 9.67678 10.7627 9.96967 10.4698L12.9697 7.46979C13.2626 7.1769 13.7374 7.1769 14.0303 7.46979ZM15.0303 10.4698C15.3232 10.7627 15.3232 11.2376 15.0303 11.5305L14.0303 12.5305C13.7374 12.8233 13.2626 12.8233 12.9697 12.5305C12.6768 12.2376 12.6768 11.7627 12.9697 11.4698L13.9697 10.4698C14.2626 10.1769 14.7374 10.1769 15.0303 10.4698Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.00023 15.0001H11.25V21.0001H8.00023C7.1228 21.0001 6.38147 21.0001 5.75 20.9739V22.0001C5.75 22.4143 5.41421 22.7501 5 22.7501C4.58579 22.7501 4.25 22.4143 4.25 22.0001V20.8111C3.66924 20.6846 3.23107 20.4736 2.87891 20.1214C2.11053 19.3531 2.01408 18.1752 2.00197 16.0002C1.99889 15.4479 2.44795 15.0001 3.00023 15.0001ZM6.25 18.0001C6.25 17.5859 6.58579 17.2501 7 17.2501L9 17.2501C9.41421 17.2501 9.75 17.5859 9.75 18.0001C9.75 18.4143 9.41421 18.7501 9 18.7501L7 18.7501C6.58579 18.7501 6.25 18.4143 6.25 18.0001Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.0002 21.0001H12.75V15.0001H21.0002C21.5525 15.0001 22.0016 15.4479 21.9985 16.0002C21.9864 18.1752 21.8899 19.3531 21.1216 20.1214C20.7693 20.4737 20.331 20.6847 19.75 20.8112V22.0001C19.75 22.4143 19.4142 22.7501 19 22.7501C18.5858 22.7501 18.25 22.4143 18.25 22.0001V20.9739C17.6186 21.0001 16.8774 21.0001 16.0002 21.0001ZM15 17.2501C14.5858 17.2501 14.25 17.5859 14.25 18.0001C14.25 18.4143 14.5858 18.7501 15 18.7501L17 18.7501C17.4142 18.7501 17.75 18.4143 17.75 18.0001C17.75 17.5859 17.4142 17.2501 17 17.2501L15 17.2501Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconTrellis as IconComponentType).keywords = [
  "trellis",
  "treillage",
  "espalier",
  "lattice",
  "pergola",
  "trelliswork",
  "vining",
  "clematis",
  "vine",
  "viney",
];

export default IconTrellis as IconComponentType;
