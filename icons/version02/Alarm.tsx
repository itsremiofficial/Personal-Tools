import { FC } from "react";

const IconAlarm: FC<IconProps> = ({
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
            d="M2.66992 22H22.6699"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.6699 6C7.69992 6 3.66992 10.03 3.66992 15V22H21.6699V15C21.6699 10.03 17.6399 6 12.6699 6Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.6699 2V3"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M4.66992 4L5.66992 5"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20.6699 4L19.6699 5"
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
            d="M23.4199 22C23.4199 22.41 23.0799 22.75 22.6699 22.75H2.66992C2.25992 22.75 1.91992 22.41 1.91992 22C1.91992 21.59 2.25992 21.25 2.66992 21.25H22.6699C23.0799 21.25 23.4199 21.59 23.4199 22Z"
            fill="currentColor"
          />
          <path
            d="M21.6699 15V21.25H3.66992V15C3.66992 10.03 7.69992 6 12.6699 6C17.6399 6 21.6699 10.03 21.6699 15Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.6699 3.75C12.2599 3.75 11.9199 3.41 11.9199 3V2C11.9199 1.59 12.2599 1.25 12.6699 1.25C13.0799 1.25 13.4199 1.59 13.4199 2V3C13.4199 3.41 13.0799 3.75 12.6699 3.75Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M5.66986 5.74994C5.47986 5.74994 5.28986 5.67994 5.13986 5.52994L4.13986 4.52994C3.84986 4.23994 3.84986 3.75994 4.13986 3.46994C4.42986 3.17994 4.90986 3.17994 5.19986 3.46994L6.19986 4.46994C6.48986 4.75994 6.48986 5.23994 6.19986 5.52994C6.04986 5.67994 5.85986 5.74994 5.66986 5.74994Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19.6699 5.74994C19.4799 5.74994 19.2899 5.67994 19.1399 5.52994C18.8499 5.23994 18.8499 4.75994 19.1399 4.46994L20.1399 3.46994C20.4299 3.17994 20.9099 3.17994 21.1999 3.46994C21.4899 3.75994 21.4899 4.23994 21.1999 4.52994L20.1999 5.52994C20.0499 5.67994 19.8599 5.74994 19.6699 5.74994Z"
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
            d="M22.6699 21.25H21.6699V15C21.6699 10.03 17.6399 6 12.6699 6C7.69992 6 3.66992 10.03 3.66992 15V21.25H2.66992C2.25992 21.25 1.91992 21.59 1.91992 22C1.91992 22.41 2.25992 22.75 2.66992 22.75H22.6699C23.0799 22.75 23.4199 22.41 23.4199 22C23.4199 21.59 23.0799 21.25 22.6699 21.25Z"
            fill="currentColor"
          />
          <path
            d="M12.6699 3.75C12.2599 3.75 11.9199 3.41 11.9199 3V2C11.9199 1.59 12.2599 1.25 12.6699 1.25C13.0799 1.25 13.4199 1.59 13.4199 2V3C13.4199 3.41 13.0799 3.75 12.6699 3.75Z"
            fill="currentColor"
          />
          <path
            d="M5.66986 5.74994C5.47986 5.74994 5.28986 5.67994 5.13986 5.52994L4.13986 4.52994C3.84986 4.23994 3.84986 3.75994 4.13986 3.46994C4.42986 3.17994 4.90986 3.17994 5.19986 3.46994L6.19986 4.46994C6.48986 4.75994 6.48986 5.23994 6.19986 5.52994C6.04986 5.67994 5.85986 5.74994 5.66986 5.74994Z"
            fill="currentColor"
          />
          <path
            d="M19.6699 5.74994C19.4799 5.74994 19.2899 5.67994 19.1399 5.52994C18.8499 5.23994 18.8499 4.75994 19.1399 4.46994L20.1399 3.46994C20.4299 3.17994 20.9099 3.17994 21.1999 3.46994C21.4899 3.75994 21.4899 4.23994 21.1999 4.52994L20.1999 5.52994C20.0499 5.67994 19.8599 5.74994 19.6699 5.74994Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconAlarm as IconComponentType).keywords = [
  "alarm",
  "alarum",
  "alarm system",
  "alert",
  "consternation",
  "alarm clock",
  "horrify",
  "appall",
  "dismay",
  "appal",
];

export default IconAlarm as IconComponentType;
