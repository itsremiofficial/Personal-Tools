import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconHashtagUp: FC<IconProps> = ({
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
            d="M22.6699 13V9C22.6699 4 20.6699 2 15.6699 2H9.66992C4.66992 2 2.66992 4 2.66992 9V15C2.66992 20 4.66992 22 9.66992 22H15.6699"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M19.6699 22V16L17.6699 18"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.6699 16L21.6699 18"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M10.6203 6.25977L9.57031 15.7298"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.7805 6.25977L12.7305 15.7298"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.19922 9.41992H16.6692"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.66992 12.5801H16.1399"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
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
            d="M21.6399 16H18.6999C17.4299 16 16.6699 16.76 16.6699 18.03V20.97C16.6699 22.24 17.4299 23 18.6999 23H21.6399C22.9099 23 23.6699 22.24 23.6699 20.97V18.03C23.6699 16.76 22.9099 16 21.6399 16ZM21.8599 19.31C21.7399 19.43 21.5799 19.49 21.4199 19.49C21.2599 19.49 21.0999 19.43 20.9799 19.31L20.7999 19.13V21.37C20.7999 21.72 20.5199 22 20.1699 22C19.8199 22 19.5399 21.72 19.5399 21.37V19.13L19.3599 19.31C19.1199 19.55 18.7199 19.55 18.4799 19.31C18.2399 19.07 18.2399 18.67 18.4799 18.43L19.7299 17.18C19.7799 17.13 19.8499 17.09 19.9199 17.06C19.9399 17.05 19.9599 17.05 19.9799 17.04C20.0299 17.02 20.0799 17.01 20.1399 17.01C20.1599 17.01 20.1799 17.01 20.1999 17.01C20.2699 17.01 20.3299 17.02 20.3999 17.05C20.4099 17.05 20.4099 17.05 20.4199 17.05C20.4899 17.08 20.5499 17.12 20.5999 17.17C20.6099 17.18 20.6099 17.18 20.6199 17.18L21.8699 18.43C22.1099 18.67 22.1099 19.07 21.8599 19.31Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.6699 20.97V18.03C16.6699 16.76 17.4299 16 18.6999 16H21.6399C22.0399 16 22.3799 16.08 22.6699 16.22C22.6699 16.21 22.6699 16.2 22.6699 16.18V7.81C22.6699 4.17 20.4999 2 16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C16.8599 22 16.8699 22 16.8899 22C16.7499 21.71 16.6699 21.37 16.6699 20.97Z"
            fill="currentColor"
          />
          <path
            d="M16.6699 10.1701C17.0799 10.1701 17.4199 9.8301 17.4199 9.4201C17.4199 9.0101 17.0799 8.6701 16.6699 8.6701H14.2599L14.5199 6.3501C14.5699 5.9401 14.2699 5.5701 13.8599 5.5201C13.4499 5.4801 13.0799 5.7701 13.0299 6.1801L12.7499 8.6701H11.0999L11.3599 6.3501C11.4099 5.9401 11.1099 5.5701 10.6999 5.5201C10.2899 5.4701 9.91992 5.7701 9.86992 6.1801L9.58992 8.6701H7.18992C6.77992 8.6701 6.43992 9.0101 6.43992 9.4201C6.43992 9.8301 6.77992 10.1701 7.18992 10.1701H9.41992L9.23992 11.8301H6.66992C6.25992 11.8301 5.91992 12.1701 5.91992 12.5801C5.91992 12.9901 6.25992 13.3301 6.66992 13.3301H9.07992L8.81992 15.6501C8.76992 16.0601 9.06992 16.4301 9.47992 16.4801C9.50992 16.4801 9.53992 16.4801 9.55992 16.4801C9.93992 16.4801 10.2599 16.2001 10.2999 15.8101L10.5799 13.3201H12.2299L11.9699 15.6401C11.9199 16.0501 12.2199 16.4201 12.6299 16.4701C12.6599 16.4701 12.6899 16.4701 12.7099 16.4701C13.0899 16.4701 13.4099 16.1901 13.4499 15.8001L13.7299 13.3101H16.1299C16.5399 13.3101 16.8799 12.9701 16.8799 12.5601C16.8799 12.1501 16.5399 11.8101 16.1299 11.8101H13.8999L14.0799 10.1501H16.6699V10.1701ZM12.3999 11.8301H10.7499L10.9299 10.1701H12.5799L12.3999 11.8301Z"
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
            d="M10.75 11.8299H12.4L12.59 10.1699H10.94L10.75 11.8299Z"
            fill="currentColor"
          />
          <path
            d="M22.6399 7.21C22.4399 4.13 20.5399 2.23 17.4599 2.03C17.2599 2.01 17.0599 2 16.8599 2H8.47992C8.27992 2 8.07992 2.01 7.87992 2.03C4.79992 2.23 2.89992 4.13 2.69992 7.21C2.67992 7.41 2.66992 7.61 2.66992 7.81V16.19C2.66992 16.39 2.67992 16.59 2.69992 16.79C2.89992 19.87 4.79992 21.77 7.87992 21.97C8.07992 21.99 8.27992 22 8.47992 22H14.1699C14.7199 22 15.1699 21.55 15.1699 21V18.03C15.1699 16.08 16.7499 14.5 18.6999 14.5H21.6699C22.2199 14.5 22.6699 14.05 22.6699 13.5V7.81C22.6699 7.61 22.6599 7.41 22.6399 7.21ZM16.6699 10.17H14.0999L13.9099 11.83H16.1399C16.5599 11.83 16.8899 12.17 16.8899 12.58C16.8899 12.99 16.5599 13.33 16.1399 13.33H13.7499L13.4699 15.82C13.4299 16.2 13.0999 16.49 12.7199 16.49C12.6999 16.49 12.6699 16.49 12.6399 16.48C12.2299 16.44 11.9299 16.07 11.9799 15.65L12.2399 13.33H10.5899L10.3099 15.82C10.2699 16.2 9.93992 16.49 9.56992 16.49C9.53992 16.49 9.50992 16.49 9.47992 16.48C9.06992 16.44 8.76992 16.07 8.81992 15.65L9.07992 13.33H6.66992C6.25992 13.33 5.91992 12.99 5.91992 12.58C5.91992 12.17 6.25992 11.83 6.66992 11.83H9.23992L9.42992 10.17H7.19992C6.77992 10.17 6.44992 9.83 6.44992 9.42C6.44992 9.01 6.77992 8.67 7.19992 8.67H9.58992L9.86992 6.18C9.91992 5.77 10.2899 5.47 10.6999 5.52C11.1099 5.56 11.4099 5.93 11.3599 6.35L11.0999 8.67H12.7499L13.0299 6.18C13.0799 5.77 13.4499 5.47 13.8599 5.52C14.2699 5.56 14.5699 5.93 14.5199 6.35L14.2599 8.67H16.6699C17.0799 8.67 17.4199 9.01 17.4199 9.42C17.4199 9.83 17.0799 10.17 16.6699 10.17Z"
            fill="currentColor"
          />
          <path
            d="M21.6399 16H18.6999C17.4299 16 16.6699 16.76 16.6699 18.03V20.97C16.6699 22.24 17.4299 23 18.6999 23H21.6399C22.9099 23 23.6699 22.24 23.6699 20.97V18.03C23.6699 16.76 22.9099 16 21.6399 16ZM21.8599 19.31C21.7399 19.43 21.5799 19.49 21.4199 19.49C21.2599 19.49 21.0999 19.43 20.9799 19.31L20.7999 19.13V21.37C20.7999 21.72 20.5199 22 20.1699 22C19.8199 22 19.5399 21.72 19.5399 21.37V19.13L19.3599 19.31C19.1199 19.55 18.7199 19.55 18.4799 19.31C18.2399 19.07 18.2399 18.67 18.4799 18.43L19.7299 17.18C19.7799 17.13 19.8499 17.09 19.9199 17.06C19.9399 17.05 19.9599 17.05 19.9799 17.04C20.0299 17.02 20.0799 17.01 20.1399 17.01C20.1599 17.01 20.1799 17.01 20.1999 17.01C20.2699 17.01 20.3299 17.02 20.3999 17.05C20.4099 17.05 20.4099 17.05 20.4199 17.05C20.4899 17.08 20.5499 17.12 20.5999 17.17C20.6099 17.18 20.6099 17.18 20.6199 17.18L21.8699 18.43C22.1099 18.67 22.1099 19.07 21.8599 19.31Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconHashtagUp as IconComponentType).keywords = [
  "hashtag",
  "up",
  "slashtag",
  "bashtag",
  "hashtagger",
  "hashflag",
  "tag cloud",
  "tweet",
  "label cloud",
  "entity tag",
  "fragment",
  "upbound",
  "upwardly",
  "ascending",
  "upward",
  "upwards",
  "rising",
  "astir",
  "ahead",
  "awake",
];

export default IconHashtagUp as IconComponentType;
