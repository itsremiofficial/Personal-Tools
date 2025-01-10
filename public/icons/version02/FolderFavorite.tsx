import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconFolderFavorite: FC<IconProps> = ({
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
            d="M9.87038 14.78L12.4504 17.04C12.5704 17.15 12.7604 17.15 12.8804 17.04L15.4604 14.78C16.1304 14.19 16.2204 13.19 15.6604 12.49C15.1004 11.79 14.0804 11.66 13.3704 12.2L12.6704 12.74L11.9604 12.21C11.2404 11.67 10.2304 11.8 9.67038 12.5C9.11038 13.19 9.20038 14.2 9.87038 14.78Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.6699 11V17C22.6699 21 21.6699 22 17.6699 22H7.66992C3.66992 22 2.66992 21 2.66992 17V7C2.66992 3 3.66992 2 7.66992 2H9.16992C10.6699 2 10.9999 2.44 11.5699 3.2L13.0699 5.2C13.4499 5.7 13.6699 6 14.6699 6H17.6699C21.6699 6 22.6699 7 22.6699 11Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
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
            d="M22.4099 9.44H2.66992V6.42C2.66992 3.98 4.64992 2 7.08992 2H9.41992C11.0499 2 11.5599 2.53 12.2099 3.4L13.6099 5.26C13.9199 5.67 13.9599 5.73 14.5399 5.73H17.3299C19.6999 5.72 21.7199 7.28 22.4099 9.44Z"
            fill="currentColor"
          />
          <path
            d="M22.6599 10.8399C22.6399 10.3499 22.5599 9.88994 22.4099 9.43994H2.66992V16.6499C2.66992 19.5999 5.06992 21.9999 8.01992 21.9999H17.3199C20.2699 21.9999 22.6699 19.5999 22.6699 16.6499V11.0699C22.6699 10.9999 22.6699 10.9099 22.6599 10.8399ZM15.2099 15.9699L13.0599 17.8499C12.9499 17.9499 12.8099 17.9999 12.6699 17.9999C12.5299 17.9999 12.3899 17.9499 12.2799 17.8499L10.1299 15.9699C9.44992 15.3699 9.35992 14.3499 9.91992 13.6399C10.4999 12.9199 11.5199 12.7899 12.2599 13.3399L12.6599 13.6399L13.0599 13.3399C13.7999 12.7899 14.8199 12.9199 15.3999 13.6399C15.9799 14.3499 15.8899 15.3699 15.2099 15.9699Z"
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
            d="M21.6868 7.99175C22.0847 8.55833 21.6104 9.25 20.9181 9.25H3.66992C3.11764 9.25 2.66992 8.80228 2.66992 8.25V6.42C2.66992 3.98 4.64992 2 7.08992 2H9.40992C11.0399 2 11.5499 2.53 12.1999 3.4L13.5999 5.26C13.9099 5.67 13.9499 5.72 14.5299 5.72H17.3199C19.1245 5.72 20.7216 6.61709 21.6868 7.99175Z"
            fill="currentColor"
          />
          <path
            d="M22.6533 11.7466C22.6514 11.1957 22.2043 10.75 21.6533 10.75L3.66992 10.75C3.11764 10.75 2.66992 11.1977 2.66992 11.75V16.65C2.66992 19.6 5.06992 22 8.01992 22H17.3199C20.2699 22 22.6699 19.6 22.6699 16.65L22.6533 11.7466ZM15.2099 16.97L13.0599 18.85C12.9499 18.95 12.8099 19 12.6699 19C12.5299 19 12.3899 18.95 12.2799 18.85L10.1299 16.97C9.44992 16.37 9.35992 15.35 9.92992 14.64C10.4999 13.92 11.5299 13.79 12.2699 14.34L12.6699 14.64L13.0699 14.34C13.8099 13.79 14.8399 13.92 15.4099 14.64C15.9799 15.35 15.8899 16.37 15.2099 16.97Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconFolderFavorite as IconComponentType).keywords = [
  "folder",
  "favorite",
  "booklet",
  "pamphlet",
  "brochure",
  "leaflet",
  "toolkit",
  "pack",
  "package",
  "kit",
  "shirt",
  "favored",
  "favourite",
  "preferred",
  "popular",
  "loved",
  "deary",
  "darling",
  "dearie",
  "front-runner",
];

export default IconFolderFavorite as IconComponentType;
