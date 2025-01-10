import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconCardSlash: FC<IconProps> = ({
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
            d="M2.66992 8.5H15.9099"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.66992 16.5H7.95992"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M11.6699 16.5H15.1699"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.65039 20.5H18.2304C21.7904 20.5 22.6704 19.62 22.6704 16.11V6.89001"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.6599 3.75C20.0399 3.57 19.2399 3.5 18.2299 3.5H7.10992C3.55992 3.5 2.66992 4.38 2.66992 7.89V16.1C2.66992 18.44 3.05992 19.61 4.37992 20.13"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.6699 2L2.66992 22"
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
            d="M22.6703 9V16.46C22.6703 18.75 20.8103 20.6 18.5203 20.6H7.07031L10.6403 17.03L11.9203 15.75L18.6703 9H22.6703Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.6699 9L4.66992 20C3.46992 19.28 2.66992 17.96 2.66992 16.46V9H15.6699Z"
            fill="currentColor"
          />
          <path
            d="M22.6699 7.54003V9.00003H18.6699L22.1399 5.53003C22.4799 6.12003 22.6699 6.81003 22.6699 7.54003Z"
            fill="currentColor"
          />
          <path
            d="M20.6699 4.00002L15.6699 9.00002H2.66992V7.54002C2.66992 5.25002 4.52992 3.40002 6.81992 3.40002H18.5199C19.3099 3.40002 20.0399 3.62002 20.6699 4.00002Z"
            fill="currentColor"
          />
          <path
            d="M8.87992 15.79L7.41992 17.25H6.66992C6.25992 17.25 5.91992 16.91 5.91992 16.5C5.91992 16.09 6.25992 15.75 6.66992 15.75H8.66992C8.73992 15.75 8.80992 15.76 8.87992 15.79Z"
            fill="currentColor"
          />
          <path
            d="M15.9196 16.5C15.9196 16.91 15.5796 17.25 15.1696 17.25H11.1696C10.9696 17.25 10.7796 17.16 10.6396 17.03L11.9196 15.75H15.1696C15.5796 15.75 15.9196 16.09 15.9196 16.5Z"
            fill="currentColor"
          />
          <path
            d="M22.4398 2.23C22.1398 1.93 21.6498 1.93 21.3498 2.23L2.8998 20.69C2.5998 20.99 2.5998 21.48 2.8998 21.78C3.0498 21.92 3.2398 22 3.4398 22C3.6398 22 3.8298 21.92 3.9798 21.77L22.4398 3.31C22.7498 3.01 22.7498 2.53 22.4398 2.23Z"
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
            d="M19.9419 3.65002L14.8419 8.75002H3.87188C3.21188 8.75002 2.67188 8.21002 2.67188 7.55002V7.54002C2.67188 5.25002 4.52187 3.40002 6.81187 3.40002H18.5219C19.0219 3.40002 19.5019 3.49002 19.9419 3.65002Z"
            fill="currentColor"
          />
          <path
            d="M13.3419 10.25L7.84188 15.75H6.67188C6.26187 15.75 5.92188 16.09 5.92188 16.5C5.92188 16.81 6.12188 17.09 6.40188 17.19L4.05188 19.54C3.20188 18.79 2.67188 17.69 2.67188 16.46V11.45C2.67188 10.79 3.21188 10.25 3.87188 10.25H13.3419Z"
            fill="currentColor"
          />
          <path
            d="M22.6716 11V16.46C22.6716 18.75 20.8216 20.6 18.5316 20.6H9.48155C8.59155 20.6 8.14155 19.52 8.77155 18.89L10.1216 17.54C10.3116 17.35 10.5616 17.25 10.8316 17.25H15.1716C15.5816 17.25 15.9216 16.91 15.9216 16.5C15.9216 16.09 15.5816 15.75 15.1716 15.75H14.3316C13.4416 15.75 12.9915 14.67 13.6216 14.04L17.0816 10.58C17.4616 10.21 17.9716 10 18.5016 10H21.6716C22.2216 10 22.6716 10.45 22.6716 11Z"
            fill="currentColor"
          />
          <path
            d="M22.4418 2.23C22.1418 1.93 21.6518 1.93 21.3518 2.23L2.90176 20.69C2.60176 20.99 2.60176 21.48 2.90176 21.78C3.05176 21.92 3.24176 22 3.44176 22C3.64176 22 3.83176 21.92 3.98176 21.77L22.4418 3.31C22.7518 3.01 22.7518 2.53 22.4418 2.23Z"
            fill="currentColor"
          />
          <path
            d="M22.4414 3.31006L21.2814 4.47006L17.0014 8.75006L3.98145 21.7701C3.83145 21.9201 3.64145 22.0001 3.44145 22.0001C3.24145 22.0001 3.05145 21.9201 2.90145 21.7701C2.59145 21.4701 2.59145 20.9901 2.90145 20.6901L4.05145 19.5401L6.40145 17.1901L19.9414 3.65006L21.3614 2.23006C21.6614 1.92006 22.1414 1.92006 22.4414 2.23006C22.7514 2.53006 22.7514 3.01006 22.4414 3.31006Z"
            fill="currentColor"
          />
          <path
            d="M22.6714 7.41002C22.6714 6.52002 21.5914 6.07002 20.9614 6.70002L20.6714 7.00002L20.3814 7.29002C19.7514 7.92002 20.1914 9.00002 21.0814 9.00002H21.6714C22.2214 9.00002 22.6714 8.55002 22.6714 8.00002V7.41002Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCardSlash as IconComponentType).keywords = [
  "card",
  "slash",
  "scorecard",
  "batting order",
  "identity card",
  "visiting card",
  "calling card",
  "lineup",
  "poster",
  "placard",
  "tease",
  "flog",
  "gash",
  "lash",
  "cut",
  "slice",
  "whip",
  "thrash",
  "trounce",
  "thrash about",
];

export default IconCardSlash as IconComponentType;
