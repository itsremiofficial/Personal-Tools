import { FC } from "react";

const IconMessageNotif: FC<IconProps> = ({
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
            d="M22.6699 10V13C22.6699 17 20.6699 19 16.6699 19H16.1699C15.8599 19 15.5599 19.15 15.3699 19.4L13.8699 21.4C13.2099 22.28 12.1299 22.28 11.4699 21.4L9.96992 19.4C9.80992 19.18 9.43992 19 9.16992 19H8.66992C4.66992 19 2.66992 18 2.66992 13V8C2.66992 4 4.66992 2 8.66992 2H14.6699"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20.1699 7C21.5506 7 22.6699 5.88071 22.6699 4.5C22.6699 3.11929 21.5506 2 20.1699 2C18.7892 2 17.6699 3.11929 17.6699 4.5C17.6699 5.88071 18.7892 7 20.1699 7Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.6664 11H16.6754"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.6654 11H12.6744"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.66443 11H8.67341"
            stroke="currentColor"
            strokeWidth="2"
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
            d="M20.6699 6.75C22.1887 6.75 23.4199 5.51878 23.4199 4C23.4199 2.48122 22.1887 1.25 20.6699 1.25C19.1511 1.25 17.9199 2.48122 17.9199 4C17.9199 5.51878 19.1511 6.75 20.6699 6.75Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20.6699 8C18.4599 8 16.6699 6.21 16.6699 4C16.6699 3.27 16.8799 2.59 17.2299 2H7.66992C4.90992 2 2.66992 4.23 2.66992 6.98V12.96V13.96C2.66992 16.71 4.90992 18.94 7.66992 18.94H9.16992C9.43992 18.94 9.79992 19.12 9.96992 19.34L11.4699 21.33C12.1299 22.21 13.2099 22.21 13.8699 21.33L15.3699 19.34C15.5599 19.09 15.8599 18.94 16.1699 18.94H17.6699C20.4299 18.94 22.6699 16.71 22.6699 13.96V7.44C22.0799 7.79 21.3999 8 20.6699 8Z"
            fill="currentColor"
          />
          <path
            d="M12.6699 12C12.1099 12 11.6699 11.55 11.6699 11C11.6699 10.45 12.1199 10 12.6699 10C13.2199 10 13.6699 10.45 13.6699 11C13.6699 11.55 13.2299 12 12.6699 12Z"
            fill="currentColor"
          />
          <path
            d="M16.6699 12C16.1099 12 15.6699 11.55 15.6699 11C15.6699 10.45 16.1199 10 16.6699 10C17.2199 10 17.6699 10.45 17.6699 11C17.6699 11.55 17.2299 12 16.6699 12Z"
            fill="currentColor"
          />
          <path
            d="M8.66992 12C8.10992 12 7.66992 11.55 7.66992 11C7.66992 10.45 8.11992 10 8.66992 10C9.21992 10 9.66992 10.45 9.66992 11C9.66992 11.55 9.22992 12 8.66992 12Z"
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
            d="M20.6699 6.75C22.1887 6.75 23.4199 5.51878 23.4199 4C23.4199 2.48122 22.1887 1.25 20.6699 1.25C19.1511 1.25 17.9199 2.48122 17.9199 4C17.9199 5.51878 19.1511 6.75 20.6699 6.75Z"
            fill="currentColor"
          />
          <path
            d="M19.7099 8.15C18.1399 7.81 16.8599 6.53 16.5199 4.96C16.3899 4.35 16.3799 3.76 16.4899 3.2C16.6199 2.58 16.1599 2 15.5199 2H7.66992C4.90992 2 2.66992 4.24 2.66992 7V13.95C2.66992 16.71 4.90992 18.95 7.66992 18.95H9.16992C9.44992 18.95 9.80992 19.13 9.96992 19.35L11.4699 21.34C12.1299 22.22 13.2099 22.22 13.8699 21.34L15.3699 19.35C15.5599 19.1 15.8499 18.95 16.1699 18.95H17.6799C20.4399 18.95 22.6699 16.72 22.6699 13.96V9.15C22.6699 8.52 22.0899 8.06 21.4699 8.18C20.9099 8.28 20.3199 8.28 19.7099 8.15ZM8.66992 12C8.10992 12 7.66992 11.55 7.66992 11C7.66992 10.45 8.10992 10 8.66992 10C9.21992 10 9.66992 10.45 9.66992 11C9.66992 11.55 9.22992 12 8.66992 12ZM12.6699 12C12.1099 12 11.6699 11.55 11.6699 11C11.6699 10.45 12.1099 10 12.6699 10C13.2199 10 13.6699 10.45 13.6699 11C13.6699 11.55 13.2299 12 12.6699 12ZM16.6699 12C16.1099 12 15.6699 11.55 15.6699 11C15.6699 10.45 16.1099 10 16.6699 10C17.2199 10 17.6699 10.45 17.6699 11C17.6699 11.55 17.2299 12 16.6699 12Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMessageNotif as IconComponent).keywords = [
  "message",
  "notif",
  "subject matter",
  "substance",
  "content",
  "file",
  "communiqué",
  "transmission",
  "communication",
  "news",
  "advertisement",
  "buzzer",
  "sharpie",
  "freq",
  "snout",
  "deets",
  "sticky note",
  "goss",
  "nooz",
  "bullfuck",
];

export default IconMessageNotif as IconComponent;
