import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconTagRight: FC<IconProps> = ({
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
            d="M4.89005 3.10001H16.3301C17.0101 3.10001 17.8601 3.57001 18.2201 4.15001L22.4001 10.83C22.8001 11.48 22.7601 12.5 22.3001 13.11L17.1201 20.01C16.7501 20.5 15.9501 20.9 15.3401 20.9H4.89005C3.14005 20.9 2.0801 18.98 3.0001 17.49L5.77006 13.06C6.14006 12.47 6.14006 11.51 5.77006 10.92L3.0001 6.49001C2.0801 5.02001 3.15005 3.10001 4.89005 3.10001Z"
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
            d="M18.5503 6.12003L4.60026 20.07C4.17026 20.5 3.45026 20.46 3.10026 19.97C2.60026 19.28 2.50027 18.32 3.02027 17.49L5.78026 13.06C6.15026 12.47 6.15026 11.51 5.78026 10.92L3.02027 6.49003C2.09027 5.01003 3.16026 3.09003 4.90026 3.09003H16.3503C17.0303 3.09003 17.8703 3.56003 18.2303 4.13003L18.7003 4.87003C18.9303 5.28003 18.8803 5.79003 18.5503 6.12003Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.2998 13.11L17.1198 20.01C16.7598 20.5 15.9598 20.9 15.3398 20.9H8.17979C7.28979 20.9 6.83979 19.82 7.46979 19.19L18.9798 7.67999C19.4298 7.22999 20.1998 7.30999 20.5398 7.85999L22.3898 10.83C22.7998 11.47 22.7598 12.5 22.2998 13.11Z"
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
            d="M18.5495 6.12001L4.58952 20.08C4.15952 20.51 3.43952 20.47 3.08952 19.98C2.58952 19.29 2.48952 18.33 3.00952 17.5L5.76952 13.07C6.13952 12.48 6.13952 11.52 5.76952 10.93L3.00952 6.50001C2.07952 5.02001 3.14952 3.10001 4.88952 3.10001H16.3395C17.0195 3.10001 17.8595 3.57001 18.2195 4.14001L18.6895 4.88001C18.9295 5.28001 18.8795 5.79001 18.5495 6.12001Z"
            fill="currentColor"
          />
          <path
            d="M22.2998 13.11L17.1198 20.01C16.7598 20.5 15.9598 20.9 15.3398 20.9H8.17979C7.28979 20.9 6.83979 19.82 7.46979 19.19L18.9898 7.67999C19.4398 7.22999 20.2098 7.30999 20.5498 7.85999L22.3998 10.83C22.7998 11.47 22.7598 12.5 22.2998 13.11Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconTagRight as IconComponentType).keywords = [
  "tag",
  "right",
  "label",
  "mark",
  "trail",
  "chase",
  "go after",
  "tag end",
  "dog",
  "shred",
  "chase after",
  "straight",
  "precise",
  "right on",
  "accurate",
  "decently",
  "satisfactory",
  "exact",
  "powerful",
  "opportune",
];

export default IconTagRight as IconComponentType;
