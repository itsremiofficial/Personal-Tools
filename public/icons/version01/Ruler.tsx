import { FC } from "react";

const IconRuler: FC<IconProps> = ({
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
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.04537 18.5083C2.68179 17.1448 2 16.463 2 15.6157C2 14.7685 2.68179 14.0867 4.04537 12.7231L12.7231 4.04537C14.0867 2.68179 14.7685 2 15.6157 2C16.463 2 17.1448 2.68179 18.5083 4.04537L19.9546 5.49167C21.3182 6.85525 22 7.53704 22 8.38426C22 9.23148 21.3182 9.91327 19.9546 11.2769L11.2769 19.9546C9.91327 21.3182 9.23148 22 8.38426 22C7.53704 22 6.85525 21.3182 5.49167 19.9546L4.04537 18.5083Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M8.46448 8.46448L9.87869 9.87869"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M12.7072 4.2218L14.1214 5.63602"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M4.2218 12.7072L5.63602 14.1214"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M6.34314 10.5858L8.46446 12.7071"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M10.5858 6.34314L12.7071 8.46446"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
        </svg>
      ) : duotone ? (
        <svg
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M2 15.6157C2 16.463 2.68179 17.1448 4.04537 18.5083L5.49167 19.9546C6.85525 21.3182 7.53704 22 8.38426 22C9.23148 22 9.91327 21.3182 11.2769 19.9546L19.9546 11.2769C21.3182 9.91327 22 9.23148 22 8.38426C22 7.53704 21.3182 6.85525 19.9546 5.49167L18.5083 4.04537C17.1448 2.68179 16.463 2 15.6157 2C14.8623 2 14.2396 2.53926 13.1519 3.61778L12.1026 4.66595L11.0299 5.73861L9.98125 6.78726L8.90859 7.85993L7.85993 8.90859L6.78727 9.98125L5.73861 11.0299L4.66595 12.1026L3.61778 13.1519C2.53926 14.2396 2 14.8623 2 15.6157Z"
            fill="currentColor"
          />
          <path
            d="M13.2377 3.69124C13.2107 3.66423 13.1821 3.63971 13.1523 3.61768L12.103 4.66584C12.1251 4.6959 12.1498 4.72469 12.177 4.7519L13.5912 6.16612C13.8841 6.45901 14.359 6.45901 14.6519 6.16612C14.9448 5.87322 14.9448 5.39835 14.6519 5.10546L13.2377 3.69124Z"
            fill="currentColor"
          />
          <path
            d="M11.1164 5.81256C11.0891 5.78535 11.0604 5.76066 11.0303 5.73851L9.98164 6.78716C10.0038 6.81722 10.0285 6.84601 10.0557 6.87322L12.177 8.99454C12.4699 9.28744 12.9448 9.28744 13.2377 8.99454C13.5306 8.70165 13.5306 8.22678 13.2377 7.93388L11.1164 5.81256Z"
            fill="currentColor"
          />
          <path
            d="M8.99503 7.93388C8.96782 7.90667 8.93903 7.88198 8.90897 7.85983L7.86031 8.90848C7.88247 8.93854 7.90716 8.96733 7.93437 8.99454L9.34859 10.4088C9.64148 10.7017 10.1164 10.7017 10.4092 10.4088C10.7021 10.1159 10.7021 9.64099 10.4092 9.3481L8.99503 7.93388Z"
            fill="currentColor"
          />
          <path
            d="M6.87371 10.0552C6.8465 10.028 6.81771 10.0033 6.78765 9.98115L5.73899 11.0298C5.76115 11.0599 5.78584 11.0886 5.81305 11.1159L7.93437 13.2372C8.22726 13.5301 8.70214 13.5301 8.99503 13.2372C9.28792 12.9443 9.28792 12.4694 8.99503 12.1765L6.87371 10.0552Z"
            fill="currentColor"
          />
          <path
            d="M4.75239 12.1765C4.72518 12.1493 4.69639 12.1246 4.66633 12.1025L3.61816 13.1518C3.6402 13.1816 3.66472 13.2102 3.69173 13.2372L5.10594 14.6514C5.39884 14.9443 5.87371 14.9443 6.16661 14.6514C6.4595 14.3585 6.4595 13.8836 6.16661 13.5907L4.75239 12.1765Z"
            fill="currentColor"
          />
        </svg>
      ) : (
        <svg
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 15.6157C2 16.463 2.68179 17.1448 4.04537 18.5083L5.49167 19.9546C6.85525 21.3182 7.53704 22 8.38426 22C9.23148 22 9.91327 21.3182 11.2769 19.9546L19.9546 11.2769C21.3182 9.91327 22 9.23148 22 8.38426C22 7.53704 21.3182 6.85525 19.9546 5.49167L18.5083 4.04537C17.1448 2.68179 16.463 2 15.6157 2C14.8623 2 14.2396 2.53926 13.1519 3.61778C13.1817 3.63981 13.2103 3.66433 13.2373 3.69135L14.6515 5.10556C14.9444 5.39846 14.9444 5.87333 14.6515 6.16622C14.3586 6.45912 13.8837 6.45912 13.5908 6.16622L12.1766 4.75201C12.1494 4.7248 12.1247 4.69601 12.1026 4.66595L11.0299 5.73861C11.06 5.76077 11.0888 5.78545 11.116 5.81267L13.2373 7.93399C13.5302 8.22688 13.5302 8.70176 13.2373 8.99465C12.9444 9.28754 12.4695 9.28754 12.1766 8.99465L10.0553 6.87333C10.0281 6.84612 10.0034 6.81733 9.98125 6.78726L8.90859 7.85993C8.93865 7.88209 8.96744 7.90678 8.99465 7.93399L10.4089 9.3482C10.7018 9.6411 10.7018 10.116 10.4089 10.4089C10.116 10.7018 9.6411 10.7018 9.3482 10.4089L7.93399 8.99465C7.90678 8.96744 7.88209 8.93865 7.85993 8.90859L6.78727 9.98125C6.81733 10.0034 6.84612 10.0281 6.87333 10.0553L8.99465 12.1766C9.28754 12.4695 9.28754 12.9444 8.99465 13.2373C8.70176 13.5302 8.22688 13.5302 7.93399 13.2373L5.81267 11.116C5.78545 11.0888 5.76077 11.06 5.73861 11.0299L4.66595 12.1026C4.69601 12.1247 4.7248 12.1494 4.75201 12.1766L6.16622 13.5908C6.45912 13.8837 6.45912 14.3586 6.16622 14.6515C5.87333 14.9444 5.39846 14.9444 5.10556 14.6515L3.69135 13.2373C3.66433 13.2103 3.63981 13.1817 3.61778 13.1519C2.53926 14.2396 2 14.8623 2 15.6157Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconRuler as IconComponent).keywords = [
  "ruler",
  "rule",
  "ndp",
  "head",
  "roi",
  "officer",
  "leadership",
  "boss",
  "leader",
  "administrator",
];

export default IconRuler as IconComponent;
