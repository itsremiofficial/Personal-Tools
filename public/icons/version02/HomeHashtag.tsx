import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconHomeHashtag: FC<IconProps> = ({
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
            d="M9.68992 2.84016L4.29992 7.04016C3.39992 7.74016 2.66992 9.23016 2.66992 10.3602V17.7702C2.66992 20.0902 4.55992 21.9902 6.87992 21.9902H18.4599C20.7799 21.9902 22.6699 20.0902 22.6699 17.7802V10.5002C22.6699 9.29016 21.8599 7.74016 20.8699 7.05016L14.6899 2.72016C13.2899 1.74016 11.0399 1.79016 9.68992 2.84016Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M11.1699 18H14.1699C15.8199 18 17.1699 16.65 17.1699 15V12C17.1699 10.35 15.8199 9 14.1699 9H11.1699C9.51992 9 8.16992 10.35 8.16992 12V15C8.16992 16.65 9.51992 18 11.1699 18Z"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.6699 9V18"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.16992 13.5H17.1699"
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
            d="M20.6999 6.82018L14.9499 2.79018C13.3799 1.69018 10.9799 1.75018 9.46992 2.92018L4.45992 6.83018C3.44992 7.61018 2.66992 9.21018 2.66992 10.4702V17.3702C2.66992 19.9202 4.73992 22.0002 7.27992 22.0002H18.0499C20.5899 22.0002 22.6599 19.9302 22.6599 17.3802V10.6002C22.6699 9.25018 21.7999 7.59018 20.6999 6.82018Z"
            fill="currentColor"
          />
          <path
            d="M14.0703 8.51025H11.2703C9.35027 8.51025 7.78027 10.0703 7.78027 12.0003V14.7903C7.78027 16.7103 9.35027 18.2803 11.2703 18.2803H14.0603C15.9803 18.2803 17.5503 16.7203 17.5503 14.7903V12.0003C17.5503 10.0803 15.9903 8.51025 14.0703 8.51025ZM16.1603 12.0003V12.7003H13.3703V9.91025H14.0703C15.2203 9.91025 16.1603 10.8503 16.1603 12.0003ZM11.2703 9.91025H11.9703V12.7003H9.18027V12.0003C9.18027 10.8503 10.1203 9.91025 11.2703 9.91025ZM9.18027 14.7903V14.0903H11.9703V16.8803H11.2703C10.1203 16.8803 9.18027 15.9403 9.18027 14.7903ZM14.0703 16.8803H13.3703V14.0903H16.1603V14.7903C16.1603 15.9403 15.2203 16.8803 14.0703 16.8803Z"
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
            d="M13.3701 16.8798H14.0701C15.2201 16.8798 16.1601 15.9398 16.1601 14.7898V14.0898H13.3701V16.8798Z"
            fill="currentColor"
          />
          <path
            d="M9.17969 14.7898C9.17969 15.9398 10.1197 16.8798 11.2697 16.8798H11.9697V14.0898H9.17969V14.7898Z"
            fill="currentColor"
          />
          <path
            d="M9.17969 12.0002V12.7002H11.9697V9.91016H11.2697C10.1197 9.91016 9.17969 10.8502 9.17969 12.0002Z"
            fill="currentColor"
          />
          <path
            d="M20.6999 6.82018L14.9499 2.79018C13.3799 1.69018 10.9799 1.75018 9.46992 2.92018L4.45992 6.83018C3.44992 7.61018 2.66992 9.21018 2.66992 10.4702V17.3702C2.66992 19.9202 4.73992 22.0002 7.27992 22.0002H18.0499C20.5899 22.0002 22.6599 19.9302 22.6599 17.3802V10.6002C22.6699 9.25018 21.7999 7.59018 20.6999 6.82018ZM17.5499 14.7902C17.5499 16.7102 15.9799 18.2802 14.0599 18.2802H11.2699C9.34992 18.2802 7.77992 16.7202 7.77992 14.7902V12.0002C7.77992 10.0802 9.34992 8.51018 11.2699 8.51018H14.0599C15.9799 8.51018 17.5499 10.0702 17.5499 12.0002V14.7902Z"
            fill="currentColor"
          />
          <path
            d="M14.0701 9.91016H13.3701V12.7002H16.1601V12.0002C16.1601 10.8502 15.2201 9.91016 14.0701 9.91016Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconHomeHashtag as IconComponentType).keywords = [
  "home",
  "hashtag",
  "domicile",
  "habitation",
  "domestic",
  "dwelling",
  "nursing home",
  "rest home",
  "house",
  "dwelling house",
  "household",
  "slashtag",
  "bashtag",
  "hashtagger",
  "hashflag",
  "tag cloud",
  "tweet",
  "label cloud",
  "entity tag",
  "fragment",
];

export default IconHomeHashtag as IconComponentType;
