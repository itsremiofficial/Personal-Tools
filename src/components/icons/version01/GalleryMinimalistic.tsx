import { FC } from "react";

const IconGalleryMinimalistic: FC<IconProps> = ({
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
            d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <circle
            opacity={duotone ? "0.5" : "1"}
            cx="16"
            cy="8"
            r="2"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M5 13.307L5.81051 12.5542C6.73658 11.6941 8.18321 11.7424 9.04988 12.6623L11.6974 15.4727C12.2356 16.0439 13.1166 16.1209 13.7457 15.6516C14.6522 14.9753 15.9144 15.0522 16.7322 15.8334L19 18"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447Z"
            fill="currentColor"
          />
          <path
            d="M8.50397 13.1766C7.91991 12.5566 6.94501 12.5241 6.32092 13.1038L5.51041 13.8566C5.20691 14.1385 4.73236 14.1209 4.45047 13.8174C4.16858 13.5139 4.1861 13.0394 4.4896 12.7575L5.3001 12.0047C6.52816 10.8641 8.44651 10.9281 9.59579 12.1481L12.2433 14.9584C12.5202 15.2523 12.9735 15.2919 13.2972 15.0504C14.4971 14.1553 16.1679 14.257 17.2503 15.2911L19.5181 17.4577C19.8176 17.7438 19.8284 18.2186 19.5423 18.5181C19.2562 18.8176 18.7814 18.8284 18.4819 18.5423L16.2141 16.3757C15.661 15.8473 14.8073 15.7953 14.1941 16.2527C13.2596 16.9499 11.9509 16.8356 11.1515 15.9869L8.50397 13.1766Z"
            fill="currentColor"
          />
          <path
            d="M18 8C18 9.10457 17.1046 10 16 10C14.8954 10 14 9.10457 14 8C14 6.89543 14.8954 6 16 6C17.1046 6 18 6.89543 18 8Z"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447ZM16 10C17.1046 10 18 9.10457 18 8C18 6.89543 17.1046 6 16 6C14.8954 6 14 6.89543 14 8C14 9.10457 14.8954 10 16 10ZM6.32092 13.1038C6.94501 12.5241 7.91991 12.5566 8.50397 13.1766L11.1515 15.9869C11.9509 16.8356 13.2596 16.9499 14.1941 16.2527C14.8073 15.7953 15.661 15.8473 16.2141 16.3757L18.4819 18.5423C18.7814 18.8284 19.2562 18.8176 19.5423 18.5181C19.8284 18.2186 19.8176 17.7438 19.5181 17.4577L17.2503 15.2911C16.1679 14.257 14.4971 14.1553 13.2972 15.0504C12.9735 15.2919 12.5202 15.2523 12.2433 14.9584L9.59579 12.1481C8.44651 10.9281 6.52816 10.8641 5.3001 12.0047L4.4896 12.7575C4.1861 13.0394 4.16858 13.5139 4.45047 13.8174C4.73236 14.1209 5.20691 14.1385 5.51041 13.8566L6.32092 13.1038Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconGalleryMinimalistic as IconComponent).keywords = [
  "gallery",
  "minimalistic",
  "art gallery",
  "heading",
  "verandah",
  "veranda",
  "drift",
  "picture gallery",
  "museum",
  "beaux-arts",
  "art",
  "modularistic",
  "brutalistic",
  "localistic",
  "reductionist",
  "exhibitional",
  "monogynous",
  "simplificational",
  "reductionistic",
  "automatistic",
];

export default IconGalleryMinimalistic as IconComponent;
