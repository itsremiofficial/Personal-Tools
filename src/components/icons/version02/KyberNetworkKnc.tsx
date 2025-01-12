import { FC } from "react";

const IconKyberNetworkKnc: FC<IconProps> = ({
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
            d="M11.6799 2.57001L6.67993 5.43C6.05993 5.79 5.66992 6.45 5.66992 7.17V15.98C5.66992 16.63 5.97995 17.23 6.50995 17.61L11.5099 21.18C12.2099 21.68 13.1399 21.68 13.8299 21.18L18.8299 17.61C19.3599 17.23 19.6699 16.63 19.6699 15.98V7.17C19.6699 6.45 19.2899 5.79 18.6599 5.43L13.6599 2.57001C13.0499 2.22001 12.2899 2.22001 11.6799 2.57001Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M12.6699 3L10.6699 12L12.5199 21.23"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.8299 16.91L10.6699 12L19.2099 7.26001"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
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
            opacity={duotone ? "0.58" : "1"}
            d="M24.6699 0H0.669922V24H24.6699V0Z"
            fill="none"
          />
          <path
            opacity={duotone ? "0.6" : "1"}
            d="M19.6699 7.16003V15.97C19.6699 16.4 19.5299 16.81 19.2899 17.15L18.8299 16.91L10.6699 12L19.2099 7.26003L19.6599 7.03003C19.6699 7.07003 19.6699 7.12003 19.6699 7.16003Z"
            fill="currentColor"
          />
          <path
            d="M19.6599 7.02995L19.2099 7.25995L10.6699 11.9999L12.6699 2.99995L12.8099 2.31995C13.0999 2.33995 13.3899 2.41995 13.6599 2.56995L18.6599 5.41995C19.2499 5.75995 19.6199 6.35995 19.6599 7.02995Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.6699 2.99997L10.6699 12L12.5199 21.23L12.5699 21.53C12.1899 21.52 11.8199 21.4 11.5099 21.17L6.50995 17.6C5.97995 17.22 5.66992 16.62 5.66992 15.97V7.15997C5.66992 6.43997 6.04993 5.77997 6.67993 5.41997L11.6799 2.56997C12.0299 2.36997 12.4199 2.27997 12.8099 2.31997L12.6699 2.99997Z"
            fill="currentColor"
          />
          <path
            d="M19.2899 17.15C19.1599 17.32 19.0099 17.47 18.8299 17.6L13.8299 21.17C13.4599 21.44 13.0099 21.56 12.5699 21.53L12.5199 21.23L10.6699 12L18.8299 16.91L19.2899 17.15Z"
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
            d="M18.49 8.7C19.2 8.31 20.07 8.82001 20.06 9.63001L20.02 15.05C20.01 15.87 19.12 16.37 18.42 15.95L13.74 13.15C13.04 12.73 13.06 11.71 13.77 11.32L18.49 8.7Z"
            fill="none"
          />
          <path
            d="M19.92 6.28C20.07 6.66 19.8399 7.05 19.4799 7.25L13.8499 10.36C13.0499 10.8 12.11 10.09 12.31 9.21L13.5299 3.67999C13.6799 2.97999 14.4699 2.64 15.0899 2.99L19.01 5.22999C19.44 5.47999 19.75 5.85 19.92 6.28Z"
            fill="none"
          />
          <path
            d="M12.6801 2.66999L10.61 11.97C10.58 12.11 10.58 12.26 10.61 12.41L12.34 21.09C12.46 21.69 11.9501 22.26 11.4501 21.89L6.16003 18.12C5.60003 17.72 5.27002 17.08 5.27002 16.4V7.08999C5.27002 6.32999 5.67003 5.62999 6.34003 5.24999L11.6301 2.24C11.7801 2.15 11.94 2.08999 12.1 2.03999C12.48 1.90999 12.7601 2.28999 12.6801 2.66999Z"
            fill="none"
          />
          <path
            d="M18.2998 16.81C18.9498 17.2 18.9898 18.13 18.3798 18.57L14.9098 21.09C14.2898 21.54 13.3998 21.2 13.2498 20.44L12.2298 15.24C12.0498 14.34 13.0198 13.66 13.8098 14.13L18.2998 16.81Z"
            fill="none"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconKyberNetworkKnc as IconComponent).keywords = [
  "kyber",
  "network",
  "knc",
  "quantum key distribution",
  "post-quantum cryptography",
  "quantum error correction",
  "strong cryptography",
  "superconducting quantum computing",
  "key encapsulation mechanism",
  "quantum programming",
  "quantum memory",
  "integrated encryption scheme",
  "meshwork",
  "net",
  "mesh",
  "reticulation",
  "web",
  "communications network",
  "lacis",
  "ring",
  "array",
  "kpp",
];

export default IconKyberNetworkKnc as IconComponent;
