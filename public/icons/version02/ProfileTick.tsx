import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconProfileTick: FC<IconProps> = ({
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
            d="M15.1099 19.05L16.6299 20.57L19.6699 17.53"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.83 10.87C12.73 10.86 12.61 10.86 12.5 10.87C10.12 10.79 8.23002 8.84 8.23002 6.44C8.22002 3.99 10.21 2 12.66 2C15.11 2 17.1 3.99 17.1 6.44C17.1 8.84 15.2 10.79 12.83 10.87Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.66 21.8099C10.84 21.8099 9.02996 21.3499 7.64996 20.4299C5.22996 18.8099 5.22996 16.1699 7.64996 14.5599C10.4 12.7199 14.91 12.7199 17.66 14.5599"
            stroke="currentColor"
            strokeWidth={width}
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
            d="M12.6699 2C10.0499 2 7.91992 4.13 7.91992 6.75C7.91992 9.32 9.92992 11.4 12.5499 11.49C12.6299 11.48 12.7099 11.48 12.7699 11.49C12.7899 11.49 12.7999 11.49 12.8199 11.49C12.8299 11.49 12.8299 11.49 12.8399 11.49C15.3999 11.4 17.4099 9.32 17.4199 6.75C17.4199 4.13 15.2899 2 12.6699 2Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17.7499 14.1599C14.9599 12.2999 10.4099 12.2999 7.59988 14.1599C6.32988 14.9999 5.62988 16.1499 5.62988 17.3799C5.62988 18.6099 6.32988 19.7499 7.58988 20.5899C8.98988 21.5299 10.8299 21.9999 12.6699 21.9999C14.5099 21.9999 16.3499 21.5299 17.7499 20.5899C19.0099 19.7399 19.7099 18.5999 19.7099 17.3599C19.6999 16.1399 19.0099 14.9899 17.7499 14.1599Z"
            fill="currentColor"
          />
          <path
            d="M12.0402 19.26C11.8802 19.26 11.7202 19.19 11.6002 19.08L10.3402 17.82C10.1002 17.58 10.1002 17.18 10.3402 16.94C10.5802 16.7 10.9802 16.7 11.2202 16.94L12.0402 17.76L14.1202 15.68C14.3602 15.44 14.7602 15.44 15.0002 15.68C15.2402 15.92 15.2402 16.32 15.0002 16.56L12.4802 19.08C12.3602 19.2 12.2002 19.26 12.0402 19.26Z"
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
            d="M12.6699 2C10.0499 2 7.91992 4.13 7.91992 6.75C7.91992 9.32 9.92992 11.4 12.5499 11.49C12.6299 11.48 12.7099 11.48 12.7699 11.49C12.7899 11.49 12.7999 11.49 12.8199 11.49C12.8299 11.49 12.8299 11.49 12.8399 11.49C15.3999 11.4 17.4099 9.32 17.4199 6.75C17.4199 4.13 15.2899 2 12.6699 2Z"
            fill="currentColor"
          />
          <path
            d="M17.7499 14.1599C14.9599 12.2999 10.4099 12.2999 7.59988 14.1599C6.32988 14.9999 5.62988 16.1499 5.62988 17.3799C5.62988 18.6099 6.32988 19.7499 7.58988 20.5899C8.98988 21.5299 10.8299 21.9999 12.6699 21.9999C14.5099 21.9999 16.3499 21.5299 17.7499 20.5899C19.0099 19.7399 19.7099 18.5999 19.7099 17.3599C19.6999 16.1399 19.0099 14.9899 17.7499 14.1599ZM14.9999 16.5599L12.4799 19.0799C12.3599 19.1999 12.1999 19.2599 12.0399 19.2599C11.8799 19.2599 11.7199 19.1899 11.5999 19.0799L10.3399 17.8199C10.0999 17.5799 10.0999 17.1799 10.3399 16.9399C10.5799 16.6999 10.9799 16.6999 11.2199 16.9399L12.0399 17.7599L14.1199 15.6799C14.3599 15.4399 14.7599 15.4399 14.9999 15.6799C15.2499 15.9199 15.2499 16.3199 14.9999 16.5599Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconProfileTick as IconComponentType).keywords = [
  "profile",
  "tick",
  "outline",
  "image",
  "description",
  "img",
  "sketch",
  "contour",
  "structure",
  "effigy",
  "template",
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

export default IconProfileTick as IconComponentType;
