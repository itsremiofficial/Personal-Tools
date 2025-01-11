import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconBoombox: FC<IconProps> = ({
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
            d="M6 9.5H18"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 14C2 10.2288 2 8.34315 3.17157 7.17157C4.34315 6 6.22876 6 10 6H14C17.7712 6 19.6569 6 20.8284 7.17157C22 8.34315 22 10.2288 22 14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M16 6C16 4.11438 16 3.17157 15.4142 2.58579C14.8284 2 13.8856 2 12 2C10.1144 2 9.17157 2 8.58579 2.58579C8 3.17157 8 4.11438 8 6"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M11 16C11 17.6569 9.65685 19 8 19C6.34315 19 5 17.6569 5 16C5 14.3431 6.34315 13 8 13C9.65685 13 11 14.3431 11 16Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M18.1213 18.1213C16.9497 19.2929 15.0503 19.2929 13.8787 18.1213C12.7071 16.9497 12.7071 15.0502 13.8787 13.8786C15.0503 12.7071 16.9497 12.7071 18.1213 13.8786C19.2929 15.0502 19.2929 16.9497 18.1213 18.1213Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M8 13V15"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M18.1213 13.8787L16.7071 15.2929"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
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
            d="M2 14C2 10.2288 2 8.34315 3.17157 7.17157C4.34315 6 6.22876 6 10 6H14C17.7712 6 19.6569 6 20.8284 7.17157C22 8.34315 22 10.2288 22 14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.25 9.5C5.25 9.08579 5.58579 8.75 6 8.75H18C18.4142 8.75 18.75 9.08579 18.75 9.5C18.75 9.91421 18.4142 10.25 18 10.25H6C5.58579 10.25 5.25 9.91421 5.25 9.5Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.948 1.25H12.052C12.9505 1.24997 13.6997 1.24995 14.2945 1.32991C14.9223 1.41432 15.4891 1.59999 15.9445 2.05546C16.4 2.51093 16.5857 3.07773 16.6701 3.70552C16.7501 4.30031 16.75 5.04953 16.75 5.94801L16.75 6H15.25C15.25 5.03599 15.2484 4.38843 15.1835 3.90539C15.1214 3.44393 15.0142 3.24644 14.8839 3.11612C14.7536 2.9858 14.5561 2.87858 14.0946 2.81654C13.6116 2.7516 12.964 2.75 12 2.75C11.036 2.75 10.3884 2.7516 9.90539 2.81654C9.44393 2.87858 9.24644 2.9858 9.11612 3.11612C8.9858 3.24644 8.87858 3.44393 8.81654 3.90539C8.7516 4.38843 8.75 5.03599 8.75 6H7.25L7.25 5.948C7.24997 5.04952 7.24995 4.3003 7.32991 3.70552C7.41432 3.07773 7.59999 2.51093 8.05546 2.05546C8.51093 1.59999 9.07773 1.41432 9.70552 1.32991C10.3003 1.24995 11.0495 1.24997 11.948 1.25Z"
            fill="currentColor"
          />
          <path
            d="M7.25 13.0945C5.95608 13.4275 5 14.6021 5 16C5 17.6568 6.34315 19 8 19C9.65685 19 11 17.6568 11 16C11 14.6021 10.0439 13.4275 8.75 13.0945V15C8.75 15.4142 8.41421 15.75 8 15.75C7.58579 15.75 7.25 15.4142 7.25 15V13.0945Z"
            fill="currentColor"
          />
          <path
            d="M13.8787 18.1213C15.0503 19.2929 16.9497 19.2929 18.1213 18.1213C19.1098 17.1329 19.2643 15.6263 18.5848 14.4758L17.2372 15.8234C16.9443 16.1163 16.4694 16.1163 16.1765 15.8234C15.8837 15.5306 15.8837 15.0557 16.1765 14.7628L17.5242 13.4152C16.3737 12.7357 14.8671 12.8902 13.8787 13.8787C12.7071 15.0503 12.7071 16.9497 13.8787 18.1213Z"
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
            d="M5.75 16C5.75 15.0203 6.37611 14.1869 7.25 13.878V15C7.25 15.4142 7.58579 15.75 8 15.75C8.41421 15.75 8.75 15.4142 8.75 15V13.878C9.62389 14.1869 10.25 15.0203 10.25 16C10.25 17.2426 9.24264 18.25 8 18.25C6.75736 18.25 5.75 17.2426 5.75 16Z"
            fill="currentColor"
          />
          <path
            d="M14.409 14.409C15.1017 13.7163 16.1338 13.5697 16.9701 13.9692L16.1768 14.7626C15.8839 15.0555 15.8839 15.5303 16.1768 15.8232C16.4697 16.1161 16.9445 16.1161 17.2374 15.8232L18.0308 15.0299C18.4303 15.8662 18.2837 16.8983 17.591 17.591C16.7123 18.4697 15.2877 18.4697 14.409 17.591C13.5303 16.7123 13.5303 15.2877 14.409 14.409Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.052 1.25H11.948C11.0495 1.24997 10.3003 1.24995 9.70552 1.32991C9.07773 1.41432 8.51093 1.59999 8.05546 2.05546C7.59999 2.51093 7.41432 3.07773 7.32991 3.70552C7.24995 4.3003 7.24997 5.04951 7.25 5.94799V6.02572C5.22882 6.09185 4.01511 6.32803 3.17157 7.17157C2 8.34315 2 10.2288 2 14C2 17.7712 2 19.6569 3.17157 20.8284C4.34315 22 6.22876 22 10 22H14C17.7712 22 19.6569 22 20.8284 20.8284C22 19.6569 22 17.7712 22 14C22 10.2288 22 8.34315 20.8284 7.17157C19.9849 6.32803 18.7712 6.09185 16.75 6.02572V5.94801C16.75 5.04954 16.7501 4.3003 16.6701 3.70552C16.5857 3.07773 16.4 2.51093 15.9445 2.05546C15.4891 1.59999 14.9223 1.41432 14.2945 1.32991C13.6997 1.24995 12.9505 1.24997 12.052 1.25ZM15.2479 6.00188C15.2434 5.15523 15.229 4.24407 15.1835 3.9054C15.1214 3.44393 15.0142 3.24644 14.8839 3.11612C14.7536 2.9858 14.5561 2.87858 14.0946 2.81654C13.6116 2.7516 12.964 2.75 12 2.75C11.036 2.75 10.3884 2.7516 9.90539 2.81654C9.44393 2.87858 9.24644 2.9858 9.11612 3.11612C8.9858 3.24644 8.87858 3.44393 8.81654 3.9054C8.771 4.24407 8.75661 5.15523 8.75208 6.00188C9.1435 6 9.55885 6 10 6H14C14.4412 6 14.8565 6 15.2479 6.00188ZM8 12.25C5.92893 12.25 4.25 13.9289 4.25 16C4.25 18.0711 5.92893 19.75 8 19.75C10.0711 19.75 11.75 18.0711 11.75 16C11.75 13.9289 10.0711 12.25 8 12.25ZM18.6516 13.3484C17.1872 11.8839 14.8128 11.8839 13.3483 13.3484C11.8839 14.8128 11.8839 17.1872 13.3483 18.6517C14.8128 20.1161 17.1872 20.1161 18.6516 18.6517C20.1161 17.1872 20.1161 14.8128 18.6516 13.3484ZM5.25 9.5C5.25 9.08579 5.58579 8.75 6 8.75H18C18.4142 8.75 18.75 9.08579 18.75 9.5C18.75 9.91421 18.4142 10.25 18 10.25H6C5.58579 10.25 5.25 9.91421 5.25 9.5Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBoombox as IconComponentType).keywords = [
  "boombox",
  "boom box",
  "boom",
  "junkbox",
  "callbox",
  "sound system",
  "personal stereo",
  "mini hi-fi system",
  "radio",
  "walkie talkie",
];

export default IconBoombox as IconComponentType;