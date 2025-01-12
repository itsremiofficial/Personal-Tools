import { FC } from "react";

const IconUserCheckRounded: FC<IconProps> = ({
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
            cy="6.00049"
            r="4"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M15.5841 20.4371C14.5358 20.7949 13.3099 21.0005 12 21.0005C8.13401 21.0005 5 19.2096 5 17.0005C5 14.7913 8.13401 13.0005 12 13.0005C14.6083 13.0005 16.8834 13.8157 18.0877 15.0245"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M18 18.5005C18.3905 18.891 18.6095 19.11 19 19.5005L21 17.0005"
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
          <circle cx="12" cy="6.00049" r="4" fill="currentColor" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.5 22.0005C14.8501 22.0005 14.0251 22.0005 13.5126 21.4879C13 20.9754 13 20.1504 13 18.5005C13 16.8506 13 16.0256 13.5126 15.5131C14.0251 15.0005 14.8501 15.0005 16.5 15.0005C18.1499 15.0005 18.9749 15.0005 19.4874 15.5131C20 16.0256 20 16.8506 20 18.5005C20 20.1504 20 20.9754 19.4874 21.4879C18.9749 22.0005 18.1499 22.0005 16.5 22.0005ZM18.468 17.7463C18.6958 17.5185 18.6958 17.1491 18.468 16.9213C18.2402 16.6935 17.8709 16.6935 17.6431 16.9213L15.7222 18.8422L15.3569 18.4769C15.1291 18.2491 14.7598 18.2491 14.532 18.4769C14.3042 18.7047 14.3042 19.074 14.532 19.3019L15.3097 20.0796C15.5375 20.3074 15.9069 20.3074 16.1347 20.0796L18.468 17.7463Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M18.0947 15.0316C17.6699 15.0005 17.1487 15.0005 16.5 15.0005C14.8501 15.0005 14.0251 15.0005 13.5126 15.5131C13 16.0256 13 16.8506 13 18.5005C13 19.6668 13 20.4209 13.1811 20.9438C12.7971 20.9811 12.4025 21.0005 12 21.0005C8.13401 21.0005 5 19.2096 5 17.0005C5 14.7913 8.13401 13.0005 12 13.0005C14.6134 13.0005 16.8924 13.8189 18.0947 15.0316Z"
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
          <circle cx="12" cy="6.00049" r="4" fill="currentColor" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.4685 16.4149C21.792 16.6736 21.8444 17.1456 21.5857 17.469L19.5857 19.969C19.4524 20.1356 19.2545 20.2376 19.0415 20.2494C18.8285 20.2612 18.6205 20.1817 18.4697 20.0308L17.4697 19.0308C17.1768 18.738 17.1768 18.2631 17.4697 17.9702C17.7626 17.6773 18.2374 17.6773 18.5303 17.9702L18.9371 18.377L20.4143 16.532C20.6731 16.2085 21.1451 16.1561 21.4685 16.4149Z"
            fill="currentColor"
          />
          <path
            d="M18.8272 16.1142L18.6433 16.3439C17.8773 16.1161 17.0138 16.3046 16.409 16.9094C15.5303 17.7881 15.5303 19.2127 16.409 20.0914L16.4207 20.103C15.2154 20.6647 13.6765 21.0015 12 21.0015C8.13401 21.0015 5 19.2106 5 17.0015C5 14.7923 8.13401 13.0015 12 13.0015C15.3324 13.0015 18.1209 14.3321 18.8272 16.1142Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconUserCheckRounded as IconComponent).keywords = [
  "user",
  "check",
  "rounded",
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
  "ringed",
  "ring-shaped",
  "annulate",
  "annular",
  "circular",
  "rotund",
  "bowfront",
  "prolate",
  "domed",
];

export default IconUserCheckRounded as IconComponent;
