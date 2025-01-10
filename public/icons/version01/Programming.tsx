import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconProgramming: FC<IconProps> = ({
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
            opacity={duotone ? "0.5" : "1"}
            d="M2 12.0004C2 7.28632 2 4.9293 3.46447 3.46483C4.92893 2.00037 7.28595 2.00037 12 2.00037C16.714 2.00037 19.0711 2.00037 20.5355 3.46483C22 4.9293 22 7.28632 22 12.0004C22 16.7144 22 19.0714 20.5355 20.5359C19.0711 22.0004 16.714 22.0004 12 22.0004C7.28595 22.0004 4.92893 22.0004 3.46447 20.5359C2 19.0714 2 16.7144 2 12.0004Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M17 15.0004H14.5H12"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M7 10.0004L7.2344 10.1957C8.51608 11.2638 9.15693 11.7978 9.15693 12.5004C9.15693 13.2029 8.51608 13.737 7.2344 14.805L7 15.0004"
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
            d="M2 12.0004C2 7.28632 2 4.9293 3.46447 3.46483C4.92893 2.00037 7.28595 2.00037 12 2.00037C16.714 2.00037 19.0711 2.00037 20.5355 3.46483C22 4.9293 22 7.28632 22 12.0004C22 16.7144 22 19.0714 20.5355 20.5359C19.0711 22.0004 16.714 22.0004 12 22.0004C7.28595 22.0004 4.92893 22.0004 3.46447 20.5359C2 19.0714 2 16.7144 2 12.0004Z"
            fill="currentColor"
          />
          <path
            d="M6.42385 9.52025C6.68903 9.20204 7.16195 9.15905 7.48016 9.42422L7.75658 9.65457L7.75661 9.65459C8.36154 10.1587 8.87654 10.5878 9.23295 10.9825C9.61151 11.4017 9.90694 11.8838 9.90694 12.5004C9.90694 13.117 9.61151 13.5991 9.23295 14.0183C8.87653 14.413 8.36153 14.8421 7.75658 15.3462L7.48016 15.5766C7.16195 15.8417 6.68903 15.7987 6.42385 15.4805C6.15868 15.1623 6.20167 14.6894 6.51988 14.4242L6.75428 14.2289C7.41285 13.6801 7.84348 13.3189 8.11968 13.013C8.38196 12.7226 8.40694 12.5864 8.40694 12.5004C8.40694 12.4144 8.38196 12.2782 8.11968 11.9878C7.84348 11.6819 7.41285 11.3207 6.75429 10.7719L6.51988 10.5766C6.20167 10.3114 6.15868 9.83845 6.42385 9.52025Z"
            fill="currentColor"
          />
          <path
            d="M17.75 15.0004C17.75 15.4146 17.4142 15.7504 17 15.7504H12C11.5858 15.7504 11.25 15.4146 11.25 15.0004C11.25 14.5862 11.5858 14.2504 12 14.2504H17C17.4142 14.2504 17.75 14.5862 17.75 15.0004Z"
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
            d="M3.46447 3.46483C2 4.9293 2 7.28632 2 12.0004C2 16.7144 2 19.0714 3.46447 20.5359C4.92893 22.0004 7.28595 22.0004 12 22.0004C16.714 22.0004 19.0711 22.0004 20.5355 20.5359C22 19.0714 22 16.7144 22 12.0004C22 7.28632 22 4.9293 20.5355 3.46483C19.0711 2.00037 16.714 2.00037 12 2.00037C7.28595 2.00037 4.92893 2.00037 3.46447 3.46483ZM6.42385 9.52025C6.68903 9.20204 7.16195 9.15905 7.48016 9.42422L7.75658 9.65457C8.36153 10.1586 8.87653 10.5878 9.23295 10.9825C9.61151 11.4017 9.90694 11.8838 9.90694 12.5004C9.90694 13.117 9.61151 13.5991 9.23295 14.0183C8.87653 14.413 8.36153 14.8421 7.75658 15.3462L7.48016 15.5766C7.16195 15.8417 6.68903 15.7987 6.42385 15.4805C6.15868 15.1623 6.20167 14.6894 6.51988 14.4242L6.75428 14.2289C7.41285 13.6801 7.84348 13.3189 8.11968 13.013C8.38196 12.7226 8.40694 12.5864 8.40694 12.5004C8.40694 12.4144 8.38196 12.2782 8.11968 11.9878C7.84348 11.6819 7.41285 11.3207 6.75429 10.7719L6.51988 10.5766C6.20167 10.3114 6.15868 9.83845 6.42385 9.52025ZM17.75 15.0004C17.75 15.4146 17.4142 15.7504 17 15.7504H12C11.5858 15.7504 11.25 15.4146 11.25 15.0004C11.25 14.5862 11.5858 14.2504 12 14.2504H17C17.4142 14.2504 17.75 14.5862 17.75 15.0004Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconProgramming as IconComponentType).keywords = [
  "programming",
  "computer programming",
  "scheduling",
  "airtime",
  "television",
  "broadcasting",
  "plan",
  "software",
  "programmer",
  "programmatic",
];

export default IconProgramming as IconComponentType;
