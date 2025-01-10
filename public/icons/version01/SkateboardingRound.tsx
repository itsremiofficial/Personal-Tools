import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconSkateboardingRound: FC<IconProps> = ({
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
            d="M3 17.0005L3.60827 17.6763C4.36684 18.5192 5.4475 19.0005 6.58145 19.0005H17.4186C18.5525 19.0005 19.6332 18.5192 20.3917 17.6763L21 17.0005"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <circle
            opacity={duotone ? "0.5" : "1"}
            cx="7"
            cy="21.0005"
            r="1"
            fill="currentColor"
          />
          <circle
            opacity={duotone ? "0.5" : "1"}
            cx="17"
            cy="21.0005"
            r="1"
            fill="currentColor"
          />
          <circle
            cx="19"
            cy="4.00049"
            r="2"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M15 16.5005V14.3669C15 13.8179 14.7561 13.2972 14.3344 12.9457L13.3379 12.1154C12.6195 11.5167 12.5702 10.4303 13.2315 9.76896L14.8855 8.11498C15.4193 7.58115 15.2452 6.67695 14.5513 6.37956C13.2663 5.82885 11.793 5.9423 10.6075 6.68325L8.5 8.00045"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M11 14.0005L10.3787 14.6218C9.94513 15.0554 9.72836 15.2721 9.4527 15.3863C9.17705 15.5005 8.87049 15.5005 8.25736 15.5005H7"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M16.5 10.0005H19.5"
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
            d="M21 4.00049C21 5.10506 20.1046 6.00049 19 6.00049C17.8954 6.00049 17 5.10506 17 4.00049C17 2.89592 17.8954 2.00049 19 2.00049C20.1046 2.00049 21 2.89592 21 4.00049Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.21 6.04729C11.6039 5.17615 13.3359 5.04277 14.8467 5.69024C16.0283 6.19664 16.3248 7.73632 15.4158 8.64535L13.7618 10.2993C13.4124 10.6488 13.4384 11.2229 13.8181 11.5393L14.8145 12.3696C15.4073 12.8636 15.75 13.5953 15.75 14.367V16.5005C15.75 16.9147 15.4142 17.2505 15 17.2505C14.5858 17.2505 14.25 16.9147 14.25 16.5005V14.367C14.25 14.0405 14.105 13.7309 13.8542 13.522L12.8578 12.6916C11.8005 11.8105 11.728 10.2118 12.7012 9.23866L14.3552 7.58469C14.5138 7.42604 14.462 7.15734 14.2558 7.06896C13.1966 6.61501 11.9822 6.70852 11.005 7.31929L8.89751 8.63649C8.54625 8.85602 8.08354 8.74924 7.86401 8.39799C7.64447 8.04673 7.75126 7.58402 8.10251 7.36449L10.21 6.04729ZM2.49828 16.443C2.80617 16.1659 3.28038 16.1909 3.55748 16.4988L4.16575 17.1746C4.78209 17.8594 5.66013 18.2505 6.58146 18.2505H17.4186C18.3399 18.2505 19.2179 17.8594 19.8343 17.1746L20.4425 16.4988C20.7196 16.1909 21.1938 16.1659 21.5017 16.443C21.8096 16.7201 21.8346 17.1943 21.5575 17.5022L20.9492 18.1781C20.0484 19.179 18.7651 19.7505 17.4186 19.7505H6.58146C5.2349 19.7505 3.95161 19.179 3.05081 18.1781L2.44254 17.5022C2.16544 17.1943 2.1904 16.7201 2.49828 16.443Z"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.5" : "1"}>
            <path
              d="M8 21.0005C8 21.5528 7.55228 22.0005 7 22.0005C6.44772 22.0005 6 21.5528 6 21.0005C6 20.4482 6.44772 20.0005 7 20.0005C7.55228 20.0005 8 20.4482 8 21.0005Z"
              fill="currentColor"
            />
            <path
              d="M18 21.0005C18 21.5528 17.5523 22.0005 17 22.0005C16.4477 22.0005 16 21.5528 16 21.0005C16 20.4482 16.4477 20.0005 17 20.0005C17.5523 20.0005 18 20.4482 18 21.0005Z"
              fill="currentColor"
            />
            <path
              d="M16.5 9.25049C16.0858 9.25049 15.75 9.58627 15.75 10.0005C15.75 10.4147 16.0858 10.7505 16.5 10.7505H19.5C19.9142 10.7505 20.25 10.4147 20.25 10.0005C20.25 9.58627 19.9142 9.25049 19.5 9.25049H16.5Z"
              fill="currentColor"
            />
            <path
              d="M11.5303 14.5308C11.8232 14.2379 11.8232 13.7631 11.5303 13.4702C11.2374 13.1773 10.7626 13.1773 10.4697 13.4702L9.84835 14.0915C9.37153 14.5683 9.27147 14.6496 9.16569 14.6934C9.05991 14.7372 8.93168 14.7505 8.25736 14.7505H7C6.58579 14.7505 6.25 15.0863 6.25 15.5005C6.25 15.9147 6.58579 16.2505 7 16.2505H8.25736L8.36147 16.2506C8.87058 16.2514 9.32241 16.2521 9.73972 16.0792C10.157 15.9064 10.476 15.5864 10.8355 15.2258L10.909 15.1521L11.5303 14.5308Z"
              fill="currentColor"
            />
          </g>
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
            d="M21 4.00049C21 5.10506 20.1046 6.00049 19 6.00049C17.8954 6.00049 17 5.10506 17 4.00049C17 2.89592 17.8954 2.00049 19 2.00049C20.1046 2.00049 21 2.89592 21 4.00049Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.21 6.04729C11.6039 5.17615 13.3359 5.04277 14.8467 5.69024C16.0283 6.19664 16.3248 7.73632 15.4158 8.64535L13.7618 10.2993C13.4124 10.6488 13.4384 11.2229 13.8181 11.5393L14.8145 12.3696C15.4073 12.8636 15.75 13.5953 15.75 14.367V16.5005C15.75 16.9147 15.4142 17.2505 15 17.2505C14.5858 17.2505 14.25 16.9147 14.25 16.5005V14.367C14.25 14.0405 14.105 13.7309 13.8542 13.522L12.8578 12.6916C11.8005 11.8105 11.728 10.2118 12.7012 9.23866L14.3552 7.58469C14.5138 7.42604 14.462 7.15734 14.2558 7.06896C13.1966 6.61501 11.9822 6.70852 11.005 7.31929L8.89751 8.63649C8.54625 8.85602 8.08354 8.74924 7.86401 8.39799C7.64447 8.04673 7.75126 7.58402 8.10251 7.36449L10.21 6.04729ZM2.49828 16.443C2.80617 16.1659 3.28038 16.1909 3.55748 16.4988L4.16575 17.1746C4.78209 17.8594 5.66013 18.2505 6.58146 18.2505H17.4186C18.3399 18.2505 19.2179 17.8594 19.8343 17.1746L20.4425 16.4988C20.7196 16.1909 21.1938 16.1659 21.5017 16.443C21.8096 16.7201 21.8346 17.1943 21.5575 17.5022L20.9492 18.1781C20.0484 19.179 18.7651 19.7505 17.4186 19.7505H6.58146C5.2349 19.7505 3.95161 19.179 3.05081 18.1781L2.44254 17.5022C2.16544 17.1943 2.1904 16.7201 2.49828 16.443Z"
            fill="currentColor"
          />
          <path
            d="M8.00001 21.0005C8.00001 21.5528 7.55229 22.0005 7.00001 22.0005C6.44772 22.0005 6.00001 21.5528 6.00001 21.0005C6.00001 20.4482 6.44772 20.0005 7.00001 20.0005C7.55229 20.0005 8.00001 20.4482 8.00001 21.0005Z"
            fill="currentColor"
          />
          <path
            d="M18 21.0005C18 21.5528 17.5523 22.0005 17 22.0005C16.4477 22.0005 16 21.5528 16 21.0005C16 20.4482 16.4477 20.0005 17 20.0005C17.5523 20.0005 18 20.4482 18 21.0005Z"
            fill="currentColor"
          />
          <path
            d="M16.5 9.25049C16.0858 9.25049 15.75 9.58627 15.75 10.0005C15.75 10.4147 16.0858 10.7505 16.5 10.7505H19.5C19.9142 10.7505 20.25 10.4147 20.25 10.0005C20.25 9.58627 19.9142 9.25049 19.5 9.25049H16.5Z"
            fill="currentColor"
          />
          <path
            d="M11.5303 14.5308C11.8232 14.2379 11.8232 13.7631 11.5303 13.4702C11.2374 13.1773 10.7626 13.1773 10.4697 13.4702L9.84836 14.0915C9.37154 14.5683 9.27148 14.6496 9.1657 14.6934C9.05992 14.7372 8.93169 14.7505 8.25737 14.7505H7.00001C6.58579 14.7505 6.25001 15.0863 6.25001 15.5005C6.25001 15.9147 6.58579 16.2505 7.00001 16.2505H8.25737L8.36148 16.2506C8.87059 16.2514 9.32242 16.2521 9.73972 16.0792C10.157 15.9064 10.476 15.5864 10.8355 15.2258L10.909 15.1521L11.5303 14.5308Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSkateboardingRound as IconComponentType).keywords = [
  "skateboarding",
  "round",
  "skateboarders",
  "snowboarding",
  "skatepark",
  "skating",
  "skate",
  "snowboard",
  "rollerskating",
  "breakdancing",
  "wakeboarding",
  "orbicular",
  "rotund",
  "orbiculate",
  "discoidal",
  "disklike",
  "discoid",
  "ringlike",
  "globular",
  "globose",
];

export default IconSkateboardingRound as IconComponentType;
