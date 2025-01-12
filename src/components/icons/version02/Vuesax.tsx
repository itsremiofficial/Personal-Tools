import { FC } from "react";

const IconVuesax: FC<IconProps> = ({
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
            d="M21.6699 8L12.6699 22L3.62988 8"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M3.66992 4H6.66992L12.6699 13L18.6699 4H21.6699L12.6699 18L3.66992 4Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.66992 3L12.6699 9L16.6699 3L13.8699 4V2H11.4699V4L8.66992 3Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
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
            d="M12.6697 22.75C12.4197 22.75 12.1797 22.62 12.0397 22.41L2.99973 8.40999C2.77973 8.05999 2.87973 7.59998 3.21973 7.36998C3.56973 7.14998 4.02974 7.23998 4.25974 7.58998L12.6597 20.61L21.0297 7.58998C21.2497 7.23998 21.7197 7.13999 22.0697 7.35999C22.4197 7.57999 22.5197 8.04998 22.2997 8.39998L13.2997 22.4C13.1597 22.62 12.9297 22.75 12.6697 22.75Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M4.58967 4H6.40965C6.57965 4 6.72966 4.08 6.82966 4.22L12.2697 12.37C12.4697 12.67 12.8996 12.67 13.0996 12.37L18.5396 4.22C18.6297 4.08 18.7897 4 18.9597 4H20.7796C21.1796 4 21.4097 4.44 21.1997 4.77L13.1197 17.35C12.9197 17.66 12.4796 17.66 12.2796 17.35L4.19965 4.77C3.94965 4.44 4.18967 4 4.58967 4Z"
            fill="currentColor"
          />
          <path
            d="M8.66992 3L12.2499 8.38C12.4499 8.68001 12.8799 8.68001 13.0799 8.38L16.6699 3L13.8699 4V2H11.4699V4L8.66992 3Z"
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
            d="M12.6697 22.75C12.4197 22.75 12.1797 22.62 12.0397 22.41L2.99973 8.41C2.77973 8.06 2.87973 7.59999 3.21973 7.36999C3.56973 7.14999 4.02974 7.23999 4.25974 7.58999L12.6597 20.61L21.0297 7.58999C21.2497 7.23999 21.7197 7.13998 22.0697 7.35998C22.4197 7.57998 22.5197 8.04999 22.2997 8.39999L13.2997 22.4C13.1597 22.62 12.9297 22.75 12.6697 22.75Z"
            fill="none"
          />
          <path
            d="M4.59016 4H6.41013C6.58013 4 6.73015 4.08 6.83015 4.22L12.2701 12.37C12.4701 12.67 12.9001 12.67 13.1001 12.37L18.5401 4.22C18.6301 4.08 18.7902 4 18.9602 4H20.7801C21.1801 4 21.4101 4.43999 21.2001 4.76999L13.1202 17.35C12.9202 17.66 12.4801 17.66 12.2801 17.35L4.20014 4.76999C3.95014 4.43999 4.19016 4 4.59016 4Z"
            fill="none"
          />
          <path
            d="M10.0899 3.5C9.63993 3.34 9.23992 3.85 9.50992 4.25L12.2599 8.38C12.4599 8.68001 12.8899 8.68001 13.0899 8.38L15.8399 4.26001C16.1099 3.86001 15.7099 3.35001 15.2599 3.51001L13.8799 4V2.5C13.8799 2.22 13.6599 2 13.3799 2H11.9799C11.6999 2 11.4799 2.22 11.4799 2.5V4L10.0899 3.5Z"
            fill="none"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconVuesax as IconComponent).keywords = ["vuesax"];

export default IconVuesax as IconComponent;
