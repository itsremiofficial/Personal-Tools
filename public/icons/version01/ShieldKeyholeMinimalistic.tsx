import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconShieldKeyholeMinimalistic: FC<IconProps> = ({
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
            d="M12 13.5007V16.5007M13.4997 13.0984C12.0651 13.9267 10.2306 13.4351 9.40236 12.0005C8.57407 10.5658 9.06561 8.73138 10.5003 7.90309C11.085 7.56546 11.7363 7.44713 12.3587 7.52258C13.2632 7.63222 14.107 8.15113 14.5976 9.00098C15.0883 9.85084 15.1158 10.841 14.7585 11.6792C14.5126 12.2559 14.0845 12.7607 13.4997 13.0984Z"
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
            d="M3.37752 5.0829C3 5.62077 3 7.21956 3 10.4171V11.9918C3 17.6299 7.23896 20.366 9.89856 21.5278C10.62 21.8429 10.9807 22.0005 12 22.0005C13.0193 22.0005 13.38 21.8429 14.1014 21.5278C16.761 20.366 21 17.6299 21 11.9918V10.4171C21 7.21956 21 5.62077 20.6225 5.0829C20.245 4.54503 18.7417 4.03045 15.7351 3.00128L15.1623 2.80521C13.595 2.26873 12.8114 2.00049 12 2.00049C11.1886 2.00049 10.405 2.26873 8.83772 2.8052L8.26491 3.00128C5.25832 4.03045 3.75503 4.54503 3.37752 5.0829Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.1254 7.25356C10.8556 6.83195 11.6709 6.6837 12.4491 6.77802C13.5777 6.91482 14.6337 7.5632 15.2473 8.62597C15.8609 9.68874 15.8944 10.9275 15.4485 11.9733C15.1412 12.6943 14.6051 13.3263 13.8749 13.7479C13.5153 13.9555 13.1357 14.0967 12.7501 14.1755V16.5007C12.7501 16.9149 12.4143 17.2507 12.0001 17.2507C11.5859 17.2507 11.2501 16.9149 11.2501 16.5007V14.1745C10.2357 13.967 9.3114 13.3427 8.75296 12.3755C7.71757 10.5821 8.33202 8.28896 10.1254 7.25356ZM10.8754 8.5526C11.3147 8.29896 11.8018 8.21055 12.2686 8.26712C12.949 8.3496 13.5805 8.73904 13.9482 9.37597C14.316 10.0129 14.3375 10.7545 14.0687 11.3851C13.8843 11.8175 13.5642 12.1952 13.1249 12.4488C12.049 13.07 10.6732 12.7014 10.052 11.6255C9.43082 10.5496 9.79946 9.17378 10.8754 8.5526Z"
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
            d="M10.8753 8.55261C11.3146 8.29897 11.8017 8.21056 12.2684 8.26713C12.9489 8.34961 13.5804 8.73905 13.9481 9.37598C14.3159 10.0129 14.3374 10.7545 14.0686 11.3851C13.8842 11.8175 13.5641 12.1952 13.1248 12.4489C12.0488 13.07 10.6731 12.7014 10.0519 11.6255C9.43069 10.5496 9.79933 9.17379 10.8753 8.55261Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.37752 5.0829C3 5.62077 3 7.21956 3 10.4171V11.9918C3 17.6299 7.23896 20.366 9.89856 21.5278C10.62 21.8429 10.9807 22.0005 12 22.0005C13.0193 22.0005 13.38 21.8429 14.1014 21.5278C16.761 20.366 21 17.6299 21 11.9918V10.4171C21 7.21956 21 5.62077 20.6225 5.0829C20.245 4.54503 18.7417 4.03045 15.7351 3.00128L15.1623 2.80521C13.595 2.26873 12.8114 2.00049 12 2.00049C11.1886 2.00049 10.405 2.26873 8.83772 2.8052L8.26491 3.00128C5.25832 4.03045 3.75503 4.54503 3.37752 5.0829ZM12.4489 6.77803C11.6708 6.68371 10.8555 6.83196 10.1253 7.25357C8.33189 8.28897 7.71744 10.5821 8.75284 12.3755C9.31127 13.3427 10.2356 13.967 11.25 14.1745V16.5007C11.25 16.9149 11.5858 17.2507 12 17.2507C12.4142 17.2507 12.75 16.9149 12.75 16.5007V14.1755C13.1356 14.0967 13.5152 13.9555 13.8748 13.7479C14.605 13.3263 15.141 12.6944 15.4484 11.9733C15.8943 10.9275 15.8608 9.68876 15.2472 8.62598C14.6336 7.56321 13.5776 6.91483 12.4489 6.77803Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconShieldKeyholeMinimalistic as IconComponentType).keywords = [
  "shield",
  "keyhole",
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
  "lock",
  "slot",
  "latch",
  "hemocyanin",
  "haemocyanin",
  "limpet",
  "escutcheons",
  "latches",
  "limpets",
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

export default IconShieldKeyholeMinimalistic as IconComponentType;
