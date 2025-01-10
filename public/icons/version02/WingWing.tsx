import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconWingWing: FC<IconProps> = ({
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
            d="M16.6698 5H20.1698L22.8698 9.7L17.6698 19L15.8198 15.9L19.3698 9.7L16.6698 5Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.66983 5H13.1698L15.8698 9.7L10.6698 19L8.81982 15.9L12.3698 9.7L9.66983 5Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.46973 5H5.96973L8.66974 9.8L6.96973 12.7L2.46973 5Z"
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
            opacity={duotone ? "0.58" : "1"}
            d="M24.6699 0H0.669922V24H24.6699V0Z"
            fill="none"
          />
          <path
            d="M17.5298 5H19.8798C20.0598 5 20.2198 5.1 20.3098 5.25L22.7198 9.45C22.8098 9.6 22.8098 9.79 22.7198 9.94L18.0798 18.24C17.8898 18.58 17.4098 18.58 17.2098 18.25L15.9498 16.14C15.8598 15.98 15.8598 15.79 15.9498 15.64L19.2098 9.94C19.2998 9.79 19.2998 9.6 19.2098 9.44L17.0798 5.74C16.9098 5.42 17.1498 5 17.5298 5Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10.5298 5H12.8798C13.0598 5 13.2198 5.1 13.3098 5.25L15.7198 9.45C15.8098 9.6 15.8098 9.79 15.7198 9.94L11.0798 18.24C10.8898 18.58 10.4098 18.58 10.2098 18.25L8.94982 16.14C8.85982 15.98 8.85982 15.79 8.94982 15.64L12.2098 9.94C12.2998 9.79 12.2998 9.6 12.2098 9.44L10.0798 5.74C9.90983 5.42 10.1498 5 10.5298 5Z"
            fill="currentColor"
          />
          <path
            d="M2.46973 5H5.67975C5.85975 5 6.02975 5.1 6.11975 5.25L8.53973 9.54C8.62973 9.69 8.62973 9.88 8.53973 10.04L7.41974 11.96C7.22974 12.29 6.74975 12.29 6.55975 11.96L2.46973 5Z"
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
            d="M17.5298 5H19.8798C20.0598 5 20.2198 5.1 20.3098 5.25L22.7198 9.45C22.8098 9.6 22.8098 9.79 22.7198 9.94L18.0798 18.24C17.8898 18.58 17.4098 18.58 17.2098 18.25L15.9498 16.14C15.8598 15.98 15.8598 15.79 15.9498 15.64L19.2098 9.94C19.2998 9.79 19.2998 9.6 19.2098 9.44L17.0798 5.74001C16.9098 5.42001 17.1498 5 17.5298 5Z"
            fill="none"
          />
          <path
            d="M10.5298 5H12.8798C13.0598 5 13.2198 5.1 13.3098 5.25L15.7198 9.45C15.8098 9.6 15.8098 9.79 15.7198 9.94L11.0798 18.24C10.8898 18.58 10.4098 18.58 10.2098 18.25L8.94982 16.14C8.85982 15.98 8.85982 15.79 8.94982 15.64L12.2098 9.94C12.2998 9.79 12.2998 9.6 12.2098 9.44L10.0798 5.74001C9.90983 5.42001 10.1498 5 10.5298 5Z"
            fill="none"
          />
          <path
            d="M2.46973 5H5.67975C5.85975 5 6.02975 5.1 6.11975 5.25L8.53973 9.53999C8.62973 9.68999 8.62973 9.87999 8.53973 10.04L7.41974 11.96C7.22974 12.29 6.74975 12.29 6.55975 11.96L2.46973 5Z"
            fill="none"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconWingWing as IconComponentType).keywords = [
  "wing",
  "fly",
  "fender",
  "flank",
  "extension",
  "backstage",
  "offstage",
  "annex",
  "annexe",
  "fin",
];

export default IconWingWing as IconComponentType;
