import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconRemoteController2: FC<IconProps> = ({
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
            opacity={duotone ? "0.5" : "1"}
            d="M5 9.00012C5 6.1912 5 4.78674 5.67412 3.77784C5.96596 3.34108 6.34096 2.96608 6.77772 2.67424C7.78661 2.00012 9.19108 2.00012 12 2.00012C14.8089 2.00012 16.2134 2.00012 17.2223 2.67424C17.659 2.96608 18.034 3.34108 18.3259 3.77784C19 4.78674 19 6.1912 19 9.00012V15.0001C19 17.809 19 19.2135 18.3259 20.2224C18.034 20.6592 17.659 21.0342 17.2223 21.326C16.2134 22.0001 14.8089 22.0001 12 22.0001C9.19108 22.0001 7.78661 22.0001 6.77772 21.326C6.34096 21.0342 5.96596 20.6592 5.67412 20.2224C5 19.2135 5 17.809 5 15.0001V9.00012Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M15 15.5001C15 17.157 13.6569 18.5001 12 18.5001C10.3431 18.5001 9 17.157 9 15.5001C9 13.8433 10.3431 12.5001 12 12.5001C13.6569 12.5001 15 13.8433 15 15.5001Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M11 9.50012C11 10.0524 10.5523 10.5001 10 10.5001C9.44772 10.5001 9 10.0524 9 9.50012C9 8.94784 9.44772 8.50012 10 8.50012C10.5523 8.50012 11 8.94784 11 9.50012Z"
            fill="currentColor"
          />
          <circle cx="10" cy="6.00012" r="1" fill="currentColor" />
          <path
            d="M15 9.50012C15 10.0524 14.5523 10.5001 14 10.5001C13.4477 10.5001 13 10.0524 13 9.50012C13 8.94784 13.4477 8.50012 14 8.50012C14.5523 8.50012 15 8.94784 15 9.50012Z"
            fill="currentColor"
          />
          <circle cx="14" cy="6.00012" r="1" fill="currentColor" />
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
            d="M5.67412 3.77784C5 4.78674 5 6.1912 5 9.00012V15.0001C5 17.809 5 19.2135 5.67412 20.2224C5.96596 20.6592 6.34096 21.0342 6.77772 21.326C7.78661 22.0001 9.19108 22.0001 12 22.0001C14.8089 22.0001 16.2134 22.0001 17.2223 21.326C17.659 21.0342 18.034 20.6592 18.3259 20.2224C19 19.2135 19 17.809 19 15.0001V9.00012C19 6.1912 19 4.78674 18.3259 3.77784C18.034 3.34108 17.659 2.96608 17.2223 2.67424C16.2134 2.00012 14.8089 2.00012 12 2.00012C9.19108 2.00012 7.78661 2.00012 6.77772 2.67424C6.34096 2.96608 5.96596 3.34108 5.67412 3.77784Z"
            fill="currentColor"
          />
          <path
            d="M11 9.50012C11 10.0524 10.5523 10.5001 10 10.5001C9.44772 10.5001 9 10.0524 9 9.50012C9 8.94784 9.44772 8.50012 10 8.50012C10.5523 8.50012 11 8.94784 11 9.50012Z"
            fill="currentColor"
          />
          <path
            d="M10 7.00012C10.5523 7.00012 11 6.55241 11 6.00012C11 5.44784 10.5523 5.00012 10 5.00012C9.44772 5.00012 9 5.44784 9 6.00012C9 6.55241 9.44772 7.00012 10 7.00012Z"
            fill="currentColor"
          />
          <path
            d="M15 9.50012C15 10.0524 14.5523 10.5001 14 10.5001C13.4477 10.5001 13 10.0524 13 9.50012C13 8.94784 13.4477 8.50012 14 8.50012C14.5523 8.50012 15 8.94784 15 9.50012Z"
            fill="currentColor"
          />
          <path
            d="M14 7.00012C14.5523 7.00012 15 6.55241 15 6.00012C15 5.44784 14.5523 5.00012 14 5.00012C13.4477 5.00012 13 5.44784 13 6.00012C13 6.55241 13.4477 7.00012 14 7.00012Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.25 15.5001C8.25 13.4291 9.92893 11.7501 12 11.7501C14.0711 11.7501 15.75 13.4291 15.75 15.5001C15.75 17.5712 14.0711 19.2501 12 19.2501C9.92893 19.2501 8.25 17.5712 8.25 15.5001ZM9.75 15.5001C9.75 14.2575 10.7574 13.2501 12 13.2501C13.2426 13.2501 14.25 14.2575 14.25 15.5001C14.25 16.7428 13.2426 17.7501 12 17.7501C10.7574 17.7501 9.75 16.7428 9.75 15.5001Z"
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
            d="M9.75 15.5001C9.75 14.2575 10.7574 13.2501 12 13.2501C13.2426 13.2501 14.25 14.2575 14.25 15.5001C14.25 16.7428 13.2426 17.7501 12 17.7501C10.7574 17.7501 9.75 16.7428 9.75 15.5001Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.67412 3.77784C5 4.78674 5 6.1912 5 9.00012V15.0001C5 17.809 5 19.2135 5.67412 20.2224C5.96596 20.6592 6.34096 21.0342 6.77772 21.326C7.78661 22.0001 9.19108 22.0001 12 22.0001C14.8089 22.0001 16.2134 22.0001 17.2223 21.326C17.659 21.0342 18.034 20.6592 18.3259 20.2224C19 19.2135 19 17.809 19 15.0001V9.00012C19 6.1912 19 4.78674 18.3259 3.77784C18.034 3.34108 17.659 2.96608 17.2223 2.67424C16.2134 2.00012 14.8089 2.00012 12 2.00012C9.19108 2.00012 7.78661 2.00012 6.77772 2.67424C6.34096 2.96608 5.96596 3.34108 5.67412 3.77784ZM12 11.7501C9.92893 11.7501 8.25 13.4291 8.25 15.5001C8.25 17.5712 9.92893 19.2501 12 19.2501C14.0711 19.2501 15.75 17.5712 15.75 15.5001C15.75 13.4291 14.0711 11.7501 12 11.7501ZM11 9.50012C11 10.0524 10.5523 10.5001 10 10.5001C9.44772 10.5001 9 10.0524 9 9.50012C9 8.94784 9.44772 8.50012 10 8.50012C10.5523 8.50012 11 8.94784 11 9.50012ZM10 7.00012C10.5523 7.00012 11 6.55241 11 6.00012C11 5.44784 10.5523 5.00012 10 5.00012C9.44772 5.00012 9 5.44784 9 6.00012C9 6.55241 9.44772 7.00012 10 7.00012ZM15 9.50012C15 10.0524 14.5523 10.5001 14 10.5001C13.4477 10.5001 13 10.0524 13 9.50012C13 8.94784 13.4477 8.50012 14 8.50012C14.5523 8.50012 15 8.94784 15 9.50012ZM14 7.00012C14.5523 7.00012 15 6.55241 15 6.00012C15 5.44784 14.5523 5.00012 14 5.00012C13.4477 5.00012 13 5.44784 13 6.00012C13 6.55241 13.4477 7.00012 14 7.00012Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconRemoteController2 as IconComponentType).keywords = [
  "remote",
  "controller",
  "2",
  "distant",
  "far",
  "outside",
  "removed",
  "unlikely",
  "inaccessible",
  "unaccessible",
  "backwoods",
  "outback",
  "control",
  "accountant",
  "comptroller",
  "conductor",
  "inspector",
  "scrutineer",
  "controlling",
  "monitor",
  "checker",
  "wireless network",
  "sign on",
  "sign off",
  "put through",
  "back up",
  "ring up",
  "call up",
  "hang up",
  "read out",
];

export default IconRemoteController2 as IconComponentType;
