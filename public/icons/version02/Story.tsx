import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconStory: FC<IconProps> = ({
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
            d="M17.0899 7.95C19.5299 10.39 19.5299 14.35 17.0899 16.79C14.6499 19.23 10.6899 19.23 8.24992 16.79C5.80992 14.35 5.80992 10.39 8.24992 7.95C10.6899 5.51 14.6499 5.51 17.0899 7.95Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.91992 21.64C6.91992 20.84 5.16991 19.39 4.00991 17.38C2.86991 15.41 2.48991 13.22 2.75991 11.13"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6.51953 4.47998C8.21953 3.14998 10.3495 2.35999 12.6695 2.35999C14.9395 2.35999 17.0295 3.12997 18.7095 4.40997"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.4199 21.64C18.4199 20.84 20.1699 19.39 21.3299 17.38C22.4699 15.41 22.8499 13.22 22.5799 11.13"
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
            d="M17.0899 7.95C19.5299 10.39 19.5299 14.35 17.0899 16.79C14.6499 19.23 10.6899 19.23 8.24992 16.79C5.80992 14.35 5.80992 10.39 8.24992 7.95C10.6899 5.51 14.6499 5.51 17.0899 7.95Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.91996 22.39C8.82996 22.39 8.72996 22.37 8.63996 22.34C6.38996 21.44 4.56995 19.85 3.34995 17.75C2.16995 15.7 1.69995 13.38 2.00995 11.02C2.05995 10.61 2.44995 10.32 2.84995 10.37C3.25995 10.42 3.54994 10.8 3.49994 11.21C3.23994 13.23 3.63997 15.23 4.64997 16.99C5.68997 18.79 7.25995 20.16 9.18995 20.93C9.56995 21.09 9.75996 21.52 9.60996 21.91C9.49996 22.21 9.20996 22.39 8.91996 22.39Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6.51953 5.22998C6.29953 5.22998 6.07954 5.13 5.92954 4.94C5.66954 4.61 5.72954 4.14001 6.05954 3.89001C7.96954 2.40001 10.2495 1.60999 12.6695 1.60999C15.0295 1.60999 17.2795 2.37 19.1695 3.81C19.4995 4.06 19.5595 4.52999 19.3095 4.85999C19.0595 5.18999 18.5895 5.25 18.2595 5C16.6395 3.76 14.7095 3.10999 12.6695 3.10999C10.5895 3.10999 8.61952 3.79001 6.97952 5.07001C6.83952 5.18001 6.67953 5.22998 6.51953 5.22998Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.4196 22.39C16.1196 22.39 15.8396 22.21 15.7196 21.92C15.5696 21.54 15.7496 21.1 16.1396 20.94C18.0696 20.16 19.6397 18.8 20.6797 17C21.6997 15.24 22.0996 13.24 21.8296 11.22C21.7796 10.81 22.0696 10.43 22.4796 10.38C22.8796 10.33 23.2696 10.62 23.3196 11.03C23.6196 13.38 23.1596 15.71 21.9796 17.76C20.7696 19.86 18.9396 21.44 16.6896 22.35C16.6096 22.37 16.5196 22.39 16.4196 22.39Z"
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
            d="M17.0899 7.95C19.5299 10.39 19.5299 14.35 17.0899 16.79C14.6499 19.23 10.6899 19.23 8.24992 16.79C5.80992 14.35 5.80992 10.39 8.24992 7.95C10.6899 5.51 14.6499 5.51 17.0899 7.95Z"
            fill="currentColor"
          />
          <path
            d="M8.91995 22.39C8.82995 22.39 8.72995 22.37 8.63995 22.34C6.38995 21.44 4.56995 19.85 3.34995 17.75C2.16995 15.7 1.69995 13.38 2.00995 11.02C2.05995 10.61 2.44995 10.32 2.84995 10.37C3.25995 10.42 3.54995 10.8 3.49995 11.21C3.23995 13.24 3.63995 15.24 4.64995 17C5.68995 18.8 7.25995 20.17 9.18995 20.94C9.56995 21.1 9.75995 21.53 9.60995 21.92C9.49995 22.21 9.20995 22.39 8.91995 22.39Z"
            fill="currentColor"
          />
          <path
            d="M6.51954 5.23C6.29954 5.23 6.07954 5.13 5.92954 4.94C5.66954 4.62 5.72954 4.15 6.05954 3.89C7.95954 2.4 10.2495 1.61 12.6695 1.61C15.0295 1.61 17.2795 2.37 19.1695 3.81C19.4995 4.06 19.5595 4.53 19.3095 4.86C19.0595 5.19 18.5895 5.25 18.2595 5C16.6295 3.76 14.6995 3.11 12.6695 3.11C10.5895 3.11 8.61954 3.79 6.97954 5.07C6.83954 5.18 6.67954 5.23 6.51954 5.23Z"
            fill="currentColor"
          />
          <path
            d="M16.4196 22.39C16.1196 22.39 15.8396 22.21 15.7196 21.92C15.5696 21.54 15.7496 21.1 16.1396 20.94C18.0696 20.16 19.6396 18.8 20.6796 17C21.6996 15.24 22.0996 13.24 21.8296 11.22C21.7796 10.81 22.0696 10.43 22.4796 10.38C22.8796 10.33 23.2696 10.62 23.3196 11.03C23.6196 13.38 23.1596 15.71 21.9796 17.76C20.7696 19.86 18.9396 21.44 16.6896 22.35C16.6096 22.37 16.5196 22.39 16.4196 22.39Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconStory as IconComponentType).keywords = [
  "story",
  "narrative",
  "narration",
  "recital",
  "write up",
  "history",
  "report",
  "chronicle",
  "tale",
  "news report",
];

export default IconStory as IconComponentType;
