import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconElectricity: FC<IconProps> = ({
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
            d="M11.1697 16H14.1697C16.6697 16 18.1697 14.2 18.1697 12V6.91C18.1697 5.86 17.3097 5 16.2597 5H9.08974C8.03974 5 7.17974 5.86 7.17974 6.91V12C7.16974 14.2 8.66973 16 11.1697 16Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10.1699 2V5"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.1699 2V5"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.6699 22V16"
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
            opacity={duotone ? "0.4" : "1"}
            d="M11.1697 16H14.1697C16.6697 16 18.1697 14.2 18.1697 12V6.91C18.1697 5.86 17.3097 5 16.2597 5H9.08974C8.03974 5 7.17974 5.86 7.17974 6.91V12C7.16974 14.2 8.66973 16 11.1697 16Z"
            fill="currentColor"
          />
          <path
            d="M10.9199 2V5H9.41992V2C9.41992 1.59 9.75992 1.25 10.1699 1.25C10.5799 1.25 10.9199 1.59 10.9199 2Z"
            fill="currentColor"
          />
          <path
            d="M15.9199 2V5H14.4199V2C14.4199 1.59 14.7599 1.25 15.1699 1.25C15.5799 1.25 15.9199 1.59 15.9199 2Z"
            fill="currentColor"
          />
          <path
            d="M13.4199 16V22C13.4199 22.41 13.0799 22.75 12.6699 22.75C12.2599 22.75 11.9199 22.41 11.9199 22V16H13.4199Z"
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
            d="M16.2599 5H15.9199V2C15.9199 1.59 15.5799 1.25 15.1699 1.25C14.7599 1.25 14.4199 1.59 14.4199 2V5H10.9199V2C10.9199 1.59 10.5799 1.25 10.1699 1.25C9.75992 1.25 9.41992 1.59 9.41992 2V5H9.07992C8.02992 5 7.16992 5.86 7.16992 6.91V12C7.16992 14.2 8.66992 16 11.1699 16H11.9199V22C11.9199 22.41 12.2599 22.75 12.6699 22.75C13.0799 22.75 13.4199 22.41 13.4199 22V16H14.1699C16.6699 16 18.1699 14.2 18.1699 12V6.91C18.1699 5.86 17.3099 5 16.2599 5Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconElectricity as IconComponentType).keywords = [
  "electricity",
  "electrical energy",
  "voltage",
  "light",
  "conductivity",
  "electrically",
  "electric",
  "electrical",
  "electrification",
  "lightning",
];

export default IconElectricity as IconComponentType;
