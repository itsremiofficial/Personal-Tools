import { FC } from "react";

const IconBatteryEmpty2: FC<IconProps> = ({
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
            d="M13.6699 19H7.66992C3.66992 19 2.66992 18 2.66992 14V10C2.66992 6 3.66992 5 7.66992 5H13.6699C17.6699 5 18.6699 6 18.6699 10V14C18.6699 18 17.6699 19 13.6699 19Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.34" : "1"}
            d="M21.1699 9.5C22.6699 9.5 22.6699 10 22.6699 11V13C22.6699 14 22.6699 14.5 21.1699 14.5"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.34" : "1"}
            d="M7.0498 10C7.3798 11.31 7.3798 12.69 7.0498 14"
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
            d="M13.5999 4.79H8.01992C3.91992 4.79 2.66992 6.04 2.66992 10.14V13.86C2.66992 17.96 3.91992 19.21 8.01992 19.21H13.5999C17.6999 19.21 18.9499 17.96 18.9499 13.86V10.14C18.9499 6.04 17.6999 4.79 13.5999 4.79Z"
            fill="currentColor"
          />
          <path
            d="M21.0901 9C20.9501 8.99 20.7701 8.98 20.5701 8.98C20.1801 8.98 19.8701 9.29 19.8701 9.68V14.33C19.8701 14.72 20.1801 15.03 20.5701 15.03C20.7701 15.03 20.9401 15.02 21.1101 15.01C22.6701 14.83 22.6701 13.73 22.6701 12.93V11.07C22.6701 10.27 22.6701 9.17 21.0901 9Z"
            fill="currentColor"
          />
          <path
            d="M7.04951 14.75C6.98951 14.75 6.92951 14.74 6.86951 14.73C6.46951 14.63 6.21951 14.22 6.31951 13.82C6.61951 12.63 6.61951 11.37 6.31951 10.18C6.21951 9.78 6.45951 9.37 6.86951 9.27C7.25951 9.17 7.66951 9.42 7.76951 9.82C8.12951 11.25 8.12951 12.76 7.76951 14.18C7.68951 14.52 7.37951 14.75 7.04951 14.75Z"
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
            d="M21.0901 9C20.9501 8.99 20.7701 8.98 20.5701 8.98C20.1801 8.98 19.8701 9.29 19.8701 9.68V14.33C19.8701 14.72 20.1801 15.03 20.5701 15.03C20.7701 15.03 20.9401 15.02 21.1101 15.01C22.6701 14.83 22.6701 13.73 22.6701 12.93V11.07C22.6701 10.27 22.6701 9.17 21.0901 9Z"
            fill="currentColor"
          />
          <path
            d="M13.5999 4.78999H8.01992C3.91992 4.78999 2.66992 6.03999 2.66992 10.14V13.86C2.66992 17.96 3.91992 19.21 8.01992 19.21H13.5999C17.6999 19.21 18.9499 17.96 18.9499 13.86V10.14C18.9499 6.03999 17.6999 4.78999 13.5999 4.78999ZM7.76992 14.18C7.68992 14.52 7.37992 14.75 7.03992 14.75C6.97992 14.75 6.91992 14.74 6.85992 14.73C6.45992 14.63 6.20992 14.22 6.30992 13.82C6.60992 12.63 6.60992 11.37 6.30992 10.18C6.20992 9.77999 6.44992 9.36999 6.85992 9.26999C7.25992 9.16999 7.66992 9.41999 7.76992 9.81999C8.12992 11.25 8.12992 12.75 7.76992 14.18Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBatteryEmpty2 as IconComponent).keywords = [
  "battery",
  "empty",
  "2",
  "bombardment",
  "stamp battery",
  "barrage",
  "shelling",
  "assault and battery",
  "assault",
  "barrage fire",
  "electric battery",
  "alternator",
  "lifeless",
  "void",
  "vacuous",
  "vacant",
  "empty-handed",
  "meaningless",
  "unfilled",
  "bare",
  "clean",
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

export default IconBatteryEmpty2 as IconComponent;
