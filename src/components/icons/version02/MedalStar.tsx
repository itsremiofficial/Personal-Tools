import { FC } from "react";

const IconMedalStar: FC<IconProps> = ({
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
            d="M19.6699 9C19.6699 10.45 19.2399 11.78 18.4999 12.89C17.4199 14.49 15.7099 15.62 13.7199 15.91C13.3799 15.97 13.0299 16 12.6699 16C12.3099 16 11.9599 15.97 11.6199 15.91C9.62992 15.62 7.91992 14.49 6.83992 12.89C6.09992 11.78 5.66992 10.45 5.66992 9C5.66992 5.13 8.79992 2 12.6699 2C16.5399 2 19.6699 5.13 19.6699 9Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21.92 18.4699L20.27 18.8599C19.9 18.9499 19.61 19.2299 19.53 19.5999L19.18 21.0699C18.99 21.8699 17.97 22.1099 17.44 21.4799L12.67 15.9999L7.9 21.4899C7.37 22.1199 6.35 21.8799 6.16 21.0799L5.81 19.6099C5.72 19.2399 5.43 18.9499 5.07 18.8699L3.42 18.4799C2.66 18.2999 2.39 17.3499 2.94 16.7999L6.84 12.8999C7.92 14.4999 9.63 15.6299 11.62 15.9199C11.96 15.9799 12.31 16.0099 12.67 16.0099C13.03 16.0099 13.38 15.9799 13.72 15.9199C15.71 15.6299 17.42 14.4999 18.5 12.8999L22.4 16.7999C22.95 17.3399 22.68 18.2899 21.92 18.4699Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M13.2499 5.98L13.8399 7.15999C13.9199 7.31999 14.1299 7.48 14.3199 7.51L15.3899 7.68999C16.0699 7.79999 16.2299 8.3 15.7399 8.79L14.9099 9.61998C14.7699 9.75998 14.6899 10.03 14.7399 10.23L14.9799 11.26C15.1699 12.07 14.7399 12.39 14.0199 11.96L13.0199 11.37C12.8399 11.26 12.5399 11.26 12.3599 11.37L11.3599 11.96C10.6399 12.38 10.2099 12.07 10.3999 11.26L10.6399 10.23C10.6799 10.04 10.6099 9.75998 10.4699 9.61998L9.6399 8.79C9.1499 8.3 9.30989 7.80999 9.98989 7.68999L11.0599 7.51C11.2399 7.48 11.4499 7.31999 11.5299 7.15999L12.1199 5.98C12.4099 5.34 12.9299 5.34 13.2499 5.98Z"
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
            opacity={duotone ? "0.4" : "1"}
            d="M19.6699 9C19.6699 10.45 19.2399 11.78 18.4999 12.89C17.4199 14.49 15.7099 15.62 13.7199 15.91C13.3799 15.97 13.0299 16 12.6699 16C12.3099 16 11.9599 15.97 11.6199 15.91C9.62992 15.62 7.91992 14.49 6.83992 12.89C6.09992 11.78 5.66992 10.45 5.66992 9C5.66992 5.13 8.79992 2 12.6699 2C16.5399 2 19.6699 5.13 19.6699 9Z"
            fill="currentColor"
          />
          <path
            d="M21.92 18.4699L20.27 18.8599C19.9 18.9499 19.61 19.2299 19.53 19.5999L19.18 21.0699C18.99 21.8699 17.97 22.1099 17.44 21.4799L12.67 15.9999L7.9 21.4899C7.37 22.1199 6.35 21.8799 6.16 21.0799L5.81 19.6099C5.72 19.2399 5.43 18.9499 5.07 18.8699L3.42 18.4799C2.66 18.2999 2.39 17.3499 2.94 16.7999L6.84 12.8999C7.92 14.4999 9.63 15.6299 11.62 15.9199C11.96 15.9799 12.31 16.0099 12.67 16.0099C13.03 16.0099 13.38 15.9799 13.72 15.9199C15.71 15.6299 17.42 14.4999 18.5 12.8999L22.4 16.7999C22.95 17.3399 22.68 18.2899 21.92 18.4699Z"
            fill="currentColor"
          />
          <path
            d="M13.2499 5.98L13.8399 7.15999C13.9199 7.31999 14.1299 7.48 14.3199 7.51L15.3899 7.68999C16.0699 7.79999 16.2299 8.3 15.7399 8.79L14.9099 9.61998C14.7699 9.75998 14.6899 10.03 14.7399 10.23L14.9799 11.26C15.1699 12.07 14.7399 12.39 14.0199 11.96L13.0199 11.37C12.8399 11.26 12.5399 11.26 12.3599 11.37L11.3599 11.96C10.6399 12.38 10.2099 12.07 10.3999 11.26L10.6399 10.23C10.6799 10.04 10.6099 9.75998 10.4699 9.61998L9.6399 8.79C9.1499 8.3 9.30989 7.80999 9.98989 7.68999L11.0599 7.51C11.2399 7.48 11.4499 7.31999 11.5299 7.15999L12.1199 5.98C12.4099 5.34 12.9299 5.34 13.2499 5.98Z"
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
            d="M21.9202 18.4701L20.2702 18.8601C19.9002 18.9501 19.6102 19.2301 19.5302 19.6001L19.1802 21.0701C18.9902 21.8701 17.9702 22.1201 17.4402 21.4901L14.4502 18.0501C14.2102 17.7701 14.3402 17.3301 14.7002 17.2401C16.4702 16.8101 18.0602 15.8201 19.2302 14.4101C19.4202 14.1801 19.7602 14.1501 19.9702 14.3601L22.1902 16.5801C22.9502 17.3401 22.6802 18.2901 21.9202 18.4701Z"
            fill="currentColor"
          />
          <path
            d="M3.37008 18.4701L5.02008 18.8601C5.39008 18.9501 5.68008 19.2301 5.76008 19.6001L6.11008 21.0701C6.30008 21.8701 7.32008 22.1201 7.85008 21.4901L10.8401 18.0501C11.0801 17.7701 10.9501 17.3301 10.5901 17.2401C8.82008 16.8101 7.23008 15.8201 6.06008 14.4101C5.87008 14.1801 5.53008 14.1501 5.32008 14.3601L3.10008 16.5801C2.34008 17.3401 2.61008 18.2901 3.37008 18.4701Z"
            fill="currentColor"
          />
          <path
            d="M12.6699 2C8.79992 2 5.66992 5.13 5.66992 9C5.66992 10.45 6.09992 11.78 6.83992 12.89C7.91992 14.49 9.62992 15.62 11.6199 15.91C11.9599 15.97 12.3099 16 12.6699 16C13.0299 16 13.3799 15.97 13.7199 15.91C15.7099 15.62 17.4199 14.49 18.4999 12.89C19.2399 11.78 19.6699 10.45 19.6699 9C19.6699 5.13 16.5399 2 12.6699 2ZM15.7299 8.78L14.8999 9.61C14.7599 9.75 14.6799 10.02 14.7299 10.22L14.9699 11.25C15.1599 12.06 14.7299 12.38 14.0099 11.95L13.0099 11.36C12.8299 11.25 12.5299 11.25 12.3499 11.36L11.3499 11.95C10.6299 12.37 10.1999 12.06 10.3899 11.25L10.6299 10.22C10.6699 10.03 10.5999 9.75 10.4599 9.61L9.60992 8.78C9.11992 8.29 9.27992 7.8 9.95992 7.69L11.0299 7.51C11.2099 7.48 11.4199 7.32 11.4999 7.16L12.0899 5.98C12.4099 5.34 12.9299 5.34 13.2499 5.98L13.8399 7.16C13.9199 7.32 14.1299 7.48 14.3199 7.51L15.3899 7.69C16.0599 7.8 16.2199 8.29 15.7299 8.78Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMedalStar as IconComponent).keywords = [
  "medal",
  "star",
  "medallion",
  "decoration",
  "laurel wreath",
  "ribbon",
  "palm",
  "medalist",
  "decorating",
  "décor",
  "plaque",
  "stellar",
  "asterisk",
  "lead",
  "leading",
  "maven",
  "sensation",
  "principal",
  "whizz",
  "headliner",
];

export default IconMedalStar as IconComponent;
