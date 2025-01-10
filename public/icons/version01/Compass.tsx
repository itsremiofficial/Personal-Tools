import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconCompass: FC<IconProps> = ({
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
          <circle
            opacity={duotone ? "0.5" : "1"}
            cx="12"
            cy="12.0002"
            r="10"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M13.024 14.5603C10.7142 15.4842 9.5593 15.9462 8.89964 15.4979C8.74324 15.3917 8.60834 15.2568 8.50206 15.1004C8.0538 14.4407 8.51575 13.2858 9.43967 10.976C9.63673 10.4834 9.73527 10.237 9.90474 10.0438C9.94792 9.99453 9.99429 9.94817 10.0435 9.90498C10.2368 9.73551 10.4831 9.63698 10.9758 9.43991C13.2856 8.516 14.4405 8.05404 15.1001 8.5023C15.2565 8.60858 15.3914 8.74348 15.4977 8.89989C15.946 9.55954 15.484 10.7144 14.5601 13.0242C14.363 13.5169 14.2645 13.7632 14.095 13.9565C14.0518 14.0057 14.0055 14.0521 13.9562 14.0953C13.763 14.2647 13.5166 14.3633 13.024 14.5603Z"
            stroke="currentColor"
            strokeWidth={width}
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
            d="M12 22.0002C17.5228 22.0002 22 17.5231 22 12.0002C22 6.4774 17.5228 2.00024 12 2.00024C6.47715 2.00024 2 6.4774 2 12.0002C2 17.5231 6.47715 22.0002 12 22.0002Z"
            fill="currentColor"
          />
          <path
            d="M13.024 14.5603C13.5166 14.3633 13.763 14.2647 13.9562 14.0953C14.0055 14.0521 14.0518 14.0057 14.095 13.9565C14.2645 13.7632 14.363 13.5169 14.5601 13.0242C15.484 10.7144 15.946 9.55954 15.4977 8.89989C15.3914 8.74348 15.2565 8.60858 15.1001 8.5023C14.4405 8.05404 13.2856 8.516 10.9758 9.43991C10.4831 9.63698 10.2368 9.73551 10.0435 9.90498C9.99429 9.94817 9.94792 9.99453 9.90474 10.0438C9.73527 10.237 9.63673 10.4834 9.43966 10.976C8.51575 13.2858 8.0538 14.4407 8.50206 15.1004C8.60834 15.2568 8.74324 15.3917 8.89964 15.4979C9.5593 15.9462 10.7142 15.4842 13.024 14.5603Z"
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
            d="M12 22.0002C17.5228 22.0002 22 17.5231 22 12.0002C22 6.4774 17.5228 2.00024 12 2.00024C6.47715 2.00024 2 6.4774 2 12.0002C2 17.5231 6.47715 22.0002 12 22.0002ZM13.9563 14.0952C13.763 14.2646 13.5167 14.3632 13.024 14.5602C10.7142 15.4841 9.55936 15.9461 8.89971 15.4978C8.7433 15.3916 8.6084 15.2567 8.50212 15.1003C8.05386 14.4406 8.51582 13.2857 9.43973 10.9759C9.6368 10.4833 9.73533 10.2369 9.9048 10.0437C9.94799 9.99443 9.99435 9.94807 10.0436 9.90488C10.2368 9.73541 10.4832 9.63688 10.9759 9.43981C13.2856 8.5159 14.4405 8.05394 15.1002 8.5022C15.2566 8.60848 15.3915 8.74338 15.4978 8.89979C15.946 9.55944 15.4841 10.7143 14.5602 13.0241C14.3631 13.5168 14.2646 13.7631 14.0951 13.9564C14.0519 14.0056 14.0055 14.052 13.9563 14.0952Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCompass as IconComponentType).keywords = [
  "compass",
  "orbit",
  "range",
  "dig",
  "circumnavigate",
  "ambit",
  "scope",
  "comprehend",
  "reach",
  "grasp",
];

export default IconCompass as IconComponentType;
