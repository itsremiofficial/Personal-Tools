import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconPlay: FC<IconProps> = ({
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
            d="M4.66992 12V8.43999C4.66992 4.01999 7.79992 2.20999 11.6299 4.41999L14.7199 6.19999L17.8099 7.97999C21.6399 10.19 21.6399 13.81 17.8099 16.02L14.7199 17.8L11.6299 19.58C7.79992 21.79 4.66992 19.98 4.66992 15.56V12Z"
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
            d="M19.3699 8.98001L4.80992 17.71C4.71992 17.38 4.66992 17.03 4.66992 16.67V7.33001C4.66992 4.25001 7.99992 2.33001 10.6699 3.87001L14.7099 6.20001L18.7599 8.54001C18.9799 8.67001 19.1899 8.81001 19.3699 8.98001Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M18.7601 15.46L14.7101 17.8L10.6701 20.13C8.76014 21.23 6.51014 20.57 5.39014 18.96L5.81014 18.71L20.2501 10.05C21.2501 11.85 20.7601 14.31 18.7601 15.46Z"
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
            d="M18.1599 9.60001L6.26992 16.77C5.56992 17.19 4.66992 16.69 4.66992 15.87V7.87001C4.66992 4.38001 8.43992 2.20001 11.4699 3.94001L16.0599 6.58001L18.1499 7.78001C18.8399 8.19001 18.8499 9.19001 18.1599 9.60001Z"
            fill="currentColor"
          />
          <path
            d="M18.7597 15.46L14.7097 17.8L10.6697 20.13C9.21973 20.96 7.57973 20.79 6.38973 19.95C5.80973 19.55 5.87973 18.66 6.48973 18.3L19.1997 10.68C19.7997 10.32 20.5897 10.66 20.6997 11.35C20.9497 12.9 20.3097 14.57 18.7597 15.46Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconPlay as IconComponentType).keywords = [
  "play",
  "frolic",
  "fun",
  "gambol",
  "caper",
  "romp",
  "toy",
  "make-believe",
  "pretend",
  "dally",
];

export default IconPlay as IconComponentType;
