import { FC } from "react";

const IconBatteryDisable: FC<IconProps> = ({
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
            opacity={duotone ? "0.34" : "1"}
            d="M21.1699 9.5C22.6699 9.5 22.6699 10 22.6699 11V13C22.6699 14 22.6699 14.5 21.1699 14.5"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.66992 21.5L16.6699 2.5"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.66992 5C3.66992 5 2.66992 6 2.66992 10V14C2.66992 17.4 3.38992 18.63 6.05992 18.92"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.34" : "1"}
            d="M13.6699 19C17.6699 19 18.6699 18 18.6699 14V10C18.6699 6.61 17.9499 5.37 15.2999 5.08"
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
            d="M21.0901 9C20.9501 8.99 20.7701 8.98 20.5701 8.98C20.1801 8.98 19.8701 9.29 19.8701 9.68V14.33C19.8701 14.72 20.1801 15.03 20.5701 15.03C20.7701 15.03 20.9401 15.02 21.1101 15.01C22.6701 14.83 22.6701 13.73 22.6701 12.93V11.07C22.6701 10.27 22.6701 9.17 21.0901 9Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.1699 4.87L6.18992 19.09C3.53992 18.71 2.66992 17.27 2.66992 13.86V10.14C2.66992 6.04 3.91992 4.79 8.01992 4.79H13.5999C14.1799 4.79 14.6999 4.81 15.1699 4.87Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M18.9501 10.14V13.86C18.9501 16.81 16.5501 19.21 13.6001 19.21H8.12012L16.9001 5.31C18.4201 6 18.9501 7.46 18.9501 10.14Z"
            fill="currentColor"
          />
          <path
            d="M4.66983 22.25C4.52983 22.25 4.38983 22.21 4.26983 22.13C3.91983 21.91 3.80983 21.45 4.03983 21.1L16.0398 2.1C16.2598 1.75 16.7298 1.65 17.0698 1.87C17.4198 2.09 17.5298 2.55 17.2998 2.9L5.29983 21.9C5.15983 22.13 4.91983 22.25 4.66983 22.25Z"
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
            d="M18.9503 10.14V13.86C18.9503 16.81 16.5503 19.21 13.6003 19.21H9.93032C9.14032 19.21 8.66032 18.34 9.08032 17.68L16.3403 6.2C16.7003 5.63 17.5103 5.58 17.9603 6.09C18.6803 6.92 18.9503 8.21 18.9503 10.14Z"
            fill="currentColor"
          />
          <path
            d="M17.0699 1.86999C16.7199 1.64999 16.2599 1.74999 16.0399 2.09999L14.3299 4.80999C14.0999 4.79999 13.8599 4.78999 13.5999 4.78999H8.01992C3.91992 4.78999 2.66992 6.03999 2.66992 10.14V13.86C2.66992 16.91 3.36992 18.37 5.40992 18.92L4.03992 21.1C3.81992 21.45 3.91992 21.91 4.26992 22.13C4.38992 22.21 4.52992 22.25 4.66992 22.25C4.91992 22.25 5.15992 22.13 5.29992 21.9L17.2999 2.89999C17.5299 2.54999 17.4199 2.08999 17.0699 1.86999Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBatteryDisable as IconComponent).keywords = [
  "battery",
  "disable",
  "bombardment",
  "stamp battery",
  "barrage",
  "shelling",
  "assault and battery",
  "assault",
  "barrage fire",
  "electric battery",
  "alternator",
  "incapacitate",
  "handicap",
  "disenable",
  "invalid",
  "maim",
  "idle",
  "inactivity",
  "inactivate",
  "quiesce",
];

export default IconBatteryDisable as IconComponent;
