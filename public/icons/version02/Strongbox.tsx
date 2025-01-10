import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconStrongbox: FC<IconProps> = ({
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
            d="M9.66992 22H15.6699C20.6699 22 22.6699 20 22.6699 15V9C22.6699 4 20.6699 2 15.6699 2H9.66992C4.66992 2 2.66992 4 2.66992 9V15C2.66992 20 4.66992 22 9.66992 22Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M15.0201 10.91C14.9201 11.62 14.5 12.22 13.92 12.58V14.56C13.92 15.25 13.36 15.81 12.67 15.81C11.98 15.81 11.42 15.25 11.42 14.56V12.58C10.84 12.22 10.42 11.62 10.32 10.91C10.3 10.8 10.29 10.68 10.29 10.56C10.29 9.04 11.7301 7.86 13.3101 8.28C14.1101 8.49 14.76 9.14 14.97 9.94C15.06 10.27 15.0701 10.6 15.0201 10.91Z"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
            />
            <path
              d="M22.6695 10.91H15.0195"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
            />
            <path
              d="M10.3199 10.91H2.66992"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
            />
          </g>
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
            d="M16.8597 2H8.48969C4.84968 2 2.67969 4.17 2.67969 7.81V16.18C2.67969 19.82 4.84968 21.99 8.48969 21.99H16.8597C20.4997 21.99 22.6697 19.82 22.6697 16.18V7.81C22.6697 4.17 20.4997 2 16.8597 2Z"
            fill="currentColor"
          />
          <path
            d="M22.6699 10.16H14.9999C14.9899 10.09 14.9899 10.01 14.9699 9.94004C14.7599 9.14004 14.1099 8.49004 13.3099 8.28004C11.8699 7.90004 10.5599 8.84004 10.3399 10.16H2.66992V11.66H10.5799C10.7799 12.04 11.0599 12.36 11.4199 12.58V14.56C11.4199 15.25 11.9799 15.81 12.6699 15.81C13.3599 15.81 13.9199 15.25 13.9199 14.56V12.58C14.2799 12.36 14.5599 12.04 14.7599 11.66H22.6699V10.16Z"
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
            d="M13.9219 12.58V14.56C13.9219 15.25 13.3619 15.81 12.6719 15.81C11.9819 15.81 11.4219 15.25 11.4219 14.56V12.58C11.0619 12.36 10.7819 12.04 10.5819 11.66H3.67188C3.12187 11.66 2.67188 12.11 2.67188 12.66V16.19C2.67188 19.4 5.27187 22 8.48187 22H16.8519C20.0719 22 22.6719 19.4 22.6719 16.19V12.66C22.6719 12.11 22.2219 11.66 21.6719 11.66H14.7619C14.5619 12.04 14.2819 12.36 13.9219 12.58Z"
            fill="currentColor"
          />
          <path
            d="M16.8619 2H8.48187C5.27187 2 2.67188 4.6 2.67188 7.81V9.16C2.67188 9.71 3.12187 10.16 3.67188 10.16H10.3419C10.5719 8.84 11.8819 7.9 13.3119 8.28C14.1119 8.49 14.7619 9.14 14.9719 9.94C14.9919 10.01 14.9919 10.09 15.0019 10.16H21.6719C22.2219 10.16 22.6719 9.71 22.6719 9.16V7.81C22.6719 4.6 20.0719 2 16.8619 2Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconStrongbox as IconComponentType).keywords = [
  "strongbox",
  "deedbox",
  "safe",
  "cashbox",
  "strongroom",
  "coffer",
  "valise",
  "chiffonier",
  "storeroom",
  "vault",
];

export default IconStrongbox as IconComponentType;
