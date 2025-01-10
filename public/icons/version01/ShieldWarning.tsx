import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconShieldWarning: FC<IconProps> = ({
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
            d="M12 8.00049V12.0005"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <circle cx="12" cy="15.0005" r="1" fill="currentColor" />
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
            d="M12 7.25049C12.4142 7.25049 12.75 7.58627 12.75 8.00049V12.0005C12.75 12.4147 12.4142 12.7505 12 12.7505C11.5858 12.7505 11.25 12.4147 11.25 12.0005V8.00049C11.25 7.58627 11.5858 7.25049 12 7.25049Z"
            fill="currentColor"
          />
          <path
            d="M12 16.0005C12.5523 16.0005 13 15.5528 13 15.0005C13 14.4482 12.5523 14.0005 12 14.0005C11.4477 14.0005 11 14.4482 11 15.0005C11 15.5528 11.4477 16.0005 12 16.0005Z"
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
            d="M3 10.4171C3 7.21956 3 5.62077 3.37752 5.0829C3.75503 4.54503 5.25832 4.03045 8.26491 3.00128L8.83772 2.8052C10.405 2.26873 11.1886 2.00049 12 2.00049C12.8114 2.00049 13.595 2.26873 15.1623 2.80521L15.7351 3.00128C18.7417 4.03045 20.245 4.54503 20.6225 5.0829C21 5.62077 21 7.21956 21 10.4171V11.9918C21 17.6299 16.761 20.366 14.1014 21.5278C13.38 21.8429 13.0193 22.0005 12 22.0005C10.9807 22.0005 10.62 21.8429 9.89856 21.5278C7.23896 20.366 3 17.6299 3 11.9918V10.4171ZM12 7.25049C12.4142 7.25049 12.75 7.58627 12.75 8.00049V12.0005C12.75 12.4147 12.4142 12.7505 12 12.7505C11.5858 12.7505 11.25 12.4147 11.25 12.0005V8.00049C11.25 7.58627 11.5858 7.25049 12 7.25049ZM12 16.0005C12.5523 16.0005 13 15.5528 13 15.0005C13 14.4482 12.5523 14.0005 12 14.0005C11.4477 14.0005 11 14.4482 11 15.0005C11 15.5528 11.4477 16.0005 12 16.0005Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconShieldWarning as IconComponentType).keywords = [
  "shield",
  "warning",
  "buckler",
  "screen",
  "harbor",
  "harbour",
  "armoured",
  "armor",
  "breastplate",
  "ribbon",
  "visor",
  "cautionary",
  "exemplary",
  "dissuasive",
  "monitory",
  "admonition",
  "admonitory",
  "word of advice",
  "cautioning",
  "cautioned",
];

export default IconShieldWarning as IconComponentType;
