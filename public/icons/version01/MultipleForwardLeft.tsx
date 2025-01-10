import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconMultipleForwardLeft: FC<IconProps> = ({
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
            d="M11.3357 5.47968L7.36344 9.01061C5.79482 10.4049 5.0105 11.1021 5.0105 12.0002C5.0105 12.8984 5.79481 13.5955 7.36344 14.9899L11.3357 18.5208C12.0517 19.1573 12.4098 19.4755 12.7049 19.3429C13.0001 19.2104 13.0001 18.7314 13.0001 17.7734V15.4288C16.6001 15.4288 20.5001 17.1431 22.0001 20.0002C22.0001 10.8574 16.6668 8.57167 13.0001 8.57167V6.22709C13.0001 5.26909 13.0001 4.7901 12.7049 4.65754C12.4098 4.52499 12.0517 4.84322 11.3357 5.47968Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M8.46129 4.50024L3.24509 9.34386C2.45098 10.0813 1.99976 11.116 1.99976 12.1997C1.99976 13.342 2.50097 14.4269 3.37087 15.1673L8.46129 19.5002"
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
            d="M12.475 5.18365L7.49717 9.60839C6.56659 10.4356 6.1013 10.8492 5.92983 11.3375C5.77925 11.7664 5.77925 12.2338 5.92983 12.6627C6.1013 13.151 6.56659 13.5646 7.49717 14.3918L12.475 18.8166C12.8973 19.1919 13.1085 19.3796 13.2878 19.3863C13.4436 19.3922 13.5932 19.325 13.6924 19.2047C13.8065 19.0662 13.8065 18.7836 13.8065 18.2186V15.4287C16.2346 15.4287 18.7991 16.2085 20.6718 17.5929C21.6467 18.3136 22.1341 18.674 22.3198 18.6597C22.5008 18.6459 22.6156 18.5752 22.7095 18.4199C22.8058 18.2605 22.7208 17.7626 22.5506 16.7668C21.4456 10.3007 16.9956 8.57153 13.8065 8.57153V5.78158C13.8065 5.21656 13.8065 4.93406 13.6924 4.79555C13.5932 4.67523 13.4436 4.60804 13.2878 4.61388C13.1085 4.62059 12.8973 4.80828 12.475 5.18365Z"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.5" : "1"}>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.81753 3.98991C9.53568 3.68638 9.06113 3.6688 8.7576 3.95065L3.54139 8.79427C2.59445 9.67357 2.0564 10.9074 2.0564 12.1997C2.0564 13.5619 2.65407 14.8555 3.69138 15.7384L8.7818 20.0714C9.09722 20.3398 9.57057 20.3018 9.83905 19.9864C10.1075 19.671 10.0695 19.1976 9.75406 18.9291L4.66364 14.5962C3.96116 13.9983 3.5564 13.1222 3.5564 12.1997C3.5564 11.3246 3.92078 10.4889 4.56207 9.89346L9.77827 5.04984C10.0818 4.76799 10.0994 4.29344 9.81753 3.98991Z"
              fill="currentColor"
            />
          </g>
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
            d="M12.4751 5.1838L7.49731 9.60854C6.56674 10.4357 6.10145 10.8493 5.92997 11.3377C5.77939 11.7666 5.77939 12.2339 5.92997 12.6628C6.10145 13.1512 6.56674 13.5648 7.49731 14.392L12.4751 18.8167C12.8974 19.1921 13.1086 19.3798 13.2879 19.3865C13.4437 19.3923 13.5934 19.3251 13.6925 19.2048C13.8066 19.0663 13.8066 18.7838 13.8066 18.2188V15.4288C16.2347 15.4288 18.7993 16.2087 20.6719 17.593C21.6468 18.3137 22.1343 18.6741 22.3199 18.6599C22.5009 18.646 22.6158 18.5753 22.7097 18.42C22.806 18.2607 22.7209 17.7628 22.5507 16.767C21.4458 10.3008 16.9958 8.57168 13.8066 8.57168V5.78172C13.8066 5.21671 13.8066 4.9342 13.6925 4.7957C13.5934 4.67537 13.4437 4.60819 13.2879 4.61402C13.1086 4.62073 12.8974 4.80842 12.4751 5.1838Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.81777 3.98991C9.53592 3.68638 9.06137 3.6688 8.75784 3.95065L3.54163 8.79427C2.5947 9.67357 2.05664 10.9074 2.05664 12.1997C2.05664 13.5619 2.65432 14.8555 3.69163 15.7384L8.78205 20.0714C9.09747 20.3398 9.57081 20.3018 9.8393 19.9864C10.1078 19.671 10.0697 19.1976 9.75431 18.9291L4.66389 14.5962C3.9614 13.9983 3.55664 13.1222 3.55664 12.1997C3.55664 11.3246 3.92102 10.4889 4.56231 9.89346L9.77852 5.04984C10.082 4.76799 10.0996 4.29344 9.81777 3.98991Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMultipleForwardLeft as IconComponentType).keywords = [
  "multiple",
  "forward",
  "left",
  "manifold",
  "twofold",
  "duple",
  "dual",
  "double",
  "bigeminal",
  "triune",
  "triple",
  "ternary",
  "frontwards",
  "ahead",
  "frontward",
  "forrader",
  "front",
  "forth",
  "onwards",
  "onward",
  "advancing",
  "left-hand",
  "left-handed",
  "left over",
  "near",
  "leftover",
  "nigh",
  "remaining",
  "leftfield",
  "odd",
];

export default IconMultipleForwardLeft as IconComponentType;
