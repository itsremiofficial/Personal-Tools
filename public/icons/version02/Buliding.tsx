import { FC } from "react";

const IconBuliding: FC<IconProps> = ({
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
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.6699 2H7.66992C4.66992 2 3.66992 3.79 3.66992 6V22H21.6699V6C21.6699 3.79 20.6699 2 17.6699 2Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.66992 16.5H10.6699"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14.6699 16.5H17.6699"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.66992 12H10.6699"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14.6699 12H17.6699"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.66992 7.5H10.6699"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14.6699 7.5H17.6699"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
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
            d="M22.6699 21.25H2.66992C2.25992 21.25 1.91992 21.59 1.91992 22C1.91992 22.41 2.25992 22.75 2.66992 22.75H22.6699C23.0799 22.75 23.4199 22.41 23.4199 22C23.4199 21.59 23.0799 21.25 22.6699 21.25Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17.6699 2H7.66992C4.66992 2 3.66992 3.79 3.66992 6V22H21.6699V6C21.6699 3.79 20.6699 2 17.6699 2Z"
            fill="currentColor"
          />
          <path
            d="M10.6699 17.25H7.66992C7.25992 17.25 6.91992 16.91 6.91992 16.5C6.91992 16.09 7.25992 15.75 7.66992 15.75H10.6699C11.0799 15.75 11.4199 16.09 11.4199 16.5C11.4199 16.91 11.0799 17.25 10.6699 17.25Z"
            fill="currentColor"
          />
          <path
            d="M17.6699 17.25H14.6699C14.2599 17.25 13.9199 16.91 13.9199 16.5C13.9199 16.09 14.2599 15.75 14.6699 15.75H17.6699C18.0799 15.75 18.4199 16.09 18.4199 16.5C18.4199 16.91 18.0799 17.25 17.6699 17.25Z"
            fill="currentColor"
          />
          <path
            d="M10.6699 12.75H7.66992C7.25992 12.75 6.91992 12.41 6.91992 12C6.91992 11.59 7.25992 11.25 7.66992 11.25H10.6699C11.0799 11.25 11.4199 11.59 11.4199 12C11.4199 12.41 11.0799 12.75 10.6699 12.75Z"
            fill="currentColor"
          />
          <path
            d="M17.6699 12.75H14.6699C14.2599 12.75 13.9199 12.41 13.9199 12C13.9199 11.59 14.2599 11.25 14.6699 11.25H17.6699C18.0799 11.25 18.4199 11.59 18.4199 12C18.4199 12.41 18.0799 12.75 17.6699 12.75Z"
            fill="currentColor"
          />
          <path
            d="M10.6699 8.25H7.66992C7.25992 8.25 6.91992 7.91 6.91992 7.5C6.91992 7.09 7.25992 6.75 7.66992 6.75H10.6699C11.0799 6.75 11.4199 7.09 11.4199 7.5C11.4199 7.91 11.0799 8.25 10.6699 8.25Z"
            fill="currentColor"
          />
          <path
            d="M17.6699 8.25H14.6699C14.2599 8.25 13.9199 7.91 13.9199 7.5C13.9199 7.09 14.2599 6.75 14.6699 6.75H17.6699C18.0799 6.75 18.4199 7.09 18.4199 7.5C18.4199 7.91 18.0799 8.25 17.6699 8.25Z"
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
            d="M22.6699 21.25H2.66992C2.25992 21.25 1.91992 21.59 1.91992 22C1.91992 22.41 2.25992 22.75 2.66992 22.75H22.6699C23.0799 22.75 23.4199 22.41 23.4199 22C23.4199 21.59 23.0799 21.25 22.6699 21.25Z"
            fill="currentColor"
          />
          <path
            d="M17.6699 2H7.66992C4.66992 2 3.66992 3.79 3.66992 6V22H21.6699V6C21.6699 3.79 20.6699 2 17.6699 2ZM10.6699 17.25H7.66992C7.25992 17.25 6.91992 16.91 6.91992 16.5C6.91992 16.09 7.25992 15.75 7.66992 15.75H10.6699C11.0799 15.75 11.4199 16.09 11.4199 16.5C11.4199 16.91 11.0799 17.25 10.6699 17.25ZM10.6699 12.75H7.66992C7.25992 12.75 6.91992 12.41 6.91992 12C6.91992 11.59 7.25992 11.25 7.66992 11.25H10.6699C11.0799 11.25 11.4199 11.59 11.4199 12C11.4199 12.41 11.0799 12.75 10.6699 12.75ZM10.6699 8.25H7.66992C7.25992 8.25 6.91992 7.91 6.91992 7.5C6.91992 7.09 7.25992 6.75 7.66992 6.75H10.6699C11.0799 6.75 11.4199 7.09 11.4199 7.5C11.4199 7.91 11.0799 8.25 10.6699 8.25ZM17.6699 17.25H14.6699C14.2599 17.25 13.9199 16.91 13.9199 16.5C13.9199 16.09 14.2599 15.75 14.6699 15.75H17.6699C18.0799 15.75 18.4199 16.09 18.4199 16.5C18.4199 16.91 18.0799 17.25 17.6699 17.25ZM17.6699 12.75H14.6699C14.2599 12.75 13.9199 12.41 13.9199 12C13.9199 11.59 14.2599 11.25 14.6699 11.25H17.6699C18.0799 11.25 18.4199 11.59 18.4199 12C18.4199 12.41 18.0799 12.75 17.6699 12.75ZM17.6699 8.25H14.6699C14.2599 8.25 13.9199 7.91 13.9199 7.5C13.9199 7.09 14.2599 6.75 14.6699 6.75H17.6699C18.0799 6.75 18.4199 7.09 18.4199 7.5C18.4199 7.91 18.0799 8.25 17.6699 8.25Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBuliding as IconComponent).keywords = ["buliding"];

export default IconBuliding as IconComponent;
