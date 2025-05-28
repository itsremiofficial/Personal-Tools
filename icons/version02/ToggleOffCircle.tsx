import { FC } from "react";

const IconToggleOffCircle: FC<IconProps> = ({
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
            d="M10.6699 4H14.6699C19.0899 4 22.6699 7.58 22.6699 12C22.6699 16.42 19.0899 20 14.6699 20H10.6699C6.24992 20 2.66992 16.42 2.66992 12C2.66992 7.58 6.24992 4 10.6699 4Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10.6699 16C12.8791 16 14.6699 14.2091 14.6699 12C14.6699 9.79086 12.8791 8 10.6699 8C8.46078 8 6.66992 9.79086 6.66992 12C6.66992 14.2091 8.46078 16 10.6699 16Z"
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
            d="M14.5299 3.85986H10.8099C6.31992 3.85986 2.66992 7.50986 2.66992 11.9999C2.66992 16.4899 6.31992 20.1399 10.8099 20.1399H14.5299C19.0199 20.1399 22.6699 16.4899 22.6699 11.9999C22.6699 7.50986 19.0199 3.85986 14.5299 3.85986Z"
            fill="currentColor"
          />
          <path
            d="M10.8101 16.4201C13.2512 16.4201 15.2301 14.4412 15.2301 12.0001C15.2301 9.55898 13.2512 7.58008 10.8101 7.58008C8.36904 7.58008 6.39014 9.55898 6.39014 12.0001C6.39014 14.4412 8.36904 16.4201 10.8101 16.4201Z"
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
            d="M14.5299 3.85986H10.8099C6.31992 3.85986 2.66992 7.50986 2.66992 11.9999C2.66992 16.4899 6.31992 20.1399 10.8099 20.1399H14.5299C19.0199 20.1399 22.6699 16.4899 22.6699 11.9999C22.6699 7.50986 19.0199 3.85986 14.5299 3.85986ZM10.8099 16.4199C8.36992 16.4199 6.38992 14.4399 6.38992 11.9999C6.38992 9.55986 8.36992 7.57986 10.8099 7.57986C13.2499 7.57986 15.2299 9.55986 15.2299 11.9999C15.2299 14.4399 13.2499 16.4199 10.8099 16.4199Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconToggleOffCircle as IconComponent).keywords = [
  "toggle",
  "off",
  "circle",
  "on-off switch",
  "toggle switch",
  "lever",
  "cycle",
  "switch",
  "button",
  "switching",
  "rotate",
  "rotation",
  "away",
  "cancelled",
  "forth",
  "inactive",
  "disconnected",
  "unsatisfactory",
  "soured",
  "sour",
  "off-duty",
  "round",
  "rotary",
  "environ",
  "roundabout",
  "circulate",
  "circuit",
  "encircle",
  "surround",
  "dress circle",
];

export default IconToggleOffCircle as IconComponent;
