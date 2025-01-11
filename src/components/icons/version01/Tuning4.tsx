import { FC } from "react";

const IconTuning4: FC<IconProps> = ({
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
            d="M12 14.0005C10.8954 14.0005 10 13.1051 10 12.0005C10 10.8959 10.8954 10.0005 12 10.0005C13.1046 10.0005 14 10.8959 14 12.0005C14 13.1051 13.1046 14.0005 12 14.0005Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M14 6.00049C12.8954 6.00049 12 5.10506 12 4.00049C12 2.89592 12.8954 2.00049 14 2.00049C15.1046 2.00049 16 2.89592 16 4.00049C16 5.10506 15.1046 6.00049 14 6.00049Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M10 22.0005C11.1046 22.0005 12 21.1051 12 20.0005C12 18.8959 11.1046 18.0005 10 18.0005C8.89543 18.0005 8 18.8959 8 20.0005C8 21.1051 8.89543 22.0005 10 22.0005Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M12 20.0005H19M19 12.0005H14M19 4.00049H16"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M12 4.00049L5 4.00049M10 12.0005H5M5 20.0005H7.66667"
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
            d="M12 4.00049C12 2.89592 12.8954 2.00049 14 2.00049C15.1046 2.00049 16 2.89592 16 4.00049C16 5.10506 15.1046 6.00049 14 6.00049C12.8954 6.00049 12 5.10506 12 4.00049Z"
            fill="currentColor"
          />
          <path
            d="M12 10.0005C13.1046 10.0005 14 10.8959 14 12.0005C14 13.1051 13.1046 14.0005 12 14.0005C10.8954 14.0005 10 13.1051 10 12.0005C10 10.8959 10.8954 10.0005 12 10.0005Z"
            fill="currentColor"
          />
          <path
            d="M10 18.0005C11.1046 18.0005 12 18.8959 12 20.0005C12 21.1051 11.1046 22.0005 10 22.0005C8.89543 22.0005 8 21.1051 8 20.0005C8 18.8959 8.89543 18.0005 10 18.0005Z"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.5" : "1"}>
            <path
              d="M13.8546 12.7505C13.9484 12.5189 14 12.2657 14 12.0005C14 11.7353 13.9484 11.4821 13.8546 11.2505L19 11.2505C19.4142 11.2505 19.75 11.5863 19.75 12.0005C19.75 12.4147 19.4142 12.7505 19 12.7505L13.8546 12.7505Z"
              fill="currentColor"
            />
            <path
              d="M10.1454 11.2505C10.0516 11.4821 10 11.7353 10 12.0005C10 12.2657 10.0516 12.5189 10.1454 12.7505H5C4.58579 12.7505 4.25 12.4147 4.25 12.0005C4.25 11.5863 4.58579 11.2505 5 11.2505H10.1454Z"
              fill="currentColor"
            />
            <path
              d="M11.8546 19.2505C11.9484 19.4821 12 19.7353 12 20.0005C12 20.2657 11.9484 20.5189 11.8546 20.7505H19C19.4142 20.7505 19.75 20.4147 19.75 20.0005C19.75 19.5863 19.4142 19.2505 19 19.2505H11.8546Z"
              fill="currentColor"
            />
            <path
              d="M8.14538 19.2505H5C4.58579 19.2505 4.25 19.5863 4.25 20.0005C4.25 20.4147 4.58579 20.7505 5 20.7505H8.14538C8.05163 20.5189 8 20.2657 8 20.0005C8 19.7353 8.05163 19.4821 8.14538 19.2505Z"
              fill="currentColor"
            />
            <path
              d="M15.8546 4.75049C15.9484 4.51888 16 4.26571 16 4.00049C16 3.73526 15.9484 3.4821 15.8546 3.25049L19 3.25049C19.4142 3.25049 19.75 3.58628 19.75 4.00049C19.75 4.4147 19.4142 4.75049 19 4.75049L15.8546 4.75049Z"
              fill="currentColor"
            />
            <path
              d="M12.1454 4.75049C12.0516 4.51888 12 4.26571 12 4.00049C12 3.73526 12.0516 3.4821 12.1454 3.25049L5 3.25049C4.58579 3.25049 4.25 3.58628 4.25 4.00049C4.25 4.4147 4.58579 4.75049 5 4.75049L12.1454 4.75049Z"
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
            d="M12 4.00049C12 2.89592 12.8954 2.00049 14 2.00049C15.1046 2.00049 16 2.89592 16 4.00049C16 5.10506 15.1046 6.00049 14 6.00049C12.8954 6.00049 12 5.10506 12 4.00049Z"
            fill="currentColor"
          />
          <path
            d="M12 10.0005C13.1046 10.0005 14 10.8959 14 12.0005C14 13.1051 13.1046 14.0005 12 14.0005C10.8954 14.0005 10 13.1051 10 12.0005C10 10.8959 10.8954 10.0005 12 10.0005Z"
            fill="currentColor"
          />
          <path
            d="M10 18.0005C11.1046 18.0005 12 18.8959 12 20.0005C12 21.1051 11.1046 22.0005 10 22.0005C8.89543 22.0005 8 21.1051 8 20.0005C8 18.8959 8.89543 18.0005 10 18.0005Z"
            fill="currentColor"
          />
          <path
            d="M15.25 12.0005C15.25 11.5863 15.5858 11.2505 16 11.2505H19C19.4142 11.2505 19.75 11.5863 19.75 12.0005C19.75 12.4147 19.4142 12.7505 19 12.7505H16C15.5858 12.7505 15.25 12.4147 15.25 12.0005Z"
            fill="currentColor"
          />
          <path
            d="M14 19.2505C13.5858 19.2505 13.25 19.5863 13.25 20.0005C13.25 20.4147 13.5858 20.7505 14 20.7505H19C19.4142 20.7505 19.75 20.4147 19.75 20.0005C19.75 19.5863 19.4142 19.2505 19 19.2505H14Z"
            fill="currentColor"
          />
          <path
            d="M10.75 4.00049C10.75 3.58627 10.4142 3.25049 10 3.25049L5 3.25049C4.58579 3.25049 4.25 3.58627 4.25 4.00049C4.25 4.4147 4.58579 4.75049 5 4.75049L10 4.75049C10.4142 4.75049 10.75 4.4147 10.75 4.00049Z"
            fill="currentColor"
          />
          <path
            d="M5 11.2505C4.58579 11.2505 4.25 11.5863 4.25 12.0005C4.25 12.4147 4.58579 12.7505 5 12.7505H8C8.41421 12.7505 8.75 12.4147 8.75 12.0005C8.75 11.5863 8.41421 11.2505 8 11.2505H5Z"
            fill="currentColor"
          />
          <path
            d="M4.25 20.0005C4.25 19.5863 4.58579 19.2505 5 19.2505H6C6.41421 19.2505 6.75 19.5863 6.75 20.0005C6.75 20.4147 6.41421 20.7505 6 20.7505H5C4.58579 20.7505 4.25 20.4147 4.25 20.0005Z"
            fill="currentColor"
          />
          <path
            d="M19 3.25049C19.4142 3.25049 19.75 3.58627 19.75 4.00049C19.75 4.4147 19.4142 4.75049 19 4.75049H18C17.5858 4.75049 17.25 4.4147 17.25 4.00049C17.25 3.58627 17.5858 3.25049 18 3.25049H19Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconTuning4 as IconComponent).keywords = [
  "tuning",
  "4",
  "melody",
  "tune up",
  "line",
  "strain",
  "air",
  "melodic line",
  "melodic phrase",
  "tuner",
  "audience",
  "dh",
  "f4f",
];

export default IconTuning4 as IconComponent;