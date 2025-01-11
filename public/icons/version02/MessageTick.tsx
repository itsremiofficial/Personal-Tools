import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconMessageTick: FC<IconProps> = ({
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
            d="M22.6699 7.42993V13.4299C22.6699 14.9299 22.1699 16.1799 21.2899 17.0599C20.4199 17.9299 19.1699 18.4299 17.6699 18.4299V20.5599C17.6699 21.3599 16.7799 21.84 16.1199 21.4L11.6699 18.4299H9.54993C9.62993 18.1299 9.66992 17.8199 9.66992 17.4999C9.66992 16.4799 9.27992 15.54 8.63992 14.83C7.91992 14.01 6.84992 13.4999 5.66992 13.4999C4.54992 13.4999 3.52993 13.96 2.79993 14.71C2.70993 14.31 2.66992 13.8799 2.66992 13.4299V7.42993C2.66992 4.42993 4.66992 2.42993 7.66992 2.42993H17.6699C20.6699 2.42993 22.6699 4.42993 22.6699 7.42993Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.66992 17.5C9.66992 18.25 9.45994 18.96 9.08994 19.56C8.87994 19.92 8.60993 20.24 8.29993 20.5C7.59993 21.13 6.67992 21.5 5.66992 21.5C4.20992 21.5 2.93991 20.72 2.24991 19.56C1.87991 18.96 1.66992 18.25 1.66992 17.5C1.66992 16.24 2.24992 15.11 3.16992 14.38C3.85992 13.83 4.72992 13.5 5.66992 13.5C7.87992 13.5 9.66992 15.29 9.66992 17.5Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.11035 17.5L5.10034 18.49L7.23035 16.52"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.16992 10.5H16.1699"
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
            d="M22.6699 7.42993V13.4299C22.6699 14.9299 22.1699 16.1799 21.2899 17.0599C20.4199 17.9299 19.1699 18.4299 17.6699 18.4299V20.5599C17.6699 21.3599 16.7799 21.84 16.1199 21.4L11.6699 18.4299H9.54993C9.62993 18.1299 9.66992 17.8199 9.66992 17.4999C9.66992 16.4799 9.27992 15.54 8.63992 14.83C7.91992 14.01 6.84992 13.4999 5.66992 13.4999C4.54992 13.4999 3.52993 13.96 2.79993 14.71C2.70993 14.31 2.66992 13.8799 2.66992 13.4299V7.42993C2.66992 4.42993 4.66992 2.42993 7.66992 2.42993H17.6699C20.6699 2.42993 22.6699 4.42993 22.6699 7.42993Z"
            fill="currentColor"
          />
          <path
            d="M16.1699 11.25H9.16992C8.75992 11.25 8.41992 10.91 8.41992 10.5C8.41992 10.09 8.75992 9.75 9.16992 9.75H16.1699C16.5799 9.75 16.9199 10.09 16.9199 10.5C16.9199 10.91 16.5799 11.25 16.1699 11.25Z"
            fill="currentColor"
          />
          <path
            d="M5.66992 13.5C3.45992 13.5 1.66992 15.29 1.66992 17.5C1.66992 18.25 1.87991 18.96 2.24991 19.56C2.93991 20.72 4.20992 21.5 5.66992 21.5C7.12992 21.5 8.39994 20.72 9.08994 19.56C9.45994 18.96 9.66992 18.25 9.66992 17.5C9.66992 15.29 7.87992 13.5 5.66992 13.5ZM7.63992 17.17L5.50992 19.14C5.36992 19.27 5.17991 19.34 4.99991 19.34C4.80991 19.34 4.61991 19.27 4.46991 19.12L3.47992 18.13C3.18992 17.84 3.18992 17.36 3.47992 17.07C3.76992 16.78 4.24992 16.78 4.53992 17.07L5.01993 17.55L6.61993 16.07C6.91993 15.79 7.39993 15.81 7.67993 16.11C7.95993 16.41 7.93992 16.89 7.63992 17.17Z"
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
            d="M5.66992 13.5C3.45992 13.5 1.66992 15.29 1.66992 17.5C1.66992 18.25 1.87992 18.96 2.24992 19.56C2.93992 20.72 4.20992 21.5 5.66992 21.5C7.12992 21.5 8.39992 20.72 9.08992 19.56C9.45992 18.96 9.66992 18.25 9.66992 17.5C9.66992 15.29 7.87992 13.5 5.66992 13.5ZM7.63992 17.17L5.50992 19.14C5.36992 19.27 5.17992 19.34 4.99992 19.34C4.80992 19.34 4.61992 19.27 4.46992 19.12L3.47992 18.13C3.18992 17.84 3.18992 17.36 3.47992 17.07C3.76992 16.78 4.24992 16.78 4.53992 17.07L5.01992 17.55L6.61992 16.07C6.91992 15.79 7.39992 15.81 7.67992 16.11C7.95992 16.41 7.93992 16.89 7.63992 17.17Z"
            fill="currentColor"
          />
          <path
            d="M17.9199 2.42993H8.41992C5.56992 2.42993 3.66992 4.32993 3.66992 7.17993V11.6399C3.66992 11.9899 4.02992 12.2399 4.36992 12.1499C4.78992 12.0499 5.21992 11.9999 5.66992 11.9999C8.52992 11.9999 10.8899 14.3199 11.1499 17.1299C11.1699 17.4099 11.3999 17.6299 11.6699 17.6299H12.2199L16.4499 20.4499C17.0699 20.8699 17.9199 20.4099 17.9199 19.6499V17.6299C19.3399 17.6299 20.5299 17.1499 21.3599 16.3299C22.1899 15.4899 22.6699 14.2999 22.6699 12.8799V7.17993C22.6699 4.32993 20.7699 2.42993 17.9199 2.42993ZM16.4999 10.8099H9.83992C9.44992 10.8099 9.12992 10.4899 9.12992 10.0999C9.12992 9.69993 9.44992 9.37993 9.83992 9.37993H16.4999C16.8899 9.37993 17.2099 9.69993 17.2099 10.0999C17.2099 10.4899 16.8899 10.8099 16.4999 10.8099Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMessageTick as IconComponentType).keywords = [
  "message",
  "tick",
  "subject matter",
  "substance",
  "content",
  "file",
  "communiqué",
  "transmission",
  "communication",
  "news",
  "advertisement",
  "click",
  "ticktock",
  "beat",
  "ticktack",
  "retick",
  "ixodid",
  "acarid",
  "spinose",
  "gene",
];

export default IconMessageTick as IconComponentType;