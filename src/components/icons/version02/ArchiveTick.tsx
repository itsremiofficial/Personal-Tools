import { FC } from "react";

const IconArchiveTick: FC<IconProps> = ({
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
            d="M17.4902 2H7.85023C5.72023 2 3.99023 3.74 3.99023 5.86V19.95C3.99023 21.75 5.28023 22.51 6.86023 21.64L11.7402 18.93C12.2602 18.64 13.1002 18.64 13.6102 18.93L18.4902 21.64C20.0702 22.52 21.3602 21.76 21.3602 19.95V5.86C21.3502 3.74 19.6202 2 17.4902 2Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10.2598 11L11.7598 12.5L15.7598 8.5"
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
            d="M17.4902 1.91016H7.85023C5.73023 1.91016 3.99023 3.65016 3.99023 5.77016V19.8602C3.99023 21.6602 5.28023 22.4202 6.86023 21.5502L11.7402 18.8402C12.2602 18.5502 13.1002 18.5502 13.6102 18.8402L18.4902 21.5502C20.0702 22.4302 21.3602 21.6702 21.3602 19.8602V5.77016C21.3502 3.65016 19.6202 1.91016 17.4902 1.91016Z"
            fill="currentColor"
          />
          <path
            d="M11.7602 13.2499C11.5702 13.2499 11.3802 13.1799 11.2302 13.0299L9.7302 11.5299C9.4402 11.2399 9.4402 10.7599 9.7302 10.4699C10.0202 10.1799 10.5002 10.1799 10.7902 10.4699L11.7602 11.4399L15.2302 7.96994C15.5202 7.67994 16.0002 7.67994 16.2902 7.96994C16.5802 8.25994 16.5802 8.73994 16.2902 9.02994L12.2902 13.0299C12.1402 13.1799 11.9502 13.2499 11.7602 13.2499Z"
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
            d="M17.4902 1.91016H7.85023C5.73023 1.91016 3.99023 3.65016 3.99023 5.77016V19.8602C3.99023 21.6602 5.28023 22.4202 6.86023 21.5502L11.7402 18.8402C12.2602 18.5502 13.1002 18.5502 13.6102 18.8402L18.4902 21.5502C20.0702 22.4302 21.3602 21.6702 21.3602 19.8602V5.77016C21.3502 3.65016 19.6202 1.91016 17.4902 1.91016ZM16.2902 9.03016L12.2902 13.0302C12.1402 13.1802 11.9502 13.2502 11.7602 13.2502C11.5702 13.2502 11.3802 13.1802 11.2302 13.0302L9.73024 11.5302C9.44024 11.2402 9.44024 10.7602 9.73024 10.4702C10.0202 10.1802 10.5002 10.1802 10.7902 10.4702L11.7602 11.4402L15.2302 7.97016C15.5202 7.68016 16.0002 7.68016 16.2902 7.97016C16.5802 8.26016 16.5802 8.74016 16.2902 9.03016Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconArchiveTick as IconComponent).keywords = [
  "archive",
  "tick",
  "file away",
  "archival",
  "file",
  "record-keeping",
  "registry",
  "record",
  "photo",
  "filer",
  "filename",
  "click",
  "ticktock",
  "beat",
  "ticktack",
  "retick",
  "ixodid",
  "acarid",
  "spinose",
  "gene",
];

export default IconArchiveTick as IconComponent;
