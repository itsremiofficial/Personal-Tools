import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconRadio: FC<IconProps> = ({
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
            d="M17.6699 5H7.66992C4.66992 5 2.66992 7 2.66992 10V17C2.66992 20 4.66992 22 7.66992 22H17.6699C20.6699 22 22.6699 20 22.6699 17V10C22.6699 7 20.6699 5 17.6699 5Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.66992 2V5"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.16992 16C10.5506 16 11.6699 14.8807 11.6699 13.5C11.6699 12.1193 10.5506 11 9.16992 11C7.78921 11 6.66992 12.1193 6.66992 13.5C6.66992 14.8807 7.78921 16 9.16992 16Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.1699 11H19.1699"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.1699 15H15.6699"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M18.6699 15H19.1699"
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
            d="M22.6699 10V17C22.6699 20 20.6699 22 17.6699 22H7.66992C4.66992 22 2.66992 20 2.66992 17V10C2.66992 7.26 4.33992 5.34999 6.91992 5.04999C7.15992 5.00999 7.40992 5 7.66992 5H17.6699C20.6699 5 22.6699 7 22.6699 10Z"
            fill="currentColor"
          />
          <path
            d="M8.41992 2V5H7.66992C7.40992 5 7.15992 5.00999 6.91992 5.04999V2C6.91992 1.59 7.25992 1.25 7.66992 1.25C8.07992 1.25 8.41992 1.59 8.41992 2Z"
            fill="currentColor"
          />
          <path
            d="M8.5498 16C9.93052 16 11.0498 14.8807 11.0498 13.5C11.0498 12.1193 9.93052 11 8.5498 11C7.16909 11 6.0498 12.1193 6.0498 13.5C6.0498 14.8807 7.16909 16 8.5498 16Z"
            fill="currentColor"
          />
          <path
            d="M18.5498 12.25H14.5498C14.1398 12.25 13.7998 11.91 13.7998 11.5C13.7998 11.09 14.1398 10.75 14.5498 10.75H18.5498C18.9598 10.75 19.2998 11.09 19.2998 11.5C19.2998 11.91 18.9598 12.25 18.5498 12.25Z"
            fill="currentColor"
          />
          <path
            d="M15.0498 16.25H14.5498C14.1398 16.25 13.7998 15.91 13.7998 15.5C13.7998 15.09 14.1398 14.75 14.5498 14.75H15.0498C15.4598 14.75 15.7998 15.09 15.7998 15.5C15.7998 15.91 15.4598 16.25 15.0498 16.25Z"
            fill="currentColor"
          />
          <path
            d="M18.5498 16.25H18.0498C17.6398 16.25 17.2998 15.91 17.2998 15.5C17.2998 15.09 17.6398 14.75 18.0498 14.75H18.5498C18.9598 14.75 19.2998 15.09 19.2998 15.5C19.2998 15.91 18.9598 16.25 18.5498 16.25Z"
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
            d="M8.41992 2V5H7.66992C7.40992 5 7.15992 5.01 6.91992 5.05V2C6.91992 1.59 7.25992 1.25 7.66992 1.25C8.07992 1.25 8.41992 1.59 8.41992 2Z"
            fill="currentColor"
          />
          <path
            d="M17.6699 5H7.66992C7.40992 5 7.15992 5.01 6.91992 5.05C4.33992 5.35 2.66992 7.26 2.66992 10V17C2.66992 20 4.66992 22 7.66992 22H17.6699C20.6699 22 22.6699 20 22.6699 17V10C22.6699 7 20.6699 5 17.6699 5ZM8.54992 16C7.16992 16 6.04992 14.88 6.04992 13.5C6.04992 12.12 7.16992 11 8.54992 11C9.92992 11 11.0499 12.12 11.0499 13.5C11.0499 14.88 9.92992 16 8.54992 16ZM15.0499 16.25H14.5499C14.1399 16.25 13.7999 15.91 13.7999 15.5C13.7999 15.09 14.1399 14.75 14.5499 14.75H15.0499C15.4599 14.75 15.7999 15.09 15.7999 15.5C15.7999 15.91 15.4599 16.25 15.0499 16.25ZM18.5499 16.25H18.0499C17.6399 16.25 17.2999 15.91 17.2999 15.5C17.2999 15.09 17.6399 14.75 18.0499 14.75H18.5499C18.9599 14.75 19.2999 15.09 19.2999 15.5C19.2999 15.91 18.9599 16.25 18.5499 16.25ZM18.5499 12.25H14.5499C14.1399 12.25 13.7999 11.91 13.7999 11.5C13.7999 11.09 14.1399 10.75 14.5499 10.75H18.5499C18.9599 10.75 19.2999 11.09 19.2999 11.5C19.2999 11.91 18.9599 12.25 18.5499 12.25Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconRadio as IconComponentType).keywords = [
  "radio",
  "radiocommunication",
  "tuner",
  "wireless",
  "radio receiver",
  "radio set",
  "receiving set",
  "radiotelegraph",
  "radiotelephone",
  "walkie-talkie",
];

export default IconRadio as IconComponentType;
