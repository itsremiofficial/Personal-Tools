import { FC } from "react";

const IconProfileRemove: FC<IconProps> = ({
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
            d="M20.1699 19H16.1699"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.8197 10.87C12.7197 10.86 12.5997 10.86 12.4897 10.87C10.1097 10.79 8.21973 8.84 8.21973 6.44C8.21973 3.99 10.1997 2 12.6597 2C15.1097 2 17.0997 3.99 17.0997 6.44C17.0897 8.84 15.1997 10.79 12.8197 10.87Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.66 21.8099C10.84 21.8099 9.02996 21.3499 7.64996 20.4299C5.22996 18.8099 5.22996 16.1699 7.64996 14.5599C10.4 12.7199 14.91 12.7199 17.66 14.5599"
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
            d="M12.6699 2C10.0499 2 7.91992 4.13 7.91992 6.75C7.91992 9.32 9.92992 11.4 12.5499 11.49C12.6299 11.48 12.7099 11.48 12.7699 11.49C12.7899 11.49 12.7999 11.49 12.8199 11.49C12.8299 11.49 12.8299 11.49 12.8399 11.49C15.3999 11.4 17.4099 9.32 17.4199 6.75C17.4199 4.13 15.2899 2 12.6699 2Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17.7499 14.1599C14.9599 12.2999 10.4099 12.2999 7.59988 14.1599C6.32988 14.9999 5.62988 16.1499 5.62988 17.3799C5.62988 18.6099 6.32988 19.7499 7.58988 20.5899C8.98988 21.5299 10.8299 21.9999 12.6699 21.9999C14.5099 21.9999 16.3499 21.5299 17.7499 20.5899C19.0099 19.7399 19.7099 18.5999 19.7099 17.3599C19.6999 16.1399 19.0099 14.9899 17.7499 14.1599Z"
            fill="currentColor"
          />
          <path
            d="M14.5002 18.0699H10.8502C10.4702 18.0699 10.1602 17.7599 10.1602 17.3799C10.1602 16.9999 10.4702 16.6899 10.8502 16.6899H14.5002C14.8802 16.6899 15.1902 16.9999 15.1902 17.3799C15.1802 17.7599 14.8802 18.0699 14.5002 18.0699Z"
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
            d="M12.6699 2C10.0499 2 7.91992 4.13 7.91992 6.75C7.91992 9.32 9.92992 11.4 12.5499 11.49C12.6299 11.48 12.7099 11.48 12.7699 11.49C12.7899 11.49 12.7999 11.49 12.8199 11.49C12.8299 11.49 12.8299 11.49 12.8399 11.49C15.3999 11.4 17.4099 9.32 17.4199 6.75C17.4199 4.13 15.2899 2 12.6699 2Z"
            fill="currentColor"
          />
          <path
            d="M17.7499 14.1599C14.9599 12.2999 10.4099 12.2999 7.59988 14.1599C6.32988 14.9999 5.62988 16.1499 5.62988 17.3799C5.62988 18.6099 6.32988 19.7499 7.58988 20.5899C8.98988 21.5299 10.8299 21.9999 12.6699 21.9999C14.5099 21.9999 16.3499 21.5299 17.7499 20.5899C19.0099 19.7399 19.7099 18.5999 19.7099 17.3599C19.6999 16.1399 19.0099 14.9899 17.7499 14.1599ZM14.4999 18.0699H10.8499C10.4699 18.0699 10.1599 17.7599 10.1599 17.3799C10.1599 16.9999 10.4699 16.6899 10.8499 16.6899H14.4999C14.8799 16.6899 15.1899 16.9999 15.1899 17.3799C15.1899 17.7599 14.8799 18.0699 14.4999 18.0699Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconProfileRemove as IconComponent).keywords = [
  "profile",
  "remove",
  "outline",
  "image",
  "description",
  "img",
  "sketch",
  "contour",
  "structure",
  "effigy",
  "template",
  "take out",
  "get rid of",
  "take away",
  "move out",
  "bump off",
  "slay",
  "murder",
  "take",
  "transfer",
];

export default IconProfileRemove as IconComponent;
