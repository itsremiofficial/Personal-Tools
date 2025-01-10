import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconXiaomi: FC<IconProps> = ({
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
            d="M8.16992 15V9H12.1699C13.2699 9 14.1699 9.9 14.1699 11V15"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M11.1699 15V12"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17.1699 15V9"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z"
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
            opacity={duotone ? "0.58" : "1"}
            d="M24.6699 0H0.669922V24H24.6699V0Z"
            fill="none"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z"
            fill="currentColor"
          />
          <path
            d="M14.1699 15.75C13.7599 15.75 13.4199 15.41 13.4199 15V11C13.4199 10.31 12.8599 9.75 12.1699 9.75H8.91992V15C8.91992 15.41 8.57992 15.75 8.16992 15.75C7.75992 15.75 7.41992 15.41 7.41992 15V9C7.41992 8.59 7.75992 8.25 8.16992 8.25H12.1699C13.6899 8.25 14.9199 9.48 14.9199 11V15C14.9199 15.41 14.5799 15.75 14.1699 15.75Z"
            fill="currentColor"
          />
          <path
            d="M11.1699 15.75C10.7599 15.75 10.4199 15.41 10.4199 15V12C10.4199 11.59 10.7599 11.25 11.1699 11.25C11.5799 11.25 11.9199 11.59 11.9199 12V15C11.9199 15.41 11.5799 15.75 11.1699 15.75Z"
            fill="currentColor"
          />
          <path
            d="M17.1699 15.75C16.7599 15.75 16.4199 15.41 16.4199 15V9C16.4199 8.59 16.7599 8.25 17.1699 8.25C17.5799 8.25 17.9199 8.59 17.9199 9V15C17.9199 15.41 17.5799 15.75 17.1699 15.75Z"
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
            d="M12.6699 2C7.14992 2 2.66992 6.48 2.66992 12C2.66992 17.52 7.14992 22 12.6699 22C18.1899 22 22.6699 17.52 22.6699 12C22.6699 6.48 18.1899 2 12.6699 2ZM11.9199 15C11.9199 15.41 11.5799 15.75 11.1699 15.75C10.7599 15.75 10.4199 15.41 10.4199 15V12C10.4199 11.59 10.7599 11.25 11.1699 11.25C11.5799 11.25 11.9199 11.59 11.9199 12V15ZM14.9199 15C14.9199 15.41 14.5799 15.75 14.1699 15.75C13.7599 15.75 13.4199 15.41 13.4199 15V11C13.4199 10.31 12.8599 9.75 12.1699 9.75H8.91992V15C8.91992 15.41 8.57992 15.75 8.16992 15.75C7.75992 15.75 7.41992 15.41 7.41992 15V9C7.41992 8.59 7.75992 8.25 8.16992 8.25H12.1699C13.6899 8.25 14.9199 9.48 14.9199 11V15ZM17.9199 15C17.9199 15.41 17.5799 15.75 17.1699 15.75C16.7599 15.75 16.4199 15.41 16.4199 15V9C16.4199 8.59 16.7599 8.25 17.1699 8.25C17.5799 8.25 17.9199 8.59 17.9199 9V15Z"
            fill="none"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconXiaomi as IconComponentType).keywords = [
  "xiaomi",
  "huawei",
  "shanzhai",
  "baidu",
  "sharp",
  "xinmi",
  "samsung",
  "xiamen",
  "ximiao",
  "wechat",
];

export default IconXiaomi as IconComponentType;
