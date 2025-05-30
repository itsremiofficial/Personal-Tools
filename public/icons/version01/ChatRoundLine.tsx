import { FC } from "react";

const IconChatRoundLine: FC<IconProps> = ({
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
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 22.0002C17.5228 22.0002 22 17.5231 22 12.0002C22 6.4774 17.5228 2.00024 12 2.00024C6.47715 2.00024 2 6.4774 2 12.0002C2 13.5999 2.37562 15.1119 3.04346 16.4527C3.22094 16.809 3.28001 17.2163 3.17712 17.6009L2.58151 19.8269C2.32295 20.7932 3.20701 21.6773 4.17335 21.4187L6.39939 20.8231C6.78393 20.7202 7.19121 20.7793 7.54753 20.9568C8.88837 21.6246 10.4003 22.0002 12 22.0002Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M8 10.5002H16"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M8 14.0002H13.5"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
        </svg>
      ) : duotone ? (
        <svg
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M12 22.0002C17.5228 22.0002 22 17.5231 22 12.0002C22 6.4774 17.5228 2.00024 12 2.00024C6.47715 2.00024 2 6.4774 2 12.0002C2 13.5999 2.37562 15.1119 3.04346 16.4527C3.22094 16.809 3.28001 17.2163 3.17712 17.6009L2.58151 19.8269C2.32295 20.7932 3.20701 21.6773 4.17335 21.4187L6.39939 20.8231C6.78393 20.7202 7.19121 20.7793 7.54753 20.9568C8.88836 21.6246 10.4003 22.0002 12 22.0002Z"
            fill="currentColor"
          />
          <path
            d="M7.825 12.8502C7.36937 12.8502 7 13.2196 7 13.6752C7 14.1309 7.36937 14.5002 7.825 14.5002H13.875C14.3306 14.5002 14.7 14.1309 14.7 13.6752C14.7 13.2196 14.3306 12.8502 13.875 12.8502H7.825Z"
            fill="currentColor"
          />
          <path
            d="M7.825 9.00024C7.36937 9.00024 7 9.36961 7 9.82524C7 10.2809 7.36937 10.6502 7.825 10.6502H16.625C17.0806 10.6502 17.45 10.2809 17.45 9.82524C17.45 9.36961 17.0806 9.00024 16.625 9.00024H7.825Z"
            fill="currentColor"
          />
        </svg>
      ) : (
        <svg
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 22.0002C17.5228 22.0002 22 17.5231 22 12.0002C22 6.4774 17.5228 2.00024 12 2.00024C6.47715 2.00024 2 6.4774 2 12.0002C2 13.5999 2.37562 15.1119 3.04346 16.4527C3.22094 16.809 3.28001 17.2163 3.17712 17.6009L2.58151 19.8269C2.32295 20.7932 3.20701 21.6773 4.17335 21.4187L6.39939 20.8231C6.78393 20.7202 7.19121 20.7793 7.54753 20.9568C8.88837 21.6246 10.4003 22.0002 12 22.0002ZM8 13.2502C7.58579 13.2502 7.25 13.586 7.25 14.0002C7.25 14.4145 7.58579 14.7502 8 14.7502H13.5C13.9142 14.7502 14.25 14.4145 14.25 14.0002C14.25 13.586 13.9142 13.2502 13.5 13.2502H8ZM7.25 10.5002C7.25 10.086 7.58579 9.75024 8 9.75024H16C16.4142 9.75024 16.75 10.086 16.75 10.5002C16.75 10.9145 16.4142 11.2502 16 11.2502H8C7.58579 11.2502 7.25 10.9145 7.25 10.5002Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconChatRoundLine as IconComponent).keywords = [
  "chat",
  "round",
  "line",
  "confabulate",
  "confab",
  "confabulation",
  "chitchat",
  "natter",
  "gossip",
  "visit",
  "chatter",
  "claver",
  "orbicular",
  "rotund",
  "orbiculate",
  "discoidal",
  "disklike",
  "discoid",
  "ringlike",
  "globular",
  "globose",
  "outline",
  "dividing line",
  "agate line",
  "delineate",
  "telephone line",
  "draw",
  "transmission line",
  "credit line",
  "phone line",
];

export default IconChatRoundLine as IconComponent;
