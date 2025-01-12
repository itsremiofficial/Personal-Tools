import { FC } from "react";

const IconMoon: FC<IconProps> = ({
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
            d="M2.70001 12.42C3.06001 17.57 7.43001 21.76 12.66 21.99C16.35 22.15 19.65 20.43 21.63 17.72C22.45 16.61 22.01 15.87 20.64 16.12C19.97 16.24 19.28 16.29 18.56 16.26C13.67 16.06 9.67001 11.97 9.65001 7.13996C9.64001 5.83996 9.91001 4.60996 10.4 3.48996C10.94 2.24996 10.29 1.65996 9.04001 2.18996C5.08001 3.85996 2.37001 7.84996 2.70001 12.42Z"
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
            d="M9.66963 19.0001C9.66963 19.8401 9.79963 20.6601 10.0396 21.4201C6.19963 20.0901 3.29963 16.5601 2.99963 12.4301C2.69963 8.04012 5.22963 3.94012 9.31963 2.22012C10.3796 1.78012 10.9196 2.10012 11.1496 2.33012C11.3696 2.55012 11.6796 3.08012 11.2396 4.09012C10.7896 5.13012 10.5696 6.23012 10.5696 7.37012C10.5796 9.41012 11.3796 11.3001 12.6796 12.7501C10.8496 14.2101 9.66963 16.4701 9.66963 19.0001Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21.8799 17.72C19.8999 20.41 16.7599 21.99 13.4099 21.99C13.2499 21.99 13.0899 21.98 12.9299 21.97C11.9299 21.93 10.9599 21.74 10.0399 21.42C9.79992 20.66 9.66992 19.84 9.66992 19C9.66992 16.47 10.8499 14.21 12.6799 12.75C14.1499 14.4 16.2599 15.47 18.5899 15.57C19.2199 15.6 19.8499 15.55 20.4699 15.44C21.5899 15.24 22.0399 15.66 22.1999 15.93C22.3699 16.2 22.5499 16.79 21.8799 17.72Z"
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
            d="M22.1996 15.9301C22.0396 15.6601 21.5896 15.2401 20.4696 15.4401C19.8496 15.5501 19.2196 15.6001 18.5896 15.5701C16.2596 15.4701 14.1496 14.4001 12.6796 12.7501C11.3796 11.3001 10.5796 9.41012 10.5696 7.37012C10.5696 6.23012 10.7896 5.13012 11.2396 4.09012C11.6796 3.08012 11.3696 2.55012 11.1496 2.33012C10.9196 2.10012 10.3796 1.78012 9.31963 2.22012C5.22963 3.94012 2.69963 8.04012 2.99963 12.4301C3.29963 16.5601 6.19963 20.0901 10.0396 21.4201C10.9596 21.7401 11.9296 21.9301 12.9296 21.9701C13.0896 21.9801 13.2496 21.9901 13.4096 21.9901C16.7596 21.9901 19.8996 20.4101 21.8796 17.7201C22.5496 16.7901 22.3696 16.2001 22.1996 15.9301Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMoon as IconComponent).keywords = [
  "moon",
  "lunar month",
  "moonlight",
  "synodic month",
  "lunation",
  "daydream",
  "moonshine",
  "moon around",
  "moon on",
  "satellite",
];

export default IconMoon as IconComponent;
