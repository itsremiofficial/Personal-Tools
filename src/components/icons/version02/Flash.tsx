import { FC } from "react";

const IconFlash: FC<IconProps> = ({
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
            d="M9.98986 13.28H13.0799V20.48C13.0799 21.54 14.3998 22.04 15.0998 21.24L22.6698 12.64C23.3298 11.89 22.7999 10.72 21.7999 10.72H18.7099V3.51997C18.7099 2.45997 17.3898 1.95997 16.6898 2.75997L9.11986 11.36C8.46986 12.11 8.99986 13.28 9.98986 13.28Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.16992 4H2.16992"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.16992 20H2.16992"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M5.16992 12H2.16992"
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
            d="M9.98986 13.28H13.0799V20.48C13.0799 21.54 14.3999 22.04 15.0999 21.24L22.6699 12.64C23.3299 11.89 22.7999 10.72 21.7999 10.72H18.7099V3.51997C18.7099 2.45997 17.3899 1.95997 16.6899 2.75997L9.11986 11.36C8.46986 12.11 8.99986 13.28 9.98986 13.28Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.16992 4.75H2.16992C1.75992 4.75 1.41992 4.41 1.41992 4C1.41992 3.59 1.75992 3.25 2.16992 3.25H9.16992C9.57992 3.25 9.91992 3.59 9.91992 4C9.91992 4.41 9.57992 4.75 9.16992 4.75Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.16992 20.75H2.16992C1.75992 20.75 1.41992 20.41 1.41992 20C1.41992 19.59 1.75992 19.25 2.16992 19.25H8.16992C8.57992 19.25 8.91992 19.59 8.91992 20C8.91992 20.41 8.57992 20.75 8.16992 20.75Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M5.16992 12.75H2.16992C1.75992 12.75 1.41992 12.41 1.41992 12C1.41992 11.59 1.75992 11.25 2.16992 11.25H5.16992C5.57992 11.25 5.91992 11.59 5.91992 12C5.91992 12.41 5.57992 12.75 5.16992 12.75Z"
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
            d="M9.98986 13.28H13.0799V20.48C13.0799 21.54 14.3999 22.04 15.0999 21.24L22.6699 12.64C23.3299 11.89 22.7999 10.72 21.7999 10.72H18.7099V3.51997C18.7099 2.45997 17.3899 1.95997 16.6899 2.75997L9.11986 11.36C8.46986 12.11 8.99986 13.28 9.98986 13.28Z"
            fill="currentColor"
          />
          <path
            d="M9.16992 4.75H2.16992C1.75992 4.75 1.41992 4.41 1.41992 4C1.41992 3.59 1.75992 3.25 2.16992 3.25H9.16992C9.57992 3.25 9.91992 3.59 9.91992 4C9.91992 4.41 9.57992 4.75 9.16992 4.75Z"
            fill="currentColor"
          />
          <path
            d="M8.16992 20.75H2.16992C1.75992 20.75 1.41992 20.41 1.41992 20C1.41992 19.59 1.75992 19.25 2.16992 19.25H8.16992C8.57992 19.25 8.91992 19.59 8.91992 20C8.91992 20.41 8.57992 20.75 8.16992 20.75Z"
            fill="currentColor"
          />
          <path
            d="M5.16992 12.75H2.16992C1.75992 12.75 1.41992 12.41 1.41992 12C1.41992 11.59 1.75992 11.25 2.16992 11.25H5.16992C5.57992 11.25 5.91992 11.59 5.91992 12C5.91992 12.41 5.57992 12.75 5.16992 12.75Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconFlash as IconComponent).keywords = [
  "flash",
  "twinkle",
  "twinkling",
  "glint",
  "flare",
  "blink",
  "wink",
  "scud",
  "trice",
  "loud",
];

export default IconFlash as IconComponent;
