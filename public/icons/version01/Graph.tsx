import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconGraph: FC<IconProps> = ({
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
            d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M7 14L8.79689 11.8437C9.50894 10.9893 9.86496 10.562 10.3333 10.562C10.8017 10.562 11.1577 10.9893 11.8698 11.8437L12.1302 12.1563C12.8423 13.0107 13.1983 13.438 13.6667 13.438C14.135 13.438 14.4911 13.0107 15.2031 12.1563L17 10"
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
            d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
            fill="currentColor"
          />
          <path
            d="M17.5762 10.4802C17.8414 10.1619 17.7984 9.68903 17.4802 9.42385C17.1619 9.15868 16.689 9.20167 16.4239 9.51988L14.627 11.6761C14.2562 12.1211 14.0285 12.3915 13.8409 12.5609C13.7539 12.6395 13.7023 12.6708 13.6776 12.6827C13.6725 12.6852 13.6689 12.6866 13.6667 12.6875C13.6667 12.6875 13.6624 12.6858 13.659 12.6843L13.6558 12.6827C13.6311 12.6708 13.5795 12.6395 13.4925 12.5609C13.3049 12.3915 13.0772 12.1211 12.7064 11.6761L12.414 11.3253C12.0855 10.931 11.7894 10.5756 11.5128 10.3259C11.2119 10.0541 10.8328 9.81207 10.3334 9.81207C9.83386 9.81207 9.4548 10.0541 9.15386 10.3259C8.87727 10.5756 8.58115 10.931 8.25269 11.3253L6.42385 13.5199C6.15868 13.8381 6.20167 14.311 6.51988 14.5762C6.83809 14.8414 7.31101 14.7984 7.57619 14.4802L9.37308 12.3239C9.74387 11.8789 9.97157 11.6085 10.1592 11.4391C10.2461 11.3606 10.2978 11.3293 10.3225 11.3173L10.3292 11.3142L10.3334 11.3126C10.3356 11.3134 10.3392 11.3149 10.3442 11.3173C10.369 11.3293 10.4206 11.3606 10.5076 11.4391C10.6951 11.6085 10.9228 11.8789 11.2936 12.3239L11.586 12.6748L11.586 12.6748C11.9145 13.069 12.2106 13.4244 12.4872 13.6742C12.7881 13.9459 13.1672 14.188 13.6667 14.188C14.1662 14.188 14.5452 13.9459 14.8462 13.6742C15.1228 13.4244 15.4189 13.069 15.7473 12.6748L17.5762 10.4802Z"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447ZM17.5762 10.4801C17.8413 10.1619 17.7983 9.68901 17.4801 9.42383C17.1619 9.15866 16.689 9.20165 16.4238 9.51986L14.6269 11.6761C14.2562 12.1211 14.0284 12.3915 13.8409 12.5609C13.7539 12.6394 13.7023 12.6708 13.6775 12.6827C13.6725 12.6852 13.6689 12.6866 13.6667 12.6875C13.6667 12.6875 13.6624 12.6858 13.659 12.6842L13.6558 12.6827C13.6311 12.6708 13.5795 12.6394 13.4925 12.5609C13.3049 12.3915 13.0772 12.1211 12.7064 11.6761L12.414 11.3252C12.0855 10.931 11.7894 10.5756 11.5128 10.3258C11.2119 10.0541 10.8328 9.81205 10.3333 9.81205C9.83384 9.81205 9.45478 10.0541 9.15384 10.3258C8.87725 10.5756 8.58113 10.931 8.25267 11.3253L6.42383 13.5199C6.15866 13.8381 6.20165 14.311 6.51986 14.5762C6.83807 14.8413 7.31099 14.7983 7.57617 14.4801L9.37306 12.3239C9.74385 11.8789 9.97155 11.6085 10.1591 11.4391C10.2461 11.3606 10.2977 11.3292 10.3225 11.3173C10.3251 11.316 10.3274 11.315 10.3292 11.3142L10.3333 11.3125C10.3356 11.3134 10.3392 11.3148 10.3442 11.3173C10.3689 11.3292 10.4205 11.3606 10.5075 11.4391C10.6951 11.6085 10.9228 11.8789 11.2936 12.3239L11.586 12.6748C11.9145 13.069 12.2106 13.4244 12.4872 13.6742C12.7881 13.9459 13.1672 14.188 13.6667 14.188C14.1662 14.188 14.5452 13.9459 14.8462 13.6742C15.1228 13.4244 15.4189 13.069 15.7473 12.6748L17.5762 10.4801Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconGraph as IconComponentType).keywords = [
  "graph",
  "graphical record",
  "diagram",
  "flowchart",
  "figure",
  "graphical",
  "chart",
  "map",
  "design",
  "graphically",
];

export default IconGraph as IconComponentType;
