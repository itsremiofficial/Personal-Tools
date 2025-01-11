import { FC } from "react";

const IconTimerStart: FC<IconProps> = ({
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
            d="M12.6699 8V13"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.6699 22C7.83992 22 3.91992 18.08 3.91992 13.25C3.91992 8.42 7.83992 4.5 12.6699 4.5C17.4999 4.5 21.4199 8.42 21.4199 13.25"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.66992 2H15.6699"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.5698 18.5V17.34C15.5698 15.91 16.5898 15.32 17.8298 16.04L18.8298 16.62L19.8298 17.2C21.0698 17.92 21.0698 19.09 19.8298 19.81L18.8298 20.39L17.8298 20.97C16.5898 21.69 15.5698 21.1 15.5698 19.67V18.5Z"
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
            d="M12.6699 13.75C12.2599 13.75 11.9199 13.41 11.9199 13V8C11.9199 7.59 12.2599 7.25 12.6699 7.25C13.0799 7.25 13.4199 7.59 13.4199 8V13C13.4199 13.41 13.0799 13.75 12.6699 13.75Z"
            fill="currentColor"
          />
          <path
            d="M15.5601 3.45H9.78006C9.38006 3.45 9.06006 3.13 9.06006 2.73C9.06006 2.33 9.38006 2 9.78006 2H15.5601C15.9601 2 16.2801 2.32 16.2801 2.72C16.2801 3.12 15.9601 3.45 15.5601 3.45Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.67 19.9699V17.0299C15.67 15.7599 16.43 14.9999 17.7 14.9999H20.64C20.83 14.9999 21 15.0199 21.17 15.0599C21.28 14.4999 21.34 13.9199 21.34 13.3299C21.34 8.54991 17.45 4.65991 12.67 4.65991C7.89 4.65991 4 8.54991 4 13.3299C4 18.1099 7.89 21.9999 12.67 21.9999C13.88 21.9999 15.03 21.7499 16.08 21.2999C15.82 20.9599 15.67 20.5199 15.67 19.9699Z"
            fill="currentColor"
          />
          <path
            d="M20.6399 15H17.6999C16.4299 15 15.6699 15.76 15.6699 17.03V19.97C15.6699 21.24 16.4299 22 17.6999 22H20.6399C21.9099 22 22.6699 21.24 22.6699 19.97V17.03C22.6699 15.76 21.9099 15 20.6399 15ZM20.3599 19.46L19.1799 20.14C18.9399 20.28 18.6999 20.35 18.4799 20.35C18.3099 20.35 18.1599 20.31 18.0199 20.23C17.6999 20.04 17.5199 19.67 17.5199 19.18V17.82C17.5199 17.33 17.6999 16.96 18.0199 16.77C18.3399 16.58 18.7499 16.62 19.1799 16.86L20.3599 17.54C20.7799 17.79 21.0199 18.13 21.0199 18.5C21.0199 18.87 20.7899 19.21 20.3599 19.46Z"
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
            d="M15.5601 3.45H9.78006C9.38006 3.45 9.06006 3.13 9.06006 2.73C9.06006 2.33 9.38006 2 9.78006 2H15.5601C15.9601 2 16.2801 2.32 16.2801 2.72C16.2801 3.12 15.9601 3.45 15.5601 3.45Z"
            fill="currentColor"
          />
          <path
            d="M20.6399 15H17.6999C16.4299 15 15.6699 15.76 15.6699 17.03V19.97C15.6699 21.24 16.4299 22 17.6999 22H20.6399C21.9099 22 22.6699 21.24 22.6699 19.97V17.03C22.6699 15.76 21.9099 15 20.6399 15ZM20.3599 19.46L19.1799 20.14C18.9399 20.28 18.6999 20.35 18.4799 20.35C18.3099 20.35 18.1599 20.31 18.0199 20.23C17.6999 20.04 17.5199 19.67 17.5199 19.18V17.82C17.5199 17.33 17.6999 16.96 18.0199 16.77C18.3399 16.58 18.7499 16.62 19.1799 16.86L20.3599 17.54C20.7799 17.79 21.0199 18.13 21.0199 18.5C21.0199 18.87 20.7899 19.21 20.3599 19.46Z"
            fill="currentColor"
          />
          <path
            d="M14.67 19.9699V17.0299C14.67 15.2199 15.89 13.9999 17.7 13.9999H20.64C20.87 13.9999 21.09 14.0199 21.3 14.0599C21.32 13.8199 21.34 13.5799 21.34 13.3299C21.34 8.5399 17.45 4.6499 12.67 4.6499C7.89 4.6499 4 8.5399 4 13.3299C4 18.1099 7.89 21.9999 12.67 21.9999C13.52 21.9999 14.33 21.8599 15.11 21.6399C14.83 21.1699 14.67 20.6099 14.67 19.9699ZM13.42 12.9999C13.42 13.4099 13.08 13.7499 12.67 13.7499C12.26 13.7499 11.92 13.4099 11.92 12.9999V7.9999C11.92 7.5899 12.26 7.2499 12.67 7.2499C13.08 7.2499 13.42 7.5899 13.42 7.9999V12.9999Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconTimerStart as IconComponent).keywords = [
  "timer",
  "start",
  "clocking",
  "timekeeping",
  "timekeeper",
  "clock",
  "stopwatch",
  "scheduler",
  "timing",
  "developer",
  "bomb",
  "begin",
  "commence",
  "beginning",
  "outset",
  "commencement",
  "set about",
  "head start",
  "get",
  "originate",
];

export default IconTimerStart as IconComponent;