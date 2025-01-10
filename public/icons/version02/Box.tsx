import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconBox: FC<IconProps> = ({
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
              d="M3.84082 7.44043L12.6708 12.5504L21.4408 7.47043"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.6709 21.61V12.54"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M10.601 2.47979L5.26104 5.43979C4.05104 6.10979 3.06104 7.78979 3.06104 9.16979V14.8198C3.06104 16.1998 4.05104 17.8798 5.26104 18.5498L10.601 21.5198C11.741 22.1498 13.611 22.1498 14.751 21.5198L20.091 18.5498C21.301 17.8798 22.291 16.1998 22.291 14.8198V9.16979C22.291 7.78979 21.301 6.10979 20.091 5.43979L14.751 2.46979C13.601 1.83979 11.741 1.83979 10.601 2.47979Z"
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
            opacity={duotone ? "0.4" : "1"}
            d="M21.7104 7.19L12.6704 12.42L3.63037 7.19C4.03037 6.45 4.61037 5.8 5.26037 5.44L10.6004 2.48C11.7404 1.84 13.6004 1.84 14.7404 2.48L20.0804 5.44C20.7304 5.8 21.3104 6.45 21.7104 7.19Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.6" : "1"}
            d="M12.6705 12.4199V21.9999C11.9205 21.9999 11.1705 21.8399 10.6005 21.5199L5.26055 18.5599C4.05055 17.8899 3.06055 16.2099 3.06055 14.8299V9.16994C3.06055 8.52994 3.28055 7.82994 3.63055 7.18994L12.6705 12.4199Z"
            fill="currentColor"
          />
          <path
            d="M22.2804 9.16994V14.8299C22.2804 16.2099 21.2904 17.8899 20.0804 18.5599L14.7404 21.5199C14.1704 21.8399 13.4204 21.9999 12.6704 21.9999V12.4199L21.7104 7.18994C22.0604 7.82994 22.2804 8.52994 22.2804 9.16994Z"
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
            d="M20.8811 7.81994L13.1811 12.2799C12.8711 12.4599 12.4811 12.4599 12.1611 12.2799L4.46111 7.81994C3.91111 7.49994 3.77111 6.74994 4.19111 6.27994C4.48111 5.94994 4.81111 5.67994 5.16111 5.48994L10.5811 2.48994C11.7411 1.83994 13.6211 1.83994 14.7811 2.48994L20.2011 5.48994C20.5511 5.67994 20.8811 5.95994 21.1711 6.27994C21.5711 6.74994 21.4311 7.49994 20.8811 7.81994Z"
            fill="currentColor"
          />
          <path
            d="M12.1009 14.1399V20.9599C12.1009 21.7199 11.3309 22.2199 10.6509 21.8899C8.59088 20.8799 5.12088 18.9899 5.12088 18.9899C3.90088 18.2999 2.90088 16.5599 2.90088 15.1299V9.96988C2.90088 9.17988 3.73088 8.67988 4.41088 9.06988L11.6009 13.2399C11.9009 13.4299 12.1009 13.7699 12.1009 14.1399Z"
            fill="currentColor"
          />
          <path
            d="M13.2407 14.1399V20.9599C13.2407 21.7199 14.0107 22.2199 14.6907 21.8899C16.7507 20.8799 20.2207 18.9899 20.2207 18.9899C21.4407 18.2999 22.4407 16.5599 22.4407 15.1299V9.96988C22.4407 9.17988 21.6107 8.67988 20.9307 9.06988L13.7407 13.2399C13.4407 13.4299 13.2407 13.7699 13.2407 14.1399Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBox as IconComponentType).keywords = [
  "box",
  "package",
  "loge",
  "corner",
  "box seat",
  "boxwood",
  "bin",
  "chest",
  "toolbox",
  "shoebox",
];

export default IconBox as IconComponentType;
