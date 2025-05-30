import { FC } from "react";

const IconApple: FC<IconProps> = ({
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.26 19.36C19.81 18.52 20.01 18.1 20.43 17.16C17.35 15.99 16.85 11.6 19.9 9.92001C18.97 8.75001 17.66 8.07999 16.43 8.07999C15.54 8.07999 14.93 8.30999 14.38 8.51999C13.92 8.69999 13.49 8.85999 12.98 8.85999C12.42 8.85999 11.93 8.68 11.41 8.5C10.84 8.3 10.25 8.07999 9.51004 8.07999C8.12004 8.07999 6.65005 8.93 5.71005 10.37C4.40005 12.41 4.62005 16.24 6.75005 19.51C7.51005 20.68 8.53005 21.99 9.86005 22C10.41 22.01 10.78 21.84 11.18 21.66C11.64 21.46 12.13 21.23 12.99 21.23C13.85 21.22 14.34 21.45 14.79 21.66C15.18 21.84 15.54 22 16.08 22C17.42 21.99 18.5 20.53 19.26 19.36Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.6798 2.07001C16.8398 3.17001 16.3898 4.25999 15.7998 5.01999C15.1698 5.83999 14.0698 6.48 13.0098 6.44C12.8198 5.38 13.3098 4.29 13.9098 3.56C14.5798 2.76 15.7098 2.14001 16.6798 2.07001Z"
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
            opacity={duotone ? "0.58" : "1"}
            d="M24.6699 0H0.669922V24H24.6699V0Z"
            fill="none"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.7698 19.16C20.3598 18.26 20.5798 17.8 21.0298 16.79C17.7098 15.53 17.1798 10.8 20.4598 8.99C19.4598 7.73 18.0498 7 16.7198 7C15.7598 7 15.0998 7.25 14.5098 7.48C14.0098 7.67 13.5598 7.84 12.9998 7.84C12.3998 7.84 11.8698 7.65 11.3098 7.45C10.7098 7.23 10.0698 7 9.26975 7C7.77975 7 6.18976 7.91 5.17976 9.47C3.75976 11.67 4.00975 15.79 6.29975 19.31C7.11975 20.57 8.21976 21.98 9.64976 22C10.2498 22.01 10.6398 21.83 11.0698 21.64C11.5598 21.42 12.0898 21.18 13.0198 21.18C13.9498 21.17 14.4698 21.42 14.9598 21.64C15.3798 21.83 15.7598 22.01 16.3498 22C17.7898 21.98 18.9498 20.42 19.7698 19.16Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.5099 2C16.6699 3.1 16.2199 4.19 15.6299 4.95C14.9999 5.77 13.8999 6.41 12.8399 6.37C12.6499 5.31 13.1399 4.22 13.7399 3.49C14.4099 2.69 15.5399 2.07 16.5099 2Z"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.77 19.16C20.36 18.26 20.58 17.8 21.03 16.79C17.71 15.53 17.18 10.8 20.46 8.98999C19.46 7.72999 18.05 7 16.72 7C15.76 7 15.1 7.25001 14.51 7.48001C14.01 7.67001 13.56 7.84 13 7.84C12.4 7.84 11.87 7.65001 11.31 7.45001C10.7 7.23001 10.06 7 9.25998 7C7.76998 7 6.17999 7.91 5.16999 9.47C3.74999 11.67 3.99999 15.79 6.28999 19.31C7.10999 20.57 8.20999 21.98 9.63999 22C10.24 22.01 10.63 21.83 11.06 21.64C11.55 21.42 12.08 21.18 13.01 21.18C13.94 21.17 14.46 21.42 14.95 21.64C15.37 21.83 15.75 22.01 16.34 22C17.79 21.98 18.95 20.42 19.77 19.16Z"
            fill="none"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.5099 2C16.6699 3.1 16.2199 4.19001 15.6299 4.95001C14.9999 5.77001 13.8999 6.41 12.8399 6.37C12.6499 5.31 13.1399 4.21999 13.7399 3.48999C14.4099 2.68999 15.5399 2.07 16.5099 2Z"
            fill="none"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconApple as IconComponent).keywords = [
  "apple",
  "malus pumila",
  "orchard apple tree",
  "pomme",
  "potato",
  "tator",
  "fruit",
  "vegetable",
  "tree",
  "russet",
];

export default IconApple as IconComponent;
