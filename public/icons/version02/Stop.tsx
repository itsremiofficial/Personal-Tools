import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconStop: FC<IconProps> = ({
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
            d="M9.96992 21H15.3699C19.8699 21 21.6699 19.2 21.6699 14.7V9.3C21.6699 4.8 19.8699 3 15.3699 3H9.96992C5.46992 3 3.66992 4.8 3.66992 9.3V14.7C3.66992 19.2 5.46992 21 9.96992 21Z"
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
            d="M21.5699 7.66L20.7899 8.13L20.2999 8.43L19.3699 8.98L5.42992 17.34L5.33992 17.39L4.80992 17.71L4.19992 18.08C3.83992 17.19 3.66992 16.07 3.66992 14.7V9.3C3.66992 4.8 5.46992 3 9.96992 3H15.3699C19.2799 3 21.1499 4.36 21.5699 7.66Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21.6704 9.20001V14.7C21.6704 19.2 19.8704 21 15.3704 21H9.97039C7.53039 21 5.88039 20.47 4.90039 19.26L5.20039 19.08L5.81039 18.71L6.34039 18.39L6.43039 18.34L20.3704 9.98001L21.3004 9.43001L21.6704 9.20001Z"
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
            d="M21.0299 7.78L5.20992 17.28C4.59992 17.65 3.77992 17.28 3.69992 16.57C3.67992 16.38 3.66992 16.19 3.66992 16V8C3.66992 5 5.66992 3 8.66992 3H16.6699C19.6699 3 20.8999 4.54 21.4799 6.65C21.5999 7.09 21.4099 7.55 21.0299 7.78Z"
            fill="currentColor"
          />
          <path
            d="M21.6703 11.09V16C21.6703 19 19.6703 21 16.6703 21H8.67032C7.75032 21 6.88032 20.75 6.14032 20.31C5.50032 19.94 5.54032 19 6.17032 18.62L20.1503 10.23C20.8203 9.83001 21.6703 10.31 21.6703 11.09Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconStop as IconComponentType).keywords = [
  "stop",
  "stoppage",
  "cease",
  "kibosh",
  "discontinue",
  "terminate",
  "quit",
  "break off",
  "intercept",
  "hold back",
];

export default IconStop as IconComponentType;
