import { FC } from "react";

const IconStreetsMapPoint: FC<IconProps> = ({
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
            d="M12 22.0002C7.28595 22.0002 4.92893 22.0002 3.46447 20.5358C2 19.0713 2 16.7143 2 12.0002C2 7.2862 2 4.92918 3.46447 3.46471C4.92893 2.00024 7.28595 2.00024 12 2.00024C16.714 2.00024 19.0711 2.00024 20.5355 3.46471C22 4.92918 22 7.2862 22 12.0002C22 16.7143 22 19.0713 20.5355 20.5358C19.0711 22.0002 16.714 22.0002 12 22.0002Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M5.5 8.75744C5.5 6.95847 7.067 5.50012 9 5.50012C10.933 5.50012 12.5 6.95847 12.5 8.75744C12.5 10.5423 11.3829 12.6251 9.64003 13.3699C9.23374 13.5435 8.76626 13.5435 8.35997 13.3699C6.61708 12.6251 5.5 10.5423 5.5 8.75744Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M14.0004 14.0001L20.5004 20.5001M14.0004 14.0001L6.39453 21.606M14.0004 14.0001L21.6072 6.39331"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M10 9.00024C10 9.55253 9.55228 10.0002 9 10.0002C8.44772 10.0002 8 9.55253 8 9.00024C8 8.44796 8.44772 8.00024 9 8.00024C9.55228 8.00024 10 8.44796 10 9.00024Z"
            fill="currentColor"
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
            d="M12 2.00024C16.714 2.00024 19.0711 2.00024 20.5355 3.46471C21.0394 3.96858 21.3699 4.57811 21.5867 5.35294L5.3527 21.5869C4.57786 21.3702 3.96833 21.0396 3.46447 20.5358C2 19.0713 2 16.7143 2 12.0002C2 7.2862 2 4.92918 3.46447 3.46471C4.92893 2.00024 7.28595 2.00024 12 2.00024ZM5.5 8.75756C5.5 10.5424 6.61708 12.6252 8.35997 13.37C8.76626 13.5437 9.23374 13.5437 9.64003 13.37C11.3829 12.6252 12.5 10.5424 12.5 8.75756C12.5 6.9586 10.933 5.50024 9 5.50024C7.067 5.50024 5.5 6.9586 5.5 8.75756Z"
            fill="currentColor"
          />
          <path
            d="M10.5 9.00024C10.5 9.82867 9.82843 10.5002 9 10.5002C8.17157 10.5002 7.5 9.82867 7.5 9.00024C7.5 8.17182 8.17157 7.50024 9 7.50024C9.82843 7.50024 10.5 8.17182 10.5 9.00024Z"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.5" : "1"}>
            <path
              d="M21.8893 7.17212C22.0002 8.43362 22.0002 10.0061 22.0002 12.0005C22.0002 16.1341 22.0002 18.4554 21.0128 19.9518L15.0613 14.0003L21.8893 7.17212Z"
              fill="currentColor"
            />
            <path
              d="M19.9523 21.0126L14.0006 15.0609L7.17188 21.8896C8.43338 22.0005 10.0059 22.0005 12.0002 22.0005C16.1346 22.0005 18.4559 22.0005 19.9523 21.0126Z"
              fill="currentColor"
            />
          </g>
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
            d="M21.8891 7.1719C22 8.4334 22 10.0059 22 12.0002C22 16.1339 22 18.4552 21.0126 19.9515L15.0611 14.0001L21.8891 7.1719Z"
            fill="currentColor"
          />
          <path
            d="M19.952 21.0123L14.0004 15.0607L7.17167 21.8894C8.43317 22.0002 10.0056 22.0002 12 22.0002C16.1343 22.0002 18.4557 22.0002 19.952 21.0123Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2.00024C16.714 2.00024 19.0711 2.00024 20.5355 3.46471C21.0394 3.96858 21.3699 4.57811 21.5867 5.35294L5.3527 21.5869C4.57786 21.3702 3.96833 21.0396 3.46447 20.5358C2 19.0713 2 16.7143 2 12.0002C2 7.2862 2 4.92918 3.46447 3.46471C4.92893 2.00024 7.28595 2.00024 12 2.00024ZM5.5 8.75756C5.5 10.5424 6.61708 12.6252 8.35997 13.37C8.76626 13.5437 9.23374 13.5437 9.64003 13.37C11.3829 12.6252 12.5 10.5424 12.5 8.75756C12.5 6.9586 10.933 5.50024 9 5.50024C7.067 5.50024 5.5 6.9586 5.5 8.75756Z"
            fill="currentColor"
          />
          <path
            d="M10.5 9.00024C10.5 9.82867 9.82843 10.5002 9 10.5002C8.17157 10.5002 7.5 9.82867 7.5 9.00024C7.5 8.17182 8.17157 7.50024 9 7.50024C9.82843 7.50024 10.5 8.17182 10.5 9.00024Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconStreetsMapPoint as IconComponent).keywords = [
  "streets",
  "map",
  "point",
  "alleys",
  "alleyways",
  "arteries",
  "avenues",
  "benches",
  "blocks",
  "corners",
  "crowds",
  "demonstrations",
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
];

export default IconStreetsMapPoint as IconComponent;
