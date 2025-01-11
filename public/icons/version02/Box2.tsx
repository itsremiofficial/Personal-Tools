import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconBox2: FC<IconProps> = ({
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
            d="M14.8903 9.78L12.6703 10.89M12.6703 10.89L10.4503 9.78M12.6703 10.89V13.67M14.8903 3.11L12.6703 2L10.4503 3.11M6.00027 18.67L3.78027 17.56V14.78M19.3403 18.67L21.5603 17.56V14.78"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M21.5598 6.91L19.3398 8.02"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.5598 6.90999L19.3398 5.79999"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.5596 6.91V9.69"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.7793 6.90999L5.9993 5.79999"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.7793 6.91L5.9993 8.02"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.7793 6.91V9.69"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.6692 22.47L10.4492 21.36"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.6699 22.47L14.8899 21.36"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.6699 22.47V19.69"
              stroke="currentColor"
              strokeWidth={width}
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
            opacity={duotone ? "0.4" : "1"}
            d="M6.00004 19.42C5.89004 19.42 5.77004 19.39 5.67004 19.34L3.45004 18.23C3.20004 18.1 3.04004 17.84 3.04004 17.56V14.78C3.04004 14.37 3.38004 14.03 3.79004 14.03C4.20004 14.03 4.54004 14.37 4.54004 14.78V17.09L6.35004 17.99C6.72004 18.18 6.87003 18.63 6.69003 19C6.54003 19.26 6.28004 19.42 6.00004 19.42Z"
            fill="currentColor"
          />
          <path
            d="M12.6704 22.75C12.6104 22.75 12.5504 22.74 12.5004 22.73C12.4404 22.72 12.3804 22.69 12.3204 22.66L10.1104 21.56C9.74037 21.37 9.59037 20.92 9.77037 20.55C9.96037 20.18 10.4104 20.03 10.7804 20.21L11.9204 20.78V19.22C11.9204 18.81 12.2604 18.47 12.6704 18.47C13.0804 18.47 13.4204 18.81 13.4204 19.22V20.78L14.5604 20.21C14.9304 20.03 15.3804 20.18 15.5704 20.55C15.7604 20.92 15.6104 21.37 15.2304 21.56L13.0204 22.66C12.9604 22.69 12.9004 22.71 12.8404 22.73C12.7804 22.74 12.7304 22.75 12.6704 22.75Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19.3401 19.42C19.0701 19.42 18.8001 19.27 18.6701 19.01C18.4801 18.64 18.6301 18.19 19.0101 18L20.8201 17.1V14.79C20.8201 14.38 21.1601 14.04 21.5701 14.04C21.9801 14.04 22.3201 14.38 22.3201 14.79V17.57C22.3201 17.85 22.1601 18.11 21.9101 18.24L19.6901 19.35C19.5601 19.39 19.4501 19.42 19.3401 19.42Z"
            fill="currentColor"
          />
          <path
            d="M12.6704 14.42C12.2604 14.42 11.9204 14.08 11.9204 13.67V11.36L10.1104 10.46C9.74037 10.27 9.59037 9.82 9.77037 9.45C9.96037 9.08 10.4104 8.93 10.7804 9.11L12.6704 10.05L14.5604 9.11C14.9304 8.93 15.3804 9.07 15.5704 9.45C15.7604 9.82 15.6104 10.27 15.2304 10.46L13.4204 11.36V13.67C13.4204 14.08 13.0804 14.42 12.6704 14.42Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M3.78027 9.97C3.37027 9.97 3.03027 9.63 3.03027 9.22V6.46V6.44999C3.03027 6.38999 3.04027 6.32999 3.05027 6.27999C3.07027 6.19999 3.10027 6.12999 3.14027 6.05999C3.17027 6.00999 3.20027 5.96999 3.24027 5.92999C3.28027 5.88999 3.33027 5.85 3.38027 5.82C3.40027 5.81 3.43027 5.78999 3.45027 5.77999L5.66027 4.67999C6.03027 4.49999 6.48027 4.64 6.67027 5.02C6.86027 5.39 6.71028 5.83999 6.33028 6.02999L5.45027 6.47L6.33028 6.91C6.70028 7.1 6.85027 7.54999 6.67027 7.91999C6.49027 8.28999 6.03027 8.43999 5.66027 8.25999L4.52027 7.69V9.25C4.53027 9.64 4.20027 9.97 3.78027 9.97Z"
            fill="currentColor"
          />
          <path
            d="M14.8897 3.86C14.7797 3.86 14.6597 3.82999 14.5597 3.77999L12.6697 2.83999L10.7797 3.77999C10.4097 3.96999 9.95971 3.82 9.76971 3.44C9.57971 3.07 9.72971 2.61999 10.1097 2.42999L12.3297 1.32C12.5397 1.21 12.7897 1.21 12.9997 1.32L15.2197 2.42999C15.5897 2.61999 15.7397 3.07 15.5597 3.44C15.4297 3.71 15.1697 3.86 14.8897 3.86Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21.5603 9.97C21.1503 9.97 20.8103 9.63 20.8103 9.22V7.66L19.6703 8.22999C19.3003 8.41999 18.8503 8.27 18.6603 7.89C18.4703 7.52 18.6203 7.07 19.0003 6.88L19.8803 6.44L19.0003 6C18.6303 5.81 18.4803 5.36 18.6603 4.99C18.8403 4.62 19.3003 4.46999 19.6703 4.64999L21.8803 5.75C21.9003 5.76 21.9303 5.76999 21.9503 5.78999C22.0103 5.81999 22.0603 5.87 22.1103 5.92C22.1403 5.96 22.1703 5.99999 22.2003 6.03999C22.2403 6.10999 22.2703 6.17999 22.2903 6.25999C22.3003 6.31999 22.3103 6.37999 22.3103 6.42999V6.44V9.2C22.3103 9.64 21.9703 9.97 21.5603 9.97Z"
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
            d="M6.00004 19.42C5.89004 19.42 5.77004 19.39 5.67004 19.34L3.45004 18.23C3.20004 18.1 3.04004 17.84 3.04004 17.56V14.78C3.04004 14.37 3.38004 14.03 3.79004 14.03C4.20004 14.03 4.54004 14.37 4.54004 14.78V17.09L6.34004 18C6.71004 18.18 6.86004 18.63 6.67004 19C6.54004 19.26 6.28004 19.42 6.00004 19.42Z"
            fill="currentColor"
          />
          <path
            d="M12.6704 22.75C12.6104 22.75 12.5504 22.74 12.5004 22.73C12.4404 22.72 12.3804 22.69 12.3204 22.66L10.1104 21.56C9.74037 21.37 9.59037 20.92 9.77037 20.55C9.96037 20.18 10.4104 20.03 10.7804 20.21L11.9204 20.78V19.22C11.9204 18.81 12.2604 18.47 12.6704 18.47C13.0804 18.47 13.4204 18.81 13.4204 19.22V20.78L14.5604 20.21C14.9304 20.03 15.3804 20.18 15.5704 20.55C15.7604 20.92 15.6104 21.37 15.2304 21.56L13.0204 22.66C12.9604 22.69 12.9004 22.71 12.8404 22.73C12.7804 22.74 12.7304 22.75 12.6704 22.75Z"
            fill="currentColor"
          />
          <path
            d="M19.3401 19.42C19.0701 19.42 18.8001 19.27 18.6701 19.01C18.4801 18.64 18.6301 18.19 19.0101 18L20.8201 17.1V14.79C20.8201 14.38 21.1601 14.04 21.5701 14.04C21.9801 14.04 22.3201 14.38 22.3201 14.79V17.57C22.3201 17.85 22.1601 18.11 21.9101 18.24L19.6701 19.34C19.5601 19.39 19.4501 19.42 19.3401 19.42Z"
            fill="currentColor"
          />
          <path
            d="M12.6704 14.42C12.2604 14.42 11.9204 14.08 11.9204 13.67V11.36L10.1104 10.46C9.74037 10.27 9.59037 9.82 9.77037 9.45C9.96037 9.08 10.4104 8.93 10.7804 9.11L12.6704 10.05L14.5604 9.11C14.9304 8.93 15.3804 9.07 15.5704 9.45C15.7604 9.82 15.6104 10.27 15.2304 10.46L13.4204 11.36V13.67C13.4204 14.08 13.0804 14.42 12.6704 14.42Z"
            fill="currentColor"
          />
          <path
            d="M3.78027 9.97C3.37027 9.97 3.03027 9.63 3.03027 9.22V6.46V6.45C3.03027 6.39 3.04027 6.33 3.05027 6.28C3.07027 6.19 3.10027 6.12 3.14027 6.05C3.17027 6 3.21027 5.96 3.25027 5.92C3.29027 5.88 3.34027 5.84 3.39027 5.81C3.41027 5.8 3.44027 5.78 3.46027 5.77L5.67027 4.66C6.04027 4.48 6.49027 4.63 6.67027 5C6.86027 5.37 6.71027 5.82 6.34027 6L5.46027 6.44L6.34027 6.88C6.71027 7.07 6.86027 7.52 6.67027 7.89C6.49027 8.26 6.04027 8.41 5.67027 8.23L4.53027 7.66V9.22C4.53027 9.64 4.20027 9.97 3.78027 9.97Z"
            fill="currentColor"
          />
          <path
            d="M14.8897 3.86C14.7797 3.86 14.6597 3.83 14.5597 3.78L12.6697 2.84L10.7797 3.78C10.4097 3.97 9.95973 3.82 9.77973 3.45C9.58973 3.08 9.73973 2.63 10.1097 2.44L12.3297 1.33C12.5397 1.22 12.7897 1.22 12.9997 1.33L15.2197 2.44C15.5897 2.63 15.7397 3.08 15.5597 3.45C15.4297 3.71 15.1697 3.86 14.8897 3.86Z"
            fill="currentColor"
          />
          <path
            d="M21.5604 9.97C21.1504 9.97 20.8104 9.63 20.8104 9.22V7.66L19.6704 8.23C19.3004 8.41 18.8504 8.26 18.6704 7.89C18.4804 7.52 18.6304 7.07 19.0104 6.88L19.8904 6.44L19.0004 6C18.6304 5.82 18.4804 5.37 18.6704 5C18.8604 4.63 19.3004 4.48 19.6704 4.66L21.8804 5.76C21.9004 5.77 21.9304 5.78 21.9504 5.8C22.0104 5.83 22.0604 5.88 22.1104 5.93C22.1404 5.97 22.1704 6.01 22.2004 6.05C22.2404 6.12 22.2704 6.19 22.2904 6.27C22.3004 6.33 22.3104 6.39 22.3104 6.44V6.45V9.21C22.3104 9.64 21.9704 9.97 21.5604 9.97Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBox2 as IconComponentType).keywords = [
  "box",
  "2",
  "package",
  "loge",
  "corner",
  "box seat",
  "boxwood",
  "bin",
  "chest",
  "toolbox",
  "shoebox",
  "wireless network",
  "sign on",
  "sign off",
  "put through",
  "back up",
  "ring up",
  "call up",
  "hang up",
  "read out",
];

export default IconBox2 as IconComponentType;