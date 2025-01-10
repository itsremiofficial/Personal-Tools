import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconMapPointWave: FC<IconProps> = ({
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
            opacity={duotone ? "0.5" : "1"}
            d="M5 8.51488C5 4.91695 8.13401 2.00024 12 2.00024C15.866 2.00024 19 4.91695 19 8.51488C19 12.0846 16.7658 16.2502 13.2801 17.7398C12.4675 18.0871 11.5325 18.0871 10.7199 17.7398C7.23416 16.2502 5 12.0846 5 8.51488Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M14 9.00024C14 10.1048 13.1046 11.0002 12 11.0002C10.8954 11.0002 10 10.1048 10 9.00024C10 7.89567 10.8954 7.00024 12 7.00024C13.1046 7.00024 14 7.89567 14 9.00024Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M20.9605 15.5002C21.6259 16.1027 22 16.7818 22 17.5002C22 19.9855 17.5228 22.0002 12 22.0002C6.47715 22.0002 2 19.9855 2 17.5002C2 16.7818 2.37412 16.1027 3.03947 15.5002"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
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
            opacity={duotone ? "0.5" : "1"}
            d="M19.7165 20.3627C21.143 19.5848 22 18.5876 22 17.5002C22 16.3477 21.0372 15.2964 19.4537 14.5002C17.6226 13.5796 14.9617 13.0002 12 13.0002C9.03833 13.0002 6.37738 13.5796 4.54631 14.5002C2.96285 15.2964 2 16.3477 2 17.5002C2 18.6528 2.96285 19.7041 4.54631 20.5002C6.37738 21.4209 9.03833 22.0002 12 22.0002C15.1066 22.0002 17.8823 21.3628 19.7165 20.3627Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5 8.51488C5 4.91695 8.13401 2.00024 12 2.00024C15.866 2.00024 19 4.91695 19 8.51488C19 12.0846 16.7658 16.2502 13.2801 17.7398C12.4675 18.0871 11.5325 18.0871 10.7199 17.7398C7.23416 16.2502 5 12.0846 5 8.51488ZM12 11.0002C13.1046 11.0002 14 10.1048 14 9.00024C14 7.89567 13.1046 7.00024 12 7.00024C10.8954 7.00024 10 7.89567 10 9.00024C10 10.1048 10.8954 11.0002 12 11.0002Z"
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
            d="M12 22.0006C17.5228 22.0006 22 19.9858 22 17.5006C22 16.2339 20.837 15.0895 18.9654 14.2717C17.8233 16.3676 16.0817 18.1741 13.8695 19.1194C12.6804 19.6276 11.3196 19.6276 10.1305 19.1194C7.91828 18.1741 6.17666 16.3676 5.03458 14.2717C3.16295 15.0895 2 16.2339 2 17.5006C2 19.9858 6.47715 22.0006 12 22.0006Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5 8.51488C5 4.91695 8.13401 2.00024 12 2.00024C15.866 2.00024 19 4.91695 19 8.51488C19 12.0846 16.7658 16.2502 13.2801 17.7398C12.4675 18.0871 11.5325 18.0871 10.7199 17.7398C7.23416 16.2502 5 12.0846 5 8.51488ZM12 11.0002C13.1046 11.0002 14 10.1048 14 9.00024C14 7.89567 13.1046 7.00024 12 7.00024C10.8954 7.00024 10 7.89567 10 9.00024C10 10.1048 10.8954 11.0002 12 11.0002Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMapPointWave as IconComponentType).keywords = [
  "map",
  "point",
  "wave",
  "map out",
  "correspondence",
  "represent",
  "chart",
  "cartography",
  "cartographic",
  "topography",
  "plan",
  "charting",
  "item",
  "betoken",
  "indicate",
  "bespeak",
  "period",
  "point in time",
  "show",
  "stage",
  "detail",
  "beckon",
  "undulate",
  "undulation",
  "flap",
  "wafture",
  "brandish",
  "curl",
  "flourish",
  "moving ridge",
];

export default IconMapPointWave as IconComponentType;
