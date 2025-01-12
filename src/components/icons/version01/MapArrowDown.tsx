import { FC } from "react";

const IconMapArrowDown: FC<IconProps> = ({
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
            d="M12 5.52713C11.7501 5.52713 11.5002 5.46584 11.2706 5.34327L5.36689 2.19124C3.97914 1.45031 2.49789 3.00188 3.16496 4.49771L10.5275 21.0074C10.8226 21.6693 11.4113 22.0002 12 22.0002"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M12 5.52713C12.2499 5.52713 12.4998 5.46584 12.7294 5.34327L18.6331 2.19124C20.0209 1.45031 21.5021 3.00188 20.835 4.49771L13.4725 21.0074C13.1774 21.6693 12.5887 22.0002 12 22.0002"
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
            d="M8.0374 14.1434C7.78266 14.2708 7.47314 14.16 7.35714 13.8999L3.16447 4.4982C2.49741 3.00236 3.97865 1.4508 5.36641 2.19173L11.2701 5.34376C11.7293 5.58891 12.2697 5.58891 12.7289 5.34376L18.6326 2.19173C20.0204 1.4508 21.5016 3.00236 20.8346 4.4982L19.2629 8.02251C19.0743 8.44538 18.7448 8.78972 18.3307 8.99679L8.0374 14.1434Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M8.60909 15.5339C8.36978 15.6536 8.26708 15.9404 8.37605 16.1848L10.5267 21.0074C11.117 22.3311 12.8814 22.3311 13.4717 21.0074L17.4397 12.1096C17.6309 11.6809 17.1793 11.2488 16.7594 11.4588L8.60909 15.5339Z"
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
            d="M3.16496 4.49771L10.5275 21.0074C11.1178 22.3312 12.8822 22.3312 13.4725 21.0074L20.835 4.49771C21.5021 3.00188 20.0209 1.45031 18.6331 2.19124L12.7294 5.34327C12.2702 5.58842 11.7298 5.58842 11.2706 5.34327L5.36689 2.19124C3.97914 1.45031 2.49789 3.00188 3.16496 4.49771Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMapArrowDown as IconComponent).keywords = [
  "map",
  "arrow",
  "down",
  "map out",
  "correspondence",
  "represent",
  "chart",
  "cartography",
  "cartographic",
  "topography",
  "plan",
  "charting",
  "pointer",
  "archer",
  "archery",
  "dart",
  "arrowhead",
  "bolt",
  "spike",
  "rope",
  "roof",
  "downwards",
  "downward",
  "downbound",
  "falling",
  "fallen",
  "pull down",
  "downwardly",
  "declining",
  "descending",
];

export default IconMapArrowDown as IconComponent;
