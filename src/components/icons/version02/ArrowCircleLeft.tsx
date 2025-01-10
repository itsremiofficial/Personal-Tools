import { FC } from "react";

const IconArrowCircleLeft: FC<IconProps> = ({
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
            d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M13.9302 15.53L10.4102 12L13.9302 8.46997"
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
            d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z"
            fill="currentColor"
          />
          <path
            d="M13.9298 16.28C13.7398 16.28 13.5498 16.21 13.3998 16.06L9.86984 12.53C9.57984 12.24 9.57984 11.76 9.86984 11.47L13.3998 7.94003C13.6898 7.65003 14.1698 7.65003 14.4598 7.94003C14.7498 8.23003 14.7498 8.71003 14.4598 9.00003L11.4598 12L14.4598 15C14.7498 15.29 14.7498 15.77 14.4598 16.06C14.3198 16.21 14.1298 16.28 13.9298 16.28Z"
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
            d="M12.6699 2C7.15992 2 2.66992 6.49 2.66992 12C2.66992 17.51 7.15992 22 12.6699 22C18.1799 22 22.6699 17.51 22.6699 12C22.6699 6.49 18.1799 2 12.6699 2ZM14.4599 15C14.7499 15.29 14.7499 15.77 14.4599 16.06C14.3099 16.21 14.1199 16.28 13.9299 16.28C13.7399 16.28 13.5499 16.21 13.3999 16.06L9.86992 12.53C9.57992 12.24 9.57992 11.76 9.86992 11.47L13.3999 7.94C13.6899 7.65 14.1699 7.65 14.4599 7.94C14.7499 8.23 14.7499 8.71 14.4599 9L11.4599 12L14.4599 15Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconArrowCircleLeft as IconComponent).keywords = [
  "arrow",
  "circle",
  "left",
  "pointer",
  "archer",
  "archery",
  "dart",
  "arrowhead",
  "bolt",
  "spike",
  "rope",
  "roof",
  "round",
  "rotary",
  "environ",
  "roundabout",
  "circulate",
  "circuit",
  "encircle",
  "surround",
  "dress circle",
  "left-hand",
  "left-handed",
  "left over",
  "near",
  "leftover",
  "nigh",
  "remaining",
  "leftfield",
  "odd",
];

export default IconArrowCircleLeft as IconComponent;
