import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconLeaf: FC<IconProps> = ({
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
            d="M12 9.0004L16.5 4.5004M12 14.5004L18.5 8.0004M12 19.5004L19.5 12.0004"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M12 22.0004C16.4183 22.0004 20 18.3545 20 13.8571C20 9.3949 17.4467 4.18796 13.4629 2.32592C12.9986 2.10888 12.4993 2.00037 12 2.00037M12 22.0004C7.58172 22.0004 4 18.3545 4 13.8571C4 9.3949 6.55332 4.18796 10.5371 2.32592C11.0014 2.10888 11.5007 2.00037 12 2.00037M12 22.0004V2.00037"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 22.0004C7.58172 22.0004 4 18.3545 4 13.8571C4 9.3949 6.55332 4.18796 10.5371 2.32592C11.0014 2.10888 11.5007 2.00037 12 2.00037V22.0004Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.3" : "1"}
            d="M13.4629 2.32592C12.9986 2.10888 12.4993 2.00037 12 2.00037V9.00043L16.4317 4.56877C15.5689 3.62095 14.5713 2.84398 13.4629 2.32592Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 9.00044V14.5004L18.6142 7.88614C18.0421 6.66597 17.3062 5.5296 16.4317 4.56879L12 9.00044Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.6" : "1"}
            d="M12 19.5004L19.811 11.6894C19.5911 10.3989 19.1838 9.10097 18.6142 7.88611L12 14.5004V19.5004Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.7" : "1"}
            d="M19.811 11.6894L12 19.5004V22.0003C16.4183 22.0003 20 18.3545 20 13.857C20 13.1478 19.9355 12.4198 19.811 11.6894Z"
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
            d="M11.25 2.08295C11.0066 2.1372 10.7675 2.21819 10.5371 2.32591C6.55332 4.18794 4 9.39489 4 13.8571C4 18.097 7.18341 21.5802 11.25 21.965V2.08295Z"
            fill="currentColor"
          />
          <path
            d="M12.75 21.965C16.8166 21.5802 20 18.097 20 13.8571C20 13.451 19.9789 13.0389 19.9374 12.6236L12.75 19.811V21.965Z"
            fill="currentColor"
          />
          <path
            d="M18.2597 7.18C17.8707 6.45518 17.4222 5.76851 16.92 5.14105L12.75 9.31101V12.6897L18.2597 7.18Z"
            fill="currentColor"
          />
          <path
            d="M15.9084 4.03125C15.1732 3.32601 14.3538 2.74232 13.4629 2.32591C13.2325 2.21819 12.9934 2.1372 12.75 2.08295V7.18969L15.9084 4.03125Z"
            fill="currentColor"
          />
          <path
            d="M18.9364 8.62458L12.75 14.811V17.6897L19.5 10.9397L19.6319 10.8078C19.458 10.0701 19.2246 9.33669 18.9364 8.62458Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconLeaf as IconComponentType).keywords = [
  "leaf",
  "foliage",
  "thumb",
  "riffle",
  "flick",
  "flip",
  "folio",
  "riff",
  "leaflet",
  "midrib",
];

export default IconLeaf as IconComponentType;
