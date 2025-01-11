import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconBroom: FC<IconProps> = ({
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
            d="M12.728 5.53562C14.2901 3.97353 16.8227 3.97345 18.3848 5.53555C19.9469 7.09765 19.9469 9.63038 18.3848 11.1925M3.57952 12.9792L2.91264 11.883C2.04059 10.1745 2.60083 7.96511 4.40773 7.01107C5.26153 6.56027 6.21846 6.13185 7.16933 5.86002C10.0288 5.04256 12.5347 5.34229 12.5347 5.34229L18.5779 11.3855C18.5779 11.3855 18.8777 13.8914 18.0602 16.7509C17.7884 17.7018 17.3599 18.6587 16.9091 19.5125C15.9551 21.3194 13.7457 21.8796 12.0373 21.0076L10.9409 20.3406C7.93352 18.5111 5.40903 15.9866 3.57952 12.9792Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M20.5061 3.41406L18.3848 5.53538"
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
            d="M22.5303 2.53033C22.8232 2.23743 22.8232 1.76256 22.5303 1.46967C22.2375 1.17678 21.7626 1.17678 21.4697 1.46967L19.0677 3.87162C19.2695 4.01476 19.462 4.17674 19.6429 4.35756C19.8235 4.53824 19.9854 4.7306 20.1285 4.93221L22.5303 2.53033Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M2.44853 11.4112L3.18962 12.6294C5.22275 15.9716 8.02819 18.777 11.3703 20.8102L12.5886 21.5514C14.4872 22.5205 16.9425 21.8979 18.0027 19.8899C18.5037 18.941 18.9798 17.8776 19.2819 16.8209C19.7699 15.1139 19.9408 13.5611 19.9945 12.4895C20.0266 11.8492 20.0426 11.529 19.8902 11.1334C19.7378 10.7378 19.4738 10.4738 18.9456 9.9457L14.1203 5.12119C13.6288 4.62976 13.383 4.38404 13.0133 4.23177C12.6435 4.07951 12.3489 4.08069 11.7597 4.08306C10.6466 4.08753 8.97556 4.20429 7.17896 4.71789C6.12226 5.01998 5.05883 5.49608 4.11001 5.99706C2.10201 7.05728 1.47943 9.51262 2.44853 11.4112Z"
            fill="currentColor"
          />
          <path
            d="M19.6428 4.35756C17.9069 2.62162 15.0924 2.62175 13.3564 4.35764L13.3186 4.39549C13.55 4.55102 13.7743 4.77521 14.1203 5.12119L18.9456 9.9457C19.2474 10.2475 19.463 10.463 19.6208 10.6662L19.6429 10.644C21.3788 8.90807 21.3788 6.09349 19.6428 4.35756Z"
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
            d="M18.2211 19.6431C18.6981 18.7396 19.1627 17.7065 19.4613 16.6623C19.8722 15.2247 20.0207 13.8751 20.0629 12.8451L18.5105 11.2926L12.7073 5.48944L11.1549 3.93701C10.1248 3.97917 8.77531 4.12767 7.33767 4.53865C6.29348 4.83716 5.26037 5.30183 4.35693 5.77885C2.10098 6.96998 1.42721 9.71071 2.49716 11.8068L2.51021 11.8324L3.20923 12.9815C5.15002 16.1718 7.82804 18.8499 11.0184 20.7907L12.1675 21.4898L12.1931 21.5028C14.2892 22.5728 17.0299 21.899 18.2211 19.6431Z"
            fill="currentColor"
          />
          <path
            d="M21.7747 3.31343C22.0751 3.01296 22.0751 2.52581 21.7747 2.22535C21.4742 1.92488 20.987 1.92488 20.6866 2.22535L19.0118 3.90018C17.3118 2.66569 14.9941 2.66575 13.2942 3.9002L14.4027 5.00866L18.9915 9.59749L20.0999 10.7059C21.3344 9.00597 21.3343 6.68821 20.0998 4.98826L21.7747 3.31343Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBroom as IconComponentType).keywords = [
  "broom",
  "sweep",
  "heather",
  "ling",
  "calluna vulgaris",
  "scots heather",
  "broomstick",
  "mop",
  "dustpan",
  "sweeper",
];

export default IconBroom as IconComponentType;