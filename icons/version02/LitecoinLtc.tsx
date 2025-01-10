import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconLitecoinLtc: FC<IconProps> = ({
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
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M12.2301 6.35999H14.7601L12.6301 14.3H16.8501L16.3401 17.14H8.64014L11.7201 6.35999H12.2301Z"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.6902 10.98L7.99023 12.52"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
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
          <path d="M24.6699 0H0.669922V24H24.6699V0Z" fill="none" />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z"
            fill="currentColor"
          />
          <path
            d="M13.4498 6.35999C14.1098 6.35999 14.5898 6.97999 14.4198 7.61999L12.6298 14.3H15.6598C16.2798 14.3 16.7598 14.86 16.6398 15.48L16.4898 16.32C16.3998 16.8 15.9898 17.14 15.5098 17.14H9.96981C9.30981 17.14 8.82982 16.5 9.00982 15.87L11.6198 6.72999C11.6798 6.51999 11.8798 6.36999 12.0998 6.36999H13.4498V6.35999Z"
            fill="currentColor"
          />
          <path
            d="M7.99006 13.27C7.64006 13.27 7.33005 13.02 7.26005 12.67C7.18005 12.26 7.44005 11.87 7.85005 11.79L15.5501 10.25C15.9501 10.17 16.3501 10.43 16.4301 10.84C16.5101 11.25 16.2501 11.64 15.8401 11.72L8.14005 13.26C8.09005 13.27 8.04006 13.27 7.99006 13.27Z"
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
            d="M12.6699 2C7.14992 2 2.66992 6.48 2.66992 12C2.66992 17.52 7.14992 22 12.6699 22C18.1899 22 22.6699 17.52 22.6699 12C22.6699 6.48 18.1899 2 12.6699 2ZM16.4899 16.32C16.3999 16.8 15.9899 17.14 15.5099 17.14H9.96991C9.30991 17.14 8.82992 16.5 9.00992 15.87L9.84991 12.92L8.13992 13.26C8.08992 13.27 8.03993 13.27 7.98993 13.27C7.63993 13.27 7.32992 13.02 7.25992 12.67C7.17992 12.26 7.43991 11.87 7.84991 11.79L10.3199 11.3L11.6299 6.73C11.6899 6.52 11.8899 6.37 12.1099 6.37H13.4699C14.1299 6.37 14.6099 6.99 14.4399 7.63L13.6299 10.64L15.5599 10.25C15.9599 10.17 16.3599 10.43 16.4399 10.84C16.5199 11.25 16.2599 11.64 15.8499 11.72L13.1899 12.25L12.6399 14.3H15.6699C16.2899 14.3 16.7599 14.86 16.6499 15.48L16.4899 16.32Z"
            fill="none"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconLitecoinLtc as IconComponentType).keywords = [
  "litecoin",
  "ltc",
  "bitcoin",
  "peercoin",
  "ethereum classic",
  "ethereum",
  "counterparty",
  "economics of bitcoin",
  "tezos",
  "namecoin",
  "avalanche",
  "atc",
  "lfc",
  "crf",
  "cta",
  "sld",
  "ic",
  "flc",
  "cfl",
  "atk",
];

export default IconLitecoinLtc as IconComponentType;
