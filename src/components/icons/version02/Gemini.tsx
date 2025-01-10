import { FC } from "react";

const IconGemini: FC<IconProps> = ({
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
            d="M2.66992 2C8.82992 5.69 16.5099 5.69 22.6699 2"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.66992 21.9999C8.82992 18.3099 16.5099 18.3099 22.6699 21.9999"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M5.96997 3.58008L6.09997 3.82007C8.83997 9.03007 8.78997 15.25 5.99997 20.41"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19.34 20.41C16.56 15.25 16.51 9.03007 19.24 3.82007L19.37 3.58008"
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
            d="M19.9 4.18004L20.03 3.94005C20.18 3.67005 20.14 3.33008 19.94 3.09008C19.74 2.85008 19.41 2.77006 19.11 2.88006C14.96 4.40006 10.38 4.40006 6.22999 2.88006C5.93999 2.77006 5.60999 2.86008 5.39999 3.09008C5.19999 3.33008 5.15999 3.66005 5.30999 3.94005L5.43999 4.17003C8.05999 9.16003 8.02999 15.09 5.33999 20.05C5.18999 20.32 5.22999 20.6601 5.42999 20.9001C5.62999 21.1401 5.95999 21.22 6.24999 21.11C10.38 19.6 14.94 19.6 19.08 21.11C19.16 21.14 19.25 21.16 19.34 21.16C19.55 21.16 19.76 21.0701 19.91 20.9001C20.11 20.6601 20.15 20.33 20 20.05C17.32 15.09 17.28 9.16004 19.9 4.18004Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19.37 4.33008C19.06 4.33008 18.78 4.14009 18.67 3.84009C18.53 3.45009 18.73 3.02007 19.11 2.88007C20.19 2.48007 21.25 1.97005 22.29 1.36005C22.65 1.15005 23.11 1.27006 23.32 1.62006C23.53 1.98006 23.41 2.44009 23.06 2.65009C21.95 3.31009 20.8 3.86004 19.64 4.29004C19.54 4.32004 19.46 4.33008 19.37 4.33008Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M5.9698 4.33016C5.8798 4.33016 5.7998 4.32017 5.7098 4.28017C4.5498 3.85017 3.3998 3.30015 2.2898 2.64015C1.9298 2.43015 1.8198 1.97012 2.0298 1.61012C2.2398 1.25012 2.6998 1.14011 3.0598 1.35011C4.0898 1.96011 5.1598 2.47013 6.2398 2.87013C6.6298 3.01013 6.8298 3.45016 6.6798 3.83016C6.5598 4.14016 6.2698 4.33016 5.9698 4.33016Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.6699 22.7499C22.5399 22.7499 22.4099 22.7199 22.2899 22.6399C21.2599 22.0299 20.1899 21.5099 19.0899 21.1099C18.6999 20.9699 18.4999 20.5399 18.6399 20.1499C18.7799 19.7599 19.2099 19.5599 19.5999 19.6999C20.7899 20.1299 21.9499 20.6899 23.0599 21.3499C23.4199 21.5599 23.5299 22.0199 23.3199 22.3799C23.1699 22.6199 22.9199 22.7499 22.6699 22.7499Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2.6698 22.7499C2.4198 22.7499 2.1698 22.6199 2.0298 22.3799C1.8198 22.0199 1.9298 21.5599 2.2898 21.3499C3.3998 20.6899 4.55981 20.1299 5.74981 19.6999C6.13981 19.5599 6.56981 19.7599 6.70981 20.1499C6.8498 20.5399 6.6498 20.9699 6.2598 21.1099C5.1598 21.5099 4.0798 22.0299 3.0598 22.6399C2.9298 22.7199 2.7998 22.7499 2.6698 22.7499Z"
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
            d="M19.9 4.18006L20.03 3.94006C20.18 3.67006 20.14 3.33006 19.94 3.09006C19.74 2.85006 19.41 2.77006 19.11 2.88006C14.96 4.40006 10.38 4.40006 6.22999 2.88006C5.92999 2.77006 5.60999 2.85006 5.39999 3.09006C5.19999 3.33006 5.15999 3.66006 5.30999 3.94006L5.43999 4.17006C8.05999 9.16006 8.02999 15.0901 5.33999 20.0501C5.18999 20.3201 5.22999 20.6601 5.42999 20.9001C5.62999 21.1401 5.95999 21.2201 6.24999 21.1101C10.38 19.6001 14.94 19.6001 19.08 21.1101C19.16 21.1401 19.25 21.1601 19.34 21.1601C19.55 21.1601 19.76 21.0701 19.91 20.9001C20.11 20.6601 20.15 20.3301 20 20.0501C17.32 15.0901 17.28 9.16006 19.9 4.18006Z"
            fill="currentColor"
          />
          <path
            d="M19.37 4.33005C19.06 4.33005 18.78 4.14005 18.67 3.84005C18.53 3.45005 18.73 3.02005 19.11 2.88005C20.19 2.48005 21.25 1.97005 22.29 1.36005C22.65 1.15005 23.11 1.27005 23.32 1.62005C23.53 1.98005 23.41 2.44005 23.06 2.65005C21.95 3.31005 20.8 3.86005 19.64 4.29005C19.54 4.32005 19.46 4.33005 19.37 4.33005Z"
            fill="currentColor"
          />
          <path
            d="M5.96985 4.32988C5.87985 4.32988 5.79985 4.31988 5.70985 4.27988C4.54985 3.85988 3.39985 3.29988 2.28985 2.63988C1.92985 2.42988 1.80985 1.96988 2.02985 1.61988C2.23985 1.25988 2.69985 1.14988 3.05985 1.35988C4.08985 1.96988 5.15985 2.47988 6.23985 2.87988C6.61985 3.01988 6.81985 3.44988 6.66985 3.83988C6.55985 4.13988 6.26985 4.32988 5.96985 4.32988Z"
            fill="currentColor"
          />
          <path
            d="M22.6699 22.7499C22.5399 22.7499 22.4099 22.7199 22.2899 22.6399C21.2599 22.0299 20.1899 21.5099 19.0899 21.1099C18.6999 20.9699 18.4999 20.5399 18.6399 20.1499C18.7799 19.7599 19.2099 19.5599 19.5999 19.6999C20.7899 20.1299 21.9499 20.6899 23.0599 21.3499C23.4199 21.5599 23.5299 22.0199 23.3199 22.3799C23.1699 22.6199 22.9199 22.7499 22.6699 22.7499Z"
            fill="currentColor"
          />
          <path
            d="M2.6698 22.7499C2.4198 22.7499 2.1698 22.6199 2.0298 22.3799C1.8198 22.0199 1.9298 21.5599 2.2898 21.3499C3.3998 20.6899 4.5598 20.1299 5.7498 19.6999C6.1398 19.5599 6.5698 19.7599 6.7098 20.1499C6.8498 20.5399 6.6498 20.9699 6.2598 21.1099C5.1598 21.5099 4.0798 22.0299 3.0598 22.6399C2.9298 22.7199 2.7998 22.7499 2.6698 22.7499Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconGemini as IconComponent).keywords = [
  "gemini",
  "gemini the twins",
  "telescope",
  "double",
  "titan",
  "orion",
  "virgo",
  "scorpio",
  "aquarius",
  "capricorn",
];

export default IconGemini as IconComponent;
