import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconVideoFrame: FC<IconProps> = ({
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
            d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M17 2.5V21.5M7 2.5V21.5M2.5 7H7M17 7H21.5M17 17H21.5M2.5 17H7M2 12H22"
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
            d="M6.25001 2.22168C5.02727 2.41594 4.14851 2.78047 3.46447 3.46451C2.78044 4.14854 2.41591 5.02731 2.22165 6.25004H6.25001V2.22168Z"
            fill="currentColor"
          />
          <path
            d="M2.06874 7.75004C2.01039 8.73121 2.00158 9.88386 2.00024 11.25H6.25001V7.75004H2.06874Z"
            fill="currentColor"
          />
          <path
            d="M2.00024 12.75C2.00158 14.1162 2.01039 15.2689 2.06874 16.25H6.25001V12.75H2.00024Z"
            fill="currentColor"
          />
          <path
            d="M2.22165 17.75C2.41591 18.9728 2.78044 19.8515 3.46447 20.5356C4.14851 21.2196 5.02727 21.5841 6.25001 21.7784V17.75H2.22165Z"
            fill="currentColor"
          />
          <path
            d="M17.75 21.7784C18.9727 21.5841 19.8515 21.2196 20.5355 20.5356C21.2196 19.8515 21.5841 18.9728 21.7784 17.75H17.75V21.7784Z"
            fill="currentColor"
          />
          <path
            d="M21.9313 16.25C21.9896 15.2689 21.9984 14.1162 21.9998 12.75H17.75V16.25H21.9313Z"
            fill="currentColor"
          />
          <path
            d="M21.9998 11.25C21.9984 9.88386 21.9896 8.73121 21.9313 7.75004H17.75V11.25H21.9998Z"
            fill="currentColor"
          />
          <path
            d="M21.7784 6.25004C21.5841 5.02731 21.2196 4.14854 20.5355 3.46451C19.8515 2.78047 18.9727 2.41594 17.75 2.22168V6.25004H21.7784Z"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.5" : "1"}>
            <path
              d="M7.75 21.9313C8.9058 22 10.2996 22 12 22C13.7004 22 15.0942 22 16.25 21.9313V12.75H7.75V21.9313Z"
              fill="currentColor"
            />
            <path
              d="M16.25 2.06874C15.0942 2 13.7004 2 12 2C10.2996 2 8.9058 2 7.75 2.06874V11.25H16.25V2.06874Z"
              fill="currentColor"
            />
          </g>
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
            d="M6.25001 2.22164C5.02727 2.4159 4.14851 2.78043 3.46447 3.46447C2.78044 4.1485 2.41591 5.02727 2.22165 6.25H6.25001V2.22164Z"
            fill="currentColor"
          />
          <path
            d="M2.06874 7.75C2.01039 8.73117 2.00158 9.88382 2.00024 11.25H6.25001V7.75H2.06874Z"
            fill="currentColor"
          />
          <path
            d="M2.00024 12.75C2.00158 14.1162 2.01039 15.2688 2.06874 16.25H6.25001V12.75H2.00024Z"
            fill="currentColor"
          />
          <path
            d="M2.22165 17.75C2.41591 18.9727 2.78044 19.8515 3.46447 20.5355C4.14851 21.2196 5.02727 21.5841 6.25001 21.7784V17.75H2.22165Z"
            fill="currentColor"
          />
          <path
            d="M7.75001 21.9313C8.90581 22 10.2996 22 12 22C13.7005 22 15.0942 22 16.25 21.9313V12.75H7.75001V21.9313Z"
            fill="currentColor"
          />
          <path
            d="M17.75 21.7784C18.9727 21.5841 19.8515 21.2196 20.5355 20.5355C21.2196 19.8515 21.5841 18.9727 21.7784 17.75H17.75V21.7784Z"
            fill="currentColor"
          />
          <path
            d="M21.9313 16.25C21.9896 15.2688 21.9984 14.1162 21.9998 12.75H17.75V16.25H21.9313Z"
            fill="currentColor"
          />
          <path
            d="M21.9998 11.25C21.9984 9.88382 21.9896 8.73117 21.9313 7.75H17.75V11.25H21.9998Z"
            fill="currentColor"
          />
          <path
            d="M21.7784 6.25C21.5841 5.02727 21.2196 4.1485 20.5355 3.46447C19.8515 2.78043 18.9727 2.4159 17.75 2.22164V6.25H21.7784Z"
            fill="currentColor"
          />
          <path
            d="M16.25 2.06874C15.0942 2 13.7005 2 12 2C10.2996 2 8.90581 2 7.75001 2.06874V11.25H16.25V2.06874Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconVideoFrame as IconComponentType).keywords = [
  "video",
  "frame",
  "tv",
  "television",
  "picture",
  "telecasting",
  "televised",
  "videotaping",
  "videotaped",
  "taping",
  "videotape",
  "build",
  "put",
  "compose",
  "form",
  "draw up",
  "set up",
  "shape",
  "border",
  "outline",
];

export default IconVideoFrame as IconComponentType;
