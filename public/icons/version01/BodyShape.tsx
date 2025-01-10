import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconBodyShape: FC<IconProps> = ({
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
            d="M20 2.00049C20 2.00049 18 6.68888 18 10.5719C18 11.8152 18.426 12.8555 19 13.8916C19.6606 15.0841 20.5171 16.2709 21.1457 17.7548C21.6446 18.9325 22 20.2973 22 22.0005"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 2.00049C4 2.00049 6 6.68888 6 10.5719C6 11.8152 5.57398 12.8555 5.00001 13.8916C4.33945 15.0841 3.48291 16.2709 2.85426 17.7548C2.35537 18.9325 2 20.2973 2 22.0005"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M6 13.0005H18"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M6 11.0005H18"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M12 22.0005C12.5 20.5005 15 17.5005 21 17.5005"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M12 22.0005C11.5 20.5005 9 17.5005 3 17.5005"
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
            d="M21.8363 17.4623C21.393 16.4158 20.8141 15.4634 20.3001 14.618C20.1159 14.3149 19.94 14.0255 19.7817 13.7505H4.21829C4.05999 14.0255 3.8841 14.3149 3.69986 14.618C3.18593 15.4634 2.60702 16.4158 2.16368 17.4623C1.63049 18.7209 1.25 20.1849 1.25 22.0005C1.25 22.4147 1.58579 22.7505 2 22.7505C2.41421 22.7505 2.75 22.4147 2.75 22.0005C2.75 20.5099 3.03996 19.3048 3.45871 18.2567C8.85291 18.4035 10.9185 21.1276 11.2885 22.2377C11.3906 22.5439 11.6772 22.7505 12 22.7505C12.3228 22.7505 12.6094 22.5439 12.7115 22.2377C13.0815 21.1276 15.1471 18.4035 20.5413 18.2567C20.96 19.3048 21.25 20.5099 21.25 22.0005C21.25 22.4147 21.5858 22.7505 22 22.7505C22.4142 22.7505 22.75 22.4147 22.75 22.0005C22.75 20.1849 22.3695 18.7209 21.8363 17.4623Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M4.68998 1.7064C4.52745 1.3254 4.08684 1.1483 3.70584 1.31083C3.3249 1.47333 3.14787 1.91405 3.31029 2.29501L3.31103 2.29675L3.31461 2.30524L3.3299 2.34183C3.34358 2.37478 3.36406 2.42459 3.39037 2.48992C3.443 2.6206 3.51891 2.81324 3.61034 3.05716C3.79335 3.54539 4.03777 4.23696 4.28208 5.04686C4.77471 6.67989 5.25012 8.74001 5.25012 10.5721C5.25012 11.1653 5.1377 11.7113 4.9425 12.2507H19.0577C18.8626 11.7113 18.7501 11.1653 18.7501 10.5721C18.7501 8.74001 19.2255 6.67989 19.7182 5.04686C19.9625 4.23696 20.2069 3.54539 20.3899 3.05716C20.4813 2.81324 20.5572 2.6206 20.6099 2.48992C20.6362 2.42459 20.6567 2.37478 20.6703 2.34183L20.6856 2.30524L20.6892 2.29675L20.69 2.29482C20.8525 1.91385 20.6754 1.47333 20.2944 1.31083C19.9134 1.1483 19.4725 1.32602 19.31 1.70702C19.31 1.70702 19.3103 1.7064 20.0001 2.00068L19.31 1.70702L19.3096 1.70807L19.3081 1.71144L19.3031 1.72326L19.285 1.76673C19.2694 1.80436 19.2469 1.85907 19.2185 1.92952C19.1618 2.0704 19.0814 2.27438 18.9853 2.53067C18.7934 3.04285 18.5378 3.76607 18.2821 4.61365C17.8011 6.20807 17.3047 8.29106 17.2543 10.2507H6.74594C6.69559 8.29106 6.19914 6.20807 5.71816 4.61365C5.46248 3.76607 5.2069 3.04285 5.01491 2.53067C4.91884 2.27438 4.83849 2.0704 4.78175 1.92952C4.75338 1.85907 4.73089 1.80436 4.71527 1.76673L4.69711 1.72326L4.69212 1.71144L4.69069 1.70806L4.68998 1.7064Z"
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
            d="M21.8363 17.4622C21.393 16.4157 20.8141 15.4633 20.3001 14.6179C20.1159 14.3148 19.94 14.0255 19.7817 13.7504H4.21829C4.05999 14.0255 3.8841 14.3148 3.69986 14.6179C3.18593 15.4633 2.60702 16.4157 2.16368 17.4622C1.63049 18.7208 1.25 20.1848 1.25 22.0004C1.25 22.4146 1.58579 22.7504 2 22.7504C2.41421 22.7504 2.75 22.4146 2.75 22.0004C2.75 20.5098 3.03996 19.3048 3.45871 18.2566C8.85291 18.4035 10.9185 21.1275 11.2885 22.2376C11.3906 22.5439 11.6772 22.7504 12 22.7504C12.3228 22.7504 12.6094 22.5439 12.7115 22.2376C13.0815 21.1275 15.1471 18.4035 20.5413 18.2566C20.96 19.3048 21.25 20.5098 21.25 22.0004C21.25 22.4146 21.5858 22.7504 22 22.7504C22.4142 22.7504 22.75 22.4146 22.75 22.0004C22.75 20.1848 22.3695 18.7208 21.8363 17.4622Z"
            fill="currentColor"
          />
          <path
            d="M4.68985 1.70616C4.52733 1.32516 4.08671 1.14806 3.70572 1.31058C3.32477 1.47309 3.14775 1.9138 3.31017 2.29476L3.3109 2.2965L3.31449 2.30499L3.32977 2.34159C3.34345 2.37454 3.36393 2.42434 3.39024 2.48967C3.44288 2.62036 3.51878 2.813 3.61022 3.05692C3.79323 3.54515 4.03764 4.23672 4.28196 5.04662C4.77458 6.67965 5.25 8.73976 5.25 10.5719C5.25 11.165 5.13757 11.7111 4.94237 12.2504H19.0576C18.8624 11.7111 18.75 11.165 18.75 10.5719C18.75 8.73976 19.2254 6.67965 19.718 5.04662C19.9624 4.23672 20.2068 3.54515 20.3898 3.05692C20.4812 2.813 20.5571 2.62036 20.6098 2.48967C20.6361 2.42434 20.6565 2.37454 20.6702 2.34159L20.6855 2.30499L20.6891 2.2965L20.6899 2.29457C20.8523 1.91361 20.6752 1.47309 20.2943 1.31058C19.9133 1.14806 19.4724 1.32578 19.3099 1.70677C19.3099 1.70677 19.3101 1.70616 20 2.00044L19.3099 1.70677L19.3094 1.70782L19.308 1.7112L19.303 1.72302L19.2849 1.76649C19.2692 1.80411 19.2467 1.85883 19.2184 1.92928C19.1616 2.07016 19.0813 2.27413 18.9852 2.53042C18.7932 3.04261 18.5376 3.76583 18.282 4.6134C17.801 6.20782 17.3045 8.29082 17.2542 10.2504H6.74582C6.69546 8.29082 6.19902 6.20782 5.71804 4.6134C5.46236 3.76583 5.20677 3.04261 5.01478 2.53042C4.91871 2.27413 4.83837 2.07016 4.78163 1.92928C4.75326 1.85883 4.73077 1.80411 4.71515 1.76649L4.69699 1.72302L4.692 1.7112L4.69056 1.70782L4.68985 1.70616Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBodyShape as IconComponentType).keywords = [
  "body",
  "shape",
  "consistence",
  "personify",
  "consistency",
  "torso",
  "trunk",
  "dead body",
  "organic structure",
  "physical structure",
  "bodily",
  "form",
  "determine",
  "pattern",
  "embodiment",
  "influence",
  "frame",
  "configuration",
  "build",
  "regulate",
];

export default IconBodyShape as IconComponentType;
