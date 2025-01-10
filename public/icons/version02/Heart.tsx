import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconHeart: FC<IconProps> = ({
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
            d="M13.2899 20.8101C12.9499 20.9301 12.3899 20.9301 12.0499 20.8101C9.14992 19.8201 2.66992 15.6901 2.66992 8.6901C2.66992 5.6001 5.15992 3.1001 8.22992 3.1001C10.0499 3.1001 11.6599 3.9801 12.6699 5.3401C13.6799 3.9801 15.2999 3.1001 17.1099 3.1001C20.1799 3.1001 22.6699 5.6001 22.6699 8.6901C22.6699 15.6901 16.1899 19.8201 13.2899 20.8101Z"
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
            d="M22.6699 8.6901C22.6699 9.8801 22.4799 10.9801 22.1499 12.0001H3.18992C2.85992 10.9801 2.66992 9.8801 2.66992 8.6901C2.66992 5.6001 5.15992 3.1001 8.22992 3.1001C10.0399 3.1001 11.6599 3.9801 12.6699 5.3301C13.6799 3.9801 15.2999 3.1001 17.1099 3.1001C20.1799 3.1001 22.6699 5.6001 22.6699 8.6901Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.1495 12C20.5695 17 15.6995 19.99 13.2895 20.81C12.9495 20.93 12.3895 20.93 12.0495 20.81C9.63945 19.99 4.76945 17 3.18945 12H22.1495Z"
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
            d="M17.1099 3.1001C15.2999 3.1001 13.6799 3.9801 12.6699 5.3301C11.6599 3.9801 10.0399 3.1001 8.22992 3.1001C5.15992 3.1001 2.66992 5.6001 2.66992 8.6901C2.66992 9.8801 2.85992 10.9801 3.18992 12.0001C4.76992 17.0001 9.63992 19.9901 12.0499 20.8101C12.3899 20.9301 12.9499 20.9301 13.2899 20.8101C15.6999 19.9901 20.5699 17.0001 22.1499 12.0001C22.4799 10.9801 22.6699 9.8801 22.6699 8.6901C22.6699 5.6001 20.1799 3.1001 17.1099 3.1001Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconHeart as IconComponentType).keywords = [
  "heart",
  "nerve",
  "marrow",
  "eye",
  "nub",
  "pith",
  "bosom",
  "spunk",
  "core",
  "meat",
];

export default IconHeart as IconComponentType;
