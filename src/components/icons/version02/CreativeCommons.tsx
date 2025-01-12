import { FC } from "react";

const IconCreativeCommons: FC<IconProps> = ({
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
            d="M12.6699 22C7.14992 22 2.66992 17.52 2.66992 12C2.66992 6.48 7.14992 2 12.6699 2C18.1899 2 22.6699 6.48 22.6699 12C22.6699 17.52 18.1899 22 12.6699 22Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M11.55 14.15C11.04 14.59 10.38 14.87 9.66003 14.87C8.08003 14.87 6.79004 13.59 6.79004 12C6.79004 10.41 8.07003 9.13 9.66003 9.13C10.39 9.13 11.05 9.39998 11.55 9.84998"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M18.55 14.15C18.04 14.59 17.38 14.87 16.66 14.87C15.08 14.87 13.79 13.59 13.79 12C13.79 10.41 15.07 9.13 16.66 9.13C17.39 9.13 18.05 9.39998 18.55 9.84998"
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
            d="M12.6699 22C7.14992 22 2.66992 17.52 2.66992 12C2.66992 6.48 7.14992 2 12.6699 2C18.1899 2 22.6699 6.48 22.6699 12C22.6699 17.52 18.1899 22 12.6699 22Z"
            fill="currentColor"
          />
          <path
            d="M9.66003 15.62C7.66003 15.62 6.04004 14 6.04004 12C6.04004 10 7.66003 8.38 9.66003 8.38C10.54 8.38 11.38 8.70003 12.05 9.28003C12.36 9.55003 12.3901 10.03 12.1201 10.34C11.8501 10.65 11.3701 10.68 11.0601 10.41C10.6701 10.07 10.18 9.88 9.66003 9.88C8.49003 9.88 7.54004 10.83 7.54004 12C7.54004 13.17 8.49003 14.12 9.66003 14.12C10.17 14.12 10.6701 13.93 11.0601 13.59C11.3701 13.32 11.8501 13.35 12.1201 13.66C12.3901 13.97 12.36 14.45 12.05 14.72C11.38 15.3 10.53 15.62 9.66003 15.62Z"
            fill="currentColor"
          />
          <path
            d="M16.66 15.62C14.66 15.62 13.04 14 13.04 12C13.04 10 14.66 8.38 16.66 8.38C17.54 8.38 18.38 8.70003 19.05 9.28003C19.36 9.55003 19.3901 10.03 19.1201 10.34C18.8501 10.65 18.3701 10.68 18.0601 10.41C17.6701 10.07 17.18 9.88 16.66 9.88C15.49 9.88 14.54 10.83 14.54 12C14.54 13.17 15.49 14.12 16.66 14.12C17.17 14.12 17.6701 13.93 18.0601 13.59C18.3701 13.32 18.8501 13.35 19.1201 13.66C19.3901 13.97 19.36 14.45 19.05 14.72C18.38 15.3 17.53 15.62 16.66 15.62Z"
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
            d="M12.6699 2C7.14992 2 2.66992 6.48 2.66992 12C2.66992 17.52 7.14992 22 12.6699 22C18.1899 22 22.6699 17.52 22.6699 12C22.6699 6.48 18.1899 2 12.6699 2ZM9.65992 14.12C10.1699 14.12 10.6699 13.93 11.0599 13.59C11.3699 13.32 11.8499 13.35 12.1199 13.66C12.3899 13.97 12.3599 14.45 12.0499 14.72C11.3899 15.3 10.5399 15.62 9.65992 15.62C7.65992 15.62 6.03992 14 6.03992 12C6.03992 10 7.65992 8.38 9.65992 8.38C10.5399 8.38 11.3799 8.7 12.0499 9.28C12.3599 9.55 12.3899 10.03 12.1199 10.34C11.8499 10.65 11.3699 10.68 11.0599 10.41C10.6699 10.07 10.1699 9.88 9.65992 9.88C8.48992 9.88 7.53992 10.83 7.53992 12C7.53992 13.17 8.48992 14.12 9.65992 14.12ZM16.6599 14.12C17.1699 14.12 17.6699 13.93 18.0599 13.59C18.3699 13.32 18.8499 13.35 19.1199 13.66C19.3899 13.97 19.3599 14.45 19.0499 14.72C18.3899 15.3 17.5399 15.62 16.6599 15.62C14.6599 15.62 13.0399 14 13.0399 12C13.0399 10 14.6599 8.38 16.6599 8.38C17.5399 8.38 18.3799 8.7 19.0499 9.28C19.3599 9.55 19.3899 10.03 19.1199 10.34C18.8499 10.65 18.3699 10.68 18.0599 10.41C17.6699 10.07 17.1799 9.88 16.6599 9.88C15.4899 9.88 14.5399 10.83 14.5399 12C14.5399 13.17 15.4899 14.12 16.6599 14.12Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCreativeCommons as IconComponent).keywords = [
  "creative",
  "commons",
  "imaginative",
  "inventive",
  "ingenious",
  "originative",
  "notional",
  "fictive",
  "generative",
  "fanciful",
  "constructive",
  "commonalty",
  "commonality",
  "park",
  "common land",
  "green",
  "commune",
  "joint",
  "cooperative",
  "collective",
];

export default IconCreativeCommons as IconComponent;
