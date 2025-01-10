import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconChatRoundCheck: FC<IconProps> = ({
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
            d="M9 12.0802L11 14.0002L15 10.0002"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
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
            d="M12 22.0002C17.5228 22.0002 22 17.5231 22 12.0002C22 6.4774 17.5228 2.00024 12 2.00024C6.47715 2.00024 2 6.4774 2 12.0002C2 13.5999 2.37562 15.1119 3.04346 16.4527C3.22094 16.809 3.28001 17.2163 3.17712 17.6009L2.58151 19.8269C2.32295 20.7932 3.20701 21.6773 4.17335 21.4187L6.39939 20.8231C6.78393 20.7202 7.19121 20.7793 7.54753 20.9568C8.88837 21.6246 10.4003 22.0002 12 22.0002Z"
            fill="currentColor"
          />
          <path
            d="M15.5303 9.46991C15.8232 9.76281 15.8232 10.2377 15.5303 10.5306L11.5303 14.5306C11.2417 14.8193 10.7751 14.824 10.4806 14.5413L8.4806 12.6213C8.18179 12.3344 8.1721 11.8597 8.45896 11.5608C8.74582 11.262 9.22059 11.2523 9.5194 11.5392L10.9893 12.9503L14.4697 9.46991C14.7626 9.17702 15.2374 9.17702 15.5303 9.46991Z"
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
            d="M22 12.0002C22 17.5231 17.5228 22.0002 12 22.0002C10.4003 22.0002 8.88837 21.6246 7.54753 20.9568C7.19121 20.7793 6.78393 20.7202 6.39939 20.8231L4.17335 21.4187C3.20701 21.6773 2.32295 20.7932 2.58151 19.8269L3.17712 17.6009C3.28001 17.2163 3.22094 16.809 3.04346 16.4527C2.37562 15.1119 2 13.5999 2 12.0002C2 6.4774 6.47715 2.00024 12 2.00024C17.5228 2.00024 22 6.4774 22 12.0002ZM15.5303 9.46991C15.8232 9.76281 15.8232 10.2377 15.5303 10.5306L11.5303 14.5306C11.2417 14.8193 10.7751 14.824 10.4806 14.5413L8.4806 12.6213C8.18179 12.3344 8.1721 11.8597 8.45896 11.5608C8.74582 11.262 9.22059 11.2523 9.5194 11.5392L10.9893 12.9503L14.4697 9.46991C14.7626 9.17702 15.2374 9.17702 15.5303 9.46991Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconChatRoundCheck as IconComponentType).keywords = [
  "chat",
  "round",
  "check",
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
  "match",
  "hitch",
  "check out",
  "curb",
  "check into",
  "checkout",
  "turn back",
  "arrest",
  "hold",
];

export default IconChatRoundCheck as IconComponentType;
