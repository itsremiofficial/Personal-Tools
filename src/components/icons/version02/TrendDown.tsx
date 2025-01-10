import { FC } from "react";

const IconTrendDown: FC<IconProps> = ({
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
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M17.1699 14.5L12.9699 10.3L11.3699 12.7L8.16992 9.5"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.1699 14.5H17.1699V12.5"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M9.66992 22H15.6699C20.6699 22 22.6699 20 22.6699 15V9C22.6699 4 20.6699 2 15.6699 2H9.66992C4.66992 2 2.66992 4 2.66992 9V15C2.66992 20 4.66992 22 9.66992 22Z"
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
            d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2Z"
            fill="currentColor"
          />
          <path
            d="M17.5496 12.47C17.5496 12.08 17.2396 11.77 16.8496 11.77C16.4596 11.77 16.1496 12.08 16.1496 12.47V12.65L13.4296 9.93004C13.2796 9.78004 13.0796 9.71004 12.8696 9.73004C12.6596 9.75004 12.4696 9.86004 12.3596 10.04L11.3396 11.56L8.97961 9.18004C8.70961 8.91004 8.26961 8.91004 7.98961 9.18004C7.71961 9.45004 7.71961 9.89004 7.98961 10.17L10.9696 13.15C11.1196 13.3 11.3196 13.37 11.5296 13.35C11.7396 13.33 11.9296 13.22 12.0396 13.04L13.0596 11.52L15.1696 13.63H14.9896C14.5996 13.63 14.2896 13.94 14.2896 14.33C14.2896 14.72 14.5996 15.03 14.9896 15.03H16.8496C16.9396 15.03 17.0296 15.01 17.1196 14.98C17.2896 14.91 17.4296 14.77 17.4996 14.6C17.5396 14.51 17.5496 14.42 17.5496 14.33V12.47Z"
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
            d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2ZM17.5499 14.33C17.5499 14.42 17.5299 14.51 17.4999 14.6C17.4299 14.77 17.2899 14.91 17.1199 14.98C17.0299 15.02 16.9399 15.03 16.8499 15.03H14.9899C14.5999 15.03 14.2899 14.72 14.2899 14.33C14.2899 13.94 14.5999 13.63 14.9899 13.63H15.1699L13.0599 11.52L12.0399 13.04C11.9199 13.21 11.7399 13.33 11.5299 13.35C11.3199 13.37 11.1199 13.3 10.9699 13.15L7.98992 10.17C7.71992 9.9 7.71992 9.46 7.98992 9.18C8.25992 8.9 8.69992 8.91 8.97992 9.18L11.3599 11.56L12.3799 10.04C12.4999 9.87 12.6799 9.75 12.8899 9.73C13.1099 9.71 13.2999 9.78 13.4499 9.93L16.1699 12.65V12.47C16.1699 12.08 16.4799 11.77 16.8699 11.77C17.2599 11.77 17.5699 12.08 17.5699 12.47V14.33H17.5499Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconTrendDown as IconComponent).keywords = [
  "trend",
  "down",
  "tendency",
  "vogue",
  "course",
  "curve",
  "slue",
  "swerve",
  "slew",
  "style",
  "cut",
  "downwards",
  "downward",
  "downbound",
  "falling",
  "fallen",
  "pull down",
  "downwardly",
  "declining",
  "descending",
];

export default IconTrendDown as IconComponent;
