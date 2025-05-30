import { FC } from "react";

const IconBell: FC<IconProps> = ({
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
            d="M19.0001 9.70447V9.00037C19.0001 5.13437 15.8661 2.00037 12.0001 2.00037C8.13407 2.00037 5.00006 5.13437 5.00006 9.00037V9.70447C5.00006 10.5495 4.74995 11.3755 4.28123 12.0786L3.13263 13.8015C2.08349 15.3752 2.88442 17.5143 4.70913 18.0119C9.48258 19.3138 14.5175 19.3138 19.291 18.0119C21.1157 17.5143 21.9166 15.3752 20.8675 13.8015L19.7189 12.0786C19.2502 11.3755 19.0001 10.5495 19.0001 9.70447Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M7.5 19.0004C8.15503 20.7482 9.92246 22.0004 12 22.0004C14.0775 22.0004 15.845 20.7482 16.5 19.0004"
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
            d="M18.7491 9.00036V9.70447C18.7491 10.5495 18.9903 11.3755 19.4422 12.0786L20.5496 13.8015C21.5612 15.3752 20.789 17.5143 19.0296 18.0119C14.4273 19.3138 9.57274 19.3138 4.97036 18.0119C3.21105 17.5143 2.43882 15.3752 3.45036 13.8015L4.5578 12.0786C5.00972 11.3755 5.25087 10.5495 5.25087 9.70447V9.00036C5.25087 5.13437 8.27256 2.00037 12 2.00037C15.7274 2.00037 18.7491 5.13437 18.7491 9.00036Z"
            fill="currentColor"
          />
          <path
            d="M7.24341 18.5456C7.89435 20.5507 9.77792 22.0004 12.0001 22.0004C14.2222 22.0004 16.1058 20.5507 16.7567 18.5456C13.6113 19.1359 10.3888 19.1359 7.24341 18.5456Z"
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
            d="M8.35179 20.2422C9.19288 21.3114 10.5142 22.0004 12 22.0004C13.4858 22.0004 14.8071 21.3114 15.6482 20.2422C13.2264 20.5704 10.7736 20.5704 8.35179 20.2422Z"
            fill="currentColor"
          />
          <path
            d="M18.7491 9.00036V9.70447C18.7491 10.5495 18.9903 11.3755 19.4422 12.0786L20.5496 13.8015C21.5612 15.3752 20.789 17.5143 19.0296 18.0119C14.4273 19.3138 9.57274 19.3138 4.97036 18.0119C3.21105 17.5143 2.43882 15.3752 3.45036 13.8015L4.5578 12.0786C5.00972 11.3755 5.25087 10.5495 5.25087 9.70447V9.00036C5.25087 5.13437 8.27256 2.00037 12 2.00037C15.7274 2.00037 18.7491 5.13437 18.7491 9.00036Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBell as IconComponent).keywords = [
  "bell",
  "gong",
  "chime",
  "campana",
  "doorbell",
  "buzzer",
  "alexander bell",
  "alexander graham bell",
  "bell shape",
  "ringer",
];

export default IconBell as IconComponent;
