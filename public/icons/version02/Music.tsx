import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconMusic: FC<IconProps> = ({
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
            d="M6.95008 22C8.67321 22 10.0701 20.6031 10.0701 18.88C10.0701 17.1569 8.67321 15.76 6.95008 15.76C5.22695 15.76 3.83008 17.1569 3.83008 18.88C3.83008 20.6031 5.22695 22 6.95008 22Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.3895 19.92C20.1127 19.92 21.5095 18.5231 21.5095 16.8C21.5095 15.0769 20.1127 13.68 18.3895 13.68C16.6664 13.68 15.2695 15.0769 15.2695 16.8C15.2695 18.5231 16.6664 19.92 18.3895 19.92Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M21.5103 16.8003V4.60034C21.5103 2.00034 19.8803 1.64034 18.2303 2.09034L11.9903 3.79034C10.8503 4.10034 10.0703 5.00034 10.0703 6.30034V8.47034V9.93034V18.8703"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.0703 9.52039L21.5103 6.40039"
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
            d="M10.9603 10.34V18.41C10.9603 20.39 9.34027 22 7.37027 22C5.39027 22 3.78027 20.39 3.78027 18.41C3.78027 16.44 5.39027 14.83 7.37027 14.83C8.20027 14.83 8.95027 15.12 9.56027 15.59V10.74L10.9603 10.34Z"
            fill="currentColor"
          />
          <path
            d="M21.5599 7.32001V16.48C21.5599 18.46 19.9499 20.07 17.9699 20.07C15.9999 20.07 14.3799 18.46 14.3799 16.48C14.3799 14.51 15.9999 12.9 17.9699 12.9C18.8099 12.9 19.5599 13.19 20.1699 13.67V7.72001L21.5599 7.32001Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21.5596 5.18001V7.32001L9.55957 10.74V6.75001C9.55957 5.28001 10.4496 4.14001 11.8596 3.76001L17.6396 2.18001C18.8096 1.86001 19.7996 1.97001 20.4996 2.51001C21.2096 3.04001 21.5596 3.94001 21.5596 5.18001Z"
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
            d="M21.5603 5.18001V16.48C21.5603 18.46 19.9503 20.07 17.9703 20.07C16.0003 20.07 14.3803 18.46 14.3803 16.48C14.3803 14.51 16.0003 12.9 17.9703 12.9C18.8103 12.9 19.5603 13.19 20.1703 13.67V7.72001L10.9603 10.34V18.41C10.9603 20.39 9.34027 22 7.37027 22C5.39027 22 3.78027 20.39 3.78027 18.41C3.78027 16.44 5.39027 14.83 7.37027 14.83C8.20027 14.83 8.95027 15.12 9.56027 15.59V6.75001C9.56027 5.28001 10.4503 4.14001 11.8603 3.76001L17.6403 2.18001C18.8103 1.86001 19.8003 1.97001 20.5003 2.51001C21.2103 3.04001 21.5603 3.94001 21.5603 5.18001Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMusic as IconComponentType).keywords = [
  "music",
  "sheet music",
  "euphony",
  "medicine",
  "melody",
  "symphony",
  "orchestra",
  "musician",
  "song",
  "singing",
];

export default IconMusic as IconComponentType;
