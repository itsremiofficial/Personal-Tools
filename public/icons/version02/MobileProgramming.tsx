import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconMobileProgramming: FC<IconProps> = ({
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
            d="M9.6001 2L9.6301 3.53003C9.6501 4.34003 10.3201 5 11.1301 5H14.1501C14.9801 5 15.6501 4.32 15.6501 3.5V2"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17.6699 17L15.6699 19L17.6699 21"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20.6699 17L22.6699 19L20.6699 21"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.6699 22H8.66992C5.16992 22 3.66992 20 3.66992 17V7C3.66992 4 5.16992 2 8.66992 2H16.6699C20.1699 2 21.6699 4 21.6699 7V14"
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
            d="M18.6699 13C15.9099 13 13.6699 15.24 13.6699 18C13.6699 20.76 15.9099 23 18.6699 23C21.4299 23 23.6699 20.76 23.6699 18C23.6699 15.24 21.4299 13 18.6699 13ZM17.8299 19.27C18.0799 19.52 18.0799 19.93 17.8299 20.19C17.6999 20.32 17.5399 20.38 17.3699 20.38C17.1999 20.38 17.0399 20.32 16.9099 20.19L15.1799 18.46C14.9299 18.21 14.9299 17.8 15.1799 17.54L16.9099 15.81C17.1599 15.56 17.5699 15.56 17.8299 15.81C18.0799 16.06 18.0799 16.47 17.8299 16.73L16.5599 18L17.8299 19.27ZM22.1499 18.46L20.4199 20.19C20.2899 20.32 20.1299 20.38 19.9599 20.38C19.7899 20.38 19.6299 20.32 19.4999 20.19C19.2499 19.94 19.2499 19.53 19.4999 19.27L20.7699 18L19.4999 16.73C19.2499 16.48 19.2499 16.07 19.4999 15.81C19.7499 15.56 20.1599 15.56 20.4199 15.81L22.1499 17.54C22.3999 17.8 22.3999 18.2 22.1499 18.46Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21.6699 7V14C20.8399 13.37 19.7999 13 18.6699 13C15.9099 13 13.6699 15.24 13.6699 18C13.6699 19.63 14.4599 21.09 15.6699 22H8.66992C5.16992 22 3.66992 20 3.66992 17V7C3.66992 4 5.16992 2 8.66992 2H9.59991L9.63992 3.53003C9.65992 4.34003 10.3299 5 11.1399 5H14.1699C14.9899 5 15.6699 4.32 15.6699 3.5V2H16.6699C20.1699 2 21.6699 4 21.6699 7Z"
            fill="currentColor"
          />
          <path
            d="M15.6701 2V3.5C15.6701 4.32 14.9901 5 14.1701 5H11.1401C10.3301 5 9.66011 4.34003 9.64011 3.53003L9.6001 2H15.6701Z"
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
            d="M18.6699 13C15.9099 13 13.6699 15.24 13.6699 18C13.6699 20.76 15.9099 23 18.6699 23C21.4299 23 23.6699 20.76 23.6699 18C23.6699 15.24 21.4299 13 18.6699 13ZM17.8299 19.27C18.0799 19.52 18.0799 19.93 17.8299 20.19C17.6999 20.32 17.5399 20.38 17.3699 20.38C17.1999 20.38 17.0399 20.32 16.9099 20.19L15.1799 18.46C14.9299 18.21 14.9299 17.8 15.1799 17.54L16.9099 15.81C17.1599 15.56 17.5699 15.56 17.8299 15.81C18.0799 16.06 18.0799 16.47 17.8299 16.73L16.5599 18L17.8299 19.27ZM22.1499 18.46L20.4199 20.19C20.2899 20.32 20.1299 20.38 19.9599 20.38C19.7899 20.38 19.6299 20.32 19.4999 20.19C19.2499 19.94 19.2499 19.53 19.4999 19.27L20.7799 18L19.5099 16.73C19.2599 16.48 19.2599 16.07 19.5099 15.81C19.7599 15.56 20.1699 15.56 20.4299 15.81L22.1599 17.54C22.3999 17.8 22.3999 18.2 22.1499 18.46Z"
            fill="currentColor"
          />
          <path
            d="M21.6699 7.00004V11.47C21.6699 11.82 21.3299 12.06 21.0099 11.94C19.8999 11.51 18.6599 11.37 17.3599 11.63C14.7599 12.15 12.6899 14.28 12.2599 16.9C11.9999 18.5 12.3199 20.01 13.0499 21.24C13.2499 21.58 13.0099 22 12.6199 22H8.66992C5.16992 22 3.66992 20 3.66992 17V7.00004C3.66992 4.34004 4.84992 2.47004 7.55992 2.08004C7.84992 2.04004 8.10992 2.27004 8.11992 2.57004L8.14992 3.58004C8.17992 5.18004 9.52992 6.50004 11.1499 6.50004H14.1699C15.8199 6.50004 17.1699 5.15004 17.1699 3.50004V2.57004C17.1699 2.27004 17.4299 2.03004 17.7199 2.07004C20.4699 2.44004 21.6699 4.32004 21.6699 7.00004Z"
            fill="currentColor"
          />
          <path
            d="M15.67 3V3.5C15.67 4.32 14.99 5 14.17 5H11.14C10.33 5 9.66004 4.35 9.64004 3.54L9.63004 3.03C9.61004 2.46 10.06 2 10.63 2H14.67C15.22 2 15.67 2.45 15.67 3Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMobileProgramming as IconComponentType).keywords = [
  "mobile",
  "programming",
  "transportable",
  "movable",
  "moveable",
  "moving",
  "raiseable",
  "maneuverable",
  "manoeuvrable",
  "raisable",
  "rotatable",
  "computer programming",
  "scheduling",
  "airtime",
  "television",
  "broadcasting",
  "plan",
  "software",
  "programmer",
  "programmatic",
];

export default IconMobileProgramming as IconComponentType;
