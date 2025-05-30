import { FC } from "react";

const IconMoneyTime: FC<IconProps> = ({
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
            opacity={duotone ? "0.4" : "1"}
            d="M12.6699 14.5C14.0506 14.5 15.1699 13.3807 15.1699 12C15.1699 10.6193 14.0506 9.5 12.6699 9.5C11.2892 9.5 10.1699 10.6193 10.1699 12C10.1699 13.3807 11.2892 14.5 12.6699 14.5Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19.1699 9.5V14.5"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.66992 22C7.87906 22 9.66992 20.2091 9.66992 18C9.66992 15.7909 7.87906 14 5.66992 14C3.46078 14 1.66992 15.7909 1.66992 18C1.66992 20.2091 3.46078 22 5.66992 22Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.91992 16.75V17.68C5.91992 18.03 5.73993 18.36 5.42993 18.54L4.66992 19"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.66992 15.2V9C2.66992 5.5 4.66992 4 7.66992 4H17.6699C20.6699 4 22.6699 5.5 22.6699 9V15C22.6699 18.5 20.6699 20 17.6699 20H9.16992"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
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
            d="M5.66992 14C3.45992 14 1.66992 15.79 1.66992 18C1.66992 20.21 3.45992 22 5.66992 22C7.87992 22 9.66992 20.21 9.66992 18C9.66992 15.79 7.87992 14 5.66992 14ZM6.66992 17.68C6.66992 18.29 6.33995 18.87 5.81995 19.18L5.05994 19.64C4.93994 19.71 4.80993 19.75 4.67993 19.75C4.42993 19.75 4.17992 19.62 4.03992 19.39C3.82992 19.04 3.93993 18.57 4.29993 18.36L5.05994 17.9C5.12994 17.86 5.17993 17.77 5.17993 17.69V16.76C5.17993 16.35 5.51993 16.01 5.92993 16.01C6.33993 16.01 6.67993 16.35 6.67993 16.76V17.68H6.66992Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.6699 9V15C22.6699 18.5 20.6699 20 17.6699 20H9.11993C9.46993 19.41 9.66992 18.73 9.66992 18C9.66992 15.79 7.87992 14 5.66992 14C4.46992 14 3.39992 14.53 2.66992 15.36V9C2.66992 5.5 4.66992 4 7.66992 4H17.6699C20.6699 4 22.6699 5.5 22.6699 9Z"
            fill="currentColor"
          />
          <path
            d="M12.6699 14.5C14.0506 14.5 15.1699 13.3807 15.1699 12C15.1699 10.6193 14.0506 9.5 12.6699 9.5C11.2892 9.5 10.1699 10.6193 10.1699 12C10.1699 13.3807 11.2892 14.5 12.6699 14.5Z"
            fill="currentColor"
          />
          <path
            d="M19.1699 14.75C18.7599 14.75 18.4199 14.41 18.4199 14V10C18.4199 9.59 18.7599 9.25 19.1699 9.25C19.5799 9.25 19.9199 9.59 19.9199 10V14C19.9199 14.41 19.5799 14.75 19.1699 14.75Z"
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
            d="M5.67188 14C3.46187 14 1.67188 15.79 1.67188 18C1.67188 20.21 3.46187 22 5.67188 22C7.88188 22 9.67188 20.21 9.67188 18C9.67188 15.79 7.88188 14 5.67188 14ZM6.67188 17.68C6.67188 18.29 6.34188 18.87 5.82188 19.18L5.06187 19.64C4.94187 19.72 4.80188 19.75 4.67188 19.75C4.42188 19.75 4.17188 19.62 4.03187 19.39C3.82187 19.04 3.93187 18.57 4.29187 18.36L5.05188 17.9C5.12188 17.86 5.17188 17.77 5.17188 17.69V16.76C5.17188 16.34 5.51187 16 5.92188 16C6.33187 16 6.67188 16.34 6.67188 16.75V17.68Z"
            fill="currentColor"
          />
          <path
            d="M17.6719 4H7.67188C4.67188 4 2.67188 5.5 2.67188 9V12.56C2.67188 12.93 3.05188 13.16 3.38188 13.01C4.36188 12.56 5.49188 12.39 6.68188 12.6C9.31188 13.07 11.2419 15.51 11.1719 18.18C11.1619 18.6 11.1019 19.01 10.9919 19.41C10.9119 19.72 11.1619 20.01 11.4819 20.01H17.6719C20.6719 20.01 22.6719 18.51 22.6719 15.01V9C22.6719 5.5 20.6719 4 17.6719 4ZM12.6719 14.5C11.2919 14.5 10.1719 13.38 10.1719 12C10.1719 10.62 11.2919 9.5 12.6719 9.5C14.0519 9.5 15.1719 10.62 15.1719 12C15.1719 13.38 14.0519 14.5 12.6719 14.5ZM19.9219 14C19.9219 14.41 19.5819 14.75 19.1719 14.75C18.7619 14.75 18.4219 14.41 18.4219 14V10C18.4219 9.59 18.7619 9.25 19.1719 9.25C19.5819 9.25 19.9219 9.59 19.9219 10V14Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMoneyTime as IconComponent).keywords = [
  "money",
  "time",
  "rich",
  "monied",
  "wealthy",
  "affluent",
  "loaded",
  "flush",
  "muni",
  "finance",
  "financing",
  "fourth dimension",
  "clock",
  "meter",
  "clip",
  "sentence",
  "clock time",
  "prison term",
  "space-time",
  "momentum",
];

export default IconMoneyTime as IconComponent;
