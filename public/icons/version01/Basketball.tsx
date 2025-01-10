import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconBasketball: FC<IconProps> = ({
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
            d="M3.33946 17.0002C6.10089 21.7831 12.2168 23.4219 16.9997 20.6605C18.9493 19.5349 20.3765 17.8519 21.1962 15.929C22.3875 13.1346 22.2958 9.83352 20.66 7.00021C19.0242 4.16689 16.2112 2.43691 13.1955 2.07137C11.1204 1.81984 8.94932 2.21434 6.99972 3.33995C2.21679 6.10137 0.578039 12.2173 3.33946 17.0002Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M16.9497 20.5737C16.9497 20.5737 16.0107 13.9826 14.0004 10.5005C11.99 7.01852 7.05018 3.4273 7.05018 3.4273M7.57711 20.818C9.05874 16.3482 16.4525 11.3936 21.8635 12.5806M16.4139 3.20947C14.926 7.63053 7.67424 12.5128 2.28857 11.4521"
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
            d="M13.4528 8.39786C15.1814 6.92862 16.5399 5.18694 17.1249 3.44861L17.1354 3.41748C18.5511 4.26284 19.7771 5.47075 20.6601 7.00014C21.5428 8.52915 21.9759 10.1944 22.0004 11.8427C20.0047 11.4114 17.8141 11.7417 15.7445 12.5218C15.4238 11.6581 15.0597 10.8349 14.6501 10.1255C14.3139 9.54316 13.9038 8.96236 13.4528 8.39786Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.33956 17.0001C4.2227 18.5298 5.44893 19.7378 6.86494 20.5832L6.86537 20.5819C7.68346 18.1139 10.0653 15.636 12.8571 13.9372C13.3432 13.6414 13.8476 13.3657 14.3649 13.1153C14.0628 12.2928 13.7247 11.5227 13.351 10.8755C13.0529 10.3591 12.6829 9.83585 12.2697 9.31987C11.9238 9.56704 11.5682 9.80283 11.2055 10.0255C8.44784 11.7186 5.09286 12.7687 2.14382 12.1879L1.99927 12.1594C2.02401 13.8071 2.45711 15.4717 3.33956 17.0001Z"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.5" : "1"}>
            <path
              d="M16.2258 13.943C18.1134 13.2241 20.0374 12.9478 21.7027 13.3131L21.9074 13.3581C21.7856 14.2423 21.5463 15.1076 21.1961 15.929C20.4717 17.6282 19.2729 19.1401 17.6585 20.2456L17.6461 20.1664C17.6158 19.9753 17.5705 19.6995 17.5099 19.3582C17.3887 18.6762 17.2059 17.7299 16.9592 16.6724C16.7602 15.8197 16.5166 14.8808 16.2258 13.943Z"
              fill="currentColor"
            />
            <path
              d="M8.31858 3.45453C8.06654 3.25522 7.86131 3.09793 7.71833 2.98993L7.69597 2.97307C9.45842 2.1305 11.3642 1.84942 13.1953 2.07137C14.0827 2.17892 14.9525 2.40461 15.7799 2.74178L15.703 2.97022C15.2258 4.38817 14.0529 5.92086 12.4746 7.26092C11.7442 6.46586 10.9739 5.72929 10.2721 5.09981C9.51489 4.42067 8.82226 3.85286 8.31858 3.45453Z"
              fill="currentColor"
            />
            <path
              d="M10.4204 8.74727C7.83379 10.3354 4.87003 11.1961 2.43341 10.7162L2.09082 10.6487C2.4601 7.95537 3.91941 5.43794 6.28139 3.79569L6.60934 4.0341L6.61138 4.03559L6.62071 4.04243L6.65975 4.07121C6.69459 4.097 6.74671 4.13585 6.81422 4.18684C6.94924 4.28883 7.14564 4.43932 7.38813 4.63108C7.87349 5.01492 8.54147 5.56255 9.27053 6.21646C9.93034 6.80826 10.6282 7.47663 11.2825 8.18106C11.0033 8.37694 10.7155 8.56609 10.4204 8.74727Z"
              fill="currentColor"
            />
            <path
              d="M16.2047 20.6631L16.2066 20.676L16.2071 20.6796L16.2596 21.048C13.6547 22.2781 10.7413 22.2858 8.22086 21.2593L8.28893 21.0539C8.95247 19.0522 11.0084 16.8179 13.6366 15.2187C14.0314 14.9784 14.4347 14.7552 14.8433 14.5512C15.0955 15.381 15.314 16.2228 15.4984 17.0133C15.7377 18.0388 15.9153 18.958 16.033 19.6206C16.0918 19.9517 16.1356 20.2181 16.1645 20.4009C16.179 20.4923 16.1898 20.5629 16.1968 20.6101L16.2047 20.6631Z"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.86494 20.5833C5.44893 19.7379 4.2227 18.5298 3.33956 17.0002C2.45711 15.4718 2.02401 13.8072 1.99927 12.1595L2.14382 12.1879C5.09286 12.7688 8.44784 11.7187 11.2055 10.0256C11.5682 9.80289 11.9238 9.5671 12.2697 9.31993C12.6829 9.83591 13.0529 10.3592 13.351 10.8755C13.7247 11.5228 14.0628 12.2928 14.3649 13.1154C13.8476 13.3657 13.3432 13.6415 12.8571 13.9373C10.0653 15.636 7.68346 18.114 6.86537 20.582L6.86494 20.5833ZM16.2598 21.048C13.6549 22.2781 10.7415 22.2858 8.22112 21.2593L8.28919 21.0539C8.95273 19.0522 11.0086 16.8179 13.6368 15.2187C14.0317 14.9784 14.435 14.7552 14.8436 14.5512C15.0958 15.381 15.3142 16.2228 15.4987 17.0133C15.738 18.0388 15.9156 18.958 16.0333 19.6206C16.0921 19.9517 16.1358 20.2181 16.1648 20.4009C16.1793 20.4923 16.19 20.5629 16.1971 20.6101L16.205 20.6631L16.2068 20.676L16.2074 20.6796L16.2598 21.048Z"
            fill="currentColor"
          />
          <path
            d="M16.2261 13.943C18.1136 13.2241 20.0377 12.9478 21.7029 13.3131L21.9077 13.3581C21.7858 14.2423 21.5465 15.1076 21.1963 15.929C20.472 17.6282 19.2732 19.1401 17.6588 20.2456L17.6463 20.1664C17.6161 19.9753 17.5708 19.6995 17.5102 19.3582C17.389 18.6762 17.2062 17.7299 16.9595 16.6724C16.7605 15.8197 16.5169 14.8808 16.2261 13.943Z"
            fill="currentColor"
          />
          <path
            d="M13.4528 8.39792C15.1814 6.92868 16.5399 5.187 17.1249 3.44867L17.1354 3.41754C18.5511 4.26291 19.7771 5.47081 20.6601 7.00021C21.5428 8.52921 21.9759 10.1944 22.0004 11.8428C20.0047 11.4114 17.8141 11.7417 15.7445 12.5218C15.4238 11.6582 15.0597 10.835 14.6501 10.1255C14.3139 9.54323 13.9038 8.96242 13.4528 8.39792Z"
            fill="currentColor"
          />
          <path
            d="M8.31884 3.45453C8.0668 3.25522 7.86156 3.09793 7.71859 2.98993L7.69623 2.97307C9.45868 2.1305 11.3645 1.84942 13.1956 2.07137C14.0829 2.17892 14.9527 2.40461 15.7801 2.74178L15.7033 2.97022C15.2261 4.38817 14.0531 5.92086 12.4749 7.26092C11.7445 6.46586 10.9742 5.72929 10.2723 5.09981C9.51514 4.42067 8.82252 3.85286 8.31884 3.45453Z"
            fill="currentColor"
          />
          <path
            d="M10.4207 8.74727C7.83405 10.3354 4.87029 11.1961 2.43367 10.7162L2.09108 10.6487C2.46036 7.95537 3.91967 5.43794 6.28165 3.79569L6.60959 4.0341L6.61164 4.03559L6.62097 4.04243L6.66001 4.07121C6.69485 4.097 6.74697 4.13585 6.81448 4.18684C6.9495 4.28883 7.1459 4.43932 7.38839 4.63108C7.87375 5.01492 8.54173 5.56255 9.27079 6.21646C9.9306 6.80826 10.6285 7.47663 11.2828 8.18106C11.0035 8.37694 10.7158 8.56609 10.4207 8.74727Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBasketball as IconComponentType).keywords = [
  "basketball",
  "basketball game",
  "football",
  "nba",
  "player",
  "team",
  "shoe",
  "balloon",
  "ball",
  "sneaker",
];

export default IconBasketball as IconComponentType;
