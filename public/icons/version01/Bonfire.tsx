import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconBonfire: FC<IconProps> = ({
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
            d="M18 8.80781C18 13.7619 13.7333 15.0004 11.6 15.0004C9.73333 15.0004 6 13.7619 6 8.80781C6 6.71053 7.20839 5.35863 8.26099 4.65311C8.79638 4.29425 9.48354 4.55238 9.57296 5.17661C9.75127 6.42136 10.8777 7.3498 11.5596 6.28034C12.1424 5.36651 12.3529 4.13205 12.3529 3.38933C12.3529 2.29001 13.503 1.59145 14.4009 2.26497C16.1512 3.57777 18 5.77636 18 8.80781Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M20 15.0004L4 22.0004"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M4 15.0004L9 17.1879M20 22.0004L14.5 19.5941"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M15 10.0004C14.8 10.667 13.92 12.0004 12 12.0004"
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
            opacity={duotone ? "0.5" : "1"}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.31307 14.6999C3.4791 14.3205 3.92132 14.1474 4.3008 14.3134L9.3008 16.5009C9.68029 16.667 9.85333 17.1092 9.68731 17.4887C9.52128 17.8682 9.07906 18.0412 8.69957 17.8752L3.69958 15.6877C3.32009 15.5216 3.14705 15.0794 3.31307 14.6999ZM20.6873 14.6999C20.8533 15.0794 20.6803 15.5216 20.3008 15.6877L4.3008 22.6877C3.92132 22.8537 3.4791 22.6807 3.31307 22.3012C3.14705 21.9217 3.32009 21.4795 3.69958 21.3134L19.6996 14.3134C20.0791 14.1474 20.5213 14.3205 20.6873 14.6999ZM13.8131 19.2937C13.9791 18.9142 14.4213 18.7412 14.8008 18.9072L20.3008 21.3134C20.6803 21.4795 20.8533 21.9217 20.6873 22.3012C20.5213 22.6807 20.0791 22.8537 19.6996 22.6877L14.1996 20.2814C13.8201 20.1154 13.647 19.6732 13.8131 19.2937Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.6 15.0004C13.7333 15.0004 18 13.7619 18 8.80781C18 5.77636 16.1512 3.57777 14.4009 2.26497C13.503 1.59145 12.3529 2.29001 12.3529 3.38933C12.3529 4.13205 12.1424 5.36651 11.5596 6.28034C10.8777 7.3498 9.75127 6.42136 9.57296 5.17661C9.48354 4.55238 8.79638 4.29425 8.26099 4.65311C7.20839 5.35863 6 6.71053 6 8.80781C6 13.7619 9.73333 15.0004 11.6 15.0004ZM15.2155 9.282C15.6123 9.40102 15.8374 9.81913 15.7184 10.2159C15.4495 11.1122 14.3344 12.7504 12 12.7504C11.5858 12.7504 11.25 12.4146 11.25 12.0004C11.25 11.5862 11.5858 11.2504 12 11.2504C13.5056 11.2504 14.1505 10.2218 14.2816 9.78486C14.4007 9.38811 14.8188 9.16297 15.2155 9.282Z"
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
            d="M3.31307 14.6999C3.4791 14.3205 3.92132 14.1474 4.3008 14.3134L9.3008 16.5009C9.68029 16.667 9.85333 17.1092 9.68731 17.4887C9.52128 17.8682 9.07906 18.0412 8.69957 17.8752L3.69958 15.6877C3.32009 15.5216 3.14705 15.0794 3.31307 14.6999ZM20.6873 14.6999C20.8533 15.0794 20.6803 15.5216 20.3008 15.6877L4.3008 22.6877C3.92132 22.8537 3.4791 22.6807 3.31307 22.3012C3.14705 21.9217 3.32009 21.4795 3.69958 21.3134L19.6996 14.3134C20.0791 14.1474 20.5213 14.3205 20.6873 14.6999ZM13.8131 19.2937C13.9791 18.9142 14.4213 18.7412 14.8008 18.9072L20.3008 21.3134C20.6803 21.4795 20.8533 21.9217 20.6873 22.3012C20.5213 22.6807 20.0791 22.8537 19.6996 22.6877L14.1996 20.2814C13.8201 20.1154 13.647 19.6732 13.8131 19.2937Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.6 15.0004C13.7333 15.0004 18 13.7619 18 8.80781C18 5.77636 16.1512 3.57777 14.4009 2.26497C13.503 1.59145 12.3529 2.29001 12.3529 3.38933C12.3529 4.13205 12.1424 5.36651 11.5596 6.28034C10.8777 7.3498 9.75127 6.42136 9.57296 5.17661C9.48354 4.55238 8.79638 4.29425 8.26099 4.65311C7.20839 5.35863 6 6.71053 6 8.80781C6 13.7619 9.73333 15.0004 11.6 15.0004ZM15.2155 9.282C15.6123 9.40102 15.8374 9.81913 15.7184 10.2159C15.4495 11.1122 14.3344 12.7504 12 12.7504C11.5858 12.7504 11.25 12.4146 11.25 12.0004C11.25 11.5862 11.5858 11.2504 12 11.2504C13.5056 11.2504 14.1505 10.2218 14.2816 9.78486C14.4007 9.38811 14.8188 9.16297 15.2155 9.282Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBonfire as IconComponentType).keywords = [
  "bonfire",
  "balefire",
  "blaze",
  "pyre",
  "torch",
  "burning",
  "fire",
  "fireplace",
  "campfire",
  "furnace",
];

export default IconBonfire as IconComponentType;
