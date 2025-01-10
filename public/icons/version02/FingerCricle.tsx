import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconFingerCricle: FC<IconProps> = ({
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
            d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.67 14.8799C11.76 14.8799 11.02 14.1399 11.02 13.2299V10.7599C11.02 9.84989 11.76 9.10986 12.67 9.10986C13.58 9.10986 14.32 9.84989 14.32 10.7599V13.2299C14.32 14.1399 13.58 14.8799 12.67 14.8799Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17.6499 13.4702C17.4499 16.0502 15.2899 18.0702 12.6699 18.0702C9.90992 18.0702 7.66992 15.8302 7.66992 13.0702V10.9302C7.66992 8.17018 9.90992 5.93018 12.6699 5.93018C15.2599 5.93018 17.3899 7.90017 17.6399 10.4202"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
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
            d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z"
            fill="currentColor"
          />
          <path
            d="M12.67 9.87012C12.18 9.87012 11.77 10.2701 11.77 10.7701V13.2401C11.77 13.7401 12.17 14.1401 12.67 14.1401C13.17 14.1401 13.57 13.7401 13.57 13.2401V10.7701C13.57 10.2701 13.16 9.87012 12.67 9.87012Z"
            fill="currentColor"
          />
          <path
            d="M12.6699 17.5502C10.0499 17.5502 7.91992 15.4202 7.91992 12.8002V11.2002C7.91992 8.5802 10.0499 6.4502 12.6699 6.4502C15.2899 6.4502 17.4199 8.5802 17.4199 11.2002V12.8002C17.4199 15.4202 15.2899 17.5502 12.6699 17.5502ZM12.6699 7.9502C10.8799 7.9502 9.41992 9.4102 9.41992 11.2002V12.8002C9.41992 14.5902 10.8799 16.0502 12.6699 16.0502C14.4599 16.0502 15.9199 14.5902 15.9199 12.8002V11.2002C15.9199 9.4102 14.4599 7.9502 12.6699 7.9502Z"
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
            d="M12.6699 7.9502C10.8799 7.9502 9.41992 9.4102 9.41992 11.2002V12.8002C9.41992 14.5902 10.8799 16.0502 12.6699 16.0502C14.4599 16.0502 15.9199 14.5902 15.9199 12.8002V11.2002C15.9199 9.4102 14.4599 7.9502 12.6699 7.9502ZM13.5699 13.2402C13.5699 13.7402 13.1699 14.1402 12.6699 14.1402C12.1699 14.1402 11.7699 13.7402 11.7699 13.2402V10.7702C11.7699 10.2802 12.1699 9.8702 12.6699 9.8702C13.1699 9.8702 13.5699 10.2702 13.5699 10.7702V13.2402Z"
            fill="currentColor"
          />
          <path
            d="M12.6699 2C7.14992 2 2.66992 6.48 2.66992 12C2.66992 17.52 7.14992 22 12.6699 22C18.1899 22 22.6699 17.52 22.6699 12C22.6699 6.48 18.1899 2 12.6699 2ZM17.4199 12.8C17.4199 15.42 15.2899 17.55 12.6699 17.55C10.0499 17.55 7.91992 15.42 7.91992 12.8V11.2C7.91992 8.58 10.0499 6.45 12.6699 6.45C15.2899 6.45 17.4199 8.58 17.4199 11.2V12.8Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconFingerCricle as IconComponentType).keywords = [
  "finger",
  "cricle",
  "thumb",
  "feel",
  "fingerbreadth",
  "digit",
  "hand",
  "wrist",
  "nail",
  "epi",
  "bleed",
];

export default IconFingerCricle as IconComponentType;
