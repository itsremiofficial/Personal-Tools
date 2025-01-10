import { FC } from "react";

const IconJudge: FC<IconProps> = ({
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
            d="M20.6795 18.51L15.7295 13.56"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.7302 13.56L12.1902 17.1C11.4102 17.88 10.1402 17.88 9.36016 17.1L5.12016 12.86C4.34016 12.08 4.34016 10.81 5.12016 10.03L12.1902 2.96C12.9702 2.18 14.2402 2.18 15.0202 2.96L19.2602 7.20002C20.0402 7.98002 20.0402 9.25001 19.2602 10.03L15.7302 13.56Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2.66992 21H8.66992"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.22949 7.92001L14.2995 14.99"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
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
            d="M21.2102 19.04C21.0602 19.19 20.8702 19.26 20.6802 19.26C20.4902 19.26 20.3002 19.19 20.1502 19.04L15.2002 14.09L15.7302 13.56L16.2602 13.03L21.2102 17.98C21.5002 18.27 21.5002 18.75 21.2102 19.04Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.14028 9.27997L12.9403 15.08C13.3303 15.47 13.3303 16.1 12.9403 16.49L12.0403 17.4C11.2303 18.2 9.95027 18.2 9.15027 17.4L4.81027 13.06C4.02027 12.27 4.02027 10.98 4.81027 10.18L5.72028 9.26997C6.11028 8.88997 6.75028 8.88997 7.14028 9.27997Z"
            fill="currentColor"
          />
          <path
            d="M19.2594 10.19L15.4494 13.99C15.0494 14.39 14.4094 14.39 14.0094 13.99L8.23945 8.22C7.83945 7.82 7.83945 7.18 8.23945 6.78L12.0495 2.97C12.8395 2.18 14.1294 2.18 14.9294 2.97L19.2695 7.31C20.0495 8.1 20.0494 9.38 19.2594 10.19Z"
            fill="currentColor"
          />
          <path
            d="M8.66992 21.75H2.66992C2.25992 21.75 1.91992 21.41 1.91992 21C1.91992 20.59 2.25992 20.25 2.66992 20.25H8.66992C9.07992 20.25 9.41992 20.59 9.41992 21C9.41992 21.41 9.07992 21.75 8.66992 21.75Z"
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
            d="M21.2102 19.04C21.0602 19.19 20.8702 19.26 20.6802 19.26C20.4902 19.26 20.3002 19.19 20.1502 19.04L15.2002 14.09L15.7302 13.56L16.2602 13.03L21.2102 17.98C21.5002 18.27 21.5002 18.75 21.2102 19.04Z"
            fill="currentColor"
          />
          <path
            d="M7.14027 9.28L12.9403 15.08C13.3303 15.47 13.3303 16.1 12.9403 16.49L12.0403 17.4C11.2303 18.2 9.95027 18.2 9.15027 17.4L4.81027 13.06C4.02027 12.27 4.02027 10.98 4.81027 10.18L5.72027 9.27C6.11027 8.89 6.75027 8.89 7.14027 9.28Z"
            fill="currentColor"
          />
          <path
            d="M19.2597 10.19L15.4497 13.99C15.0497 14.39 14.4097 14.39 14.0097 13.99L8.22969 8.20999C7.82969 7.80999 7.82969 7.16999 8.22969 6.76999L12.0397 2.95999C12.8297 2.16999 14.1197 2.16999 14.9197 2.95999L19.2597 7.29999C20.0497 8.09999 20.0497 9.37999 19.2597 10.19Z"
            fill="currentColor"
          />
          <path
            d="M8.66992 21.75H2.66992C2.25992 21.75 1.91992 21.41 1.91992 21C1.91992 20.59 2.25992 20.25 2.66992 20.25H8.66992C9.07992 20.25 9.41992 20.59 9.41992 21C9.41992 21.41 9.07992 21.75 8.66992 21.75Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconJudge as IconComponent).keywords = [
  "judge",
  "magistrate",
  "jurist",
  "justice",
  "adjudicate",
  "estimate",
  "pronounce",
  "label",
  "guess",
  "approximate",
];

export default IconJudge as IconComponent;
