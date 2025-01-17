import { FC } from "react";

const IconNote: FC<IconProps> = ({
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
            d="M14.22 20.1599C13.96 20.2699 13.68 20.3699 13.38 20.4699L11.8 20.9899C7.83002 22.2699 5.74002 21.1999 4.45002 17.2299L3.17002 13.2799C1.89002 9.30992 2.95002 7.20992 6.92002 5.92992L8.46002 5.41992C8.27002 5.89992 8.11002 6.44992 7.96002 7.06992L6.98002 11.2599C5.88002 15.9699 7.49002 18.5699 12.2 19.6899L13.88 20.0899C13.99 20.1199 14.11 20.1399 14.22 20.1599Z"
            fill="currentColor"
          />
          <path
            d="M17.8399 3.21001L16.1699 2.82001C12.8299 2.03001 10.8399 2.68001 9.66986 5.10001C9.36986 5.71001 9.12986 6.45001 8.92986 7.30001L7.94986 11.49C6.96986 15.67 8.25986 17.73 12.4299 18.72L14.1099 19.12C14.6899 19.26 15.2299 19.35 15.7299 19.39C18.8499 19.69 20.5099 18.23 21.3499 14.62L22.3299 10.44C23.3099 6.26001 22.0299 4.19001 17.8399 3.21001Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconNote as IconComponent).keywords = [
  "note",
  "annotation",
  "notation",
  "mention",
  "remark",
  "notice",
  "observe",
  "take note",
  "distinction",
  "bank note",
];

export default IconNote as IconComponent;
