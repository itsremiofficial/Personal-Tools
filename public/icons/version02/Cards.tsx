import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconCards: FC<IconProps> = ({
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
            d="M2.66992 12.61H19.6699"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.6699 10.28V17.43C19.6399 20.28 18.8599 21 15.8899 21H6.44995C3.42995 21 2.66992 20.2501 2.66992 17.2701V10.28C2.66992 7.58005 3.29992 6.71005 5.66992 6.57005C5.90992 6.56005 6.16995 6.55005 6.44995 6.55005H15.8899C18.9099 6.55005 19.6699 7.30005 19.6699 10.28Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.6699 6.73V13.72C22.6699 16.42 22.0399 17.29 19.6699 17.43V10.28C19.6699 7.3 18.9099 6.55 15.8899 6.55H6.44995C6.16995 6.55 5.90992 6.56 5.66992 6.57C5.69992 3.72 6.47995 3 9.44995 3H18.8899C21.9099 3 22.6699 3.75 22.6699 6.73Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M5.91992 17.8101H7.63989"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.78027 17.8101H13.2203"
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
            d="M19.6699 10.28V17.43C19.6399 20.28 18.8599 21 15.8899 21H6.44995C3.42995 21 2.66992 20.25 2.66992 17.27V10.28C2.66992 7.58005 3.29992 6.71005 5.66992 6.57005C5.90992 6.56005 6.16995 6.55005 6.44995 6.55005H15.8899C18.9099 6.55005 19.6699 7.30005 19.6699 10.28Z"
            fill="currentColor"
          />
          <path
            d="M22.6699 6.73V13.72C22.6699 16.42 22.0399 17.29 19.6699 17.43V10.28C19.6699 7.3 18.9099 6.55 15.8899 6.55H6.44995C6.16995 6.55 5.90992 6.56 5.66992 6.57C5.69992 3.72 6.47995 3 9.44995 3H18.8899C21.9099 3 22.6699 3.75 22.6699 6.73Z"
            fill="currentColor"
          />
          <path
            d="M7.63019 18.5601H5.91016C5.50016 18.5601 5.16016 18.2201 5.16016 17.8101C5.16016 17.4001 5.50016 17.0601 5.91016 17.0601H7.63019C8.04019 17.0601 8.38019 17.4001 8.38019 17.8101C8.38019 18.2201 8.05019 18.5601 7.63019 18.5601Z"
            fill="currentColor"
          />
          <path
            d="M13.2203 18.5601H9.78027C9.37027 18.5601 9.03027 18.2201 9.03027 17.8101C9.03027 17.4001 9.37027 17.0601 9.78027 17.0601H13.2203C13.6303 17.0601 13.9703 17.4001 13.9703 17.8101C13.9703 18.2201 13.6403 18.5601 13.2203 18.5601Z"
            fill="currentColor"
          />
          <path
            d="M19.6699 11.86H2.66992V13.36H19.6699V11.86Z"
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
            d="M15.8919 6.55005H6.45188C6.17188 6.55005 5.91188 6.56005 5.67188 6.57005C3.30188 6.71005 2.67188 7.58005 2.67188 10.28V10.86C2.67188 11.41 3.12187 11.86 3.67188 11.86H18.6719C19.2219 11.86 19.6719 11.41 19.6719 10.86V10.28C19.6719 7.30005 18.9119 6.55005 15.8919 6.55005Z"
            fill="currentColor"
          />
          <path
            d="M3.67188 13.36C3.12187 13.36 2.67188 13.81 2.67188 14.36V17.27C2.67188 20.25 3.43188 21 6.45188 21H15.8919C18.8619 21 19.6419 20.28 19.6719 17.43V14.36C19.6719 13.81 19.2219 13.36 18.6719 13.36H3.67188ZM7.63188 18.56H5.92188C5.51187 18.56 5.17188 18.22 5.17188 17.81C5.17188 17.4 5.51187 17.06 5.92188 17.06H7.64187C8.05187 17.06 8.39187 17.4 8.39187 17.81C8.39187 18.22 8.05188 18.56 7.63188 18.56ZM13.2219 18.56H9.78187C9.37187 18.56 9.03187 18.22 9.03187 17.81C9.03187 17.4 9.37187 17.06 9.78187 17.06H13.2219C13.6319 17.06 13.9719 17.4 13.9719 17.81C13.9719 18.22 13.6419 18.56 13.2219 18.56Z"
            fill="currentColor"
          />
          <path
            d="M22.6715 13.33V8.08998C22.6715 4.95998 20.8815 3.59998 18.1815 3.59998H9.25149C8.49149 3.59998 7.81149 3.70998 7.21149 3.93998C6.74149 4.10998 6.32149 4.35998 5.98149 4.68998C5.80149 4.85998 5.9415 5.13998 6.20149 5.13998H17.0715C19.3215 5.13998 21.1415 6.95998 21.1415 9.20998V16.38C21.1415 16.63 21.4115 16.77 21.5915 16.59C22.2815 15.86 22.6715 14.79 22.6715 13.33Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCards as IconComponentType).keywords = [
  "cards",
  "card game",
  "slips",
  "pass",
  "cart",
  "papers",
  "postcard",
  "boards",
  "books",
  "charter",
];

export default IconCards as IconComponentType;