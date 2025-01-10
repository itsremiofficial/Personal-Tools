import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconCamera: FC<IconProps> = ({
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
            d="M7.43009 22H17.9101C20.6701 22 21.7701 20.31 21.9001 18.25L22.4201 9.99C22.5601 7.83 20.8401 6 18.6701 6C18.0601 6 17.5001 5.65 17.2201 5.11L16.5001 3.66C16.0401 2.75 14.8401 2 13.8201 2H11.5301C10.5001 2 9.30009 2.75 8.84009 3.66L8.12009 5.11C7.84009 5.65 7.28009 6 6.67009 6C4.50009 6 2.78009 7.83 2.92009 9.99L3.44009 18.25C3.56009 20.31 4.67009 22 7.43009 22Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M11.1699 8H14.1699"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.6699 18C14.4599 18 15.9199 16.54 15.9199 14.75C15.9199 12.96 14.4599 11.5 12.6699 11.5C10.8799 11.5 9.41992 12.96 9.41992 14.75C9.41992 16.54 10.8799 18 12.6699 18Z"
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
            d="M7.43009 22H17.9101C20.6701 22 21.7701 20.31 21.9001 18.25L22.4201 9.99C22.5601 7.83 20.8401 6 18.6701 6C18.0601 6 17.5001 5.65 17.2201 5.11L16.5001 3.66C16.0401 2.75 14.8401 2 13.8201 2H11.5301C10.5001 2 9.30009 2.75 8.84009 3.66L8.12009 5.11C7.84009 5.65 7.28009 6 6.67009 6C4.50009 6 2.78009 7.83 2.92009 9.99L3.44009 18.25C3.56009 20.31 4.67009 22 7.43009 22Z"
            fill="currentColor"
          />
          <path
            d="M14.1699 8.75H11.1699C10.7599 8.75 10.4199 8.41 10.4199 8C10.4199 7.59 10.7599 7.25 11.1699 7.25H14.1699C14.5799 7.25 14.9199 7.59 14.9199 8C14.9199 8.41 14.5799 8.75 14.1699 8.75Z"
            fill="currentColor"
          />
          <path
            d="M12.67 18.13C14.5368 18.13 16.05 16.6167 16.05 14.75C16.05 12.8833 14.5368 11.37 12.67 11.37C10.8033 11.37 9.29004 12.8833 9.29004 14.75C9.29004 16.6167 10.8033 18.13 12.67 18.13Z"
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
            d="M18.6701 6C18.0601 6 17.5001 5.65 17.2201 5.11L16.5001 3.66C16.0401 2.75 14.8401 2 13.8201 2H11.5301C10.5001 2 9.30009 2.75 8.84009 3.66L8.12009 5.11C7.84009 5.65 7.28009 6 6.67009 6C4.50009 6 2.78009 7.83 2.92009 9.99L3.44009 18.25C3.56009 20.31 4.67009 22 7.43009 22H17.9101C20.6701 22 21.7701 20.31 21.9001 18.25L22.4201 9.99C22.5601 7.83 20.8401 6 18.6701 6ZM11.1701 7.25H14.1701C14.5801 7.25 14.9201 7.59 14.9201 8C14.9201 8.41 14.5801 8.75 14.1701 8.75H11.1701C10.7601 8.75 10.4201 8.41 10.4201 8C10.4201 7.59 10.7601 7.25 11.1701 7.25ZM12.6701 18.12C10.8101 18.12 9.29009 16.61 9.29009 14.74C9.29009 12.87 10.8001 11.36 12.6701 11.36C14.5401 11.36 16.0501 12.87 16.0501 14.74C16.0501 16.61 14.5301 18.12 12.6701 18.12Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCamera as IconComponentType).keywords = [
  "camera",
  "photographic camera",
  "television camera",
  "photography",
  "photographer",
  "photographing",
  "photograph",
  "photo",
  "imaging",
  "photographic",
];

export default IconCamera as IconComponentType;
