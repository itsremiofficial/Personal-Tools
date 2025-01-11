import { FC } from "react";

const IconFolderMove: FC<IconProps> = ({
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
            opacity={duotone ? "0.5" : "1"}
            d="M2 12.0001V6.94987C2 6.06734 2 5.62607 2.06935 5.25851C2.37464 3.64043 3.64031 2.37476 5.25839 2.06947C5.62595 2.00012 6.06722 2.00012 6.94975 2.00012C7.33642 2.00012 7.52976 2.00012 7.71557 2.0175C8.51665 2.09241 9.27652 2.40716 9.89594 2.92064C10.0396 3.03974 10.1763 3.17645 10.4497 3.44987L11 4.00012C11.8158 4.8159 12.2237 5.22379 12.7121 5.49555C12.9804 5.64483 13.2651 5.76273 13.5604 5.8469C14.0979 6.00012 14.6747 6.00012 15.8284 6.00012H16.2021C18.8345 6.00012 20.1506 6.00012 21.0062 6.76959C21.0849 6.84037 21.1598 6.91526 21.2305 6.99395C22 7.84947 22 9.16566 22 11.798V14.0001C22 17.7714 22 19.657 20.8284 20.8285C19.6569 22.0001 17.7712 22.0001 14 22.0001H10C6.22876 22.0001 4.34315 22.0001 3.17157 20.8285C2.51839 20.1754 2.22937 19.3002 2.10149 18.0001"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M2 15.0001C8.44365 15.0001 6.55635 15.0001 13 15.0001M13 15.0001L8.875 12.0001M13 15.0001L8.875 18.0001"
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
            d="M22 14.0001V11.798C22 9.16566 22 7.84947 21.2306 6.99395C21.1598 6.91526 21.0849 6.84037 21.0062 6.76959C20.1507 6.00012 18.8345 6.00012 16.2021 6.00012H15.8284C14.6748 6.00012 14.0979 6.00012 13.5604 5.8469C13.2651 5.76273 12.9805 5.64483 12.7121 5.49555C12.2237 5.22379 11.8158 4.8159 11 4.00012L10.4498 3.44987C10.1763 3.17645 10.0396 3.03974 9.89596 2.92064C9.27654 2.40716 8.51667 2.09241 7.71559 2.0175C7.52978 2.00012 7.33644 2.00012 6.94977 2.00012C6.06724 2.00012 5.62597 2.00012 5.25841 2.06947C3.64033 2.37476 2.37467 3.64043 2.06938 5.25851C2.00003 5.62607 2.00003 6.06737 2.00003 6.94987L2 14.0001L2.00001 14.2502L2.00559 15.7502C2.03321 18.3861 2.19725 19.8542 3.17157 20.8285C4.34315 22.0001 6.22878 22.0001 10 22.0001H14C17.7713 22.0001 19.6569 22.0001 20.8284 20.8285C22 19.657 22 17.7714 22 14.0001Z"
            fill="currentColor"
          />
          <path
            d="M9.31616 11.3936C8.98117 11.15 8.51211 11.2241 8.26848 11.559C8.02485 11.894 8.09891 12.3631 8.4339 12.6067L10.6936 14.2502H2L2.00558 15.7502H10.6936L8.4339 17.3936C8.09891 17.6373 8.02485 18.1063 8.26848 18.4413C8.51211 18.7763 8.98117 18.8504 9.31616 18.6067L13.4412 15.6067C13.6352 15.4656 13.75 15.2401 13.75 15.0002C13.75 14.7602 13.6352 14.5348 13.4412 14.3936L9.31616 11.3936Z"
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
            d="M22 11.798V14.0001C22 17.7714 22 19.657 20.8284 20.8285C19.6569 22.0001 17.7713 22.0001 14 22.0001H10C6.22878 22.0001 4.34315 22.0001 3.17157 20.8285C2.19725 19.8542 2.03321 18.3861 2.00559 15.7502H10.6937L8.43392 17.3936C8.09893 17.6373 8.02487 18.1063 8.26849 18.4413C8.51212 18.7763 8.98118 18.8504 9.31617 18.6067L13.4412 15.6067C13.6352 15.4656 13.75 15.2401 13.75 15.0002C13.75 14.7602 13.6352 14.5348 13.4412 14.3936L9.31617 11.3936C8.98118 11.15 8.51212 11.2241 8.26849 11.559C8.02487 11.894 8.09893 12.3631 8.43392 12.6067L10.6937 14.2502H2.00001L2 14.0001L2.00003 6.94987C2.00003 6.06737 2.00003 5.62607 2.06938 5.25851C2.37467 3.64043 3.64033 2.37476 5.25841 2.06947C5.62597 2.00012 6.06724 2.00012 6.94977 2.00012C7.33644 2.00012 7.52978 2.00012 7.71559 2.0175C8.51667 2.09241 9.27654 2.40716 9.89596 2.92064C10.0396 3.03974 10.1763 3.17645 10.4498 3.44987L11 4.00012C11.8158 4.8159 12.2237 5.22379 12.7121 5.49555C12.9805 5.64483 13.2651 5.76273 13.5604 5.8469C14.0979 6.00012 14.6748 6.00012 15.8284 6.00012H16.2021C18.8345 6.00012 20.1507 6.00012 21.0062 6.76959C21.0849 6.84037 21.1598 6.91526 21.2306 6.99395C22 7.84947 22 9.16566 22 11.798Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconFolderMove as IconComponent).keywords = [
  "folder",
  "move",
  "booklet",
  "pamphlet",
  "brochure",
  "leaflet",
  "toolkit",
  "pack",
  "package",
  "kit",
  "shirt",
  "motion",
  "movement",
  "proceed",
  "propel",
  "travel",
  "run",
  "prompt",
  "displace",
  "motivate",
];

export default IconFolderMove as IconComponent;