import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconReceiptSquare: FC<IconProps> = ({
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
            d="M9.66992 22H15.6699C20.6699 22 22.6699 20 22.6699 15V9C22.6699 4 20.6699 2 15.6699 2H9.66992C4.66992 2 2.66992 4 2.66992 9V15C2.66992 20 4.66992 22 9.66992 22Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.57016 16.5299C10.0502 16.0099 10.7902 16.0499 11.2102 16.6199L11.8102 17.4199C12.2802 18.0499 13.0602 18.0499 13.5302 17.4199L14.1202 16.6299C14.5402 16.0699 15.2802 16.0299 15.7602 16.5399C16.8102 17.6599 17.6602 17.2899 17.6602 15.7199V9.08987C17.6602 6.71987 17.1002 6.12988 14.8802 6.12988H10.4402C8.22016 6.12988 7.66016 6.71987 7.66016 9.08987V15.7199C7.67016 17.2699 8.53016 17.6399 9.57016 16.5299Z"
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
            d="M9.57016 16.5299C10.0502 16.0099 10.7902 16.0499 11.2102 16.6199L11.8102 17.4199C12.2802 18.0499 13.0602 18.0499 13.5302 17.4199L14.1202 16.6299C14.5402 16.0699 15.2802 16.0299 15.7602 16.5399C16.8102 17.6599 17.6602 17.2899 17.6602 15.7199V9.08988C17.6602 6.71988 17.1002 6.12988 14.8802 6.12988H10.4402C8.22016 6.12988 7.66016 6.71988 7.66016 9.08988V15.7199C7.67016 17.2699 8.53016 17.6399 9.57016 16.5299Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.8597 2H8.48969C4.84968 2 2.67969 4.17 2.67969 7.81V16.18C2.67969 19.82 4.84968 21.99 8.48969 21.99H16.8597C20.4997 21.99 22.6697 19.82 22.6697 16.18V7.81C22.6697 4.17 20.4997 2 16.8597 2Z"
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
            d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2ZM17.6699 15.71C17.6699 17.28 16.8099 17.65 15.7699 16.53C15.2899 16.02 14.5499 16.06 14.1299 16.62L13.5399 17.41C13.0699 18.04 12.2899 18.04 11.8199 17.41L11.2199 16.61C10.7999 16.05 10.0599 16.01 9.57992 16.52C8.52992 17.64 7.66992 17.27 7.66992 15.71V9.08C7.66992 6.71 8.22992 6.12 10.4499 6.12H14.8899C17.1099 6.12 17.6699 6.71 17.6699 9.08V15.71Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconReceiptSquare as IconComponentType).keywords = [
  "receipt",
  "square",
  "receiving",
  "reception",
  "acknowledge",
  "recipient",
  "receptor",
  "granting",
  "receive",
  "grant",
  "remitting",
  "quadrate",
  "right-angled",
  "squarely",
  "foursquare",
  "squarish",
  "conventional",
  "paid",
  "honorable",
  "honest",
];

export default IconReceiptSquare as IconComponentType;
