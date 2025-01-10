import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconCupHot: FC<IconProps> = ({
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
            d="M3.2844 11.2662C3.15112 9.26699 3.08448 8.26739 3.67727 7.63375C4.27007 7.00012 5.27189 7.00012 7.27554 7.00012H12.7244C14.7281 7.00012 15.7299 7.00012 16.3227 7.63375C16.9155 8.26739 16.8489 9.26699 16.7156 11.2662L16.3734 16.3992C16.1964 19.0541 16.1079 20.3816 15.2429 21.1909C14.3779 22.0001 13.0475 22.0001 10.3867 22.0001H9.61331C6.95251 22.0001 5.62211 22.0001 4.7571 21.1909C3.89209 20.3816 3.80359 19.0541 3.6266 16.3992L3.2844 11.2662Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M17 17.0001H18C20.2091 17.0001 22 15.2093 22 13.0001C22 10.791 20.2091 9.00012 18 9.00012H17"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M16.5 18.0001H3.5"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M6.05068 5.06147L6.4613 4.4858C6.68808 4.16787 6.61419 3.72629 6.29626 3.49951C5.97832 3.27273 5.90443 2.83116 6.13121 2.51323L6.54183 1.93756M14.0507 5.06147L14.4613 4.4858C14.6881 4.16787 14.6142 3.72629 14.2963 3.49951C13.9783 3.27273 13.9044 2.83116 14.1312 2.51323L14.5418 1.93756"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M10.0507 5.06153L10.4613 4.48586C10.6881 4.16793 10.6142 3.72635 10.2963 3.49957C9.97837 3.2728 9.90447 2.83122 10.1313 2.51329L10.5419 1.93762"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.97736 1.32697C7.31458 1.56751 7.39296 2.03587 7.15242 2.37309L6.76635 2.91434C7.39218 3.3886 7.53088 4.27785 7.0719 4.92132L6.66128 5.49699C6.42075 5.83421 5.95238 5.91258 5.61517 5.67205C5.27795 5.43151 5.19957 4.96315 5.44011 4.62594L5.82618 4.08469C5.20036 3.61042 5.06165 2.72117 5.52063 2.0777L5.93125 1.50203C6.17179 1.16481 6.64015 1.08644 6.97736 1.32697ZM10.9774 1.32697C11.3146 1.56751 11.393 2.03587 11.1524 2.37309L10.7664 2.91434C11.3922 3.3886 11.5309 4.27785 11.0719 4.92132L10.6613 5.49699C10.4207 5.83421 9.95238 5.91258 9.61517 5.67205C9.27795 5.43151 9.19957 4.96315 9.44011 4.62594L9.82618 4.08468C9.20036 3.61042 9.06165 2.72117 9.52063 2.0777L9.93125 1.50203C10.1718 1.16481 10.6401 1.08644 10.9774 1.32697ZM14.9774 1.32697C15.3146 1.56751 15.393 2.03587 15.1524 2.37309L14.7664 2.91434C15.3922 3.3886 15.5309 4.27785 15.0719 4.92132L14.6613 5.49699C14.4207 5.83421 13.9524 5.91258 13.6152 5.67205C13.2779 5.43151 13.1996 4.96315 13.4401 4.62594L13.8262 4.08469C13.2004 3.61042 13.0616 2.72117 13.5206 2.0777L13.9313 1.50203C14.1718 1.16481 14.6401 1.08644 14.9774 1.32697Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M9.6134 22.0001H10.3868C13.0476 22.0001 14.378 22.0001 15.243 21.1909C15.9132 20.5638 16.1172 19.6257 16.2575 18.0001H3.74268C3.88292 19.6257 4.08697 20.5638 4.75719 21.1909C5.6222 22.0001 6.9526 22.0001 9.6134 22.0001Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.28441 11.2662C3.15113 9.26699 3.08449 8.26739 3.67729 7.63375C4.27009 7.00012 5.27191 7.00012 7.27555 7.00012H12.7245C14.7281 7.00012 15.7299 7.00012 16.3227 7.63375C16.4852 7.80738 16.5981 8.00849 16.6737 8.25012H17C19.6234 8.25012 21.75 10.3768 21.75 13.0001C21.75 15.6235 19.6234 17.7501 17 17.7501H16.2781C16.2713 17.8352 16.2645 17.9185 16.2574 18.0001H3.7426C3.70184 17.5276 3.66647 16.9971 3.62662 16.3992L3.28441 11.2662ZM16.3833 16.2501H17C18.7949 16.2501 20.25 14.795 20.25 13.0001C20.25 11.2052 18.7949 9.75012 17 9.75012H16.8007C16.788 10.1803 16.7547 10.6803 16.7156 11.2662L16.3833 16.2501Z"
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
            d="M3.28441 11.2662C3.15113 9.26699 3.08449 8.26739 3.67729 7.63375C4.27009 7.00012 5.27191 7.00012 7.27555 7.00012H12.7245C14.7281 7.00012 15.7299 7.00012 16.3227 7.63375C16.4852 7.80738 16.5981 8.00849 16.6737 8.25012H17C19.5261 8.25012 21.75 10.062 21.75 12.5001C21.75 14.9383 19.5261 16.7501 17 16.7501H16.3499C16.3383 16.9227 16.3269 17.0893 16.3155 17.2501H3.68451C3.66551 16.9827 3.64663 16.6994 3.62662 16.3992L3.28441 11.2662ZM16.45 15.2501H17C18.8921 15.2501 20.25 13.928 20.25 12.5001C20.25 11.0723 18.8921 9.75012 17 9.75012H16.8007C16.788 10.1803 16.7547 10.6803 16.7156 11.2662L16.45 15.2501Z"
            fill="currentColor"
          />
          <path
            d="M3.81902 18.7501H16.181C16.0372 19.9267 15.8026 20.6673 15.2429 21.1909C14.3779 22.0001 13.0475 22.0001 10.3867 22.0001H9.61333C6.95253 22.0001 5.62212 22.0001 4.75712 21.1909C4.19745 20.6673 3.96285 19.9267 3.81902 18.7501Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.97736 1.32697C7.31458 1.56751 7.39296 2.03587 7.15242 2.37309L6.76635 2.91434C7.39218 3.3886 7.53088 4.27785 7.0719 4.92132L6.66128 5.49699C6.42075 5.83421 5.95238 5.91258 5.61517 5.67205C5.27795 5.43151 5.19957 4.96315 5.44011 4.62594L5.82618 4.08469C5.20036 3.61042 5.06165 2.72117 5.52063 2.0777L5.93125 1.50203C6.17179 1.16481 6.64015 1.08644 6.97736 1.32697ZM10.9774 1.32697C11.3146 1.56751 11.393 2.03587 11.1524 2.37309L10.7664 2.91434C11.3922 3.3886 11.5309 4.27785 11.0719 4.92132L10.6613 5.49699C10.4207 5.83421 9.95238 5.91258 9.61517 5.67205C9.27795 5.43151 9.19957 4.96315 9.44011 4.62594L9.82618 4.08468C9.20036 3.61042 9.06165 2.72117 9.52063 2.0777L9.93125 1.50203C10.1718 1.16481 10.6401 1.08644 10.9774 1.32697ZM14.9774 1.32697C15.3146 1.56751 15.393 2.03587 15.1524 2.37309L14.7664 2.91434C15.3922 3.3886 15.5309 4.27785 15.0719 4.92132L14.6613 5.49699C14.4207 5.83421 13.9524 5.91258 13.6152 5.67205C13.2779 5.43151 13.1996 4.96315 13.4401 4.62594L13.8262 4.08469C13.2004 3.61042 13.0616 2.72117 13.5206 2.0777L13.9313 1.50203C14.1718 1.16481 14.6401 1.08644 14.9774 1.32697Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCupHot as IconComponentType).keywords = [
  "cup",
  "hot",
  "loving cup",
  "cupful",
  "transfuse",
  "chalice",
  "goblet",
  "bottle",
  "jar",
  "pot",
  "bowl",
  "calefacient",
  "scorching",
  "baking hot",
  "torrid",
  "red-hot",
  "burning",
  "warming",
  "scalding",
  "sweltry",
];

export default IconCupHot as IconComponentType;
