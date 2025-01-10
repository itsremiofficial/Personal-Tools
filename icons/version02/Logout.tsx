import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconLogout: FC<IconProps> = ({
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
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M18.1094 14.62L20.6694 12.06L18.1094 9.5"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.4297 12.0596H20.5997"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M12.4297 20C8.00969 20 4.42969 17 4.42969 12C4.42969 7 8.00969 4 12.4297 4"
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
            d="M13.9102 2C14.3802 2 14.7702 2.38 14.7702 2.86V21.15C14.7702 21.62 14.3902 22.01 13.9102 22.01C8.02016 22.01 3.91016 17.9 3.91016 12.01C3.91016 6.12 8.03016 2 13.9102 2Z"
            fill="currentColor"
          />
          <path
            d="M21.2098 11.54L18.3698 8.69003C18.0798 8.40003 17.5998 8.40003 17.3098 8.69003C17.0198 8.98003 17.0198 9.46003 17.3098 9.75003L18.8698 11.31H9.2998C8.8898 11.31 8.5498 11.65 8.5498 12.06C8.5498 12.47 8.8898 12.81 9.2998 12.81H18.8698L17.3098 14.37C17.0198 14.66 17.0198 15.14 17.3098 15.43C17.4598 15.58 17.6498 15.65 17.8398 15.65C18.0298 15.65 18.2198 15.58 18.3698 15.43L21.2098 12.58C21.4998 12.3 21.4998 11.83 21.2098 11.54Z"
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
            d="M8.55016 12.07C8.55016 11.66 8.89016 11.32 9.30016 11.32H14.7802V2.86C14.7702 2.38 14.3902 2 13.9102 2C8.02016 2 3.91016 6.11 3.91016 12C3.91016 17.89 8.02016 22 13.9102 22C14.3802 22 14.7702 21.62 14.7702 21.14V12.81H9.30016C8.88016 12.82 8.55016 12.48 8.55016 12.07Z"
            fill="currentColor"
          />
          <path
            d="M21.21 11.54L18.37 8.69003C18.08 8.40003 17.6 8.40003 17.31 8.69003C17.02 8.98003 17.02 9.46003 17.31 9.75003L18.87 11.31H14.77V12.81H18.86L17.3 14.37C17.01 14.66 17.01 15.14 17.3 15.43C17.45 15.58 17.64 15.65 17.83 15.65C18.02 15.65 18.21 15.58 18.36 15.43L21.2 12.58C21.5 12.3 21.5 11.83 21.21 11.54Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconLogout as IconComponentType).keywords = [
  "logout",
  "logoff",
  "output",
  "closure",
  "off",
  "unplug",
  "disconnect",
  "teardown",
  "disconnection",
  "disengagement",
];

export default IconLogout as IconComponentType;
