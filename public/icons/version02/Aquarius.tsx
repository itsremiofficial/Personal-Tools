import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconAquarius: FC<IconProps> = ({
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
            d="M12.6699 16C16.5399 16 19.6699 12.87 19.6699 9C19.6699 5.13 16.5399 2 12.6699 2C8.79992 2 5.66992 5.13 5.66992 9"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.6699 16V22"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.6699 19H9.66992"
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
            d="M20.4199 9C20.4199 4.73 16.9399 1.25 12.6699 1.25C8.39992 1.25 4.91992 4.73 4.91992 9C4.91992 9.41 5.25992 9.75 5.66992 9.75C6.07992 9.75 6.41992 9.41 6.41992 9C6.41992 5.55 9.21992 2.75 12.6699 2.75C16.1199 2.75 18.9199 5.55 18.9199 9C18.9199 12.45 16.1199 15.25 12.6699 15.25C12.2599 15.25 11.9199 15.59 11.9199 16V22C11.9199 22.41 12.2599 22.75 12.6699 22.75C13.0799 22.75 13.4199 22.41 13.4199 22V16.71C17.3399 16.33 20.4199 13.02 20.4199 9Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.6699 19.75H9.66992C9.25992 19.75 8.91992 19.41 8.91992 19C8.91992 18.59 9.25992 18.25 9.66992 18.25H15.6699C16.0799 18.25 16.4199 18.59 16.4199 19C16.4199 19.41 16.0799 19.75 15.6699 19.75Z"
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
            d="M20.4199 9C20.4199 4.73 16.9399 1.25 12.6699 1.25C8.39992 1.25 4.91992 4.73 4.91992 9C4.91992 9.41 5.25992 9.75 5.66992 9.75C6.07992 9.75 6.41992 9.41 6.41992 9C6.41992 5.55 9.21992 2.75 12.6699 2.75C16.1199 2.75 18.9199 5.55 18.9199 9C18.9199 12.45 16.1199 15.25 12.6699 15.25C12.2599 15.25 11.9199 15.59 11.9199 16V22C11.9199 22.41 12.2599 22.75 12.6699 22.75C13.0799 22.75 13.4199 22.41 13.4199 22V16.71C17.3399 16.33 20.4199 13.02 20.4199 9Z"
            fill="currentColor"
          />
          <path
            d="M15.6699 19.75H9.66992C9.25992 19.75 8.91992 19.41 8.91992 19C8.91992 18.59 9.25992 18.25 9.66992 18.25H15.6699C16.0799 18.25 16.4199 18.59 16.4199 19C16.4199 19.41 16.0799 19.75 15.6699 19.75Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconAquarius as IconComponentType).keywords = [
  "aquarius",
  "aquarius the water bearer",
  "pisces",
  "aquarium",
  "aquarian",
  "capricorn",
  "scorpio",
  "gemini",
  "virgo",
  "sagittarius",
];

export default IconAquarius as IconComponentType;
