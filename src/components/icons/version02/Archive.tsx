import { FC } from "react";

const IconArchive: FC<IconProps> = ({
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
            d="M9.91992 9.0498C11.6999 9.6998 13.6399 9.6998 15.4199 9.0498"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.4902 2H7.85023C5.72023 2 3.99023 3.74 3.99023 5.86V19.95C3.99023 21.75 5.28023 22.51 6.86023 21.64L11.7402 18.93C12.2602 18.64 13.1002 18.64 13.6102 18.93L18.4902 21.64C20.0702 22.52 21.3602 21.76 21.3602 19.95V5.86C21.3502 3.74 19.6202 2 17.4902 2Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.4902 2H7.85023C5.72023 2 3.99023 3.74 3.99023 5.86V19.95C3.99023 21.75 5.28023 22.51 6.86023 21.64L11.7402 18.93C12.2602 18.64 13.1002 18.64 13.6102 18.93L18.4902 21.64C20.0702 22.52 21.3602 21.76 21.3602 19.95V5.86C21.3502 3.74 19.6202 2 17.4902 2Z"
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
            d="M17.4902 2H7.85023C5.72023 2 3.99023 3.74 3.99023 5.86V19.95C3.99023 21.75 5.28023 22.51 6.86023 21.64L11.7402 18.93C12.2602 18.64 13.1002 18.64 13.6102 18.93L18.4902 21.64C20.0702 22.52 21.3602 21.76 21.3602 19.95V5.86C21.3502 3.74 19.6202 2 17.4902 2Z"
            fill="currentColor"
          />
          <path
            d="M12.6697 10.2801C11.6497 10.2801 10.6297 10.1001 9.65968 9.75005C9.26968 9.61005 9.06968 9.18005 9.20968 8.79005C9.35968 8.40005 9.78968 8.20005 10.1797 8.34005C11.7897 8.92005 13.5597 8.92005 15.1697 8.34005C15.5597 8.20005 15.9897 8.40005 16.1297 8.79005C16.2697 9.18005 16.0697 9.61005 15.6797 9.75005C14.7097 10.1001 13.6897 10.2801 12.6697 10.2801Z"
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
            d="M17.4902 2H7.85023C5.72023 2 3.99023 3.74 3.99023 5.86V19.95C3.99023 21.75 5.28023 22.51 6.86023 21.64L11.7402 18.93C12.2602 18.64 13.1002 18.64 13.6102 18.93L18.4902 21.64C20.0702 22.52 21.3602 21.76 21.3602 19.95V5.86C21.3502 3.74 19.6202 2 17.4902 2ZM15.6802 9.75C14.7102 10.1 13.6902 10.28 12.6702 10.28C11.6502 10.28 10.6302 10.1 9.66023 9.75C9.27023 9.61 9.07023 9.18 9.21023 8.79C9.36023 8.4 9.79024 8.2 10.1802 8.34C11.7902 8.92 13.5602 8.92 15.1702 8.34C15.5602 8.2 15.9902 8.4 16.1302 8.79C16.2702 9.18 16.0702 9.61 15.6802 9.75Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconArchive as IconComponent).keywords = [
  "archive",
  "file away",
  "archival",
  "file",
  "record-keeping",
  "registry",
  "record",
  "photo",
  "filer",
  "filename",
];

export default IconArchive as IconComponent;
