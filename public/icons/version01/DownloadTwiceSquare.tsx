import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconDownloadTwiceSquare: FC<IconProps> = ({
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
            d="M8.5 7L8.5 14M8.5 14L11 11M8.5 14L6 11"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.5 7L15.5 14M15.5 14L18 11M15.5 14L13 11"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 17H12H6"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
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
            opacity={duotone ? "0.5" : "1"}
            d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
            fill="currentColor"
          />
          <path
            d="M8.50002 6.25C8.91423 6.25 9.25002 6.58579 9.25002 7V11.9285L10.4239 10.5199C10.689 10.2017 11.1619 10.1587 11.4802 10.4238C11.7984 10.689 11.8414 11.1619 11.5762 11.4801L9.07618 14.4801C8.93369 14.6511 8.7226 14.75 8.50002 14.75C8.27743 14.75 8.06635 14.6511 7.92385 14.4801L5.42385 11.4801C5.15868 11.1619 5.20167 10.689 5.51988 10.4238C5.83809 10.1587 6.31101 10.2017 6.57618 10.5199L7.75002 11.9285L7.75002 7C7.75002 6.58579 8.0858 6.25 8.50002 6.25Z"
            fill="currentColor"
          />
          <path
            d="M15.5 6.25C15.9142 6.25 16.25 6.58579 16.25 7L16.25 11.9285L17.4239 10.5199C17.689 10.2017 18.1619 10.1587 18.4802 10.4238C18.7984 10.689 18.8414 11.1619 18.5762 11.4801L16.0762 14.4801C15.9337 14.6511 15.7226 14.75 15.5 14.75C15.2774 14.75 15.0663 14.6511 14.9239 14.4801L12.4239 11.4801C12.1587 11.1619 12.2017 10.689 12.5199 10.4238C12.8381 10.1587 13.311 10.2017 13.5762 10.5199L14.75 11.9285L14.75 7C14.75 6.58579 15.0858 6.25 15.5 6.25Z"
            fill="currentColor"
          />
          <path
            d="M6.00002 16.25C5.58581 16.25 5.25002 16.5858 5.25002 17C5.25002 17.4142 5.58581 17.75 6.00002 17.75H18C18.4142 17.75 18.75 17.4142 18.75 17C18.75 16.5858 18.4142 16.25 18 16.25H6.00002Z"
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
            d="M3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447ZM9.25 7C9.25 6.58579 8.91421 6.25 8.5 6.25C8.08579 6.25 7.75 6.58579 7.75 7V11.9285L6.57617 10.5199C6.31099 10.2017 5.83807 10.1587 5.51986 10.4238C5.20165 10.689 5.15866 11.1619 5.42383 11.4801L7.92383 14.4801C8.06633 14.6511 8.27742 14.75 8.5 14.75C8.72259 14.75 8.93367 14.6511 9.07617 14.4801L11.5762 11.4801C11.8413 11.1619 11.7983 10.689 11.4801 10.4238C11.1619 10.1587 10.689 10.2017 10.4238 10.5199L9.25 11.9285V7ZM15.5 6.25C15.9142 6.25 16.25 6.58579 16.25 7V11.9285L17.4238 10.5199C17.689 10.2017 18.1619 10.1587 18.4801 10.4238C18.7983 10.689 18.8413 11.1619 18.5762 11.4801L16.0762 14.4801C15.9337 14.6511 15.7226 14.75 15.5 14.75C15.2774 14.75 15.0663 14.6511 14.9238 14.4801L12.4238 11.4801C12.1587 11.1619 12.2017 10.689 12.5199 10.4238C12.8381 10.1587 13.311 10.2017 13.5762 10.5199L14.75 11.9285V7C14.75 6.58579 15.0858 6.25 15.5 6.25ZM6 16.25C5.58579 16.25 5.25 16.5858 5.25 17C5.25 17.4142 5.58579 17.75 6 17.75H18C18.4142 17.75 18.75 17.4142 18.75 17C18.75 16.5858 18.4142 16.25 18 16.25H6Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconDownloadTwiceSquare as IconComponentType).keywords = [
  "download",
  "twice",
  "square",
  "uploaded",
  "uploading",
  "upload",
  "downlink",
  "softcopy",
  "printable",
  "refresh",
  "transfer",
  "discovery",
  "double",
  "doubly",
  "twofold",
  "two-fold",
  "two",
  "dual",
  "two-tier",
  "two-pronged",
  "half",
  "quadrate",
  "right-angled",
  "squarely",
  "foursquare",
  "squarish",
  "conventional",
  "paid",
  "honorable",
  "honest",
];

export default IconDownloadTwiceSquare as IconComponentType;
