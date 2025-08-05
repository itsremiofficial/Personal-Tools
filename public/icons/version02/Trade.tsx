import { FC } from "react";

const IconTrade: FC<IconProps> = ({
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
            d="M22.6699 8.5C22.6699 12.09 19.7599 15 16.1699 15C15.9999 15 15.8199 14.99 15.6499 14.98C15.3999 11.81 12.8599 9.26999 9.68991 9.01999C9.67991 8.84999 9.66992 8.67 9.66992 8.5C9.66992 4.91 12.5799 2 16.1699 2C19.7599 2 22.6699 4.91 22.6699 8.5Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.6699 15.5C15.6699 19.09 12.7599 22 9.16992 22C5.57992 22 2.66992 19.09 2.66992 15.5C2.66992 11.91 5.57992 9 9.16992 9C9.33992 9 9.51991 9.00999 9.68991 9.01999C12.8599 9.26999 15.3999 11.81 15.6499 14.98C15.6599 15.15 15.6699 15.33 15.6699 15.5Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6.25992 2H3.66992C3.11992 2 2.66992 2.45 2.66992 3V5.59C2.66992 6.48 3.74991 6.92999 4.37991 6.29999L6.96991 3.70999C7.58991 3.07999 7.14992 2 6.25992 2Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19.0799 22H21.6699C22.2199 22 22.6699 21.55 22.6699 21V18.41C22.6699 17.52 21.5899 17.07 20.9599 17.7L18.3699 20.29C17.7499 20.92 18.1899 22 19.0799 22Z"
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
            d="M15.6699 15.5C15.6699 19.09 12.7599 22 9.16992 22C5.57992 22 2.66992 19.09 2.66992 15.5C2.66992 11.91 5.57992 9 9.16992 9C9.33992 9 9.51991 9.01 9.68991 9.02C12.8599 9.27 15.3999 11.81 15.6499 14.98C15.6599 15.15 15.6699 15.33 15.6699 15.5Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.6699 8.5C22.6699 12.09 19.7599 15 16.1699 15C15.9999 15 15.8199 14.99 15.6499 14.98C15.3999 11.81 12.8599 9.27 9.68991 9.02C9.67991 8.85 9.66992 8.67 9.66992 8.5C9.66992 4.91 12.5799 2 16.1699 2C19.7599 2 22.6699 4.91 22.6699 8.5Z"
            fill="currentColor"
          />
          <path
            d="M6.25992 2H3.66992C3.11992 2 2.66992 2.45 2.66992 3V5.59C2.66992 6.48 3.74991 6.93 4.37991 6.3L6.96991 3.71001C7.58991 3.08001 7.14992 2 6.25992 2Z"
            fill="currentColor"
          />
          <path
            d="M19.0799 22H21.6699C22.2199 22 22.6699 21.55 22.6699 21V18.41C22.6699 17.52 21.5899 17.07 20.9599 17.7L18.3699 20.29C17.7499 20.92 18.1899 22 19.0799 22Z"
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
            d="M15.6699 15.5C15.6699 19.09 12.7599 22 9.16992 22C5.57992 22 2.66992 19.09 2.66992 15.5C2.66992 11.91 5.57992 9 9.16992 9C9.33992 9 9.51992 9.01 9.68992 9.02C12.8599 9.27 15.3999 11.81 15.6499 14.98C15.6599 15.15 15.6699 15.33 15.6699 15.5Z"
            fill="currentColor"
          />
          <path
            d="M22.67 8.5C22.67 11.76 20.27 14.45 17.15 14.92V14.86C16.84 10.98 13.69 7.83 9.78 7.52H9.75C10.22 4.4 12.91 2 16.17 2C19.76 2 22.67 4.91 22.67 8.5Z"
            fill="currentColor"
          />
          <path
            d="M6.25992 2H3.66992C3.11992 2 2.66992 2.45 2.66992 3V5.59C2.66992 6.48 3.74992 6.93 4.37992 6.3L6.96992 3.71C7.58992 3.08 7.14992 2 6.25992 2Z"
            fill="currentColor"
          />
          <path
            d="M19.0799 22H21.6699C22.2199 22 22.6699 21.55 22.6699 21V18.41C22.6699 17.52 21.5899 17.07 20.9599 17.7L18.3699 20.29C17.7499 20.92 18.1899 22 19.0799 22Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconTrade as IconComponent).keywords = [
  "trade",
  "sell",
  "merchandise",
  "barter",
  "trade in",
  "swap",
  "quid pro quo",
  "swop",
  "deal",
  "patronage",
];

export default IconTrade as IconComponent;
