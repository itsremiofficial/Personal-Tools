import { FC } from "react";

const IconMicrophoneSlash2: FC<IconProps> = ({
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
            d="M16.6699 6.3V6C16.6699 3.79 14.8799 2 12.6699 2C10.4599 2 8.66992 3.79 8.66992 6V11"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.01953 9.64999V11.35C5.01953 12.41 5.22953 13.41 5.61953 14.33"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.7396 2.84L4.59961 18.99"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.6699 3V6"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M9.70898 14.19C10.439 15 11.499 15.5 12.669 15.5C14.879 15.5 16.669 13.71 16.669 11.5V11"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.44922 16.9504C8.81922 18.2204 10.6492 19.0004 12.6692 19.0004C16.8892 19.0004 20.3192 15.5704 20.3192 11.3504V9.65039"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.6699 19V22"
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
            d="M17.09 6.42V7.58L9.81 14.86C8.85 13.99 8.25 12.71 8.25 11.34V6.42C8.25 4.36 9.65 2.65 11.55 2.16C11.74 2.11 11.92 2.27 11.92 2.46V4C11.92 4.41 12.26 4.75 12.67 4.75C13.08 4.75 13.42 4.41 13.42 4V2.46C13.42 2.27 13.6 2.11 13.79 2.16C15.69 2.65 17.09 4.36 17.09 6.42Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.45035 16.22L7.46035 17.21C5.87035 15.78 4.86035 13.71 4.86035 11.4V9.81C4.86035 9.43 5.17035 9.12 5.55035 9.12C5.94035 9.12 6.25035 9.43 6.25035 9.81V11.4C6.25035 13.32 7.10035 15.05 8.45035 16.22Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20.4797 9.81V11.4C20.4797 15.47 17.3497 18.82 13.3697 19.17V21.3C13.3697 21.69 13.0597 22 12.6697 22C12.2797 22 11.9697 21.69 11.9697 21.3V19.17C10.8797 19.07 9.84969 18.75 8.92969 18.24L9.95969 17.21C10.7797 17.59 11.6997 17.81 12.6697 17.81C16.2097 17.81 19.0897 14.93 19.0897 11.4V9.81C19.0897 9.43 19.3997 9.12 19.7897 9.12C20.1697 9.12 20.4797 9.43 20.4797 9.81Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17.0902 10.08V11.53C17.0902 14.11 14.8702 16.18 12.2302 15.93C11.9502 15.9 11.6702 15.85 11.4102 15.76L17.0902 10.08Z"
            fill="currentColor"
          />
          <path
            d="M22.4398 2.23C22.1398 1.93 21.6498 1.93 21.3498 2.23L2.8998 20.69C2.5998 20.99 2.5998 21.48 2.8998 21.78C3.0498 21.92 3.2398 22 3.4398 22C3.6398 22 3.8298 21.92 3.9798 21.77L22.4398 3.31C22.7498 3.01 22.7498 2.53 22.4398 2.23Z"
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
            d="M17.09 6.42V7.58L9.81 14.86C8.85 13.99 8.25 12.71 8.25 11.34V6.42C8.25 4.36 9.65 2.65 11.55 2.16C11.74 2.11 11.92 2.27 11.92 2.46V4C11.92 4.41 12.26 4.75 12.67 4.75C13.08 4.75 13.42 4.41 13.42 4V2.46C13.42 2.27 13.6 2.11 13.79 2.16C15.69 2.65 17.09 4.36 17.09 6.42Z"
            fill="currentColor"
          />
          <path
            d="M20.4797 9.81V11.4C20.4797 15.47 17.3497 18.82 13.3697 19.17V21.3C13.3697 21.69 13.0597 22 12.6697 22C12.2797 22 11.9697 21.69 11.9697 21.3V19.17C10.8797 19.07 9.84969 18.75 8.92969 18.24L9.95969 17.21C10.7797 17.59 11.6997 17.81 12.6697 17.81C16.2097 17.81 19.0897 14.93 19.0897 11.4V9.81C19.0897 9.43 19.3997 9.12 19.7897 9.12C20.1697 9.12 20.4797 9.43 20.4797 9.81Z"
            fill="currentColor"
          />
          <path
            d="M17.0902 10.08V11.53C17.0902 14.11 14.8702 16.18 12.2302 15.93C11.9502 15.9 11.6702 15.85 11.4102 15.76L17.0902 10.08Z"
            fill="currentColor"
          />
          <path
            d="M22.44 2.23C22.14 1.93 21.65 1.93 21.35 2.23L7.90004 15.68C6.87004 14.55 6.25004 13.05 6.25004 11.4V9.81001C6.25004 9.43001 5.94004 9.12 5.55004 9.12C5.17004 9.12 4.86004 9.43001 4.86004 9.81001V11.4C4.86004 13.43 5.64004 15.28 6.91004 16.67L2.89004 20.69C2.59004 20.99 2.59004 21.48 2.89004 21.78C3.05004 21.92 3.24004 22 3.44004 22C3.64004 22 3.83004 21.92 3.98004 21.77L22.44 3.31C22.75 3.01 22.75 2.53 22.44 2.23Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMicrophoneSlash2 as IconComponent).keywords = [
  "microphone",
  "slash",
  "2",
  "mike",
  "loudspeaker",
  "mic",
  "wire",
  "speaker",
  "floor",
  "lavalier",
  "lavaliere",
  "boom",
  "flog",
  "gash",
  "lash",
  "cut",
  "slice",
  "whip",
  "thrash",
  "trounce",
  "thrash about",
  "wireless network",
  "sign on",
  "sign off",
  "put through",
  "back up",
  "ring up",
  "call up",
  "hang up",
  "read out",
];

export default IconMicrophoneSlash2 as IconComponent;
