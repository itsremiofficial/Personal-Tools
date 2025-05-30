import { FC } from "react";

const IconLock: FC<IconProps> = ({
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
            d="M6.66992 10V8C6.66992 4.69 7.66992 2 12.6699 2C17.6699 2 18.6699 4.69 18.6699 8V10"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.6699 18.5C14.0506 18.5 15.1699 17.3807 15.1699 16C15.1699 14.6193 14.0506 13.5 12.6699 13.5C11.2892 13.5 10.1699 14.6193 10.1699 16C10.1699 17.3807 11.2892 18.5 12.6699 18.5Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.6699 22H7.66992C3.66992 22 2.66992 21 2.66992 17V15C2.66992 11 3.66992 10 7.66992 10H17.6699C21.6699 10 22.6699 11 22.6699 15V17C22.6699 21 21.6699 22 17.6699 22Z"
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
            d="M12.67 17.3498C13.5703 17.3498 14.3 16.6201 14.3 15.7198C14.3 14.8196 13.5703 14.0898 12.67 14.0898C11.7698 14.0898 11.04 14.8196 11.04 15.7198C11.04 16.6201 11.7698 17.3498 12.67 17.3498Z"
            fill="currentColor"
          />
          <path
            d="M17.3199 9.43994H8.01992C3.91992 9.43994 2.66992 10.6899 2.66992 14.7899V16.6499C2.66992 20.7499 3.91992 21.9999 8.01992 21.9999H17.3199C21.4199 21.9999 22.6699 20.7499 22.6699 16.6499V14.7899C22.6699 10.6899 21.4199 9.43994 17.3199 9.43994ZM12.6699 18.7399C10.9999 18.7399 9.64992 17.3799 9.64992 15.7199C9.64992 14.0599 10.9999 12.6999 12.6699 12.6999C14.3399 12.6999 15.6899 14.0599 15.6899 15.7199C15.6899 17.3799 14.3399 18.7399 12.6699 18.7399Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.79014 9.45V8.28C7.79014 5.35 8.62014 3.4 12.6701 3.4C16.7201 3.4 17.5501 5.35 17.5501 8.28V9.45C18.0601 9.46 18.5201 9.48 18.9501 9.54V8.28C18.9501 5.58 18.3001 2 12.6701 2C7.04014 2 6.39014 5.58 6.39014 8.28V9.53C6.81014 9.48 7.28014 9.45 7.79014 9.45Z"
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
            d="M12.67 17.3498C13.5703 17.3498 14.3 16.6201 14.3 15.7198C14.3 14.8196 13.5703 14.0898 12.67 14.0898C11.7698 14.0898 11.04 14.8196 11.04 15.7198C11.04 16.6201 11.7698 17.3498 12.67 17.3498Z"
            fill="currentColor"
          />
          <path
            d="M18.9499 9.53V8.28C18.9499 5.58 18.2999 2 12.6699 2C7.03992 2 6.38992 5.58 6.38992 8.28V9.53C3.58992 9.88 2.66992 11.3 2.66992 14.79V16.65C2.66992 20.75 3.91992 22 8.01992 22H17.3199C21.4199 22 22.6699 20.75 22.6699 16.65V14.79C22.6699 11.3 21.7499 9.88 18.9499 9.53ZM12.6699 18.74C10.9999 18.74 9.64992 17.38 9.64992 15.72C9.64992 14.05 11.0099 12.7 12.6699 12.7C14.3299 12.7 15.6899 14.06 15.6899 15.72C15.6899 17.39 14.3399 18.74 12.6699 18.74ZM8.01992 9.44C7.93992 9.44 7.86992 9.44 7.78992 9.44V8.28C7.78992 5.35 8.61992 3.4 12.6699 3.4C16.7199 3.4 17.5499 5.35 17.5499 8.28V9.45C17.4699 9.45 17.3999 9.45 17.3199 9.45H8.01992V9.44Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconLock as IconComponent).keywords = [
  "lock",
  "interlock",
  "lock in",
  "mesh",
  "interlace",
  "whorl",
  "lock away",
  "curl",
  "ringlet",
  "put away",
];

export default IconLock as IconComponent;
