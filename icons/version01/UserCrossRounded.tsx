import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconUserCrossRounded: FC<IconProps> = ({
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
            cx="12"
            cy="6.00049"
            r="4"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M15.5841 20.4371C14.5358 20.7949 13.3099 21.0005 12 21.0005C8.13401 21.0005 5 19.2096 5 17.0005C5 14.7913 8.13401 13.0005 12 13.0005C14.6083 13.0005 16.8834 13.8157 18.0877 15.0245"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M20 17.5005L18 19.5005M18 17.5005L20 19.5005"
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
          <circle cx="12" cy="6.00049" r="4" fill="currentColor" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.5 22.0005C14.8501 22.0005 14.0251 22.0005 13.5126 21.4879C13 20.9754 13 20.1504 13 18.5005C13 16.8506 13 16.0256 13.5126 15.5131C14.0251 15.0005 14.8501 15.0005 16.5 15.0005C18.1499 15.0005 18.9749 15.0005 19.4874 15.5131C20 16.0256 20 16.8506 20 18.5005C20 20.1504 20 20.9754 19.4874 21.4879C18.9749 22.0005 18.1499 22.0005 16.5 22.0005ZM15.3569 16.5325C15.1291 16.3046 14.7598 16.3046 14.532 16.5325C14.3042 16.7603 14.3042 17.1296 14.532 17.3574L15.675 18.5005L14.532 19.6436C14.3042 19.8714 14.3042 20.2407 14.532 20.4685C14.7598 20.6963 15.1291 20.6963 15.3569 20.4685L16.5 19.3254L17.6431 20.4685C17.8709 20.6963 18.2402 20.6963 18.468 20.4685C18.6958 20.2407 18.6958 19.8714 18.468 19.6436L17.325 18.5005L18.468 17.3574C18.6958 17.1296 18.6958 16.7603 18.468 16.5325C18.2402 16.3046 17.8709 16.3046 17.6431 16.5325L16.5 17.6755L15.3569 16.5325Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M18.0947 15.0316C17.6699 15.0005 17.1487 15.0005 16.5 15.0005C14.8501 15.0005 14.0251 15.0005 13.5126 15.5131C13 16.0256 13 16.8506 13 18.5005C13 19.6668 13 20.4209 13.1811 20.9438C12.7971 20.9811 12.4025 21.0005 12 21.0005C8.13401 21.0005 5 19.2096 5 17.0005C5 14.7913 8.13401 13.0005 12 13.0005C14.6134 13.0005 16.8924 13.8189 18.0947 15.0316Z"
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
          <circle cx="12" cy="6.00049" r="4" fill="currentColor" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.4697 16.9702C17.7626 16.6773 18.2374 16.6773 18.5303 16.9702L19 17.4398L19.4697 16.9702C19.7626 16.6773 20.2374 16.6773 20.5303 16.9702C20.8232 17.2631 20.8232 17.7379 20.5303 18.0308L20.0607 18.5005L20.5303 18.9702C20.8232 19.263 20.8232 19.7379 20.5303 20.0308C20.2374 20.3237 19.7626 20.3237 19.4697 20.0308L19 19.5612L18.5303 20.0308C18.2374 20.3237 17.7626 20.3237 17.4697 20.0308C17.1768 19.7379 17.1768 19.2631 17.4697 18.9702L17.9393 18.5005L17.4697 18.0308C17.1768 17.7379 17.1768 17.2631 17.4697 16.9702Z"
            fill="currentColor"
          />
          <path
            d="M18.314 15.2724C17.6386 15.1777 16.9284 15.3901 16.409 15.9095C15.708 16.6105 15.5663 17.659 15.9838 18.5005C15.7012 19.0701 15.6748 19.7345 15.9047 20.3218C14.7893 20.751 13.4458 21.0015 12 21.0015C8.13401 21.0015 5 19.2106 5 17.0015C5 14.7923 8.13401 13.0015 12 13.0015C14.7822 13.0015 17.1853 13.929 18.314 15.2724Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconUserCrossRounded as IconComponentType).keywords = [
  "user",
  "cross",
  "rounded",
  "exploiter",
  "enjoyer",
  "drug user",
  "substance abuser",
  "customer",
  "client",
  "employer",
  "consumer",
  "employee",
  "foil",
  "crisscross",
  "intersect",
  "transverse",
  "transversal",
  "crosswise",
  "mark",
  "cut across",
  "hybridization",
  "ringed",
  "ring-shaped",
  "annulate",
  "annular",
  "circular",
  "rotund",
  "bowfront",
  "prolate",
  "domed",
];

export default IconUserCrossRounded as IconComponentType;
