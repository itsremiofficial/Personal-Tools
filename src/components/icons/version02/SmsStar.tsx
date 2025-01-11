import { FC } from "react";

const IconSmsStar: FC<IconProps> = ({
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
            d="M22.6699 11.5V15.5C22.6699 19 20.6699 20.5 17.6699 20.5H7.66992C4.66992 20.5 2.66992 19 2.66992 15.5V8.5C2.66992 5 4.66992 3.5 7.66992 3.5H12.6699"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.66992 9L10.7999 11.5C11.8299 12.32 13.5199 12.32 14.5499 11.5"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20.1501 2.81994L20.4301 3.38993C20.5701 3.66993 20.9201 3.92994 21.2301 3.98994L21.6101 4.04994C22.7501 4.23994 23.0201 5.07994 22.2001 5.90994L21.8501 6.25993C21.6201 6.49993 21.4901 6.95993 21.5601 7.27993L21.6101 7.48994C21.9201 8.86994 21.1901 9.39993 19.9901 8.67993L19.7301 8.52993C19.4201 8.34993 18.9201 8.34993 18.6101 8.52993L18.3501 8.67993C17.1401 9.40993 16.4101 8.86994 16.7301 7.48994L16.7801 7.27993C16.8501 6.95993 16.7201 6.49993 16.4901 6.25993L16.1401 5.90994C15.3201 5.07994 15.5901 4.23994 16.7301 4.04994L17.1101 3.98994C17.4101 3.93994 17.7701 3.66993 17.9101 3.38993L18.1901 2.81994C18.7301 1.72994 19.6101 1.72994 20.1501 2.81994Z"
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
            d="M20.1501 2.81994L20.4301 3.38993C20.5701 3.66993 20.9201 3.92994 21.2301 3.98994L21.6101 4.04994C22.7501 4.23994 23.0201 5.07994 22.2001 5.90994L21.8501 6.25993C21.6201 6.49993 21.4901 6.95993 21.5601 7.27993L21.6101 7.48994C21.9201 8.86994 21.1901 9.39993 19.9901 8.67993L19.7301 8.52993C19.4201 8.34993 18.9201 8.34993 18.6101 8.52993L18.3501 8.67993C17.1401 9.40993 16.4101 8.86994 16.7301 7.48994L16.7801 7.27993C16.8501 6.95993 16.7201 6.49993 16.4901 6.25993L16.1401 5.90994C15.3201 5.07994 15.5901 4.23994 16.7301 4.04994L17.1101 3.98994C17.4101 3.93994 17.7701 3.66993 17.9101 3.38993L18.1901 2.81994C18.7301 1.72994 19.6101 1.72994 20.1501 2.81994Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.6699 9.67V15.5C22.6699 19 20.6699 20.5 17.6699 20.5H7.66992C4.66992 20.5 2.66992 19 2.66992 15.5V8.5C2.66992 5 4.66992 3.5 7.66992 3.5H14.7199C14.5199 3.72 14.3699 3.98 14.2799 4.27C13.9899 5.17 14.2799 6.15001 15.0799 6.96001L15.2699 7.14999C14.8599 8.95999 15.7099 9.81 16.0999 10.09C16.3199 10.25 16.7699 10.5 17.4099 10.5C17.8799 10.5 18.4599 10.36 19.1299 9.96001L19.1699 9.94L19.2099 9.96001C20.7899 10.91 21.8599 10.37 22.2399 10.09C22.3599 10.01 22.5199 9.87 22.6699 9.67Z"
            fill="currentColor"
          />
          <path
            d="M12.6697 12.87C11.8297 12.87 10.9797 12.61 10.3297 12.08L7.1997 9.58002C6.8797 9.32002 6.8197 8.85002 7.0797 8.53002C7.3397 8.21002 7.80969 8.15003 8.12969 8.41003L11.2597 10.91C12.0197 11.52 13.3097 11.52 14.0697 10.91C14.3897 10.65 14.8597 10.7 15.1197 11.03C15.3797 11.35 15.3297 11.83 14.9997 12.08C14.3597 12.61 13.5097 12.87 12.6697 12.87Z"
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
            d="M20.1501 2.81998L20.4301 3.38998C20.5701 3.66998 20.9201 3.92998 21.2301 3.98998L21.6101 4.04998C22.7501 4.23998 23.0201 5.07998 22.2001 5.90998L21.8501 6.25998C21.6201 6.49998 21.4901 6.95998 21.5601 7.27998L21.6101 7.48997C21.9201 8.86998 21.1901 9.39998 19.9901 8.67998L19.7301 8.52997C19.4201 8.34998 18.9201 8.34998 18.6101 8.52997L18.3501 8.67998C17.1401 9.40998 16.4101 8.86998 16.7301 7.48997L16.7801 7.27998C16.8501 6.95998 16.7201 6.49998 16.4901 6.25998L16.1401 5.89998C15.3201 5.06998 15.5901 4.22998 16.7301 4.03998L17.1101 3.97998C17.4101 3.92998 17.7701 3.65998 17.9101 3.37998L18.1901 2.80998C18.7301 1.72997 19.6101 1.72997 20.1501 2.81998Z"
            fill="currentColor"
          />
          <path
            d="M22.2399 10.09C21.8799 10.35 20.8699 10.83 19.4299 10.09C19.2699 10.01 19.0699 10 18.9099 10.09C18.3399 10.38 17.8199 10.5 17.4099 10.5C16.7699 10.5 16.3199 10.25 16.0999 10.09C15.7299 9.82 14.9499 9.05 15.2199 7.42C15.2499 7.25 15.1999 7.08 15.0899 6.95C14.3999 6.16 14.0199 5.1 14.2899 4.27C14.3899 3.94 14.1799 3.5 13.8399 3.5H7.66992C4.66992 3.5 2.66992 5 2.66992 8.5V15.5C2.66992 19 4.66992 20.5 7.66992 20.5H17.6699C20.6699 20.5 22.6699 19 22.6699 15.5V10.27C22.6699 10.08 22.3999 9.98 22.2399 10.09ZM15.0099 12.09C14.3499 12.62 13.5099 12.88 12.6699 12.88C11.8299 12.88 10.9799 12.62 10.3299 12.09L7.19992 9.59C6.87992 9.33 6.82992 8.85 7.07992 8.53C7.33992 8.21 7.80992 8.15 8.12992 8.41L11.2599 10.91C12.0199 11.52 13.3099 11.52 14.0699 10.91C14.3899 10.65 14.8599 10.7 15.1199 11.03C15.3899 11.35 15.3399 11.83 15.0099 12.09Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSmsStar as IconComponent).keywords = [
  "sms",
  "star",
  "ms",
  "master of science",
  "samarium",
  "atomic number 62",
  "mms",
  "isa",
  "scm",
  "hsd",
  "cms",
  "stellar",
  "asterisk",
  "lead",
  "leading",
  "maven",
  "sensation",
  "principal",
  "whizz",
  "headliner",
];

export default IconSmsStar as IconComponent;