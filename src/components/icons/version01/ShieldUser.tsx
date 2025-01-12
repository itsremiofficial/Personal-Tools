import { FC } from "react";

const IconShieldUser: FC<IconProps> = ({
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
          <circle
            cx="12"
            cy="9.00049"
            r="2"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M16 15.0005C16 16.1051 16 17.0005 12 17.0005C8 17.0005 8 16.1051 8 15.0005C8 13.8959 9.79086 13.0005 12 13.0005C14.2091 13.0005 16 13.8959 16 15.0005Z"
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
            d="M3 10.4171C3 7.21956 3 5.62077 3.37752 5.0829C3.75503 4.54503 5.25832 4.03045 8.26491 3.00128L8.83772 2.8052C10.405 2.26873 11.1886 2.00049 12 2.00049C12.8114 2.00049 13.595 2.26873 15.1623 2.80521L15.7351 3.00128C18.7417 4.03045 20.245 4.54503 20.6225 5.0829C21 5.62077 21 7.21956 21 10.4171V11.9918C21 17.6299 16.761 20.366 14.1014 21.5278C13.38 21.8429 13.0193 22.0005 12 22.0005C10.9807 22.0005 10.62 21.8429 9.89856 21.5278C7.23896 20.366 3 17.6299 3 11.9918V10.4171Z"
            fill="currentColor"
          />
          <path
            d="M14 9.00049C14 10.1051 13.1046 11.0005 12 11.0005C10.8954 11.0005 10 10.1051 10 9.00049C10 7.89592 10.8954 7.00049 12 7.00049C13.1046 7.00049 14 7.89592 14 9.00049Z"
            fill="currentColor"
          />
          <path
            d="M12 17.0005C16 17.0005 16 16.1051 16 15.0005C16 13.8959 14.2091 13.0005 12 13.0005C9.79086 13.0005 8 13.8959 8 15.0005C8 16.1051 8 17.0005 12 17.0005Z"
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
            d="M3 10.4171C3 7.21956 3 5.62077 3.37752 5.0829C3.75503 4.54503 5.25832 4.03045 8.26491 3.00128L8.83772 2.8052C10.405 2.26873 11.1886 2.00049 12 2.00049C12.8114 2.00049 13.595 2.26873 15.1623 2.80521L15.7351 3.00128C18.7417 4.03045 20.245 4.54503 20.6225 5.0829C21 5.62077 21 7.21956 21 10.4171V11.9918C21 17.6299 16.761 20.366 14.1014 21.5278C13.38 21.8429 13.0193 22.0005 12 22.0005C10.9807 22.0005 10.62 21.8429 9.89856 21.5278C7.23896 20.366 3 17.6299 3 11.9918V10.4171ZM14 9.00049C14 10.1051 13.1046 11.0005 12 11.0005C10.8954 11.0005 10 10.1051 10 9.00049C10 7.89592 10.8954 7.00049 12 7.00049C13.1046 7.00049 14 7.89592 14 9.00049ZM12 17.0005C16 17.0005 16 16.1051 16 15.0005C16 13.8959 14.2091 13.0005 12 13.0005C9.79086 13.0005 8 13.8959 8 15.0005C8 16.1051 8 17.0005 12 17.0005Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconShieldUser as IconComponent).keywords = [
  "shield",
  "user",
  "buckler",
  "screen",
  "harbor",
  "harbour",
  "armoured",
  "armor",
  "breastplate",
  "ribbon",
  "visor",
  "exploiter",
  "enjoyer",
  "drug user",
  "substance abuser",
  "customer",
  "client",
  "employer",
  "consumer",
  "employee",
];

export default IconShieldUser as IconComponent;
