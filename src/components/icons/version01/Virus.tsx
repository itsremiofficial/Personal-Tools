import { FC } from "react";

const IconVirus: FC<IconProps> = ({
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
            d="M12.0565 19C15.9224 19.0312 19.031 15.9226 18.9998 12.0567C18.9686 8.19087 15.8094 5.03167 11.9435 5.00048C8.07765 4.96928 4.96904 8.07789 5.00023 11.9438C5.03143 15.8096 8.19062 18.9688 12.0565 19Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M18 6.00024L16.95 7.05028"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M5 5.00024L7 7.00024"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M17.0498 18.05L16.5 17.5002"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M6 19.05L7.05003 18"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M16.5 13.0002C16.5 14.1048 15.6046 15.0002 14.5 15.0002C13.3954 15.0002 12.5 14.1048 12.5 13.0002C12.5 11.8957 13.3954 11.0002 14.5 11.0002C15.6046 11.0002 16.5 11.8957 16.5 13.0002Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M11 9.00024C11 9.55253 10.5523 10.0002 10 10.0002C9.44772 10.0002 9 9.55253 9 9.00024C9 8.44796 9.44772 8.00024 10 8.00024C10.5523 8.00024 11 8.44796 11 9.00024Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <circle
            opacity={duotone ? "0.5" : "1"}
            cx="9"
            cy="13.0002"
            r="1"
            fill="currentColor"
          />
          <circle
            cx="19.5"
            cy="4.50024"
            r="1.5"
            stroke="currentColor"
            strokeWidth={width}
          />
          <circle
            cx="1.5"
            cy="1.5"
            r="1.5"
            transform="matrix(-1 0 0 1 5 2.00024)"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M2 12.0002C2 12.8287 2.67157 13.5002 3.5 13.5002C4.32843 13.5002 5 12.8287 5 12.0002C5 11.1718 4.32843 10.5002 3.5 10.5002C2.67157 10.5002 2 11.1718 2 12.0002Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <circle
            cx="1.5"
            cy="1.5"
            r="1.5"
            transform="matrix(1 0 0 -1 17.0498 21.05)"
            stroke="currentColor"
            strokeWidth={width}
          />
          <circle
            cx="4.5"
            cy="20.5002"
            r="1.5"
            transform="rotate(180 4.5 20.5002)"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M13.5 3.50024C13.5 4.32867 12.8284 5.00024 12 5.00024C11.1716 5.00024 10.5 4.32867 10.5 3.50024C10.5 2.67182 11.1716 2.00024 12 2.00024C12.8284 2.00024 13.5 2.67182 13.5 3.50024Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M19.5 13.5001C20.3284 13.5001 21 12.8285 21 12.0001C21 11.1717 20.3284 10.5001 19.5 10.5001C19.3247 10.5001 19.1564 10.5302 19 10.5855V13.4148C19.1564 13.47 19.3247 13.5001 19.5 13.5001Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M10.5852 19.0002C10.7911 19.5829 11.3468 20.0003 11.9999 20.0003C12.653 20.0003 13.2086 19.5829 13.4146 19.0002L10.5852 19.0002Z"
            stroke="currentColor"
            strokeWidth={width}
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.9998 12.0567C19.031 15.9226 15.9224 19.0312 12.0565 19C8.19062 18.9688 5.03143 15.8096 5.00023 11.9438C4.96904 8.07789 8.07765 4.96928 11.9435 5.00048C15.8094 5.03167 18.9686 8.19087 18.9998 12.0567ZM14.5 10.2502C12.9812 10.2502 11.75 11.4815 11.75 13.0002C11.75 14.519 12.9812 15.7502 14.5 15.7502C16.0188 15.7502 17.25 14.519 17.25 13.0002C17.25 11.4815 16.0188 10.2502 14.5 10.2502ZM8.25 9.00024C8.25 8.03375 9.0335 7.25024 10 7.25024C10.9665 7.25024 11.75 8.03375 11.75 9.00024C11.75 9.96674 10.9665 10.7502 10 10.7502C9.0335 10.7502 8.25 9.96674 8.25 9.00024ZM9 14.0002C9.55228 14.0002 10 13.5525 10 13.0002C10 12.448 9.55228 12.0002 9 12.0002C8.44772 12.0002 8 12.448 8 13.0002C8 13.5525 8.44772 14.0002 9 14.0002Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M13.25 13.0002C13.25 12.3099 13.8096 11.7502 14.5 11.7502C15.1904 11.7502 15.75 12.3099 15.75 13.0002C15.75 13.6906 15.1904 14.2502 14.5 14.2502C13.8096 14.2502 13.25 13.6906 13.25 13.0002Z"
            fill="currentColor"
          />
          <circle cx="19.5" cy="4.50024" r="1.5" fill="currentColor" />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M18.0508 4.88879L16.4197 6.51995C16.3968 6.5428 16.3757 6.56676 16.3564 6.59166C16.7424 6.90507 17.0952 7.25789 17.4086 7.64383C17.4335 7.62454 17.4575 7.60346 17.4803 7.58061L19.1115 5.94944C18.5953 5.81141 18.1889 5.40495 18.0508 4.88879Z"
            fill="currentColor"
          />
          <circle
            cx="1.5"
            cy="1.5"
            r="1.5"
            transform="matrix(1 0 0 -1 17.0498 21.05)"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M9.63062 18.55L9.87806 19.2502C10.1866 20.1231 11.019 20.7504 11.9999 20.7504C12.9807 20.7504 13.8132 20.1231 14.1217 19.2502L14.3384 18.6371C13.6242 18.8785 12.8566 19.0065 12.0564 19.0001C11.2049 18.9932 10.3877 18.8346 9.63062 18.55Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M5.11277 10.6307C4.92568 10.5469 4.71829 10.5002 4.5 10.5002C3.67157 10.5002 3 11.1718 3 12.0002C3 12.8287 3.67157 13.5002 4.5 13.5002C4.73401 13.5002 4.9555 13.4467 5.15287 13.3511C5.05656 12.8961 5.00412 12.4254 5.00023 11.9438C4.99661 11.4946 5.03537 11.0557 5.11277 10.6307Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M18.8633 13.4941C18.9566 13.0306 19.0037 12.5498 18.9997 12.0567C18.9954 11.5262 18.9322 11.009 18.8164 10.5114C18.8766 10.504 18.9378 10.5002 18.9999 10.5002C19.8284 10.5002 20.4999 11.1718 20.4999 12.0002C20.4999 12.8287 19.8284 13.5002 18.9999 13.5002C18.9539 13.5002 18.9083 13.4982 18.8633 13.4941Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M13.3508 5.15311C13.4464 4.95574 13.5 4.73425 13.5 4.50024C13.5 3.67182 12.8284 3.00024 12 3.00024C11.1716 3.00024 10.5 3.67182 10.5 4.50024C10.5 4.71853 10.5466 4.92593 10.6305 5.11302C11.0554 5.03561 11.4944 4.99685 11.9435 5.00048C12.4252 5.00436 12.8958 5.0568 13.3508 5.15311Z"
            fill="currentColor"
          />
          <path
            d="M17.1006 19.1615L15.8486 17.9095C16.2737 17.6361 16.6663 17.3171 17.0197 16.9592L18.1613 18.1008C17.6451 18.2389 17.2387 18.6453 17.1006 19.1615Z"
            fill="currentColor"
          />
          <circle
            cx="2"
            cy="2"
            r="2"
            transform="matrix(-1 0 0 1 6 2.00024)"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M4.78101 5.84203C5.25749 5.6397 5.63933 5.25786 5.84167 4.78137L7.53026 6.46997C7.54348 6.48318 7.55609 6.49677 7.56811 6.51069C7.17813 6.8237 6.82333 7.1785 6.51031 7.56847C6.49639 7.55645 6.48281 7.54384 6.4696 7.53063L4.78101 5.84203Z"
            fill="currentColor"
          />
          <circle
            cx="5"
            cy="20.0002"
            r="2"
            transform="rotate(180 5 20.0002)"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M5.81567 18.1736L7.08494 16.9043C7.44026 17.2604 7.8328 17.5793 8.25603 17.8545L6.8563 19.2543C6.66276 18.7731 6.28759 18.3846 5.81567 18.1736Z"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20 5.50024C20 6.32867 19.3284 7.00024 18.5 7.00024C18.3656 7.00024 18.2354 6.98258 18.1115 6.94944L17.4803 7.58061C17.4574 7.60348 17.4334 7.62457 17.4085 7.64387C18.0785 8.46888 18.5683 9.44522 18.8165 10.5114C18.8766 10.504 18.9379 10.5002 19 10.5002C19.8284 10.5002 20.5 11.1718 20.5 12.0002C20.5 12.8287 19.8284 13.5002 19 13.5002H18.8622C18.5921 14.8366 17.9434 16.0242 17.0246 16.9544L18.1613 18.1009C18.2852 18.0677 18.4154 18.05 18.5498 18.05C19.3782 18.05 20.0498 18.7216 20.0498 19.55C20.0498 20.3785 19.3782 21.05 18.5498 21.05C17.7214 21.05 17.0498 20.3785 17.0498 19.55C17.0498 19.4157 17.0675 19.2854 17.1006 19.1615L15.9697 18.0306C15.9291 17.99 15.8941 17.9459 15.8647 17.8992C15.3931 18.2045 14.8813 18.4535 14.3385 18.637L14.1218 19.2501C13.8133 20.123 12.9809 20.7502 12 20.7502C11.0191 20.7502 10.1867 20.123 9.87819 19.2501L9.63079 18.55C9.1359 18.3641 8.66673 18.1243 8.23048 17.838L6.854 19.2487C6.94815 19.4807 7 19.7344 7 20.0002C7 21.1048 6.10457 22.0002 5 22.0002C3.89543 22.0002 3 21.1048 3 20.0002C3 18.8957 3.89543 18.0002 5 18.0002C5.28826 18.0002 5.56227 18.0612 5.80984 18.171L7.06509 16.8845C6.2668 16.0782 5.65852 15.0836 5.31531 13.9755C5.2126 13.9918 5.10729 14.0002 5 14.0002C3.89543 14.0002 3 13.1048 3 12.0002C3 10.8957 3.89543 10.0002 5 10.0002C5.08605 10.0002 5.17084 10.0057 5.25403 10.0162C5.5065 9.11052 5.93829 8.28173 6.50921 7.57001L5.78115 6.84195C5.54117 6.94386 5.27717 7.00024 5 7.00024C3.89543 7.00024 3 6.10481 3 5.00024C3 3.89567 3.89543 3.00024 5 3.00024C6.10457 3.00024 7 3.89567 7 5.00024C7 5.27735 6.94364 5.54129 6.84177 5.78124L7.56989 6.50936C8.59406 5.68782 9.86066 5.15442 11.25 5.02883V4.79957C10.8016 4.54021 10.5 4.05546 10.5 3.50024C10.5 2.67182 11.1716 2.00024 12 2.00024C12.8284 2.00024 13.5 2.67182 13.5 3.50024C13.5 4.05546 13.1984 4.54021 12.75 4.79957V5.0529C14.1042 5.21895 15.3442 5.76977 16.3564 6.59173C16.3757 6.56681 16.3968 6.54282 16.4196 6.51995L17.0508 5.88878C17.0177 5.76486 17 5.63461 17 5.50024C17 4.67182 17.6716 4.00024 18.5 4.00024C19.3284 4.00024 20 4.67182 20 5.50024ZM11.75 13.0002C11.75 11.4815 12.9812 10.2502 14.5 10.2502C16.0188 10.2502 17.25 11.4815 17.25 13.0002C17.25 14.519 16.0188 15.7502 14.5 15.7502C12.9812 15.7502 11.75 14.519 11.75 13.0002ZM10.5 10.0002C11.3284 10.0002 12 9.32867 12 8.50024C12 8.44223 11.9967 8.38498 11.9903 8.32868C11.9354 7.84618 11.6515 7.43317 11.25 7.20092C11.0294 7.07329 10.7732 7.00024 10.5 7.00024C9.67157 7.00024 9 7.67182 9 8.50024C9 9.32867 9.67157 10.0002 10.5 10.0002ZM9 14.0002C9.55228 14.0002 10 13.5525 10 13.0002C10 12.448 9.55228 12.0002 9 12.0002C8.44772 12.0002 8 12.448 8 13.0002C8 13.5525 8.44772 14.0002 9 14.0002Z"
            fill="currentColor"
          />
          <path
            d="M13.25 13.0002C13.25 12.3099 13.8096 11.7502 14.5 11.7502C15.1904 11.7502 15.75 12.3099 15.75 13.0002C15.75 13.6906 15.1904 14.2502 14.5 14.2502C13.8096 14.2502 13.25 13.6906 13.25 13.0002Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconVirus as IconComponent).keywords = [
  "virus",
  "virology",
  "viral",
  "pathogen",
  "hiv",
  "hbv",
  "hpv",
  "poliovirus",
  "plague",
  "influenza",
];

export default IconVirus as IconComponent;
