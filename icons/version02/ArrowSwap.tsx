import { FC } from "react";

const IconArrowSwap: FC<IconProps> = ({
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
            d="M9.68016 20.5L4.66016 15.49"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.67969 3.5V20.5"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M15.6602 3.5L20.6802 8.51"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.6602 20.5V3.5"
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
            d="M8.47992 2H16.8499C20.4999 2 22.6699 4.17 22.6699 7.81V16.18C22.6699 19.82 20.4999 21.99 16.8599 21.99H8.47992C4.83992 22 2.66992 19.83 2.66992 16.19V7.81C2.66992 4.17 4.83992 2 8.47992 2Z"
            fill="currentColor"
          />
          <path
            d="M10.9099 6.25C10.4899 6.25 10.1599 6.59 10.1599 7V15.19L8.4899 13.52C8.1999 13.23 7.7199 13.23 7.4299 13.52C7.1399 13.81 7.1399 14.29 7.4299 14.58L10.3799 17.53C10.4499 17.6 10.5299 17.65 10.6199 17.69C10.7099 17.73 10.8099 17.75 10.9099 17.75C11.0099 17.75 11.0999 17.73 11.1999 17.69C11.3799 17.61 11.5299 17.47 11.6099 17.28C11.6499 17.19 11.6699 17.09 11.6699 16.99V7C11.6599 6.59 11.3199 6.25 10.9099 6.25Z"
            fill="currentColor"
          />
          <path
            d="M17.9097 9.42L14.9597 6.47C14.8897 6.4 14.8097 6.35 14.7197 6.31C14.5397 6.23 14.3297 6.23 14.1497 6.31C13.9697 6.39 13.8197 6.53 13.7397 6.72C13.6997 6.81 13.6797 6.9 13.6797 7V17C13.6797 17.41 14.0197 17.75 14.4297 17.75C14.8397 17.75 15.1797 17.41 15.1797 17V8.81L16.8497 10.48C16.9997 10.63 17.1897 10.7 17.3797 10.7C17.5697 10.7 17.7597 10.63 17.9097 10.48C18.1997 10.19 18.1997 9.71 17.9097 9.42Z"
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
            d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2ZM11.6599 17C11.6599 17.1 11.6399 17.19 11.5999 17.29C11.5199 17.47 11.3799 17.62 11.1899 17.7C11.0999 17.74 10.9999 17.76 10.8999 17.76C10.7999 17.76 10.7099 17.74 10.6099 17.7C10.5199 17.66 10.4399 17.61 10.3699 17.54L7.41992 14.59C7.12992 14.3 7.12992 13.82 7.41992 13.53C7.70992 13.24 8.18992 13.24 8.47992 13.53L10.1499 15.2V7C10.1499 6.59 10.4899 6.25 10.8999 6.25C11.3099 6.25 11.6599 6.59 11.6599 7V17ZM17.9099 10.48C17.7599 10.63 17.5699 10.7 17.3799 10.7C17.1899 10.7 16.9999 10.63 16.8499 10.48L15.1799 8.81V17C15.1799 17.41 14.8399 17.75 14.4299 17.75C14.0199 17.75 13.6799 17.41 13.6799 17V7C13.6799 6.9 13.6999 6.81 13.7399 6.71C13.8199 6.53 13.9599 6.38 14.1499 6.3C14.3299 6.22 14.5399 6.22 14.7199 6.3C14.8099 6.34 14.8899 6.39 14.9599 6.46L17.9099 9.41C18.1999 9.71 18.1999 10.19 17.9099 10.48Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconArrowSwap as IconComponent).keywords = [
  "arrow",
  "swap",
  "pointer",
  "archer",
  "archery",
  "dart",
  "arrowhead",
  "bolt",
  "spike",
  "rope",
  "roof",
  "barter",
  "quid pro quo",
  "trade",
  "swop",
  "switch",
  "exchange",
  "bartering",
  "substitute",
  "trade-in",
];

export default IconArrowSwap as IconComponent;
