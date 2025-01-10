import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconShieldSearch: FC<IconProps> = ({
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
            d="M21.2601 10.5501V7.12006C21.2601 5.89006 20.3201 4.53006 19.1701 4.10006L14.1801 2.23006C13.3501 1.92006 11.9901 1.92006 11.1601 2.23006L6.17008 4.11006C5.02008 4.54006 4.08008 5.90006 4.08008 7.12006V14.5501C4.08008 15.7301 4.86008 17.2801 5.81008 17.9901L10.1101 21.2001C10.8101 21.7401 11.7401 22.0001 12.6701 22.0001"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.6699 20C18.8791 20 20.6699 18.2091 20.6699 16C20.6699 13.7909 18.8791 12 16.6699 12C14.4608 12 12.6699 13.7909 12.6699 16C12.6699 18.2091 14.4608 20 16.6699 20Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21.6654 21H21.6744"
            stroke="currentColor"
            strokeWidth="2"
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
            d="M10.6297 2.10989L5.12973 4.16989C4.07973 4.56989 3.21973 5.80989 3.21973 6.93989V15.0399C3.21973 15.8499 3.74973 16.9199 4.39973 17.3999L9.89973 21.5099C10.8697 22.2399 12.4597 22.2399 13.4297 21.5099L18.9297 17.3999C19.5797 16.9099 20.1097 15.8499 20.1097 15.0399V6.93989C20.1097 5.81989 19.2497 4.56988 18.1997 4.17988L12.6997 2.11989C12.1397 1.89989 11.1997 1.89989 10.6297 2.10989Z"
            fill="currentColor"
          />
          <path
            d="M16.6699 11.5098C14.1899 11.5098 12.1699 13.5298 12.1699 16.0098C12.1699 18.4898 14.1899 20.5098 16.6699 20.5098C19.1499 20.5098 21.1699 18.4898 21.1699 16.0098C21.1699 13.5198 19.1499 11.5098 16.6699 11.5098Z"
            fill="currentColor"
          />
          <path
            d="M21.6699 21.9999C21.3999 21.9999 21.1499 21.8899 20.9599 21.7099C20.9199 21.6599 20.8699 21.6099 20.8399 21.5499C20.7999 21.4999 20.7699 21.4399 20.7499 21.3799C20.7199 21.3199 20.6999 21.2599 20.6899 21.1999C20.6799 21.1299 20.6699 21.0699 20.6699 20.9999C20.6699 20.8699 20.6999 20.7399 20.7499 20.6199C20.7999 20.4899 20.8699 20.3899 20.9599 20.2899C21.1899 20.0599 21.5399 19.9499 21.8599 20.0199C21.9299 20.0299 21.9899 20.0499 22.0499 20.0799C22.1099 20.0999 22.1699 20.1299 22.2199 20.1699C22.2799 20.1999 22.3299 20.2499 22.3799 20.2899C22.4699 20.3899 22.5399 20.4899 22.5899 20.6199C22.6399 20.7399 22.6699 20.8699 22.6699 20.9999C22.6699 21.2599 22.5599 21.5199 22.3799 21.7099C22.3299 21.7499 22.2799 21.7899 22.2199 21.8299C22.1699 21.8699 22.1099 21.8999 22.0499 21.9199C21.9899 21.9499 21.9299 21.9699 21.8599 21.9799C21.7999 21.9899 21.7299 21.9999 21.6699 21.9999Z"
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
            d="M20.12 6.94014V9.45014C20.12 10.1601 19.4 10.6201 18.73 10.3701C17.89 10.0601 16.96 9.94014 15.98 10.0401C13.6 10.3001 11.16 12.5901 10.76 14.9601C10.43 16.9301 11.06 18.7701 12.27 20.0701C12.82 20.6701 12.45 21.6401 11.64 21.7301C10.95 21.8101 10.27 21.7901 9.88996 21.5101L4.38996 17.4001C3.73996 16.9101 3.20996 15.8501 3.20996 15.0301V6.94014C3.20996 5.81014 4.06996 4.57014 5.11996 4.17014L10.62 2.11014C11.19 1.90014 12.13 1.90014 12.7 2.11014L18.2 4.17014C19.26 4.57014 20.12 5.81014 20.12 6.94014Z"
            fill="currentColor"
          />
          <path
            d="M16.6699 11.5098C14.1899 11.5098 12.1699 13.5298 12.1699 16.0098C12.1699 18.4898 14.1899 20.5098 16.6699 20.5098C19.1499 20.5098 21.1699 18.4898 21.1699 16.0098C21.1699 13.5198 19.1499 11.5098 16.6699 11.5098Z"
            fill="currentColor"
          />
          <path
            d="M21.6699 21.9999C21.3999 21.9999 21.1499 21.8899 20.9599 21.7099C20.9199 21.6599 20.8699 21.6099 20.8399 21.5499C20.7999 21.4999 20.7699 21.4399 20.7499 21.3799C20.7199 21.3199 20.6999 21.2599 20.6899 21.1999C20.6799 21.1299 20.6699 21.0699 20.6699 20.9999C20.6699 20.8699 20.6999 20.7399 20.7499 20.6199C20.7999 20.4899 20.8699 20.3899 20.9599 20.2899C21.1899 20.0599 21.5399 19.9499 21.8599 20.0199C21.9299 20.0299 21.9899 20.0499 22.0499 20.0799C22.1099 20.0999 22.1699 20.1299 22.2199 20.1699C22.2799 20.1999 22.3299 20.2499 22.3799 20.2899C22.4699 20.3899 22.5399 20.4899 22.5899 20.6199C22.6399 20.7399 22.6699 20.8699 22.6699 20.9999C22.6699 21.2599 22.5599 21.5199 22.3799 21.7099C22.3299 21.7499 22.2799 21.7899 22.2199 21.8299C22.1699 21.8699 22.1099 21.8999 22.0499 21.9199C21.9899 21.9499 21.9299 21.9699 21.8599 21.9799C21.7999 21.9899 21.7299 21.9999 21.6699 21.9999Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconShieldSearch as IconComponentType).keywords = [
  "shield",
  "search",
  "buckler",
  "screen",
  "harbor",
  "harbour",
  "armoured",
  "armor",
  "breastplate",
  "ribbon",
  "visor",
  "seek",
  "look for",
  "explore",
  "lookup",
  "research",
  "look",
  "hunting",
  "hunt",
  "seeking",
];

export default IconShieldSearch as IconComponentType;
