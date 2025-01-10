import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconLockKeyhole: FC<IconProps> = ({
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
            d="M2 16.0005C2 13.1721 2 11.7578 2.87868 10.8792C3.75736 10.0005 5.17157 10.0005 8 10.0005H16C18.8284 10.0005 20.2426 10.0005 21.1213 10.8792C22 11.7578 22 13.1721 22 16.0005C22 18.8289 22 20.2431 21.1213 21.1218C20.2426 22.0005 18.8284 22.0005 16 22.0005H8C5.17157 22.0005 3.75736 22.0005 2.87868 21.1218C2 20.2431 2 18.8289 2 16.0005Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <circle
            opacity={duotone ? "0.5" : "1"}
            cx="12"
            cy="16.0005"
            r="2"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M6 10.0005V8.00049C6 4.68678 8.68629 2.00049 12 2.00049C15.3137 2.00049 18 4.68678 18 8.00049V10.0005"
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
            d="M2 16.0005C2 13.1721 2 11.7578 2.87868 10.8792C3.75736 10.0005 5.17157 10.0005 8 10.0005H16C18.8284 10.0005 20.2426 10.0005 21.1213 10.8792C22 11.7578 22 13.1721 22 16.0005C22 18.8289 22 20.2431 21.1213 21.1218C20.2426 22.0005 18.8284 22.0005 16 22.0005H8C5.17157 22.0005 3.75736 22.0005 2.87868 21.1218C2 20.2431 2 18.8289 2 16.0005Z"
            fill="currentColor"
          />
          <path
            d="M12 18.0005C13.1046 18.0005 14 17.1051 14 16.0005C14 14.8959 13.1046 14.0005 12 14.0005C10.8954 14.0005 10 14.8959 10 16.0005C10 17.1051 10.8954 18.0005 12 18.0005Z"
            fill="currentColor"
          />
          <path
            d="M6.75 8.00049C6.75 5.10099 9.10051 2.75049 12 2.75049C14.8995 2.75049 17.25 5.10099 17.25 8.00049V10.0041C17.8174 10.0094 18.3135 10.0225 18.75 10.0551V8.00049C18.75 4.27257 15.7279 1.25049 12 1.25049C8.27208 1.25049 5.25 4.27257 5.25 8.00049V10.0551C5.68651 10.0225 6.18264 10.0094 6.75 10.0041V8.00049Z"
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
            d="M5.25 10.0551V8.00049C5.25 4.27257 8.27208 1.25049 12 1.25049C15.7279 1.25049 18.75 4.27257 18.75 8.00049V10.0551C19.8648 10.1384 20.5907 10.3485 21.1213 10.8792C22 11.7578 22 13.1721 22 16.0005C22 18.8289 22 20.2431 21.1213 21.1218C20.2426 22.0005 18.8284 22.0005 16 22.0005H8C5.17157 22.0005 3.75736 22.0005 2.87868 21.1218C2 20.2431 2 18.8289 2 16.0005C2 13.1721 2 11.7578 2.87868 10.8792C3.40931 10.3485 4.13525 10.1384 5.25 10.0551ZM6.75 8.00049C6.75 5.10099 9.10051 2.75049 12 2.75049C14.8995 2.75049 17.25 5.10099 17.25 8.00049V10.0041C16.867 10.0005 16.4515 10.0005 16 10.0005H8C7.54849 10.0005 7.13301 10.0005 6.75 10.0041V8.00049ZM14 16.0005C14 17.1051 13.1046 18.0005 12 18.0005C10.8954 18.0005 10 17.1051 10 16.0005C10 14.8959 10.8954 14.0005 12 14.0005C13.1046 14.0005 14 14.8959 14 16.0005Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconLockKeyhole as IconComponentType).keywords = [
  "lock",
  "keyhole",
  "interlock",
  "lock in",
  "mesh",
  "interlace",
  "whorl",
  "lock away",
  "curl",
  "ringlet",
  "put away",
  "slot",
  "latch",
  "hemocyanin",
  "haemocyanin",
  "limpet",
  "escutcheons",
  "latches",
  "limpets",
];

export default IconLockKeyhole as IconComponentType;
