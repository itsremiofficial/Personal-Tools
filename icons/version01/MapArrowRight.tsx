import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconMapArrowRight: FC<IconProps> = ({
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
            d="M5.52683 11.9999C5.52683 11.75 5.46554 11.5001 5.34296 11.2705L2.19093 5.3668C1.45 3.97905 3.00157 2.4978 4.4974 3.16487L21.0071 10.5274C21.669 10.8225 21.9999 11.4112 21.9999 11.9999"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M5.52686 11.9999C5.52686 12.2498 5.46557 12.4997 5.34299 12.7293L2.19096 18.633C1.45003 20.0208 3.0016 21.502 4.49743 20.835L21.0072 13.4725C21.669 13.1773 22 12.5886 22 11.9999"
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
            d="M14.1427 15.9624C14.2701 16.2171 14.1593 16.5266 13.8991 16.6426L4.49746 20.8353C3.00163 21.5023 1.45007 20.0211 2.19099 18.6334L5.34302 12.7296C5.58818 12.2705 5.58818 11.73 5.34302 11.2709L2.19099 5.36714C1.45006 3.97938 3.00163 2.49814 4.49746 3.1652L8.02178 4.73687C8.44465 4.92545 8.78899 5.25491 8.99606 5.66904L14.1427 15.9624Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M15.5337 15.3908C15.6533 15.6301 15.9402 15.7328 16.1845 15.6238L21.0071 13.4732C22.3308 12.8829 22.3308 11.1185 21.0071 10.5281L12.1094 6.56019C11.6806 6.36901 11.2486 6.8206 11.4585 7.24045L15.5337 15.3908Z"
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
            d="M4.49746 20.8353L21.0072 13.4728C22.3309 12.8825 22.3309 11.118 21.0072 10.5277L4.49746 3.1652C3.00163 2.49814 1.45006 3.97938 2.19099 5.36713L5.34302 11.2709C5.58817 11.73 5.58818 12.2705 5.34302 12.7296L2.19099 18.6334C1.45007 20.0211 3.00163 21.5023 4.49746 20.8353Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMapArrowRight as IconComponentType).keywords = [
  "map",
  "arrow",
  "right",
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
  "straight",
  "precise",
  "right on",
  "accurate",
  "decently",
  "satisfactory",
  "exact",
  "powerful",
  "opportune",
];

export default IconMapArrowRight as IconComponentType;
