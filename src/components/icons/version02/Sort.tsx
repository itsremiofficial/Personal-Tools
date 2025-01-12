import { FC } from "react";

const IconSort: FC<IconProps> = ({
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
            d="M3.66992 7H21.6699"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.34" : "1"}
            d="M6.66992 12H18.6699"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M10.6699 17H14.6699"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
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
            d="M18.6699 8.5H6.66992C6.25992 8.5 5.91992 8.16 5.91992 7.75C5.91992 7.34 6.25992 7 6.66992 7H18.6699C19.0799 7 19.4199 7.34 19.4199 7.75C19.4199 8.16 19.0799 8.5 18.6699 8.5Z"
            fill="currentColor"
          />
          <path
            d="M16.6699 12.75H8.66992C8.25992 12.75 7.91992 12.41 7.91992 12C7.91992 11.59 8.25992 11.25 8.66992 11.25H16.6699C17.0799 11.25 17.4199 11.59 17.4199 12C17.4199 12.41 17.0799 12.75 16.6699 12.75Z"
            fill="currentColor"
          />
          <path
            d="M14.0001 17H11.3301C10.9201 17 10.5801 16.66 10.5801 16.25C10.5801 15.84 10.9201 15.5 11.3301 15.5H14.0001C14.4101 15.5 14.7501 15.84 14.7501 16.25C14.7501 16.66 14.4201 17 14.0001 17Z"
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
            d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2ZM13.9999 17H11.3299C10.9199 17 10.5799 16.66 10.5799 16.25C10.5799 15.84 10.9199 15.5 11.3299 15.5H13.9999C14.4099 15.5 14.7499 15.84 14.7499 16.25C14.7499 16.66 14.4199 17 13.9999 17ZM16.6699 12.75H8.66992C8.25992 12.75 7.91992 12.41 7.91992 12C7.91992 11.59 8.25992 11.25 8.66992 11.25H16.6699C17.0799 11.25 17.4199 11.59 17.4199 12C17.4199 12.41 17.0799 12.75 16.6699 12.75ZM18.6699 8.5H6.66992C6.25992 8.5 5.91992 8.16 5.91992 7.75C5.91992 7.34 6.25992 7 6.66992 7H18.6699C19.0799 7 19.4199 7.34 19.4199 7.75C19.4199 8.16 19.0799 8.5 18.6699 8.5Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSort as IconComponent).keywords = [
  "sort",
  "classify",
  "assort",
  "class",
  "form",
  "kind",
  "sort out",
  "variety",
  "separate",
  "screen",
];

export default IconSort as IconComponent;
