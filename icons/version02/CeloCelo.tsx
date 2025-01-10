import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconCeloCelo: FC<IconProps> = ({
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
            opacity={duotone ? "0.4" : "1"}
            d="M15.6699 16C19.5359 16 22.6699 12.866 22.6699 9C22.6699 5.13401 19.5359 2 15.6699 2C11.8039 2 8.66992 5.13401 8.66992 9C8.66992 12.866 11.8039 16 15.6699 16Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
          />
          <path
            d="M9.66992 22C13.5359 22 16.6699 18.866 16.6699 15C16.6699 11.134 13.5359 8 9.66992 8C5.80393 8 2.66992 11.134 2.66992 15C2.66992 18.866 5.80393 22 9.66992 22Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
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
            opacity={duotone ? "0.58" : "1"}
            d="M24.6699 0H0.669922V24H24.6699V0Z"
            fill="none"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.6699 16C19.5359 16 22.6699 12.866 22.6699 9C22.6699 5.13401 19.5359 2 15.6699 2C11.8039 2 8.66992 5.13401 8.66992 9C8.66992 12.866 11.8039 16 15.6699 16Z"
            fill="currentColor"
          />
          <path
            d="M9.66992 22C13.5359 22 16.6699 18.866 16.6699 15C16.6699 11.134 13.5359 8 9.66992 8C5.80393 8 2.66992 11.134 2.66992 15C2.66992 18.866 5.80393 22 9.66992 22Z"
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
            d="M9.66992 22C13.5359 22 16.6699 18.866 16.6699 15C16.6699 11.134 13.5359 8 9.66992 8C5.80393 8 2.66992 11.134 2.66992 15C2.66992 18.866 5.80393 22 9.66992 22Z"
            fill="none"
          />
          <path
            d="M22.6698 9C22.6698 11.74 21.0998 14.11 18.8098 15.25C18.4998 15.41 18.1498 15.16 18.1198 14.82C17.7798 10.37 14.2698 6.89 9.84975 6.55C9.49975 6.52 9.25976 6.17 9.41976 5.86C10.5598 3.57 12.9298 2 15.6698 2C19.5398 2 22.6698 5.13 22.6698 9Z"
            fill="none"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCeloCelo as IconComponentType).keywords = ["celo"];

export default IconCeloCelo as IconComponentType;
