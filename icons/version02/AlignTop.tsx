import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconAlignTop: FC<IconProps> = ({
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
            opacity={duotone ? "0.4" : "1"}
            d="M19.9297 5.1001V16.9001C19.9297 18.4001 19.2897 19.0001 17.6997 19.0001H16.6597C15.0697 19.0001 14.4297 18.4001 14.4297 16.9001V5.1001"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M5.92969 5.1001V11.9001C5.92969 13.4001 6.56969 14.0001 8.15969 14.0001H9.19969C10.7897 14.0001 11.4297 13.4001 11.4297 11.9001V5.1001"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.66992 5H22.6699"
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
            d="M16.6499 19.3799H17.6899C19.2799 19.3799 19.9199 18.7799 19.9199 17.2599V5.37988H14.4199V17.2599C14.4299 18.7799 15.0699 19.3799 16.6499 19.3799Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.14992 14.3799H9.18992C10.7799 14.3799 11.4199 13.7699 11.4199 12.2599V5.37988H5.91992V12.2599C5.92992 13.7699 6.56992 14.3799 8.14992 14.3799Z"
            fill="currentColor"
          />
          <path
            d="M21.9199 6.11988H3.41992C3.00992 6.11988 2.66992 5.78988 2.66992 5.37988C2.66992 4.96988 3.00992 4.62988 3.41992 4.62988H21.9199C22.3299 4.62988 22.6699 4.96988 22.6699 5.37988C22.6699 5.78988 22.3299 6.11988 21.9199 6.11988Z"
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
            d="M16.6499 19.3799H17.6899C19.2799 19.3799 19.9199 18.7799 19.9199 17.2599V5.37988H14.4199V17.2599C14.4299 18.7799 15.0699 19.3799 16.6499 19.3799Z"
            fill="currentColor"
          />
          <path
            d="M8.14992 14.3799H9.18992C10.7799 14.3799 11.4199 13.7699 11.4199 12.2599V5.37988H5.91992V12.2599C5.92992 13.7699 6.56992 14.3799 8.14992 14.3799Z"
            fill="currentColor"
          />
          <path
            d="M21.9199 6.11988H3.41992C3.00992 6.11988 2.66992 5.78988 2.66992 5.37988C2.66992 4.96988 3.00992 4.62988 3.41992 4.62988H21.9199C22.3299 4.62988 22.6699 4.96988 22.6699 5.37988C22.6699 5.78988 22.3299 6.11988 21.9199 6.11988Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconAlignTop as IconComponentType).keywords = [
  "align",
  "top",
  "line up",
  "adjust",
  "coordinate",
  "aline",
  "array",
  "alignment",
  "link",
  "combine",
  "integrate",
  "upper side",
  "upside",
  "elevation",
  "uppermost",
  "height",
  "pinnacle",
  "peak",
  "upper",
  "topmost",
];

export default IconAlignTop as IconComponentType;
