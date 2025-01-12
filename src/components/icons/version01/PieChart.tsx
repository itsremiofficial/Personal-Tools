import { FC } from "react";

const IconPieChart: FC<IconProps> = ({
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
            d="M20 15.5524C18.8263 19.2893 15.3351 22 11.2108 22C6.12383 22 2 17.8762 2 12.7892C2 8.66488 4.71065 5.1737 8.44759 4"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M21.9131 9.94727C20.8515 6.14438 17.8556 3.14845 14.0527 2.0869C12.4091 1.6281 11 3.05419 11 4.76062V11.4551C11 12.3083 11.6917 13 12.5449 13H19.2394C20.9458 13 22.3719 11.5909 21.9131 9.94727Z"
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
            opacity={duotone ? "0.5" : "1"}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.16312 3.77522C9.28724 4.1704 9.0675 4.59137 8.67232 4.71549C5.23899 5.79384 2.75 9.00179 2.75 12.7891C2.75 17.4619 6.53805 21.25 11.2108 21.25C14.9982 21.25 18.2061 18.761 19.2845 15.3276C19.4086 14.9325 19.8296 14.7127 20.2247 14.8368C20.6199 14.961 20.8397 15.3819 20.7155 15.7771C19.4465 19.8176 15.6721 22.75 11.2108 22.75C5.70962 22.75 1.25 18.2903 1.25 12.7891C1.25 8.32788 4.18231 4.55348 8.22285 3.28442C8.61803 3.1603 9.039 3.38004 9.16312 3.77522Z"
            fill="currentColor"
          />
          <path
            d="M21.9131 9.94727C20.8515 6.14438 17.8556 3.14845 14.0527 2.0869C12.4091 1.6281 11 3.05419 11 4.76062V11.4551C11 12.3083 11.6917 13 12.5449 13H19.2394C20.9458 13 22.3719 11.5909 21.9131 9.94727Z"
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
            d="M9.16312 3.77522C9.28724 4.1704 9.0675 4.59137 8.67232 4.71549C5.23899 5.79384 2.75 9.00179 2.75 12.7891C2.75 17.4619 6.53805 21.25 11.2108 21.25C14.9982 21.25 18.2061 18.761 19.2845 15.3276C19.4086 14.9325 19.8296 14.7127 20.2247 14.8368C20.6199 14.961 20.8397 15.3819 20.7155 15.7771C19.4465 19.8176 15.6721 22.75 11.2108 22.75C5.70962 22.75 1.25 18.2903 1.25 12.7891C1.25 8.32788 4.18231 4.55348 8.22285 3.28442C8.61803 3.1603 9.039 3.38004 9.16312 3.77522Z"
            fill="currentColor"
          />
          <path
            d="M21.9131 9.94727C20.8515 6.14438 17.8556 3.14845 14.0527 2.0869C12.4091 1.6281 11 3.05419 11 4.76062V11.4551C11 12.3083 11.6917 13 12.5449 13H19.2394C20.9458 13 22.3719 11.5909 21.9131 9.94727Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconPieChart as IconComponent).keywords = [
  "pie",
  "chart",
  "proto-indo european",
  "cookie",
  "pastry",
  "biscuit",
  "twinkie",
  "cheesecake",
  "cake",
  "cupcake",
  "pudding",
  "map",
  "cartography",
  "mapping",
  "cartographic",
  "plan",
  "diagram",
  "graphical",
  "diagrammatic",
  "blueprint",
];

export default IconPieChart as IconComponent;
