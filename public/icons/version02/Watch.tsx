import { FC } from "react";

const IconWatch: FC<IconProps> = ({
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
            d="M9.16992 19H16.1699C18.4999 19 19.6699 17.83 19.6699 15.5V8.5C19.6699 6.17 18.4999 5 16.1699 5H9.16992C6.83992 5 5.66992 6.17 5.66992 8.5V15.5C5.66992 17.83 6.83992 19 9.16992 19Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.6699 2H8.66992"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.6699 22H8.66992"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.1699 9.5V12.5H15.1699"
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
            opacity={duotone ? "0.4" : "1"}
            d="M9.16992 19H16.1699C18.4999 19 19.6699 17.83 19.6699 15.5V8.5C19.6699 6.17 18.4999 5 16.1699 5H9.16992C6.83992 5 5.66992 6.17 5.66992 8.5V15.5C5.66992 17.83 6.83992 19 9.16992 19Z"
            fill="currentColor"
          />
          <path
            d="M16.6699 3.75H8.66992C8.25992 3.75 7.91992 3.41 7.91992 3C7.91992 2.59 8.25992 2.25 8.66992 2.25H16.6699C17.0799 2.25 17.4199 2.59 17.4199 3C17.4199 3.41 17.0799 3.75 16.6699 3.75Z"
            fill="currentColor"
          />
          <path
            d="M16.6699 21.75H8.66992C8.25992 21.75 7.91992 21.41 7.91992 21C7.91992 20.59 8.25992 20.25 8.66992 20.25H16.6699C17.0799 20.25 17.4199 20.59 17.4199 21C17.4199 21.41 17.0799 21.75 16.6699 21.75Z"
            fill="currentColor"
          />
          <path
            d="M15.1699 13.25H12.1699C11.7599 13.25 11.4199 12.91 11.4199 12.5V9.5C11.4199 9.09 11.7599 8.75 12.1699 8.75C12.5799 8.75 12.9199 9.09 12.9199 9.5V11.75H15.1699C15.5799 11.75 15.9199 12.09 15.9199 12.5C15.9199 12.91 15.5799 13.25 15.1699 13.25Z"
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
            d="M16.6699 3.75H8.66992C8.25992 3.75 7.91992 3.41 7.91992 3C7.91992 2.59 8.25992 2.25 8.66992 2.25H16.6699C17.0799 2.25 17.4199 2.59 17.4199 3C17.4199 3.41 17.0799 3.75 16.6699 3.75Z"
            fill="currentColor"
          />
          <path
            d="M16.6699 21.75H8.66992C8.25992 21.75 7.91992 21.41 7.91992 21C7.91992 20.59 8.25992 20.25 8.66992 20.25H16.6699C17.0799 20.25 17.4199 20.59 17.4199 21C17.4199 21.41 17.0799 21.75 16.6699 21.75Z"
            fill="currentColor"
          />
          <path
            d="M16.1699 5H9.16992C6.83992 5 5.66992 6.17 5.66992 8.5V15.5C5.66992 17.83 6.83992 19 9.16992 19H16.1699C18.4999 19 19.6699 17.83 19.6699 15.5V8.5C19.6699 6.17 18.4999 5 16.1699 5ZM15.1699 13.25H12.1699C11.7599 13.25 11.4199 12.91 11.4199 12.5V9.5C11.4199 9.09 11.7599 8.75 12.1699 8.75C12.5799 8.75 12.9199 9.09 12.9199 9.5V11.75H15.1699C15.5799 11.75 15.9199 12.09 15.9199 12.5C15.9199 12.91 15.5799 13.25 15.1699 13.25Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconWatch as IconComponent).keywords = [
  "watch",
  "picket",
  "ticker",
  "sentry",
  "lookout man",
  "lookout",
  "sentinel",
  "determine",
  "scout",
  "catch",
];

export default IconWatch as IconComponent;
