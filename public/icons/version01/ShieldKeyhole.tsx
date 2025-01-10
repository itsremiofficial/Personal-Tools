import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconShieldKeyhole: FC<IconProps> = ({
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
            d="M11.5 16.0005H12.5C13.0523 16.0005 13.5 15.5528 13.5 15.0005V13.5991C14.3967 13.0804 15 12.1109 15 11.0005C15 9.34363 13.6569 8.00049 12 8.00049C10.3431 8.00049 9 9.34363 9 11.0005C9 12.1109 9.6033 13.0804 10.5 13.5991V15.0005C10.5 15.5528 10.9477 16.0005 11.5 16.0005Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinejoin="round"
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
            d="M3 10.4171C3 7.21956 3 5.62077 3.37752 5.0829C3.75503 4.54503 5.25832 4.03045 8.26491 3.00128L8.83772 2.8052C10.405 2.26873 11.1886 2.00049 12 2.00049C12.8114 2.00049 13.595 2.26873 15.1623 2.80521L15.7351 3.00128C18.7417 4.03045 20.245 4.54503 20.6225 5.0829C21 5.62077 21 7.21956 21 10.4171V11.9918C21 17.6299 16.761 20.366 14.1014 21.5278C13.38 21.8429 13.0193 22.0005 12 22.0005C10.9807 22.0005 10.62 21.8429 9.89856 21.5278C7.23896 20.366 3 17.6299 3 11.9918V10.4171Z"
            fill="currentColor"
          />
          <path
            d="M13.5 15.0005C13.5 15.5528 13.0523 16.0005 12.5 16.0005H11.5C10.9477 16.0005 10.5 15.5528 10.5 15.0005V13.5991C9.6033 13.0804 9 12.1109 9 11.0005C9 9.34363 10.3431 8.00049 12 8.00049C13.6569 8.00049 15 9.34363 15 11.0005C15 12.1109 14.3967 13.0804 13.5 13.5991V15.0005Z"
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
            d="M3.37752 5.0829C3 5.62077 3 7.21956 3 10.4171V11.9918C3 17.6299 7.23896 20.366 9.89856 21.5278C10.62 21.8429 10.9807 22.0005 12 22.0005C13.0193 22.0005 13.38 21.8429 14.1014 21.5278C16.761 20.366 21 17.6299 21 11.9918V10.4171C21 7.21956 21 5.62077 20.6225 5.0829C20.245 4.54503 18.7417 4.03045 15.7351 3.00128L15.1623 2.80521C13.595 2.26873 12.8114 2.00049 12 2.00049C11.1886 2.00049 10.405 2.26873 8.83772 2.8052L8.26491 3.00128C5.25832 4.03045 3.75503 4.54503 3.37752 5.0829ZM13.5 15.0005C13.5 15.5528 13.0523 16.0005 12.5 16.0005H11.5C10.9477 16.0005 10.5 15.5528 10.5 15.0005V13.5991C9.6033 13.0804 9 12.1109 9 11.0005C9 9.34363 10.3431 8.00049 12 8.00049C13.6569 8.00049 15 9.34363 15 11.0005C15 12.1109 14.3967 13.0804 13.5 13.5991V15.0005Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconShieldKeyhole as IconComponentType).keywords = [
  "shield",
  "keyhole",
  "buckler",
  "screen",
  "harbor",
  "harbour",
  "armoured",
  "armor",
  "breastplate",
  "ribbon",
  "visor",
  "lock",
  "slot",
  "latch",
  "hemocyanin",
  "haemocyanin",
  "limpet",
  "escutcheons",
  "latches",
  "limpets",
];

export default IconShieldKeyhole as IconComponentType;
