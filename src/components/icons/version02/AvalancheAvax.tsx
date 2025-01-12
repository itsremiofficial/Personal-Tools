import { FC } from "react";

const IconAvalancheAvax: FC<IconProps> = ({
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
            d="M6.72977 15.58L12.3398 5.97001C12.4998 5.69001 12.8998 5.67001 13.0898 5.93001L14.6497 8.02001C15.0997 8.62001 15.1298 9.43001 14.7398 10.07L11.3997 15.42C11.0697 15.95 10.4898 16.27 9.85977 16.27H7.11978C6.76978 16.26 6.54977 15.88 6.72977 15.58Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.91 12.37L13.99 15.57C13.81 15.87 14.03 16.26 14.38 16.26H18.22C18.57 16.26 18.79 15.88 18.61 15.57L16.69 12.37C16.52 12.08 16.09 12.08 15.91 12.37Z"
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
          <path d="M24.6699 0H0.669922V24H24.6699V0Z" fill="none" />
          <path
            d="M6.73025 15.58L12.3402 5.96995C12.5002 5.68995 12.9002 5.66995 13.0902 5.92995L14.6502 8.01995C15.1002 8.61995 15.1303 9.42995 14.7403 10.07L11.4002 15.42C11.0702 15.95 10.4903 16.27 9.86026 16.27H7.12027C6.77027 16.26 6.55025 15.88 6.73025 15.58Z"
            fill="currentColor"
          />
          <path
            d="M15.91 12.37L13.99 15.57C13.81 15.87 14.03 16.26 14.38 16.26H18.22C18.57 16.26 18.79 15.88 18.61 15.57L16.69 12.37C16.52 12.08 16.09 12.08 15.91 12.37Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z"
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
            d="M12.6699 2C7.14992 2 2.66992 6.48 2.66992 12C2.66992 17.52 7.14992 22 12.6699 22C18.1899 22 22.6699 17.52 22.6699 12C22.6699 6.48 18.1899 2 12.6699 2ZM11.3899 15.41C11.0599 15.94 10.4799 16.26 9.84991 16.26H7.10992C6.75992 16.26 6.53991 15.88 6.71991 15.58L12.3299 5.97C12.4899 5.69 12.8899 5.67 13.0799 5.93L14.6399 8.02C15.0899 8.62 15.1199 9.43 14.7299 10.07L11.3899 15.41ZM18.2199 16.26H14.3799C14.0299 16.26 13.8099 15.88 13.9899 15.57L15.9099 12.37C16.0899 12.08 16.5099 12.08 16.6899 12.37L18.6099 15.57C18.7899 15.87 18.5699 16.26 18.2199 16.26Z"
            fill="none"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconAvalancheAvax as IconComponent).keywords = [
  "avalanche",
  "avax",
  "roll down",
  "landslide",
  "snow",
  "ice",
  "glacier",
  "blizzard",
  "flood",
  "cascade",
  "tide",
  "ard",
  "args",
  "asn",
  "bool",
  "boolean",
  "checkbox",
  "cies",
  "connect",
  "constructor",
];

export default IconAvalancheAvax as IconComponent;
