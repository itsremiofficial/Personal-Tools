import { FC } from "react";

const IconLampOn: FC<IconProps> = ({
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
            d="M8.96979 18.0402V16.8802C6.66979 15.4902 4.77979 12.7802 4.77979 9.90018C4.77979 4.95018 9.32979 1.07018 14.4698 2.19018C16.7298 2.69018 18.7098 4.19018 19.7398 6.26018C21.8298 10.4602 19.6298 14.9202 16.3998 16.8702V18.0302C16.3998 18.3202 16.5098 18.9902 15.4398 18.9902H9.92979C8.82979 19.0002 8.96979 18.5702 8.96979 18.0402Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.16992 22.0002C11.4599 21.3502 13.8799 21.3502 16.1699 22.0002"
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
            d="M19.8801 6.36001C18.8401 4.26001 16.8301 2.71001 14.5001 2.20001C12.0601 1.66001 9.56014 2.24001 7.65014 3.78001C5.73014 5.31001 4.64014 7.60001 4.64014 10.05C4.64014 12.64 6.19014 15.35 8.53014 16.92V17.75C8.52014 18.03 8.51014 18.46 8.85014 18.81C9.20014 19.17 9.72014 19.21 10.1301 19.21H15.2601C15.8001 19.21 16.2101 19.06 16.4901 18.78C16.8701 18.39 16.8601 17.89 16.8501 17.62V16.92C19.9501 14.83 21.9001 10.42 19.8801 6.36001Z"
            fill="currentColor"
          />
          <path
            d="M15.9301 21.9999C15.8701 21.9999 15.8001 21.9899 15.7401 21.9699C13.7301 21.3999 11.6201 21.3999 9.61008 21.9699C9.24008 22.0699 8.85008 21.8599 8.75008 21.4899C8.64008 21.1199 8.86008 20.7299 9.23008 20.6299C11.4901 19.9899 13.8701 19.9899 16.1301 20.6299C16.5001 20.7399 16.7201 21.1199 16.6101 21.4899C16.5101 21.7999 16.2301 21.9999 15.9301 21.9999Z"
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
            d="M19.8801 6.36001C18.8401 4.26001 16.8301 2.71001 14.5001 2.20001C12.0601 1.66001 9.56014 2.24001 7.65014 3.78001C5.73014 5.31001 4.64014 7.60001 4.64014 10.05C4.64014 12.64 6.19014 15.35 8.53014 16.92V17.75C8.52014 18.03 8.51014 18.46 8.85014 18.81C9.20014 19.17 9.72014 19.21 10.1301 19.21H15.2601C15.8001 19.21 16.2101 19.06 16.4901 18.78C16.8701 18.39 16.8601 17.89 16.8501 17.62V16.92C19.9501 14.83 21.9001 10.42 19.8801 6.36001Z"
            fill="currentColor"
          />
          <path
            d="M15.9301 21.9999C15.8701 21.9999 15.8001 21.9899 15.7401 21.9699C13.7301 21.3999 11.6201 21.3999 9.61008 21.9699C9.24008 22.0699 8.85008 21.8599 8.75008 21.4899C8.64008 21.1199 8.86008 20.7299 9.23008 20.6299C11.4901 19.9899 13.8701 19.9899 16.1301 20.6299C16.5001 20.7399 16.7201 21.1199 16.6101 21.4899C16.5101 21.7999 16.2301 21.9999 15.9301 21.9999Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconLampOn as IconComponent).keywords = [
  "lamp",
  "on",
  "bulb",
  "flashlight",
  "lamppost",
  "lantern",
  "lighting",
  "dimmer",
  "searchlight",
  "wick",
  "lighter",
  "bps",
  "add",
  "nso",
  "our",
  "bsi",
  "nbs",
  "opti",
  "sno",
  "weap",
];

export default IconLampOn as IconComponent;