import { FC } from "react";

const IconMore: FC<IconProps> = ({
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
            d="M5.66992 10C4.56992 10 3.66992 10.9 3.66992 12C3.66992 13.1 4.56992 14 5.66992 14C6.76992 14 7.66992 13.1 7.66992 12C7.66992 10.9 6.76992 10 5.66992 10Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M19.6699 10C18.5699 10 17.6699 10.9 17.6699 12C17.6699 13.1 18.5699 14 19.6699 14C20.7699 14 21.6699 13.1 21.6699 12C21.6699 10.9 20.7699 10 19.6699 10Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.6699 10C11.5699 10 10.6699 10.9 10.6699 12C10.6699 13.1 11.5699 14 12.6699 14C13.7699 14 14.6699 13.1 14.6699 12C14.6699 10.9 13.7699 10 12.6699 10Z"
            stroke="currentColor"
            strokeWidth={width}
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
            d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2Z"
            fill="currentColor"
          />
          <path
            d="M12.6699 10.6899C11.9499 10.6899 11.3599 11.2799 11.3599 11.9999C11.3599 12.7199 11.9499 13.3099 12.6699 13.3099C13.3899 13.3099 13.9799 12.7199 13.9799 11.9999C13.9799 11.2799 13.3899 10.6899 12.6699 10.6899Z"
            fill="currentColor"
          />
          <path
            d="M7.66986 10.6899C6.94986 10.6899 6.35986 11.2799 6.35986 11.9999C6.35986 12.7199 6.94986 13.3099 7.66986 13.3099C8.38986 13.3099 8.97986 12.7199 8.97986 11.9999C8.97986 11.2799 8.38986 10.6899 7.66986 10.6899Z"
            fill="currentColor"
          />
          <path
            d="M17.6699 10.6899C16.9499 10.6899 16.3599 11.2799 16.3599 11.9999C16.3599 12.7199 16.9499 13.3099 17.6699 13.3099C18.3899 13.3099 18.9799 12.7199 18.9799 11.9999C18.9799 11.2799 18.3899 10.6899 17.6699 10.6899Z"
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
            d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2ZM7.66992 13.31C6.94992 13.31 6.35992 12.72 6.35992 12C6.35992 11.28 6.94992 10.69 7.66992 10.69C8.38992 10.69 8.97992 11.28 8.97992 12C8.97992 12.72 8.38992 13.31 7.66992 13.31ZM12.6699 13.31C11.9499 13.31 11.3599 12.72 11.3599 12C11.3599 11.28 11.9499 10.69 12.6699 10.69C13.3899 10.69 13.9799 11.28 13.9799 12C13.9799 12.72 13.3899 13.31 12.6699 13.31ZM17.6699 13.31C16.9499 13.31 16.3599 12.72 16.3599 12C16.3599 11.28 16.9499 10.69 17.6699 10.69C18.3899 10.69 18.9799 11.28 18.9799 12C18.9799 12.72 18.3899 13.31 17.6699 13.31Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMore as IconComponent).keywords = [
  "more",
  "additional",
  "further",
  "added",
  "more than",
  "to a greater extent",
  "maximum",
  "farther",
  "anymore",
  "better",
];

export default IconMore as IconComponent;
