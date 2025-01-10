import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconCart5: FC<IconProps> = ({
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
            d="M3.55514 14.2577C2.83668 10.9048 2.47745 9.22842 3.378 8.11446C4.27855 7.00049 5.99302 7.00049 9.42196 7.00049H14.5781C18.0071 7.00049 19.7215 7.00049 20.6221 8.11446C21.5226 9.22842 21.1634 10.9048 20.4449 14.2577L20.0164 16.2577C19.5294 18.5302 19.2859 19.6665 18.4608 20.3335C17.6357 21.0005 16.4737 21.0005 14.1495 21.0005H9.85053C7.52639 21.0005 6.36432 21.0005 5.53925 20.3335C4.71418 19.6665 4.47069 18.5302 3.98372 16.2577L3.55514 14.2577Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M8 12.0005H16"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M10 15.0005H14"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.6" : "1"}
            d="M18 9.00049L15 3.00049"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.6" : "1"}
            d="M6 9.00049L9 3.00049"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
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
            d="M3.55514 14.2577C2.83668 10.9048 2.47745 9.22842 3.378 8.11446C4.27855 7.00049 5.99302 7.00049 9.42196 7.00049H14.5781C18.0071 7.00049 19.7215 7.00049 20.6221 8.11446C21.5226 9.22842 21.1634 10.9048 20.4449 14.2577L20.0164 16.2577C19.5294 18.5302 19.2859 19.6665 18.4608 20.3335C17.6357 21.0005 16.4737 21.0005 14.1495 21.0005H9.85053C7.52639 21.0005 6.36432 21.0005 5.53925 20.3335C4.71418 19.6665 4.47069 18.5302 3.98372 16.2577L3.55514 14.2577Z"
            fill="currentColor"
          />
          <path
            d="M8 11.2505C7.58579 11.2505 7.25 11.5863 7.25 12.0005C7.25 12.4147 7.58579 12.7505 8 12.7505H16C16.4142 12.7505 16.75 12.4147 16.75 12.0005C16.75 11.5863 16.4142 11.2505 16 11.2505H8Z"
            fill="currentColor"
          />
          <path
            d="M9.25 15.0005C9.25 14.5863 9.58579 14.2505 10 14.2505H14C14.4142 14.2505 14.75 14.5863 14.75 15.0005C14.75 15.4147 14.4142 15.7505 14 15.7505H10C9.58579 15.7505 9.25 15.4147 9.25 15.0005Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.6645 2.32971C15.035 2.14447 15.4855 2.29464 15.6707 2.66512L18.6707 8.66512C18.856 9.0356 18.7058 9.48611 18.3353 9.67135C17.9648 9.85659 17.5143 9.70643 17.3291 9.33594L14.3291 3.33594C14.1439 2.96546 14.294 2.51495 14.6645 2.32971Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.33549 2.32971C8.96501 2.14447 8.5145 2.29464 8.32926 2.66512L5.32926 8.66512C5.14402 9.0356 5.29419 9.48611 5.66467 9.67135C6.03515 9.85659 6.48566 9.70643 6.6709 9.33594L9.6709 3.33594C9.85614 2.96546 9.70597 2.51495 9.33549 2.32971Z"
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
            d="M14.6646 2.32971C15.0351 2.14447 15.4856 2.29464 15.6708 2.66512L17.872 7.06744C19.2251 7.17139 20.0742 7.4368 20.6221 8.1145C21.5226 9.22847 21.1634 10.9049 20.4449 14.2577L20.0164 16.2577C19.5294 18.5303 19.2859 19.6665 18.4608 20.3335C17.6357 21.0005 16.4737 21.0005 14.1495 21.0005H9.85053C7.52639 21.0005 6.36432 21.0005 5.53925 20.3335C4.71418 19.6665 4.47069 18.5303 3.98372 16.2577L3.55514 14.2577C2.83668 10.9049 2.47745 9.22847 3.378 8.1145C3.92585 7.43681 4.77494 7.1714 6.12802 7.06745L8.32918 2.66512C8.51442 2.29464 8.96493 2.14447 9.33541 2.32971C9.70589 2.51495 9.85606 2.96546 9.67082 3.33594L7.83589 7.0058C8.31911 7.00053 8.84638 7.00053 9.42196 7.00053H14.5781C15.1537 7.00053 15.6809 7.00053 16.1641 7.0058L14.3292 3.33594C14.1439 2.96546 14.2941 2.51495 14.6646 2.32971ZM7.25 12.0005C7.25 11.5863 7.58579 11.2505 8 11.2505H16C16.4142 11.2505 16.75 11.5863 16.75 12.0005C16.75 12.4147 16.4142 12.7505 16 12.7505H8C7.58579 12.7505 7.25 12.4147 7.25 12.0005ZM10 14.2505C9.58579 14.2505 9.25 14.5863 9.25 15.0005C9.25 15.4147 9.58579 15.7505 10 15.7505H14C14.4142 15.7505 14.75 15.4147 14.75 15.0005C14.75 14.5863 14.4142 14.2505 14 14.2505H10Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCart5 as IconComponentType).keywords = [
  "cart",
  "5",
  "handcart",
  "pushcart",
  "go-cart",
  "haul",
  "drag",
  "dray",
  "wheelbarrow",
  "wagon",
  "bandwagon",
  "wash out",
  "cut up",
  "pull out",
  "pull up",
  "pull over",
  "pull in",
  "work out",
  "ride down",
  "rush hour",
];

export default IconCart5 as IconComponentType;
