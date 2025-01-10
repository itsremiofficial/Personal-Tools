import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconBowling: FC<IconProps> = ({
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
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="12"
            cy="12.0005"
            r="10"
            stroke="currentColor"
            strokeWidth={width}
          />
          <circle
            opacity={duotone ? "0.5" : "1"}
            cx="12"
            cy="7.00049"
            r="1.5"
            transform="rotate(-90 12 7.00049)"
            stroke="currentColor"
            strokeWidth={width}
          />
          <circle
            opacity={duotone ? "0.5" : "1"}
            cx="12"
            cy="12.0005"
            r="1.5"
            transform="rotate(-90 12 12.0005)"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M8 8.00049C8.82843 8.00049 9.5 8.67206 9.5 9.50049C9.5 10.3289 8.82843 11.0005 8 11.0005C7.17157 11.0005 6.5 10.3289 6.5 9.50049C6.5 8.67206 7.17157 8.00049 8 8.00049Z"
            stroke="currentColor"
            strokeWidth={width}
          />
        </svg>
      ) : duotone ? (
        <svg
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M12 22.0005C17.5228 22.0005 22 17.5233 22 12.0005C22 6.47764 17.5228 2.00049 12 2.00049C6.47715 2.00049 2 6.47764 2 12.0005C2 17.5233 6.47715 22.0005 12 22.0005Z"
            fill="currentColor"
          />
          <path
            d="M12 10.5005C12.8284 10.5005 13.5 11.1721 13.5 12.0005C13.5 12.8289 12.8284 13.5005 12 13.5005C11.1716 13.5005 10.5 12.8289 10.5 12.0005C10.5 11.1721 11.1716 10.5005 12 10.5005Z"
            fill="currentColor"
          />
          <path
            d="M8 8.00049C8.82843 8.00049 9.5 8.67206 9.5 9.50049C9.5 10.3289 8.82843 11.0005 8 11.0005C7.17157 11.0005 6.5 10.3289 6.5 9.50049C6.5 8.67206 7.17157 8.00049 8 8.00049Z"
            fill="currentColor"
          />
          <path
            d="M12 5.50049C12.8284 5.50049 13.5 6.17206 13.5 7.00049C13.5 7.82892 12.8284 8.50049 12 8.50049C11.1716 8.50049 10.5 7.82892 10.5 7.00049C10.5 6.17206 11.1716 5.50049 12 5.50049Z"
            fill="currentColor"
          />
        </svg>
      ) : (
        <svg
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 22.0005C17.5228 22.0005 22 17.5233 22 12.0005C22 6.47764 17.5228 2.00049 12 2.00049C6.47715 2.00049 2 6.47764 2 12.0005C2 17.5233 6.47715 22.0005 12 22.0005ZM13.5 12.0005C13.5 11.1721 12.8284 10.5005 12 10.5005C11.1716 10.5005 10.5 11.1721 10.5 12.0005C10.5 12.8289 11.1716 13.5005 12 13.5005C12.8284 13.5005 13.5 12.8289 13.5 12.0005ZM12 5.50049C12.8284 5.50049 13.5 6.17206 13.5 7.00049C13.5 7.82892 12.8284 8.50049 12 8.50049C11.1716 8.50049 10.5 7.82892 10.5 7.00049C10.5 6.17206 11.1716 5.50049 12 5.50049ZM9.5 9.50049C9.5 8.67206 8.82843 8.00049 8 8.00049C7.17157 8.00049 6.5 8.67206 6.5 9.50049C6.5 10.3289 7.17157 11.0005 8 11.0005C8.82843 11.0005 9.5 10.3289 9.5 9.50049Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBowling as IconComponentType).keywords = [
  "bowling",
  "basin",
  "trough",
  "arena",
  "stadium",
  "pipe bowl",
  "tenpin",
  "bowler",
  "billiard",
  "bingo",
];

export default IconBowling as IconComponentType;
