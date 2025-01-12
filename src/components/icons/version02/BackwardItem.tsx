import { FC } from "react";

const IconBackwardItem: FC<IconProps> = ({
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
            d="M22.6699 5.14999V7.85001C22.6699 10.1 21.7699 11 19.5199 11H16.8199C14.5699 11 13.6699 10.1 13.6699 7.85001V5.14999C13.6699 2.89999 14.5699 2 16.8199 2H19.5199C21.7699 2 22.6699 2.89999 22.6699 5.14999Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.6699 16.15V18.85C11.6699 21.1 10.7699 22 8.51992 22H5.81992C3.56992 22 2.66992 21.1 2.66992 18.85V16.15C2.66992 13.9 3.56992 13 5.81992 13H8.51992C10.7699 13 11.6699 13.9 11.6699 16.15Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M18.05 11.0001V13.6201C18.05 16.3101 16.98 17.3801 14.29 17.3801H11.67V16.1501C11.67 13.9001 10.77 13.0001 8.52003 13.0001H7.29004V10.3801C7.29004 7.69013 8.36003 6.62012 11.05 6.62012H13.67V7.85013C13.67 10.1001 14.57 11.0001 16.82 11.0001H18.05Z"
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
            d="M21.9199 5.14999V7.85001C21.9199 9.69001 21.3599 10.25 19.5199 10.25H16.8199C14.9799 10.25 14.4199 9.69001 14.4199 7.85001V5.14999C14.4199 3.30999 14.9799 2.75 16.8199 2.75H19.5199C21.3599 2.75 21.9199 3.30999 21.9199 5.14999Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10.9199 16.15V18.85C10.9199 20.69 10.3599 21.25 8.51992 21.25H5.81992C3.97992 21.25 3.41992 20.69 3.41992 18.85V16.15C3.41992 14.31 3.97992 13.75 5.81992 13.75H8.51992C10.3599 13.75 10.9199 14.31 10.9199 16.15Z"
            fill="currentColor"
          />
          <path
            d="M17.3 11.7501V13.6201C17.3 15.9001 16.57 16.6301 14.29 16.6301H12.42V16.1501C12.42 13.4901 11.18 12.2501 8.52003 12.2501H8.04004V10.3801C8.04004 8.10013 8.77003 7.37012 11.05 7.37012H12.92V7.85013C12.92 10.5101 14.16 11.7501 16.82 11.7501H17.3Z"
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
            d="M21.9199 5.15V7.85C21.9199 9.69 21.3599 10.25 19.5199 10.25H16.8199C14.9799 10.25 14.4199 9.69 14.4199 7.85V5.15C14.4199 3.31 14.9799 2.75 16.8199 2.75H19.5199C21.3599 2.75 21.9199 3.31 21.9199 5.15Z"
            fill="currentColor"
          />
          <path
            d="M10.9199 16.15V18.85C10.9199 20.69 10.3599 21.25 8.51992 21.25H5.81992C3.97992 21.25 3.41992 20.69 3.41992 18.85V16.15C3.41992 14.31 3.97992 13.75 5.81992 13.75H8.51992C10.3599 13.75 10.9199 14.31 10.9199 16.15Z"
            fill="currentColor"
          />
          <path
            d="M16.82 11.7501C17.0851 11.7501 17.3 11.965 17.3 12.2301V13.6201C17.3 15.9001 16.57 16.6301 14.29 16.6301H12.9C12.6349 16.6301 12.42 16.4152 12.42 16.1501C12.42 13.4901 11.18 12.2501 8.52004 12.2501C8.25494 12.2501 8.04004 12.0352 8.04004 11.7701V10.3801C8.04004 8.10012 8.77004 7.37012 11.05 7.37012H12.44C12.7051 7.37012 12.92 7.58502 12.92 7.85012C12.92 10.5101 14.16 11.7501 16.82 11.7501Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBackwardItem as IconComponent).keywords = [
  "backward",
  "item",
  "rearward",
  "back",
  "rearwards",
  "retral",
  "reversed",
  "reverse",
  "retrograde",
  "inverse",
  "reversive",
  "point",
  "particular",
  "token",
  "detail",
  "object",
  "thing",
  "concept",
  "notion",
  "status",
];

export default IconBackwardItem as IconComponent;
