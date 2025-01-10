import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconUsersGroupTwoRounded: FC<IconProps> = ({
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
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="12"
            cy="6.00049"
            r="4"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M18 9.00049C19.6569 9.00049 21 7.8812 21 6.50049C21 5.11978 19.6569 4.00049 18 4.00049"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M6 9.00049C4.34315 9.00049 3 7.8812 3 6.50049C3 5.11978 4.34315 4.00049 6 4.00049"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <ellipse
            cx="12"
            cy="17.0005"
            rx="6"
            ry="4"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M20 19.0005C21.7542 18.6158 23 17.6416 23 16.5005C23 15.3594 21.7542 14.3852 20 14.0005"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M4 19.0005C2.24575 18.6158 1 17.6416 1 16.5005C1 15.3594 2.24575 14.3852 4 14.0005"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
        </svg>
      ) : duotone ? (
        <svg
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.5 7.50049C15.5 9.43349 13.933 11.0005 12 11.0005C10.067 11.0005 8.5 9.43349 8.5 7.50049C8.5 5.56749 10.067 4.00049 12 4.00049C13.933 4.00049 15.5 5.56749 15.5 7.50049Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M19.5 7.50049C19.5 8.8812 18.3807 10.0005 17 10.0005C15.6193 10.0005 14.5 8.8812 14.5 7.50049C14.5 6.11978 15.6193 5.00049 17 5.00049C18.3807 5.00049 19.5 6.11978 19.5 7.50049Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M4.5 7.50049C4.5 8.8812 5.61929 10.0005 7 10.0005C8.38071 10.0005 9.5 8.8812 9.5 7.50049C9.5 6.11978 8.38071 5.00049 7 5.00049C5.61929 5.00049 4.5 6.11978 4.5 7.50049Z"
            fill="currentColor"
          />
          <path
            d="M18 16.5005C18 18.4335 15.3137 20.0005 12 20.0005C8.68629 20.0005 6 18.4335 6 16.5005C6 14.5675 8.68629 13.0005 12 13.0005C15.3137 13.0005 18 14.5675 18 16.5005Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M22 16.5005C22 17.8812 20.2091 19.0005 18 19.0005C15.7909 19.0005 14 17.8812 14 16.5005C14 15.1198 15.7909 14.0005 18 14.0005C20.2091 14.0005 22 15.1198 22 16.5005Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M2 16.5005C2 17.8812 3.79086 19.0005 6 19.0005C8.20914 19.0005 10 17.8812 10 16.5005C10 15.1198 8.20914 14.0005 6 14.0005C3.79086 14.0005 2 15.1198 2 16.5005Z"
            fill="currentColor"
          />
        </svg>
      ) : (
        <svg
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.5 7.50049C15.5 9.43349 13.933 11.0005 12 11.0005C10.067 11.0005 8.5 9.43349 8.5 7.50049C8.5 5.56749 10.067 4.00049 12 4.00049C13.933 4.00049 15.5 5.56749 15.5 7.50049Z"
            fill="currentColor"
          />
          <path
            d="M18 16.5005C18 18.4335 15.3137 20.0005 12 20.0005C8.68629 20.0005 6 18.4335 6 16.5005C6 14.5675 8.68629 13.0005 12 13.0005C15.3137 13.0005 18 14.5675 18 16.5005Z"
            fill="currentColor"
          />
          <path
            d="M7.12205 5.00049C7.29951 5.00049 7.47276 5.0179 7.64005 5.05105C7.23249 5.77494 7 6.61057 7 7.50049C7 8.36874 7.22131 9.18531 7.61059 9.89685C7.45245 9.92632 7.28912 9.94175 7.12205 9.94175C5.70763 9.94175 4.56102 8.83561 4.56102 7.47112C4.56102 6.10663 5.70763 5.00049 7.12205 5.00049Z"
            fill="currentColor"
          />
          <path
            d="M5.44734 18.9865C4.87942 18.3076 4.5 17.4745 4.5 16.5005C4.5 15.5562 4.85657 14.7445 5.39578 14.0772C3.4911 14.225 2 15.2667 2 16.5299C2 17.8049 3.5173 18.8543 5.44734 18.9865Z"
            fill="currentColor"
          />
          <path
            d="M16.9999 7.50049C16.9999 8.36874 16.7786 9.18531 16.3893 9.89685C16.5475 9.92632 16.7108 9.94175 16.8779 9.94175C18.2923 9.94175 19.4389 8.83561 19.4389 7.47112C19.4389 6.10663 18.2923 5.00049 16.8779 5.00049C16.7004 5.00049 16.5272 5.0179 16.3599 5.05105C16.7674 5.77494 16.9999 6.61057 16.9999 7.50049Z"
            fill="currentColor"
          />
          <path
            d="M18.5526 18.9865C20.4826 18.8543 21.9999 17.8049 21.9999 16.5299C21.9999 15.2667 20.5088 14.225 18.6041 14.0772C19.1433 14.7445 19.4999 15.5562 19.4999 16.5005C19.4999 17.4745 19.1205 18.3076 18.5526 18.9865Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconUsersGroupTwoRounded as IconComponentType).keywords = [
  "users",
  "group",
  "two",
  "rounded",
  "exploiter",
  "enjoyer",
  "drug user",
  "substance abuser",
  "abusers",
  "addicts",
  "adopters",
  "audience",
  "audiences",
  "aggroup",
  "common",
  "communal",
  "radical",
  "mathematical group",
  "cohort",
  "type",
  "class",
  "collective",
  "cardinal",
  "deuce",
  "ii",
  "twice",
  "two-fold",
  "twofold",
  "two-time",
  "twain",
  "2nd",
  "ringed",
  "ring-shaped",
  "annulate",
  "annular",
  "circular",
  "rotund",
  "bowfront",
  "prolate",
  "domed",
];

export default IconUsersGroupTwoRounded as IconComponentType;
