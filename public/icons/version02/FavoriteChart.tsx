import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconFavoriteChart: FC<IconProps> = ({
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
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.6699 13V9C22.6699 4 20.6699 2 15.6699 2H9.66992C4.66992 2 2.66992 4 2.66992 9V15C2.66992 20 4.66992 22 9.66992 22H13.6699"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8 14.4898L10.38 11.3998C10.72 10.9598 11.35 10.8798 11.79 11.2198L13.62 12.6598C14.06 12.9998 14.69 12.9198 15.03 12.4898L17.34 9.50977"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.1501 15.8199L20.4301 16.3899C20.5701 16.6699 20.9201 16.9299 21.2301 16.9899L21.6101 17.0499C22.7501 17.2399 23.0201 18.0799 22.2001 18.9099L21.8501 19.2599C21.6201 19.4999 21.4901 19.9599 21.5601 20.2799L21.6101 20.4899C21.9201 21.8699 21.1901 22.3999 19.9901 21.6799L19.7301 21.5299C19.4201 21.3499 18.9201 21.3499 18.6101 21.5299L18.3501 21.6799C17.1401 22.4099 16.4101 21.8699 16.7301 20.4899L16.7801 20.2799C16.8501 19.9599 16.7201 19.4999 16.4901 19.2599L16.1401 18.9099C15.3201 18.0799 15.5901 17.2399 16.7301 17.0499L17.1101 16.9899C17.4101 16.9399 17.7701 16.6699 17.9101 16.3899L18.1901 15.8199C18.7301 14.7299 19.6101 14.7299 20.1501 15.8199Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : duotone ? (
        <svg
          className={className}
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.6699 7.81V15.16C22.3799 15.02 22.0599 14.92 21.6999 14.86L21.3899 14.81L21.1299 14.27C20.5799 13.15 19.6799 12.5 18.6699 12.5C17.6599 12.5 16.7599 13.15 16.2099 14.27L15.9399 14.81L15.6399 14.86C14.4499 15.06 13.5899 15.72 13.2799 16.66C12.9799 17.61 13.2899 18.65 14.1399 19.51L14.4499 19.82L14.4199 19.94C14.2199 20.83 14.2999 21.51 14.4899 22H8.47992C4.83992 22 2.66992 19.83 2.66992 16.19V7.81C2.66992 4.17 4.83992 2 8.47992 2H16.8599C20.4999 2 22.6699 4.17 22.6699 7.81Z"
            fill="currentColor"
          />
          <path
            d="M19.7898 14.9399L20.1098 15.5899C20.2698 15.9099 20.6798 16.2099 21.0198 16.2699L21.4498 16.3399C22.7598 16.5599 23.0598 17.5199 22.1298 18.4599L21.7298 18.8599C21.4598 19.1299 21.3198 19.6499 21.3998 20.0299L21.4498 20.2699C21.8098 21.8499 20.9698 22.4599 19.5998 21.6299L19.3098 21.4499C18.9598 21.2399 18.3798 21.2399 18.0298 21.4499L17.7398 21.6299C16.3598 22.4599 15.5298 21.8499 15.8898 20.2699L15.9398 20.0299C16.0198 19.6599 15.8798 19.1299 15.6098 18.8599L15.2098 18.4599C14.2798 17.5099 14.5798 16.5599 15.8898 16.3399L16.3198 16.2699C16.6698 16.2099 17.0698 15.9099 17.2298 15.5899L17.5498 14.9399C18.1698 13.6899 19.1698 13.6899 19.7898 14.9399Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.7996 7.91704C17.1269 8.17081 17.1866 8.64192 16.9328 8.9693L14.6184 11.955C14.0235 12.7073 12.9267 12.8445 12.1615 12.2533L12.1563 12.2492L10.3297 10.8119C10.2168 10.7262 10.0594 10.7475 9.97375 10.8581C9.97367 10.8582 9.97383 10.858 9.97375 10.8581L7.59422 13.9475C7.34146 14.2756 6.87054 14.3367 6.54238 14.084C6.21422 13.8312 6.1531 13.3603 6.40586 13.0321L8.78658 9.94122C9.38049 9.17263 10.4817 9.03371 11.2486 9.62634L11.2539 9.63038L13.0804 11.0677C13.1945 11.1543 13.3551 11.132 13.4402 11.0265L15.7473 8.05031C16.0011 7.72293 16.4722 7.66327 16.7996 7.91704Z"
            fill="currentColor"
          />
        </svg>
      ) : (
        <svg
          className={className}
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.7898 14.9399L20.1098 15.5899C20.2698 15.9099 20.6798 16.2099 21.0198 16.2699L21.4498 16.3399C22.7598 16.5599 23.0598 17.5199 22.1298 18.4599L21.7298 18.8599C21.4598 19.1299 21.3198 19.6499 21.3998 20.0299L21.4498 20.2699C21.8098 21.8499 20.9698 22.4599 19.5998 21.6299L19.3098 21.4499C18.9598 21.2399 18.3798 21.2399 18.0298 21.4499L17.7398 21.6299C16.3598 22.4599 15.5298 21.8499 15.8898 20.2699L15.9398 20.0299C16.0198 19.6599 15.8798 19.1299 15.6098 18.8599L15.2098 18.4599C14.2798 17.5099 14.5798 16.5599 15.8898 16.3399L16.3198 16.2699C16.6698 16.2099 17.0698 15.9099 17.2298 15.5899L17.5498 14.9399C18.1698 13.6899 19.1698 13.6899 19.7898 14.9399Z"
            fill="currentColor"
          />
          <path
            d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.19C2.66992 19.83 4.83992 22 8.47992 22H13.7599C14.1099 22 14.3599 21.64 14.3199 21.29C14.2799 20.91 14.2999 20.46 14.4199 19.94C14.4399 19.87 14.4199 19.79 14.3599 19.73L14.1399 19.51C13.2899 18.65 12.9799 17.61 13.2799 16.66C13.5899 15.72 14.4499 15.06 15.6399 14.86L15.9399 14.81L16.2099 14.27C16.7599 13.15 17.6599 12.5 18.6699 12.5C19.6799 12.5 20.5799 13.15 21.1299 14.27L21.2799 14.58C21.3499 14.73 21.4899 14.83 21.6499 14.86C21.7399 14.88 21.8299 14.9 21.9199 14.92C22.2699 15.01 22.6699 14.73 22.6699 14.36V7.81C22.6699 4.17 20.4999 2 16.8599 2ZM16.9299 8.96L14.6199 11.94C14.3299 12.31 13.9199 12.55 13.4499 12.6C12.9899 12.66 12.5199 12.53 12.1599 12.24L10.3299 10.82C10.2599 10.76 10.1799 10.76 10.1399 10.77C10.0999 10.77 10.0299 10.79 9.96992 10.87L7.58992 13.96C7.43992 14.15 7.21992 14.25 6.98992 14.25C6.82992 14.25 6.66992 14.2 6.52992 14.09C6.19992 13.84 6.13992 13.37 6.38992 13.04L8.76992 9.95C9.05992 9.58 9.46992 9.34 9.93992 9.28C10.4099 9.22 10.8699 9.35 11.2399 9.64L13.0699 11.08C13.1399 11.14 13.2099 11.13 13.2599 11.13C13.2999 11.13 13.3699 11.11 13.4299 11.03L15.7399 8.05C15.9899 7.72 16.4599 7.66 16.7899 7.92C17.1299 8.17 17.1799 8.64 16.9299 8.96Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconFavoriteChart as IconComponentType).keywords = [
  "favorite",
  "chart",
  "favored",
  "favourite",
  "preferred",
  "popular",
  "loved",
  "deary",
  "darling",
  "dearie",
  "front-runner",
  "map",
  "cartography",
  "mapping",
  "cartographic",
  "plan",
  "diagram",
  "graphical",
  "diagrammatic",
  "blueprint",
];

export default IconFavoriteChart as IconComponentType;
