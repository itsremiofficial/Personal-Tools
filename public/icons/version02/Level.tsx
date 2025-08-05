import { FC } from "react";

const IconLevel: FC<IconProps> = ({
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
            d="M2.87012 14.02C3.80012 18.58 7.83012 22 12.6701 22C17.4901 22 21.5101 18.59 22.4601 14.05"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.4801 10.06C21.5801 5.46 17.5301 2 12.6701 2C7.84012 2 3.81012 5.43001 2.87012 9.98001"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.6699 13.5C13.4983 13.5 14.1699 12.8284 14.1699 12C14.1699 11.1716 13.4983 10.5 12.6699 10.5C11.8415 10.5 11.1699 11.1716 11.1699 12C11.1699 12.8284 11.8415 13.5 12.6699 13.5Z"
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
            d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z"
            fill="currentColor"
          />
          <path
            d="M12.6699 14.25C13.9126 14.25 14.9199 13.2426 14.9199 12C14.9199 10.7574 13.9126 9.75 12.6699 9.75C11.4273 9.75 10.4199 10.7574 10.4199 12C10.4199 13.2426 11.4273 14.25 12.6699 14.25Z"
            fill="currentColor"
          />
          <path
            d="M7.66992 12.75H5.66992C5.25992 12.75 4.91992 12.41 4.91992 12C4.91992 11.59 5.25992 11.25 5.66992 11.25H7.66992C8.07992 11.25 8.41992 11.59 8.41992 12C8.41992 12.41 8.07992 12.75 7.66992 12.75Z"
            fill="currentColor"
          />
          <path
            d="M19.6699 12.75H17.6699C17.2599 12.75 16.9199 12.41 16.9199 12C16.9199 11.59 17.2599 11.25 17.6699 11.25H19.6699C20.0799 11.25 20.4199 11.59 20.4199 12C20.4199 12.41 20.0799 12.75 19.6699 12.75Z"
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
            d="M12.6699 2C7.14992 2 2.66992 6.48 2.66992 12C2.66992 17.52 7.14992 22 12.6699 22C18.1899 22 22.6699 17.52 22.6699 12C22.6699 6.48 18.1899 2 12.6699 2ZM7.66992 12.75H5.66992C5.25992 12.75 4.91992 12.41 4.91992 12C4.91992 11.59 5.25992 11.25 5.66992 11.25H7.66992C8.07992 11.25 8.41992 11.59 8.41992 12C8.41992 12.41 8.07992 12.75 7.66992 12.75ZM12.6699 14.25C11.4299 14.25 10.4199 13.24 10.4199 12C10.4199 10.76 11.4299 9.75 12.6699 9.75C13.9099 9.75 14.9199 10.76 14.9199 12C14.9199 13.24 13.9099 14.25 12.6699 14.25ZM19.6699 12.75H17.6699C17.2599 12.75 16.9199 12.41 16.9199 12C16.9199 11.59 17.2599 11.25 17.6699 11.25H19.6699C20.0799 11.25 20.4199 11.59 20.4199 12C20.4199 12.41 20.0799 12.75 19.6699 12.75Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconLevel as IconComponent).keywords = [
  "level",
  "horizontal",
  "flat",
  "plane",
  "stage",
  "storey",
  "spirit level",
  "even",
  "even out",
  "floor",
];

export default IconLevel as IconComponent;
