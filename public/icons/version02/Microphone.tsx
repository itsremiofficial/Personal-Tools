import { FC } from "react";

const IconMicrophone: FC<IconProps> = ({
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
            d="M12.6699 19C15.9799 19 18.6699 16.31 18.6699 13V8C18.6699 4.69 15.9799 2 12.6699 2C9.35992 2 6.66992 4.69 6.66992 8V13C6.66992 16.31 9.35992 19 12.6699 19Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M3.66992 11V13C3.66992 17.97 7.69992 22 12.6699 22C17.6399 22 21.6699 17.97 21.6699 13V11"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.78027 7.47999C11.5603 6.82999 13.5003 6.82999 15.2803 7.47999"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10.7002 10.48C11.9002 10.15 13.1702 10.15 14.3702 10.48"
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
            d="M12.6695 21.93C7.62953 21.93 3.51953 17.83 3.51953 12.78V10.9C3.51953 10.51 3.83953 10.2 4.21953 10.2C4.59953 10.2 4.91953 10.52 4.91953 10.9V12.78C4.91953 17.05 8.38953 20.52 12.6595 20.52C16.9295 20.52 20.3995 17.05 20.3995 12.78V10.9C20.3995 10.51 20.7195 10.2 21.0995 10.2C21.4795 10.2 21.7995 10.52 21.7995 10.9V12.78C21.8195 17.83 17.7095 21.93 12.6695 21.93Z"
            fill="currentColor"
          />
          <path
            d="M12.6703 2C9.31031 2 6.57031 4.74 6.57031 8.1V12.79C6.57031 16.15 9.31031 18.89 12.6703 18.89C16.0303 18.89 18.7703 16.15 18.7703 12.79V8.1C18.7703 4.74 16.0303 2 12.6703 2ZM14.8503 10.59C14.7803 10.86 14.5303 11.04 14.2603 11.04C14.2103 11.04 14.1503 11.03 14.1003 11.02C13.0803 10.74 12.0003 10.74 10.9803 11.02C10.6503 11.11 10.3203 10.92 10.2303 10.59C10.1403 10.27 10.3303 9.93 10.6603 9.84C11.8903 9.5 13.1903 9.5 14.4203 9.84C14.7503 9.93 14.9403 10.26 14.8503 10.59ZM15.7003 7.82C15.6103 8.07 15.3803 8.22 15.1303 8.22C15.0603 8.22 14.9903 8.21 14.9203 8.18C13.3903 7.62 11.7103 7.62 10.1803 8.18C9.86031 8.3 9.51031 8.14 9.39031 7.82C9.28031 7.51 9.44031 7.16 9.76031 7.04C11.5603 6.39 13.5403 6.39 15.3303 7.04C15.6503 7.16 15.8103 7.51 15.7003 7.82Z"
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
            d="M12.6695 21.93C7.62953 21.93 3.51953 17.83 3.51953 12.78V10.9C3.51953 10.51 3.83953 10.2 4.21953 10.2C4.59953 10.2 4.91953 10.52 4.91953 10.9V12.78C4.91953 17.05 8.38953 20.52 12.6595 20.52C16.9295 20.52 20.3995 17.05 20.3995 12.78V10.9C20.3995 10.51 20.7195 10.2 21.0995 10.2C21.4795 10.2 21.7995 10.52 21.7995 10.9V12.78C21.8195 17.83 17.7095 21.93 12.6695 21.93Z"
            fill="currentColor"
          />
          <path
            d="M12.6703 2C9.31031 2 6.57031 4.74 6.57031 8.1V12.79C6.57031 16.15 9.31031 18.89 12.6703 18.89C16.0303 18.89 18.7703 16.15 18.7703 12.79V8.1C18.7703 4.74 16.0303 2 12.6703 2ZM14.8503 10.59C14.7803 10.86 14.5303 11.04 14.2603 11.04C14.2103 11.04 14.1503 11.03 14.1003 11.02C13.0803 10.74 12.0003 10.74 10.9803 11.02C10.6503 11.11 10.3203 10.92 10.2303 10.59C10.1403 10.27 10.3303 9.93 10.6603 9.84C11.8903 9.5 13.1903 9.5 14.4203 9.84C14.7503 9.93 14.9403 10.26 14.8503 10.59ZM15.7003 7.82C15.6103 8.07 15.3803 8.22 15.1303 8.22C15.0603 8.22 14.9903 8.21 14.9203 8.18C13.3903 7.62 11.7103 7.62 10.1803 8.18C9.86031 8.3 9.51031 8.14 9.39031 7.82C9.28031 7.51 9.44031 7.16 9.76031 7.04C11.5603 6.39 13.5403 6.39 15.3303 7.04C15.6503 7.16 15.8103 7.51 15.7003 7.82Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMicrophone as IconComponent).keywords = [
  "microphone",
  "mike",
  "loudspeaker",
  "mic",
  "wire",
  "speaker",
  "floor",
  "lavalier",
  "lavaliere",
  "boom",
];

export default IconMicrophone as IconComponent;
