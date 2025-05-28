import { FC } from "react";

const IconDirectRight: FC<IconProps> = ({
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
            d="M19.9601 9.1698L8.37007 3.0698C5.62007 1.6198 2.63007 4.5498 4.02007 7.3298L5.64007 10.5698C6.09007 11.4698 6.09007 12.5298 5.64007 13.4298L4.02007 16.6698C2.63007 19.4498 5.62007 22.3698 8.37007 20.9298L19.9601 14.8298C22.2401 13.6298 22.2401 10.3698 19.9601 9.1698Z"
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
            d="M3.38 17.0202L5.12 13.5402C5.6 12.5702 5.6 11.4402 5.12 10.4702L3.38 6.98022C1.89 4.00022 5.1 0.850218 8.05 2.41022L9.59 3.23022C9.81 3.34022 9.98 3.52022 10.07 3.74022L15.76 16.3902C15.99 16.9102 15.78 17.5202 15.28 17.7802L8.04 21.5902C5.1 23.1502 1.89 20.0002 3.38 17.0202Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.9801 15.6L13.2502 7.31996C12.8302 6.38996 13.8302 5.44996 14.7302 5.92996L20.5002 8.96996C22.9502 10.26 22.9502 13.76 20.5002 15.05L18.4602 16.12C17.9102 16.4 17.2401 16.17 16.9801 15.6Z"
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
          <g clipPath="url(#clip0_12_64940)">
            <path
              d="M3.38 17.0202L5.12 13.5402C5.6 12.5702 5.6 11.4402 5.12 10.4702L3.38 6.98022C1.89 4.00022 5.1 0.850218 8.05 2.41022L9.59 3.23022C9.81 3.34022 9.98 3.52022 10.07 3.74022L15.76 16.3902C15.99 16.9102 15.78 17.5202 15.28 17.7802L8.04 21.5902C5.1 23.1502 1.89 20.0002 3.38 17.0202Z"
              fill="currentColor"
            />
            <path
              d="M16.9801 15.6L13.2502 7.31996C12.8302 6.38996 13.8302 5.44996 14.7302 5.92996L20.5002 8.96996C22.9502 10.26 22.9502 13.76 20.5002 15.05L18.4602 16.12C17.9102 16.4 17.2401 16.17 16.9801 15.6Z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath>
              <rect
                width="24"
                height="24"
                fill="none"
                transform="translate(0.669922)"
              />
            </clipPath>
          </defs>
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconDirectRight as IconComponent).keywords = [
  "direct",
  "right",
  "straightforward",
  "directly",
  "forthright",
  "plainspoken",
  "man-to-man",
  "straight",
  "frank",
  "free-spoken",
  "outspoken",
  "precise",
  "right on",
  "accurate",
  "decently",
  "satisfactory",
  "exact",
  "powerful",
  "opportune",
];

export default IconDirectRight as IconComponent;
