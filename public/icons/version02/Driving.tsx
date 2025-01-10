import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconDriving: FC<IconProps> = ({
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
            d="M15.2191 2H10.1191C8.31914 2 7.91915 2.90001 7.68915 4.01001L6.86914 7.92999H18.4691L17.6491 4.01001C17.4191 2.90001 17.0191 2 15.2191 2Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.9095 14.3199C19.9895 15.1699 19.3095 15.9 18.4395 15.9H17.0795C16.2995 15.9 16.1895 15.57 16.0495 15.15L15.8995 14.7199C15.6995 14.1299 15.5695 13.7299 14.5195 13.7299H10.8095C9.76949 13.7299 9.60948 14.1799 9.42948 14.7199L9.27949 15.15C9.13949 15.56 9.02949 15.9 8.24949 15.9H6.88949C6.01949 15.9 5.33949 15.1699 5.41949 14.3199L5.82949 9.89996C5.92949 8.80996 6.13948 7.91992 8.03948 7.91992H17.2895C19.1895 7.91992 19.3995 8.80996 19.4995 9.89996L19.9095 14.3199Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.86964 5.75H6.13965"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.1997 5.75H18.4697"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.31934 10.8301H10.4893"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14.8496 10.8301H17.0196"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.6699 17V18"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.6699 21V22"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M3.66992 18L2.66992 22"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21.6699 18L22.6699 22"
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
            d="M12.6699 18.75C12.2599 18.75 11.9199 18.41 11.9199 18V17C11.9199 16.59 12.2599 16.25 12.6699 16.25C13.0799 16.25 13.4199 16.59 13.4199 17V18C13.4199 18.41 13.0799 18.75 12.6699 18.75Z"
            fill="currentColor"
          />
          <path
            d="M12.6699 22.75C12.2599 22.75 11.9199 22.41 11.9199 22V21C11.9199 20.59 12.2599 20.25 12.6699 20.25C13.0799 20.25 13.4199 20.59 13.4199 21V22C13.4199 22.41 13.0799 22.75 12.6699 22.75Z"
            fill="currentColor"
          />
          <path
            d="M2.67001 22.7501C2.61001 22.7501 2.55002 22.7401 2.49002 22.7301C2.09002 22.6301 1.84002 22.2201 1.94002 21.8201L2.94002 17.8201C3.04002 17.4201 3.44001 17.1701 3.85001 17.2701C4.25001 17.3701 4.50001 17.7801 4.40001 18.1801L3.40001 22.1801C3.31001 22.5201 3.01001 22.7501 2.67001 22.7501Z"
            fill="currentColor"
          />
          <path
            d="M22.6696 22.7499C22.3296 22.7499 22.0296 22.5199 21.9396 22.1799L20.9396 18.1799C20.8396 17.7799 21.0796 17.3699 21.4896 17.2699C21.8896 17.1699 22.2996 17.4099 22.3996 17.8199L23.3996 21.8199C23.4996 22.2199 23.2596 22.6299 22.8496 22.7299C22.7896 22.7399 22.7296 22.7499 22.6696 22.7499Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19.9302 9.52008C19.8202 8.34008 19.5102 7.09009 17.2202 7.09009H8.12016C5.83016 7.09009 5.52017 8.35008 5.41017 9.52008L5.01016 13.86C4.96016 14.4 5.14016 14.94 5.51016 15.35C5.89016 15.76 6.43017 16.0001 6.99017 16.0001H8.33016C9.48016 16.0001 9.70015 15.3401 9.85015 14.9001L9.99017 14.47C10.1502 13.98 10.1902 13.86 10.8402 13.86H14.4902C15.1302 13.86 15.1502 13.93 15.3402 14.47L15.4802 14.9001C15.6302 15.3401 15.8502 16.0001 17.0002 16.0001H18.3402C18.9002 16.0001 19.4402 15.76 19.8202 15.35C20.1902 14.95 20.3702 14.4 20.3202 13.86L19.9302 9.52008Z"
            fill="currentColor"
          />
          <path
            d="M19.0897 4.94H18.3797C18.3697 4.94 18.3697 4.94 18.3697 4.94L18.0997 3.65002C17.8397 2.40002 17.3097 1.25 15.1797 1.25H13.2097H12.1397H10.1697C8.03972 1.25 7.50973 2.40002 7.24973 3.65002L6.97972 4.94C6.96972 4.94 6.96973 4.94 6.96973 4.94H6.25972C5.95972 4.94 5.71973 5.17998 5.71973 5.47998C5.71973 5.77998 5.95972 6.02002 6.25972 6.02002H6.76973L6.46973 7.45001C6.85973 7.23001 7.38973 7.09003 8.12973 7.09003H17.2297C17.9697 7.09003 18.5097 7.23001 18.8897 7.45001L18.5897 6.02002H19.0997C19.3997 6.02002 19.6397 5.77998 19.6397 5.47998C19.6297 5.17998 19.3897 4.94 19.0897 4.94Z"
            fill="currentColor"
          />
          <path
            d="M10.5306 11.0099H8.39059C8.09059 11.0099 7.85059 10.7699 7.85059 10.4699C7.85059 10.1699 8.09059 9.92993 8.39059 9.92993H10.5306C10.8306 9.92993 11.0706 10.1699 11.0706 10.4699C11.0606 10.7699 10.8206 11.0099 10.5306 11.0099Z"
            fill="currentColor"
          />
          <path
            d="M16.9505 11.0099H14.8105C14.5105 11.0099 14.2705 10.7699 14.2705 10.4699C14.2705 10.1699 14.5105 9.92993 14.8105 9.92993H16.9505C17.2505 9.92993 17.4905 10.1699 17.4905 10.4699C17.4905 10.7699 17.2505 11.0099 16.9505 11.0099Z"
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
            d="M12.6699 18.75C12.2599 18.75 11.9199 18.41 11.9199 18V17C11.9199 16.59 12.2599 16.25 12.6699 16.25C13.0799 16.25 13.4199 16.59 13.4199 17V18C13.4199 18.41 13.0799 18.75 12.6699 18.75Z"
            fill="currentColor"
          />
          <path
            d="M12.6699 22.75C12.2599 22.75 11.9199 22.41 11.9199 22V21C11.9199 20.59 12.2599 20.25 12.6699 20.25C13.0799 20.25 13.4199 20.59 13.4199 21V22C13.4199 22.41 13.0799 22.75 12.6699 22.75Z"
            fill="currentColor"
          />
          <path
            d="M2.67002 22.7501C2.61002 22.7501 2.55002 22.7401 2.49002 22.7301C2.09002 22.6301 1.84002 22.2201 1.94002 21.8201L2.94002 17.8201C3.04002 17.4201 3.44002 17.1701 3.85002 17.2701C4.25002 17.3701 4.50002 17.7801 4.40002 18.1801L3.40002 22.1801C3.31002 22.5201 3.01002 22.7501 2.67002 22.7501Z"
            fill="currentColor"
          />
          <path
            d="M22.4226 22.5026C22.0826 22.5026 21.7826 22.2726 21.6926 21.9326L20.6926 17.9326C20.5926 17.5326 20.8326 17.1226 21.2426 17.0226C21.6426 16.9226 22.0526 17.1626 22.1526 17.5726L23.1526 21.5726C23.2526 21.9726 23.0126 22.3826 22.6026 22.4826C22.5426 22.4926 22.4826 22.5026 22.4226 22.5026Z"
            fill="currentColor"
          />
          <path
            d="M19.8102 5.3C19.8102 5.6 19.5602 5.84 19.2702 5.84H6.20016C5.90016 5.84 5.66016 5.59 5.66016 5.3C5.66016 5 5.91016 4.76 6.20016 4.76H6.94016L7.22016 3.45C7.48016 2.17 8.02016 1 10.1802 1H15.2702C17.4302 1 17.9802 2.17 18.2402 3.44L18.5202 4.75H19.2602C19.5602 4.75 19.8102 5 19.8102 5.3Z"
            fill="currentColor"
          />
          <path
            d="M20.1201 9.39993C20.0101 8.19993 19.6901 6.92993 17.3601 6.92993H8.10007C5.77007 6.92993 5.46007 8.20993 5.34007 9.39993L4.93007 13.8199C4.88007 14.3699 5.06007 14.9199 5.44007 15.3399C5.83007 15.7599 6.37007 15.9999 6.95007 15.9999H8.31007C9.49007 15.9999 9.71007 15.3299 9.86007 14.8799L10.0101 14.4399C10.1801 13.9399 10.2201 13.8199 10.8701 13.8199H14.5901C15.2401 13.8199 15.2601 13.8899 15.4501 14.4399L15.6001 14.8799C15.7401 15.3299 15.9701 15.9999 17.1401 15.9999H18.5001C19.0701 15.9999 19.6201 15.7599 20.0101 15.3399C20.3901 14.9299 20.5701 14.3699 20.5201 13.8199L20.1201 9.39993ZM10.5501 10.9199H8.38007C8.08007 10.9199 7.84007 10.6699 7.84007 10.3799C7.84007 10.0899 8.09007 9.83993 8.38007 9.83993H10.5601C10.8601 9.83993 11.1001 10.0899 11.1001 10.3799C11.1001 10.6699 10.8501 10.9199 10.5501 10.9199ZM17.0801 10.9199H14.9001C14.6001 10.9199 14.3601 10.6699 14.3601 10.3799C14.3601 10.0899 14.6101 9.83993 14.9001 9.83993H17.0801C17.3801 9.83993 17.6201 10.0899 17.6201 10.3799C17.6201 10.6699 17.3801 10.9199 17.0801 10.9199Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconDriving as IconComponentType).keywords = [
  "driving",
  "motoring",
  "dynamical",
  "dynamic",
  "impulsive",
  "energetic",
  "vehicular",
  "vehicle",
  "driver",
  "traffic",
];

export default IconDriving as IconComponentType;
