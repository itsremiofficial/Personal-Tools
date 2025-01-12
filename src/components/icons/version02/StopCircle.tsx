import { FC } from "react";

const IconStopCircle: FC<IconProps> = ({
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
            d="M12.6396 22C18.1625 22 22.6396 17.5228 22.6396 12C22.6396 6.47715 18.1625 2 12.6396 2C7.1168 2 2.63965 6.47715 2.63965 12C2.63965 17.5228 7.1168 22 12.6396 22Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M11.3995 16.23H13.9395C16.0595 16.23 16.8995 15.38 16.8995 13.27V10.73C16.8995 8.61 16.0495 7.77 13.9395 7.77H11.3995C9.27945 7.77 8.43945 8.62 8.43945 10.73V13.27C8.43945 15.38 9.28945 16.23 11.3995 16.23Z"
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
            d="M12.6396 22C18.1625 22 22.6396 17.5228 22.6396 12C22.6396 6.47715 18.1625 2 12.6396 2C7.1168 2 2.63965 6.47715 2.63965 12C2.63965 17.5228 7.1168 22 12.6396 22Z"
            fill="currentColor"
          />
          <path
            d="M11.4395 16.23H13.8995C15.5595 16.23 16.8995 14.89 16.8995 13.23V10.77C16.8995 9.11 15.5595 7.77 13.8995 7.77H11.4395C9.77945 7.77 8.43945 9.11 8.43945 10.77V13.23C8.43945 14.89 9.77945 16.23 11.4395 16.23Z"
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
            d="M12.6396 2C7.11965 2 2.63965 6.48 2.63965 12C2.63965 17.52 7.11965 22 12.6396 22C18.1596 22 22.6396 17.52 22.6396 12C22.6396 6.48 18.1696 2 12.6396 2ZM16.8996 13.23C16.8996 14.89 15.5596 16.23 13.8996 16.23H11.4396C9.77965 16.23 8.43965 14.89 8.43965 13.23V10.77C8.43965 9.11 9.77965 7.77 11.4396 7.77H13.8996C15.5596 7.77 16.8996 9.11 16.8996 10.77V13.23Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconStopCircle as IconComponent).keywords = [
  "stop",
  "circle",
  "stoppage",
  "cease",
  "kibosh",
  "discontinue",
  "terminate",
  "quit",
  "break off",
  "intercept",
  "hold back",
  "round",
  "rotary",
  "environ",
  "roundabout",
  "circulate",
  "circuit",
  "encircle",
  "surround",
  "dress circle",
];

export default IconStopCircle as IconComponent;
