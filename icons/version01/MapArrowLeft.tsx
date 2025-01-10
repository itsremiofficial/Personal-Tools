import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconMapArrowLeft: FC<IconProps> = ({
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
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.4731 12.0002C18.4731 12.2501 18.5344 12.5001 18.657 12.7296L21.809 18.6333C22.5499 20.0211 20.9984 21.5024 19.5025 20.8353L2.99281 13.4728C2.33094 13.1776 2 12.5889 2 12.0002"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M18.4731 12.0002C18.4731 11.7503 18.5344 11.5004 18.657 11.2709L21.809 5.36713C22.5499 3.97938 20.9984 2.49814 19.5025 3.1652L2.99281 10.5277C2.33094 10.8229 2 11.4116 2 12.0002"
            stroke="currentColor"
            strokeWidth={width}
          />
        </svg>
      ) : duotone ? (
        <svg
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.85631 15.9624C9.72894 16.2171 9.83977 16.5266 10.0999 16.6426L19.5016 20.8353C20.9974 21.5023 22.549 20.0211 21.808 18.6334L18.656 12.7296C18.4109 12.2705 18.4109 11.73 18.656 11.2709L21.808 5.36714C22.549 3.97938 20.9974 2.49814 19.5016 3.1652L15.9773 4.73687C15.5544 4.92545 15.21 5.25491 15.003 5.66904L9.85631 15.9624Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M8.46581 15.3907C8.34615 15.63 8.05931 15.7327 7.81495 15.6237L2.99238 13.4731C1.66864 12.8828 1.66864 11.1183 2.99238 10.528L11.8901 6.56007C12.3188 6.36889 12.7509 6.82047 12.541 7.24033L8.46581 15.3907Z"
            fill="currentColor"
          />
        </svg>
      ) : (
        <svg
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.5025 20.8353L2.99281 13.4728C1.66906 12.8825 1.66906 11.118 2.99281 10.5277L19.5025 3.1652C20.9984 2.49814 22.5499 3.97938 21.809 5.36713L18.657 11.2709C18.4118 11.73 18.4118 12.2705 18.657 12.7296L21.809 18.6334C22.5499 20.0211 20.9984 21.5023 19.5025 20.8353Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMapArrowLeft as IconComponentType).keywords = [
  "map",
  "arrow",
  "left",
  "map out",
  "correspondence",
  "represent",
  "chart",
  "cartography",
  "cartographic",
  "topography",
  "plan",
  "charting",
  "pointer",
  "archer",
  "archery",
  "dart",
  "arrowhead",
  "bolt",
  "spike",
  "rope",
  "roof",
  "left-hand",
  "left-handed",
  "left over",
  "near",
  "leftover",
  "nigh",
  "remaining",
  "leftfield",
  "odd",
];

export default IconMapArrowLeft as IconComponentType;
