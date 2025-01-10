import { FC } from "react";

const IconUserCheck: FC<IconProps> = ({
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
            cx="11"
            cy="6.00049"
            r="4"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M19 17.5005C19 19.9858 19 22.0005 11 22.0005C3 22.0005 3 19.9858 3 17.5005C3 15.0152 6.58172 13.0005 11 13.0005C15.4183 13.0005 19 15.0152 19 17.5005Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M17 10.3005C17.5207 10.7691 17.8126 11.0319 18.3333 11.5005L21 8.50049"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
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
            d="M16 6.00049C16 8.20963 14.2091 10.0005 12 10.0005C9.79086 10.0005 8 8.20963 8 6.00049C8 3.79135 9.79086 2.00049 12 2.00049C14.2091 2.00049 16 3.79135 16 6.00049Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.5 22.0005C14.8501 22.0005 14.0251 22.0005 13.5126 21.4879C13 20.9754 13 20.1504 13 18.5005C13 16.8506 13 16.0256 13.5126 15.5131C14.0251 15.0005 14.8501 15.0005 16.5 15.0005C18.1499 15.0005 18.9749 15.0005 19.4874 15.5131C20 16.0256 20 16.8506 20 18.5005C20 20.1504 20 20.9754 19.4874 21.4879C18.9749 22.0005 18.1499 22.0005 16.5 22.0005ZM18.468 17.7463C18.6958 17.5185 18.6958 17.1491 18.468 16.9213C18.2402 16.6935 17.8709 16.6935 17.6431 16.9213L15.7222 18.8422L15.3569 18.4769C15.1291 18.2491 14.7598 18.2491 14.532 18.4769C14.3042 18.7047 14.3042 19.074 14.532 19.3019L15.3097 20.0796C15.5375 20.3074 15.9069 20.3074 16.1347 20.0796L18.468 17.7463Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M14.4774 21.9213C13.7513 21.9733 12.9296 22.0005 12 22.0005C4 22.0005 4 19.9858 4 17.5005C4 15.0152 7.58172 13.0005 12 13.0005C14.8806 13.0005 17.4056 13.8569 18.8142 15.1417C18.298 15.0005 17.5737 15.0005 16.5 15.0005C14.8501 15.0005 14.0251 15.0005 13.5126 15.5131C13 16.0256 13 16.8506 13 18.5005C13 20.1504 13 20.9754 13.5126 21.4879C13.7501 21.7254 14.0547 21.8529 14.4774 21.9213Z"
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
            d="M15 6.00049C15 8.20963 13.2091 10.0005 11 10.0005C8.79086 10.0005 7 8.20963 7 6.00049C7 3.79135 8.79086 2.00049 11 2.00049C13.2091 2.00049 15 3.79135 15 6.00049Z"
            fill="currentColor"
          />
          <path
            d="M19 17.5005C19 19.9858 19 22.0005 11 22.0005C3 22.0005 3 19.9858 3 17.5005C3 15.0152 6.58172 13.0005 11 13.0005C15.4183 13.0005 19 15.0152 19 17.5005Z"
            fill="currentColor"
          />
          <path
            d="M21.5606 8.99876C21.8357 8.68917 21.8079 8.21512 21.4983 7.93993C21.1887 7.66474 20.7146 7.69263 20.4394 8.00222L18.2741 10.4382L17.5017 9.74302C17.1938 9.46592 16.7196 9.49088 16.4425 9.79876C16.1654 10.1066 16.1904 10.5809 16.4983 10.858L17.8316 12.058C17.9801 12.1916 18.1757 12.2604 18.3751 12.2493C18.5745 12.2382 18.7612 12.148 18.8939 11.9988L21.5606 8.99876Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconUserCheck as IconComponent).keywords = [
  "user",
  "check",
  "exploiter",
  "enjoyer",
  "drug user",
  "substance abuser",
  "customer",
  "client",
  "employer",
  "consumer",
  "employee",
  "match",
  "hitch",
  "check out",
  "curb",
  "check into",
  "checkout",
  "turn back",
  "arrest",
  "hold",
];

export default IconUserCheck as IconComponent;
