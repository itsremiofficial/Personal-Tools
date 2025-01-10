import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconStationMinimalistic: FC<IconProps> = ({
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
            d="M13.25 8.75037C13.25 9.44072 12.6904 10.0004 12 10.0004C11.3096 10.0004 10.75 9.44072 10.75 8.75037C10.75 8.06001 11.3096 7.50037 12 7.50037C12.6904 7.50037 13.25 8.06001 13.25 8.75037Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.00778 14.0004C5.76601 12.7273 5 10.9813 5 9.05509C5 5.15888 8.13401 2.00037 12 2.00037C15.866 2.00037 19 5.15888 19 9.05509C19 10.9651 18.2468 12.6978 17.0235 13.9681"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.7" : "1"}
            d="M8.98785 12.0049C8.25272 11.2425 7.80005 10.2021 7.80005 9.0551C7.80005 6.71737 9.68045 4.82227 12 4.82227C14.3196 4.82227 16.2 6.71737 16.2 9.0551C16.2 10.1859 15.7601 11.2131 15.0433 11.9723"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M16 22.0004L12 10.0004L8 22.0004"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.5 17.5004H9.5"
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
            d="M11.2844 9.77541C10.9613 9.54943 10.75 9.17457 10.75 8.75037C10.75 8.06001 11.3096 7.50037 12 7.50037C12.6903 7.50037 13.25 8.06001 13.25 8.75037C13.25 9.17457 13.0387 9.54943 12.7156 9.77541L15.206 17.2466C15.2099 17.2575 15.2136 17.2685 15.217 17.2796L16.7115 21.7632C16.8425 22.1562 16.6301 22.5809 16.2372 22.7119C15.8442 22.8429 15.4195 22.6305 15.2885 22.2375L13.9594 18.2504H10.0406L8.7115 22.2375C8.58052 22.6305 8.15578 22.8429 7.76282 22.7119C7.36986 22.5809 7.15749 22.1562 7.28848 21.7632L8.78301 17.2796C8.78643 17.2685 8.7901 17.2575 8.79401 17.2466L11.2844 9.77541ZM12 12.3721L13.4594 16.7504H10.5406L12 12.3721Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 2.75037C8.55372 2.75037 5.75 5.56757 5.75 9.05509C5.75 10.7787 6.43459 12.3386 7.54467 13.4767C7.8339 13.7732 7.82798 14.248 7.53146 14.5373C7.23494 14.8265 6.76011 14.8206 6.47088 14.524C5.09743 13.1159 4.25 11.184 4.25 9.05509C4.25 4.75018 7.7143 1.25037 12 1.25037C16.2857 1.25037 19.75 4.75018 19.75 9.05509C19.75 11.166 18.9168 13.0834 17.5637 14.4883C17.2764 14.7867 16.8016 14.7956 16.5033 14.5083C16.2049 14.221 16.196 13.7462 16.4833 13.4478C17.5769 12.3123 18.25 10.7642 18.25 9.05509C18.25 5.56757 15.4463 2.75037 12 2.75037Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.7" : "1"}
            d="M11.9998 5.57227C10.0999 5.57227 8.5498 7.12607 8.5498 9.0551C8.5498 10.001 8.92229 10.8567 9.52748 11.4843C9.815 11.7824 9.80638 12.2572 9.50821 12.5448C9.21005 12.8323 8.73525 12.8236 8.44773 12.5255C7.58267 11.6284 7.0498 10.4032 7.0498 9.0551C7.0498 6.30868 9.2605 4.07227 11.9998 4.07227C14.7391 4.07227 16.9498 6.30868 16.9498 9.0551C16.9498 10.3841 16.4319 11.5937 15.5884 12.4872C15.3041 12.7884 14.8294 12.802 14.5282 12.5177C14.227 12.2333 14.2133 11.7587 14.4977 11.4575C15.0878 10.8324 15.4498 9.98767 15.4498 9.0551C15.4498 7.12607 13.8997 5.57227 11.9998 5.57227Z"
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
            d="M12 2.75037C8.55372 2.75037 5.75 5.56757 5.75 9.05509C5.75 10.7787 6.43459 12.3386 7.54467 13.4767C7.8339 13.7732 7.82798 14.248 7.53146 14.5373C7.23494 14.8265 6.76011 14.8206 6.47088 14.524C5.09743 13.1159 4.25 11.184 4.25 9.05509C4.25 4.75018 7.7143 1.25037 12 1.25037C16.2857 1.25037 19.75 4.75018 19.75 9.05509C19.75 11.166 18.9168 13.0834 17.5637 14.4883C17.2764 14.7867 16.8016 14.7956 16.5033 14.5083C16.2049 14.221 16.196 13.7462 16.4833 13.4478C17.5769 12.3123 18.25 10.7642 18.25 9.05509C18.25 5.56757 15.4463 2.75037 12 2.75037Z"
            fill="currentColor"
          />
          <path
            d="M12 5.57226C10.1001 5.57226 8.55 7.12606 8.55 9.05509C8.55 10.001 8.92249 10.8567 9.52768 11.4843C9.8152 11.7824 9.80657 12.2572 9.50841 12.5447C9.21024 12.8323 8.73545 12.8236 8.44792 12.5255C7.58286 11.6284 7.05 10.4032 7.05 9.05509C7.05 6.30867 9.26069 4.07226 12 4.07226C14.7393 4.07226 16.95 6.30867 16.95 9.05509C16.95 10.3841 16.4321 11.5937 15.5886 12.4872C15.3043 12.7884 14.8296 12.802 14.5284 12.5177C14.2272 12.2333 14.2135 11.7587 14.4979 11.4575C15.088 10.8324 15.45 9.98766 15.45 9.05509C15.45 7.12606 13.8999 5.57226 12 5.57226Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.2844 9.77541C10.9613 9.54943 10.75 9.17457 10.75 8.75037C10.75 8.06001 11.3096 7.50037 12 7.50037C12.6904 7.50037 13.25 8.06001 13.25 8.75037C13.25 9.17457 13.0387 9.54943 12.7156 9.77541L15.206 17.2466C15.2099 17.2575 15.2136 17.2685 15.217 17.2796L16.7115 21.7632C16.8425 22.1562 16.6301 22.5809 16.2372 22.7119C15.8442 22.8429 15.4195 22.6305 15.2885 22.2375L13.9594 18.2504H10.0406L8.71151 22.2375C8.58053 22.6305 8.15579 22.8429 7.76283 22.7119C7.36987 22.5809 7.1575 22.1562 7.28849 21.7632L8.78302 17.2796C8.78644 17.2685 8.79011 17.2575 8.79402 17.2466L11.2844 9.77541ZM12 12.3721L13.4594 16.7504H10.5406L12 12.3721Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconStationMinimalistic as IconComponentType).keywords = [
  "station",
  "minimalistic",
  "place",
  "send",
  "post",
  "base",
  "railroad",
  "railway",
  "points",
  "subway",
  "parking",
  "modularistic",
  "brutalistic",
  "localistic",
  "reductionist",
  "exhibitional",
  "monogynous",
  "simplificational",
  "reductionistic",
  "automatistic",
];

export default IconStationMinimalistic as IconComponentType;
