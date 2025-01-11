import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconCommand: FC<IconProps> = ({
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
            d="M8 8.00037H16V16.0004H8V8.00037Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M16 16.0013L19 16.0009C20.6569 16.0006 22.0002 17.3435 22.0005 19.0004C22.0007 20.6572 20.6578 22.0006 19.0009 22.0009C17.3441 22.0011 16.0007 20.6582 16.0005 19.0013L16 16.0013Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M8.00098 16.0013L5.00098 16.0009C3.34412 16.0006 2.00076 17.3435 2.0005 19.0004C2.00024 20.6572 3.34318 22.0006 5.00003 22.0009C6.65689 22.0011 8.00024 20.6582 8.0005 19.0013L8.00098 16.0013Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M16 8.00038L19 8.00085C20.6569 8.00112 22.0002 6.65818 22.0005 5.00133C22.0007 3.34447 20.6578 2.00112 19.0009 2.00085C17.3441 2.00059 16.0007 3.34353 16.0005 5.00038L16 8.00038Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M8.00098 8.00038L5.00098 8.00085C3.34412 8.00112 2.00076 6.65818 2.0005 5.00133C2.00024 3.34447 3.34318 2.00112 5.00003 2.00085C6.65689 2.00059 8.00024 3.34353 8.0005 5.00038L8.00098 8.00038Z"
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
            d="M16 16.0004L19 16.0009C20.6569 16.0006 22.0002 17.3435 22.0005 19.0004C22.0007 20.6572 20.6578 22.0006 19.0009 22.0009C17.3441 22.0011 16.0007 20.6582 16.0005 19.0013L16 16.0004Z"
            fill="currentColor"
          />
          <path
            d="M5.00047 16.0009L8.00047 16.0013L8 19.0013C7.99974 20.6582 6.65638 22.0011 4.99953 22.0009C3.34267 22.0006 1.99974 20.6572 2 19.0004C2.00026 17.3435 3.34362 16.0006 5.00047 16.0009Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19 8.00085L16 8.00038L16.0005 5.00038C16.0007 3.34353 17.3441 2.00059 19.0009 2.00085C20.6578 2.00112 22.0007 3.34447 22.0005 5.00133C22.0002 6.65818 20.6569 8.00112 19 8.00085ZM8.00047 8.00037L8 5.00038C7.99974 3.34353 6.65638 2.00059 4.99953 2.00085C3.34267 2.00112 1.99974 3.34447 2 5.00133C2.00026 6.65818 3.34362 8.00112 5.00047 8.00085L8.00047 8.00037Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M16 8.00038L8.00047 8.00037L8 16.0004H16V8.00038Z"
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
            d="M16 8.00038L19 8.00085C20.6569 8.00112 22.0002 6.65818 22.0005 5.00133C22.0007 3.34447 20.6578 2.00112 19.0009 2.00085C17.3441 2.00059 16.0007 3.34353 16.0005 5.00038L16 8.00038L8.00047 8.00037L8 5.00038C7.99974 3.34353 6.65638 2.00059 4.99953 2.00085C3.34267 2.00112 1.99974 3.34447 2 5.00133C2.00026 6.65818 3.34362 8.00112 5.00047 8.00085L8.00047 8.00037L8 16.0004H16V8.00038Z"
            fill="currentColor"
          />
          <path
            d="M16 16.0004L19 16.0009C20.6569 16.0006 22.0002 17.3435 22.0005 19.0004C22.0007 20.6572 20.6578 22.0006 19.0009 22.0009C17.3441 22.0011 16.0007 20.6582 16.0005 19.0013L16 16.0004Z"
            fill="currentColor"
          />
          <path
            d="M5.00047 16.0009L8.00047 16.0013L8 19.0013C7.99974 20.6582 6.65638 22.0011 4.99953 22.0009C3.34267 22.0006 1.99974 20.6572 2 19.0004C2.00026 17.3435 3.34362 16.0006 5.00047 16.0009Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCommand as IconComponentType).keywords = [
  "command",
  "control",
  "bidding",
  "mastery",
  "dominate",
  "instruction",
  "require",
  "statement",
  "compel",
  "overlook",
];

export default IconCommand as IconComponentType;