import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconDocuments: FC<IconProps> = ({
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
            d="M5 8.00049C5 5.17206 5 3.75785 5.87868 2.87917C6.75736 2.00049 8.17157 2.00049 11 2.00049H13C15.8284 2.00049 17.2426 2.00049 18.1213 2.87917C19 3.75785 19 5.17206 19 8.00049V16.0005C19 18.8289 19 20.2431 18.1213 21.1218C17.2426 22.0005 15.8284 22.0005 13 22.0005H11C8.17157 22.0005 6.75736 22.0005 5.87868 21.1218C5 20.2431 5 18.8289 5 16.0005V8.00049Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M5 4.07666C4.02491 4.17257 3.36857 4.38933 2.87868 4.87922C2 5.7579 2 7.17211 2 10.0005V14.0005C2 16.829 2 18.2432 2.87868 19.1219C3.36857 19.6117 4.02491 19.8285 5 19.9244"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M19 4.07666C19.9751 4.17257 20.6314 4.38933 21.1213 4.87922C22 5.7579 22 7.17211 22 10.0005V14.0005C22 16.829 22 18.2432 21.1213 19.1219C20.6314 19.6117 19.9751 19.8285 19 19.9244"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.7" : "1"}
            d="M9 13.0005H15"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M9 9.00049H15"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9 17.0005H12"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.87868 2.87917C5 3.75785 5 5.17206 5 8.00049V16.0005C5 18.8289 5 20.2431 5.87868 21.1218C6.75736 22.0005 8.17157 22.0005 11 22.0005H13C15.8284 22.0005 17.2426 22.0005 18.1213 21.1218C19 20.2431 19 18.8289 19 16.0005V8.00049C19 5.17206 19 3.75785 18.1213 2.87917C17.2426 2.00049 15.8284 2.00049 13 2.00049H11C8.17157 2.00049 6.75736 2.00049 5.87868 2.87917ZM8.25 17.0005C8.25 16.5863 8.58579 16.2505 9 16.2505H12C12.4142 16.2505 12.75 16.5863 12.75 17.0005C12.75 17.4147 12.4142 17.7505 12 17.7505H9C8.58579 17.7505 8.25 17.4147 8.25 17.0005ZM9 12.2505C8.58579 12.2505 8.25 12.5863 8.25 13.0005C8.25 13.4147 8.58579 13.7505 9 13.7505H15C15.4142 13.7505 15.75 13.4147 15.75 13.0005C15.75 12.5863 15.4142 12.2505 15 12.2505H9ZM8.25 9.00049C8.25 8.58627 8.58579 8.25049 9 8.25049H15C15.4142 8.25049 15.75 8.58627 15.75 9.00049C15.75 9.4147 15.4142 9.75049 15 9.75049H9C8.58579 9.75049 8.25 9.4147 8.25 9.00049Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M5.23525 4.05884C5 4.94212 5 6.17762 5 8.00059V16.0006C5 17.8236 5 19.0591 5.23527 19.9424L5 19.9245C4.02491 19.8286 3.36857 19.6118 2.87868 19.122C2 18.2433 2 16.8291 2 14.0006V10.0006C2 7.17221 2 5.758 2.87868 4.87932C3.36857 4.38943 4.02491 4.17267 5 4.07676L5.23525 4.05884Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M18.7648 19.9424C19 19.0591 19 17.8236 19 16.0006V8.00059C19 6.17762 19 4.94212 18.7648 4.05884L19 4.07676C19.9751 4.17267 20.6315 4.38943 21.1214 4.87932C22 5.758 22 7.17221 22 10.0006V14.0006C22 16.8291 22 18.2433 21.1214 19.122C20.6315 19.6118 19.9751 19.8286 19 19.9245L18.7648 19.9424Z"
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
            d="M1.75 10.0008V14.0008C1.75 16.8293 1.75 18.2435 2.62868 19.1222C2.84602 19.3395 3.09612 19.5031 3.39228 19.6262C3.38556 19.5817 3.37922 19.5371 3.37321 19.4925C3.24986 18.575 3.24992 17.4293 3.25 16.0995L3.25 8.00079L3.25 7.90204V7.90204C3.24992 6.57231 3.24986 5.42659 3.37321 4.5091C3.37921 4.46447 3.38555 4.41993 3.39226 4.37549C3.09611 4.49861 2.84601 4.66218 2.62868 4.87952C1.75 5.7582 1.75 7.17241 1.75 10.0008Z"
            fill="currentColor"
          />
          <path
            d="M21.75 10.0008V14.0008C21.75 16.8293 21.75 18.2435 20.8713 19.1222C20.654 19.3395 20.4039 19.5031 20.1077 19.6262C20.1144 19.5817 20.1208 19.5371 20.1268 19.4925C20.2501 18.575 20.2501 17.4293 20.25 16.0995V7.90205C20.2501 6.57232 20.2501 5.42659 20.1268 4.5091C20.1208 4.46447 20.1144 4.41993 20.1077 4.37549C20.4039 4.49861 20.654 4.66218 20.8713 4.87952C21.75 5.7582 21.75 7.17241 21.75 10.0008Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.62868 2.87917C4.75 3.75785 4.75 5.17206 4.75 8.00049V16.0005C4.75 18.8289 4.75 20.2431 5.62868 21.1218C6.50736 22.0005 7.92157 22.0005 10.75 22.0005H12.75C15.5784 22.0005 16.9926 22.0005 17.8713 21.1218C18.75 20.2431 18.75 18.8289 18.75 16.0005V8.00049C18.75 5.17206 18.75 3.75785 17.8713 2.87917C16.9926 2.00049 15.5784 2.00049 12.75 2.00049H10.75C7.92157 2.00049 6.50736 2.00049 5.62868 2.87917ZM8 17.0005C8 16.5863 8.33579 16.2505 8.75 16.2505H11.75C12.1642 16.2505 12.5 16.5863 12.5 17.0005C12.5 17.4147 12.1642 17.7505 11.75 17.7505H8.75C8.33579 17.7505 8 17.4147 8 17.0005ZM8.75 12.2505C8.33579 12.2505 8 12.5863 8 13.0005C8 13.4147 8.33579 13.7505 8.75 13.7505H14.75C15.1642 13.7505 15.5 13.4147 15.5 13.0005C15.5 12.5863 15.1642 12.2505 14.75 12.2505H8.75ZM8 9.00049C8 8.58627 8.33579 8.25049 8.75 8.25049H14.75C15.1642 8.25049 15.5 8.58627 15.5 9.00049C15.5 9.4147 15.1642 9.75049 14.75 9.75049H8.75C8.33579 9.75049 8 9.4147 8 9.00049Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconDocuments as IconComponentType).keywords = [
  "documents",
  "papers",
  "text file",
  "written document",
  "actions",
  "acts",
  "advices",
  "archives",
  "attachments",
  "attestations",
];

export default IconDocuments as IconComponentType;
