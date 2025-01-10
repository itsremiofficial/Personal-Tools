import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconShieldMinimalistic: FC<IconProps> = ({
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
            d="M12 22.0005C10.9808 22.0005 10.62 21.8429 9.89856 21.5278C7.23896 20.366 3 17.6299 3 11.9918V10.4173C3 7.21967 3 5.62088 3.37752 5.08301C3.75503 4.54514 5.25825 4.03045 8.26484 3.00128L8.83765 2.8052C10.4049 2.26873 11.1885 2.00049 11.9999 2.00049"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M12.0001 22.0005C13.0193 22.0005 13.3801 21.8429 14.1015 21.5278C16.7611 20.366 21.0001 17.6299 21.0001 11.9918V10.4173C21.0001 7.21967 21.0001 5.62088 20.6226 5.08301C20.245 4.54514 18.7417 4.03044 15.7351 3.00128L15.1623 2.80521C13.595 2.26873 12.8114 2.00049 12 2.00049"
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
            d="M3.37752 5.0829C3 5.62077 3 7.21956 3 10.4171V11.9918C3 17.6299 7.23896 20.366 9.89856 21.5278C10.62 21.8429 10.9807 22.0005 12 22.0005V2.00049C11.1886 2.00049 10.405 2.26873 8.83772 2.8052L8.26491 3.00128C5.25832 4.03045 3.75503 4.54503 3.37752 5.0829Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M21 11.9918V10.4171C21 7.21956 21 5.62077 20.6225 5.0829C20.245 4.54503 18.7417 4.03045 15.7351 3.00128L15.1623 2.80521C13.595 2.26873 12.8114 2.00049 12 2.00049V22.0005C13.0193 22.0005 13.38 21.8429 14.1014 21.5278C16.761 20.366 21 17.6299 21 11.9918Z"
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
            d="M3 10.4171C3 7.21956 3 5.62077 3.37752 5.0829C3.75503 4.54503 5.25832 4.03045 8.26491 3.00128L8.83772 2.8052C10.405 2.26873 11.1886 2.00049 12 2.00049C12.8114 2.00049 13.595 2.26873 15.1623 2.80521L15.7351 3.00128C18.7417 4.03045 20.245 4.54503 20.6225 5.0829C21 5.62077 21 7.21956 21 10.4171C21 10.9001 21 11.4239 21 11.9918C21 17.6299 16.761 20.366 14.1014 21.5278C13.38 21.8429 13.0193 22.0005 12 22.0005C10.9807 22.0005 10.62 21.8429 9.89856 21.5278C7.23896 20.366 3 17.6299 3 11.9918C3 11.4239 3 10.9001 3 10.4171Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconShieldMinimalistic as IconComponentType).keywords = [
  "shield",
  "minimalistic",
  "buckler",
  "screen",
  "harbor",
  "harbour",
  "armoured",
  "armor",
  "breastplate",
  "ribbon",
  "visor",
  "modularistic",
  "brutalistic",
  "localistic",
  "reductionist",
  "exhibitional",
  "monogynous",
  "simplificational",
  "reductionistic",
  "automatistic",
];

export default IconShieldMinimalistic as IconComponentType;
