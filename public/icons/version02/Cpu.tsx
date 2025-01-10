import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconCpu: FC<IconProps> = ({
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
            d="M10.2699 20H15.0699C19.0699 20 20.6699 18.4 20.6699 14.4V9.6C20.6699 5.6 19.0699 4 15.0699 4H10.2699C6.26992 4 4.66992 5.6 4.66992 9.6V14.4C4.66992 18.4 6.26992 20 10.2699 20Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M11.1699 17H14.1699C16.6699 17 17.6699 16 17.6699 13.5V10.5C17.6699 8 16.6699 7 14.1699 7H11.1699C8.66992 7 7.66992 8 7.66992 10.5V13.5C7.66992 16 8.66992 17 11.1699 17Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.67969 4V2"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.6699 4V2"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.6699 4V2"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20.6699 8H22.6699"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20.6699 12H22.6699"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20.6699 16H22.6699"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.6699 20V22"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.6797 20V22"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.67969 20V22"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2.66992 8H4.66992"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2.66992 12H4.66992"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2.66992 16H4.66992"
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
            d="M15.6699 4H9.66992C6.90992 4 4.66992 6.24 4.66992 9V15C4.66992 17.76 6.90992 20 9.66992 20H15.6699C18.4299 20 20.6699 17.76 20.6699 15V9C20.6699 6.24 18.4299 4 15.6699 4ZM17.9299 14.26C17.9299 15.92 16.5899 17.26 14.9299 17.26H10.4099C8.74992 17.26 7.40992 15.92 7.40992 14.26V9.74C7.40992 8.08 8.74992 6.74 10.4099 6.74H14.9199C16.5799 6.74 17.9199 8.08 17.9199 9.74V14.26H17.9299Z"
            fill="currentColor"
          />
          <path
            d="M9.72949 2.75V4H9.66949C9.16949 4 8.68949 4.07 8.22949 4.21V2.75C8.22949 2.34 8.55949 2 8.97949 2C9.38949 2 9.72949 2.34 9.72949 2.75Z"
            fill="currentColor"
          />
          <path
            d="M13.4199 2.75V4H11.9199V2.75C11.9199 2.34 12.2599 2 12.6699 2C13.0799 2 13.4199 2.34 13.4199 2.75Z"
            fill="currentColor"
          />
          <path
            d="M17.1201 2.75V4.21C16.6601 4.07 16.1701 4 15.6701 4H15.6201V2.75C15.6201 2.34 15.9601 2 16.3701 2C16.7801 2 17.1201 2.34 17.1201 2.75Z"
            fill="currentColor"
          />
          <path
            d="M22.67 8.30005C22.67 8.72005 22.34 9.05005 21.92 9.05005H20.67V9.00005C20.67 8.50005 20.6 8.01005 20.46 7.55005H21.92C22.34 7.55005 22.67 7.89005 22.67 8.30005Z"
            fill="currentColor"
          />
          <path
            d="M22.6699 12C22.6699 12.41 22.3399 12.75 21.9199 12.75H20.6699V11.25H21.9199C22.3399 11.25 22.6699 11.58 22.6699 12Z"
            fill="currentColor"
          />
          <path
            d="M22.67 15.7C22.67 16.11 22.34 16.45 21.92 16.45H20.46C20.6 15.99 20.67 15.5 20.67 15V14.95H21.92C22.34 14.95 22.67 15.28 22.67 15.7Z"
            fill="currentColor"
          />
          <path
            d="M17.1201 19.79V21.25C17.1201 21.66 16.7801 22 16.3701 22C15.9601 22 15.6201 21.66 15.6201 21.25V20H15.6701C16.1701 20 16.6601 19.93 17.1201 19.79Z"
            fill="currentColor"
          />
          <path
            d="M13.4297 20V21.25C13.4297 21.66 13.0897 22 12.6797 22C12.2597 22 11.9297 21.66 11.9297 21.25V20H13.4297Z"
            fill="currentColor"
          />
          <path
            d="M9.72949 20V21.25C9.72949 21.66 9.38949 22 8.97949 22C8.55949 22 8.22949 21.66 8.22949 21.25V19.79C8.68949 19.93 9.16949 20 9.66949 20H9.72949Z"
            fill="currentColor"
          />
          <path
            d="M4.87992 7.55005C4.73992 8.01005 4.66992 8.50005 4.66992 9.00005V9.05005H3.41992C3.00992 9.05005 2.66992 8.72005 2.66992 8.30005C2.66992 7.89005 3.00992 7.55005 3.41992 7.55005H4.87992Z"
            fill="currentColor"
          />
          <path
            d="M4.66992 11.25V12.75H3.41992C3.00992 12.75 2.66992 12.41 2.66992 12C2.66992 11.58 3.00992 11.25 3.41992 11.25H4.66992Z"
            fill="currentColor"
          />
          <path
            d="M4.87992 16.45H3.41992C3.00992 16.45 2.66992 16.11 2.66992 15.7C2.66992 15.28 3.00992 14.95 3.41992 14.95H4.66992V15C4.66992 15.5 4.73992 15.99 4.87992 16.45Z"
            fill="currentColor"
          />
          <path
            d="M17.9302 9.73999V14.25C17.9302 15.91 16.5902 17.25 14.9302 17.25H10.4102C8.75016 17.25 7.41016 15.91 7.41016 14.25V9.73999C7.41016 8.07999 8.75016 6.73999 10.4102 6.73999H14.9202C16.5802 6.73999 17.9302 8.08999 17.9302 9.73999Z"
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
            d="M21.9199 12.75C22.3399 12.75 22.6699 12.41 22.6699 12C22.6699 11.58 22.3399 11.25 21.9199 11.25H20.6699V9.05H21.9199C22.3399 9.05 22.6699 8.72 22.6699 8.3C22.6699 7.89 22.3399 7.55 21.9199 7.55H20.4399C19.9599 5.96 18.7099 4.71 17.1199 4.23V2.75C17.1199 2.34 16.7799 2 16.3699 2C15.9599 2 15.6199 2.34 15.6199 2.75V4H13.4199V2.75C13.4199 2.34 13.0799 2 12.6699 2C12.2599 2 11.9199 2.34 11.9199 2.75V4H9.72992V2.75C9.72992 2.34 9.38992 2 8.97992 2C8.55992 2 8.22992 2.34 8.22992 2.75V4.23C6.62992 4.71 5.37992 5.96 4.89992 7.55H3.41992C3.00992 7.55 2.66992 7.89 2.66992 8.3C2.66992 8.72 3.00992 9.05 3.41992 9.05H4.66992V11.25H3.41992C3.00992 11.25 2.66992 11.58 2.66992 12C2.66992 12.41 3.00992 12.75 3.41992 12.75H4.66992V14.95H3.41992C3.00992 14.95 2.66992 15.28 2.66992 15.7C2.66992 16.11 3.00992 16.45 3.41992 16.45H4.89992C5.36992 18.04 6.62992 19.29 8.22992 19.77V21.25C8.22992 21.66 8.55992 22 8.97992 22C9.38992 22 9.72992 21.66 9.72992 21.25V20H11.9299V21.25C11.9299 21.66 12.2599 22 12.6799 22C13.0899 22 13.4299 21.66 13.4299 21.25V20H15.6199V21.25C15.6199 21.66 15.9599 22 16.3699 22C16.7799 22 17.1199 21.66 17.1199 21.25V19.77C18.7099 19.29 19.9599 18.04 20.4399 16.45H21.9199C22.3399 16.45 22.6699 16.11 22.6699 15.7C22.6699 15.28 22.3399 14.95 21.9199 14.95H20.6699V12.75H21.9199ZM17.9299 14.26C17.9299 15.91 16.5799 17.26 14.9299 17.26H10.4099C8.75992 17.26 7.40992 15.91 7.40992 14.26V9.74C7.40992 8.09 8.75992 6.74 10.4099 6.74H14.9299C16.5799 6.74 17.9299 8.09 17.9299 9.74V14.26Z"
            fill="currentColor"
          />
          <path
            d="M10.6899 16.25H14.6599C15.9099 16.25 16.9299 15.24 16.9299 13.98V10.01C16.9299 8.75999 15.9199 7.73999 14.6599 7.73999H10.6899C9.43992 7.73999 8.41992 8.74999 8.41992 10.01V13.98C8.41992 15.24 9.42992 16.25 10.6899 16.25Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCpu as IconComponentType).keywords = [
  "cpu",
  "central processing unit",
  "mainframe",
  "processor",
  "central processor",
  "eeprom",
  "upc",
  "uct",
  "ucp",
  "utilization",
];

export default IconCpu as IconComponentType;
