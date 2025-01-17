import { FC } from "react";

const IconMusicFilter: FC<IconProps> = ({
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
            d="M2.66992 3H22.6699"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.66992 9H11.6699"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.66992 15H8.66992"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.66992 21H6.66992"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M12.5101 22C13.7141 22 14.6901 21.024 14.6901 19.82C14.6901 18.616 13.7141 17.64 12.5101 17.64C11.3061 17.64 10.3301 18.616 10.3301 19.82C10.3301 21.024 11.3061 22 12.5101 22Z"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22.6695 18.37V9.85999C22.6695 8.04999 21.5295 7.79999 20.3795 8.10999L16.0295 9.3C15.2395 9.52 14.6895 10.14 14.6895 11.05V12.57V13.59V19.82"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.4905 20.55C21.6945 20.55 22.6705 19.574 22.6705 18.37C22.6705 17.166 21.6945 16.19 20.4905 16.19C19.2866 16.19 18.3105 17.166 18.3105 18.37C18.3105 19.574 19.2866 20.55 20.4905 20.55Z"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.6895 13.6L22.6695 11.42"
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
            opacity={duotone ? "0.4" : "1"}
            d="M22.6699 3.75H2.66992C2.25992 3.75 1.91992 3.41 1.91992 3C1.91992 2.59 2.25992 2.25 2.66992 2.25H22.6699C23.0799 2.25 23.4199 2.59 23.4199 3C23.4199 3.41 23.0799 3.75 22.6699 3.75Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M11.6699 9.75H2.66992C2.25992 9.75 1.91992 9.41 1.91992 9C1.91992 8.59 2.25992 8.25 2.66992 8.25H11.6699C12.0799 8.25 12.4199 8.59 12.4199 9C12.4199 9.41 12.0799 9.75 11.6699 9.75Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.66992 15.75H2.66992C2.25992 15.75 1.91992 15.41 1.91992 15C1.91992 14.59 2.25992 14.25 2.66992 14.25H8.66992C9.07992 14.25 9.41992 14.59 9.41992 15C9.41992 15.41 9.07992 15.75 8.66992 15.75Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6.66992 21.75H2.66992C2.25992 21.75 1.91992 21.41 1.91992 21C1.91992 20.59 2.25992 20.25 2.66992 20.25H6.66992C7.07992 20.25 7.41992 20.59 7.41992 21C7.41992 21.41 7.07992 21.75 6.66992 21.75Z"
            fill="currentColor"
          />
          <path
            d="M22.5301 7.68C21.9401 7.23 21.1301 7.14003 20.1801 7.40003L15.8301 8.58003C14.6601 8.90003 13.9401 9.85 13.9401 11.05V13.6V17.28C13.5201 17.04 13.0301 16.89 12.5101 16.89C10.9001 16.89 9.58008 18.2 9.58008 19.82C9.58008 21.43 10.8901 22.75 12.5101 22.75C14.1301 22.75 15.4401 21.44 15.4401 19.82V14.17L21.9201 12.4V15.83C21.5001 15.59 21.0101 15.44 20.4901 15.44C18.8801 15.44 17.5601 16.75 17.5601 18.37C17.5601 19.98 18.8701 21.3 20.4901 21.3C22.1101 21.3 23.4201 19.99 23.4201 18.37V11.42V9.87001C23.4201 8.86001 23.1201 8.12 22.5301 7.68ZM12.5101 21.25C11.7201 21.25 11.0801 20.61 11.0801 19.82C11.0801 19.03 11.7201 18.39 12.5101 18.39C13.3001 18.39 13.9401 19.03 13.9401 19.82C13.9401 20.61 13.3001 21.25 12.5101 21.25ZM20.4901 19.8C19.7001 19.8 19.0601 19.16 19.0601 18.37C19.0601 17.58 19.7001 16.94 20.4901 16.94C21.2801 16.94 21.9201 17.58 21.9201 18.37C21.9201 19.16 21.2801 19.8 20.4901 19.8Z"
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
            d="M22.6699 3.75H2.66992C2.25992 3.75 1.91992 3.41 1.91992 3C1.91992 2.59 2.25992 2.25 2.66992 2.25H22.6699C23.0799 2.25 23.4199 2.59 23.4199 3C23.4199 3.41 23.0799 3.75 22.6699 3.75Z"
            fill="currentColor"
          />
          <path
            d="M11.6699 9.75H2.66992C2.25992 9.75 1.91992 9.41 1.91992 9C1.91992 8.59 2.25992 8.25 2.66992 8.25H11.6699C12.0799 8.25 12.4199 8.59 12.4199 9C12.4199 9.41 12.0799 9.75 11.6699 9.75Z"
            fill="currentColor"
          />
          <path
            d="M8.66992 15.75H2.66992C2.25992 15.75 1.91992 15.41 1.91992 15C1.91992 14.59 2.25992 14.25 2.66992 14.25H8.66992C9.07992 14.25 9.41992 14.59 9.41992 15C9.41992 15.41 9.07992 15.75 8.66992 15.75Z"
            fill="currentColor"
          />
          <path
            d="M6.66992 21.75H2.66992C2.25992 21.75 1.91992 21.41 1.91992 21C1.91992 20.59 2.25992 20.25 2.66992 20.25H6.66992C7.07992 20.25 7.41992 20.59 7.41992 21C7.41992 21.41 7.07992 21.75 6.66992 21.75Z"
            fill="currentColor"
          />
          <path
            d="M22.5301 7.68C21.9401 7.23 21.1301 7.14 20.1801 7.4L15.8301 8.58C14.6601 8.9 13.9401 9.85 13.9401 11.05V13.6V17.28C13.5201 17.04 13.0301 16.89 12.5101 16.89C10.9001 16.89 9.58008 18.2 9.58008 19.82C9.58008 21.43 10.8901 22.75 12.5101 22.75C14.1301 22.75 15.4401 21.44 15.4401 19.82V14.17L21.9201 12.4V15.83C21.5001 15.59 21.0101 15.44 20.4901 15.44C18.8801 15.44 17.5601 16.75 17.5601 18.37C17.5601 19.98 18.8701 21.3 20.4901 21.3C22.1101 21.3 23.4201 19.99 23.4201 18.37V11.42V9.87C23.4201 8.86 23.1201 8.12 22.5301 7.68ZM12.5101 21.25C11.7201 21.25 11.0801 20.61 11.0801 19.82C11.0801 19.03 11.7201 18.39 12.5101 18.39C13.3001 18.39 13.9401 19.03 13.9401 19.82C13.9401 20.61 13.3001 21.25 12.5101 21.25ZM20.4901 19.8C19.7001 19.8 19.0601 19.16 19.0601 18.37C19.0601 17.58 19.7001 16.94 20.4901 16.94C21.2801 16.94 21.9201 17.58 21.9201 18.37C21.9201 19.16 21.2801 19.8 20.4901 19.8Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMusicFilter as IconComponent).keywords = [
  "music",
  "filter",
  "sheet music",
  "euphony",
  "medicine",
  "melody",
  "symphony",
  "orchestra",
  "musician",
  "song",
  "singing",
  "filtrate",
  "filter out",
  "percolate",
  "permeate",
  "trickle",
  "sink in",
  "strain",
  "dribble",
  "separate out",
];

export default IconMusicFilter as IconComponent;
