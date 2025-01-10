import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconSearchStatus: FC<IconProps> = ({
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
            opacity={duotone ? "0.4" : "1"}
            d="M14.6699 5H20.6699"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14.6699 8H17.6699"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.6699 11.5C21.6699 16.75 17.4199 21 12.1699 21C6.91992 21 2.66992 16.75 2.66992 11.5C2.66992 6.25 6.91992 2 12.1699 2"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.6699 22L20.6699 20"
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
            d="M15.1699 10.75H9.16992C8.75992 10.75 8.41992 10.41 8.41992 10C8.41992 9.59 8.75992 9.25 9.16992 9.25H15.1699C15.5799 9.25 15.9199 9.59 15.9199 10C15.9199 10.41 15.5799 10.75 15.1699 10.75Z"
            fill="currentColor"
          />
          <path
            d="M12.1699 13.75H9.16992C8.75992 13.75 8.41992 13.41 8.41992 13C8.41992 12.59 8.75992 12.25 9.16992 12.25H12.1699C12.5799 12.25 12.9199 12.59 12.9199 13C12.9199 13.41 12.5799 13.75 12.1699 13.75Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.1699 21C17.4166 21 21.6699 16.7467 21.6699 11.5C21.6699 6.25329 17.4166 2 12.1699 2C6.92322 2 2.66992 6.25329 2.66992 11.5C2.66992 16.7467 6.92322 21 12.1699 21Z"
            fill="currentColor"
          />
          <path
            d="M21.9695 22.0001C21.7895 22.0001 21.6095 21.9301 21.4795 21.8001L19.6195 19.9401C19.3495 19.6701 19.3495 19.2301 19.6195 18.9501C19.8895 18.6801 20.3295 18.6801 20.6095 18.9501L22.4695 20.8101C22.7395 21.0801 22.7395 21.5201 22.4695 21.8001C22.3295 21.9301 22.1495 22.0001 21.9695 22.0001Z"
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
            d="M12.1699 2C6.92992 2 2.66992 6.26 2.66992 11.5C2.66992 16.74 6.92992 21 12.1699 21C17.4099 21 21.6699 16.74 21.6699 11.5C21.6699 6.26 17.4099 2 12.1699 2ZM12.1699 13.75H9.16992C8.75992 13.75 8.41992 13.41 8.41992 13C8.41992 12.59 8.75992 12.25 9.16992 12.25H12.1699C12.5799 12.25 12.9199 12.59 12.9199 13C12.9199 13.41 12.5799 13.75 12.1699 13.75ZM15.1699 10.75H9.16992C8.75992 10.75 8.41992 10.41 8.41992 10C8.41992 9.59 8.75992 9.25 9.16992 9.25H15.1699C15.5799 9.25 15.9199 9.59 15.9199 10C15.9199 10.41 15.5799 10.75 15.1699 10.75Z"
            fill="currentColor"
          />
          <path
            d="M21.9705 21.9986C21.7905 21.9986 21.6105 21.9286 21.4805 21.7986L19.6205 19.9386C19.3505 19.6686 19.3505 19.2286 19.6205 18.9486C19.8905 18.6786 20.3305 18.6786 20.6105 18.9486L22.4705 20.8086C22.7405 21.0786 22.7405 21.5186 22.4705 21.7986C22.3305 21.9286 22.1505 21.9986 21.9705 21.9986Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSearchStatus as IconComponentType).keywords = [
  "search",
  "status",
  "seek",
  "look for",
  "explore",
  "lookup",
  "research",
  "look",
  "hunting",
  "hunt",
  "seeking",
  "position",
  "condition",
  "belonging",
  "shape",
  "ranking",
  "rating",
  "establish",
  "availability",
  "item",
];

export default IconSearchStatus as IconComponentType;
