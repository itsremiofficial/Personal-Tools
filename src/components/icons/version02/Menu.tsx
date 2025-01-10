import { FC } from "react";

const IconMenu: FC<IconProps> = ({
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
            d="M18.21 8.31014C19.5686 8.31014 20.67 7.20876 20.67 5.85014C20.67 4.49152 19.5686 3.39014 18.21 3.39014C16.8514 3.39014 15.75 4.49152 15.75 5.85014C15.75 7.20876 16.8514 8.31014 18.21 8.31014Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.12993 8.31014C8.48855 8.31014 9.58992 7.20876 9.58992 5.85014C9.58992 4.49152 8.48855 3.39014 7.12993 3.39014C5.77131 3.39014 4.66992 4.49152 4.66992 5.85014C4.66992 7.20876 5.77131 8.31014 7.12993 8.31014Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M18.21 20.6099C19.5686 20.6099 20.67 19.5086 20.67 18.1499C20.67 16.7913 19.5686 15.6899 18.21 15.6899C16.8514 15.6899 15.75 16.7913 15.75 18.1499C15.75 19.5086 16.8514 20.6099 18.21 20.6099Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.12993 20.6099C8.48855 20.6099 9.58992 19.5086 9.58992 18.1499C9.58992 16.7913 8.48855 15.6899 7.12993 15.6899C5.77131 15.6899 4.66992 16.7913 4.66992 18.1499C4.66992 19.5086 5.77131 20.6099 7.12993 20.6099Z"
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
            opacity={duotone ? "0.4" : "1"}
            d="M18.21 8.81014C19.8448 8.81014 21.17 7.4849 21.17 5.85014C21.17 4.21537 19.8448 2.89014 18.21 2.89014C16.5752 2.89014 15.25 4.21537 15.25 5.85014C15.25 7.4849 16.5752 8.81014 18.21 8.81014Z"
            fill="currentColor"
          />
          <path
            d="M7.12992 8.81014C8.76468 8.81014 10.0899 7.4849 10.0899 5.85014C10.0899 4.21537 8.76468 2.89014 7.12992 2.89014C5.49516 2.89014 4.16992 4.21537 4.16992 5.85014C4.16992 7.4849 5.49516 8.81014 7.12992 8.81014Z"
            fill="currentColor"
          />
          <path
            d="M18.21 21.1099C19.8448 21.1099 21.17 19.7847 21.17 18.1499C21.17 16.5152 19.8448 15.1899 18.21 15.1899C16.5752 15.1899 15.25 16.5152 15.25 18.1499C15.25 19.7847 16.5752 21.1099 18.21 21.1099Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.12992 21.1099C8.76468 21.1099 10.0899 19.7847 10.0899 18.1499C10.0899 16.5152 8.76468 15.1899 7.12992 15.1899C5.49516 15.1899 4.16992 16.5152 4.16992 18.1499C4.16992 19.7847 5.49516 21.1099 7.12992 21.1099Z"
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
            d="M18.21 8.81014C19.8448 8.81014 21.17 7.4849 21.17 5.85014C21.17 4.21537 19.8448 2.89014 18.21 2.89014C16.5752 2.89014 15.25 4.21537 15.25 5.85014C15.25 7.4849 16.5752 8.81014 18.21 8.81014Z"
            fill="currentColor"
          />
          <path
            d="M7.12992 8.81014C8.76468 8.81014 10.0899 7.4849 10.0899 5.85014C10.0899 4.21537 8.76468 2.89014 7.12992 2.89014C5.49516 2.89014 4.16992 4.21537 4.16992 5.85014C4.16992 7.4849 5.49516 8.81014 7.12992 8.81014Z"
            fill="currentColor"
          />
          <path
            d="M18.21 21.1099C19.8448 21.1099 21.17 19.7847 21.17 18.1499C21.17 16.5152 19.8448 15.1899 18.21 15.1899C16.5752 15.1899 15.25 16.5152 15.25 18.1499C15.25 19.7847 16.5752 21.1099 18.21 21.1099Z"
            fill="currentColor"
          />
          <path
            d="M7.12992 21.1099C8.76468 21.1099 10.0899 19.7847 10.0899 18.1499C10.0899 16.5152 8.76468 15.1899 7.12992 15.1899C5.49516 15.1899 4.16992 16.5152 4.16992 18.1499C4.16992 19.7847 5.49516 21.1099 7.12992 21.1099Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMenu as IconComponent).keywords = [
  "menu",
  "bill of fare",
  "carte",
  "fare",
  "card",
  "carte du jour",
  "computer menu",
  "dinner",
  "meal",
  "list",
];

export default IconMenu as IconComponent;
