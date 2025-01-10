import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconAndroid: FC<IconProps> = ({
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
            d="M11.6699 18V21C11.6699 21.55 11.2199 22 10.6699 22C10.1199 22 9.66992 21.55 9.66992 21V18H11.6699Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.6699 18V21C15.6699 21.55 15.2199 22 14.6699 22C14.1199 22 13.6699 21.55 13.6699 21V18H15.6699Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.6699 11V16C17.6699 17.1 16.7699 18 15.6699 18H9.66992C8.56992 18 7.66992 17.1 7.66992 16V11C7.66992 9.9 8.56992 9 9.66992 9H15.6699C16.7699 9 17.6699 9.9 17.6699 11Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M5.66992 11V15C5.66992 15.55 5.21992 16 4.66992 16C4.11992 16 3.66992 15.55 3.66992 15V11C3.66992 10.45 4.11992 10 4.66992 10C5.21992 10 5.66992 10.45 5.66992 11Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21.6699 11V15C21.6699 15.55 21.2199 16 20.6699 16C20.1199 16 19.6699 15.55 19.6699 15V11C19.6699 10.45 20.1199 10 20.6699 10C21.2199 10 21.6699 10.45 21.6699 11Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.6699 18H11.6699"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10.2699 7H15.0699C15.9499 7 16.6699 6.27999 16.6699 5.39999C16.6699 3.18999 14.8799 1.39999 12.6699 1.39999C10.4599 1.39999 8.66992 3.18999 8.66992 5.39999C8.66992 6.27999 9.3899 7 10.2699 7Z"
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
            d="M11.6699 18V21C11.6699 21.55 11.2199 22 10.6699 22C10.1199 22 9.66992 21.55 9.66992 21V18H11.6699Z"
            fill="currentColor"
          />
          <path
            d="M15.6699 18V21C15.6699 21.55 15.2199 22 14.6699 22C14.1199 22 13.6699 21.55 13.6699 21V18H15.6699Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17.6699 11V16C17.6699 17.1 16.7699 18 15.6699 18H9.66992C8.56992 18 7.66992 17.1 7.66992 16V11C7.66992 9.9 8.56992 9 9.66992 9H15.6699C16.7699 9 17.6699 9.9 17.6699 11Z"
            fill="currentColor"
          />
          <path
            d="M5.66992 11V15C5.66992 15.55 5.21992 16 4.66992 16C4.11992 16 3.66992 15.55 3.66992 15V11C3.66992 10.45 4.11992 10 4.66992 10C5.21992 10 5.66992 10.45 5.66992 11Z"
            fill="currentColor"
          />
          <path
            d="M21.6699 11V15C21.6699 15.55 21.2199 16 20.6699 16C20.1199 16 19.6699 15.55 19.6699 15V11C19.6699 10.45 20.1199 10 20.6699 10C21.2199 10 21.6699 10.45 21.6699 11Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10.2699 7.6H15.0699C15.9499 7.6 16.6699 6.88 16.6699 6C16.6699 3.79 14.8799 2 12.6699 2C10.4599 2 8.66992 3.79 8.66992 6C8.66992 6.88 9.3899 7.6 10.2699 7.6Z"
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
            d="M11.6699 18V21C11.6699 21.55 11.2199 22 10.6699 22C10.1199 22 9.66992 21.55 9.66992 21V18H11.6699Z"
            fill="none"
          />
          <path
            d="M15.6699 18V21C15.6699 21.55 15.2199 22 14.6699 22C14.1199 22 13.6699 21.55 13.6699 21V18H15.6699Z"
            fill="none"
          />
          <path
            d="M17.6699 11V16C17.6699 17.1 16.7699 18 15.6699 18H9.66992C8.56992 18 7.66992 17.1 7.66992 16V11C7.66992 9.9 8.56992 9 9.66992 9H15.6699C16.7699 9 17.6699 9.9 17.6699 11Z"
            fill="none"
          />
          <path
            d="M5.66992 11V15C5.66992 15.55 5.21992 16 4.66992 16C4.11992 16 3.66992 15.55 3.66992 15V11C3.66992 10.45 4.11992 10 4.66992 10C5.21992 10 5.66992 10.45 5.66992 11Z"
            fill="none"
          />
          <path
            d="M21.6699 11V15C21.6699 15.55 21.2199 16 20.6699 16C20.1199 16 19.6699 15.55 19.6699 15V11C19.6699 10.45 20.1199 10 20.6699 10C21.2199 10 21.6699 10.45 21.6699 11Z"
            fill="none"
          />
          <path
            d="M10.2699 7.60001H15.0699C15.9499 7.60001 16.6699 6.88 16.6699 6C16.6699 3.79 14.8799 2 12.6699 2C10.4599 2 8.66992 3.79 8.66992 6C8.66992 6.88 9.3899 7.60001 10.2699 7.60001Z"
            fill="none"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconAndroid as IconComponentType).keywords = [
  "android",
  "humanoid",
  "mechanical man",
  "droid",
  "robot",
  "iphone",
  "ipad",
  "gynoid",
  "samsung",
  "smartphone",
];

export default IconAndroid as IconComponentType;
