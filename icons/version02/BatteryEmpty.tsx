import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconBatteryEmpty: FC<IconProps> = ({
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
            d="M13.5999 4.78999H8.01992C3.91992 4.78999 2.66992 6.03999 2.66992 10.14V13.86C2.66992 17.96 3.91992 19.21 8.01992 19.21H13.5999C17.6999 19.21 18.9499 17.96 18.9499 13.86V10.14C18.9499 6.03999 17.6999 4.78999 13.5999 4.78999Z"
            fill="currentColor"
          />
          <path
            d="M21.0901 9C20.9501 8.99 20.7701 8.98 20.5701 8.98C20.1801 8.98 19.8701 9.29 19.8701 9.68V14.33C19.8701 14.72 20.1801 15.03 20.5701 15.03C20.7701 15.03 20.9401 15.02 21.1101 15.01C22.6701 14.83 22.6701 13.73 22.6701 12.93V11.07C22.6701 10.27 22.6701 9.17 21.0901 9Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBatteryEmpty as IconComponentType).keywords = [
  "battery",
  "empty",
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
];

export default IconBatteryEmpty as IconComponentType;
