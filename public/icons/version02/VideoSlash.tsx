import { FC } from "react";

const IconVideoSlash: FC<IconProps> = ({
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
            d="M17.2999 7.58C17.2999 7.58 17.3299 6.63 17.2999 6.32C17.1299 4.28 15.7999 3.58 13.1899 3.58H6.87992C3.71992 3.58 2.66992 4.63 2.66992 7.79V16.21C2.66992 17.47 3.04992 18.74 4.03992 19.55L4.66992 20"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.4097 10.95V16.21C17.4097 19.37 16.3597 20.42 13.1997 20.42H7.92969"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.6702 6.74001V15.81C22.6702 17.48 21.5502 18.06 20.1902 17.1L17.4102 15.15"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.6895 2.19L2.68945 22.19"
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
            d="M18.3199 6.56L4.86992 20.01C3.46992 19.12 2.91992 17.53 2.91992 16V8C2.91992 4.58 4.24992 3.25 7.66992 3.25H13.6699C16.5599 3.25 17.9599 4.2 18.3199 6.56Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M18.42 9.25V16C18.42 16.08 18.41 16.14 18.41 16.21C18.41 16.28 18.4 16.35 18.4 16.42H18.41C18.3 19.53 16.95 20.75 13.67 20.75H7.66996C7.41996 20.75 7.18996 20.74 6.95996 20.71L18.42 9.25Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M18.4004 16.42C18.4004 16.35 18.4104 16.28 18.4104 16.21C18.4204 16.28 18.4204 16.35 18.4104 16.42H18.4004Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M18.4104 7.57C18.4204 7.64 18.4204 7.72 18.4104 7.79C18.4104 7.72 18.4004 7.65 18.4004 7.58L18.4104 7.57Z"
            fill="currentColor"
          />
          <path
            d="M23.4204 8.38V15.62C23.4204 17.05 22.7304 17.62 22.3204 17.83C22.1304 17.93 21.8404 18.04 21.4704 18.04C21.0404 18.04 20.5004 17.9 19.8804 17.46L18.4104 16.42H18.4004C18.4004 16.35 18.4104 16.28 18.4104 16.21C18.4104 16.14 18.4204 16.08 18.4204 16V9.25L21.6904 5.98C21.9604 6 22.1704 6.08 22.3204 6.17C22.7304 6.38 23.4204 6.95 23.4204 8.38Z"
            fill="currentColor"
          />
          <path
            d="M22.4398 2.23C22.1398 1.93 21.6498 1.93 21.3498 2.23L2.8998 20.69C2.5998 20.99 2.5998 21.48 2.8998 21.78C3.0498 21.92 3.2398 22 3.4398 22C3.6398 22 3.8298 21.92 3.9798 21.77L22.4398 3.31C22.7498 3.01 22.7498 2.53 22.4398 2.23Z"
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
            opacity={duotone ? "0.4" : "1"}
            d="M18.4104 7.57001C18.4204 7.64001 18.4204 7.72001 18.4104 7.79001C18.4104 7.72001 18.4004 7.65001 18.4004 7.58001L18.4104 7.57001Z"
            fill="currentColor"
          />
          <path
            d="M17.9498 6.56L4.4998 20.01C3.0998 19.12 2.5498 17.53 2.5498 16V8C2.5498 4.58 3.8798 3.25 7.2998 3.25H13.2998C16.1898 3.25 17.5798 4.2 17.9498 6.56Z"
            fill="currentColor"
          />
          <path
            d="M22.0699 2.23C21.7699 1.93 21.2799 1.93 20.9799 2.23L2.51992 20.69C2.21992 20.99 2.21992 21.48 2.51992 21.78C2.66992 21.92 2.86992 22 3.05992 22C3.25992 22 3.44992 21.92 3.59992 21.77L22.0699 3.31C22.3699 3.01 22.3699 2.53 22.0699 2.23Z"
            fill="currentColor"
          />
          <path
            d="M23.0501 8.38V15.62C23.0501 17.05 22.3501 17.62 21.9501 17.83C21.7601 17.93 21.4601 18.04 21.0901 18.04C20.6601 18.04 20.1301 17.9 19.5101 17.46L18.0301 16.42C17.9601 18.63 17.2601 19.89 15.6701 20.42C15.0301 20.65 14.2401 20.75 13.2901 20.75H7.29008C7.05008 20.75 6.82008 20.74 6.58008 20.71L15.6701 11.63L21.3201 5.98C21.5801 6 21.7901 6.08 21.9501 6.17C22.3501 6.38 23.0501 6.95 23.0501 8.38Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconVideoSlash as IconComponent).keywords = [
  "video",
  "slash",
  "tv",
  "television",
  "picture",
  "telecasting",
  "televised",
  "videotaping",
  "videotaped",
  "taping",
  "videotape",
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

export default IconVideoSlash as IconComponent;
