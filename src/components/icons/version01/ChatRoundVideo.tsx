import { FC } from "react";

const IconChatRoundVideo: FC<IconProps> = ({
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
            d="M16 12.0002C16 11.1558 15.0732 10.5862 13.2195 9.44719C11.3406 8.29258 10.4011 7.71528 9.70056 8.13916C9 8.56304 9 9.70877 9 12.0002C9 14.2917 9 15.4375 9.70056 15.8613C10.4011 16.2852 11.3406 15.7079 13.2195 14.5533C15.0732 13.4142 16 12.8447 16 12.0002Z"
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
            d="M12 22.0002C17.5228 22.0002 22 17.5231 22 12.0002C22 6.4774 17.5228 2.00024 12 2.00024C6.47715 2.00024 2 6.4774 2 12.0002C2 13.5999 2.37562 15.1119 3.04346 16.4527C3.22094 16.809 3.28001 17.2163 3.17712 17.6009L2.58151 19.8269C2.32295 20.7932 3.20701 21.6773 4.17335 21.4187L6.39939 20.8231C6.78393 20.7202 7.19121 20.7793 7.54753 20.9568C8.88837 21.6246 10.4003 22.0002 12 22.0002Z"
            fill="currentColor"
          />
          <path
            d="M13.2196 9.44719C15.0732 10.5862 16 11.1558 16 12.0002C16 12.8447 15.0732 13.4142 13.2196 14.5533C11.3406 15.7079 10.4011 16.2852 9.70056 15.8613C9 15.4375 9 14.2917 9 12.0002C9 9.70877 9 8.56304 9.70056 8.13916C10.4011 7.71528 11.3406 8.29258 13.2196 9.44719Z"
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
            d="M22 12.0002C22 17.5231 17.5228 22.0002 12 22.0002C10.4003 22.0002 8.88837 21.6246 7.54753 20.9568C7.19121 20.7793 6.78393 20.7202 6.39939 20.8231L4.17335 21.4187C3.20701 21.6773 2.32295 20.7932 2.58151 19.8269L3.17712 17.6009C3.28001 17.2163 3.22094 16.809 3.04346 16.4527C2.37562 15.1119 2 13.5999 2 12.0002C2 6.4774 6.47715 2.00024 12 2.00024C17.5228 2.00024 22 6.4774 22 12.0002ZM16 12.0002C16 11.1558 15.0732 10.5862 13.2196 9.44719C11.3406 8.29258 10.4011 7.71528 9.70056 8.13916C9 8.56304 9 9.70877 9 12.0002C9 14.2917 9 15.4375 9.70056 15.8613C10.4011 16.2852 11.3406 15.7079 13.2196 14.5533C15.0732 13.4142 16 12.8447 16 12.0002Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconChatRoundVideo as IconComponent).keywords = [
  "chat",
  "round",
  "video",
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
  "tv",
  "television",
  "picture",
  "telecasting",
  "televised",
  "videotaping",
  "videotaped",
  "taping",
  "videotape",
];

export default IconChatRoundVideo as IconComponent;
