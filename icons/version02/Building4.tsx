import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconBuilding4: FC<IconProps> = ({
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
            d="M1.66992 22H23.6699"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20.4502 22.0098V17.5498"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.47 10.8901C19.25 10.8901 18.27 11.8701 18.27 13.0901V15.3601C18.27 16.5801 19.25 17.5601 20.47 17.5601C21.69 17.5601 22.67 16.5801 22.67 15.3601V13.0901C22.67 11.8701 21.69 10.8901 20.47 10.8901Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.77002 21.9998V6.02979C2.77002 4.01979 3.77007 3.00977 5.76007 3.00977H11.9901C13.9801 3.00977 14.97 4.01979 14.97 6.02979V21.9998"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6.46973 8.25H11.4197"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6.46973 12H11.4197"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.91992 22V18.25"
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
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2.77002 21.9998V6.02979C2.77002 4.01979 3.77007 3.00977 5.76007 3.00977H11.9901C13.9801 3.00977 14.97 4.01979 14.97 6.02979V21.9998"
            fill="currentColor"
          />
          <path
            d="M11.4197 9H6.46973C6.05973 9 5.71973 8.66 5.71973 8.25C5.71973 7.84 6.05973 7.5 6.46973 7.5H11.4197C11.8297 7.5 12.1697 7.84 12.1697 8.25C12.1697 8.66 11.8297 9 11.4197 9Z"
            fill="currentColor"
          />
          <path
            d="M11.4197 12.75H6.46973C6.05973 12.75 5.71973 12.41 5.71973 12C5.71973 11.59 6.05973 11.25 6.46973 11.25H11.4197C11.8297 11.25 12.1697 11.59 12.1697 12C12.1697 12.41 11.8297 12.75 11.4197 12.75Z"
            fill="currentColor"
          />
          <path
            d="M8.91992 22.75C8.50992 22.75 8.16992 22.41 8.16992 22V18.25C8.16992 17.84 8.50992 17.5 8.91992 17.5C9.32992 17.5 9.66992 17.84 9.66992 18.25V22C9.66992 22.41 9.32992 22.75 8.91992 22.75Z"
            fill="currentColor"
          />
          <path
            d="M23.6699 21.2501H21.3999V18.2501C22.3499 17.9401 23.0399 17.0501 23.0399 16.0001V14.0001C23.0399 12.6901 21.9699 11.6201 20.6599 11.6201C19.3499 11.6201 18.2799 12.6901 18.2799 14.0001V16.0001C18.2799 17.0401 18.9599 17.9201 19.8899 18.2401V21.2501H1.66992C1.25992 21.2501 0.919922 21.5901 0.919922 22.0001C0.919922 22.4101 1.25992 22.7501 1.66992 22.7501H20.5999C20.6199 22.7501 20.6299 22.7601 20.6499 22.7601C20.6699 22.7601 20.68 22.7501 20.7 22.7501H23.6699C24.0799 22.7501 24.4199 22.4101 24.4199 22.0001C24.4199 21.5901 24.0799 21.2501 23.6699 21.2501Z"
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
            d="M11.99 3H5.76002C3.77002 3 2.77002 4.01 2.77002 6.02V22H8.17002V18.25C8.17002 17.84 8.51002 17.5 8.92002 17.5C9.33002 17.5 9.67002 17.83 9.67002 18.25V22H14.97V6.02C14.97 4.01 13.98 3 11.99 3ZM11.42 12.75H6.47002C6.06002 12.75 5.72002 12.41 5.72002 12C5.72002 11.59 6.06002 11.25 6.47002 11.25H11.42C11.83 11.25 12.17 11.59 12.17 12C12.17 12.41 11.83 12.75 11.42 12.75ZM11.42 9H6.47002C6.06002 9 5.72002 8.66 5.72002 8.25C5.72002 7.84 6.06002 7.5 6.47002 7.5H11.42C11.83 7.5 12.17 7.84 12.17 8.25C12.17 8.66 11.83 9 11.42 9Z"
            fill="currentColor"
          />
          <path
            d="M23.6699 21.2501H21.3999V18.2501C22.3499 17.9401 23.0399 17.0501 23.0399 16.0001V14.0001C23.0399 12.6901 21.9699 11.6201 20.6599 11.6201C19.3499 11.6201 18.2799 12.6901 18.2799 14.0001V16.0001C18.2799 17.0401 18.9599 17.9201 19.8899 18.2401V21.2501H1.66992C1.25992 21.2501 0.919922 21.5901 0.919922 22.0001C0.919922 22.4101 1.25992 22.7501 1.66992 22.7501H20.5999C20.6199 22.7501 20.6299 22.7601 20.6499 22.7601C20.6699 22.7601 20.6799 22.7501 20.6999 22.7501H23.6699C24.0799 22.7501 24.4199 22.4101 24.4199 22.0001C24.4199 21.5901 24.0799 21.2501 23.6699 21.2501Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBuilding4 as IconComponentType).keywords = [
  "building",
  "4",
  "edifice",
  "construction",
  "rising",
  "increasing",
  "augmentative",
  "heightening",
  "augmenting",
  "constructing",
  "constructive",
  "dh",
  "f4f",
];

export default IconBuilding4 as IconComponentType;
