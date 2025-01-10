import { FC } from "react";

const IconArrow3: FC<IconProps> = ({
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
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M11.1197 6.71997L7.39966 3L3.67969 6.71997"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.3999 21V3"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M14.2197 17.28L17.9398 21L21.6597 17.28"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.9399 3V21"
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
            d="M11.6499 6.19L7.93991 2.47998C7.86991 2.40998 7.7799 2.35 7.6799 2.31C7.6699 2.31 7.65987 2.30999 7.64987 2.29999C7.56987 2.26999 7.47986 2.25 7.38986 2.25C7.18986 2.25 6.9999 2.32997 6.85989 2.46997L3.13986 6.19C2.84986 6.48 2.84986 6.96 3.13986 7.25C3.42986 7.54 3.90992 7.54 4.19992 7.25L6.64987 4.79999V21C6.64987 21.41 6.98987 21.75 7.39987 21.75C7.80987 21.75 8.14987 21.41 8.14987 21V4.81L10.5899 7.25C10.7399 7.4 10.9299 7.46997 11.1199 7.46997C11.3099 7.46997 11.4999 7.4 11.6499 7.25C11.9399 6.96 11.9399 6.49 11.6499 6.19Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.2002 16.75C21.9102 16.46 21.4301 16.46 21.1401 16.75L18.6902 19.2V3C18.6902 2.59 18.3502 2.25 17.9402 2.25C17.5302 2.25 17.1902 2.59 17.1902 3V19.19L14.7502 16.75C14.4602 16.46 13.9802 16.46 13.6902 16.75C13.4002 17.04 13.4002 17.52 13.6902 17.81L17.4001 21.52C17.4701 21.59 17.5601 21.65 17.6601 21.69C17.6701 21.69 17.6802 21.69 17.6902 21.7C17.7702 21.73 17.8602 21.75 17.9502 21.75C18.1502 21.75 18.3401 21.67 18.4801 21.53L22.2002 17.81C22.4902 17.51 22.4902 17.04 22.2002 16.75Z"
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
            d="M11.6499 6.19L7.93986 2.48C7.86986 2.41 7.77986 2.35 7.67986 2.31C7.66986 2.31 7.65986 2.31 7.64986 2.3C7.56986 2.27 7.48986 2.25 7.39986 2.25C7.19986 2.25 7.00986 2.33 6.86986 2.47L3.13986 6.19C2.84986 6.48 2.84986 6.96 3.13986 7.25C3.42986 7.54 3.90986 7.54 4.19986 7.25L6.64986 4.8V21C6.64986 21.41 6.98986 21.75 7.39986 21.75C7.80986 21.75 8.14986 21.41 8.14986 21V4.81L10.5899 7.25C10.7399 7.4 10.9299 7.47 11.1199 7.47C11.3099 7.47 11.4999 7.4 11.6499 7.25C11.9399 6.96 11.9399 6.49 11.6499 6.19Z"
            fill="currentColor"
          />
          <path
            d="M22.2002 16.75C21.9102 16.46 21.4302 16.46 21.1402 16.75L18.6902 19.2V3C18.6902 2.59 18.3502 2.25 17.9402 2.25C17.5302 2.25 17.1902 2.59 17.1902 3V19.19L14.7502 16.75C14.4602 16.46 13.9802 16.46 13.6902 16.75C13.4002 17.04 13.4002 17.52 13.6902 17.81L17.4002 21.52C17.4702 21.59 17.5602 21.65 17.6602 21.69C17.6702 21.69 17.6802 21.69 17.6902 21.7C17.7702 21.73 17.8602 21.75 17.9502 21.75C18.1502 21.75 18.3402 21.67 18.4802 21.53L22.2002 17.81C22.4902 17.51 22.4902 17.04 22.2002 16.75Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconArrow3 as IconComponent).keywords = [
  "arrow",
  "3",
  "pointer",
  "archer",
  "archery",
  "dart",
  "arrowhead",
  "bolt",
  "spike",
  "rope",
  "roof",
  "omega",
  "wash out",
  "cut up",
  "pull out",
  "pull up",
  "pull over",
  "pull in",
  "work out",
  "ride down",
];

export default IconArrow3 as IconComponent;
