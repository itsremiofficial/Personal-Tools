import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconHashtagCircle: FC<IconProps> = ({
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
            d="M11 7.00037L8 17.0004"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 7.00037L13 17.0004"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 10.0004H7"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17 14.0004H6"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M2 12.0004C2 6.47752 6.47715 2.00037 12 2.00037C17.5228 2.00037 22 6.47752 22 12.0004C22 17.5232 17.5228 22.0004 12 22.0004C6.47715 22.0004 2 17.5232 2 12.0004Z"
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
            d="M2 12.0004C2 6.47752 6.47715 2.00037 12 2.00037C17.5228 2.00037 22 6.47752 22 12.0004C22 17.5232 17.5228 22.0004 12 22.0004C6.47715 22.0004 2 17.5232 2 12.0004Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.7184 7.21595C11.8374 6.81921 11.6123 6.4011 11.2155 6.28207C10.8188 6.16305 10.4007 6.38819 10.2816 6.78493L9.54198 9.25044H7C6.58579 9.25044 6.25 9.58623 6.25 10.0004C6.25 10.4147 6.58579 10.7504 7 10.7504H9.09198L8.34198 13.2504H6C5.58579 13.2504 5.25 13.5862 5.25 14.0004C5.25 14.4147 5.58579 14.7504 6 14.7504H7.89198L7.28163 16.7849C7.16261 17.1817 7.38774 17.5998 7.78449 17.7188C8.18123 17.8378 8.59935 17.6127 8.71837 17.216L9.45802 14.7504H12.892L12.2816 16.7849C12.1626 17.1817 12.3877 17.5998 12.7845 17.7188C13.1812 17.8378 13.5993 17.6127 13.7184 17.216L14.458 14.7504H17C17.4142 14.7504 17.75 14.4147 17.75 14.0004C17.75 13.5862 17.4142 13.2504 17 13.2504H14.908L15.658 10.7504H18C18.4142 10.7504 18.75 10.4147 18.75 10.0004C18.75 9.58623 18.4142 9.25044 18 9.25044H16.108L16.7184 7.21595C16.8374 6.81921 16.6123 6.4011 16.2155 6.28207C15.8188 6.16305 15.4007 6.38819 15.2816 6.78493L14.542 9.25044H11.108L11.7184 7.21595ZM14.092 10.7504L13.342 13.2504H9.90802L10.658 10.7504H14.092Z"
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
            d="M14.092 10.7504L13.342 13.2504H9.90802L10.658 10.7504H14.092Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2.00037C6.47715 2.00037 2 6.47752 2 12.0004C2 17.5232 6.47715 22.0004 12 22.0004C17.5228 22.0004 22 17.5232 22 12.0004C22 6.47752 17.5228 2.00037 12 2.00037ZM11.2155 6.28201C11.6123 6.40103 11.8374 6.81915 11.7184 7.21589L11.108 9.25038H14.542L15.2816 6.78487C15.4007 6.38812 15.8188 6.16299 16.2155 6.28201C16.6123 6.40103 16.8374 6.81915 16.7184 7.21589L16.108 9.25038H18C18.4142 9.25038 18.75 9.58617 18.75 10.0004C18.75 10.4146 18.4142 10.7504 18 10.7504H15.658L14.908 13.2504H17C17.4142 13.2504 17.75 13.5862 17.75 14.0004C17.75 14.4146 17.4142 14.7504 17 14.7504H14.458L13.7184 17.2159C13.5993 17.6126 13.1812 17.8378 12.7845 17.7188C12.3877 17.5997 12.1626 17.1816 12.2816 16.7849L12.892 14.7504H9.45802L8.71837 17.2159C8.59935 17.6126 8.18123 17.8378 7.78449 17.7188C7.38774 17.5997 7.16261 17.1816 7.28163 16.7849L7.89198 14.7504H6C5.58579 14.7504 5.25 14.4146 5.25 14.0004C5.25 13.5862 5.58579 13.2504 6 13.2504H8.34198L9.09198 10.7504H7C6.58579 10.7504 6.25 10.4146 6.25 10.0004C6.25 9.58617 6.58579 9.25038 7 9.25038H9.54198L10.2816 6.78487C10.4007 6.38812 10.8188 6.16299 11.2155 6.28201Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconHashtagCircle as IconComponentType).keywords = [
  "hashtag",
  "circle",
  "slashtag",
  "bashtag",
  "hashtagger",
  "hashflag",
  "tag cloud",
  "tweet",
  "label cloud",
  "entity tag",
  "fragment",
  "round",
  "rotary",
  "environ",
  "roundabout",
  "circulate",
  "circuit",
  "encircle",
  "surround",
  "dress circle",
];

export default IconHashtagCircle as IconComponentType;