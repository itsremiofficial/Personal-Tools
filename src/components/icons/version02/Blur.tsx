import { FC } from "react";

const IconBlur: FC<IconProps> = ({
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
            d="M13.2802 2.21C12.9202 1.93 12.4202 1.93 12.0602 2.21C10.1602 3.66 4.5502 8.39 4.5802 13.9C4.5802 18.36 8.21024 22 12.6802 22C17.1502 22 20.7802 18.37 20.7802 13.91C20.7902 8.48 15.1702 3.67 13.2802 2.21Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M12.6699 2V22"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.6699 18.96L20.3699 15.22"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.6699 13.9599L20.0399 10.3799"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.6699 8.96001L17.7 6.51001"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
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
            d="M13.2802 2.21C12.9202 1.93 12.4202 1.93 12.0602 2.21C10.1602 3.66 4.5502 8.39 4.5802 13.9C4.5802 18.36 8.21024 22 12.6802 22C17.1502 22 20.7802 18.37 20.7802 13.91C20.7902 8.48 15.1702 3.67 13.2802 2.21Z"
            fill="currentColor"
          />
          <path
            d="M20.7599 14.2C20.7399 14.81 20.6499 15.41 20.4899 15.99L13.4199 19.43V21.97C13.1699 21.99 12.9199 22 12.6699 22C12.4199 22 12.1699 21.99 11.9199 21.97V2.31C11.9699 2.27 12.0099 2.24 12.0499 2.21C12.4199 1.93 12.9199 1.93 13.2799 2.21C13.3199 2.24 13.3699 2.28 13.4199 2.32V7.76L17.2 5.92C17.53 6.3 17.8399 6.69 18.1499 7.1C18.1099 7.14 18.0699 7.17 18.0199 7.19L13.4199 9.43V12.76L19.7099 9.7C19.7199 9.7 19.7199 9.69 19.7299 9.69C19.9499 10.14 20.1399 10.6 20.2899 11.08L13.4199 14.43V17.76L20.0399 14.54L20.7599 14.2Z"
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
            d="M14.1399 7.41012L16.5999 6.20012C16.8999 6.05012 16.9799 5.66012 16.7499 5.42012C15.8599 4.44012 14.9599 3.62012 14.2399 3.00012C13.9099 2.72012 13.4199 2.95012 13.4199 3.38012V6.96012C13.4199 7.33012 13.8099 7.57012 14.1399 7.41012Z"
            fill="currentColor"
          />
          <path
            d="M13.4199 19.7401V21.3901C13.4199 21.6901 13.6899 21.9401 13.9899 21.8901C16.7199 21.4401 18.9999 19.6101 20.0799 17.1501C20.2699 16.7301 19.8099 16.3101 19.3899 16.5101L13.6999 19.3001C13.5299 19.3801 13.4199 19.5501 13.4199 19.7401Z"
            fill="currentColor"
          />
          <path
            d="M11.9204 3.36012C11.9204 2.93012 11.4304 2.70012 11.1004 2.97012C8.74038 4.95012 4.55038 9.12012 4.57038 13.9001C4.57038 17.9201 7.51038 21.2501 11.3504 21.8901C11.6504 21.9401 11.9204 21.6901 11.9204 21.3901V3.36012Z"
            fill="currentColor"
          />
          <path
            d="M14.1102 12.4699L19.4002 10.2499C19.6702 10.1299 19.8002 9.81995 19.6702 9.55995C19.3002 8.82995 18.8702 8.11995 18.4002 7.45995C18.2602 7.25995 18.0002 7.19995 17.7802 7.29995L13.6902 9.28995C13.5202 9.36995 13.4102 9.54994 13.4102 9.73994V12.0099C13.4202 12.3599 13.7802 12.6099 14.1102 12.4699Z"
            fill="currentColor"
          />
          <path
            d="M20.4999 14.31C20.6599 14.23 20.7599 14.08 20.7599 13.91C20.7599 13.27 20.6799 12.64 20.5399 12.02C20.4699 11.72 20.1399 11.56 19.8599 11.68L13.7199 14.3C13.5399 14.38 13.4199 14.56 13.4199 14.76V16.96C13.4199 17.33 13.8099 17.57 14.1399 17.41L20.0399 14.54L20.4999 14.31Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBlur as IconComponent).keywords = [
  "blur",
  "blear",
  "smutch",
  "smudge",
  "glaze over",
  "smear",
  "confuse",
  "obscure",
  "slur",
  "fuzz",
];

export default IconBlur as IconComponent;
