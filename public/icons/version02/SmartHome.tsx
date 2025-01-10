import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconSmartHome: FC<IconProps> = ({
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
            d="M12.0702 21.8101H18.2702C19.7002 21.8101 21.0702 20.65 21.3102 19.24L22.6402 11.28C22.8002 10.3 22.3002 8.99002 21.5302 8.37002L14.6002 2.82998C13.5302 1.96998 11.8002 1.96997 10.7402 2.81997L3.8102 8.37002C3.0302 8.99002 2.53019 10.3 2.70019 11.28L2.98018 12.96"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2.66992 19C4.42992 19.04 5.62992 20.24 5.66992 22"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.66992 22C8.65992 21.24 8.52993 20.53 8.29993 19.88C7.70993 18.21 6.44992 16.96 4.78992 16.37C4.13992 16.14 3.42992 16.01 2.66992 16"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2.66542 22H2.67442"
            stroke="currentColor"
            strokeWidth="2"
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
            d="M10.7402 3.01003L3.8102 8.56002C3.0302 9.18002 2.53019 10.49 2.70019 11.47L4.03017 19.43C4.27017 20.85 5.63018 22 7.07018 22H18.2702C19.7002 22 21.0702 20.84 21.3102 19.43L22.6402 11.47C22.8002 10.49 22.3002 9.18002 21.5302 8.56002L14.6002 3.02004C13.5302 2.16004 11.8002 2.16003 10.7402 3.01003Z"
            fill="currentColor"
          />
          <path
            d="M13.0403 17.12C12.6303 17.12 12.3003 16.79 12.2903 16.39C12.2603 15.04 11.3703 14.15 10.0203 14.12C9.61027 14.11 9.28026 13.77 9.29026 13.35C9.30026 12.94 9.63026 12.62 10.0403 12.62C10.0503 12.62 10.0503 12.62 10.0603 12.62C12.2103 12.67 13.7503 14.2 13.7903 16.35C13.8003 16.76 13.4703 17.11 13.0603 17.12C13.0603 17.12 13.0503 17.12 13.0403 17.12Z"
            fill="currentColor"
          />
          <path
            d="M16.0403 17.12C15.6303 17.12 15.2903 16.79 15.2903 16.38C15.2803 15.72 15.1702 15.09 14.9702 14.5C14.4602 13.04 13.3702 11.96 11.9102 11.44C11.3202 11.23 10.6902 11.12 10.0302 11.12C9.62024 11.12 9.28025 10.78 9.29025 10.36C9.29025 9.94999 9.63025 9.62 10.0403 9.62H10.0503C10.8803 9.63 11.6702 9.77003 12.4102 10.03C14.3002 10.7 15.7103 12.11 16.3803 14C16.6403 14.74 16.7803 15.54 16.7903 16.36C16.8003 16.78 16.4703 17.12 16.0403 17.12C16.0503 17.12 16.0503 17.12 16.0403 17.12Z"
            fill="currentColor"
          />
          <path
            d="M10.0498 17.38C9.4898 17.38 9.0498 16.93 9.0498 16.38C9.0498 15.83 9.4998 15.38 10.0498 15.38C10.5998 15.38 11.0498 15.83 11.0498 16.38C11.0498 16.93 10.5998 17.38 10.0498 17.38Z"
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
            d="M21.5302 8.56L14.6002 3.02C13.5302 2.16 11.8002 2.16 10.7402 3.01L3.81019 8.56C3.03019 9.18 2.53019 10.49 2.70019 11.47L4.03019 19.43C4.27019 20.85 5.63019 22 7.07019 22H18.2702C19.7002 22 21.0702 20.84 21.3102 19.43L22.6402 11.47C22.8002 10.49 22.3002 9.18 21.5302 8.56ZM10.0502 17.38C9.49019 17.38 9.05019 16.93 9.05019 16.38C9.05019 15.83 9.50019 15.38 10.0502 15.38C10.6002 15.38 11.0502 15.83 11.0502 16.38C11.0502 16.93 10.6002 17.38 10.0502 17.38ZM13.0602 17.12C13.0502 17.12 13.0502 17.12 13.0402 17.12C12.6302 17.12 12.3002 16.79 12.2902 16.39C12.2602 15.04 11.3702 14.15 10.0202 14.12C9.61019 14.11 9.28019 13.77 9.29019 13.35C9.30019 12.94 9.63019 12.62 10.0402 12.62C10.0502 12.62 10.0502 12.62 10.0602 12.62C12.2102 12.67 13.7502 14.2 13.7902 16.35C13.8002 16.77 13.4802 17.12 13.0602 17.12ZM16.0502 17.12C15.6302 17.12 15.3002 16.79 15.2902 16.38C15.2802 15.72 15.1702 15.09 14.9702 14.5C14.4602 13.04 13.3702 11.96 11.9102 11.44C11.3202 11.23 10.6902 11.12 10.0302 11.12C9.62019 11.12 9.28019 10.78 9.29019 10.36C9.29019 9.95 9.63019 9.62 10.0402 9.62H10.0502C10.8802 9.63 11.6702 9.77 12.4102 10.03C14.3002 10.7 15.7102 12.11 16.3802 14C16.6402 14.74 16.7802 15.54 16.7902 16.36C16.8002 16.78 16.4702 17.12 16.0502 17.12Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSmartHome as IconComponentType).keywords = [
  "smart",
  "home",
  "hurt",
  "ache",
  "raffish",
  "rakish",
  "snappy",
  "cagy",
  "impertinent",
  "dashing",
  "impudent",
  "domicile",
  "habitation",
  "domestic",
  "dwelling",
  "nursing home",
  "rest home",
  "house",
  "dwelling house",
  "household",
];

export default IconSmartHome as IconComponentType;
