import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconSirenRounded: FC<IconProps> = ({
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
            opacity={duotone ? "0.5" : "1"}
            d="M20 22.0005V16.0005C20 11.5822 16.4183 8.00049 12 8.00049C7.58172 8.00049 4 11.5822 4 16.0005V22.0005"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M14.2905 11.5005C15.2932 11.9064 16.0939 12.707 16.4998 13.7097"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M2 22.0005H22"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M12 2.00049V5.00049"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M21 6.00049L19.5 7.50049"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M3 6.00049L4.5 7.50049"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M13.5 17.5005C13.5 18.3289 12.8284 19.0005 12 19.0005C11.1716 19.0005 10.5 18.3289 10.5 17.5005C10.5 16.6721 11.1716 16.0005 12 16.0005C12.8284 16.0005 13.5 16.6721 13.5 17.5005Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M12 19.0005V22.0005"
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
            d="M4 16.0005V21.2505H20V16.0005C20 11.5822 16.4183 8.00049 12 8.00049C7.58172 8.00049 4 11.5822 4 16.0005Z"
            fill="currentColor"
          />
          <path
            d="M12.75 2.00049C12.75 1.58627 12.4142 1.25049 12 1.25049C11.5858 1.25049 11.25 1.58627 11.25 2.00049V5.00049C11.25 5.4147 11.5858 5.75049 12 5.75049C12.4142 5.75049 12.75 5.4147 12.75 5.00049V2.00049Z"
            fill="currentColor"
          />
          <path
            d="M21.5303 5.47016C21.8232 5.76305 21.8232 6.23793 21.5303 6.53082L20.0303 8.03082C19.7374 8.32371 19.2626 8.32371 18.9697 8.03082C18.6768 7.73793 18.6768 7.26305 18.9697 6.97016L20.4697 5.47016C20.7626 5.17726 21.2374 5.17726 21.5303 5.47016Z"
            fill="currentColor"
          />
          <path
            d="M3.53033 5.47016C3.23744 5.17726 2.76256 5.17726 2.46967 5.47016C2.17678 5.76305 2.17678 6.23793 2.46967 6.53082L3.96967 8.03082C4.26256 8.32371 4.73744 8.32371 5.03033 8.03082C5.32322 7.73793 5.32322 7.26305 5.03033 6.97016L3.53033 5.47016Z"
            fill="currentColor"
          />
          <path
            d="M14.5716 10.8052C14.1877 10.6498 13.7505 10.8351 13.595 11.219C13.4396 11.603 13.6249 12.0402 14.0088 12.1956C14.8233 12.5253 15.4746 13.1767 15.8043 13.9911C15.9597 14.375 16.3969 14.5603 16.7809 14.4049C17.1648 14.2495 17.3501 13.8122 17.1947 13.4283C16.7126 12.2373 15.7626 11.2873 14.5716 10.8052Z"
            fill="currentColor"
          />
          <path
            d="M12.75 18.7998C13.1984 18.5405 13.5 18.0557 13.5 17.5005C13.5 16.6721 12.8284 16.0005 12 16.0005C11.1716 16.0005 10.5 16.6721 10.5 17.5005C10.5 18.0557 10.8016 18.5405 11.25 18.7998V21.2505H12.75V18.7998Z"
            fill="currentColor"
          />
          <path
            d="M4 21.2505H2C1.58579 21.2505 1.25 21.5863 1.25 22.0005C1.25 22.4147 1.58579 22.7505 2 22.7505H22C22.4142 22.7505 22.75 22.4147 22.75 22.0005C22.75 21.5863 22.4142 21.2505 22 21.2505H20H12.75H11.25H4Z"
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
            d="M12.75 2.00049C12.75 1.58627 12.4142 1.25049 12 1.25049C11.5858 1.25049 11.25 1.58627 11.25 2.00049V5.00049C11.25 5.4147 11.5858 5.75049 12 5.75049C12.4142 5.75049 12.75 5.4147 12.75 5.00049V2.00049Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 21.2505H4V16.0005C4 11.5822 7.58172 8.00049 12 8.00049C16.4183 8.00049 20 11.5822 20 16.0005V21.2505H22C22.4142 21.2505 22.75 21.5863 22.75 22.0005C22.75 22.4147 22.4142 22.7505 22 22.7505H2C1.58579 22.7505 1.25 22.4147 1.25 22.0005C1.25 21.5863 1.58579 21.2505 2 21.2505ZM12.75 18.7998C13.1984 18.5405 13.5 18.0557 13.5 17.5005C13.5 16.6721 12.8284 16.0005 12 16.0005C11.1716 16.0005 10.5 16.6721 10.5 17.5005C10.5 18.0557 10.8016 18.5405 11.25 18.7998V21.2505H12.75V18.7998ZM13.5953 11.2191C13.7507 10.8351 14.188 10.6499 14.5719 10.8053C15.7629 11.2874 16.7129 12.2373 17.195 13.4283C17.3504 13.8123 17.1651 14.2495 16.7812 14.4049C16.3972 14.5604 15.96 14.3751 15.8046 13.9911C15.4749 13.1767 14.8235 12.5254 14.0091 12.1957C13.6252 12.0403 13.4399 11.603 13.5953 11.2191Z"
            fill="currentColor"
          />
          <path
            d="M21.5303 5.47016C21.8232 5.76305 21.8232 6.23793 21.5303 6.53082L20.0303 8.03082C19.7374 8.32371 19.2626 8.32371 18.9697 8.03082C18.6768 7.73793 18.6768 7.26305 18.9697 6.97016L20.4697 5.47016C20.7626 5.17726 21.2374 5.17726 21.5303 5.47016Z"
            fill="currentColor"
          />
          <path
            d="M3.53033 5.47016C3.23744 5.17726 2.76256 5.17726 2.46967 5.47016C2.17678 5.76305 2.17678 6.23793 2.46967 6.53082L3.96967 8.03082C4.26256 8.32371 4.73744 8.32371 5.03033 8.03082C5.32322 7.73793 5.32322 7.26305 5.03033 6.97016L3.53033 5.47016Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSirenRounded as IconComponentType).keywords = [
  "siren",
  "rounded",
  "delilah",
  "enchantress",
  "femme fatale",
  "temptress",
  "hell",
  "allure",
  "enticer",
  "lure",
  "sort",
  "ringed",
  "ring-shaped",
  "annulate",
  "annular",
  "circular",
  "rotund",
  "bowfront",
  "prolate",
  "domed",
];

export default IconSirenRounded as IconComponentType;
