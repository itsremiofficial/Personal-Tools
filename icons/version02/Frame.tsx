import { FC } from "react";

const IconFrame: FC<IconProps> = ({
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
            d="M11.6699 5V8H9.66992C9.11992 8 8.66992 8.45 8.66992 9V11H5.66992V9C5.66992 6.79 7.45992 5 9.66992 5H11.6699Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M13.6699 19V16H15.6699C16.2199 16 16.6699 15.55 16.6699 15V13H19.6699V15C19.6699 17.21 17.8799 19 15.6699 19H13.6699Z"
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
            opacity={duotone ? "0.4" : "1"}
            d="M16.8597 2H8.4897C4.8497 2 2.67969 4.17 2.67969 7.81V16.18C2.67969 19.82 4.8497 21.99 8.4897 21.99H16.8597C20.4997 21.99 22.6697 19.82 22.6697 16.18V7.81C22.6697 4.17 20.4997 2 16.8597 2Z"
            fill="currentColor"
          />
          <path
            d="M11.6699 5.5V7.5C11.6699 7.78 11.4499 8 11.1699 8H9.66992C9.11992 8 8.66992 8.45 8.66992 9V10.5C8.66992 10.78 8.44992 11 8.16992 11H6.16992C5.88992 11 5.66992 10.78 5.66992 10.5V9C5.66992 6.79 7.45992 5 9.66992 5H11.1699C11.4499 5 11.6699 5.22 11.6699 5.5Z"
            fill="currentColor"
          />
          <path
            d="M13.6699 18.5V16.5C13.6699 16.22 13.8899 16 14.1699 16H15.6699C16.2199 16 16.6699 15.55 16.6699 15V13.5C16.6699 13.22 16.8899 13 17.1699 13H19.1699C19.4499 13 19.6699 13.22 19.6699 13.5V15C19.6699 17.21 17.8799 19 15.6699 19H14.1699C13.8899 19 13.6699 18.78 13.6699 18.5Z"
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
            d="M16.8597 2H8.4897C4.8497 2 2.67969 4.17 2.67969 7.81V16.18C2.67969 19.82 4.8497 21.99 8.4897 21.99H16.8597C20.4997 21.99 22.6697 19.82 22.6697 16.18V7.81C22.6697 4.17 20.4997 2 16.8597 2ZM11.6697 7.5C11.6697 7.78 11.4497 8 11.1697 8H9.66969C9.11969 8 8.66969 8.45 8.66969 9V10.5C8.66969 10.78 8.44969 11 8.16969 11H6.16969C5.88969 11 5.66969 10.78 5.66969 10.5V9C5.66969 6.79 7.45969 5 9.66969 5H11.1697C11.4497 5 11.6697 5.22 11.6697 5.5V7.5ZM19.6697 15C19.6697 17.21 17.8797 19 15.6697 19H14.1697C13.8897 19 13.6697 18.78 13.6697 18.5V16.5C13.6697 16.22 13.8897 16 14.1697 16H15.6697C16.2197 16 16.6697 15.55 16.6697 15V13.5C16.6697 13.22 16.8897 13 17.1697 13H19.1697C19.4497 13 19.6697 13.22 19.6697 13.5V15Z"
            fill="none"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconFrame as IconComponent).keywords = [
  "frame",
  "build",
  "put",
  "compose",
  "form",
  "draw up",
  "set up",
  "shape",
  "border",
  "outline",
];

export default IconFrame as IconComponent;
