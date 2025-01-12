import { FC } from "react";

const IconNotification: FC<IconProps> = ({
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
            d="M19.6699 8C21.3268 8 22.6699 6.65685 22.6699 5C22.6699 3.34315 21.3268 2 19.6699 2C18.0131 2 16.6699 3.34315 16.6699 5C16.6699 6.65685 18.0131 8 19.6699 8Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.6699 2H9.66992C4.66992 2 2.66992 4 2.66992 9V15C2.66992 20 4.66992 22 9.66992 22H15.6699C20.6699 22 22.6699 20 22.6699 15V10"
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
            d="M19.6699 8C21.3268 8 22.6699 6.65685 22.6699 5C22.6699 3.34315 21.3268 2 19.6699 2C18.0131 2 16.6699 3.34315 16.6699 5C16.6699 6.65685 18.0131 8 19.6699 8Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19.6699 9.5C17.1899 9.5 15.1699 7.48 15.1699 5C15.1699 4.28 15.3599 3.61 15.6599 3H8.18992C4.73992 3 2.66992 5.06 2.66992 8.52V16.47C2.66992 19.94 4.73992 22 8.18992 22H16.1399C19.5999 22 21.6599 19.94 21.6599 16.48V9.01C21.0599 9.31 20.3899 9.5 19.6699 9.5Z"
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
            d="M19.6699 8C21.3268 8 22.6699 6.65685 22.6699 5C22.6699 3.34315 21.3268 2 19.6699 2C18.0131 2 16.6699 3.34315 16.6699 5C16.6699 6.65685 18.0131 8 19.6699 8Z"
            fill="currentColor"
          />
          <path
            d="M21.6699 10.4V16.48C21.6699 16.62 21.6599 16.76 21.6499 16.89C21.6399 17.01 21.6299 17.12 21.6099 17.24C21.5999 17.36 21.5799 17.48 21.5599 17.59C21.2099 20.01 19.6699 21.54 17.2599 21.89C17.1499 21.91 17.0299 21.93 16.9099 21.94C16.7899 21.96 16.6799 21.97 16.5599 21.98C16.4299 21.99 16.2899 22 16.1499 22H8.18992C8.04992 22 7.90992 21.99 7.77992 21.98C7.65992 21.97 7.54992 21.96 7.42992 21.94C7.30992 21.93 7.18992 21.91 7.07992 21.89C4.66992 21.54 3.12992 20.01 2.77992 17.59C2.75992 17.48 2.73992 17.36 2.72992 17.24C2.70992 17.12 2.69992 17.01 2.68992 16.89C2.67992 16.76 2.66992 16.62 2.66992 16.48V8.52C2.66992 8.38 2.67992 8.24 2.68992 8.11C2.69992 7.99 2.70992 7.88 2.72992 7.76C2.73992 7.64 2.75992 7.52 2.77992 7.41C3.12992 4.99 4.66992 3.46 7.07992 3.11C7.18992 3.09 7.30992 3.07 7.42992 3.06C7.54992 3.04 7.65992 3.03 7.77992 3.02C7.90992 3.01 8.04992 3 8.18992 3H14.2699C14.9099 3 15.3699 3.58 15.2499 4.2C15.2499 4.22 15.2399 4.24 15.2399 4.26C15.2199 4.36 15.2099 4.46 15.1899 4.57C15.1499 4.99 15.1699 5.44 15.2599 5.9C15.2899 6.02 15.3099 6.12 15.3499 6.23C15.4299 6.56 15.5599 6.87 15.7299 7.16C15.7899 7.28 15.8699 7.4 15.9399 7.51C16.2699 7.99 16.6799 8.4 17.1599 8.73C17.2699 8.8 17.3899 8.88 17.5099 8.94C17.7999 9.11 18.1099 9.24 18.4399 9.32C18.5499 9.36 18.6499 9.38 18.7699 9.41C19.2299 9.5 19.6799 9.52 20.0999 9.48C20.2099 9.46 20.3099 9.45 20.4099 9.43C20.4299 9.43 20.4499 9.42 20.4699 9.42C21.0899 9.3 21.6699 9.76 21.6699 10.4Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconNotification as IconComponent).keywords = [
  "notification",
  "apprisal",
  "notice",
  "telling",
  "presentment",
  "notifying",
  "notifier",
  "notify",
  "denunciation",
  "announcement",
];

export default IconNotification as IconComponent;
