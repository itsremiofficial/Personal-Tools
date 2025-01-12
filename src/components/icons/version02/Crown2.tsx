import { FC } from "react";

const IconCrown2: FC<IconProps> = ({
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
            d="M17.3701 18.98H7.97012C7.55012 18.98 7.08012 18.65 6.94012 18.25L2.80012 6.66999C2.21012 5.00999 2.90012 4.49999 4.32012 5.51999L8.22012 8.30999C8.87012 8.75999 9.61012 8.52999 9.89012 7.79999L11.6501 3.10999C12.2101 1.60999 13.1401 1.60999 13.7001 3.10999L15.4601 7.79999C15.7401 8.52999 16.4801 8.75999 17.1201 8.30999L20.7801 5.69999C22.3401 4.57999 23.0901 5.14999 22.4501 6.95999L18.4101 18.27C18.2601 18.65 17.7901 18.98 17.3701 18.98Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.34" : "1"}
            d="M7.16992 22H18.1699"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.34" : "1"}
            d="M10.1699 14H15.1699"
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
            opacity={duotone ? "0.4" : "1"}
            d="M17.4402 18.98H7.90016C7.48016 18.98 7.10016 18.71 6.96016 18.32L2.80016 6.66998C2.47016 5.73998 3.53016 4.94998 4.32016 5.51998L8.32016 8.37998C8.85016 8.75998 9.61016 8.52998 9.84016 7.91998L11.7302 2.87998C12.0502 2.00998 13.2802 2.00998 13.6002 2.87998L15.4902 7.91998C15.7202 8.53998 16.4702 8.75998 17.0102 8.37998L21.0102 5.51998C21.8102 4.94998 22.8602 5.74998 22.5302 6.66998L18.3702 18.32C18.2402 18.71 17.8602 18.98 17.4402 18.98Z"
            fill="currentColor"
          />
          <path
            d="M17.6699 22H7.66992C7.25992 22 6.91992 21.66 6.91992 21.25C6.91992 20.84 7.25992 20.5 7.66992 20.5H17.6699C18.0799 20.5 18.4199 20.84 18.4199 21.25C18.4199 21.66 18.0799 22 17.6699 22Z"
            fill="currentColor"
          />
          <path
            d="M15.1699 14.75H10.1699C9.75992 14.75 9.41992 14.41 9.41992 14C9.41992 13.59 9.75992 13.25 10.1699 13.25H15.1699C15.5799 13.25 15.9199 13.59 15.9199 14C15.9199 14.41 15.5799 14.75 15.1699 14.75Z"
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
            d="M17.6699 22H7.66992C7.25992 22 6.91992 21.66 6.91992 21.25C6.91992 20.84 7.25992 20.5 7.66992 20.5H17.6699C18.0799 20.5 18.4199 20.84 18.4199 21.25C18.4199 21.66 18.0799 22 17.6699 22Z"
            fill="currentColor"
          />
          <path
            d="M21.0201 5.52001L17.0201 8.38001C16.4901 8.76001 15.7301 8.53001 15.5001 7.92001L13.6101 2.88001C13.2901 2.01001 12.0601 2.01001 11.7401 2.88001L9.84014 7.91001C9.61014 8.53001 8.86014 8.76001 8.33014 8.37001L4.33014 5.51001C3.53014 4.95001 2.47014 5.74001 2.80014 6.67001L6.96014 18.32C7.10014 18.72 7.48014 18.98 7.90014 18.98H17.4301C17.8501 18.98 18.2301 18.71 18.3701 18.32L22.5301 6.67001C22.8701 5.74001 21.8101 4.95001 21.0201 5.52001ZM15.1701 14.75H10.1701C9.76014 14.75 9.42014 14.41 9.42014 14C9.42014 13.59 9.76014 13.25 10.1701 13.25H15.1701C15.5801 13.25 15.9201 13.59 15.9201 14C15.9201 14.41 15.5801 14.75 15.1701 14.75Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCrown2 as IconComponent).keywords = [
  "crown",
  "2",
  "diadem",
  "coronate",
  "pate",
  "tip",
  "crest",
  "summit",
  "top",
  "peak",
  "treetop",
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

export default IconCrown2 as IconComponent;
