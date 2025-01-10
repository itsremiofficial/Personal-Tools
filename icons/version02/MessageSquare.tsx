import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconMessageSquare: FC<IconProps> = ({
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
            opacity={duotone ? "0.4" : "1"}
            d="M18.9499 9.76007V12.9001C18.9499 13.1001 18.9399 13.3 18.9199 13.49C18.7399 15.61 17.4899 16.6701 15.1899 16.6701H14.8799C14.6799 16.6701 14.4899 16.7601 14.3799 16.9201L13.4399 18.1801C13.0199 18.7401 12.3499 18.7401 11.9299 18.1801L10.9899 16.9201C10.8899 16.7901 10.6599 16.6701 10.4899 16.6701H10.1799C7.66993 16.6701 6.41992 16.0501 6.41992 12.9101V9.77005C6.41992 7.47005 7.47991 6.22007 9.59991 6.04007C9.78991 6.02007 9.98991 6.01007 10.1899 6.01007H15.2199C17.6899 6.00007 18.9499 7.26007 18.9499 9.76007Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.66992 22H15.6699C20.6699 22 22.6699 20 22.6699 15V9C22.6699 4 20.6699 2 15.6699 2H9.66992C4.66992 2 2.66992 4 2.66992 9V15C2.66992 20 4.66992 22 9.66992 22Z"
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
            d="M18.9499 9.76007V12.9001C18.9499 13.1001 18.9399 13.3 18.9199 13.49C18.7399 15.61 17.4899 16.6701 15.1899 16.6701H14.8799C14.6799 16.6701 14.4899 16.7601 14.3799 16.9201L13.4399 18.1801C13.0199 18.7401 12.3499 18.7401 11.9299 18.1801L10.9899 16.9201C10.8899 16.7901 10.6599 16.6701 10.4899 16.6701H10.1799C7.66993 16.6701 6.41992 16.0501 6.41992 12.9101V9.77005C6.41992 7.47005 7.47991 6.22007 9.59991 6.04007C9.78991 6.02007 9.98991 6.01007 10.1899 6.01007H15.2199C17.6899 6.00007 18.9499 7.26007 18.9499 9.76007Z"
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
            d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2ZM18.9499 12.91C18.9499 13.11 18.9399 13.31 18.9199 13.5C18.7399 15.62 17.4899 16.68 15.1899 16.68H14.8699C14.6699 16.68 14.4799 16.77 14.3699 16.93L13.4299 18.19C13.0099 18.75 12.3399 18.75 11.9199 18.19L10.9799 16.93C10.8799 16.8 10.6499 16.68 10.4799 16.68H10.1599C7.64992 16.68 6.39992 16.06 6.39992 12.92V9.76C6.39992 7.46 7.45992 6.21 9.57992 6.03C9.74992 6.01 9.94992 6 10.1599 6H15.1899C17.6999 6 18.9499 7.26 18.9499 9.76V12.91Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMessageSquare as IconComponentType).keywords = [
  "message",
  "square",
  "subject matter",
  "substance",
  "content",
  "file",
  "communiqué",
  "transmission",
  "communication",
  "news",
  "advertisement",
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

export default IconMessageSquare as IconComponentType;
