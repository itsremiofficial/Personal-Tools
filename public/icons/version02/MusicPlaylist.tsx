import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconMusicPlaylist: FC<IconProps> = ({
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
            d="M17.6699 22H7.66992C4.66992 22 2.66992 20.5 2.66992 17V12C2.66992 8.5 4.66992 7 7.66992 7H17.6699C20.6699 7 22.6699 8.5 22.6699 12V17C22.6699 20.5 20.6699 22 17.6699 22Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.66992 4.5H18.6699"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.66992 2H15.6699"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M9.55945 19.11C10.3161 19.11 10.9294 18.4966 10.9294 17.74C10.9294 16.9834 10.3161 16.37 9.55945 16.37C8.80282 16.37 8.18945 16.9834 8.18945 17.74C8.18945 18.4966 8.80282 19.11 9.55945 19.11Z"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.9497 16.83V11.48C15.9497 10.34 15.2397 10.18 14.5097 10.38L11.7697 11.13C11.2697 11.27 10.9297 11.66 10.9297 12.23V13.18V13.82V17.74"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.579 18.2C15.3356 18.2 15.949 17.5866 15.949 16.83C15.949 16.0734 15.3356 15.46 14.579 15.46C13.8223 15.46 13.209 16.0734 13.209 16.83C13.209 17.5866 13.8223 18.2 14.579 18.2Z"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.9297 13.83L15.9497 12.46"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
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
            d="M18.6699 5.25H6.66992C6.25992 5.25 5.91992 4.91 5.91992 4.5C5.91992 4.09 6.25992 3.75 6.66992 3.75H18.6699C19.0799 3.75 19.4199 4.09 19.4199 4.5C19.4199 4.91 19.0799 5.25 18.6699 5.25Z"
            fill="currentColor"
          />
          <path
            d="M15.6699 2.75H9.66992C9.25992 2.75 8.91992 2.41 8.91992 2C8.91992 1.59 9.25992 1.25 9.66992 1.25H15.6699C16.0799 1.25 16.4199 1.59 16.4199 2C16.4199 2.41 16.0799 2.75 15.6699 2.75Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M18.6699 7H6.66992C4.46992 7 2.66992 8.8 2.66992 11V18C2.66992 20.2 4.46992 22 6.66992 22H18.6699C20.8699 22 22.6699 20.2 22.6699 18V11C22.6699 8.8 20.8699 7 18.6699 7Z"
            fill="currentColor"
          />
          <path
            d="M16.0394 9.89C15.7394 9.65 15.1894 9.42001 14.3094 9.65001L11.5794 10.4C10.7294 10.62 10.1794 11.34 10.1794 12.23V13.83V15.73C9.97944 15.67 9.77945 15.63 9.55945 15.63C8.38945 15.63 7.43945 16.58 7.43945 17.75C7.43945 18.92 8.38945 19.87 9.55945 19.87C10.7294 19.87 11.6794 18.92 11.6794 17.75V17.74V14.41L15.1995 13.45V14.82C14.9995 14.76 14.7994 14.72 14.5794 14.72C13.4094 14.72 12.4594 15.67 12.4594 16.84C12.4594 18.01 13.4094 18.96 14.5794 18.96C15.7294 18.96 16.6695 18.04 16.6895 16.89C16.6895 16.87 16.6995 16.86 16.6995 16.84V12.47V11.49C16.6995 10.59 16.3394 10.12 16.0394 9.89ZM9.55945 18.36C9.21945 18.36 8.93945 18.08 8.93945 17.74C8.93945 17.4 9.21945 17.12 9.55945 17.12C9.89945 17.12 10.1694 17.39 10.1794 17.73C10.1794 18.08 9.89945 18.36 9.55945 18.36ZM14.5794 17.45C14.2394 17.45 13.9594 17.17 13.9594 16.83C13.9594 16.49 14.2394 16.21 14.5794 16.21C14.9194 16.21 15.1995 16.49 15.1995 16.83C15.1995 17.17 14.9194 17.45 14.5794 17.45Z"
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
            d="M18.6699 5.25H6.66992C6.25992 5.25 5.91992 4.91 5.91992 4.5C5.91992 4.09 6.25992 3.75 6.66992 3.75H18.6699C19.0799 3.75 19.4199 4.09 19.4199 4.5C19.4199 4.91 19.0799 5.25 18.6699 5.25Z"
            fill="currentColor"
          />
          <path
            d="M15.6699 2.75H9.66992C9.25992 2.75 8.91992 2.41 8.91992 2C8.91992 1.59 9.25992 1.25 9.66992 1.25H15.6699C16.0799 1.25 16.4199 1.59 16.4199 2C16.4199 2.41 16.0799 2.75 15.6699 2.75Z"
            fill="currentColor"
          />
          <path
            d="M14.58 16.21C14.24 16.21 13.96 16.49 13.96 16.83C13.96 17.17 14.24 17.45 14.58 17.45C14.92 17.45 15.2 17.17 15.2 16.83C15.2 16.49 14.92 16.21 14.58 16.21Z"
            fill="currentColor"
          />
          <path
            d="M10.1795 17.74C10.1795 17.4 9.89945 17.13 9.55945 17.13C9.21945 17.13 8.93945 17.41 8.93945 17.75C8.93945 18.09 9.21945 18.37 9.55945 18.37C9.89945 18.36 10.1795 18.08 10.1795 17.74Z"
            fill="currentColor"
          />
          <path
            d="M18.6699 7H6.66992C4.46992 7 2.66992 8.8 2.66992 11V18C2.66992 20.2 4.46992 22 6.66992 22H18.6699C20.8699 22 22.6699 20.2 22.6699 18V11C22.6699 8.8 20.8699 7 18.6699 7ZM16.6999 12.46V16.83C16.6999 16.85 16.6899 16.86 16.6899 16.88C16.6599 18.02 15.7299 18.95 14.5799 18.95C13.4099 18.95 12.4599 18 12.4599 16.83C12.4599 15.66 13.4099 14.71 14.5799 14.71C14.7999 14.71 14.9999 14.75 15.1999 14.81V13.44L11.6799 14.4V17.73V17.74C11.6799 18.91 10.7299 19.86 9.55992 19.86C8.38992 19.86 7.43992 18.91 7.43992 17.74C7.43992 16.57 8.38992 15.62 9.55992 15.62C9.77992 15.62 9.97992 15.66 10.1799 15.72V13.82V12.22C10.1799 11.33 10.7299 10.61 11.5799 10.39L14.3099 9.64C15.1899 9.41 15.7299 9.64 16.0399 9.88C16.3399 10.11 16.6999 10.58 16.6999 11.47V12.46Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMusicPlaylist as IconComponentType).keywords = [
  "music",
  "playlist",
  "sheet music",
  "euphony",
  "medicine",
  "melody",
  "symphony",
  "orchestra",
  "musician",
  "song",
  "singing",
  "playback",
  "replay",
  "list",
  "reproductive",
  "reproduction",
  "soundtrack",
  "tunes",
  "songs",
];

export default IconMusicPlaylist as IconComponentType;