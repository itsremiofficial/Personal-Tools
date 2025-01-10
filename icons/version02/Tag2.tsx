import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconTag2: FC<IconProps> = ({
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
            d="M5.07468 15.5264L9.60468 20.0564C11.4647 21.9164 14.4847 21.9164 16.3547 20.0564L20.7447 15.6664C22.6047 13.8064 22.6047 10.7864 20.7447 8.91637L16.2047 4.39637C15.2547 3.44637 13.9447 2.93637 12.6047 3.00637L7.60468 3.24637C5.60468 3.33637 4.01468 4.92637 3.91468 6.91637L3.67468 11.9164C3.61468 13.2664 4.12468 14.5764 5.07468 15.5264Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10.4043 12.2263C11.785 12.2263 12.9043 11.107 12.9043 9.72632C12.9043 8.34561 11.785 7.22632 10.4043 7.22632C9.02358 7.22632 7.9043 8.34561 7.9043 9.72632C7.9043 11.107 9.02358 12.2263 10.4043 12.2263Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M13.9043 17.2263L17.9043 13.2263"
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
            d="M4.8403 15.3L9.3703 19.83C11.2303 21.6901 14.2503 21.6901 16.1203 19.83L20.5103 15.44C22.3703 13.58 22.3703 10.56 20.5103 8.69005L15.9703 4.17005C15.0203 3.22005 13.7103 2.71005 12.3703 2.78005L7.3703 3.02005C5.3703 3.11005 3.7803 4.70005 3.6803 6.69005L3.4403 11.69C3.3803 13.04 3.8903 14.35 4.8403 15.3Z"
            fill="currentColor"
          />
          <path
            d="M10.17 12.38C11.7606 12.38 13.05 11.0906 13.05 9.5C13.05 7.90942 11.7606 6.62 10.17 6.62C8.57946 6.62 7.29004 7.90942 7.29004 9.5C7.29004 11.0906 8.57946 12.38 10.17 12.38Z"
            fill="currentColor"
          />
          <path
            d="M13.6704 17.7499C13.4804 17.7499 13.2904 17.6799 13.1404 17.5299C12.8504 17.2399 12.8504 16.7599 13.1404 16.4699L17.1404 12.4699C17.4304 12.1799 17.9104 12.1799 18.2004 12.4699C18.4904 12.7599 18.4904 13.2399 18.2004 13.5299L14.2004 17.5299C14.0504 17.6799 13.8604 17.7499 13.6704 17.7499Z"
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
            d="M20.5023 8.70005L15.9723 4.17005C15.0223 3.22005 13.7123 2.71005 12.3723 2.78005L7.37234 3.02005C5.37234 3.11005 3.78234 4.70005 3.68234 6.69005L3.44234 11.69C3.38234 13.03 3.88234 14.34 4.83234 15.29L9.36234 19.82C11.2223 21.68 14.2423 21.68 16.1123 19.82L20.5023 15.43C22.3723 13.58 22.3723 10.56 20.5023 8.70005ZM10.1723 12.38C8.59234 12.38 7.29234 11.09 7.29234 9.50005C7.29234 7.91005 8.59234 6.62005 10.1723 6.62005C11.7523 6.62005 13.0523 7.91005 13.0523 9.50005C13.0523 11.09 11.7523 12.38 10.1723 12.38ZM18.2023 13.53L14.2023 17.53C14.0523 17.68 13.8623 17.75 13.6723 17.75C13.4823 17.75 13.2923 17.68 13.1423 17.53C12.8523 17.24 12.8523 16.76 13.1423 16.47L17.1423 12.47C17.4323 12.18 17.9123 12.18 18.2023 12.47C18.4923 12.76 18.4923 13.24 18.2023 13.53Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconTag2 as IconComponentType).keywords = [
  "tag",
  "2",
  "label",
  "mark",
  "trail",
  "chase",
  "go after",
  "tag end",
  "dog",
  "shred",
  "chase after",
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

export default IconTag2 as IconComponentType;
