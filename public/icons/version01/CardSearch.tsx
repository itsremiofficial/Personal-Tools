import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconCardSearch: FC<IconProps> = ({
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
          <path
            d="M22 13.0005V12.0005C22 8.22925 22 6.34363 20.8284 5.17206C19.6569 4.00049 17.7712 4.00049 14 4.00049H10C6.22876 4.00049 4.34315 4.00049 3.17157 5.17206C2 6.34363 2 8.22925 2 12.0005C2 15.7717 2 17.6573 3.17157 18.8289C4.34315 20.0005 6.22876 20.0005 10 20.0005H13"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10 16.0005H6"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2 10.0005L22 10.0005"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <circle
            cx="18"
            cy="17.0005"
            r="3"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M20.5 19.5005L21.5 20.5005"
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
            opacity={duotone ? "0.5" : "1"}
            d="M10 20.0005H13.6266C12.9211 19.1066 12.5 17.9777 12.5 16.7505C12.5 13.851 14.8505 11.5005 17.75 11.5005C19.4947 11.5005 21.0406 12.3516 21.9953 13.6612C22 13.1521 22 12.6002 22 12.0005C22 11.5586 22 10.3925 21.9981 10.0005H2.00189C2 10.3925 2 11.5586 2 12.0005C2 15.7717 2 17.6573 3.17157 18.8289C4.34315 20.0005 6.22876 20.0005 10 20.0005Z"
            fill="currentColor"
          />
          <path
            d="M5.25 16.0005C5.25 15.5863 5.58579 15.2505 6 15.2505H10C10.4142 15.2505 10.75 15.5863 10.75 16.0005C10.75 16.4147 10.4142 16.7505 10 16.7505H6C5.58579 16.7505 5.25 16.4147 5.25 16.0005Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.75 14.5005C16.5074 14.5005 15.5 15.5078 15.5 16.7505C15.5 17.9931 16.5074 19.0005 17.75 19.0005C18.9926 19.0005 20 17.9931 20 16.7505C20 15.5078 18.9926 14.5005 17.75 14.5005ZM14 16.7505C14 14.6794 15.6789 13.0005 17.75 13.0005C19.8211 13.0005 21.5 14.6794 21.5 16.7505C21.5 17.5148 21.2713 18.2257 20.8787 18.8185L21.7803 19.7202C22.0732 20.0131 22.0732 20.4879 21.7803 20.7808C21.4874 21.0737 21.0126 21.0737 20.7197 20.7808L19.818 19.8792C19.2252 20.2718 18.5143 20.5005 17.75 20.5005C15.6789 20.5005 14 18.8216 14 16.7505Z"
            fill="currentColor"
          />
          <path
            d="M9.99484 4.00049H14.0052C17.7861 4.00049 19.6766 4.00049 20.8512 5.11627C21.6969 5.91964 21.9337 7.07556 22 9.00049V10.0005H2V9.00049C2.0663 7.07556 2.3031 5.91964 3.14881 5.11627C4.3234 4.00049 6.21388 4.00049 9.99484 4.00049Z"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.75 14.5005C16.5074 14.5005 15.5 15.5078 15.5 16.7505C15.5 17.9931 16.5074 19.0005 17.75 19.0005C18.9926 19.0005 20 17.9931 20 16.7505C20 15.5078 18.9926 14.5005 17.75 14.5005ZM14 16.7505C14 14.6794 15.6789 13.0005 17.75 13.0005C19.8211 13.0005 21.5 14.6794 21.5 16.7505C21.5 17.5148 21.2713 18.2257 20.8787 18.8185L21.7803 19.7202C22.0732 20.0131 22.0732 20.4879 21.7803 20.7808C21.4874 21.0737 21.0126 21.0737 20.7197 20.7808L19.818 19.8792C19.2252 20.2718 18.5143 20.5005 17.75 20.5005C15.6789 20.5005 14 18.8216 14 16.7505Z"
            fill="currentColor"
          />
          <path
            d="M10 4.00049H14C17.7712 4.00049 19.6569 4.00049 20.8284 5.17206C21.672 6.0156 21.9082 7.22931 21.9743 9.25049H2.02572C2.09185 7.22931 2.32803 6.0156 3.17157 5.17206C4.34315 4.00049 6.22876 4.00049 10 4.00049Z"
            fill="currentColor"
          />
          <path
            d="M10 20.0005H13.6266C12.9211 19.1066 12.5 17.9777 12.5 16.7505C12.5 13.851 14.8505 11.5005 17.75 11.5005C19.4947 11.5005 21.0406 12.3516 21.9953 13.6612C22 13.1521 22 12.6002 22 12.0005C22 11.5586 22 11.1425 21.9981 10.7505H2.00189C2 11.1425 2 11.5586 2 12.0005C2 15.7717 2 17.6573 3.17157 18.8289C4.34315 20.0005 6.22876 20.0005 10 20.0005Z"
            fill="currentColor"
          />
          <path
            d="M5.25 16.0005C5.25 15.5863 5.58579 15.2505 6 15.2505H10C10.4142 15.2505 10.75 15.5863 10.75 16.0005C10.75 16.4147 10.4142 16.7505 10 16.7505H6C5.58579 16.7505 5.25 16.4147 5.25 16.0005Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCardSearch as IconComponentType).keywords = [
  "card",
  "search",
  "scorecard",
  "batting order",
  "identity card",
  "visiting card",
  "calling card",
  "lineup",
  "poster",
  "placard",
  "tease",
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

export default IconCardSearch as IconComponentType;
