import { FC } from "react";

const IconMessage2: FC<IconProps> = ({
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
            d="M9.16992 10.5H16.1699"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.66992 18.4299H11.6699L16.1199 21.39C16.7799 21.83 17.6699 21.3599 17.6699 20.5599V18.4299C20.6699 18.4299 22.6699 16.4299 22.6699 13.4299V7.42993C22.6699 4.42993 20.6699 2.42993 17.6699 2.42993H7.66992C4.66992 2.42993 2.66992 4.42993 2.66992 7.42993V13.4299C2.66992 16.4299 4.66992 18.4299 7.66992 18.4299Z"
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
            d="M7.66992 18.4299H11.6699L16.1199 21.39C16.7799 21.83 17.6699 21.3599 17.6699 20.5599V18.4299C20.6699 18.4299 22.6699 16.4299 22.6699 13.4299V7.42993C22.6699 4.42993 20.6699 2.42993 17.6699 2.42993H7.66992C4.66992 2.42993 2.66992 4.42993 2.66992 7.42993V13.4299C2.66992 16.4299 4.66992 18.4299 7.66992 18.4299Z"
            fill="currentColor"
          />
          <path
            d="M16.1699 11.25H9.16992C8.75992 11.25 8.41992 10.91 8.41992 10.5C8.41992 10.09 8.75992 9.75 9.16992 9.75H16.1699C16.5799 9.75 16.9199 10.09 16.9199 10.5C16.9199 10.91 16.5799 11.25 16.1699 11.25Z"
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
            d="M17.6699 2.42993H7.66992C4.66992 2.42993 2.66992 4.42993 2.66992 7.42993V13.4299C2.66992 16.4299 4.66992 18.4299 7.66992 18.4299H11.6699L16.1199 21.3899C16.7799 21.8299 17.6699 21.3599 17.6699 20.5599V18.4299C20.6699 18.4299 22.6699 16.4299 22.6699 13.4299V7.42993C22.6699 4.42993 20.6699 2.42993 17.6699 2.42993ZM16.1699 11.2499H9.16992C8.75992 11.2499 8.41992 10.9099 8.41992 10.4999C8.41992 10.0899 8.75992 9.74993 9.16992 9.74993H16.1699C16.5799 9.74993 16.9199 10.0899 16.9199 10.4999C16.9199 10.9099 16.5799 11.2499 16.1699 11.2499Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMessage2 as IconComponent).keywords = [
  "message",
  "2",
  "subject matter",
  "substance",
  "content",
  "file",
  "communiqué",
  "transmission",
  "communication",
  "news",
  "advertisement",
  "wireless network",
  "sign on",
  "sign off",
  "put through",
  "back up",
  "ring up",
  "call up",
  "hang up",
  "read out",
];

export default IconMessage2 as IconComponent;
