import { FC } from "react";

const IconShieldMinus: FC<IconProps> = ({
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
            d="M15 12.0005H9"
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
            d="M15 12.7505C15.4142 12.7505 15.75 12.4147 15.75 12.0005C15.75 11.5863 15.4142 11.2505 15 11.2505H9C8.58579 11.2505 8.25 11.5863 8.25 12.0005C8.25 12.4147 8.58579 12.7505 9 12.7505H15Z"
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
            d="M3.37752 5.0829C3 5.62077 3 7.21956 3 10.4171V11.9918C3 17.6299 7.23896 20.366 9.89856 21.5278C10.62 21.8429 10.9807 22.0005 12 22.0005C13.0193 22.0005 13.38 21.8429 14.1014 21.5278C16.761 20.366 21 17.6299 21 11.9918V10.4171C21 7.21956 21 5.62077 20.6225 5.0829C20.245 4.54503 18.7417 4.03045 15.7351 3.00128L15.1623 2.80521C13.595 2.26873 12.8114 2.00049 12 2.00049C11.1886 2.00049 10.405 2.26873 8.83772 2.8052L8.26491 3.00128C5.25832 4.03045 3.75503 4.54503 3.37752 5.0829ZM15 12.7505C15.4142 12.7505 15.75 12.4147 15.75 12.0005C15.75 11.5863 15.4142 11.2505 15 11.2505H9C8.58579 11.2505 8.25 11.5863 8.25 12.0005C8.25 12.4147 8.58579 12.7505 9 12.7505H15Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconShieldMinus as IconComponent).keywords = [
  "shield",
  "minus",
  "buckler",
  "screen",
  "harbor",
  "harbour",
  "armoured",
  "armor",
  "breastplate",
  "ribbon",
  "visor",
  "subtraction",
  "negative",
  "disadvantageous",
  "harmful",
  "sans",
  "min",
  "least",
  "unary",
  "nec",
];

export default IconShieldMinus as IconComponent;
