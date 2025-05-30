import { FC } from "react";

const IconUserHands: FC<IconProps> = ({
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
            d="M20 21.5005L19.3505 15.9799C19.1506 14.2809 17.7107 13.0005 16 13.0005H8C6.28928 13.0005 4.84936 14.2809 4.64948 15.9799L4 21.5005"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M8 13.0005V18.0005C8 19.8861 8 20.8289 8.58579 21.4147C9.17157 22.0005 10.1144 22.0005 12 22.0005C13.8856 22.0005 14.8284 22.0005 15.4142 21.4147C16 20.8289 16 19.8861 16 18.0005V13.0005"
            stroke="currentColor"
            strokeWidth={width}
          />
          <circle
            cx="12"
            cy="6.00049"
            r="4"
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
            d="M3.90469 15.8923C4.149 13.8156 5.90904 12.2505 8.00007 12.2505H16.0001C18.0911 12.2505 19.8511 13.8156 20.0955 15.8923L20.7449 21.4129C20.7933 21.8242 20.4991 22.197 20.0877 22.2454C19.6763 22.2937 19.3036 21.9995 19.2552 21.5881L18.6057 16.0676C18.4503 14.7463 17.3305 13.7505 16.0001 13.7505H8.00007C6.66967 13.7505 5.54986 14.7463 5.39441 16.0676L4.74494 21.5881C4.69654 21.9995 4.32382 22.2937 3.91244 22.2454C3.50106 22.197 3.20681 21.8242 3.25521 21.4129L3.90469 15.8923Z"
            fill="currentColor"
          />
          <circle cx="12" cy="6.00049" r="4" fill="currentColor" />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M8 13.7505V18.0005C8 19.8861 8 20.8289 8.58579 21.4147C9.17157 22.0005 10.1144 22.0005 12 22.0005C13.8856 22.0005 14.8284 22.0005 15.4142 21.4147C16 20.8289 16 19.8861 16 18.0005V13.7505H8Z"
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
            d="M12 10.0005C14.2091 10.0005 16 8.20963 16 6.00049C16 3.79135 14.2091 2.00049 12 2.00049C9.79086 2.00049 8 3.79135 8 6.00049C8 8.20963 9.79086 10.0005 12 10.0005Z"
            fill="currentColor"
          />
          <path
            d="M8.00007 12.2505C5.90904 12.2505 4.149 13.8156 3.90469 15.8923L3.25521 21.4129C3.20681 21.8242 3.50106 22.197 3.91244 22.2453C4.32382 22.2937 4.69654 21.9995 4.74494 21.5881L5.39441 16.0676C5.51949 15.0044 6.26894 14.152 7.25007 13.8595L7.25007 18.0525C7.25004 18.951 7.25002 19.7002 7.32998 20.295C7.41439 20.9228 7.60006 21.4896 8.05553 21.945C8.511 22.4005 9.0778 22.5862 9.70559 22.6706C10.3004 22.7505 11.0496 22.7505 11.948 22.7505H12.0521C12.9505 22.7505 13.6998 22.7505 14.2946 22.6706C14.9223 22.5862 15.4891 22.4005 15.9446 21.945C16.4001 21.4896 16.5858 20.9228 16.6702 20.295C16.7501 19.7002 16.7501 18.951 16.7501 18.0525L16.7501 13.8595C17.7312 14.152 18.4807 15.0044 18.6057 16.0676L19.2552 21.5881C19.3036 21.9995 19.6763 22.2937 20.0877 22.2453C20.4991 22.197 20.7933 21.8242 20.7449 21.4129L20.0955 15.8923C19.8511 13.8156 18.0911 12.2505 16.0001 12.2505H8.00007Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconUserHands as IconComponent).keywords = [
  "user",
  "hands",
  "exploiter",
  "enjoyer",
  "drug user",
  "substance abuser",
  "customer",
  "client",
  "employer",
  "consumer",
  "employee",
  "men",
  "custody",
  "work force",
  "workforce",
  "manpower",
  "palms",
  "needles",
  "reins",
  "sideburns",
];

export default IconUserHands as IconComponent;
