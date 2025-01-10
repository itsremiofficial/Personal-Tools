import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconBitcoinCard: FC<IconProps> = ({
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
            d="M2.66992 8.5H13.6699"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6.66992 16.5H8.66992"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M11.1699 16.5H15.1699"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.6699 11.33V16.11C22.6699 19.62 21.7799 20.5 18.2299 20.5H7.10992C3.55992 20.5 2.66992 19.62 2.66992 16.11V7.89001C2.66992 4.38001 3.55992 3.5 7.10992 3.5H13.9499"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M17.6699 3.25H20.7999C21.4899 3.25 22.0499 3.88 22.0499 4.5C22.0499 5.19 21.4899 5.75 20.7999 5.75H17.6699V3.25Z"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.6699 5.75H21.2399C22.0299 5.75 22.6699 6.31 22.6699 7C22.6699 7.69 22.0299 8.25 21.2399 8.25H17.6699V5.75Z"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.4297 8.25V9.5"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.4297 2V3.25"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.8599 3.25H16.6699"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.8599 8.25H16.6699"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
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
            d="M22.6699 7.53986V16.4599C22.6699 18.7499 20.8099 20.5999 18.5199 20.5999H6.81992C4.52992 20.5999 2.66992 18.7499 2.66992 16.4599V7.53986C2.66992 5.24986 4.52992 3.3999 6.81992 3.3999H18.5199C20.8099 3.3999 22.6699 5.24986 22.6699 7.53986Z"
            fill="currentColor"
          />
          <path
            d="M9.91992 12.75H5.91992C5.50992 12.75 5.16992 12.41 5.16992 12C5.16992 11.59 5.50992 11.25 5.91992 11.25H9.91992C10.3299 11.25 10.6699 11.59 10.6699 12C10.6699 12.41 10.3299 12.75 9.91992 12.75Z"
            fill="currentColor"
          />
          <path
            d="M19.3099 11.67C19.4499 11.39 19.5399 11.08 19.5399 10.75C19.5399 9.68 18.6099 8.75 17.5399 8.75H16.9299V8.25C16.9299 7.84 16.5899 7.5 16.1799 7.5C15.7699 7.5 15.4299 7.84 15.4299 8.25V8.75H14.4199H13.4199C13.0099 8.75 12.6699 9.09 12.6699 9.5C12.6699 9.91 13.0099 10.25 13.4199 10.25H13.6699V12V13.75H13.4199C13.0099 13.75 12.6699 14.09 12.6699 14.5C12.6699 14.91 13.0099 15.25 13.4199 15.25H14.4199H15.4299V15.75C15.4299 16.16 15.7699 16.5 16.1799 16.5C16.5899 16.5 16.9299 16.16 16.9299 15.75V15.25H17.9899C19.1899 15.25 20.1699 14.35 20.1699 13.25C20.1699 12.6 19.8299 12.04 19.3099 11.67ZM15.6099 10.25H17.5499C17.8099 10.25 18.0499 10.53 18.0499 10.75C18.0499 11.03 17.8299 11.25 17.5499 11.25H15.1699V10.25H15.6099ZM17.9899 13.75H15.6099H15.1699V12.75H17.5499H17.9999C18.3699 12.75 18.6799 12.98 18.6799 13.25C18.6799 13.52 18.3599 13.75 17.9899 13.75Z"
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
            d="M18.0499 10.75C18.0499 10.53 17.8099 10.25 17.5499 10.25H15.6099H15.1699V11.25H17.5499C17.8199 11.25 18.0499 11.03 18.0499 10.75Z"
            fill="currentColor"
          />
          <path
            d="M17.9899 12.75H17.5399H15.1699V13.75H15.6099H17.9899C18.3599 13.75 18.6699 13.52 18.6699 13.25C18.6699 12.98 18.3599 12.75 17.9899 12.75Z"
            fill="currentColor"
          />
          <path
            d="M18.5199 3.3999H6.81992C4.52992 3.3999 2.66992 5.2499 2.66992 7.5399V16.4599C2.66992 18.7499 4.52992 20.5999 6.81992 20.5999H18.5199C20.8099 20.5999 22.6699 18.7499 22.6699 16.4599V7.5399C22.6699 5.2499 20.8099 3.3999 18.5199 3.3999ZM9.91992 12.7499H5.91992C5.50992 12.7499 5.16992 12.4099 5.16992 11.9999C5.16992 11.5899 5.50992 11.2499 5.91992 11.2499H9.91992C10.3299 11.2499 10.6699 11.5899 10.6699 11.9999C10.6699 12.4099 10.3299 12.7499 9.91992 12.7499ZM17.9899 15.2499H16.9299V15.7499C16.9299 16.1599 16.5899 16.4999 16.1799 16.4999C15.7699 16.4999 15.4299 16.1599 15.4299 15.7499V15.2499H14.4199H13.4199C13.0099 15.2499 12.6699 14.9099 12.6699 14.4999C12.6699 14.0899 13.0099 13.7499 13.4199 13.7499H13.6699V11.9999V10.2499H13.4199C13.0099 10.2499 12.6699 9.9099 12.6699 9.4999C12.6699 9.0899 13.0099 8.7499 13.4199 8.7499H14.4199H15.4299V8.2499C15.4299 7.8399 15.7699 7.4999 16.1799 7.4999C16.5899 7.4999 16.9299 7.8399 16.9299 8.2499V8.7499H17.5399C18.6099 8.7499 19.5399 9.6799 19.5399 10.7499C19.5399 11.0799 19.4499 11.3899 19.3099 11.6699C19.8299 12.0399 20.1699 12.6099 20.1699 13.2499C20.1699 14.3499 19.1899 15.2499 17.9899 15.2499Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBitcoinCard as IconComponentType).keywords = [
  "bitcoin",
  "card",
  "coin",
  "cryptocurrency",
  "cryptocoin",
  "crypto-currency",
  "dogecoin",
  "ether",
  "millibitcoin",
  "bitcoin faucet",
  "bitcent",
  "scorecard",
  "batting order",
  "identity card",
  "visiting card",
  "calling card",
  "lineup",
  "poster",
  "placard",
  "tease",
];

export default IconBitcoinCard as IconComponentType;
