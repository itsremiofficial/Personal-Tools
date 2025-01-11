import { FC } from "react";

const IconMenuBoard: FC<IconProps> = ({
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
            d="M22.5998 6.76001L19.2298 20.29C18.9898 21.3 18.0898 22 17.0498 22H3.90981C2.39981 22 1.31982 20.5199 1.76982 19.0699L5.97981 5.55005C6.26981 4.61005 7.13983 3.95996 8.11983 3.95996H20.4198C21.3698 3.95996 22.1598 4.53997 22.4898 5.33997C22.6798 5.76997 22.7198 6.26001 22.5998 6.76001Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.6699 22H21.4499C22.7399 22 23.7499 20.91 23.6599 19.62L22.6699 6"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.3499 6.38L11.3899 2.06006"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.0498 6.39001L17.9898 2.05005"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.36987 12H16.3699"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.36987 16H15.3699"
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
            d="M22.6599 6.01996C22.6799 6.25996 22.6599 6.50995 22.5999 6.75995L19.2299 20.2899C18.9899 21.2999 18.0899 21.9999 17.0499 21.9999H3.90991C2.39991 21.9999 1.32992 20.5199 1.76992 19.0699L5.97991 5.53992C6.26991 4.59992 7.13993 3.95996 8.11993 3.95996H20.4199C21.3799 3.95996 22.1599 4.52996 22.4899 5.32996C22.5899 5.53996 22.6399 5.77996 22.6599 6.01996Z"
            fill="currentColor"
          />
          <path
            d="M23.6598 19.62C23.7598 20.91 22.7398 22 21.4498 22H17.0498C18.0898 22 18.9898 21.3 19.2298 20.29L22.5998 6.76001C22.6598 6.51001 22.6798 6.26002 22.6598 6.02002L22.6698 6L23.6598 19.62Z"
            fill="currentColor"
          />
          <path
            d="M10.3499 7.13001C10.2899 7.13001 10.2299 7.11999 10.1699 7.10999C9.76994 7.00999 9.51995 6.61002 9.61995 6.20002L10.6599 1.88001C10.7599 1.48001 11.1599 1.24002 11.5699 1.33002C11.9699 1.43002 12.22 1.83 12.12 2.24L11.0799 6.56C10.9999 6.9 10.6899 7.13001 10.3499 7.13001Z"
            fill="currentColor"
          />
          <path
            d="M17.0499 7.14005C16.9999 7.14005 16.9399 7.14003 16.8899 7.12003C16.4899 7.03003 16.2299 6.63001 16.3099 6.23001L17.2498 1.89005C17.3398 1.48005 17.7399 1.23003 18.1399 1.31003C18.5399 1.40003 18.7998 1.80004 18.7198 2.20004L17.7798 6.54001C17.7098 6.90001 17.3999 7.14005 17.0499 7.14005Z"
            fill="currentColor"
          />
          <path
            d="M16.3699 12.75H8.36987C7.95987 12.75 7.61987 12.41 7.61987 12C7.61987 11.59 7.95987 11.25 8.36987 11.25H16.3699C16.7799 11.25 17.1199 11.59 17.1199 12C17.1199 12.41 16.7799 12.75 16.3699 12.75Z"
            fill="currentColor"
          />
          <path
            d="M15.3699 16.75H7.36987C6.95987 16.75 6.61987 16.41 6.61987 16C6.61987 15.59 6.95987 15.25 7.36987 15.25H15.3699C15.7799 15.25 16.1199 15.59 16.1199 16C16.1199 16.41 15.7799 16.75 15.3699 16.75Z"
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
            d="M21.5698 9.85L22.1598 19.74C22.1798 20.01 22.0498 20.19 21.9798 20.27C21.8998 20.36 21.7298 20.5 21.4498 20.5H18.7198L20.8798 9.85H21.5698ZM22.6698 6L22.6598 6.02C22.6798 6.26 22.6598 6.51 22.5998 6.76L15.2298 20.29C14.9898 21.3 14.0898 22 13.0498 22H21.4498C22.7398 22 23.7598 20.91 23.6598 19.62L22.6698 6Z"
            fill="currentColor"
          />
          <path
            d="M12.1199 2.24002C12.2199 1.84002 11.9699 1.43002 11.5699 1.33002C11.1699 1.24002 10.7599 1.48002 10.6599 1.88002L10.1599 3.95002H11.6999L12.1199 2.24002Z"
            fill="currentColor"
          />
          <path
            d="M18.7198 2.21005C18.8098 1.80005 18.5498 1.41005 18.1398 1.32005C17.7398 1.23005 17.3398 1.49005 17.2498 1.90005L16.7998 3.97005H18.3398L18.7198 2.21005Z"
            fill="currentColor"
          />
          <path
            d="M22.4899 5.32994C22.1599 4.52994 21.3799 3.95994 20.4199 3.95994H18.3399L17.7799 6.54994C17.6999 6.89994 17.3899 7.13994 17.0499 7.13994C16.9999 7.13994 16.9399 7.13994 16.8899 7.11994C16.4899 7.02994 16.2299 6.62994 16.3099 6.22994L16.7999 3.94994H11.6999L11.0699 6.54994C10.9899 6.88994 10.6799 7.11994 10.3399 7.11994C10.2799 7.11994 10.2199 7.10994 10.1599 7.09994C9.75992 6.99994 9.50992 6.59994 9.60992 6.18994L10.1499 3.93994H8.11992C7.13992 3.93994 6.26992 4.57994 5.97992 5.51994L1.76992 19.0699C1.32992 20.5199 2.39992 21.9999 3.90992 21.9999H17.0499C18.0899 21.9999 18.9899 21.2999 19.2299 20.2899L22.5999 6.75994C22.6599 6.50994 22.6799 6.25994 22.6599 6.01994C22.6399 5.77994 22.5899 5.53994 22.4899 5.32994ZM15.3699 16.7499H7.36992C6.95992 16.7499 6.61992 16.4099 6.61992 15.9999C6.61992 15.5899 6.95992 15.2499 7.36992 15.2499H15.3699C15.7799 15.2499 16.1199 15.5899 16.1199 15.9999C16.1199 16.4099 15.7799 16.7499 15.3699 16.7499ZM16.3699 12.7499H8.36992C7.95992 12.7499 7.61992 12.4099 7.61992 11.9999C7.61992 11.5899 7.95992 11.2499 8.36992 11.2499H16.3699C16.7799 11.2499 17.1199 11.5899 17.1199 11.9999C17.1199 12.4099 16.7799 12.7499 16.3699 12.7499Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMenuBoard as IconComponent).keywords = [
  "menu",
  "board",
  "bill of fare",
  "carte",
  "fare",
  "card",
  "carte du jour",
  "computer menu",
  "dinner",
  "meal",
  "list",
  "panel",
  "plank",
  "table",
  "control panel",
  "instrument panel",
  "get on",
  "dining table",
  "room",
  "circuit board",
];

export default IconMenuBoard as IconComponent;