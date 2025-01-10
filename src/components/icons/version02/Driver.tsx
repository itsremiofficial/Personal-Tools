import { FC } from "react";

const IconDriver: FC<IconProps> = ({
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
            d="M6.66992 6.25V8.25"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10.6699 6.25V8.25"
            stroke="currentColor"
            strokeWidth={width}
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
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6.66992 16V18"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10.6699 16V18"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14.6699 7.25H18.6699"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14.6699 17H18.6699"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.66992 12H22.6699"
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
            d="M16.8597 2H8.48969C4.84968 2 2.67969 4.17 2.67969 7.81V16.18C2.67969 19.82 4.84968 21.99 8.48969 21.99H16.8597C20.4997 21.99 22.6697 19.82 22.6697 16.18V7.81C22.6697 4.17 20.4997 2 16.8597 2Z"
            fill="currentColor"
          />
          <path
            d="M6.66992 9C6.25992 9 5.91992 8.66 5.91992 8.25V6.25C5.91992 5.84 6.25992 5.5 6.66992 5.5C7.07992 5.5 7.41992 5.84 7.41992 6.25V8.25C7.41992 8.66 7.07992 9 6.66992 9Z"
            fill="currentColor"
          />
          <path
            d="M10.6699 9C10.2599 9 9.91992 8.66 9.91992 8.25V6.25C9.91992 5.84 10.2599 5.5 10.6699 5.5C11.0799 5.5 11.4199 5.84 11.4199 6.25V8.25C11.4199 8.66 11.0799 9 10.6699 9Z"
            fill="currentColor"
          />
          <path
            d="M6.66992 18.75C6.25992 18.75 5.91992 18.41 5.91992 18V16C5.91992 15.59 6.25992 15.25 6.66992 15.25C7.07992 15.25 7.41992 15.59 7.41992 16V18C7.41992 18.41 7.07992 18.75 6.66992 18.75Z"
            fill="currentColor"
          />
          <path
            d="M10.6699 18.75C10.2599 18.75 9.91992 18.41 9.91992 18V16C9.91992 15.59 10.2599 15.25 10.6699 15.25C11.0799 15.25 11.4199 15.59 11.4199 16V18C11.4199 18.41 11.0799 18.75 10.6699 18.75Z"
            fill="currentColor"
          />
          <path
            d="M18.6699 8H14.6699C14.2599 8 13.9199 7.66 13.9199 7.25C13.9199 6.84 14.2599 6.5 14.6699 6.5H18.6699C19.0799 6.5 19.4199 6.84 19.4199 7.25C19.4199 7.66 19.0799 8 18.6699 8Z"
            fill="currentColor"
          />
          <path
            d="M18.6699 17.75H14.6699C14.2599 17.75 13.9199 17.41 13.9199 17C13.9199 16.59 14.2599 16.25 14.6699 16.25H18.6699C19.0799 16.25 19.4199 16.59 19.4199 17C19.4199 17.41 19.0799 17.75 18.6699 17.75Z"
            fill="currentColor"
          />
          <path
            d="M22.6699 11.25H2.66992V12.75H22.6699V11.25Z"
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
            d="M16.8599 2H8.47992C5.26992 2 2.66992 4.6 2.66992 7.81V10.25C2.66992 10.8 3.11992 11.25 3.66992 11.25H21.6699C22.2199 11.25 22.6699 10.8 22.6699 10.25V7.81C22.6699 4.6 20.0699 2 16.8599 2ZM7.41992 8.25C7.41992 8.66 7.07992 9 6.66992 9C6.25992 9 5.91992 8.66 5.91992 8.25V6.25C5.91992 5.84 6.25992 5.5 6.66992 5.5C7.07992 5.5 7.41992 5.84 7.41992 6.25V8.25ZM11.4199 8.25C11.4199 8.66 11.0799 9 10.6699 9C10.2599 9 9.91992 8.66 9.91992 8.25V6.25C9.91992 5.84 10.2599 5.5 10.6699 5.5C11.0799 5.5 11.4199 5.84 11.4199 6.25V8.25ZM18.6699 8H14.6699C14.2599 8 13.9199 7.66 13.9199 7.25C13.9199 6.84 14.2599 6.5 14.6699 6.5H18.6699C19.0799 6.5 19.4199 6.84 19.4199 7.25C19.4199 7.66 19.0799 8 18.6699 8Z"
            fill="currentColor"
          />
          <path
            d="M2.66992 16.19C2.66992 19.4 5.26992 22 8.47992 22H16.8499C20.0699 22 22.6699 19.4 22.6699 16.19V13.75C22.6699 13.2 22.2199 12.75 21.6699 12.75H3.66992C3.11992 12.75 2.66992 13.2 2.66992 13.75V16.19ZM14.6699 16.25H18.6699C19.0799 16.25 19.4199 16.59 19.4199 17C19.4199 17.41 19.0799 17.75 18.6699 17.75H14.6699C14.2599 17.75 13.9199 17.41 13.9199 17C13.9199 16.59 14.2599 16.25 14.6699 16.25ZM9.91992 16C9.91992 15.59 10.2599 15.25 10.6699 15.25C11.0799 15.25 11.4199 15.59 11.4199 16V18C11.4199 18.41 11.0799 18.75 10.6699 18.75C10.2599 18.75 9.91992 18.41 9.91992 18V16ZM5.91992 16C5.91992 15.59 6.25992 15.25 6.66992 15.25C7.07992 15.25 7.41992 15.59 7.41992 16V18C7.41992 18.41 7.07992 18.75 6.66992 18.75C6.25992 18.75 5.91992 18.41 5.91992 18V16Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconDriver as IconComponent).keywords = [
  "driver",
  "device driver",
  "number one wood",
  "motorist",
  "passenger",
  "motorman",
  "vehicle",
  "car",
  "driving",
  "chauffeur",
];

export default IconDriver as IconComponent;
