import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconPath: FC<IconProps> = ({
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
          <g clipPath="url(#clip0_12_78675)">
            <path
              d="M20.46 7.27009L17.43 4.24009C16.28 3.09009 14.71 3.15009 13.94 4.38009L12.25 7.05009L17.65 12.4501L20.32 10.7601C21.47 10.0301 21.54 8.35009 20.46 7.27009Z"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.2499 7.05045L8.31991 6.81045C6.12991 6.68045 5.35991 7.35045 5.11991 9.44045L4.13991 17.7604C3.92991 19.5104 5.19991 20.7704 6.93991 20.5604L15.2599 19.5804C17.3499 19.3304 18.1099 18.5704 17.8899 16.3804L17.6599 12.4504"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M5.2793 19.4199L8.3093 16.3799"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath>
              <rect
                width="24"
                height="24"
                fill="none"
                transform="translate(0.669922)"
              />
            </clipPath>
          </defs>
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
            d="M20.6895 10.6999L17.8895 12.4699L12.2295 6.80992L13.9895 4.00992C14.8095 2.71992 16.4495 2.65992 17.6595 3.85992L20.8395 7.03992C21.9695 8.16992 21.8995 9.92992 20.6895 10.6999Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.3802 19.95L6.67022 20.98C6.07022 21.05 5.53022 20.96 5.08022 20.74C4.59022 20.5 4.21022 20.12 3.97022 19.63C3.75022 19.18 3.67022 18.64 3.73022 18.05L4.77022 9.32998C5.02022 7.14998 5.83022 6.43999 8.13022 6.56999L12.2502 6.81999L17.9102 12.48L18.1502 16.6C18.3602 18.9 17.5702 19.7 15.3802 19.95Z"
            fill="currentColor"
          />
          <path
            d="M8.64996 17.1499L5.06996 20.7299C4.57996 20.4899 4.19996 20.1099 3.95996 19.6199L7.54996 16.0299C7.85996 15.7299 8.35996 15.7299 8.65996 16.0299C8.96996 16.3499 8.96996 16.8399 8.64996 17.1499Z"
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
            d="M20.6898 10.6999L18.5698 12.0399C18.1698 12.2899 17.6598 12.2299 17.3298 11.8999L12.7998 7.36992C12.4698 7.03992 12.4098 6.52992 12.6598 6.12992L13.9998 4.00992C14.8198 2.71992 16.4598 2.65992 17.6698 3.85992L20.8498 7.03992C21.9698 8.16992 21.8998 9.92992 20.6898 10.6999Z"
            fill="currentColor"
          />
          <path
            d="M15.3796 19.95L6.65958 20.97C6.58191 20.9804 6.50524 20.9877 6.42964 20.9921C5.7445 21.0325 5.57463 20.2249 6.05993 19.7396L8.64958 17.15C8.96958 16.84 8.96958 16.35 8.64958 16.04C8.34958 15.73 7.85958 15.73 7.53958 16.04L4.94993 18.6296C4.46463 19.1149 3.6645 18.9444 3.70092 18.259C3.70474 18.1871 3.71094 18.1141 3.71958 18.04L4.74958 9.32C5.00958 7.14 5.80958 6.42 8.10958 6.56L9.60958 6.65C10.0996 6.68 10.5596 6.89 10.9096 7.24L17.4596 13.79C17.8096 14.14 18.0196 14.6 18.0396 15.09L18.1296 16.59C18.3596 18.9 17.5696 19.7 15.3796 19.95Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconPath as IconComponentType).keywords = [
  "path",
  "way",
  "route",
  "track",
  "way of life",
  "course",
  "pathway",
  "footway",
  "footpath",
  "trailhead",
];

export default IconPath as IconComponentType;
