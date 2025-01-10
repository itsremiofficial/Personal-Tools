import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconThetaTheta: FC<IconProps> = ({
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
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M15.8199 18H9.5199C8.4999 18 7.66992 17.17 7.66992 16.15V7.85C7.66992 6.83 8.4999 6 9.5199 6H15.8199C16.8399 6 17.6699 6.83 17.6699 7.85V16.15C17.6699 17.17 16.8399 18 15.8199 18Z"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.6699 8.5V10.5"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.6699 10.5H14.6699"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.6699 15.5V13.5"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.6699 13.5H14.6699"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M15.6699 22H9.66992C4.66992 22 2.66992 20 2.66992 15V9C2.66992 4 4.66992 2 9.66992 2H15.6699C20.6699 2 22.6699 4 22.6699 9V15C22.6699 20 20.6699 22 15.6699 22Z"
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
          <path d="M24.6699 0H0.669922V24H24.6699V0Z" fill="none" />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.8599 2H8.48993C4.83993 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.82 4.83992 21.99 8.47992 21.99H16.8499C20.4899 21.99 22.6599 19.82 22.6599 16.18V7.81C22.6699 4.17 20.4999 2 16.8599 2Z"
            fill="currentColor"
          />
          <path
            d="M15.8199 6H9.5199C8.4999 6 7.66992 6.83 7.66992 7.85V16.15C7.66992 17.17 8.4999 18 9.5199 18H15.8199C16.8399 18 17.6699 17.17 17.6699 16.15V7.85C17.6699 6.83 16.8399 6 15.8199 6ZM14.6699 14.25H13.4199V15.5C13.4199 15.91 13.0799 16.25 12.6699 16.25C12.2599 16.25 11.9199 15.91 11.9199 15.5V14.25H10.6699C10.2599 14.25 9.91992 13.91 9.91992 13.5C9.91992 13.09 10.2599 12.75 10.6699 12.75H14.6699C15.0799 12.75 15.4199 13.09 15.4199 13.5C15.4199 13.91 15.0799 14.25 14.6699 14.25ZM14.6699 11.25H10.6699C10.2599 11.25 9.91992 10.91 9.91992 10.5C9.91992 10.09 10.2599 9.75 10.6699 9.75H11.9199V8.5C11.9199 8.09 12.2599 7.75 12.6699 7.75C13.0799 7.75 13.4199 8.09 13.4199 8.5V9.75H14.6699C15.0799 9.75 15.4199 10.09 15.4199 10.5C15.4199 10.91 15.0799 11.25 14.6699 11.25Z"
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
            d="M14.6699 9.75H13.4199V8.5C13.4199 8.09 13.0799 7.75 12.6699 7.75C12.2599 7.75 11.9199 8.09 11.9199 8.5V9.75H10.6699C10.2599 9.75 9.91992 10.09 9.91992 10.5C9.91992 10.91 10.2599 11.25 10.6699 11.25H14.6699C15.0799 11.25 15.4199 10.91 15.4199 10.5C15.4199 10.09 15.0799 9.75 14.6699 9.75Z"
            fill="none"
          />
          <path
            d="M14.6699 12.75H10.6699C10.2599 12.75 9.91992 13.09 9.91992 13.5C9.91992 13.91 10.2599 14.25 10.6699 14.25H11.9199V15.5C11.9199 15.91 12.2599 16.25 12.6699 16.25C13.0799 16.25 13.4199 15.91 13.4199 15.5V14.25H14.6699C15.0799 14.25 15.4199 13.91 15.4199 13.5C15.4199 13.09 15.0799 12.75 14.6699 12.75Z"
            fill="none"
          />
          <path
            d="M16.8597 2H8.48969C4.84968 2 2.67969 4.17 2.67969 7.81V16.18C2.67969 19.82 4.84968 21.99 8.48969 21.99H16.8597C20.4997 21.99 22.6697 19.82 22.6697 16.18V7.81C22.6697 4.17 20.4997 2 16.8597 2ZM17.6697 16.15C17.6697 17.17 16.8397 18 15.8197 18H9.51965C8.49965 18 7.66968 17.17 7.66968 16.15V7.85C7.66968 6.83 8.49965 6 9.51965 6H15.8197C16.8397 6 17.6697 6.83 17.6697 7.85V16.15Z"
            fill="none"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconThetaTheta as IconComponentType).keywords = [
  "theta",
  "phi",
  "epsilon",
  "gamma",
  "omega",
  "arctan",
  "delta",
  "cosine",
  "arcsin",
  "upsilon",
];

export default IconThetaTheta as IconComponentType;
