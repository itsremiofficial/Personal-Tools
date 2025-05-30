import { FC } from "react";

const IconNote2: FC<IconProps> = ({
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
            d="M22.3299 10.44L21.3499 14.62C20.5099 18.23 18.8499 19.69 15.7299 19.39C15.2299 19.35 14.6899 19.26 14.1099 19.12L12.4299 18.72C8.25986 17.73 6.96986 15.67 7.94986 11.49L8.92986 7.30001C9.12986 6.45001 9.36986 5.71001 9.66986 5.10001C10.8399 2.68001 12.8299 2.03001 16.1699 2.82001L17.8399 3.21001C22.0299 4.19001 23.3099 6.26001 22.3299 10.44Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.73 19.3901C15.11 19.8101 14.33 20.1601 13.38 20.4701L11.8 20.9901C7.83002 22.2701 5.74002 21.2001 4.45002 17.2301L3.17002 13.2801C1.89002 9.3101 2.95002 7.2101 6.92002 5.9301L8.50002 5.4101C8.91002 5.2801 9.30002 5.1701 9.67002 5.1001C9.37002 5.7101 9.13002 6.4501 8.93002 7.3001L7.95002 11.4901C6.97002 15.6701 8.26002 17.7301 12.43 18.7201L14.11 19.1201C14.69 19.2601 15.23 19.3501 15.73 19.3901Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M13.3098 8.53003L18.1598 9.76003"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.3298 12.3999L15.2298 13.1399"
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
            d="M22.3299 10.44L21.3499 14.62C20.5099 18.23 18.8499 19.69 15.7299 19.39C15.2299 19.35 14.6899 19.26 14.1099 19.12L12.4299 18.72C8.25986 17.73 6.96986 15.67 7.94986 11.49L8.92986 7.30001C9.12986 6.45001 9.36986 5.71001 9.66986 5.10001C10.8399 2.68001 12.8299 2.03001 16.1699 2.82001L17.8399 3.21001C22.0299 4.19001 23.3099 6.26001 22.3299 10.44Z"
            fill="currentColor"
          />
          <path
            d="M15.73 19.3901C15.11 19.8101 14.33 20.1601 13.38 20.4701L11.8 20.9901C7.83002 22.2701 5.74002 21.2001 4.45002 17.2301L3.17002 13.2801C1.89002 9.3101 2.95002 7.2101 6.92002 5.9301L8.50002 5.4101C8.91002 5.2801 9.30002 5.1701 9.67002 5.1001C9.37002 5.7101 9.13002 6.4501 8.93002 7.3001L7.95002 11.4901C6.97002 15.6701 8.26002 17.7301 12.43 18.7201L14.11 19.1201C14.69 19.2601 15.23 19.3501 15.73 19.3901Z"
            fill="currentColor"
          />
          <path
            d="M18.16 10.51C18.1 10.51 18.04 10.5 17.97 10.49L13.12 9.26002C12.72 9.16002 12.48 8.75002 12.58 8.35002C12.68 7.95002 13.09 7.71002 13.49 7.81002L18.34 9.04002C18.74 9.14002 18.98 9.55002 18.88 9.95002C18.8 10.28 18.49 10.51 18.16 10.51Z"
            fill="currentColor"
          />
          <path
            d="M15.2298 13.8899C15.1698 13.8899 15.1098 13.8799 15.0398 13.8699L12.1298 13.1299C11.7298 13.0299 11.4898 12.6199 11.5898 12.2199C11.6898 11.8199 12.0998 11.5799 12.4998 11.6799L15.4098 12.4199C15.8098 12.5199 16.0498 12.9299 15.9498 13.3299C15.8698 13.6699 15.5698 13.8899 15.2298 13.8899Z"
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
            d="M13.3477 19.957C13.6224 20.0209 13.6476 20.3807 13.38 20.4699L11.8 20.9899C7.83002 22.2699 5.74002 21.1999 4.45002 17.2299L3.17002 13.2799C1.89002 9.30992 2.95002 7.20992 6.92002 5.92992L7.44402 5.75639C7.84688 5.62297 8.23895 6.02703 8.12455 6.43571C8.06785 6.63828 8.0133 6.84968 7.96002 7.06992L6.98002 11.2599C5.88002 15.9699 7.49002 18.5699 12.2 19.6899L13.3477 19.957Z"
            fill="currentColor"
          />
          <path
            d="M17.8399 3.21001L16.1699 2.82001C12.8299 2.03001 10.8399 2.68001 9.66986 5.10001C9.36986 5.71001 9.12986 6.45001 8.92986 7.30001L7.94986 11.49C6.96986 15.67 8.25986 17.73 12.4299 18.72L14.1099 19.12C14.6899 19.26 15.2299 19.35 15.7299 19.39C18.8499 19.69 20.5099 18.23 21.3499 14.62L22.3299 10.44C23.3099 6.26001 22.0299 4.19001 17.8399 3.21001ZM15.9599 13.33C15.8699 13.67 15.5699 13.89 15.2299 13.89C15.1699 13.89 15.1099 13.88 15.0399 13.87L12.1299 13.13C11.7299 13.03 11.4899 12.62 11.5899 12.22C11.6899 11.82 12.0999 11.58 12.4999 11.68L15.4099 12.42C15.8199 12.52 16.0599 12.93 15.9599 13.33ZM18.8899 9.95001C18.7999 10.29 18.4999 10.51 18.1599 10.51C18.0999 10.51 18.0399 10.5 17.9699 10.49L13.1199 9.26001C12.7199 9.16001 12.4799 8.75001 12.5799 8.35001C12.6799 7.95001 13.0899 7.71001 13.4899 7.81001L18.3399 9.04001C18.7499 9.13001 18.9899 9.54001 18.8899 9.95001Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconNote2 as IconComponent).keywords = [
  "note",
  "2",
  "annotation",
  "notation",
  "mention",
  "remark",
  "notice",
  "observe",
  "take note",
  "distinction",
  "bank note",
  "wireless network",
  "sign on",
  "sign off",
  "put through",
  "back up",
  "ring up",
  "call up",
  "hang up",
  "read out",
];

export default IconNote2 as IconComponent;
