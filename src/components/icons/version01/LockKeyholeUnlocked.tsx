import { FC } from "react";

const IconLockKeyholeUnlocked: FC<IconProps> = ({
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
            d="M6 10.0005V8.00049C6 4.68678 8.68629 2.00049 12 2.00049C14.7958 2.00049 17.1449 3.91265 17.811 6.50049"
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
            d="M6.75 8.00049C6.75 5.10099 9.10051 2.75049 12 2.75049C14.4453 2.75049 16.5018 4.42291 17.0846 6.68743C17.1879 7.08857 17.5968 7.33006 17.9979 7.22682C18.3991 7.12357 18.6405 6.71468 18.5373 6.31354C17.788 3.40238 15.1463 1.25049 12 1.25049C8.27208 1.25049 5.25 4.27257 5.25 8.00049V10.0551C5.68651 10.0225 6.18264 10.0094 6.75 10.0041V8.00049Z"
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
            d="M6.75 8.00049C6.75 5.10099 9.10051 2.75049 12 2.75049C14.4453 2.75049 16.5018 4.42291 17.0846 6.68743C17.1879 7.08857 17.5968 7.33006 17.9979 7.22682C18.3991 7.12357 18.6405 6.71468 18.5373 6.31354C17.788 3.40238 15.1463 1.25049 12 1.25049C8.27208 1.25049 5.25 4.27257 5.25 8.00049V10.0551C4.13525 10.1384 3.40931 10.3485 2.87868 10.8792C2 11.7578 2 13.1721 2 16.0005C2 18.8289 2 20.2431 2.87868 21.1218C3.75736 22.0005 5.17157 22.0005 8 22.0005H16C18.8284 22.0005 20.2426 22.0005 21.1213 21.1218C22 20.2431 22 18.8289 22 16.0005C22 13.1721 22 11.7578 21.1213 10.8792C20.2426 10.0005 18.8284 10.0005 16 10.0005H8C7.54849 10.0005 7.13301 10.0005 6.75 10.0041V8.00049ZM14 16.0005C14 17.1051 13.1046 18.0005 12 18.0005C10.8954 18.0005 10 17.1051 10 16.0005C10 14.8959 10.8954 14.0005 12 14.0005C13.1046 14.0005 14 14.8959 14 16.0005Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconLockKeyholeUnlocked as IconComponent).keywords = [
  "lock",
  "keyhole",
  "unlocked",
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
  "unsecured",
  "unbarred",
  "unbolted",
  "unfastened",
  "unlatched",
  "unobstructed",
  "undone",
  "unblocked",
  "untied",
];

export default IconLockKeyholeUnlocked as IconComponent;
