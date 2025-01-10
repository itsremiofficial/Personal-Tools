import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconCondicioner: FC<IconProps> = ({
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
            d="M2 7.57155C2 5.15744 2 3.95038 2.65451 3.12965C2.79456 2.95403 2.9539 2.79469 3.12953 2.65463C3.95025 2.00012 5.15731 2.00012 7.57143 2.00012H16.4286C18.8427 2.00012 20.0497 2.00012 20.8705 2.65463C21.0461 2.79469 21.2054 2.95403 21.3455 3.12965C22 3.95038 22 5.15743 22 7.57155C22 10.7904 22 12.3998 21.1273 13.4941C20.9406 13.7283 20.7281 13.9407 20.494 14.1274C19.3997 15.0001 17.7903 15.0001 14.5714 15.0001H9.42857C6.20975 15.0001 4.60034 15.0001 3.50604 14.1274C3.27187 13.9407 3.05942 13.7283 2.87267 13.4941C2 12.3998 2 10.7904 2 7.57155Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M7.00008 17.5001L6.69345 17.9601C6.30444 18.5436 6.43904 19.3293 7.00008 19.7501C7.56111 20.1709 7.69571 20.9567 7.3067 21.5402L7.00008 22.0001M12.0001 17.5001L11.6935 17.9601C11.3044 18.5436 11.439 19.3293 12.0001 19.7501C12.5611 20.1709 12.6957 20.9567 12.3067 21.5402L12.0001 22.0001M17.0001 17.5001L16.6935 17.9601C16.3044 18.5436 16.439 19.3293 17.0001 19.7501C17.5611 20.1709 17.6957 20.9567 17.3067 21.5402L17.0001 22.0001"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M18.0001 14.5001C18.0001 14.0355 18.0001 13.8031 17.9616 13.6099C17.8038 12.8166 17.1836 12.1964 16.3902 12.0386C16.197 12.0001 15.9647 12.0001 15.5001 12.0001H9.00005C8.06817 12.0001 7.60223 12.0001 7.23468 12.1524C6.74463 12.3554 6.35528 12.7447 6.15229 13.2348C6.03009 13.5298 6.00598 13.8882 6.00122 14.5001"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M6 8.50012H18"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M6 6.00012H18"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6 2.00012H18C19.8856 2.00012 20.8284 2.00012 21.4142 2.58591C22 3.17169 22 4.1145 22 6.00012V9.00012C22 11.8285 22 13.2428 21.1213 14.1214C20.5902 14.6526 19.8634 14.8626 18.7469 14.9457C18.7417 14.277 18.7273 13.5438 18.6884 13.2543C18.6223 12.7626 18.4732 12.2914 18.091 11.9091C17.7087 11.5269 17.2375 11.3778 16.7458 11.3117C16.2871 11.2501 15.7142 11.2501 15.0494 11.2501H8.95063C8.28576 11.2501 7.7129 11.2501 7.25416 11.3117C6.76252 11.3778 6.29126 11.5269 5.90901 11.9091C5.52676 12.2914 5.37771 12.7626 5.31161 13.2543C5.27268 13.5438 5.25834 14.277 5.25306 14.9457C4.13657 14.8626 3.4098 14.6526 2.87868 14.1214C2 13.2428 2 11.8285 2 9.00012V6.00012C2 4.1145 2 3.17169 2.58579 2.58591C3.17157 2.00012 4.11438 2.00012 6 2.00012ZM5.25 8.50012C5.25 8.08591 5.58579 7.75012 6 7.75012H18C18.4142 7.75012 18.75 8.08591 18.75 8.50012C18.75 8.91434 18.4142 9.25012 18 9.25012H6C5.58579 9.25012 5.25 8.91434 5.25 8.50012ZM5.25 6.00012C5.25 5.58591 5.58579 5.25012 6 5.25012H18C18.4142 5.25012 18.75 5.58591 18.75 6.00012C18.75 6.41434 18.4142 6.75012 18 6.75012H6C5.58579 6.75012 5.25 6.41434 5.25 6.00012Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M18.7469 14.9457H5.25305C5.25833 14.277 5.27268 13.5438 5.3116 13.2543C5.3777 12.7626 5.52676 12.2914 5.90901 11.9091C6.29125 11.5269 6.76252 11.3778 7.25415 11.3117C7.7129 11.2501 8.28576 11.2501 8.95062 11.2501L15.0494 11.2501C15.7142 11.2501 16.2871 11.2501 16.7458 11.3117C17.2375 11.3778 17.7087 11.5269 18.091 11.9091C18.4732 12.2914 18.6223 12.7626 18.6884 13.2543C18.7273 13.5438 18.7417 14.277 18.7469 14.9457Z"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.5" : "1"}>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.83521 16.8295C7.20569 17.0147 7.35586 17.4652 7.17062 17.8357L6.98684 18.2032C6.94237 18.2922 6.9598 18.3996 7.03013 18.47C7.55699 18.9968 7.68761 19.8017 7.35439 20.4682L7.17062 20.8357C6.98537 21.2062 6.53487 21.3563 6.16439 21.1711C5.7939 20.9859 5.64373 20.5354 5.82898 20.1649L6.01275 19.7973C6.05722 19.7084 6.03979 19.6009 5.96947 19.5306C5.4426 19.0038 5.31198 18.1989 5.6452 17.5324L5.82898 17.1649C6.01422 16.7944 6.46472 16.6442 6.83521 16.8295Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.8352 16.8295C18.2057 17.0147 18.3559 17.4652 18.1706 17.8357L17.9868 18.2032C17.9424 18.2922 17.9598 18.3996 18.0301 18.47C18.557 18.9968 18.6876 19.8017 18.3544 20.4682L18.1706 20.8357C17.9854 21.2062 17.5349 21.3563 17.1644 21.1711C16.7939 20.9859 16.6437 20.5354 16.829 20.1649L17.0127 19.7973C17.0572 19.7084 17.0398 19.6009 16.9695 19.5306C16.4426 19.0038 16.312 18.1989 16.6452 17.5324L16.829 17.1649C17.0142 16.7944 17.4647 16.6442 17.8352 16.8295Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.4159 16.8762C12.7606 17.1059 12.8537 17.5716 12.6239 17.9162L12.3173 18.3762C12.1491 18.6285 12.2073 18.9683 12.4499 19.1502C13.3294 19.8098 13.5404 21.0416 12.9305 21.9563L12.6239 22.4162C12.3942 22.7609 11.9285 22.854 11.5839 22.6242C11.2392 22.3945 11.1461 21.9288 11.3758 21.5842L11.6825 21.1242C11.8507 20.8719 11.7925 20.5322 11.5499 20.3502C10.6704 19.6906 10.4594 18.4588 11.0692 17.5441L11.3758 17.0842C11.6056 16.7395 12.0713 16.6464 12.4159 16.8762Z"
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
            d="M6.83521 16.8295C7.20569 17.0147 7.35586 17.4652 7.17062 17.8357L6.98684 18.2032C6.94237 18.2922 6.9598 18.3996 7.03013 18.47C7.55699 18.9968 7.68761 19.8017 7.35439 20.4682L7.17062 20.8357C6.98537 21.2062 6.53487 21.3563 6.16439 21.1711C5.7939 20.9859 5.64373 20.5354 5.82897 20.1649L6.01275 19.7973C6.05722 19.7084 6.03979 19.6009 5.96947 19.5306C5.4426 19.0038 5.31198 18.1989 5.6452 17.5324L5.82897 17.1649C6.01422 16.7944 6.46472 16.6442 6.83521 16.8295Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.8352 16.8295C18.2057 17.0147 18.3559 17.4652 18.1706 17.8357L17.9868 18.2032C17.9424 18.2922 17.9598 18.3996 18.0301 18.47C18.557 18.9968 18.6876 19.8017 18.3544 20.4682L18.1706 20.8357C17.9854 21.2062 17.5349 21.3563 17.1644 21.1711C16.7939 20.9859 16.6437 20.5354 16.829 20.1649L17.0127 19.7973C17.0572 19.7084 17.0398 19.6009 16.9695 19.5306C16.4426 19.0038 16.312 18.1989 16.6452 17.5324L16.829 17.1649C17.0142 16.7944 17.4647 16.6442 17.8352 16.8295Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.4159 16.8762C12.7606 17.1059 12.8537 17.5716 12.6239 17.9162L12.3173 18.3762C12.1491 18.6285 12.2073 18.9683 12.4499 19.1502C13.3294 19.8098 13.5404 21.0416 12.9305 21.9563L12.6239 22.4162C12.3942 22.7609 11.9285 22.854 11.5839 22.6242C11.2392 22.3945 11.1461 21.9288 11.3758 21.5842L11.6825 21.1242C11.8507 20.8719 11.7925 20.5322 11.5499 20.3502C10.6704 19.6906 10.4594 18.4588 11.0692 17.5441L11.3758 17.0842C11.6056 16.7395 12.0713 16.6464 12.4159 16.8762Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6 2.00012H18C19.8856 2.00012 20.8284 2.00012 21.4142 2.58591C22 3.17169 22 4.1145 22 6.00012V9.00012C22 11.8285 22 13.2428 21.1213 14.1214C20.5902 14.6526 19.8634 14.8626 18.7469 14.9457C18.7417 14.277 18.7273 13.5438 18.6884 13.2543C18.6223 12.7626 18.4732 12.2914 18.091 11.9091C17.7087 11.5269 17.2375 11.3778 16.7458 11.3117C16.2871 11.2501 15.7142 11.2501 15.0494 11.2501H8.95063C8.28576 11.2501 7.7129 11.2501 7.25416 11.3117C6.76252 11.3778 6.29126 11.5269 5.90901 11.9091C5.52676 12.2914 5.37771 12.7626 5.31161 13.2543C5.27268 13.5438 5.25834 14.277 5.25306 14.9457C4.13657 14.8626 3.4098 14.6526 2.87868 14.1214C2 13.2428 2 11.8285 2 9.00012V6.00012C2 4.1145 2 3.17169 2.58579 2.58591C3.17157 2.00012 4.11438 2.00012 6 2.00012ZM5.25 8.50012C5.25 8.08591 5.58579 7.75012 6 7.75012H18C18.4142 7.75012 18.75 8.08591 18.75 8.50012C18.75 8.91434 18.4142 9.25012 18 9.25012H6C5.58579 9.25012 5.25 8.91434 5.25 8.50012ZM5.25 6.00012C5.25 5.58591 5.58579 5.25012 6 5.25012H18C18.4142 5.25012 18.75 5.58591 18.75 6.00012C18.75 6.41434 18.4142 6.75012 18 6.75012H6C5.58579 6.75012 5.25 6.41434 5.25 6.00012Z"
            fill="currentColor"
          />
          <path
            d="M16 15.0001H8C7.54957 15.0001 7.135 15.0001 6.75275 14.9966C6.75717 14.3478 6.76862 13.6744 6.79823 13.4542C6.84197 13.1288 6.91258 13.0269 6.96967 12.9698C7.02676 12.9127 7.12872 12.8421 7.45403 12.7984C7.80091 12.7517 8.27169 12.7501 9 12.7501H15C15.7283 12.7501 16.1991 12.7517 16.546 12.7984C16.8713 12.8421 16.9732 12.9127 17.0303 12.9698C17.0874 13.0269 17.158 13.1288 17.2018 13.4542C17.2314 13.6744 17.2428 14.3478 17.2473 14.9966C16.865 15.0001 16.4504 15.0001 16 15.0001Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCondicioner as IconComponentType).keywords = ["condicioner"];

export default IconCondicioner as IconComponentType;
