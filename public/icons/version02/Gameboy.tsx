import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconGameboy: FC<IconProps> = ({
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
            d="M21.6699 7V17C21.6699 20 20.1699 22 16.6699 22H8.66992C5.16992 22 3.66992 20 3.66992 17V7C3.66992 4 5.16992 2 8.66992 2H16.6699C20.1699 2 21.6699 4 21.6699 7Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.9199 11H8.41992C7.45992 11 6.66992 10.21 6.66992 9.25V6.75C6.66992 5.79 7.45992 5 8.41992 5H16.9199C17.8799 5 18.6699 5.79 18.6699 6.75V9.25C18.6699 10.21 17.8799 11 16.9199 11Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.9699 15.28L8.66992 17.58"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.69971 15.3101L10.9997 17.61"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17.1602 15.3301H17.1802"
            stroke="currentColor"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.1602 17.5V17.48"
            stroke="currentColor"
            strokeWidth="2"
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
            d="M17.6699 22H7.66992C5.46992 22 3.66992 20.2 3.66992 18V6C3.66992 3.8 5.46992 2 7.66992 2H17.6699C19.8699 2 21.6699 3.8 21.6699 6V18C21.6699 20.2 19.8699 22 17.6699 22Z"
            fill="currentColor"
          />
          <path
            d="M16.9199 11H8.41992C7.45992 11 6.66992 10.21 6.66992 9.25V6.75C6.66992 5.79 7.45992 5 8.41992 5H16.9199C17.8799 5 18.6699 5.79 18.6699 6.75V9.25C18.6699 10.21 17.8799 11 16.9199 11Z"
            fill="currentColor"
          />
          <path
            d="M11.5298 17.08L10.8799 16.43L11.4998 15.81C11.7898 15.52 11.7898 15.04 11.4998 14.75C11.2098 14.46 10.7299 14.46 10.4399 14.75L9.81986 15.37L9.22986 14.78C8.93986 14.49 8.45986 14.49 8.16986 14.78C7.87986 15.07 7.87986 15.55 8.16986 15.84L8.75986 16.43L8.13986 17.05C7.84986 17.34 7.84986 17.82 8.13986 18.11C8.28986 18.26 8.47986 18.33 8.66986 18.33C8.85986 18.33 9.04986 18.26 9.19986 18.11L9.81986 17.49L10.4698 18.14C10.6198 18.29 10.8098 18.36 10.9998 18.36C11.1898 18.36 11.3798 18.29 11.5298 18.14C11.8198 17.85 11.8198 17.37 11.5298 17.08Z"
            fill="currentColor"
          />
          <path
            d="M17.1799 16.3301C16.6299 16.3301 16.1699 15.8801 16.1699 15.3301C16.1699 14.7801 16.6099 14.3301 17.1599 14.3301H17.1799C17.7299 14.3301 18.1799 14.7801 18.1799 15.3301C18.1799 15.8801 17.7299 16.3301 17.1799 16.3301Z"
            fill="currentColor"
          />
          <path
            d="M15.1602 18.49C14.6102 18.49 14.1602 18.05 14.1602 17.5V17.48C14.1602 16.93 14.6102 16.48 15.1602 16.48C15.7102 16.48 16.1602 16.93 16.1602 17.48C16.1602 18.03 15.7102 18.49 15.1602 18.49Z"
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
            d="M17.6699 2H7.66992C5.46992 2 3.66992 3.8 3.66992 6V18C3.66992 20.2 5.46992 22 7.66992 22H17.6699C19.8699 22 21.6699 20.2 21.6699 18V6C21.6699 3.8 19.8699 2 17.6699 2ZM11.5299 18.14C11.3799 18.29 11.1899 18.36 10.9999 18.36C10.8099 18.36 10.6199 18.29 10.4699 18.14L9.81992 17.49L9.19992 18.11C9.04992 18.26 8.85992 18.33 8.66992 18.33C8.47992 18.33 8.28992 18.26 8.13992 18.11C7.84992 17.82 7.84992 17.34 8.13992 17.05L8.75992 16.43L8.16992 15.84C7.87992 15.55 7.87992 15.07 8.16992 14.78C8.45992 14.49 8.93992 14.49 9.22992 14.78L9.81992 15.37L10.4399 14.75C10.7299 14.46 11.2099 14.46 11.4999 14.75C11.7899 15.04 11.7899 15.52 11.4999 15.81L10.8799 16.43L11.5299 17.08C11.8199 17.37 11.8199 17.85 11.5299 18.14ZM15.1599 18.49C14.6099 18.49 14.1599 18.05 14.1599 17.5V17.48C14.1599 16.93 14.6099 16.48 15.1599 16.48C15.7099 16.48 16.1599 16.93 16.1599 17.48C16.1599 18.03 15.7099 18.49 15.1599 18.49ZM17.1799 16.33C16.6299 16.33 16.1699 15.88 16.1699 15.33C16.1699 14.78 16.6099 14.33 17.1599 14.33H17.1799C17.7299 14.33 18.1799 14.78 18.1799 15.33C18.1799 15.88 17.7299 16.33 17.1799 16.33ZM18.6699 9.25C18.6699 10.21 17.8799 11 16.9199 11H8.41992C7.45992 11 6.66992 10.21 6.66992 9.25V6.75C6.66992 5.79 7.45992 5 8.41992 5H16.9199C17.8799 5 18.6699 5.79 18.6699 6.75V9.25Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconGameboy as IconComponentType).keywords = ["gameboy"];

export default IconGameboy as IconComponentType;
