import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconSuitcase: FC<IconProps> = ({
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
            d="M2 14.0004C2 10.2291 2 8.34351 3.17157 7.17194C4.34315 6.00037 6.22876 6.00037 10 6.00037H14C17.7712 6.00037 19.6569 6.00037 20.8284 7.17194C22 8.34351 22 10.2291 22 14.0004C22 17.7716 22 19.6572 20.8284 20.8288C19.6569 22.0004 17.7712 22.0004 14 22.0004H10C6.22876 22.0004 4.34315 22.0004 3.17157 20.8288C2 19.6572 2 17.7716 2 14.0004Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M16 6.00037C16 4.11475 16 3.17194 15.4142 2.58615C14.8284 2.00037 13.8856 2.00037 12 2.00037C10.1144 2.00037 9.17157 2.00037 8.58579 2.58615C8 3.17194 8 4.11475 8 6.00037"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M17 9.00037C17 9.55265 16.5523 10.0004 16 10.0004C15.4477 10.0004 15 9.55265 15 9.00037C15 8.44808 15.4477 8.00037 16 8.00037C16.5523 8.00037 17 8.44808 17 9.00037Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M9 9.00037C9 9.55265 8.55228 10.0004 8 10.0004C7.44772 10.0004 7 9.55265 7 9.00037C7 8.44808 7.44772 8.00037 8 8.00037C8.55228 8.00037 9 8.44808 9 9.00037Z"
            fill="currentColor"
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
            d="M3.17157 7.92194C2 9.09351 2 10.9791 2 14.7504C2 18.5216 2 20.4072 3.17157 21.5788C4.34315 22.7504 6.22876 22.7504 10 22.7504H14C17.7712 22.7504 19.6569 22.7504 20.8284 21.5788C22 20.4072 22 18.5216 22 14.7504C22 10.9791 22 9.09351 20.8284 7.92194C19.6569 6.75037 17.7712 6.75037 14 6.75037H10C6.22876 6.75037 4.34315 6.75037 3.17157 7.92194Z"
            fill="currentColor"
          />
          <path
            d="M16 10.7504C16.5523 10.7504 17 10.3027 17 9.75037C17 9.19808 16.5523 8.75037 16 8.75037C15.4477 8.75037 15 9.19808 15 9.75037C15 10.3027 15.4477 10.7504 16 10.7504Z"
            fill="currentColor"
          />
          <path
            d="M9 9.75037C9 10.3027 8.55228 10.7504 8 10.7504C7.44772 10.7504 7 10.3027 7 9.75037C7 9.19808 7.44772 8.75037 8 8.75037C8.55228 8.75037 9 9.19808 9 9.75037Z"
            fill="currentColor"
          />
          <path
            d="M12.052 2.00037H11.948C11.0495 2.00034 10.3003 2.00032 9.70552 2.08028C9.07773 2.16469 8.51093 2.35036 8.05546 2.80583C7.59999 3.2613 7.41432 3.8281 7.32991 4.45589C7.24995 5.05066 7.24997 5.79987 7.25 6.69833L7.25 6.77608C7.70703 6.76113 8.20535 6.75487 8.75 6.75225V6.75037C8.75 5.78636 8.7516 5.1388 8.81654 4.65576C8.87858 4.1943 8.9858 3.9968 9.11612 3.86649C9.24644 3.73617 9.44393 3.62895 9.9054 3.56691C10.3884 3.50196 11.036 3.50037 12 3.50037C12.964 3.50037 13.6116 3.50196 14.0946 3.56691C14.5561 3.62895 14.7536 3.73617 14.8839 3.86649C15.0142 3.9968 15.1214 4.1943 15.1835 4.65576C15.2484 5.1388 15.25 5.78636 15.25 6.75037V6.75225C15.7947 6.75487 16.293 6.76113 16.75 6.77608V6.69838C16.75 5.79991 16.7501 5.05067 16.6701 4.45589C16.5857 3.8281 16.4 3.2613 15.9445 2.80583C15.4891 2.35036 14.9223 2.16469 14.2945 2.08028C13.6997 2.00032 12.9505 2.00034 12.052 2.00037Z"
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
            d="M12.052 1.25037H11.948C11.0495 1.25034 10.3003 1.25032 9.70552 1.33028C9.07773 1.41469 8.51093 1.60036 8.05546 2.05583C7.59999 2.5113 7.41432 3.0781 7.32991 3.70589C7.24995 4.30067 7.24997 5.04988 7.25 5.94835V6.02608C5.22882 6.09221 4.01511 6.3284 3.17157 7.17194C2 8.34351 2 10.2291 2 14.0004C2 17.7716 2 19.6572 3.17157 20.8288C4.34315 22.0004 6.22876 22.0004 10 22.0004H14C17.7712 22.0004 19.6569 22.0004 20.8284 20.8288C22 19.6572 22 17.7716 22 14.0004C22 10.2291 22 8.34351 20.8284 7.17194C19.9849 6.3284 18.7712 6.09221 16.75 6.02608V5.94838C16.75 5.04991 16.7501 4.30067 16.6701 3.70589C16.5857 3.0781 16.4 2.5113 15.9445 2.05583C15.4891 1.60036 14.9223 1.41469 14.2945 1.33028C13.6997 1.25032 12.9505 1.25034 12.052 1.25037ZM15.25 6.00225V6.00037C15.25 5.03636 15.2484 4.3888 15.1835 3.90576C15.1214 3.4443 15.0142 3.2468 14.8839 3.11649C14.7536 2.98617 14.5561 2.87895 14.0946 2.81691C13.6116 2.75196 12.964 2.75037 12 2.75037C11.036 2.75037 10.3884 2.75196 9.90539 2.81691C9.44393 2.87895 9.24644 2.98617 9.11612 3.11649C8.9858 3.2468 8.87858 3.4443 8.81654 3.90576C8.7516 4.3888 8.75 5.03636 8.75 6.00037V6.00225C9.14203 6.00037 9.55807 6.00037 10 6.00037H14C14.4419 6.00037 14.858 6.00037 15.25 6.00225ZM17 9.00037C17 9.55265 16.5523 10.0004 16 10.0004C15.4477 10.0004 15 9.55265 15 9.00037C15 8.44808 15.4477 8.00037 16 8.00037C16.5523 8.00037 17 8.44808 17 9.00037ZM8 10.0004C8.55228 10.0004 9 9.55265 9 9.00037C9 8.44808 8.55228 8.00037 8 8.00037C7.44772 8.00037 7 8.44808 7 9.00037C7 9.55265 7.44772 10.0004 8 10.0004Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSuitcase as IconComponentType).keywords = [
  "suitcase",
  "bag",
  "grip",
  "traveling bag",
  "valise",
  "luggage",
  "pack",
  "backpack",
  "briefcase",
  "baggage",
];

export default IconSuitcase as IconComponentType;