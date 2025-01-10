import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconTuning2: FC<IconProps> = ({
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
            d="M9.5 14.0005C11.1569 14.0005 12.5 15.3436 12.5 17.0005C12.5 18.6573 11.1569 20.0005 9.5 20.0005C7.84315 20.0005 6.5 18.6573 6.5 17.0005C6.5 15.3436 7.84315 14.0005 9.5 14.0005Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M14.5 4.00046C12.8431 4.00046 11.5 5.34361 11.5 7.00046C11.5 8.65732 12.8431 10.0005 14.5 10.0005C16.1569 10.0005 17.5 8.65732 17.5 7.00046C17.5 5.34361 16.1569 4.00046 14.5 4.00046Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M13 17.0005L22 17.0005"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M11 7.00049L2 6.95898"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M2 17.0005L6 17.0005"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M22 7.00049L18 7.00049"
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
            d="M9.25 14.0005C10.9069 14.0005 12.25 15.3436 12.25 17.0005C12.25 18.6573 10.9069 20.0005 9.25 20.0005C7.59315 20.0005 6.25 18.6573 6.25 17.0005C6.25 15.3436 7.59315 14.0005 9.25 14.0005Z"
            fill="currentColor"
          />
          <path
            d="M14.25 4.00049C12.5931 4.00049 11.25 5.34363 11.25 7.00049C11.25 8.65734 12.5931 10.0005 14.25 10.0005C15.9069 10.0005 17.25 8.65734 17.25 7.00049C17.25 5.34363 15.9069 4.00049 14.25 4.00049Z"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.5" : "1"}>
            <path
              d="M17.1658 7.70898C17.2208 7.48181 17.25 7.24454 17.25 7.00046C17.25 6.72651 17.2133 6.46113 17.1445 6.20898H21.75C22.1642 6.20898 22.5 6.54477 22.5 6.95898C22.5 7.3732 22.1642 7.70898 21.75 7.70898L17.1658 7.70898Z"
              fill="currentColor"
            />
            <path
              d="M11.3555 6.20898C11.2867 6.46113 11.25 6.72651 11.25 7.00046C11.25 7.24454 11.2791 7.48181 11.3342 7.70898L1.75 7.70898C1.33579 7.70898 1 7.3732 1 6.95898C1 6.54477 1.33579 6.20898 1.75 6.20898H11.3555Z"
              fill="currentColor"
            />
            <path
              d="M6.35551 16.209H1.75C1.33579 16.209 1 16.5448 1 16.959C1 17.3732 1.33579 17.709 1.75 17.709H6.33416C6.27915 17.4818 6.25 17.2445 6.25 17.0005C6.25 16.7265 6.28672 16.4611 6.35551 16.209Z"
              fill="currentColor"
            />
            <path
              d="M12.1658 17.709H21.75C22.1642 17.709 22.5 17.3732 22.5 16.959C22.5 16.5448 22.1642 16.209 21.75 16.209H12.1445C12.2133 16.4611 12.25 16.7265 12.25 17.0005C12.25 17.2445 12.2209 17.4818 12.1658 17.709Z"
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
            d="M9.25 14.0005C10.9069 14.0005 12.25 15.3436 12.25 17.0005C12.25 18.6573 10.9069 20.0005 9.25 20.0005C7.59315 20.0005 6.25 18.6573 6.25 17.0005C6.25 15.3436 7.59315 14.0005 9.25 14.0005Z"
            fill="currentColor"
          />
          <path
            d="M14.25 4.00049C12.5931 4.00049 11.25 5.34363 11.25 7.00049C11.25 8.65734 12.5931 10.0005 14.25 10.0005C15.9069 10.0005 17.25 8.65734 17.25 7.00049C17.25 5.34363 15.9069 4.00049 14.25 4.00049Z"
            fill="currentColor"
          />
          <path
            d="M8.75 6.20901C9.16421 6.20901 9.5 6.5448 9.5 6.95901C9.5 7.37322 9.16421 7.70901 8.75 7.70901L1.75 7.70901C1.33579 7.70901 1 7.37322 1 6.95901C1 6.5448 1.33579 6.20901 1.75 6.20901H8.75Z"
            fill="currentColor"
          />
          <path
            d="M14.75 16.209C14.3358 16.209 14 16.5448 14 16.959C14 17.3732 14.3358 17.709 14.75 17.709H21.75C22.1642 17.709 22.5 17.3732 22.5 16.959C22.5 16.5448 22.1642 16.209 21.75 16.209H14.75Z"
            fill="currentColor"
          />
          <path
            d="M1 16.959C1 16.5448 1.33579 16.209 1.75 16.209H3.75C4.16421 16.209 4.5 16.5448 4.5 16.959C4.5 17.3732 4.16421 17.709 3.75 17.709H1.75C1.33579 17.709 1 17.3732 1 16.959Z"
            fill="currentColor"
          />
          <path
            d="M21.75 6.20901C22.1642 6.20901 22.5 6.5448 22.5 6.95901C22.5 7.37322 22.1642 7.70901 21.75 7.70901L19.75 7.70901C19.3358 7.70901 19 7.37322 19 6.95901C19 6.5448 19.3358 6.20901 19.75 6.20901H21.75Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconTuning2 as IconComponentType).keywords = [
  "tuning",
  "2",
  "melody",
  "tune up",
  "line",
  "strain",
  "air",
  "melodic line",
  "melodic phrase",
  "tuner",
  "audience",
  "wireless network",
  "sign on",
  "sign off",
  "put through",
  "back up",
  "ring up",
  "call up",
  "hang up",
  "read out",
];

export default IconTuning2 as IconComponentType;
