import { FC } from "react";

const IconSimcard: FC<IconProps> = ({
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
            d="M20.2099 6.53998L17.1399 3.46997C16.1999 2.52997 14.9299 2.01001 13.5999 2.01001H8.66992C5.66992 2.01001 3.66992 4.01001 3.66992 7.01001V17.01C3.66992 20.01 5.66992 22.01 8.66992 22.01H16.6699C19.6699 22.01 21.6699 20.01 21.6699 17.01V10.08C21.6699 8.74002 21.1399 7.46998 20.2099 6.53998Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M10.1699 14L8.16992 16L10.1699 18"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.1699 14L17.1699 16L15.1699 18"
              stroke="currentColor"
              strokeWidth={width}
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
            d="M20.2099 6.54001L17.1399 3.47C16.1999 2.53 14.9299 2.01001 13.5999 2.01001H8.66992C5.66992 2.01001 3.66992 4.01001 3.66992 7.01001V17.01C3.66992 20.01 5.66992 22.01 8.66992 22.01H16.6699C19.6699 22.01 21.6699 20.01 21.6699 17.01V10.08C21.6699 8.73999 21.1399 7.47001 20.2099 6.54001Z"
            fill="currentColor"
          />
          <path
            d="M10.1699 18.7499C9.97986 18.7499 9.78986 18.6799 9.63986 18.5299L7.63986 16.5299C7.34986 16.2399 7.34986 15.7599 7.63986 15.4699L9.63986 13.4699C9.92986 13.1799 10.4099 13.1799 10.6999 13.4699C10.9899 13.7599 10.9899 14.2399 10.6999 14.5299L9.22986 15.9999L10.6999 17.4699C10.9899 17.7599 10.9899 18.2399 10.6999 18.5299C10.5499 18.6799 10.3599 18.7499 10.1699 18.7499Z"
            fill="currentColor"
          />
          <path
            d="M15.1699 18.7499C14.9799 18.7499 14.7899 18.6799 14.6399 18.5299C14.3499 18.2399 14.3499 17.7599 14.6399 17.4699L16.1099 15.9999L14.6399 14.5299C14.3499 14.2399 14.3499 13.7599 14.6399 13.4699C14.9299 13.1799 15.4099 13.1799 15.6999 13.4699L17.6999 15.4699C17.9899 15.7599 17.9899 16.2399 17.6999 16.5299L15.6999 18.5299C15.5499 18.6799 15.3599 18.7499 15.1699 18.7499Z"
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
            d="M20.2099 6.54L17.1399 3.47C16.1999 2.53 14.9299 2 13.5999 2H8.66992C5.66992 2 3.66992 4 3.66992 7V17C3.66992 20 5.66992 22 8.66992 22H16.6699C19.6699 22 21.6699 20 21.6699 17V10.07C21.6699 8.74 21.1399 7.47 20.2099 6.54ZM10.6999 17.47C10.9899 17.76 10.9899 18.24 10.6999 18.53C10.5499 18.68 10.3599 18.75 10.1699 18.75C9.97992 18.75 9.78992 18.68 9.63992 18.53L7.63992 16.53C7.34992 16.24 7.34992 15.76 7.63992 15.47L9.63992 13.47C9.92992 13.18 10.4099 13.18 10.6999 13.47C10.9899 13.76 10.9899 14.24 10.6999 14.53L9.22992 16L10.6999 17.47ZM17.6999 16.53L15.6999 18.53C15.5499 18.68 15.3599 18.75 15.1699 18.75C14.9799 18.75 14.7899 18.68 14.6399 18.53C14.3499 18.24 14.3499 17.76 14.6399 17.47L16.1099 16L14.6399 14.53C14.3499 14.24 14.3499 13.76 14.6399 13.47C14.9299 13.18 15.4099 13.18 15.6999 13.47L17.6999 15.47C17.9899 15.76 17.9899 16.24 17.6999 16.53Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSimcard as IconComponent).keywords = ["simcard"];

export default IconSimcard as IconComponent;
