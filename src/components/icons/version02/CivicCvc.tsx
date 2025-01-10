import { FC } from "react";

const IconCivicCvc: FC<IconProps> = ({
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
            d="M14.97 10.13C15.25 11.23 14.76 12.25 13.92 12.77V14.75C13.92 15.44 13.36 16 12.67 16C11.98 16 11.42 15.44 11.42 14.75V12.77C10.74 12.35 10.29 11.6 10.29 10.75C10.29 9.23 11.73 8.05 13.31 8.47C14.11 8.68 14.76 9.33 14.97 10.13Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
          />
          <path
            d="M22.2199 9.03C20.9499 4.96 17.1599 2 12.6699 2C7.14992 2 2.66992 6.48 2.66992 12C2.66992 17.52 7.14992 22 12.6699 22C17.1399 22 20.9299 19.06 22.2099 15.01"
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
            opacity={duotone ? "0.58" : "1"}
            d="M24.6699 0H0.669922V24H24.6699V0Z"
            fill="none"
          />
          <path
            d="M14.97 10.1301C15.25 11.2301 14.76 12.2501 13.92 12.7701V14.7501C13.92 15.4401 13.36 16.0001 12.67 16.0001C11.98 16.0001 11.42 15.4401 11.42 14.7501V12.7701C10.74 12.3501 10.29 11.6001 10.29 10.7501C10.29 9.23006 11.73 8.05006 13.31 8.47006C14.11 8.68006 14.76 9.33006 14.97 10.1301Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.6699 22.75C6.73992 22.75 1.91992 17.93 1.91992 12C1.91992 6.07 6.73992 1.25 12.6699 1.25C17.4099 1.25 21.5299 4.29 22.9399 8.8C23.0599 9.2 22.8399 9.62 22.4499 9.74C22.0499 9.86 21.6299 9.64 21.5099 9.25C20.2999 5.36 16.7499 2.75 12.6799 2.75C7.57992 2.75 3.42992 6.9 3.42992 12C3.42992 17.1 7.57992 21.25 12.6799 21.25C16.7399 21.25 20.2899 18.65 21.4999 14.78C21.6199 14.38 22.0399 14.17 22.4399 14.29C22.8399 14.41 23.0499 14.84 22.9299 15.23C21.5099 19.73 17.3899 22.75 12.6699 22.75Z"
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
            d="M14.97 10.13C15.25 11.23 14.76 12.25 13.92 12.77V14.75C13.92 15.44 13.36 16 12.67 16C11.98 16 11.42 15.44 11.42 14.75V12.77C10.74 12.35 10.29 11.6 10.29 10.75C10.29 9.23 11.73 8.05 13.31 8.47C14.11 8.68 14.76 9.33 14.97 10.13Z"
            fill="none"
          />
          <path
            d="M12.6699 22.75C6.73992 22.75 1.91992 17.93 1.91992 12C1.91992 6.07 6.73992 1.25 12.6699 1.25C17.4099 1.25 21.5299 4.29 22.9399 8.8C23.0599 9.2 22.8399 9.62001 22.4499 9.74001C22.0499 9.86001 21.6299 9.64 21.5099 9.25C20.2999 5.36 16.7499 2.75 12.6799 2.75C7.57992 2.75 3.42992 6.9 3.42992 12C3.42992 17.1 7.57992 21.25 12.6799 21.25C16.7399 21.25 20.2899 18.65 21.4999 14.78C21.6199 14.38 22.0399 14.17 22.4399 14.29C22.8399 14.41 23.0499 14.84 22.9299 15.23C21.5099 19.73 17.3899 22.75 12.6699 22.75Z"
            fill="none"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCivicCvc as IconComponent).keywords = [
  "civic",
  "cvc",
  "civil",
  "citizenship",
  "citizenry",
  "citizen",
  "bourgeois",
  "national",
  "communal",
  "municipal",
  "political",
  "ccv",
  "vcc",
  "iaq",
  "hvac",
  "cmc",
  "cac",
  "bvc",
  "insertion",
  "indirect",
];

export default IconCivicCvc as IconComponent;
