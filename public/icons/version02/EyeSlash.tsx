import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconEyeSlash: FC<IconProps> = ({
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
            d="M15.1998 9.46992L10.1398 14.5299C9.48984 13.8799 9.08984 12.9899 9.08984 11.9999C9.08984 10.0199 10.6898 8.41992 12.6698 8.41992C13.6598 8.41992 14.5498 8.81992 15.1998 9.46992Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.4898 5.76998C16.7398 4.44998 14.7398 3.72998 12.6698 3.72998C9.13977 3.72998 5.84977 5.80998 3.55977 9.40998C2.65977 10.82 2.65977 13.19 3.55977 14.6C4.34977 15.84 5.26977 16.91 6.26977 17.77"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.08984 19.5302C10.2298 20.0102 11.4398 20.2702 12.6698 20.2702C16.1998 20.2702 19.4898 18.1902 21.7798 14.5902C22.6798 13.1802 22.6798 10.8102 21.7798 9.40018C21.4498 8.88018 21.0898 8.39018 20.7198 7.93018"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.1799 12.7002C15.9199 14.1102 14.7699 15.2602 13.3599 15.5202"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.1399 14.5298L2.66992 21.9998"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.6697 2L15.1997 9.47"
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
            d="M21.92 9.15004C21.43 8.37004 20.87 7.67004 20.29 7.04004L16.52 10.81C16.64 11.18 16.71 11.58 16.71 12C16.71 14.24 14.9 16.04 12.67 16.04C12.25 16.04 11.85 15.97 11.48 15.85L8.02002 19.31C9.48002 20.13 11.06 20.56 12.67 20.56C14.45 20.56 16.18 20.04 17.76 19.07C19.34 18.09 20.76 16.66 21.92 14.84C22.92 13.28 22.92 10.72 21.92 9.15004Z"
            fill="currentColor"
          />
          <path
            d="M14.6901 9.98014L10.6501 14.0201C10.1401 13.5001 9.81006 12.7801 9.81006 12.0001C9.81006 10.4301 11.0901 9.14014 12.6701 9.14014C13.4501 9.14014 14.1701 9.47014 14.6901 9.98014Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M18.9199 5.75018L15.5299 9.14018C14.7999 8.40018 13.7899 7.96018 12.6699 7.96018C10.4299 7.96018 8.62992 9.77018 8.62992 12.0002C8.62992 13.1202 9.07992 14.1302 9.80992 14.8602L6.42992 18.2502H6.41992C5.30992 17.3502 4.28992 16.2002 3.41992 14.8402C2.41992 13.2702 2.41992 10.7202 3.41992 9.15018C4.57992 7.33017 5.99992 5.90018 7.57992 4.92018C9.15992 3.96018 10.8899 3.43018 12.6699 3.43018C14.8999 3.43018 17.0599 4.25018 18.9199 5.75018Z"
            fill="currentColor"
          />
          <path
            d="M15.53 12.0001C15.53 13.5701 14.25 14.8601 12.67 14.8601C12.61 14.8601 12.56 14.8601 12.5 14.8401L15.51 11.8301C15.53 11.8901 15.53 11.9401 15.53 12.0001Z"
            fill="currentColor"
          />
          <path
            d="M22.4398 2.22988C22.1398 1.92988 21.6498 1.92988 21.3498 2.22988L2.8998 20.6899C2.5998 20.9899 2.5998 21.4799 2.8998 21.7799C3.0498 21.9199 3.2398 21.9999 3.4398 21.9999C3.6398 21.9999 3.8298 21.9199 3.9798 21.7699L22.4398 3.30988C22.7498 3.00988 22.7498 2.52988 22.4398 2.22988Z"
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
            d="M21.9399 9.17981C21.6499 8.71981 21.3399 8.28981 21.0199 7.88981C20.6499 7.41981 19.9499 7.37981 19.5299 7.79981L16.5299 10.7998C16.7499 11.4598 16.7899 12.2198 16.5899 13.0098C16.2399 14.4198 15.0999 15.5598 13.6899 15.9098C12.8999 16.1098 12.1399 16.0698 11.4799 15.8498C11.4799 15.8498 10.0499 17.2798 9.01987 18.3098C8.51987 18.8098 8.67987 19.6898 9.34987 19.9498C10.4199 20.3598 11.5299 20.5698 12.6699 20.5698C14.4499 20.5698 16.1799 20.0498 17.7599 19.0798C19.3699 18.0798 20.8199 16.6098 21.9899 14.7398C22.9399 13.2298 22.8899 10.6898 21.9399 9.17981Z"
            fill="currentColor"
          />
          <path
            d="M14.6901 9.98014L10.6501 14.0201C10.1401 13.5001 9.81006 12.7801 9.81006 12.0001C9.81006 10.4301 11.0901 9.14014 12.6701 9.14014C13.4501 9.14014 14.1701 9.47014 14.6901 9.98014Z"
            fill="currentColor"
          />
          <path
            d="M18.9199 5.75018L15.5299 9.14018C14.7999 8.40018 13.7899 7.96018 12.6699 7.96018C10.4299 7.96018 8.62992 9.77018 8.62992 12.0002C8.62992 13.1202 9.07992 14.1302 9.80992 14.8602L6.42992 18.2502H6.41992C5.30992 17.3502 4.28992 16.2002 3.41992 14.8402C2.41992 13.2702 2.41992 10.7202 3.41992 9.15018C4.57992 7.33017 5.99992 5.90018 7.57992 4.92018C9.15992 3.96018 10.8899 3.43018 12.6699 3.43018C14.8999 3.43018 17.0599 4.25018 18.9199 5.75018Z"
            fill="currentColor"
          />
          <path
            d="M15.53 12.0001C15.53 13.5701 14.25 14.8601 12.67 14.8601C12.61 14.8601 12.56 14.8601 12.5 14.8401L15.51 11.8301C15.53 11.8901 15.53 11.9401 15.53 12.0001Z"
            fill="currentColor"
          />
          <path
            d="M22.4398 2.22988C22.1398 1.92988 21.6498 1.92988 21.3498 2.22988L2.8998 20.6899C2.5998 20.9899 2.5998 21.4799 2.8998 21.7799C3.0498 21.9199 3.2398 21.9999 3.4398 21.9999C3.6398 21.9999 3.8298 21.9199 3.9798 21.7699L22.4398 3.30988C22.7498 3.00988 22.7498 2.52988 22.4398 2.22988Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconEyeSlash as IconComponentType).keywords = [
  "eye",
  "slash",
  "optic",
  "heart",
  "eyeball",
  "oculus",
  "peeper",
  "middle",
  "center",
  "centre",
  "ocular",
  "flog",
  "gash",
  "lash",
  "cut",
  "slice",
  "whip",
  "thrash",
  "trounce",
  "thrash about",
];

export default IconEyeSlash as IconComponentType;
