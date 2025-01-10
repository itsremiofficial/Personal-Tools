import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconFacebook: FC<IconProps> = ({
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
            d="M14.6699 9.29999V12.25H17.2999C17.4899 12.25 17.6299 12.42 17.5899 12.61L17.2099 14.51C17.1799 14.65 17.0599 14.75 16.9199 14.75H14.6699V22H11.6699V14.75H9.96991C9.79991 14.75 9.66992 14.62 9.66992 14.45V12.55C9.66992 12.38 9.79991 12.25 9.96991 12.25H11.6699V9C11.6699 7.34 13.0099 6 14.6699 6H17.3699C17.5399 6 17.6699 6.12999 17.6699 6.29999V8.70001C17.6699 8.87001 17.5399 9 17.3699 9H14.9699C14.7999 9 14.6699 9.12999 14.6699 9.29999Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
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
            opacity={duotone ? "0.4" : "1"}
            d="M16.8597 2H8.48969C4.84968 2 2.67969 4.17 2.67969 7.81V16.18C2.67969 19.82 4.84968 21.99 8.48969 21.99H16.8597C20.4997 21.99 22.6697 19.82 22.6697 16.18V7.81C22.6697 4.17 20.4997 2 16.8597 2Z"
            fill="currentColor"
          />
          <path
            d="M14.5899 9.27995L14.6399 12.23L17.2699 12.19C17.4599 12.19 17.5999 12.36 17.5699 12.54L17.2199 14.45C17.1899 14.59 17.0699 14.69 16.9299 14.7L14.6799 14.74L14.7999 21.99L11.7999 22.04L11.6799 14.79L9.97989 14.82C9.80989 14.82 9.6799 14.69 9.6799 14.52L9.6499 12.62C9.6499 12.45 9.77989 12.32 9.94989 12.32L11.6499 12.29L11.5999 9.03996C11.5699 7.37996 12.8899 6.01995 14.5499 5.98995L17.2499 5.94995C17.4199 5.94995 17.5499 6.07995 17.5499 6.24995L17.5899 8.64996C17.5899 8.81996 17.4599 8.94995 17.2899 8.94995L14.8899 8.98995C14.7199 8.97995 14.5899 9.11995 14.5899 9.27995Z"
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
            d="M22.6699 16.19C22.6699 19.83 20.4999 22 16.8599 22H15.6699C15.1199 22 14.6699 21.55 14.6699 21V15.23C14.6699 14.96 14.8899 14.73 15.1599 14.73L16.9199 14.7C17.0599 14.69 17.1799 14.59 17.2099 14.45L17.5599 12.54C17.5899 12.36 17.4499 12.19 17.2599 12.19L15.1299 12.22C14.8499 12.22 14.6299 12 14.6199 11.73L14.5799 9.28C14.5799 9.12 14.7099 8.98001 14.8799 8.98001L17.2799 8.94C17.4499 8.94 17.5799 8.81001 17.5799 8.64001L17.5399 6.23999C17.5399 6.06999 17.4099 5.94 17.2399 5.94L14.5399 5.98001C12.8799 6.01001 11.5599 7.37 11.5899 9.03L11.6399 11.78C11.6499 12.06 11.4299 12.28 11.1499 12.29L9.94992 12.31C9.77992 12.31 9.64993 12.44 9.64993 12.61L9.67993 14.51C9.67993 14.68 9.80992 14.81 9.97992 14.81L11.1799 14.79C11.4599 14.79 11.6799 15.01 11.6899 15.28L11.7799 20.98C11.7899 21.54 11.3399 22 10.7799 22H8.47992C4.83992 22 2.66992 19.83 2.66992 16.18V7.81C2.66992 4.17 4.83992 2 8.47992 2H16.8599C20.4999 2 22.6699 4.17 22.6699 7.81V16.19Z"
            fill="none"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconFacebook as IconComponentType).keywords = [
  "facebook",
  "album",
  "joke",
  "site",
  "twitter",
  "myspace",
  "youtube",
  "newsfeed",
  "google",
  "friendster",
];

export default IconFacebook as IconComponentType;
