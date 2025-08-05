import { FC } from "react";

const IconYoutube: FC<IconProps> = ({
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
            d="M17.6699 20H7.66992C4.66992 20 2.66992 18 2.66992 15V9C2.66992 6 4.66992 4 7.66992 4H17.6699C20.6699 4 22.6699 6 22.6699 9V15C22.6699 18 20.6699 20 17.6699 20Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.09 9.48997L14.5601 10.97C15.5001 11.54 15.5001 12.46 14.5601 13.03L12.09 14.51C11.09 15.11 10.27 14.65 10.27 13.48V10.51C10.27 9.34999 11.09 8.88997 12.09 9.48997Z"
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
            opacity={duotone ? "0.4" : "1"}
            d="M17.6699 20H7.66992C4.66992 20 2.66992 18 2.66992 15V9C2.66992 6 4.66992 4 7.66992 4H17.6699C20.6699 4 22.6699 6 22.6699 9V15C22.6699 18 20.6699 20 17.6699 20Z"
            fill="currentColor"
          />
          <path
            d="M12.09 9.48997L14.5601 10.97C15.5001 11.54 15.5001 12.46 14.5601 13.03L12.09 14.51C11.09 15.11 10.27 14.65 10.27 13.48V10.51C10.27 9.34997 11.09 8.88997 12.09 9.48997Z"
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
            d="M17.6699 4H7.66992C4.66992 4 2.66992 6 2.66992 9V15C2.66992 18 4.66992 20 7.66992 20H17.6699C20.6699 20 22.6699 18 22.6699 15V9C22.6699 6 20.6699 4 17.6699 4ZM14.5599 13.03L12.0899 14.51C11.0899 15.11 10.2699 14.65 10.2699 13.48V10.51C10.2699 9.34001 11.0899 8.88001 12.0899 9.48001L14.5599 10.96C15.5099 11.54 15.5099 12.46 14.5599 13.03Z"
            fill="none"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconYoutube as IconComponent).keywords = [
  "youtube",
  "videos",
  "video",
  "vids",
  "facebook",
  "google",
  "vid.",
  "vlog",
  "clips",
  "myspace",
];

export default IconYoutube as IconComponent;
