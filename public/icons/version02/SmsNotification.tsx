import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconSmsNotification: FC<IconProps> = ({
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
            d="M22.6699 10.5V15.5C22.6699 19 20.6699 20.5 17.6699 20.5H7.66992C4.66992 20.5 2.66992 19 2.66992 15.5V8.5C2.66992 5 4.66992 3.5 7.66992 3.5H14.6699"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.66992 9L10.7999 11.5C11.8299 12.32 13.5199 12.32 14.5499 11.5L15.7299 10.56"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20.1699 8C21.5506 8 22.6699 6.88071 22.6699 5.5C22.6699 4.11929 21.5506 3 20.1699 3C18.7892 3 17.6699 4.11929 17.6699 5.5C17.6699 6.88071 18.7892 8 20.1699 8Z"
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
            d="M20.1699 8C21.5506 8 22.6699 6.88071 22.6699 5.5C22.6699 4.11929 21.5506 3 20.1699 3C18.7892 3 17.6699 4.11929 17.6699 5.5C17.6699 6.88071 18.7892 8 20.1699 8Z"
            fill="currentColor"
          />
          <path
            d="M20.1699 8C21.5506 8 22.6699 6.88071 22.6699 5.5C22.6699 4.11929 21.5506 3 20.1699 3C18.7892 3 17.6699 4.11929 17.6699 5.5C17.6699 6.88071 18.7892 8 20.1699 8Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21.3899 9.31001C22.0199 9.11001 22.6699 9.60002 22.6699 10.27V15.51C22.6699 19.01 20.6699 20.51 17.6699 20.51H7.66992C4.66992 20.51 2.66992 19.01 2.66992 15.51V8.51001C2.66992 5.01001 4.66992 3.51001 7.66992 3.51001H15.2799C15.9299 3.51001 16.3699 4.11002 16.2499 4.74002C16.1299 5.33002 16.1499 5.96002 16.3299 6.61002C16.6999 7.95002 17.7899 9.02001 19.1299 9.37001C19.9199 9.57001 20.6899 9.53001 21.3899 9.31001Z"
            fill="currentColor"
          />
          <path
            d="M12.6697 12.87C11.8297 12.87 10.9797 12.61 10.3297 12.08L7.1997 9.58002C6.8797 9.32002 6.8197 8.85002 7.0797 8.53002C7.3397 8.21002 7.80969 8.15003 8.12969 8.41003L11.2597 10.91C12.0197 11.52 13.3097 11.52 14.0697 10.91L15.2497 9.97002C15.5697 9.71002 16.0497 9.76002 16.2997 10.09C16.5597 10.41 16.5097 10.89 16.1797 11.14L14.9997 12.08C14.3597 12.61 13.5097 12.87 12.6697 12.87Z"
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
            d="M20.1699 8C21.5506 8 22.6699 6.88071 22.6699 5.5C22.6699 4.11929 21.5506 3 20.1699 3C18.7892 3 17.6699 4.11929 17.6699 5.5C17.6699 6.88071 18.7892 8 20.1699 8Z"
            fill="currentColor"
          />
          <path
            d="M20.1699 8C21.5506 8 22.6699 6.88071 22.6699 5.5C22.6699 4.11929 21.5506 3 20.1699 3C18.7892 3 17.6699 4.11929 17.6699 5.5C17.6699 6.88071 18.7892 8 20.1699 8Z"
            fill="currentColor"
          />
          <path
            d="M21.3899 9.31C20.6899 9.53 19.9199 9.57 19.1199 9.37C17.7799 9.02 16.6899 7.95 16.3199 6.61C16.1399 5.96 16.1299 5.32 16.2399 4.74C16.3699 4.1 15.9199 3.5 15.2799 3.5H7.66992C4.66992 3.5 2.66992 5 2.66992 8.5V15.5C2.66992 19 4.66992 20.5 7.66992 20.5H17.6699C20.6699 20.5 22.6699 19 22.6699 15.5V10.26C22.6699 9.6 22.0299 9.1 21.3899 9.31ZM16.1899 11.15L15.0099 12.09C14.3499 12.62 13.5099 12.88 12.6699 12.88C11.8299 12.88 10.9799 12.62 10.3299 12.09L7.19992 9.59C6.87992 9.33 6.82992 8.85 7.07992 8.53C7.33992 8.21 7.80992 8.15 8.12992 8.41L11.2599 10.91C12.0199 11.52 13.3099 11.52 14.0699 10.91L15.2499 9.97C15.5699 9.71 16.0499 9.76 16.2999 10.09C16.5599 10.41 16.5099 10.89 16.1899 11.15Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSmsNotification as IconComponentType).keywords = [
  "sms",
  "notification",
  "ms",
  "master of science",
  "samarium",
  "atomic number 62",
  "mms",
  "isa",
  "scm",
  "hsd",
  "cms",
  "apprisal",
  "notice",
  "telling",
  "presentment",
  "notifying",
  "notifier",
  "notify",
  "denunciation",
  "announcement",
];

export default IconSmsNotification as IconComponentType;
