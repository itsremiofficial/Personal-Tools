import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconBlogger: FC<IconProps> = ({
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
            opacity={duotone ? "0.4" : "1"}
            d="M6.66992 9V15C6.66992 17 7.66992 18 9.66992 18H15.6699C17.6699 18 18.6699 17 18.6699 15V12C18.6699 11.45 18.2199 11 17.6699 11C17.1199 11 16.6699 10.55 16.6699 10V9C16.6699 7 15.6699 6 13.6699 6H9.66992C7.66992 6 6.66992 7 6.66992 9Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10.6699 10H12.6699"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10.6699 14H14.6699"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
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
          <path
            opacity={duotone ? "0.58" : "1"}
            d="M24.6699 0H0.669922V24H24.6699V0Z"
            fill="none"
          />
          <path
            d="M17.6699 11C17.1199 11 16.6699 10.55 16.6699 10V9C16.6699 7 15.6699 6 13.6699 6H9.66992C7.66992 6 6.66992 7 6.66992 9V15C6.66992 17 7.66992 18 9.66992 18H15.6699C17.6699 18 18.6699 17 18.6699 15V12C18.6699 11.45 18.2199 11 17.6699 11ZM10.6699 9.25H12.6699C13.0799 9.25 13.4199 9.59 13.4199 10C13.4199 10.41 13.0799 10.75 12.6699 10.75H10.6699C10.2599 10.75 9.91992 10.41 9.91992 10C9.91992 9.59 10.2599 9.25 10.6699 9.25ZM14.6699 14.75H10.6699C10.2599 14.75 9.91992 14.41 9.91992 14C9.91992 13.59 10.2599 13.25 10.6699 13.25H14.6699C15.0799 13.25 15.4199 13.59 15.4199 14C15.4199 14.41 15.0799 14.75 14.6699 14.75Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.8597 2H8.48969C4.84968 2 2.67969 4.17 2.67969 7.81V16.18C2.67969 19.82 4.84968 21.99 8.48969 21.99H16.8597C20.4997 21.99 22.6697 19.82 22.6697 16.18V7.81C22.6697 4.17 20.4997 2 16.8597 2Z"
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
            d="M14.6699 13.25H10.6699C10.2599 13.25 9.91992 13.59 9.91992 14C9.91992 14.41 10.2599 14.75 10.6699 14.75H14.6699C15.0799 14.75 15.4199 14.41 15.4199 14C15.4199 13.59 15.0799 13.25 14.6699 13.25Z"
            fill="none"
          />
          <path
            d="M10.6699 10.75H12.6699C13.0799 10.75 13.4199 10.41 13.4199 10C13.4199 9.59 13.0799 9.25 12.6699 9.25H10.6699C10.2599 9.25 9.91992 9.59 9.91992 10C9.91992 10.41 10.2599 10.75 10.6699 10.75Z"
            fill="none"
          />
          <path
            d="M16.8597 2H8.48969C4.84968 2 2.67969 4.17 2.67969 7.81V16.18C2.67969 19.82 4.84968 21.99 8.48969 21.99H16.8597C20.4997 21.99 22.6697 19.82 22.6697 16.18V7.81C22.6697 4.17 20.4997 2 16.8597 2ZM18.6697 15C18.6697 17 17.6697 18 15.6697 18H9.66968C7.66968 18 6.66968 17 6.66968 15V9C6.66968 7 7.66968 6 9.66968 6H13.6697C15.6697 6 16.6697 7 16.6697 9V10C16.6697 10.55 17.1197 11 17.6697 11C18.2197 11 18.6697 11.45 18.6697 12V15Z"
            fill="none"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBlogger as IconComponentType).keywords = [
  "blogger",
  "blog",
  "filer",
  "writer",
  "journalist",
  "blogging",
  "podcaster",
  "blogs",
  "columnist",
  "photographer",
];

export default IconBlogger as IconComponentType;
