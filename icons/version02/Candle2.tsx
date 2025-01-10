import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconCandle2: FC<IconProps> = ({
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
            d="M22.6699 17.5H15.6699"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M5.66992 17.5H2.66992"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.6699 6.5H19.6699"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.66992 6.5H2.66992"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.66992 14.5H13.6699C14.7699 14.5 15.6699 15 15.6699 16.5V18.5C15.6699 20 14.7699 20.5 13.6699 20.5H7.66992C6.56992 20.5 5.66992 20 5.66992 18.5V16.5C5.66992 15 6.56992 14.5 7.66992 14.5Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.6699 3.5H17.6699C18.7699 3.5 19.6699 4 19.6699 5.5V7.5C19.6699 9 18.7699 9.5 17.6699 9.5H11.6699C10.5699 9.5 9.66992 9 9.66992 7.5V5.5C9.66992 4 10.5699 3.5 11.6699 3.5Z"
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
            d="M23.4199 17.5C23.4199 17.91 23.0799 18.25 22.6699 18.25H15.6699V18.5C15.6699 20 14.7699 20.5 13.6699 20.5H7.66992C6.56992 20.5 5.66992 20 5.66992 18.5V18.25H2.66992C2.25992 18.25 1.91992 17.91 1.91992 17.5C1.91992 17.09 2.25992 16.75 2.66992 16.75H5.66992V16.5C5.66992 15 6.56992 14.5 7.66992 14.5H13.6699C14.7699 14.5 15.6699 15 15.6699 16.5V16.75H22.6699C23.0799 16.75 23.4199 17.09 23.4199 17.5Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M23.4199 6.5C23.4199 6.91 23.0799 7.25 22.6699 7.25H19.6699V7.5C19.6699 9 18.7699 9.5 17.6699 9.5H11.6699C10.5699 9.5 9.66992 9 9.66992 7.5V7.25H2.66992C2.25992 7.25 1.91992 6.91 1.91992 6.5C1.91992 6.09 2.25992 5.75 2.66992 5.75H9.66992V5.5C9.66992 4 10.5699 3.5 11.6699 3.5H17.6699C18.7699 3.5 19.6699 4 19.6699 5.5V5.75H22.6699C23.0799 5.75 23.4199 6.09 23.4199 6.5Z"
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
            d="M23.4199 17.5C23.4199 17.91 23.0799 18.25 22.6699 18.25H15.6699V18.5C15.6699 20 14.7699 20.5 13.6699 20.5H7.66992C6.56992 20.5 5.66992 20 5.66992 18.5V18.25H2.66992C2.25992 18.25 1.91992 17.91 1.91992 17.5C1.91992 17.09 2.25992 16.75 2.66992 16.75H5.66992V16.5C5.66992 15 6.56992 14.5 7.66992 14.5H13.6699C14.7699 14.5 15.6699 15 15.6699 16.5V16.75H22.6699C23.0799 16.75 23.4199 17.09 23.4199 17.5Z"
            fill="currentColor"
          />
          <path
            d="M23.4199 6.5C23.4199 6.91 23.0799 7.25 22.6699 7.25H19.6699V7.5C19.6699 9 18.7699 9.5 17.6699 9.5H11.6699C10.5699 9.5 9.66992 9 9.66992 7.5V7.25H2.66992C2.25992 7.25 1.91992 6.91 1.91992 6.5C1.91992 6.09 2.25992 5.75 2.66992 5.75H9.66992V5.5C9.66992 4 10.5699 3.5 11.6699 3.5H17.6699C18.7699 3.5 19.6699 4 19.6699 5.5V5.75H22.6699C23.0799 5.75 23.4199 6.09 23.4199 6.5Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCandle2 as IconComponentType).keywords = [
  "candle",
  "2",
  "taper",
  "candela",
  "standard candle",
  "cd",
  "wax light",
  "candlelight",
  "torch",
  "flame",
  "wax",
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

export default IconCandle2 as IconComponentType;
