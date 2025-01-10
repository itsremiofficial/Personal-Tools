import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconBacteria: FC<IconProps> = ({
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
            opacity={duotone ? "0.5" : "1"}
            d="M2 12.0002C2 6.4774 6.47715 2.00024 12 2.00024C17.5228 2.00024 22 6.4774 22 12.0002C22 17.5231 17.5228 22.0002 12 22.0002C6.47715 22.0002 2 17.5231 2 12.0002Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M6 15.0002C6 13.3434 7.34315 12.0002 9 12.0002C10.6569 12.0002 12 13.3434 12 15.0002C12 16.6571 10.6569 18.0002 9 18.0002C7.34315 18.0002 6 16.6571 6 15.0002Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M4.5 11.5002L4.91406 10.5002"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M14.4648 7.17164C14.4648 7.17164 15.7077 7.00026 16.5862 7.87875C17.4647 8.75724 17.2933 10.0001 17.2933 10.0001"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M9.00001 9.29321C9.00001 9.29321 7.75718 9.4646 6.87869 8.5861C6.0002 7.70761 6.17158 6.46478 6.17158 6.46478"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M19 13.1365C19 13.1365 17.8379 13.6095 17.5164 14.8095C17.1948 16.0096 17.9647 17.0002 17.9647 17.0002"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M13.4209 17.7722L14.9995 19.0002"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M14.5 14.0002V12.0002"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M12 5.00024L10 5.00024"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M12.5 9.50024L11.5 8.50024"
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
            d="M6 15.0002C6 13.3434 7.34315 12.0002 9 12.0002C10.6569 12.0002 12 13.3434 12 15.0002C12 16.6571 10.6569 18.0002 9 18.0002C7.34315 18.0002 6 16.6571 6 15.0002Z"
            fill="currentColor"
          />
          <path
            d="M14.4648 7.17158C14.4648 7.17158 15.7077 7.0002 16.5862 7.87869C17.4647 8.75718 17.2933 10 17.2933 10"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M9.00001 9.29327C9.00001 9.29327 7.75718 9.46466 6.87869 8.58616C6.0002 7.70767 6.17158 6.46484 6.17158 6.46484"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M19 13.1365C19 13.1365 17.8379 13.6095 17.5164 14.8095C17.1948 16.0096 17.9647 17.0002 17.9647 17.0002"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M13.4209 17.7722L14.9995 19.0002"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2.00024C6.47715 2.00024 2 6.4774 2 12.0002C2 17.5231 6.47715 22.0002 12 22.0002C17.5228 22.0002 22 17.5231 22 12.0002C22 6.4774 17.5228 2.00024 12 2.00024ZM5.60721 10.7871C5.76567 10.4044 5.58389 9.96571 5.20118 9.80725C4.81848 9.64879 4.37978 9.83057 4.22131 10.2133L3.80725 11.2133C3.64879 11.596 3.83057 12.0347 4.21327 12.1931C4.59598 12.3516 5.03468 12.1698 5.19314 11.7871L5.60721 10.7871ZM14.5 11.2502C14.9142 11.2502 15.25 11.586 15.25 12.0002V14.0002C15.25 14.4145 14.9142 14.7502 14.5 14.7502C14.0858 14.7502 13.75 14.4145 13.75 14.0002V12.0002C13.75 11.586 14.0858 11.2502 14.5 11.2502ZM12 4.25024H10C9.58579 4.25024 9.25 4.58603 9.25 5.00024C9.25 5.41446 9.58579 5.75024 10 5.75024H12C12.4142 5.75024 12.75 5.41446 12.75 5.00024C12.75 4.58603 12.4142 4.25024 12 4.25024Z"
            fill="currentColor"
          />
          <path
            d="M12.5 9.50024L11.5 8.50024"
            strokeWidth={width}
            strokeLinecap="round"
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
            d="M12 2.00024C6.47715 2.00024 2 6.4774 2 12.0002C2 17.5231 6.47715 22.0002 12 22.0002C17.5228 22.0002 22 17.5231 22 12.0002C22 6.4774 17.5228 2.00024 12 2.00024ZM9 12.0002C7.34315 12.0002 6 13.3434 6 15.0002C6 16.6571 7.34315 18.0002 9 18.0002C10.6569 18.0002 12 16.6571 12 15.0002C12 13.3434 10.6569 12.0002 9 12.0002ZM5.20099 9.8073C5.58369 9.96576 5.76547 10.4045 5.60701 10.7872L5.19295 11.7872C5.03448 12.1699 4.59578 12.3517 4.21308 12.1932C3.83037 12.0347 3.64859 11.596 3.80705 11.2133L4.22112 10.2133C4.37958 9.83062 4.81828 9.64883 5.20099 9.8073ZM13.7219 7.27416C13.7782 7.68265 14.1536 7.96868 14.5618 7.91541C15.2243 7.87901 16.5495 8.2256 16.5495 9.90322C16.4963 10.3114 16.7823 10.6868 17.1908 10.7431C17.6011 10.7997 17.9837 10.4796 18.0403 10.0692C18.0421 10.0532 18.0442 10.0324 18.0463 10.0072C18.0505 9.95688 18.0547 9.88859 18.0562 9.80569C18.0591 9.64081 18.0515 9.41302 18.0098 9.15096C17.927 8.63099 17.7023 7.93431 17.1165 7.34848C16.5306 6.76265 15.834 6.53796 15.314 6.45516C15.0519 6.41342 14.8242 6.40581 14.6593 6.40877C14.5764 6.41026 14.5081 6.41445 14.4577 6.41864C14.4325 6.42074 14.3679 6.42799 14.3679 6.42799C13.9576 6.48458 13.6653 6.86383 13.7219 7.27416ZM9.7431 9.19065C9.79969 9.60098 9.51292 9.97949 9.10259 10.0361L9.10138 10.0362L9.10006 10.0364L9.09705 10.0368L9.08962 10.0378L9.06922 10.0402C9.05322 10.042 9.03241 10.0441 9.00721 10.0462C8.95688 10.0504 8.88859 10.0546 8.80569 10.056C8.64081 10.059 8.41302 10.0514 8.15096 10.0097C7.63099 9.92686 6.93431 9.70217 6.34848 9.11633C5.76265 8.5305 5.53796 7.83382 5.45516 7.31385C5.41342 7.05179 5.40581 6.82401 5.40877 6.65912C5.41026 6.57623 5.41445 6.50793 5.41864 6.45761C5.42074 6.43241 5.42284 6.4116 5.42463 6.39559L5.42704 6.37519L5.42799 6.36776C5.48458 5.95743 5.86383 5.66513 6.27416 5.72171C6.68265 5.77804 6.96868 6.15341 6.91542 6.5616C6.87908 7.2242 7.22578 8.5494 8.90321 8.5494C9.31141 8.49614 9.68677 8.78217 9.7431 9.19065ZM19.7363 12.993C19.8144 13.3943 19.5569 13.7831 19.1593 13.8693L19.1567 13.87C19.1478 13.8725 19.1274 13.8787 19.0983 13.8902C19.0397 13.9133 18.9494 13.9563 18.8481 14.0305C18.6557 14.1713 18.3898 14.4481 18.241 15.0035C18.0922 15.5589 18.184 15.9316 18.2802 16.1498C18.3309 16.2647 18.3876 16.3471 18.4268 16.3964C18.4463 16.4208 18.4609 16.4364 18.4672 16.443L18.4692 16.445C18.7704 16.7184 18.799 17.1839 18.5306 17.4924C18.2587 17.8049 17.785 17.8378 17.4725 17.5659L17.9647 17.0003C17.4725 17.5659 17.4729 17.5662 17.4725 17.5659L17.4711 17.5647L17.4697 17.5634L17.4665 17.5606L17.4592 17.554L17.441 17.5373C17.4274 17.5244 17.4108 17.5082 17.3918 17.4887C17.3538 17.4496 17.3058 17.3967 17.2527 17.3299C17.1467 17.1966 17.018 17.0051 16.9077 16.7549C16.6819 16.2428 16.5497 15.5202 16.7921 14.6153C17.0345 13.7104 17.5104 13.1507 17.962 12.8201C18.1827 12.6586 18.3899 12.5571 18.5483 12.4947C18.6277 12.4634 18.6957 12.4416 18.7481 12.4267C18.7744 12.4193 18.7969 12.4136 18.8151 12.4093L18.8392 12.4038L18.8488 12.4018L18.853 12.4009L18.8549 12.4006C18.8553 12.4005 18.8567 12.4002 19.0001 13.1364L18.8567 12.4002C19.2633 12.321 19.6571 12.5864 19.7363 12.993ZM12.8289 17.3117C13.0832 16.9848 13.5545 16.9259 13.8814 17.1802L15.46 18.4082C15.787 18.6625 15.8458 19.1338 15.5915 19.4607C15.3372 19.7876 14.866 19.8465 14.539 19.5922L12.9604 18.3642C12.6335 18.1099 12.5746 17.6387 12.8289 17.3117ZM15.25 12.0002C15.25 11.586 14.9142 11.2502 14.5 11.2502C14.0858 11.2502 13.75 11.586 13.75 12.0002V14.0002C13.75 14.4145 14.0858 14.7502 14.5 14.7502C14.9142 14.7502 15.25 14.4145 15.25 14.0002V12.0002ZM10 4.25024H12C12.4142 4.25024 12.75 4.58603 12.75 5.00024C12.75 5.41446 12.4142 5.75024 12 5.75024H10C9.58579 5.75024 9.25 5.41446 9.25 5.00024C9.25 4.58603 9.58579 4.25024 10 4.25024ZM12.0303 7.96991C11.7374 7.67702 11.2626 7.67702 10.9697 7.96991C10.6768 8.26281 10.6768 8.73768 10.9697 9.03057L11.9697 10.0306C12.2626 10.3235 12.7374 10.3235 13.0303 10.0306C13.3232 9.73768 13.3232 9.26281 13.0303 8.96991L12.0303 7.96991Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBacteria as IconComponentType).keywords = [
  "bacteria",
  "microbe",
  "bacterial",
  "bacteriological",
  "listeriosis",
  "blight",
  "organism",
  "germ",
  "bug",
  "lactic",
];

export default IconBacteria as IconComponentType;
