import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconFolderCloud: FC<IconProps> = ({
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
            d="M9.66992 22H7.66992C3.66992 22 2.66992 21 2.66992 17V7C2.66992 3 3.66992 2 7.66992 2H9.16992C10.6699 2 10.9999 2.44001 11.5699 3.20001L13.0699 5.20001C13.4499 5.70001 13.6699 6 14.6699 6H17.6699C21.6699 6 22.6699 7 22.6699 11V13"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14.4295 18.3199C12.0795 18.4899 12.0795 21.8899 14.4295 22.0599H19.9895C20.6595 22.0599 21.3195 21.8099 21.8095 21.3599C23.4595 19.9199 22.5795 17.0399 20.4095 16.7699C19.6295 12.0799 12.8495 13.8599 14.4495 18.3299"
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
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.6602 10.84C22.6402 10.36 22.5602 9.88999 22.4102 9.43999C21.7202 7.27999 19.7002 5.71999 17.3202 5.71999H14.5302C13.9502 5.71999 13.9102 5.65998 13.6002 5.24998L12.2002 3.38998C11.5502 2.51998 11.0402 1.98999 9.41016 1.98999H7.08014C4.64014 1.98999 2.66016 3.96999 2.66016 6.40999V9.42998V16.64C2.66016 19.59 5.06019 21.99 8.01019 21.99H17.3102C20.2602 21.99 22.6602 19.59 22.6602 16.64V11.06C22.6702 11 22.6702 10.91 22.6602 10.84Z"
            fill="currentColor"
          />
          <path
            d="M16.2495 19.7C14.1395 19.85 14.1395 22.91 16.2495 23.06H21.2595C21.8695 23.06 22.4495 22.84 22.8995 22.43C24.3795 21.14 23.5894 18.54 21.6394 18.3C20.9394 14.08 14.8295 15.68 16.2795 19.7"
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
            d="M16.2495 19.7C14.1395 19.85 14.1395 22.91 16.2495 23.06H21.2595C21.8695 23.06 22.4495 22.84 22.8995 22.43C24.3795 21.14 23.5895 18.54 21.6395 18.3C20.9395 14.08 14.8295 15.68 16.2795 19.7"
            fill="currentColor"
          />
          <path
            d="M16.2495 19.7C14.1395 19.85 14.1395 22.91 16.2495 23.06H21.2595C21.8695 23.06 22.4495 22.84 22.8995 22.43C24.3795 21.14 23.5895 18.54 21.6395 18.3C20.9395 14.08 14.8295 15.68 16.2795 19.7"
            fill="currentColor"
          />
          <path
            d="M22.6699 11.07V15.34C22.6699 15.66 22.1599 15.8 21.9399 15.57C21.4699 15.08 20.8799 14.71 20.1999 14.5C18.6299 14.01 16.8199 14.49 15.6799 15.67C14.9599 16.44 14.5699 17.4 14.5499 18.44C14.5499 18.62 14.4599 18.78 14.3199 18.89C13.5999 19.46 13.1599 20.35 13.1599 21.37V21.38C13.1599 21.7 12.9299 21.99 12.6099 21.99H8.00992C5.06992 22 2.66992 19.6 2.66992 16.65V6.42C2.66992 3.98 4.64992 2 7.08992 2H9.40992C11.0399 2 11.5499 2.53 12.1999 3.4L13.5999 5.26C13.9099 5.67 13.9499 5.72 14.5299 5.72H17.3199C19.6999 5.72 21.7199 7.28 22.4099 9.44C22.5599 9.89 22.6399 10.35 22.6599 10.84C22.6699 10.91 22.6699 11 22.6699 11.07Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconFolderCloud as IconComponentType).keywords = [
  "folder",
  "cloud",
  "booklet",
  "pamphlet",
  "brochure",
  "leaflet",
  "toolkit",
  "pack",
  "package",
  "kit",
  "shirt",
  "fog",
  "mist",
  "befog",
  "haze over",
  "becloud",
  "dapple",
  "mottle",
  "sully",
  "defile",
];

export default IconFolderCloud as IconComponentType;
