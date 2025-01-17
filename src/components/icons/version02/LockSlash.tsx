import { FC } from "react";

const IconLockSlash: FC<IconProps> = ({
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
            d="M10.6899 17.52C11.1499 18.11 11.8699 18.5 12.6699 18.5C14.0499 18.5 15.1699 17.38 15.1699 16C15.1699 15.43 14.9799 14.9 14.6599 14.48"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.48992 20.8C2.87992 20.04 2.66992 18.83 2.66992 17V15C2.66992 11 3.66992 10 7.66992 10H17.6699C18.0299 10 18.3599 10.01 18.6699 10.03C21.8399 10.21 22.6699 11.36 22.6699 15V17C22.6699 21 21.6699 22 17.6699 22H7.66992C7.30992 22 6.97992 21.99 6.66992 21.97"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6.66992 10V8C6.66992 4.69 7.66992 2 12.6699 2C16.8199 2 18.2099 3.38 18.5699 5.56"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.6699 2L2.66992 22"
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
            d="M14.2997 15.72C14.2997 16.62 13.5697 17.35 12.6697 17.35C12.0297 17.35 11.4797 16.98 11.2197 16.45L13.3997 14.27C13.9297 14.53 14.2997 15.08 14.2997 15.72Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.01992 9.43994C3.91992 9.43994 2.66992 10.6899 2.66992 14.7899V16.6499C2.66992 18.6999 2.97992 20.0399 3.80992 20.8599L9.76992 14.8999C10.0499 13.8899 10.8399 13.0999 11.8499 12.8199L15.2299 9.43994H8.01992Z"
            fill="currentColor"
          />
          <path
            d="M18.8001 5.87L17.5401 7.13C17.5001 5.35 16.8301 3.4 12.6701 3.4C8.62014 3.4 7.79014 5.35 7.79014 8.28V9.45C7.28014 9.45 6.81014 9.48 6.39014 9.53V8.28C6.39014 5.58 7.04014 2 12.6701 2C16.2101 2 18.2701 3.3 18.8001 5.87Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.6698 14.79V16.65C22.6698 20.75 21.4198 22 17.3198 22H8.01984C7.17984 22 6.44984 21.95 5.83984 21.83L10.1998 17.47C10.7598 18.24 11.6498 18.74 12.6698 18.74C14.3398 18.74 15.6898 17.39 15.6898 15.72C15.6898 14.7 15.1898 13.81 14.4198 13.25L18.2098 9.45996C21.5998 9.64996 22.6698 11 22.6698 14.79Z"
            fill="currentColor"
          />
          <path
            d="M22.4398 2.22988C22.1398 1.92988 21.6498 1.92988 21.3498 2.22988L2.8998 20.6899C2.5998 20.9899 2.5998 21.4799 2.8998 21.7799C3.0498 21.9199 3.2398 21.9999 3.4398 21.9999C3.6398 21.9999 3.8298 21.9199 3.9798 21.7699L22.4398 3.30988C22.7498 3.00988 22.7498 2.52988 22.4398 2.22988Z"
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
            d="M14.2997 15.72C14.2997 16.62 13.5697 17.35 12.6697 17.35C12.0297 17.35 11.4797 16.98 11.2197 16.45L13.3997 14.27C13.9297 14.53 14.2997 15.08 14.2997 15.72Z"
            fill="currentColor"
          />
          <path
            d="M22.44 2.23C22.14 1.93 21.65 1.93 21.35 2.23L18.54 5.04C17.77 3.02 15.8 2 12.67 2C7.04004 2 6.39004 5.58 6.39004 8.28V9.53C6.40004 9.53 6.41004 9.53 6.42004 9.53C3.59004 9.87 2.67004 11.28 2.67004 14.79V16.65C2.67004 18.25 2.86004 19.41 3.34004 20.24L2.89004 20.69C2.59004 20.99 2.59004 21.48 2.89004 21.78C3.05004 21.92 3.24004 22 3.44004 22C3.64004 22 3.83004 21.92 3.98004 21.77L22.44 3.31C22.75 3.01 22.75 2.53 22.44 2.23ZM8.02004 9.44C7.94004 9.44 7.87004 9.44 7.79004 9.44V8.28C7.79004 5.35 8.62004 3.4 12.67 3.4C16.07 3.4 17.14 4.7 17.44 6.15L14.15 9.44H8.02004Z"
            fill="currentColor"
          />
          <path
            d="M22.67 14.79V16.65C22.67 20.75 21.42 22 17.32 22H8.07997C7.18997 22 6.74997 20.92 7.37997 20.29L10.2 17.47C10.27 17.57 10.35 17.66 10.43 17.75C11.13 18.51 12.17 18.91 13.32 18.67C13.41 18.65 13.5 18.63 13.59 18.59C13.68 18.57 13.76 18.54 13.84 18.5C14.04 18.43 14.23 18.32 14.41 18.19C14.48 18.15 14.54 18.1 14.59 18.05C14.74 17.93 14.88 17.79 15 17.64C15.05 17.59 15.1 17.53 15.14 17.46C15.27 17.28 15.38 17.09 15.45 16.89C15.49 16.81 15.52 16.73 15.54 16.64C15.58 16.55 15.6 16.46 15.62 16.37C15.86 15.22 15.46 14.18 14.7 13.48C14.62 13.4 14.52 13.32 14.42 13.25L17.54 10.13C17.59 10.08 17.63 10.04 17.68 9.99998C18.08 9.66998 18.59 9.50998 19.1 9.54998C19.19 9.55998 19.29 9.56998 19.38 9.58998C19.55 9.61998 19.72 9.65998 19.88 9.69998C20.04 9.73998 20.19 9.78998 20.34 9.83998C20.63 9.94998 20.88 10.08 21.11 10.23C21.34 10.38 21.53 10.56 21.71 10.77C21.8 10.88 21.89 11 21.96 11.13C22.03 11.24 22.09 11.36 22.15 11.49C22.21 11.62 22.26 11.76 22.31 11.9C22.37 12.07 22.42 12.26 22.46 12.46C22.5 12.6 22.52 12.75 22.55 12.91C22.57 13.06 22.59 13.22 22.61 13.39C22.65 13.81 22.67 14.28 22.67 14.79Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconLockSlash as IconComponent).keywords = [
  "lock",
  "slash",
  "interlock",
  "lock in",
  "mesh",
  "interlace",
  "whorl",
  "lock away",
  "curl",
  "ringlet",
  "put away",
  "flog",
  "gash",
  "lash",
  "cut",
  "slice",
  "whip",
  "thrash",
  "trounce",
  "thrash about",
];

export default IconLockSlash as IconComponent;
