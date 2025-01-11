import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconUndoLeft: FC<IconProps> = ({
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
            d="M7 4L4 7L7 10"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M4 7H15C16.8692 7 17.8039 7 18.5 7.40193C18.9561 7.66523 19.3348 8.04394 19.5981 8.49999C20 9.19615 20 10.1308 20 12C20 13.8692 20 14.8038 19.5981 15.5C19.3348 15.9561 18.9561 16.3348 18.5 16.5981C17.8039 17 16.8692 17 15 17H8.00001"
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
            d="M7.53033 3.46967C7.82322 3.76256 7.82322 4.23744 7.53033 4.53033L5.06066 7L7.53033 9.46967C7.82322 9.76256 7.82322 10.2374 7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L3.46967 7.53033C3.17678 7.23744 3.17678 6.76256 3.46967 6.46967L6.46967 3.46967C6.76256 3.17678 7.23744 3.17678 7.53033 3.46967Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M5.06067 7L5.81067 6.25H15.0358C15.94 6.24999 16.6693 6.24998 17.2576 6.3033C17.864 6.35826 18.3938 6.47456 18.875 6.75241C19.4451 7.08154 19.9185 7.55492 20.2476 8.12499C20.5255 8.60624 20.6418 9.13604 20.6967 9.74239C20.75 10.3307 20.75 11.06 20.75 11.9643V12.0358C20.75 12.94 20.75 13.6693 20.6967 14.2576C20.6418 14.8639 20.5255 15.3938 20.2476 15.875C19.9185 16.4451 19.4451 16.9185 18.875 17.2476C18.3938 17.5254 17.864 17.6417 17.2576 17.6967C16.6693 17.75 15.94 17.75 15.0358 17.75H8.00002C7.5858 17.75 7.25002 17.4142 7.25002 17C7.25002 16.5858 7.5858 16.25 8.00002 16.25H15C15.9484 16.25 16.6096 16.2493 17.1222 16.2028C17.6245 16.1573 17.9101 16.0726 18.125 15.9486C18.4671 15.7511 18.7511 15.467 18.9486 15.125C19.0726 14.9101 19.1573 14.6245 19.2028 14.1222C19.2493 13.6096 19.25 12.9484 19.25 12C19.25 11.0516 19.2493 10.3904 19.2028 9.87779C19.1573 9.37548 19.0726 9.0899 18.9486 8.87499C18.7511 8.53296 18.4671 8.24892 18.125 8.05145C17.9101 7.92737 17.6245 7.84271 17.1222 7.79718C16.6096 7.75072 15.9484 7.75 15 7.75H5.81067L5.06067 7Z"
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
            d="M7.53033 3.46967C7.82322 3.76256 7.82322 4.23744 7.53033 4.53033L5.81066 6.25L15.0358 6.25C15.94 6.24999 16.6693 6.24998 17.2576 6.3033C17.864 6.35826 18.3938 6.47456 18.875 6.75241C19.4451 7.08154 19.9185 7.55492 20.2476 8.12499C20.5254 8.60624 20.6417 9.13604 20.6967 9.74239C20.75 10.3307 20.75 11.06 20.75 11.9643V12.0358C20.75 12.94 20.75 13.6693 20.6967 14.2576C20.6418 14.8639 20.5255 15.3937 20.2476 15.875C19.9185 16.4451 19.4451 16.9185 18.875 17.2476C18.3938 17.5254 17.864 17.6417 17.2576 17.6967C16.6693 17.75 15.94 17.75 15.0358 17.75H8.00001C7.58579 17.75 7.25001 17.4142 7.25001 17C7.25001 16.5858 7.58579 16.25 8.00001 16.25H15C15.9484 16.25 16.6096 16.2493 17.1222 16.2028C17.6245 16.1573 17.9101 16.0726 18.125 15.9486C18.4671 15.7511 18.7511 15.467 18.9486 15.125C19.0726 14.9101 19.1573 14.6245 19.2028 14.1222C19.2493 13.6096 19.25 12.9484 19.25 12C19.25 11.0516 19.2493 10.3904 19.2028 9.87779C19.1573 9.37548 19.0726 9.0899 18.9486 8.87499C18.7511 8.53295 18.467 8.24892 18.125 8.05144C17.9101 7.92737 17.6245 7.84271 17.1222 7.79718C16.6096 7.75072 15.9484 7.75 15 7.75H5.81066L7.53033 9.46967C7.82322 9.76256 7.82322 10.2374 7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L3.46967 7.53033C3.17678 7.23744 3.17678 6.76256 3.46967 6.46967L6.46967 3.46967C6.76256 3.17678 7.23744 3.17678 7.53033 3.46967Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconUndoLeft as IconComponentType).keywords = [
  "undo",
  "left",
  "unmake",
  "dispose",
  "rescind",
  "disconnect",
  "vacate",
  "revoke",
  "rid",
  "annul",
  "repeal",
  "left-hand",
  "left-handed",
  "left over",
  "near",
  "leftover",
  "nigh",
  "remaining",
  "leftfield",
  "odd",
];

export default IconUndoLeft as IconComponentType;