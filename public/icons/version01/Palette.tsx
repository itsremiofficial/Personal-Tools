import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconPalette: FC<IconProps> = ({
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
            d="M2 6C2 4.59987 2 3.8998 2.27248 3.36502C2.51217 2.89462 2.89462 2.51217 3.36502 2.27248C3.8998 2 4.59987 2 6 2C7.40013 2 8.1002 2 8.63498 2.27248C9.10538 2.51217 9.48783 2.89462 9.72752 3.36502C10 3.8998 10 4.59987 10 6V18C10 19.4001 10 20.1002 9.72752 20.635C9.48783 21.1054 9.10538 21.4878 8.63498 21.7275C8.1002 22 7.40013 22 6 22C4.59987 22 3.8998 22 3.36502 21.7275C2.89462 21.4878 2.51217 21.1054 2.27248 20.635C2 20.1002 2 19.4001 2 18V6Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M7 19H5"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M13.3137 4.929L11.1716 7.07109C10.5935 7.64915 10.3045 7.93818 10.1522 8.30573C10 8.67327 10 9.08202 10 9.89952L10 19.5564L18.9705 10.5859C19.9606 9.59581 20.4556 9.10079 20.6411 8.52997C20.8042 8.02786 20.8042 7.48699 20.6411 6.98489C20.4556 6.41406 19.9606 5.91904 18.9705 4.929C17.9805 3.93896 17.4855 3.44394 16.9146 3.25847C16.4125 3.09532 15.8717 3.09532 15.3695 3.25847C14.7987 3.44394 14.3037 3.93896 13.3137 4.929Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M6 22L18 22C19.4001 22 20.1002 22 20.635 21.7275C21.1054 21.4878 21.4878 21.1054 21.7275 20.635C22 20.1002 22 19.4001 22 18C22 16.5999 22 15.8998 21.7275 15.365C21.4878 14.8946 21.1054 14.5122 20.635 14.2725C20.1002 14 19.4001 14 18 14L15.5 14"
            stroke="currentColor"
            strokeWidth={width}
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
            d="M7.75 19C7.75 19.4142 7.41421 19.75 7 19.75H5C4.58579 19.75 4.25 19.4142 4.25 19C4.25 18.5858 4.58579 18.25 5 18.25H7C7.41421 18.25 7.75 18.5858 7.75 19Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10 18V6C10 4.59987 10 3.8998 9.72752 3.36502C9.48783 2.89462 9.10538 2.51217 8.63498 2.27248C8.1002 2 7.40013 2 6 2C4.59987 2 3.8998 2 3.36502 2.27248C2.89462 2.51217 2.51217 2.89462 2.27248 3.36502C2 3.8998 2 4.59987 2 6V18C2 19.4001 2 20.1002 2.27248 20.635C2.51217 21.1054 2.89462 21.4878 3.36502 21.7275C3.8998 22 4.59987 22 6 22C7.40013 22 8.1002 22 8.63498 21.7275C9.10538 21.4878 9.48783 21.1054 9.72752 20.635C10 20.1002 10 19.4001 10 18Z"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.7" : "1"}>
            <path
              d="M10 8.24276V18C10 18.9186 10 19.5359 9.92304 20.0029L13.2219 16.7041L19.0599 10.6145C20.0332 9.6111 20.5199 9.10939 20.6964 8.53425C20.847 8.04375 20.843 7.5188 20.685 7.03065C20.4997 6.45826 19.9999 5.95847 19.0003 4.95892C18.0991 4.07259 17.6484 3.62942 17.1204 3.44458C16.6857 3.29244 16.2175 3.2633 15.7673 3.36039C15.2204 3.47834 14.7183 3.86221 13.7141 4.62996L13 5.24276L10 8.24276Z"
              fill="currentColor"
            />
            <path
              d="M8.00288 21.923C8.00192 21.9232 8.00096 21.9234 8 21.9235V21.9259L8.00288 21.923Z"
              fill="currentColor"
            />
          </g>
          <path
            d="M15.8143 14H17.8994C19.2995 14 19.9996 14 20.5344 14.2725C21.0048 14.5122 21.3872 14.8946 21.6269 15.365C21.8994 15.8998 21.8994 16.5999 21.8994 18C21.8994 19.4001 21.8994 20.1002 21.6269 20.635C21.3872 21.1054 21.0048 21.4878 20.5344 21.7275C19.9996 22 19.2995 22 17.8994 22H6C6.91721 22 7.53399 22 8.00069 21.9234L8 21.9259L8.00288 21.923C8.24762 21.8827 8.45107 21.8212 8.63498 21.7275C9.10538 21.4878 9.48783 21.1054 9.72752 20.635C9.82122 20.4511 9.8827 20.2476 9.92304 20.0029L13.2219 16.7041L15.8143 14Z"
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
            d="M10 6V18C10 19.4001 10 20.1002 9.72752 20.635C9.48783 21.1054 9.10538 21.4878 8.63498 21.7275C8.1002 22 7.40013 22 6 22C4.59987 22 3.8998 22 3.36502 21.7275C2.89462 21.4878 2.51217 21.1054 2.27248 20.635C2 20.1002 2 19.4001 2 18V6C2 4.59987 2 3.8998 2.27248 3.36502C2.51217 2.89462 2.89462 2.51217 3.36502 2.27248C3.8998 2 4.59987 2 6 2C7.40013 2 8.1002 2 8.63498 2.27248C9.10538 2.51217 9.48783 2.89462 9.72752 3.36502C10 3.8998 10 4.59987 10 6ZM7 19.75C7.41421 19.75 7.75 19.4142 7.75 19C7.75 18.5858 7.41421 18.25 7 18.25H5C4.58579 18.25 4.25 18.5858 4.25 19C4.25 19.4142 4.58579 19.75 5 19.75H7Z"
            fill="currentColor"
          />
          <path
            d="M19.0599 10.6144L13.2219 16.704C12.492 17.4653 12.1271 17.8459 11.8135 17.7199C11.5 17.5939 11.5 17.0666 11.5 16.0119L11.5 7.7738C11.5012 7.11381 11.7633 6.48107 12.2291 6.01357L13.2839 4.95882L13.7141 4.62987C14.7183 3.86212 15.2204 3.47825 15.7673 3.3603C16.2175 3.26322 16.6857 3.29236 17.1204 3.4445C17.6484 3.62934 18.099 4.0725 19.0003 4.95883C19.9999 5.95839 20.4997 6.45818 20.685 7.03056C20.843 7.51871 20.847 8.04366 20.6964 8.53417C20.5199 9.10931 20.0332 9.61101 19.0599 10.6144Z"
            fill="currentColor"
          />
          <path
            d="M12.7897 22H17.8994C19.2995 22 19.9996 22 20.5344 21.7275C21.0048 21.4878 21.3872 21.1054 21.6269 20.635C21.8994 20.1002 21.8994 19.4001 21.8994 18C21.8994 16.5999 21.8994 15.8998 21.6269 15.365C21.3872 14.8946 21.0048 14.5122 20.5344 14.2725C19.9996 14 19.2995 14 17.8994 14H17.6797L11.878 19.798C11.636 20.0399 11.5 20.3391 11.5 20.6813C11.5 21.3936 12.0774 22 12.7897 22Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconPalette as IconComponentType).keywords = [
  "palette",
  "pallette",
  "pallet",
  "range",
  "shoulder",
  "blade",
  "array",
  "panoply",
  "sweep",
  "mix",
];

export default IconPalette as IconComponentType;
