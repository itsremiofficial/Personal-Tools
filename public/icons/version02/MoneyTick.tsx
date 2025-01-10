import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconMoneyTick: FC<IconProps> = ({
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
            d="M9.66992 18C9.66992 18.75 9.45994 19.46 9.08994 20.06C8.39994 21.22 7.12992 22 5.66992 22C4.20992 22 2.93991 21.22 2.24991 20.06C1.87991 19.46 1.66992 18.75 1.66992 18C1.66992 15.79 3.45992 14 5.66992 14C7.87992 14 9.66992 15.79 9.66992 18Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.11035 18L5.10034 18.99L7.23035 17.02"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.66992 15.3V9C2.66992 5.5 4.66992 4 7.66992 4H17.6699C20.6699 4 22.6699 5.5 22.6699 9V15C22.6699 18.5 20.6699 20 17.6699 20H9.16992"
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
          <path
            d="M5.66992 14C3.45992 14 1.66992 15.79 1.66992 18C1.66992 18.75 1.87991 19.46 2.24991 20.06C2.93991 21.22 4.20992 22 5.66992 22C7.12992 22 8.39994 21.22 9.08994 20.06C9.45994 19.46 9.66992 18.75 9.66992 18C9.66992 15.79 7.87992 14 5.66992 14ZM7.63992 17.67L5.50992 19.64C5.36992 19.77 5.17991 19.84 4.99991 19.84C4.80991 19.84 4.61991 19.77 4.46991 19.62L3.47992 18.63C3.18992 18.34 3.18992 17.86 3.47992 17.57C3.76992 17.28 4.24992 17.28 4.53992 17.57L5.01993 18.05L6.61993 16.57C6.91993 16.29 7.39993 16.31 7.67993 16.61C7.95993 16.91 7.93992 17.39 7.63992 17.67Z"
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
            d="M17.6719 4H7.67188C4.67188 4 2.67188 5.5 2.67188 9V12.56C2.67188 12.93 3.05188 13.16 3.38188 13.01C4.36188 12.56 5.49188 12.39 6.68188 12.6C9.31188 13.07 11.2419 15.51 11.1719 18.18C11.1619 18.6 11.1019 19.01 10.9919 19.41C10.9119 19.72 11.1619 20.01 11.4819 20.01H17.6719C20.6719 20.01 22.6719 18.51 22.6719 15.01V9C22.6719 5.5 20.6719 4 17.6719 4ZM12.6719 14.5C11.2919 14.5 10.1719 13.38 10.1719 12C10.1719 10.62 11.2919 9.5 12.6719 9.5C14.0519 9.5 15.1719 10.62 15.1719 12C15.1719 13.38 14.0519 14.5 12.6719 14.5ZM19.9219 14C19.9219 14.41 19.5819 14.75 19.1719 14.75C18.7619 14.75 18.4219 14.41 18.4219 14V10C18.4219 9.59 18.7619 9.25 19.1719 9.25C19.5819 9.25 19.9219 9.59 19.9219 10V14Z"
            fill="currentColor"
          />
          <path
            d="M5.67188 14C3.46187 14 1.67188 15.79 1.67188 18C1.67188 18.75 1.88188 19.46 2.25188 20.06C2.94187 21.22 4.21187 22 5.67188 22C7.13188 22 8.40188 21.22 9.09188 20.06C9.46187 19.46 9.67188 18.75 9.67188 18C9.67188 15.79 7.88188 14 5.67188 14ZM7.64187 17.67L5.51188 19.64C5.37188 19.77 5.18187 19.84 5.00187 19.84C4.81187 19.84 4.62188 19.77 4.47187 19.62L3.48187 18.63C3.19187 18.34 3.19187 17.86 3.48187 17.57C3.77187 17.28 4.25187 17.28 4.54187 17.57L5.02187 18.05L6.62187 16.57C6.92188 16.29 7.40188 16.31 7.68188 16.61C7.96188 16.91 7.94187 17.39 7.64187 17.67Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMoneyTick as IconComponentType).keywords = [
  "money",
  "tick",
  "rich",
  "monied",
  "wealthy",
  "affluent",
  "loaded",
  "flush",
  "muni",
  "finance",
  "financing",
  "click",
  "ticktock",
  "beat",
  "ticktack",
  "retick",
  "ixodid",
  "acarid",
  "spinose",
  "gene",
];

export default IconMoneyTick as IconComponentType;
