import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconMapArrowUp: FC<IconProps> = ({
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
            d="M12 18.4734C11.7501 18.4734 11.5002 18.5346 11.2706 18.6572L5.36689 21.8093C3.97914 22.5502 2.49789 20.9986 3.16496 19.5028L10.5275 2.99306C10.8226 2.33118 11.4113 2.00024 12 2.00024"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M12 18.4734C12.2499 18.4734 12.4998 18.5346 12.7294 18.6572L18.6331 21.8093C20.0209 22.5502 21.5021 20.9986 20.835 19.5028L13.4725 2.99306C13.1774 2.33118 12.5887 2.00024 12 2.00024"
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
            d="M8.0374 9.85752C7.78266 9.73015 7.47314 9.84097 7.35714 10.1011L3.16447 19.5028C2.49741 20.9986 3.97865 22.5502 5.36641 21.8092L11.2701 18.6572C11.7293 18.4121 12.2697 18.4121 12.7289 18.6572L18.6326 21.8092C20.0204 22.5502 21.5016 20.9986 20.8346 19.5028L19.2629 15.9785C19.0743 15.5556 18.7448 15.2112 18.3307 15.0042L8.0374 9.85752Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M8.6095 8.46703C8.37019 8.34737 8.26749 8.06053 8.37646 7.81617L10.5271 2.99361C11.1174 1.66986 12.8818 1.66986 13.4722 2.99361L17.4401 11.8913C17.6313 12.32 17.1797 12.7521 16.7598 12.5422L8.6095 8.46703Z"
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
            d="M3.16496 19.5028L10.5275 2.99306C11.1178 1.66931 12.8822 1.66931 13.4725 2.99306L20.835 19.5028C21.5021 20.9986 20.0209 22.5502 18.6331 21.8093L12.7294 18.6572C12.2702 18.4121 11.7298 18.4121 11.2706 18.6572L5.36689 21.8093C3.97914 22.5502 2.49789 20.9986 3.16496 19.5028Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMapArrowUp as IconComponentType).keywords = [
  "map",
  "arrow",
  "up",
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
  "upbound",
  "upwardly",
  "ascending",
  "upward",
  "upwards",
  "rising",
  "astir",
  "ahead",
  "awake",
];

export default IconMapArrowUp as IconComponentType;
