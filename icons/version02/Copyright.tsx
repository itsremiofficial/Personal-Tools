import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconCopyright: FC<IconProps> = ({
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
            d="M12.6699 22C7.14992 22 2.66992 17.52 2.66992 12C2.66992 6.48 7.14992 2 12.6699 2C18.1899 2 22.6699 6.48 22.6699 12C22.6699 17.52 18.1899 22 12.6699 22Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.5502 15C14.8402 15.62 13.9202 16 12.9102 16C10.7002 16 8.91016 14.21 8.91016 12C8.91016 9.79 10.7002 8 12.9102 8C13.9202 8 14.8402 8.38 15.5502 9"
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
            d="M12.6699 22C7.14992 22 2.66992 17.52 2.66992 12C2.66992 6.48 7.14992 2 12.6699 2C18.1899 2 22.6699 6.48 22.6699 12C22.6699 17.52 18.1899 22 12.6699 22Z"
            fill="currentColor"
          />
          <path
            d="M12.9102 16.75C10.2902 16.75 8.16016 14.62 8.16016 12C8.16016 9.38 10.2902 7.25 12.9102 7.25C14.0602 7.25 15.1802 7.67 16.0402 8.44C16.3502 8.71 16.3802 9.19 16.1102 9.5C15.8302 9.81 15.3602 9.84001 15.0502 9.57001C14.4602 9.05001 13.7002 8.76001 12.9102 8.76001C11.1202 8.76001 9.66016 10.22 9.66016 12.01C9.66016 13.8 11.1202 15.26 12.9102 15.26C13.6902 15.26 14.4602 14.97 15.0502 14.45C15.3602 14.18 15.8402 14.21 16.1102 14.52C16.3802 14.83 16.3502 15.31 16.0402 15.58C15.1702 16.33 14.0602 16.75 12.9102 16.75Z"
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
            d="M12.6699 2C7.14992 2 2.66992 6.48 2.66992 12C2.66992 17.52 7.14992 22 12.6699 22C18.1899 22 22.6699 17.52 22.6699 12C22.6699 6.48 18.1899 2 12.6699 2ZM12.9099 15.25C13.6899 15.25 14.4599 14.96 15.0499 14.44C15.3599 14.17 15.8399 14.2 16.1099 14.51C16.3799 14.82 16.3499 15.3 16.0399 15.57C15.1699 16.34 14.0599 16.76 12.9099 16.76C10.2899 16.76 8.15992 14.63 8.15992 12.01C8.15992 9.39 10.2899 7.26 12.9099 7.26C14.0599 7.26 15.1799 7.68 16.0399 8.45C16.3499 8.72 16.3799 9.2 16.1099 9.51C15.8299 9.82 15.3599 9.85 15.0499 9.58C14.4599 9.06 13.6999 8.77 12.9099 8.77C11.1199 8.77 9.65992 10.23 9.65992 12.02C9.65992 13.81 11.1199 15.25 12.9099 15.25Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCopyright as IconComponentType).keywords = [
  "copyright",
  "proprietary",
  "right of first publication",
  "sponsor",
  "law",
  "ownership",
  "property",
  "complainant",
  "proposer",
  "originator",
];

export default IconCopyright as IconComponentType;
