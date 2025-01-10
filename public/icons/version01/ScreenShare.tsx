import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconScreenShare: FC<IconProps> = ({
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
            d="M8 8C8 5.17157 8 3.75736 8.87868 2.87868C9.75736 2 11.1716 2 14 2H15C17.8284 2 19.2426 2 20.1213 2.87868C21 3.75736 21 5.17157 21 8V16C21 18.8284 21 20.2426 20.1213 21.1213C19.2426 22 17.8284 22 15 22H14C11.1716 22 9.75736 22 8.87868 21.1213C8 20.2426 8 18.8284 8 16V8Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M8 19.5C5.64298 19.5 4.46447 19.5 3.73223 18.7678C3 18.0355 3 16.857 3 14.5V9.5C3 7.14298 3 5.96447 3.73223 5.23223C4.46447 4.5 5.64298 4.5 8 4.5"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M14.5 16V8M14.5 8L17 10.5M14.5 8L12 10.5"
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
            d="M8.14114 4.5C8 5.34287 8 6.46249 8 8V16C8 17.5375 8 18.6571 8.14114 19.5H8C5.64298 19.5 4.46447 19.5 3.73223 18.7678C3 18.0355 3 16.857 3 14.5V9.5C3 7.14298 3 5.96447 3.73223 5.23223C4.46447 4.5 5.64298 4.5 8 4.5H8.14114Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.87868 2.87868C8 3.75736 8 5.17157 8 8V16C8 18.8284 8 20.2426 8.87868 21.1213C9.75736 22 11.1716 22 14 22H15C17.8284 22 19.2426 22 20.1213 21.1213C21 20.2426 21 18.8284 21 16V8C21 5.17157 21 3.75736 20.1213 2.87868C19.2426 2 17.8284 2 15 2H14C11.1716 2 9.75736 2 8.87868 2.87868ZM15.0303 7.46967C14.7374 7.17678 14.2626 7.17678 13.9697 7.46967L11.4697 9.96967C11.1768 10.2626 11.1768 10.7374 11.4697 11.0303C11.7626 11.3232 12.2374 11.3232 12.5303 11.0303L13.75 9.81066V16C13.75 16.4142 14.0858 16.75 14.5 16.75C14.9142 16.75 15.25 16.4142 15.25 16V9.81066L16.4697 11.0303C16.7626 11.3232 17.2374 11.3232 17.5303 11.0303C17.8232 10.7374 17.8232 10.2626 17.5303 9.96967L15.0303 7.46967Z"
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
            d="M6.62333 4.50789C5.15204 4.53494 4.30541 4.65944 3.73223 5.23262C3 5.96485 3 7.14336 3 9.50039V14.5004C3 16.8574 3 18.0359 3.73223 18.7682C4.30541 19.3413 5.15204 19.4658 6.62332 19.4929C6.62329 19.4926 6.62336 19.4931 6.62332 19.4929C6.49997 18.5754 6.49993 17.4289 6.5 16.0992V7.90167C6.49993 6.57194 6.49998 5.42538 6.62333 4.50789C6.62337 4.50761 6.62329 4.50817 6.62333 4.50789Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.87868 2.87868C8 3.75736 8 5.17157 8 8V16C8 18.8284 8 20.2426 8.87868 21.1213C9.75736 22 11.1716 22 14 22H15C17.8284 22 19.2426 22 20.1213 21.1213C21 20.2426 21 18.8284 21 16V8C21 5.17157 21 3.75736 20.1213 2.87868C19.2426 2 17.8284 2 15 2H14C11.1716 2 9.75736 2 8.87868 2.87868ZM15.0303 7.46967C14.7374 7.17678 14.2626 7.17678 13.9697 7.46967L11.4697 9.96967C11.1768 10.2626 11.1768 10.7374 11.4697 11.0303C11.7626 11.3232 12.2374 11.3232 12.5303 11.0303L13.75 9.81066V16C13.75 16.4142 14.0858 16.75 14.5 16.75C14.9142 16.75 15.25 16.4142 15.25 16V9.81066L16.4697 11.0303C16.7626 11.3232 17.2374 11.3232 17.5303 11.0303C17.8232 10.7374 17.8232 10.2626 17.5303 9.96967L15.0303 7.46967Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconScreenShare as IconComponentType).keywords = [
  "screen",
  "share",
  "screen door",
  "cover",
  "screen out",
  "sieve",
  "shield",
  "silver screen",
  "sort",
  "test",
  "block out",
  "portion out",
  "portion",
  "deal",
  "divvy up",
  "apportion",
  "contribution",
  "partake",
  "part",
  "parcel",
];

export default IconScreenShare as IconComponentType;
