import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconEmptyWalletTick: FC<IconProps> = ({
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
            d="M18.7099 13.55C18.2899 13.96 18.0499 14.55 18.1099 15.18C18.1999 16.26 19.1899 17.05 20.2699 17.05H22.1699V18.24C22.1699 20.31 20.4799 22 18.4099 22H8.29993C8.60993 21.74 8.87992 21.42 9.08992 21.06C9.45992 20.46 9.66992 19.75 9.66992 19C9.66992 16.79 7.87992 15 5.66992 15C4.72992 15 3.85992 15.33 3.16992 15.88V11.51C3.16992 9.44001 4.85992 7.75 6.92992 7.75H18.4099C20.4799 7.75 22.1699 9.44001 22.1699 11.51V12.95H20.1499C19.5899 12.95 19.0799 13.17 18.7099 13.55Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M3.16992 12.4101V7.8401C3.16992 6.6501 3.89992 5.59006 5.00992 5.17006L12.9499 2.17006C14.1899 1.70006 15.5199 2.62009 15.5199 3.95009V7.75008"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M23.2297 13.9699V16.03C23.2297 16.58 22.7897 17.0299 22.2297 17.0499H20.2697C19.1897 17.0499 18.1997 16.2599 18.1097 15.1799C18.0497 14.5499 18.2897 13.9599 18.7097 13.5499C19.0797 13.1699 19.5897 12.95 20.1497 12.95H22.2297C22.7897 12.97 23.2297 13.4199 23.2297 13.9699Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.66992 12H14.6699"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.66992 19C9.66992 19.75 9.45992 20.46 9.08992 21.06C8.87992 21.42 8.60993 21.74 8.29993 22C7.59993 22.63 6.67992 23 5.66992 23C4.20992 23 2.93992 22.22 2.24992 21.06C1.87992 20.46 1.66992 19.75 1.66992 19C1.66992 17.74 2.24992 16.61 3.16992 15.88C3.85992 15.33 4.72992 15 5.66992 15C7.87992 15 9.66992 16.79 9.66992 19Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.11035 19L5.10034 19.99L7.23035 18.02"
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
            d="M5.66992 15C4.72992 15 3.85992 15.33 3.16992 15.88C2.24992 16.61 1.66992 17.74 1.66992 19C1.66992 19.75 1.87992 20.46 2.24992 21.06C2.93992 22.22 4.20992 23 5.66992 23C6.67992 23 7.59993 22.63 8.29993 22C8.60993 21.74 8.87992 21.42 9.08992 21.06C9.45992 20.46 9.66992 19.75 9.66992 19C9.66992 16.79 7.87992 15 5.66992 15ZM7.73993 18.57L5.60992 20.54C5.46992 20.67 5.27991 20.74 5.09991 20.74C4.90991 20.74 4.71992 20.67 4.56992 20.52L3.57993 19.53C3.28993 19.24 3.28993 18.76 3.57993 18.47C3.86993 18.18 4.34992 18.18 4.63992 18.47L5.11992 18.95L6.71992 17.47C7.01993 17.19 7.49992 17.21 7.77992 17.51C8.05992 17.81 8.03993 18.29 7.73993 18.57Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20.1499 12.95H22.1699V11.51C22.1699 9.44001 20.4799 7.75 18.4099 7.75H6.92992C4.85992 7.75 3.16992 9.44001 3.16992 11.51V15.88C3.85992 15.33 4.72992 15 5.66992 15C7.87992 15 9.66992 16.79 9.66992 19C9.66992 19.75 9.45992 20.46 9.08992 21.06C8.87992 21.42 8.60993 21.74 8.29993 22H18.4099C20.4799 22 22.1699 20.31 22.1699 18.24V17.05H20.2699C19.1899 17.05 18.1999 16.26 18.1099 15.18C18.0499 14.55 18.2899 13.96 18.7099 13.55C19.0799 13.17 19.5899 12.95 20.1499 12.95Z"
            fill="currentColor"
          />
          <path
            d="M15.5199 3.95V7.74999H6.92992C4.85992 7.74999 3.16992 9.44 3.16992 11.51V7.84002C3.16992 6.65002 3.89992 5.58997 5.00992 5.16997L12.9499 2.16997C14.1899 1.70997 15.5199 2.62 15.5199 3.95Z"
            fill="currentColor"
          />
          <path
            d="M23.2297 13.9699V16.03C23.2297 16.58 22.7897 17.0299 22.2297 17.0499H20.2697C19.1897 17.0499 18.1997 16.2599 18.1097 15.1799C18.0497 14.5499 18.2897 13.9599 18.7097 13.5499C19.0797 13.1699 19.5897 12.95 20.1497 12.95H22.2297C22.7897 12.97 23.2297 13.4199 23.2297 13.9699Z"
            fill="currentColor"
          />
          <path
            d="M14.6699 12.75H7.66992C7.25992 12.75 6.91992 12.41 6.91992 12C6.91992 11.59 7.25992 11.25 7.66992 11.25H14.6699C15.0799 11.25 15.4199 11.59 15.4199 12C15.4199 12.41 15.0799 12.75 14.6699 12.75Z"
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
            d="M5.67188 15C4.73187 15 3.86188 15.33 3.17188 15.88C2.25187 16.61 1.67188 17.74 1.67188 19C1.67188 19.75 1.88188 20.46 2.25188 21.06C2.94187 22.22 4.21187 23 5.67188 23C6.68188 23 7.60188 22.63 8.30188 22C8.61188 21.74 8.88188 21.42 9.09188 21.06C9.46187 20.46 9.67188 19.75 9.67188 19C9.67188 16.79 7.88188 15 5.67188 15ZM7.74188 18.57L5.61188 20.54C5.47187 20.67 5.28187 20.74 5.10187 20.74C4.91187 20.74 4.72188 20.67 4.57188 20.52L3.58188 19.53C3.29188 19.24 3.29188 18.76 3.58188 18.47C3.87188 18.18 4.35188 18.18 4.64188 18.47L5.12187 18.95L6.72188 17.47C7.02188 17.19 7.50187 17.21 7.78188 17.51C8.06188 17.81 8.04188 18.29 7.74188 18.57Z"
            fill="currentColor"
          />
          <path
            d="M15.5219 3.95005V7.75005H14.0219V3.95005C14.0219 3.68005 13.7819 3.55005 13.6219 3.55005C13.5719 3.55005 13.5219 3.56005 13.4719 3.58005L5.54187 6.57005C5.01187 6.77005 4.67188 7.27005 4.67188 7.84005V8.51005C3.76187 9.19005 3.17188 10.28 3.17188 11.51V7.84005C3.17188 6.65005 3.90188 5.59005 5.01188 5.17005L12.9519 2.17005C13.1719 2.09005 13.4019 2.05005 13.6219 2.05005C14.6219 2.05005 15.5219 2.86005 15.5219 3.95005Z"
            fill="currentColor"
          />
          <path
            d="M22.1716 14.5V15.5C22.1716 15.77 21.9616 15.99 21.6816 16H20.2216C19.6916 16 19.2116 15.61 19.1716 15.09C19.1416 14.78 19.2616 14.49 19.4616 14.29C19.6416 14.1 19.8916 14 20.1616 14H21.6716C21.9616 14.01 22.1716 14.23 22.1716 14.5Z"
            fill="currentColor"
          />
          <path
            d="M20.1519 12.95H21.1719C21.7219 12.95 22.1719 12.5 22.1719 11.95V11.51C22.1719 9.44 20.4819 7.75 18.4119 7.75H6.93188C6.08188 7.75 5.30188 8.03 4.67188 8.51C3.76187 9.19 3.17188 10.28 3.17188 11.51V13.29C3.17188 13.67 3.57187 13.91 3.93187 13.79C4.49187 13.6 5.08188 13.5 5.67188 13.5C8.70187 13.5 11.1719 15.97 11.1719 19C11.1719 19.72 10.9819 20.51 10.6819 21.21C10.5219 21.57 10.7719 22 11.1619 22H18.4119C20.4819 22 22.1719 20.31 22.1719 18.24V18.05C22.1719 17.5 21.7219 17.05 21.1719 17.05H20.3019C19.3419 17.05 18.4219 16.46 18.1719 15.53C17.9719 14.77 18.2119 14.03 18.7119 13.55C19.0819 13.17 19.5919 12.95 20.1519 12.95ZM14.6719 12.75H9.67188C9.26188 12.75 8.92188 12.41 8.92188 12C8.92188 11.59 9.26188 11.25 9.67188 11.25H14.6719C15.0819 11.25 15.4219 11.59 15.4219 12C15.4219 12.41 15.0819 12.75 14.6719 12.75Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconEmptyWalletTick as IconComponentType).keywords = [
  "empty",
  "wallet",
  "tick",
  "lifeless",
  "void",
  "vacuous",
  "vacant",
  "empty-handed",
  "meaningless",
  "unfilled",
  "bare",
  "clean",
  "billfold",
  "notecase",
  "portfolio",
  "paper",
  "book",
  "paperwork",
  "briefcase",
  "suitcase",
  "cash",
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

export default IconEmptyWalletTick as IconComponentType;
