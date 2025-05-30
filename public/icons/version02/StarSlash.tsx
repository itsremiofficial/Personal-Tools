import { FC } from "react";

const IconStarSlash: FC<IconProps> = ({
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
            d="M5.94983 18.6501L6.51983 16.1801C6.64983 15.6001 6.41983 14.7901 5.99983 14.3701L3.51983 11.8901C2.05983 10.4301 2.52983 8.95014 4.56983 8.61014L7.75983 8.08014C8.28983 7.99014 8.92983 7.52014 9.16983 7.03014L10.9298 3.51014C11.8798 1.60014 13.4398 1.60014 14.3998 3.51014L16.1598 7.03014C16.2698 7.26014 16.4798 7.48014 16.7098 7.67014"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20.7695 8.60986C22.8095 8.94986 23.2895 10.4299 21.8195 11.8899L19.3395 14.3699C18.9195 14.7899 18.6895 15.5999 18.8195 16.1799L19.5295 19.2499C20.0895 21.6799 18.7995 22.6199 16.6495 21.3499L13.6595 19.5799C13.1195 19.2599 12.2295 19.2599 11.6795 19.5799L8.68945 21.3499"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.6699 2L2.66992 22"
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
            d="M19.3701 14.4602C19.0201 14.8102 18.8201 15.5202 18.9301 16.0002L19.6201 19.0102C19.9101 20.2602 19.7301 21.2002 19.1101 21.6502C18.8601 21.8302 18.5601 21.9202 18.2101 21.9202C17.7001 21.9202 17.1001 21.7302 16.4401 21.3402L13.5101 19.6002C13.0601 19.3302 12.2801 19.3302 11.8301 19.6002L8.90012 21.3402C7.79012 21.9902 6.84012 22.1002 6.23012 21.6502C6.19012 21.6202 6.15012 21.5902 6.12012 21.5502L19.4701 8.2002L20.6401 8.4002C21.7001 8.5802 22.4101 9.0602 22.6401 9.7602C22.8601 10.4602 22.5601 11.2702 21.8001 12.0302L19.3701 14.4602Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6.41027 16C6.52027 15.52 6.32027 14.81 5.97027 14.46L3.54027 12.03C2.78027 11.27 2.48027 10.46 2.70027 9.76C2.93027 9.06 3.64027 8.58 4.70027 8.4L7.82027 7.88C8.27027 7.8 8.82027 7.4 9.03027 6.99L10.7503 3.54C11.2503 2.55 11.9303 2 12.6703 2C13.4103 2 14.0903 2.55 14.5903 3.54L16.3103 6.99C16.4403 7.25 16.7103 7.5 17.0003 7.67L5.74027 18.93L6.41027 16Z"
            fill="currentColor"
          />
          <path
            d="M22.4398 2.22988C22.1398 1.92988 21.6498 1.92988 21.3498 2.22988L2.8998 20.6899C2.5998 20.9899 2.5998 21.4799 2.8998 21.7799C3.0498 21.9199 3.2398 21.9999 3.4398 21.9999C3.6398 21.9999 3.8298 21.9199 3.9798 21.7699L22.4398 3.30988C22.7498 3.00988 22.7498 2.52988 22.4398 2.22988Z"
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
            d="M19.3701 14.46C19.0201 14.81 18.8201 15.51 18.9301 15.99L19.6201 19.01C19.9101 20.26 19.7301 21.2 19.1101 21.65C18.8601 21.83 18.5601 21.92 18.2101 21.92C17.7001 21.92 17.1001 21.73 16.4401 21.34L13.5101 19.6C13.0501 19.33 12.2901 19.33 11.8301 19.6L8.90012 21.34C7.79012 21.99 6.84012 22.1 6.23012 21.65C6.19012 21.62 6.15012 21.59 6.12012 21.55L18.7401 8.93003C19.2001 8.47003 19.8501 8.26003 20.4901 8.37003L20.6401 8.40003C21.7001 8.58003 22.4101 9.06003 22.6401 9.76003C22.8601 10.46 22.5601 11.27 21.8001 12.03L19.3701 14.46Z"
            fill="currentColor"
          />
          <path
            d="M6.41027 16C6.52027 15.52 6.32027 14.81 5.97027 14.46L3.54027 12.03C2.78027 11.27 2.48027 10.46 2.70027 9.76C2.93027 9.06 3.64027 8.58 4.70027 8.4L7.82027 7.88C8.27027 7.8 8.82027 7.4 9.03027 6.99L10.7503 3.54C11.2503 2.55 11.9303 2 12.6703 2C13.4103 2 14.0903 2.55 14.5903 3.54L16.3103 6.99C16.4403 7.25 16.7103 7.5 17.0003 7.67L5.74027 18.93L6.41027 16Z"
            fill="currentColor"
          />
          <path
            d="M22.4398 2.22988C22.1398 1.92988 21.6498 1.92988 21.3498 2.22988L2.8998 20.6899C2.5998 20.9899 2.5998 21.4799 2.8998 21.7799C3.0498 21.9199 3.2398 21.9999 3.4398 21.9999C3.6398 21.9999 3.8298 21.9199 3.9798 21.7699L22.4398 3.30988C22.7498 3.00988 22.7498 2.52988 22.4398 2.22988Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconStarSlash as IconComponent).keywords = [
  "star",
  "slash",
  "stellar",
  "asterisk",
  "lead",
  "leading",
  "maven",
  "sensation",
  "principal",
  "whizz",
  "headliner",
  "flog",
  "gash",
  "lash",
  "cut",
  "slice",
  "whip",
  "thrash",
  "trounce",
  "thrash about",
];

export default IconStarSlash as IconComponent;
