import { FC } from "react";

const IconScreenmirroring: FC<IconProps> = ({
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
            d="M13.2699 18.5H17.0699C18.5699 18.5 19.1699 17.9 19.1699 16.4V14.6C19.1699 13.1 18.5699 12.5 17.0699 12.5H13.2699C11.7699 12.5 11.1699 13.1 11.1699 14.6V16.4C11.1699 17.9 11.7699 18.5 13.2699 18.5Z"
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
            d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2Z"
            fill="currentColor"
          />
          <path
            d="M13.2699 18.5H17.0699C18.5699 18.5 19.1699 17.9 19.1699 16.4V14.6C19.1699 13.1 18.5699 12.5 17.0699 12.5H13.2699C11.7699 12.5 11.1699 13.1 11.1699 14.6V16.4C11.1699 17.9 11.7699 18.5 13.2699 18.5Z"
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
            d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2ZM19.1699 16.4C19.1699 17.9 18.5699 18.5 17.0699 18.5H13.2699C11.7699 18.5 11.1699 17.9 11.1699 16.4V14.6C11.1699 13.1 11.7699 12.5 13.2699 12.5H17.0699C18.5699 12.5 19.1699 13.1 19.1699 14.6V16.4Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconScreenmirroring as IconComponent).keywords = ["screenmirroring"];

export default IconScreenmirroring as IconComponent;
