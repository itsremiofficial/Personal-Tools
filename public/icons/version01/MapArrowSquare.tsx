import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconMapArrowSquare: FC<IconProps> = ({
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
            d="M12 22.0002C7.28595 22.0002 4.92893 22.0002 3.46447 20.5358C2 19.0713 2 16.7143 2 12.0002C2 7.2862 2 4.92918 3.46447 3.46471C4.92893 2.00024 7.28595 2.00024 12 2.00024C16.714 2.00024 19.0711 2.00024 20.5355 3.46471C22 4.92918 22 7.2862 22 12.0002C22 16.7143 22 19.0713 20.5355 20.5358C19.0711 22.0002 16.714 22.0002 12 22.0002Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M13.4227 17.362L16.9348 8.19622C17.2164 7.46131 16.5389 6.78385 15.804 7.06545L6.63824 10.5775C5.80779 10.8958 5.78079 12.0602 6.5981 12.3086L10.0751 13.3651C10.3455 13.4472 10.553 13.6548 10.6352 13.9252L11.6917 17.4021C11.94 18.2195 13.1045 18.1925 13.4227 17.362Z"
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
            opacity={duotone ? "0.5" : "1"}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.46447 20.5358C4.92893 22.0002 7.28595 22.0002 12 22.0002C16.714 22.0002 19.0711 22.0002 20.5355 20.5358C22 19.0713 22 16.7143 22 12.0002C22 7.2862 22 4.92918 20.5355 3.46471C19.0711 2.00024 16.714 2.00024 12 2.00024C7.28595 2.00024 4.92893 2.00024 3.46447 3.46471C2 4.92918 2 7.2862 2 12.0002C2 16.7143 2 19.0713 3.46447 20.5358Z"
            fill="currentColor"
          />
          <path
            d="M13.4227 17.362L16.9348 8.19622C17.2164 7.46131 16.5389 6.78385 15.804 7.06545L6.63824 10.5775C5.80779 10.8958 5.78079 12.0602 6.5981 12.3086L10.0751 13.3651C10.3455 13.4472 10.553 13.6548 10.6352 13.9252L11.6917 17.4021C11.94 18.2195 13.1045 18.1925 13.4227 17.362Z"
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
            d="M3.46447 20.5358C4.92893 22.0002 7.28595 22.0002 12 22.0002C16.714 22.0002 19.0711 22.0002 20.5355 20.5358C22 19.0713 22 16.7143 22 12.0002C22 7.2862 22 4.92918 20.5355 3.46471C19.0711 2.00024 16.714 2.00024 12 2.00024C7.28595 2.00024 4.92893 2.00024 3.46447 3.46471C2 4.92918 2 7.2862 2 12.0002C2 16.7143 2 19.0713 3.46447 20.5358ZM16.9348 8.19622L13.4227 17.362C13.1045 18.1925 11.94 18.2195 11.6917 17.4021L10.6352 13.9252C10.553 13.6548 10.3455 13.4472 10.0751 13.3651L6.5981 12.3086C5.78079 12.0602 5.80779 10.8958 6.63824 10.5775L15.804 7.06545C16.5389 6.78385 17.2164 7.46131 16.9348 8.19622Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMapArrowSquare as IconComponentType).keywords = [
  "map",
  "arrow",
  "square",
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
  "quadrate",
  "right-angled",
  "squarely",
  "foursquare",
  "squarish",
  "conventional",
  "paid",
  "honorable",
  "honest",
];

export default IconMapArrowSquare as IconComponentType;
