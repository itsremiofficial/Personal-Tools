import { FC } from "react";

const IconGlobalRefresh: FC<IconProps> = ({
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
            d="M22.6699 12C22.6699 6.48 18.1899 2 12.6699 2C7.14992 2 2.66992 6.48 2.66992 12C2.66992 17.52 7.14992 22 12.6699 22"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M8.66953 3H9.66953C7.71953 8.84 7.71953 15.16 9.66953 21H8.66953"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.6699 3C16.6399 5.92 17.1299 8.96 17.1299 12"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.66992 16V15C6.58992 15.97 9.62992 16.46 12.6699 16.46"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.66992 9.0001C9.50992 7.0501 15.8299 7.0501 21.6699 9.0001"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M20.1697 14.7C19.7997 14.59 19.3797 14.52 18.9197 14.52C16.8497 14.52 15.1797 16.2 15.1797 18.26C15.1797 20.33 16.8597 22 18.9197 22C20.9797 22 22.6597 20.32 22.6597 18.26C22.6597 17.49 22.4297 16.77 22.0297 16.18"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.71 14.8001L19.46 13.3701"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.71 14.8003L19.25 15.8603"
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
            d="M23.3199 18.13C23.2199 17.7299 22.8199 17.4799 22.4199 17.5799C22.0199 17.6799 21.7699 18.08 21.8599 18.48C21.8999 18.65 21.9199 18.8199 21.9199 18.9999C21.9199 20.2399 20.9099 21.2499 19.6699 21.2499C18.4299 21.2499 17.4199 20.2399 17.4199 18.9999C17.4199 17.8999 18.2099 16.99 19.2599 16.79C19.1599 17.02 19.1699 17.2999 19.3299 17.5199C19.4799 17.7199 19.7099 17.8299 19.9399 17.8299C20.0899 17.8299 20.2499 17.7799 20.3799 17.6899L21.5499 16.8399C21.5599 16.8299 21.5599 16.82 21.5699 16.82C21.5799 16.81 21.5899 16.8099 21.5999 16.7999C21.6299 16.7699 21.6499 16.74 21.6699 16.7C21.6999 16.66 21.7399 16.6299 21.7599 16.5799C21.7799 16.5399 21.7899 16.49 21.8099 16.45C21.8199 16.4 21.8399 16.3599 21.8499 16.3099C21.8599 16.2599 21.8499 16.22 21.8399 16.17C21.8399 16.12 21.8399 16.0699 21.8199 16.0199C21.8099 15.9699 21.7799 15.93 21.7599 15.89C21.7399 15.85 21.7299 15.8099 21.7099 15.7799C21.6999 15.7699 21.6899 15.77 21.6799 15.76C21.6699 15.75 21.6699 15.74 21.6599 15.73L20.6599 14.5799C20.3899 14.2699 19.9099 14.23 19.5999 14.51C19.3799 14.71 19.2999 14.9999 19.3799 15.2699C17.4499 15.4199 15.9199 17.0199 15.9199 18.9899C15.9199 21.0599 17.5999 22.7399 19.6699 22.7399C21.7399 22.7399 23.4199 21.0599 23.4199 18.9899C23.4199 18.7099 23.3899 18.41 23.3199 18.13Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2.69968 14.6299C2.69968 14.6599 2.67969 14.6999 2.67969 14.7299C3.59969 16.5699 5.09967 18.0799 6.93967 18.9899C6.96967 18.9899 7.00967 18.9699 7.03967 18.9699C6.69967 17.8099 6.43966 16.6199 6.24966 15.4299C5.04966 15.2299 3.85968 14.9699 2.69968 14.6299Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19.74 6.42993C18.8 4.45993 17.21 2.86994 15.25 1.93994C15.61 3.12994 15.91 4.34995 16.11 5.56995C17.33 5.76995 18.55 6.05993 19.74 6.42993Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2.59961 6.43002C3.79961 6.07002 5.01962 5.77004 6.23962 5.57004C6.43962 4.38004 6.6896 3.20004 7.0296 2.04004C6.9996 2.04004 6.95963 2.02002 6.92963 2.02002C5.04963 2.95002 3.51961 4.52002 2.59961 6.43002Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14.4896 5.36023C14.2496 4.06023 13.9496 2.76024 13.5196 1.50024C13.4996 1.43024 13.4996 1.37025 13.4896 1.29025C12.7496 1.11025 11.9696 0.990234 11.1696 0.990234C10.3596 0.990234 9.58963 1.10025 8.83963 1.29025C8.82963 1.36025 8.83961 1.42024 8.81961 1.50024C8.39961 2.76024 8.08961 4.06023 7.84961 5.36023C10.0596 5.12023 12.2796 5.12023 14.4896 5.36023Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6.03015 7.18018C4.72015 7.42018 3.43017 7.72018 2.17017 8.15018C2.10017 8.17018 2.04017 8.17018 1.96017 8.18018C1.78017 8.92018 1.66016 9.70018 1.66016 10.5002C1.66016 11.3102 1.77017 12.0802 1.96017 12.8302C2.03017 12.8402 2.09017 12.8302 2.17017 12.8502C3.43017 13.2702 4.72015 13.5802 6.03015 13.8202C5.79015 11.6102 5.79015 9.39018 6.03015 7.18018Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20.3698 8.18018C20.2998 8.18018 20.2398 8.17018 20.1598 8.15018C18.8998 7.73018 17.5998 7.42018 16.2998 7.18018C16.5498 9.39018 16.5498 11.6102 16.2998 13.8102C17.5998 13.5702 18.8998 13.2702 20.1598 12.8402C20.2298 12.8202 20.2898 12.8302 20.3698 12.8202C20.5498 12.0702 20.6698 11.3002 20.6698 10.4902C20.6698 9.70017 20.5598 8.93018 20.3698 8.18018Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.84961 15.6401C8.08961 16.9501 8.38961 18.2401 8.81961 19.5001C8.83961 19.5701 8.82963 19.6301 8.83963 19.7101C9.58963 19.8901 10.3596 20.0101 11.1696 20.0101C11.9696 20.0101 12.7496 19.9001 13.4896 19.7101C13.4996 19.6401 13.4996 19.5801 13.5196 19.5001C13.9396 18.2401 14.2496 16.9501 14.4896 15.6401C13.3896 15.7601 12.2796 15.8501 11.1696 15.8501C10.0596 15.8401 8.94961 15.7601 7.84961 15.6401Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.61953 6.9501C7.31953 9.3101 7.31953 11.6901 7.61953 14.0601C9.97953 14.3601 12.3595 14.3601 14.7295 14.0601C15.0295 11.7001 15.0295 9.3201 14.7295 6.9501C12.3595 6.6501 9.97953 6.6501 7.61953 6.9501Z"
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
          <g clipPath="url(#clip0_12_64896)">
            <path
              d="M23.3197 18.1302C23.2197 17.7302 22.8197 17.4802 22.4197 17.5802C22.0197 17.6802 21.7697 18.0802 21.8597 18.4802C21.8997 18.6502 21.9197 18.8202 21.9197 19.0002C21.9197 20.2402 20.9097 21.2502 19.6697 21.2502C18.4297 21.2502 17.4197 20.2402 17.4197 19.0002C17.4197 17.9002 18.2097 16.9902 19.2597 16.7902C19.1597 17.0202 19.1697 17.3002 19.3297 17.5202C19.4797 17.7202 19.7097 17.8302 19.9397 17.8302C20.0897 17.8302 20.2497 17.7802 20.3797 17.6902L21.5497 16.8402C21.5597 16.8302 21.5597 16.8202 21.5697 16.8202C21.5797 16.8102 21.5897 16.8102 21.5997 16.8002C21.6297 16.7702 21.6497 16.7402 21.6697 16.7002C21.6997 16.6602 21.7397 16.6302 21.7597 16.5802C21.7797 16.5402 21.7897 16.4902 21.8097 16.4502C21.8197 16.4002 21.8397 16.3602 21.8497 16.3102C21.8597 16.2602 21.8497 16.2202 21.8397 16.1702C21.8397 16.1202 21.8397 16.0702 21.8197 16.0202C21.8097 15.9702 21.7797 15.9302 21.7597 15.8902C21.7397 15.8502 21.7297 15.8102 21.7097 15.7802C21.6997 15.7702 21.6897 15.7702 21.6797 15.7602C21.6697 15.7602 21.6697 15.7502 21.6697 15.7402L20.6697 14.5902C20.3997 14.2802 19.9197 14.2402 19.6097 14.5202C19.3897 14.7202 19.3097 15.0102 19.3897 15.2802C17.4597 15.4302 15.9297 17.0302 15.9297 19.0002C15.9297 21.0702 17.6097 22.7502 19.6797 22.7502C21.7497 22.7502 23.4297 21.0702 23.4297 19.0002C23.4197 18.7102 23.3897 18.4102 23.3197 18.1302Z"
              fill="currentColor"
            />
            <path
              d="M2.69969 14.6299C2.69969 14.6599 2.67969 14.6999 2.67969 14.7299C3.59969 16.5699 5.09969 18.0799 6.93969 18.9899C6.96969 18.9899 7.00969 18.9699 7.03969 18.9699C6.69969 17.8099 6.43969 16.6199 6.24969 15.4299C5.04969 15.2299 3.85969 14.9699 2.69969 14.6299Z"
              fill="currentColor"
            />
            <path
              d="M19.74 6.42994C18.8 4.45994 17.21 2.86994 15.25 1.93994C15.61 3.12994 15.91 4.34994 16.11 5.56994C17.33 5.76994 18.55 6.05994 19.74 6.42994Z"
              fill="currentColor"
            />
            <path
              d="M2.59961 6.43002C3.79961 6.07002 5.01961 5.77002 6.23961 5.57002C6.43961 4.38002 6.68961 3.20002 7.02961 2.04002C6.99961 2.04002 6.95961 2.02002 6.92961 2.02002C5.04961 2.95002 3.51961 4.52002 2.59961 6.43002Z"
              fill="currentColor"
            />
            <path
              d="M14.4896 5.36C14.2496 4.06 13.9496 2.76 13.5196 1.5C13.4996 1.43 13.4996 1.37 13.4896 1.29C12.7496 1.11 11.9696 1 11.1696 1C10.3596 1 9.58961 1.11 8.83961 1.3C8.82961 1.37 8.83961 1.43 8.81961 1.51C8.39961 2.77 8.08961 4.06 7.84961 5.36C10.0596 5.12 12.2796 5.12 14.4896 5.36Z"
              fill="currentColor"
            />
            <path
              d="M6.02992 7.18018C4.71992 7.42018 3.43992 7.73018 2.16992 8.15018C2.09992 8.17018 2.03992 8.17018 1.96992 8.18018C1.77992 8.92018 1.66992 9.70018 1.66992 10.5002C1.66992 11.3102 1.77992 12.0802 1.96992 12.8302C2.03992 12.8402 2.09992 12.8302 2.17992 12.8502C3.43992 13.2702 4.72992 13.5802 6.03992 13.8202C5.78992 11.6102 5.78992 9.39018 6.02992 7.18018Z"
              fill="currentColor"
            />
            <path
              d="M20.3698 8.18018C20.2998 8.18018 20.2398 8.17018 20.1598 8.15018C18.8998 7.73018 17.5998 7.42018 16.2998 7.18018C16.5498 9.39018 16.5498 11.6102 16.2998 13.8102C17.5998 13.5702 18.8998 13.2702 20.1598 12.8402C20.2298 12.8202 20.2898 12.8302 20.3698 12.8202C20.5498 12.0702 20.6698 11.3002 20.6698 10.4902C20.6698 9.70018 20.5598 8.93018 20.3698 8.18018Z"
              fill="currentColor"
            />
            <path
              d="M7.84961 15.6399C8.08961 16.9499 8.38961 18.2399 8.81961 19.4999C8.83961 19.5699 8.82961 19.6299 8.83961 19.7099C9.58961 19.8899 10.3596 19.9999 11.1696 19.9999C11.9696 19.9999 12.7496 19.8899 13.4896 19.6999C13.4996 19.6299 13.4996 19.5699 13.5196 19.4899C13.9396 18.2299 14.2496 16.9399 14.4896 15.6299C13.3896 15.7499 12.2796 15.8399 11.1696 15.8399C10.0596 15.8399 8.94961 15.7599 7.84961 15.6399Z"
              fill="currentColor"
            />
            <path
              d="M7.61953 6.9501C7.31953 9.3101 7.31953 11.6901 7.61953 14.0601C9.97953 14.3601 12.3595 14.3601 14.7295 14.0601C15.0295 11.7001 15.0295 9.3201 14.7295 6.9501C12.3595 6.6501 9.97953 6.6501 7.61953 6.9501Z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath>
              <rect
                width="24"
                height="24"
                fill="none"
                transform="translate(0.669922)"
              />
            </clipPath>
          </defs>
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconGlobalRefresh as IconComponent).keywords = [
  "global",
  "refresh",
  "worldwide",
  "international",
  "world",
  "circular",
  "round",
  "spherical",
  "orbicular",
  "globular",
  "spheric",
  "refreshen",
  "freshen",
  "review",
  "freshen up",
  "brush up",
  "refresher",
  "refreshment",
  "rejuvenate",
  "revive",
];

export default IconGlobalRefresh as IconComponent;
