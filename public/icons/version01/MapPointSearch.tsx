import { FC } from "react";

const IconMapPointSearch: FC<IconProps> = ({
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
            d="M4 10.1435C4 5.64612 7.58172 2.00024 12 2.00024C16.4183 2.00024 20 5.64612 20 10.1435C20 14.6057 17.4467 19.8127 13.4629 21.6747C12.5343 22.1088 11.4657 22.1088 10.5371 21.6747C6.55332 19.8127 4 14.6057 4 10.1435Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M14.1249 12.118L15.5 13.5002M14.1249 12.118C14.6657 11.5754 15 10.8269 15 10.0002C15 8.34339 13.6569 7.00024 12 7.00024C10.3431 7.00024 9 8.34339 9 10.0002C9 11.6571 10.3431 13.0002 12 13.0002C12.8302 13.0002 13.5817 12.663 14.1249 12.118Z"
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
            d="M10.5371 21.6747C11.4657 22.1088 12.5343 22.1088 13.4629 21.6747C17.4467 19.8127 20 14.6057 20 10.1435C20 5.64612 16.4183 2.00024 12 2.00024C7.58172 2.00024 4 5.64612 4 10.1435C4 14.6057 6.55332 19.8127 10.5371 21.6747Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 6.25024C9.92893 6.25024 8.25 7.92918 8.25 10.0002C8.25 12.0713 9.92893 13.7502 12 13.7502C12.7651 13.7502 13.4774 13.5206 14.0706 13.1271L14.9681 14.0295C15.2602 14.3232 15.7351 14.3245 16.0288 14.0324C16.3225 13.7403 16.3238 13.2655 16.0317 12.9718L15.1304 12.0655C15.5217 11.4734 15.75 10.7631 15.75 10.0002C15.75 7.92918 14.0711 6.25024 12 6.25024ZM12 7.75024C10.7574 7.75024 9.75 8.7576 9.75 10.0002C9.75 11.2429 10.7574 12.2502 12 12.2502C12.6229 12.2502 13.1854 11.9981 13.5937 11.5886C14.0001 11.1808 14.25 10.6204 14.25 10.0002C14.25 8.7576 13.2426 7.75024 12 7.75024Z"
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
            d="M12 2.00024C7.58172 2.00024 4 5.64612 4 10.1435C4 14.6057 6.55332 19.8127 10.5371 21.6747C11.4657 22.1088 12.5343 22.1088 13.4629 21.6747C17.4467 19.8127 20 14.6057 20 10.1435C20 5.64612 16.4183 2.00024 12 2.00024ZM8.25 10.0002C8.25 7.92918 9.92893 6.25024 12 6.25024C14.0711 6.25024 15.75 7.92918 15.75 10.0002C15.75 10.7631 15.5217 11.4734 15.1304 12.0655L16.0317 12.9718C16.3238 13.2655 16.3225 13.7403 16.0288 14.0324C15.7351 14.3245 15.2602 14.3232 14.9681 14.0295L14.0706 13.1271C13.4774 13.5206 12.7651 13.7502 12 13.7502C9.92893 13.7502 8.25 12.0713 8.25 10.0002ZM9.75 10.0002C9.75 8.7576 10.7574 7.75024 12 7.75024C13.2426 7.75024 14.25 8.7576 14.25 10.0002C14.25 10.6204 14.0001 11.1808 13.5937 11.5886C13.1854 11.9981 12.6229 12.2502 12 12.2502C10.7574 12.2502 9.75 11.2429 9.75 10.0002Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMapPointSearch as IconComponent).keywords = [
  "map",
  "point",
  "search",
  "map out",
  "correspondence",
  "represent",
  "chart",
  "cartography",
  "cartographic",
  "topography",
  "plan",
  "charting",
  "item",
  "betoken",
  "indicate",
  "bespeak",
  "period",
  "point in time",
  "show",
  "stage",
  "detail",
  "seek",
  "look for",
  "explore",
  "lookup",
  "research",
  "look",
  "hunting",
  "hunt",
  "seeking",
];

export default IconMapPointSearch as IconComponent;
