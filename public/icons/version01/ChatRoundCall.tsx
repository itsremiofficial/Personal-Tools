import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconChatRoundCall: FC<IconProps> = ({
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
            d="M12 16.0002V8.00024"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M8 14.0002V10.0002"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M16 14.0002V10.0002"
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
            d="M12 22.0002C17.5228 22.0002 22 17.5231 22 12.0002C22 6.4774 17.5228 2.00024 12 2.00024C6.47715 2.00024 2 6.4774 2 12.0002C2 13.5999 2.37562 15.1119 3.04346 16.4527C3.22094 16.809 3.28001 17.2163 3.17712 17.6009L2.58151 19.8269C2.32295 20.7932 3.20701 21.6773 4.17335 21.4187L6.39938 20.8231C6.78393 20.7202 7.19121 20.7793 7.54753 20.9568C8.88837 21.6246 10.4003 22.0002 12 22.0002Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.9999 6.77563C11.5443 6.77563 11.1749 7.145 11.1749 7.60063V16.4006C11.1749 16.8563 11.5443 17.2256 11.9999 17.2256C12.4555 17.2256 12.8249 16.8563 12.8249 16.4006V7.60063C12.8249 7.145 12.4555 6.77563 11.9999 6.77563Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.5999 8.97563C7.14427 8.97563 6.7749 9.345 6.7749 9.80063V14.2006C6.7749 14.6563 7.14427 15.0256 7.5999 15.0256C8.05554 15.0256 8.4249 14.6563 8.4249 14.2006V9.80063C8.4249 9.345 8.05554 8.97563 7.5999 8.97563Z"
            fill="currentColor"
          />
          <path
            d="M15.5749 9.80063C15.5749 9.345 15.9443 8.97563 16.3999 8.97563C16.8555 8.97563 17.2249 9.345 17.2249 9.80063V14.2006C17.2249 14.6563 16.8555 15.0256 16.3999 15.0256C15.9443 15.0256 15.5749 14.6563 15.5749 14.2006V9.80063Z"
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
            d="M22 12.0002C22 17.5231 17.5228 22.0002 12 22.0002C10.4003 22.0002 8.88837 21.6246 7.54753 20.9568C7.19121 20.7793 6.78393 20.7202 6.39939 20.8231L4.17335 21.4187C3.20701 21.6773 2.32295 20.7932 2.58151 19.8269L3.17712 17.6009C3.28001 17.2163 3.22094 16.809 3.04346 16.4527C2.37562 15.1119 2 13.5999 2 12.0002C2 6.4774 6.47715 2.00024 12 2.00024C17.5228 2.00024 22 6.4774 22 12.0002ZM12 7.25024C12.4142 7.25024 12.75 7.58603 12.75 8.00024V16.0002C12.75 16.4145 12.4142 16.7502 12 16.7502C11.5858 16.7502 11.25 16.4145 11.25 16.0002V8.00024C11.25 7.58603 11.5858 7.25024 12 7.25024ZM8.75 10.0002C8.75 9.58603 8.41421 9.25024 8 9.25024C7.58579 9.25024 7.25 9.58603 7.25 10.0002V14.0002C7.25 14.4145 7.58579 14.7502 8 14.7502C8.41421 14.7502 8.75 14.4145 8.75 14.0002V10.0002ZM16 9.25024C16.4142 9.25024 16.75 9.58603 16.75 10.0002V14.0002C16.75 14.4145 16.4142 14.7502 16 14.7502C15.5858 14.7502 15.25 14.4145 15.25 14.0002V10.0002C15.25 9.58603 15.5858 9.25024 16 9.25024Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconChatRoundCall as IconComponentType).keywords = [
  "chat",
  "round",
  "call",
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
  "phone call",
  "telephone call",
  "call in",
  "telephone",
  "phone",
  "call up",
  "send for",
  "call option",
  "margin call",
];

export default IconChatRoundCall as IconComponentType;
