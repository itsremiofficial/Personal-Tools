import { FC } from "react";

const IconChart2: FC<IconProps> = ({
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
            d="M16.1699 18.5C17.2699 18.5 18.1699 17.6 18.1699 16.5V7.5C18.1699 6.4 17.2699 5.5 16.1699 5.5C15.0699 5.5 14.1699 6.4 14.1699 7.5V16.5C14.1699 17.6 15.0599 18.5 16.1699 18.5Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.16992 18.5C10.2699 18.5 11.1699 17.6 11.1699 16.5V13C11.1699 11.9 10.2699 11 9.16992 11C8.06992 11 7.16992 11.9 7.16992 13V16.5C7.16992 17.6 8.05992 18.5 9.16992 18.5Z"
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
            d="M17.0898 7.8099V16.1899C17.0898 16.8299 16.5698 17.3499 15.9298 17.3499C15.2798 17.3499 14.7598 16.8299 14.7598 16.1899V7.8099C14.7598 7.1699 15.2798 6.6499 15.9298 6.6499C16.5698 6.6499 17.0898 7.1699 17.0898 7.8099Z"
            fill="currentColor"
          />
          <path
            d="M10.58 12.93V16.19C10.58 16.83 10.06 17.35 9.41 17.35C8.77 17.35 8.25 16.83 8.25 16.19V12.93C8.25 12.29 8.77 11.77 9.41 11.77C10.06 11.77 10.58 12.29 10.58 12.93Z"
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
            d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2ZM10.5799 16.19C10.5799 16.83 10.0599 17.35 9.40992 17.35C8.76992 17.35 8.24992 16.83 8.24992 16.19V12.93C8.24992 12.29 8.76992 11.77 9.40992 11.77C10.0599 11.77 10.5799 12.29 10.5799 12.93V16.19ZM17.0899 16.19C17.0899 16.83 16.5699 17.35 15.9299 17.35C15.2799 17.35 14.7599 16.83 14.7599 16.19V7.81C14.7599 7.17 15.2799 6.65 15.9299 6.65C16.5699 6.65 17.0899 7.17 17.0899 7.81V16.19Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconChart2 as IconComponent).keywords = [
  "chart",
  "2",
  "map",
  "cartography",
  "mapping",
  "cartographic",
  "plan",
  "diagram",
  "graphical",
  "diagrammatic",
  "blueprint",
  "wireless network",
  "sign on",
  "sign off",
  "put through",
  "back up",
  "ring up",
  "call up",
  "hang up",
  "read out",
];

export default IconChart2 as IconComponent;
