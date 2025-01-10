import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconPersonalcard: FC<IconProps> = ({
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
            d="M17.6699 21H7.66992C3.66992 21 2.66992 20 2.66992 16V8C2.66992 4 3.66992 3 7.66992 3H17.6699C21.6699 3 22.6699 4 22.6699 8V16C22.6699 20 21.6699 21 17.6699 21Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M14.6699 8H19.6699"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.6699 12H19.6699"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.6699 16H19.6699"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.17035 11.2899C10.17 11.2899 10.9804 10.4796 10.9804 9.47992C10.9804 8.48029 10.17 7.66992 9.17035 7.66992C8.17072 7.66992 7.36035 8.48029 7.36035 9.47992C7.36035 10.4796 8.17072 11.2899 9.17035 11.2899Z"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.6699 16.3298C12.5299 14.8798 11.3799 13.7398 9.92992 13.6098C9.42992 13.5598 8.91992 13.5598 8.40992 13.6098C6.95992 13.7498 5.80992 14.8798 5.66992 16.3298"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
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
            d="M18.6699 3H6.66992C4.45992 3 2.66992 4.78 2.66992 6.97V17.03C2.66992 19.22 4.45992 21 6.66992 21H18.6699C20.8799 21 22.6699 19.22 22.6699 17.03V6.97C22.6699 4.78 20.8799 3 18.6699 3Z"
            fill="currentColor"
          />
          <path
            d="M19.6699 8.75H14.6699C14.2599 8.75 13.9199 8.41 13.9199 8C13.9199 7.59 14.2599 7.25 14.6699 7.25H19.6699C20.0799 7.25 20.4199 7.59 20.4199 8C20.4199 8.41 20.0799 8.75 19.6699 8.75Z"
            fill="currentColor"
          />
          <path
            d="M19.6699 12.75H15.6699C15.2599 12.75 14.9199 12.41 14.9199 12C14.9199 11.59 15.2599 11.25 15.6699 11.25H19.6699C20.0799 11.25 20.4199 11.59 20.4199 12C20.4199 12.41 20.0799 12.75 19.6699 12.75Z"
            fill="currentColor"
          />
          <path
            d="M19.6699 16.75H17.6699C17.2599 16.75 16.9199 16.41 16.9199 16C16.9199 15.59 17.2599 15.25 17.6699 15.25H19.6699C20.0799 15.25 20.4199 15.59 20.4199 16C20.4199 16.41 20.0799 16.75 19.6699 16.75Z"
            fill="currentColor"
          />
          <path
            d="M9.17035 11.7899C10.4461 11.7899 11.4804 10.7557 11.4804 9.47992C11.4804 8.20414 10.4461 7.16992 9.17035 7.16992C7.89457 7.16992 6.86035 8.20414 6.86035 9.47992C6.86035 10.7557 7.89457 11.7899 9.17035 11.7899Z"
            fill="currentColor"
          />
          <path
            d="M9.96946 13.1098C9.43946 13.0598 8.88946 13.0598 8.35946 13.1098C6.67946 13.2698 5.32946 14.5998 5.16946 16.2798C5.15946 16.4198 5.19946 16.5598 5.29946 16.6598C5.39946 16.7598 5.52946 16.8298 5.66946 16.8298H12.6695C12.8095 16.8298 12.9495 16.7698 13.0395 16.6698C13.1295 16.5698 13.1795 16.4298 13.1695 16.2898C12.9995 14.5998 11.6595 13.2698 9.96946 13.1098Z"
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
            d="M18.6699 3H6.66992C4.45992 3 2.66992 4.78 2.66992 6.97V17.03C2.66992 19.22 4.45992 21 6.66992 21H18.6699C20.8799 21 22.6699 19.22 22.6699 17.03V6.97C22.6699 4.78 20.8799 3 18.6699 3ZM9.16992 7.17C10.4399 7.17 11.4799 8.21 11.4799 9.48C11.4799 10.75 10.4399 11.79 9.16992 11.79C7.89992 11.79 6.85992 10.75 6.85992 9.48C6.85992 8.21 7.89992 7.17 9.16992 7.17ZM13.0399 16.66C12.9499 16.76 12.8099 16.82 12.6699 16.82H5.66992C5.52992 16.82 5.38992 16.76 5.29992 16.66C5.20992 16.56 5.15992 16.42 5.16992 16.28C5.33992 14.6 6.67992 13.27 8.35992 13.11C8.88992 13.06 9.43992 13.06 9.96992 13.11C11.6499 13.27 12.9999 14.6 13.1599 16.28C13.1799 16.42 13.1299 16.56 13.0399 16.66ZM19.6699 16.75H17.6699C17.2599 16.75 16.9199 16.41 16.9199 16C16.9199 15.59 17.2599 15.25 17.6699 15.25H19.6699C20.0799 15.25 20.4199 15.59 20.4199 16C20.4199 16.41 20.0799 16.75 19.6699 16.75ZM19.6699 12.75H15.6699C15.2599 12.75 14.9199 12.41 14.9199 12C14.9199 11.59 15.2599 11.25 15.6699 11.25H19.6699C20.0799 11.25 20.4199 11.59 20.4199 12C20.4199 12.41 20.0799 12.75 19.6699 12.75ZM19.6699 8.75H14.6699C14.2599 8.75 13.9199 8.41 13.9199 8C13.9199 7.59 14.2599 7.25 14.6699 7.25H19.6699C20.0799 7.25 20.4199 7.59 20.4199 8C20.4199 8.41 20.0799 8.75 19.6699 8.75Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconPersonalcard as IconComponentType).keywords = ["personalcard"];

export default IconPersonalcard as IconComponentType;
