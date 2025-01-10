import { FC } from "react";

const IconBatteryChargeMinimalistic: FC<IconProps> = ({
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
            d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H11.5C15.2712 4 17.1569 4 18.3284 5.17157C19.5 6.34315 19.5 8.22876 19.5 12C19.5 15.7712 19.5 17.6569 18.3284 18.8284C17.1569 20 15.2712 20 11.5 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M22 14L22 10"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M11.5 9L9 12H12.5L10 15"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
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
            d="M3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20H11.5C15.2712 20 17.1569 20 18.3284 18.8284C19.5 17.6569 19.5 15.7712 19.5 12C19.5 8.22876 19.5 6.34315 18.3284 5.17157C17.1569 4 15.2712 4 11.5 4H10C6.22876 4 4.34315 4 3.17157 5.17157Z"
            fill="currentColor"
          />
          <path
            d="M21.25 14C21.25 14.4142 21.5858 14.75 22 14.75C22.4142 14.75 22.75 14.4142 22.75 14V10C22.75 9.58579 22.4142 9.25 22 9.25C21.5858 9.25 21.25 9.58579 21.25 10V14Z"
            fill="currentColor"
          />
          <path
            d="M12.0762 9.48016C12.3413 9.16195 12.2984 8.68903 11.9801 8.42385C11.6619 8.15868 11.189 8.20167 10.9238 8.51988L8.42384 11.5199C8.23754 11.7434 8.19738 12.0546 8.32082 12.3181C8.44425 12.5817 8.709 12.75 9.00001 12.75H10.8987L9.42384 14.5199C9.15867 14.8381 9.20166 15.311 9.51987 15.5762C9.83808 15.8414 10.311 15.7984 10.5762 15.4802L13.0762 12.4802C13.2625 12.2566 13.3026 11.9454 13.1792 11.6819C13.0558 11.4184 12.791 11.25 12.5 11.25H10.6013L12.0762 9.48016Z"
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
            d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H11.5C15.2712 4 17.1569 4 18.3284 5.17157C19.5 6.34315 19.5 8.22876 19.5 12C19.5 15.7712 19.5 17.6569 18.3284 18.8284C17.1569 20 15.2712 20 11.5 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12ZM11.9801 8.42383C12.2983 8.68901 12.3413 9.16193 12.0762 9.48014L10.6013 11.25H12.5C12.791 11.25 13.0558 11.4183 13.1792 11.6819C13.3026 11.9454 13.2625 12.2566 13.0762 12.4801L10.5762 15.4801C10.311 15.7983 9.83807 15.8413 9.51986 15.5762C9.20165 15.311 9.15866 14.8381 9.42383 14.5199L10.8987 12.75H9C8.70899 12.75 8.44424 12.5817 8.32081 12.3181C8.19737 12.0546 8.23753 11.7434 8.42383 11.5199L10.9238 8.51986C11.189 8.20165 11.6619 8.15866 11.9801 8.42383Z"
            fill="currentColor"
          />
          <path
            d="M21.25 14C21.25 14.4142 21.5858 14.75 22 14.75C22.4142 14.75 22.75 14.4142 22.75 14V10C22.75 9.58579 22.4142 9.25 22 9.25C21.5858 9.25 21.25 9.58579 21.25 10V14Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBatteryChargeMinimalistic as IconComponent).keywords = [
  "battery",
  "charge",
  "minimalistic",
  "bombardment",
  "stamp battery",
  "barrage",
  "shelling",
  "assault and battery",
  "assault",
  "barrage fire",
  "electric battery",
  "alternator",
  "consign",
  "commission",
  "mission",
  "appoint",
  "billing",
  "guardianship",
  "tutelage",
  "institutionalize",
  "send",
  "modularistic",
  "brutalistic",
  "localistic",
  "reductionist",
  "exhibitional",
  "monogynous",
  "simplificational",
  "reductionistic",
  "automatistic",
];

export default IconBatteryChargeMinimalistic as IconComponent;
