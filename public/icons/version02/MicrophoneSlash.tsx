import { FC } from "react";

const IconMicrophoneSlash: FC<IconProps> = ({
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
            d="M18.4899 6.53C17.8299 3.93 15.4799 2 12.6699 2C9.35992 2 6.66992 4.69 6.66992 8V13C6.66992 14.46 7.18992 15.8 8.05992 16.84"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M18.6698 9.98V13C18.6698 16.31 15.9798 19 12.6698 19C11.9398 19 11.2298 18.87 10.5898 18.63"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6.53027 19.58C8.14027 21.08 10.3003 22 12.6703 22C17.6403 22 21.6703 17.97 21.6703 13V11"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.1699 2.99001L3.16992 21.99"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.2197 5.49999V2.25999"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.16992 3.5V7.5"
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
            d="M18.2898 5.72L7.6798 16.33C6.9498 15.34 6.5498 14.13 6.5498 12.82V8.11C6.5498 6.27 7.3698 4.62 8.6698 3.5V7.64C8.6698 8.03 8.9898 8.35 9.3698 8.35C9.7598 8.35 10.0798 8.03 10.0798 7.64V2.57C10.5398 2.34 11.0298 2.18 11.5398 2.09V5.75C11.5398 6.15 11.8598 6.46 12.2498 6.46C12.6398 6.46 12.9598 6.15 12.9598 5.75V2C15.3498 2.11 17.4098 3.61 18.2898 5.72Z"
            fill="currentColor"
          />
          <path
            d="M18.7901 8.88V12.82C18.7901 16.19 16.0401 18.94 12.6701 18.94C12.4901 18.94 12.3101 18.93 12.1301 18.91C12.0501 18.91 11.9701 18.9 11.9001 18.89C11.7701 18.87 11.6401 18.85 11.5201 18.83C11.4701 18.83 11.4301 18.81 11.3701 18.8C11.2301 18.77 11.0901 18.73 10.9601 18.69C10.7401 18.63 10.5301 18.55 10.3301 18.47C10.2001 18.42 10.0801 18.37 9.96008 18.3C9.93008 18.29 9.91008 18.27 9.88008 18.26C9.78008 18.21 9.68008 18.16 9.58008 18.09L18.7901 8.88Z"
            fill="currentColor"
          />
          <path
            d="M22.4196 11V13C22.4196 18.38 18.0496 22.75 12.6696 22.75C10.5496 22.75 8.51961 22.07 6.84961 20.82L7.92961 19.74C9.30961 20.72 10.9496 21.25 12.6696 21.25C17.2196 21.25 20.9196 17.55 20.9196 13V11C20.9196 10.59 21.2596 10.25 21.6696 10.25C22.0796 10.25 22.4196 10.59 22.4196 11Z"
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
            d="M18.2898 5.72L7.6798 16.33C6.9498 15.34 6.5498 14.13 6.5498 12.82V8.11C6.5498 6.27 7.3698 4.62 8.6698 3.5V7.64C8.6698 8.03 8.9898 8.35 9.3698 8.35C9.7598 8.35 10.0798 8.03 10.0798 7.64V2.57C10.5398 2.34 11.0298 2.18 11.5398 2.09V5.75C11.5398 6.15 11.8598 6.46 12.2498 6.46C12.6398 6.46 12.9598 6.15 12.9598 5.75V2C15.3498 2.11 17.4098 3.61 18.2898 5.72Z"
            fill="currentColor"
          />
          <path
            d="M18.7901 8.88V12.82C18.7901 16.19 16.0401 18.94 12.6701 18.94C12.4901 18.94 12.3101 18.93 12.1301 18.91C12.0501 18.91 11.9701 18.9 11.9001 18.89C11.7701 18.87 11.6401 18.85 11.5201 18.83C11.4701 18.83 11.4301 18.81 11.3701 18.8C11.2301 18.77 11.0901 18.73 10.9601 18.69C10.7401 18.63 10.5301 18.55 10.3301 18.47C10.2001 18.42 10.0801 18.37 9.96008 18.3C9.93008 18.29 9.91008 18.27 9.88008 18.26C9.78008 18.21 9.68008 18.16 9.58008 18.09L18.7901 8.88Z"
            fill="currentColor"
          />
          <path
            d="M22.4196 11V13C22.4196 18.38 18.0496 22.75 12.6696 22.75C10.5496 22.75 8.51961 22.07 6.84961 20.82L7.92961 19.74C9.30961 20.72 10.9496 21.25 12.6696 21.25C17.2196 21.25 20.9196 17.55 20.9196 13V11C20.9196 10.59 21.2596 10.25 21.6696 10.25C22.0796 10.25 22.4196 10.59 22.4196 11Z"
            fill="currentColor"
          />
          <path
            d="M22.4398 2.23C22.1398 1.93 21.6498 1.93 21.3498 2.23L2.8998 20.69C2.5998 20.99 2.5998 21.48 2.8998 21.78C3.0498 21.92 3.2398 22 3.4398 22C3.6398 22 3.8298 21.92 3.9798 21.77L22.4398 3.31C22.7498 3.01 22.7498 2.53 22.4398 2.23Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMicrophoneSlash as IconComponent).keywords = [
  "microphone",
  "slash",
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
];

export default IconMicrophoneSlash as IconComponent;
