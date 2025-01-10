import { FC } from "react";

const IconSend2: FC<IconProps> = ({
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
            d="M8.06961 6.32L16.5596 3.49C20.3696 2.22 22.4396 4.3 21.1796 8.11L18.3496 16.6C16.4496 22.31 13.3296 22.31 11.4296 16.6L10.5896 14.08L8.06961 13.24C2.35961 11.34 2.35961 8.23 8.06961 6.32Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.34" : "1"}
            d="M10.7803 13.65L14.3603 10.06"
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
            opacity={duotone ? "0.4" : "1"}
            d="M7.78031 5.96L16.8003 2.95C20.8503 1.6 23.0503 3.81 21.7103 7.86L18.7003 16.88C16.6803 22.95 13.3603 22.95 11.3403 16.88L10.4503 14.2L7.77031 13.31C1.71031 11.3 1.71031 7.99 7.78031 5.96Z"
            fill="currentColor"
          />
          <path d="M12.79 11.63L16.6 7.81L12.79 11.63Z" fill="currentColor" />
          <path
            d="M12.7895 12.38C12.5995 12.38 12.4095 12.31 12.2595 12.16C11.9695 11.87 11.9695 11.39 12.2595 11.1L16.0595 7.28C16.3495 6.99 16.8295 6.99 17.1195 7.28C17.4095 7.57 17.4095 8.05 17.1195 8.34L13.3195 12.16C13.1695 12.3 12.9795 12.38 12.7895 12.38Z"
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
            d="M16.81 2.96L7.78004 5.96C1.71004 7.99 1.71004 11.3 7.78004 13.32L10.46 14.21L11.35 16.89C13.37 22.96 16.69 22.96 18.71 16.89L21.72 7.87C23.06 3.82 20.86 1.61 16.81 2.96ZM17.13 8.34L13.33 12.16C13.18 12.31 12.99 12.38 12.8 12.38C12.61 12.38 12.42 12.31 12.27 12.16C11.98 11.87 11.98 11.39 12.27 11.1L16.07 7.28C16.36 6.99 16.84 6.99 17.13 7.28C17.42 7.57 17.42 8.05 17.13 8.34Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSend2 as IconComponent).keywords = [
  "send",
  "2",
  "transmit",
  "charge",
  "transport",
  "mail",
  "base",
  "institutionalize",
  "place",
  "broadcast",
  "commit",
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

export default IconSend2 as IconComponent;
