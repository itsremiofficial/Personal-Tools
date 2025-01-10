import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconQuitFullScreenCircle: FC<IconProps> = ({
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
            d="M9.99756 6.00017C9.98309 7.70673 9.88834 8.64752 9.26793 9.26793C8.64752 9.88834 7.70673 9.98309 6.00017 9.99756"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M9.99756 17.9974C9.98309 16.2908 9.88834 15.35 9.26793 14.7296C8.64752 14.1092 7.70673 14.0145 6.00017 14"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M14 6.00017C14.0145 7.70673 14.1092 8.64752 14.7296 9.26793C15.35 9.88834 16.2908 9.98309 17.9974 9.99756"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M14 17.9974C14.0145 16.2908 14.1092 15.35 14.7296 14.7296C15.35 14.1092 16.2908 14.0145 17.9974 14"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <circle
            opacity={duotone ? "0.5" : "1"}
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth={width}
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
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            fill="currentColor"
          />
          <path
            d="M5.25003 13.994C5.25354 13.5798 5.59216 13.2468 6.00636 13.2503C6.85705 13.2576 7.58296 13.2839 8.18536 13.4019C8.80871 13.524 9.35196 13.7535 9.7981 14.1996C10.2442 14.6458 10.4737 15.189 10.5958 15.8124C10.7138 16.4148 10.7402 17.1407 10.7474 17.9914C10.7509 18.4056 10.4179 18.7442 10.0038 18.7477C9.58955 18.7512 9.25093 18.4183 9.24742 18.0041C9.24016 17.1482 9.21189 16.5504 9.1238 16.1007C9.0398 15.6719 8.91171 15.4346 8.73744 15.2603C8.56316 15.086 8.32582 14.9579 7.89702 14.8739C7.44729 14.7858 6.84952 14.7576 5.99364 14.7503C5.57944 14.7468 5.24652 14.4082 5.25003 13.994Z"
            fill="currentColor"
          />
          <path
            d="M10.0038 5.251C10.4179 5.25452 10.7509 5.59314 10.7474 6.00734C10.7402 6.85802 10.7138 7.58393 10.5958 8.18634C10.4737 8.80968 10.2442 9.35294 9.7981 9.79907C9.35196 10.2452 8.80871 10.4747 8.18536 10.5968C7.58296 10.7148 6.85705 10.7411 6.00636 10.7483C5.59216 10.7519 5.25354 10.4189 5.25003 10.0047C5.24652 9.59053 5.57944 9.25191 5.99364 9.2484C6.84952 9.24114 7.44729 9.21287 7.89702 9.12477C8.32582 9.04078 8.56316 8.91269 8.73744 8.73841C8.91171 8.56414 9.0398 8.32679 9.1238 7.898C9.21189 7.44826 9.24016 6.85049 9.24742 5.99462C9.25093 5.58042 9.58955 5.24749 10.0038 5.251Z"
            fill="currentColor"
          />
          <path
            d="M13.9935 5.251C14.4077 5.24749 14.7463 5.58042 14.7498 5.99462C14.7571 6.85049 14.7853 7.44826 14.8734 7.898C14.9574 8.32679 15.0855 8.56414 15.2598 8.73841C15.4341 8.91269 15.6714 9.04078 16.1002 9.12477C16.5499 9.21287 17.1477 9.24114 18.0036 9.2484C18.4178 9.25191 18.7507 9.59053 18.7472 10.0047C18.7437 10.4189 18.4051 10.7519 17.9909 10.7483C17.1402 10.7411 16.4143 10.7148 15.8119 10.5968C15.1885 10.4747 14.6453 10.2452 14.1991 9.79907C13.753 9.35294 13.5235 8.80968 13.4014 8.18634C13.2834 7.58393 13.2571 6.85802 13.2499 6.00734C13.2463 5.59314 13.5793 5.25452 13.9935 5.251Z"
            fill="currentColor"
          />
          <path
            d="M18.7472 13.994C18.7507 14.4082 18.4178 14.7468 18.0036 14.7503C17.1477 14.7576 16.5499 14.7858 16.1002 14.8739C15.6714 14.9579 15.4341 15.086 15.2598 15.2603C15.0855 15.4346 14.9574 15.6719 14.8734 16.1007C14.7853 16.5504 14.7571 17.1482 14.7498 18.0041C14.7463 18.4183 14.4077 18.7512 13.9935 18.7477C13.5793 18.7442 13.2463 18.4056 13.2499 17.9914C13.2571 17.1407 13.2834 16.4148 13.4014 15.8124C13.5235 15.189 13.753 14.6458 14.1991 14.1996C14.6453 13.7535 15.1885 13.524 15.8119 13.4019C16.4143 13.2839 17.1402 13.2576 17.9909 13.2503C18.4051 13.2468 18.7437 13.5798 18.7472 13.994Z"
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
            d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM10.0038 5.251C10.4179 5.25452 10.7509 5.59314 10.7474 6.00734C10.7402 6.85802 10.7138 7.58393 10.5958 8.18634C10.4737 8.80968 10.2442 9.35294 9.7981 9.79907C9.35196 10.2452 8.80871 10.4747 8.18536 10.5968C7.58296 10.7148 6.85705 10.7411 6.00636 10.7483C5.59216 10.7519 5.25354 10.4189 5.25003 10.0047C5.24652 9.59053 5.57944 9.25191 5.99364 9.2484C6.84952 9.24114 7.44729 9.21287 7.89702 9.12477C8.32582 9.04078 8.56316 8.91269 8.73744 8.73841C8.91171 8.56414 9.0398 8.32679 9.1238 7.898C9.21189 7.44826 9.24016 6.85049 9.24742 5.99462C9.25093 5.58042 9.58955 5.24749 10.0038 5.251ZM13.9935 5.251C14.4077 5.24749 14.7463 5.58042 14.7498 5.99462C14.7571 6.85049 14.7853 7.44826 14.8734 7.898C14.9574 8.32679 15.0855 8.56414 15.2598 8.73841C15.4341 8.91269 15.6714 9.04078 16.1002 9.12477C16.5499 9.21287 17.1477 9.24114 18.0036 9.2484C18.4178 9.25191 18.7507 9.59053 18.7472 10.0047C18.7437 10.4189 18.4051 10.7519 17.9909 10.7483C17.1402 10.7411 16.4143 10.7148 15.8119 10.5968C15.1885 10.4747 14.6453 10.2452 14.1991 9.79907C13.753 9.35294 13.5235 8.80968 13.4014 8.18634C13.2834 7.58393 13.2571 6.85802 13.2499 6.00734C13.2463 5.59314 13.5793 5.25452 13.9935 5.251ZM6.00636 13.2503C5.59216 13.2468 5.25354 13.5798 5.25003 13.994C5.24652 14.4082 5.57944 14.7468 5.99364 14.7503C6.84952 14.7576 7.44729 14.7858 7.89702 14.8739C8.32582 14.9579 8.56316 15.086 8.73744 15.2603C8.91171 15.4346 9.0398 15.6719 9.1238 16.1007C9.21189 16.5504 9.24016 17.1482 9.24742 18.0041C9.25093 18.4183 9.58955 18.7512 10.0038 18.7477C10.4179 18.7442 10.7509 18.4056 10.7474 17.9914C10.7402 17.1407 10.7138 16.4148 10.5958 15.8124C10.4737 15.189 10.2442 14.6458 9.7981 14.1996C9.35196 13.7535 8.80871 13.524 8.18536 13.4019C7.58296 13.2839 6.85705 13.2576 6.00636 13.2503ZM18.7472 13.994C18.7507 14.4082 18.4178 14.7468 18.0036 14.7503C17.1477 14.7576 16.5499 14.7858 16.1002 14.8739C15.6714 14.9579 15.4341 15.086 15.2598 15.2603C15.0855 15.4346 14.9574 15.6719 14.8734 16.1007C14.7853 16.5504 14.7571 17.1482 14.7498 18.0041C14.7463 18.4183 14.4077 18.7512 13.9935 18.7477C13.5793 18.7442 13.2463 18.4056 13.2499 17.9914C13.2571 17.1407 13.2834 16.4148 13.4014 15.8124C13.5235 15.189 13.753 14.6458 14.1991 14.1996C14.6453 13.7535 15.1885 13.524 15.8119 13.4019C16.4143 13.2839 17.1402 13.2576 17.9909 13.2503C18.4051 13.2468 18.7437 13.5798 18.7472 13.994Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconQuitFullScreenCircle as IconComponentType).keywords = [
  "quit",
  "full",
  "screen",
  "circle",
  "rid",
  "leave",
  "relinquish",
  "give up",
  "step down",
  "discontinue",
  "throw in the towel",
  "chuck up the sponge",
  "lay off",
  "filled",
  "brimming",
  "brimful",
  "overfull",
  "high",
  "brimfull",
  "overflowing",
  "replete",
  "overladen",
  "screen door",
  "cover",
  "screen out",
  "sieve",
  "shield",
  "silver screen",
  "sort",
  "test",
  "block out",
  "round",
  "rotary",
  "environ",
  "roundabout",
  "circulate",
  "circuit",
  "encircle",
  "surround",
  "dress circle",
];

export default IconQuitFullScreenCircle as IconComponentType;
