import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconShield: FC<IconProps> = ({
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
            d="M3 10.4171C3 7.21956 3 5.62077 3.37752 5.0829C3.75503 4.54503 5.25832 4.03045 8.26491 3.00128L8.83772 2.80521C10.405 2.26873 11.1886 2.00049 12 2.00049C12.8114 2.00049 13.595 2.26873 15.1623 2.80521L15.7351 3.00128C18.7417 4.03045 20.245 4.54503 20.6225 5.0829C21 5.62077 21 7.21956 21 10.4171C21 10.9001 21 11.4239 21 11.9918C21 17.6299 16.761 20.366 14.1014 21.5278C13.38 21.8429 13.0193 22.0005 12 22.0005C10.9807 22.0005 10.62 21.8429 9.89856 21.5278C7.23896 20.366 3 17.6299 3 11.9918C3 11.4239 3 10.9001 3 10.4171Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M3 11.0005L12 8.00049L21 11.0005"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M12 2.00049V21.5005"
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
            d="M3 11.9918C3 17.6299 7.23896 20.366 9.89856 21.5278C10.62 21.8429 10.9807 22.0005 12 22.0005V8.00049L3 11.0005V11.9918Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M14.1014 21.5278C16.761 20.366 21 17.6299 21 11.9918V11.0005L12 8.00049V22.0005C13.0193 22.0005 13.38 21.8429 14.1014 21.5278Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M8.83772 2.8052L8.26491 3.00128C5.25832 4.03045 3.75503 4.54503 3.37752 5.0829C3 5.62077 3 7.21956 3 10.4171V11.0005L12 8.00049V2.00049C11.1886 2.00049 10.405 2.26873 8.83772 2.8052Z"
            fill="currentColor"
          />
          <path
            d="M15.7351 3.00128L15.1623 2.80521C13.595 2.26873 12.8114 2.00049 12 2.00049V8.00049L21 11.0005V10.4171C21 7.21956 21 5.62077 20.6225 5.0829C20.245 4.54503 18.7417 4.03045 15.7351 3.00128Z"
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
            d="M11.25 2.07397C10.6437 2.18707 9.93159 2.43084 8.83772 2.80527L8.26491 3.00135C5.25832 4.03051 3.75503 4.5451 3.37752 5.08297C3.00825 5.60909 3.00018 7.1503 3 10.21L11.25 7.45999V2.07397Z"
            fill="currentColor"
          />
          <path
            d="M11.25 9.04113L3 11.7911V11.9919C3 17.63 7.23896 20.366 9.89856 21.5278C10.4093 21.7509 10.7392 21.8951 11.25 21.9602V9.04113Z"
            fill="currentColor"
          />
          <path
            d="M12.75 21.9602V9.04113L21 11.7911V11.9919C21 17.63 16.761 20.366 14.1014 21.5278C13.5907 21.7509 13.2608 21.8951 12.75 21.9602Z"
            fill="currentColor"
          />
          <path
            d="M12.75 7.45999V2.07397C13.3563 2.18707 14.0684 2.43084 15.1623 2.80527L15.7351 3.00135C18.7417 4.03051 20.245 4.5451 20.6225 5.08297C20.9918 5.60909 20.9998 7.1503 21 10.21L12.75 7.45999Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconShield as IconComponentType).keywords = [
  "shield",
  "buckler",
  "screen",
  "harbor",
  "harbour",
  "armoured",
  "armor",
  "breastplate",
  "ribbon",
  "visor",
];

export default IconShield as IconComponentType;
