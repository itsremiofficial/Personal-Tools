import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconSpecialEffects: FC<IconProps> = ({
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
            d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M6 8V7.25C5.58579 7.25 5.25 7.58579 5.25 8H6ZM10 8.75C10.4142 8.75 10.75 8.41421 10.75 8C10.75 7.58579 10.4142 7.25 10 7.25V8.75ZM10 12.75C10.4142 12.75 10.75 12.4142 10.75 12C10.75 11.5858 10.4142 11.25 10 11.25V12.75ZM18.6 8.45C18.8485 8.11863 18.7814 7.64853 18.45 7.4C18.1186 7.15147 17.6485 7.21863 17.4 7.55L18.6 8.45ZM11.4 15.55C11.1515 15.8814 11.2186 16.3515 11.55 16.6C11.8814 16.8485 12.3515 16.7814 12.6 16.45L11.4 15.55ZM12.6 7.55C12.3515 7.21863 11.8814 7.15147 11.55 7.4C11.2186 7.64853 11.1515 8.11863 11.4 8.45L12.6 7.55ZM17.4 16.45C17.6485 16.7814 18.1186 16.8485 18.45 16.6C18.7814 16.3515 18.8485 15.8814 18.6 15.55L17.4 16.45ZM5.25 16C5.25 16.4142 5.58579 16.75 6 16.75C6.41421 16.75 6.75 16.4142 6.75 16H5.25ZM6 8.75H10V7.25H6V8.75ZM6 12.75H10V11.25H6V12.75ZM17.4 7.55L14.4 11.55L15.6 12.45L18.6 8.45L17.4 7.55ZM14.4 11.55L11.4 15.55L12.6 16.45L15.6 12.45L14.4 11.55ZM11.4 8.45L14.4 12.45L15.6 11.55L12.6 7.55L11.4 8.45ZM14.4 12.45L17.4 16.45L18.6 15.55L15.6 11.55L14.4 12.45ZM5.25 8V12H6.75V8H5.25ZM5.25 12V16H6.75V12H5.25Z"
            fill="currentColor"
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
            d="M3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355Z"
            fill="currentColor"
          />
          <path
            d="M5.25 8.00004C5.25 7.58583 5.58579 7.25004 6 7.25004H10C10.4142 7.25004 10.75 7.58583 10.75 8.00004C10.75 8.41426 10.4142 8.75004 10 8.75004H6.75V11.25H10C10.4142 11.25 10.75 11.5858 10.75 12C10.75 12.4143 10.4142 12.75 10 12.75H6.75V16C6.75 16.4143 6.41421 16.75 6 16.75C5.58579 16.75 5.25 16.4143 5.25 16V12V8.00004Z"
            fill="currentColor"
          />
          <path
            d="M11.55 7.40004C11.8814 7.15152 12.3515 7.21867 12.6 7.55004L15 10.75L17.4 7.55004C17.6485 7.21867 18.1186 7.15152 18.45 7.40004C18.7814 7.64857 18.8485 8.11867 18.6 8.45004L15.9375 12L18.6 15.55C18.8485 15.8814 18.7814 16.3515 18.45 16.6C18.1186 16.8486 17.6485 16.7814 17.4 16.45L15 13.25L12.6 16.45C12.3515 16.7814 11.8814 16.8486 11.55 16.6C11.2186 16.3515 11.1515 15.8814 11.4 15.55L14.0625 12L11.4 8.45004C11.1515 8.11867 11.2186 7.64857 11.55 7.40004Z"
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
            d="M3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447ZM6.75 11.25H10C10.4142 11.25 10.75 11.5858 10.75 12C10.75 12.4142 10.4142 12.75 10 12.75H6.75V16C6.75 16.4142 6.41421 16.75 6 16.75C5.58579 16.75 5.25 16.4142 5.25 16V12V8C5.25 7.58579 5.58579 7.25 6 7.25H10C10.4142 7.25 10.75 7.58579 10.75 8C10.75 8.41421 10.4142 8.75 10 8.75H6.75V11.25ZM11.55 7.4C11.8814 7.15147 12.3515 7.21863 12.6 7.55L15 10.75L17.4 7.55C17.6485 7.21863 18.1186 7.15147 18.45 7.4C18.7814 7.64853 18.8485 8.11863 18.6 8.45L15.9375 12L18.6 15.55C18.8485 15.8814 18.7814 16.3515 18.45 16.6C18.1186 16.8485 17.6485 16.7814 17.4 16.45L15 13.25L12.6 16.45C12.3515 16.7814 11.8814 16.8485 11.55 16.6C11.2186 16.3515 11.1515 15.8814 11.4 15.55L14.0625 12L11.4 8.45C11.1515 8.11863 11.2186 7.64853 11.55 7.4Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSpecialEffects as IconComponentType).keywords = [
  "special",
  "effects",
  "specific",
  "particular",
  "especial",
  "exceptional",
  "extraordinary",
  "primary",
  "peculiar",
  "uncommon",
  "extra",
  "personal effects",
  "adverse",
  "affect",
  "affected",
  "affecting",
  "affects",
  "after-effects",
  "aftereffects",
  "aftermath",
];

export default IconSpecialEffects as IconComponentType;
