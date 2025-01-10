import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconChatRoundUnread: FC<IconProps> = ({
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
          <circle
            cx="3"
            cy="3"
            r="3"
            transform="matrix(-1 0 0 1 22 2.00024)"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M14 2.20028C13.3538 2.0691 12.6849 2.00024 12 2.00024C6.47715 2.00024 2 6.4774 2 12.0002C2 13.5999 2.37562 15.1119 3.04346 16.4527C3.22094 16.809 3.28001 17.2163 3.17712 17.6009L2.58151 19.8269C2.32295 20.7932 3.20701 21.6773 4.17335 21.4187L6.39939 20.8231C6.78393 20.7202 7.19121 20.7793 7.54753 20.9568C8.88837 21.6246 10.4003 22.0002 12 22.0002C17.5228 22.0002 22 17.5231 22 12.0002C22 11.3153 21.9311 10.6465 21.8 10.0002"
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
            d="M22 5.00024C22 6.6571 20.6569 8.00024 19 8.00024C17.3431 8.00024 16 6.6571 16 5.00024C16 3.34339 17.3431 2.00024 19 2.00024C20.6569 2.00024 22 3.34339 22 5.00024Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M15.2347 2.535C14.2201 2.18835 13.132 2.00024 12 2.00024C6.47715 2.00024 2 6.4774 2 12.0002C2 13.5999 2.37562 15.1119 3.04346 16.4527C3.22094 16.809 3.28001 17.2163 3.17712 17.6009L2.58151 19.8269C2.32295 20.7932 3.20701 21.6773 4.17335 21.4187L6.39938 20.8231C6.78393 20.7202 7.19121 20.7793 7.54753 20.9568C8.88836 21.6246 10.4003 22.0002 12 22.0002C17.5228 22.0002 22 17.5231 22 12.0002C22 10.8682 21.8119 9.78012 21.4652 8.7655C20.7572 9.23005 19.9101 9.50024 19 9.50024C16.5147 9.50024 14.5 7.48553 14.5 5.00024C14.5 4.09011 14.7702 3.24308 15.2347 2.535Z"
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
            d="M12 22.0002C17.5228 22.0002 22 17.5231 22 12.0002C22 11.0943 21.8795 10.2164 21.6537 9.38185C21.5684 9.06658 21.1987 8.94108 20.9028 9.07934C20.3248 9.3494 19.68 9.50024 19 9.50024C16.5147 9.50024 14.5 7.48553 14.5 5.00024C14.5 4.32021 14.6508 3.6754 14.9209 3.09746C15.0592 2.80156 14.9337 2.43185 14.6184 2.34654C13.7838 2.12073 12.906 2.00024 12 2.00024C6.47715 2.00024 2 6.4774 2 12.0002C2 13.5999 2.37562 15.1119 3.04346 16.4527C3.22094 16.809 3.28001 17.2163 3.17712 17.6009L2.58151 19.8269C2.32295 20.7932 3.20701 21.6773 4.17335 21.4187L6.39939 20.8231C6.78393 20.7202 7.19121 20.7793 7.54753 20.9568C8.88837 21.6246 10.4003 22.0002 12 22.0002Z"
            fill="currentColor"
          />
          <circle cx="19" cy="5.00024" r="3" fill="currentColor" />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconChatRoundUnread as IconComponentType).keywords = [
  "chat",
  "round",
  "unread",
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
  "uninformed",
  "unused",
  "unutilized",
  "unspent",
  "unencumbered",
  "unwatched",
  "unplayed",
  "unsent",
  "unreviewed",
];

export default IconChatRoundUnread as IconComponentType;
