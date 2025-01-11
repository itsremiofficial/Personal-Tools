import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconHomeWifi: FC<IconProps> = ({
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
            d="M10.7402 2.81997L3.8102 8.37002C3.0302 8.99002 2.53019 10.3 2.70019 11.28L4.03017 19.24C4.27017 20.66 5.63018 21.8101 7.07018 21.8101H18.2702C19.7002 21.8101 21.0702 20.65 21.3102 19.24L22.6402 11.28C22.8002 10.3 22.3002 8.99002 21.5302 8.37002L14.6002 2.82998C13.5302 1.96998 11.8002 1.96997 10.7402 2.81997Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10.5498 14.38C11.8198 13.17 13.5198 13.17 14.7898 14.38"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.9099 12.2601C16.3699 11.7301 15.7699 11.3201 15.1499 11.0201C13.5599 10.2601 11.7799 10.2601 10.1799 11.0201C9.55993 11.3201 8.96992 11.7301 8.41992 12.2601"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.6654 16.5H12.6744"
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
            d="M10.7402 2.82003L3.8102 8.37002C3.0302 8.99002 2.53019 10.3 2.70019 11.28L4.03017 19.24C4.27017 20.66 5.63018 21.81 7.07018 21.81H18.2702C19.7002 21.81 21.0702 20.65 21.3102 19.24L22.6402 11.28C22.8002 10.3 22.3002 8.99002 21.5302 8.37002L14.6002 2.83004C13.5302 1.97004 11.8002 1.97003 10.7402 2.82003Z"
            fill="currentColor"
          />
          <path
            d="M14.7905 15.13C14.6005 15.13 14.4205 15.06 14.2705 14.92C13.3005 13.99 12.0405 13.99 11.0605 14.92C10.7605 15.21 10.2904 15.2 10.0004 14.9C9.71045 14.6 9.72047 14.13 10.0205 13.84C11.5705 12.35 13.7405 12.35 15.3005 13.84C15.6005 14.13 15.6105 14.6 15.3205 14.9C15.1905 15.05 14.9905 15.13 14.7905 15.13Z"
            fill="currentColor"
          />
          <path
            d="M16.9103 13.01C16.7203 13.01 16.5303 12.94 16.3903 12.8C15.9203 12.34 15.3903 11.97 14.8303 11.7C13.4303 11.03 11.9003 11.03 10.5103 11.7C9.95029 11.97 9.43029 12.34 8.95029 12.8C8.66029 13.09 8.18029 13.09 7.89029 12.79C7.60029 12.49 7.6103 12.02 7.9003 11.73C8.4903 11.15 9.1503 10.6899 9.8603 10.3499C11.6703 9.47995 13.6703 9.47995 15.4703 10.3499C16.1803 10.6899 16.8403 11.15 17.4303 11.73C17.7303 12.02 17.7303 12.49 17.4403 12.79C17.3003 12.93 17.1103 13.01 16.9103 13.01Z"
            fill="currentColor"
          />
          <path
            d="M12.6705 17.5C12.4105 17.5 12.1605 17.4 11.9605 17.21C11.5705 16.82 11.5705 16.19 11.9605 15.8C12.3505 15.41 12.9905 15.41 13.3805 15.8C13.7705 16.19 13.7705 16.82 13.3805 17.21C13.1805 17.4 12.9305 17.5 12.6705 17.5Z"
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
            d="M21.5302 8.37L14.6002 2.83C13.5302 1.97 11.8002 1.97 10.7402 2.82L3.81019 8.37C3.03019 8.99 2.53019 10.3 2.70019 11.28L4.03019 19.24C4.27019 20.66 5.63019 21.81 7.07019 21.81H18.2702C19.7002 21.81 21.0702 20.65 21.3102 19.24L22.6402 11.28C22.8002 10.3 22.3002 8.99 21.5302 8.37ZM13.3802 17.2C13.1802 17.4 12.9302 17.5 12.6702 17.5C12.4102 17.5 12.1602 17.4 11.9602 17.21C11.5702 16.82 11.5702 16.19 11.9602 15.8C12.3502 15.41 12.9902 15.41 13.3802 15.8C13.7702 16.18 13.7702 16.81 13.3802 17.2ZM15.3302 14.9C15.1802 15.05 14.9902 15.13 14.7902 15.13C14.6002 15.13 14.4202 15.06 14.2702 14.92C13.3002 13.99 12.0402 13.99 11.0602 14.92C10.7602 15.21 10.2902 15.2 10.0002 14.9C9.71019 14.6 9.72019 14.13 10.0202 13.84C11.5702 12.35 13.7402 12.35 15.3002 13.84C15.6102 14.12 15.6202 14.6 15.3302 14.9ZM17.4502 12.78C17.3002 12.93 17.1102 13.01 16.9102 13.01C16.7202 13.01 16.5302 12.94 16.3902 12.8C15.9202 12.34 15.3902 11.97 14.8302 11.7C13.4302 11.03 11.9002 11.03 10.5102 11.7C9.95019 11.97 9.43019 12.34 8.95019 12.8C8.66019 13.09 8.18019 13.09 7.89019 12.79C7.60019 12.49 7.61019 12.02 7.90019 11.73C8.49019 11.15 9.15019 10.69 9.86019 10.35C11.6702 9.48 13.6702 9.48 15.4702 10.35C16.1802 10.69 16.8402 11.15 17.4302 11.73C17.7302 12.01 17.7402 12.49 17.4502 12.78Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconHomeWifi as IconComponentType).keywords = [
  "home",
  "wifi",
  "domicile",
  "habitation",
  "domestic",
  "dwelling",
  "nursing home",
  "rest home",
  "house",
  "dwelling house",
  "household",
  "wi-fi",
  "wireless",
  "wlan",
  "bluetooth",
  "ethernet",
  "broadband",
  "internet",
  "airconditioning",
  "modem",
];

export default IconHomeWifi as IconComponentType;