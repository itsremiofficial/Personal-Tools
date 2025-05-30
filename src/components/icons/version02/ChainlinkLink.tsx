import { FC } from "react";

const IconChainlinkLink: FC<IconProps> = ({
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
            d="M3.66992 8.18V15.83C3.66992 16.48 4.12992 17.26 4.69992 17.58L11.6999 21.47C12.2299 21.77 13.1099 21.77 13.6399 21.47L20.6399 17.58C21.2099 17.27 21.6699 16.48 21.6699 15.83V8.18C21.6699 7.53 21.2099 6.75 20.6399 6.43L13.6399 2.54C13.1099 2.24 12.2299 2.24 11.6999 2.54L4.69992 6.43C4.12992 6.74 3.66992 7.53 3.66992 8.18Z"
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
          <path d="M24.6699 0H0.669922V24H24.6699V0Z" fill="none" />
          <path
            d="M3.66992 8.18V15.83C3.66992 16.48 4.12992 17.26 4.69992 17.58L11.6999 21.47C12.2299 21.77 13.1099 21.77 13.6399 21.47L20.6399 17.58C21.2099 17.27 21.6699 16.48 21.6699 15.83V8.18C21.6699 7.53 21.2099 6.75 20.6399 6.43L13.6399 2.54C13.1099 2.24 12.2299 2.24 11.6999 2.54L4.69992 6.43C4.12992 6.74 3.66992 7.53 3.66992 8.18Z"
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
            d="M3.66992 8.18V15.83C3.66992 16.48 4.12992 17.26 4.69992 17.58L11.6999 21.47C12.2299 21.77 13.1099 21.77 13.6399 21.47L20.6399 17.58C21.2099 17.27 21.6699 16.48 21.6699 15.83V8.18C21.6699 7.53 21.2099 6.75 20.6399 6.43L13.6399 2.54C13.1099 2.24 12.2299 2.24 11.6999 2.54L4.69992 6.43C4.12992 6.74 3.66992 7.53 3.66992 8.18Z"
            fill="none"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconChainlinkLink as IconComponent).keywords = [
  "chainlink",
  "link",
  "chainwork",
  "linkwork",
  "chain mail",
  "wire",
  "wire cloth",
  "concertina",
  "mosquito wire",
  "concertina wire",
  "slackwire",
  "linkup",
  "connection",
  "nexus",
  "connexion",
  "connectedness",
  "connect",
  "tie-in",
  "unite",
  "associate",
];

export default IconChainlinkLink as IconComponent;
