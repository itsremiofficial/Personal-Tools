import { FC } from "react";

const IconGlobus: FC<IconProps> = ({
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
            d="M12 22.0002V20.0002"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M4 16.5626C5.88838 18.6724 8.63263 20.0002 11.687 20.0002C17.3827 20.0002 22 15.383 22 9.68724C22 6.63287 20.6722 3.88863 18.5623 2.00024"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M7 4.55287C7.58518 5.1055 8.79066 6.61601 8.93111 8.23704C9.06238 9.75227 10.0268 10.9835 11.5 11.0002C12.0662 11.0066 12.6388 10.5824 12.6373 9.99527C12.6368 9.8137 12.6079 9.62806 12.5627 9.45728C12.4998 9.21972 12.4942 8.94643 12.625 8.66686C13.0824 7.68885 13.982 7.42614 14.6949 6.89499C15.0111 6.65943 15.2995 6.41092 15.4266 6.21075C15.7777 5.65812 16.1289 4.55287 15.9533 4.00024M13.291 17.0002C13.0714 16.5865 12.764 15.5106 13.291 14.5175C13.9497 13.2761 16.1455 13.2761 16.1455 13.2761C17.837 13.2585 18.4469 12.4946 18.7334 11.8138M19 10.0002C19 13.8662 15.866 17.0002 12 17.0002C8.13401 17.0002 5 13.8662 5 10.0002C5 6.13425 8.13401 3.00024 12 3.00024C15.866 3.00024 19 6.13425 19 10.0002Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M10 22.0002H14"
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
          <circle
            opacity={duotone ? "0.5" : "1"}
            cx="12"
            cy="10.0002"
            r="7"
            fill="currentColor"
          />
          <path
            d="M9.60212 8.2134C9.47104 6.75445 8.34593 5.39498 7.79976 4.89761L7.49805 4.63957C8.71505 3.6165 10.2854 3.00024 11.9998 3.00024C13.5491 3.00024 14.9809 3.50362 16.1405 4.35574C16.3044 4.85311 15.9923 5.89235 15.6646 6.38972C15.5459 6.56987 15.2767 6.79353 14.9817 7.00554C14.3163 7.48358 13.4767 7.72002 13.0498 8.60024C12.9277 8.85186 12.9329 9.09782 12.9916 9.31162C13.0338 9.46533 13.0608 9.63241 13.0612 9.79582C13.0626 10.3243 12.5282 10.706 11.9998 10.7002C10.6248 10.6852 9.72465 9.57712 9.60212 8.2134Z"
            fill="currentColor"
          />
          <path
            d="M13.0057 14.3938C13.6974 13.0903 16.003 13.0903 16.003 13.0903C18.4053 13.0653 18.7299 11.6066 18.9468 10.8694C18.5585 14.0063 16.0948 16.5 12.9722 16.9337C12.7463 16.4585 12.4788 15.3867 13.0057 14.3938Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.0035 1.50007C18.2797 1.19142 18.7539 1.16516 19.0625 1.4414C21.3246 3.46604 22.75 6.41068 22.75 9.68725C22.75 15.4386 18.3612 20.1649 12.75 20.6998V21.2503H14C14.4142 21.2503 14.75 21.586 14.75 22.0003C14.75 22.4145 14.4142 22.7503 14 22.7503H10C9.58579 22.7503 9.25001 22.4145 9.25001 22.0003C9.25001 21.586 9.58579 21.2503 10 21.2503H11.25V20.7418C8.14923 20.6213 5.37537 19.2238 3.44116 17.0628C3.16491 16.7541 3.19118 16.28 3.49982 16.0037C3.80847 15.7275 4.28261 15.7538 4.55886 16.0624C6.31098 18.02 8.85483 19.2503 11.687 19.2503C16.9685 19.2503 21.25 14.9687 21.25 9.68725C21.25 6.85507 20.0198 4.31123 18.0622 2.5591C17.7535 2.28286 17.7272 1.80871 18.0035 1.50007Z"
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
            d="M8.38729 5.0794C8.2258 4.81195 8.05626 4.56222 7.8878 4.33484C9.04232 3.49539 10.4633 3.00024 12 3.00024C13.32 3.00024 14.5547 3.36561 15.6084 4.00072C15.5932 4.08983 15.5717 4.19078 15.5419 4.30316C15.4363 4.70228 15.2701 5.08319 15.1288 5.30555C15.0801 5.38222 14.8798 5.57804 14.5164 5.84878C14.3544 5.96948 14.1745 6.08032 13.9603 6.20835L13.886 6.25268C13.6985 6.3644 13.4839 6.49223 13.2771 6.63397C12.7891 6.96831 12.2809 7.42023 11.9391 8.15099C11.6919 8.67951 11.7089 9.19427 11.8182 9.60711C11.8539 9.74188 11.8735 9.87756 11.8738 9.99676C11.8739 10.0338 11.8594 10.093 11.7766 10.1622C11.6876 10.2366 11.5622 10.2815 11.4495 10.2802C10.3725 10.268 9.52299 9.376 9.3997 7.95295C9.306 6.87144 8.8641 5.86907 8.38729 5.0794Z"
            fill="currentColor"
          />
          <path
            d="M16.6517 14.5092C16.9162 14.5064 17.1643 14.4891 17.3969 14.4585C16.5193 15.5197 15.3346 16.3178 13.9791 16.7166C13.9326 16.3352 13.9631 15.8769 14.1879 15.4533C14.3798 15.0917 14.8657 14.8199 15.5216 14.6587C15.8229 14.5847 16.1094 14.5467 16.3222 14.5276C16.4277 14.5181 16.5125 14.5135 16.569 14.5113C16.5972 14.5102 16.6181 14.5096 16.6308 14.5094L16.6429 14.5093L16.6517 14.5092Z"
            fill="currentColor"
          />
          <path
            d="M5 10.0002C5 8.28087 5.6199 6.70628 6.64838 5.48778C6.74956 5.6313 6.85097 5.78521 6.94913 5.94778C7.35056 6.61262 7.66238 7.36391 7.72597 8.09796C7.89674 10.069 9.20746 11.9349 11.4305 11.9601C12.3923 11.971 13.5569 11.2481 13.5538 9.99258C13.5531 9.70508 13.5079 9.42493 13.4423 9.17713C13.4107 9.05785 13.4152 8.96044 13.4609 8.86272C13.6314 8.49811 13.8831 8.25522 14.2266 8.01988C14.3866 7.91027 14.5529 7.81111 14.7452 7.69638L14.8222 7.65039C15.0375 7.5217 15.283 7.37268 15.5202 7.19594C15.865 6.93902 16.3107 6.57818 16.5468 6.20647C16.7338 5.91224 16.907 5.53495 17.0412 5.14365C18.2541 6.40237 19 8.1142 19 10.0002C19 10.5326 18.9406 11.051 18.828 11.5493C18.7606 11.7489 18.6766 11.9355 18.5253 12.1318C18.2881 12.4395 17.8131 12.817 16.6342 12.8293L16.6282 12.8293L16.5995 12.8297C16.5758 12.8301 16.5432 12.831 16.5027 12.8326C16.4218 12.8358 16.3087 12.842 16.1721 12.8543C15.9008 12.8786 15.5264 12.9275 15.1206 13.0273C14.3624 13.2137 13.2498 13.6371 12.7039 14.6658C12.2731 15.4775 12.2246 16.3109 12.3216 16.993C12.215 16.9978 12.1078 17.0002 12 17.0002C8.13401 17.0002 5 13.8662 5 10.0002Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.0035 1.50007C18.2797 1.19142 18.7539 1.16516 19.0625 1.4414C21.3246 3.46604 22.75 6.41068 22.75 9.68725C22.75 15.4386 18.3612 20.1649 12.75 20.6998V21.2503H14C14.4142 21.2503 14.75 21.586 14.75 22.0003C14.75 22.4145 14.4142 22.7503 14 22.7503H10C9.58579 22.7503 9.25001 22.4145 9.25001 22.0003C9.25001 21.586 9.58579 21.2503 10 21.2503H11.25V20.7418C8.14923 20.6213 5.37537 19.2238 3.44116 17.0628C3.16491 16.7541 3.19118 16.28 3.49982 16.0037C3.80847 15.7275 4.28261 15.7538 4.55886 16.0624C6.31098 18.02 8.85483 19.2503 11.687 19.2503C16.9685 19.2503 21.25 14.9687 21.25 9.68725C21.25 6.85507 20.0198 4.31123 18.0622 2.5591C17.7535 2.28286 17.7272 1.80871 18.0035 1.50007Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconGlobus as IconComponent).keywords = [
  "globus",
  "pallidum",
  "pallidus",
  "nervi",
  "nervus",
  "internus",
  "tractus",
  "canalis",
  "nerv",
  "externus",
];

export default IconGlobus as IconComponent;
