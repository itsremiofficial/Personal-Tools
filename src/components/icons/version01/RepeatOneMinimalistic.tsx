import { FC } from "react";

const IconRepeatOneMinimalistic: FC<IconProps> = ({
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
            d="M9.5 19.75C9.91421 19.75 10.25 19.4142 10.25 19C10.25 18.5858 9.91421 18.25 9.5 18.25V19.75ZM11 5V5.75C11.3033 5.75 11.5768 5.56727 11.6929 5.28701C11.809 5.00676 11.7448 4.68417 11.5303 4.46967L11 5ZM9.53033 2.46967C9.23744 2.17678 8.76256 2.17678 8.46967 2.46967C8.17678 2.76256 8.17678 3.23744 8.46967 3.53033L9.53033 2.46967ZM9.5 18.25H9.00028V19.75H9.5V18.25ZM9 5.75H11V4.25H9V5.75ZM11.5303 4.46967L9.53033 2.46967L8.46967 3.53033L10.4697 5.53033L11.5303 4.46967ZM1.25 12C1.25 16.2802 4.72011 19.75 9.00028 19.75V18.25C5.54846 18.25 2.75 15.4517 2.75 12H1.25ZM2.75 12C2.75 8.54822 5.54822 5.75 9 5.75V4.25C4.71979 4.25 1.25 7.71979 1.25 12H2.75Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M13 19V18.25C12.6967 18.25 12.4232 18.4327 12.3071 18.713C12.191 18.9932 12.2552 19.3158 12.4697 19.5303L13 19ZM14.4697 21.5303C14.7626 21.8232 15.2374 21.8232 15.5303 21.5303C15.8232 21.2374 15.8232 20.7626 15.5303 20.4697L14.4697 21.5303ZM14.5 4.25C14.0858 4.25 13.75 4.58579 13.75 5C13.75 5.41421 14.0858 5.75 14.5 5.75V4.25ZM15 18.25H13V19.75H15V18.25ZM12.4697 19.5303L14.4697 21.5303L15.5303 20.4697L13.5303 18.4697L12.4697 19.5303ZM14.5 5.75H15V4.25H14.5V5.75ZM21.25 12C21.25 15.4518 18.4518 18.25 15 18.25V19.75C19.2802 19.75 22.75 16.2802 22.75 12H21.25ZM22.75 12C22.75 7.71979 19.2802 4.25 15 4.25V5.75C18.4518 5.75 21.25 8.54822 21.25 12H22.75Z"
            fill="currentColor"
          />
          <path
            d="M16 12L8 12"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.71597 3.20277C8.98843 2.93241 9.43017 2.93241 9.70263 3.20277L11.5631 5.04893C11.7626 5.24692 11.8223 5.5447 11.7143 5.8034C11.6063 6.06209 11.352 6.23077 11.0698 6.23077H9.2093C5.99834 6.23077 3.39535 8.81374 3.39535 12C3.39535 15.1862 5.99857 17.7692 9.20956 17.7692H9.67442C10.0597 17.7692 10.3721 18.0792 10.3721 18.4615C10.3721 18.8439 10.0597 19.1538 9.67442 19.1538H9.20956C5.22801 19.1538 2 15.951 2 12C2 8.04904 5.22771 4.84615 9.2093 4.84615H9.38543L8.71597 4.18184C8.44351 3.91148 8.44351 3.47314 8.71597 3.20277Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.6279 5.53846C13.6279 5.15611 13.9403 4.84615 14.3256 4.84615H14.7907C18.7723 4.84615 22 8.04904 22 12C22 15.951 18.7723 19.1538 14.7907 19.1538H14.6146L15.284 19.8182C15.5565 20.0885 15.5565 20.5269 15.284 20.7972C15.0116 21.0676 14.5698 21.0676 14.2974 20.7972L12.4369 18.9511C12.2374 18.7531 12.1777 18.4553 12.2857 18.1966C12.3937 17.9379 12.6481 17.7692 12.9302 17.7692H14.7907C18.0017 17.7692 20.6047 15.1863 20.6047 12C20.6047 8.81374 18.0017 6.23077 14.7907 6.23077H14.3256C13.9403 6.23077 13.6279 5.92081 13.6279 5.53846Z"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.5" : "1"}>
            <path
              d="M5.48828 11.9999C5.48828 9.96072 7.1542 8.30762 9.20921 8.30762H14.7906C16.8456 8.30762 18.5115 9.96072 18.5115 11.9999C18.5115 14.0391 16.8456 15.6922 14.7906 15.6922H9.20921C7.1542 15.6922 5.48828 14.0391 5.48828 11.9999Z"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.71597 3.20277C8.98843 2.93241 9.43017 2.93241 9.70263 3.20277L11.5631 5.04893C11.7626 5.24692 11.8223 5.5447 11.7143 5.8034C11.6063 6.06209 11.352 6.23077 11.0698 6.23077H9.2093C5.99834 6.23077 3.39535 8.81374 3.39535 12C3.39535 15.1862 5.99857 17.7692 9.20956 17.7692H9.67442C10.0597 17.7692 10.3721 18.0792 10.3721 18.4615C10.3721 18.8439 10.0597 19.1538 9.67442 19.1538H9.20956C5.22801 19.1538 2 15.951 2 12C2 8.04904 5.22771 4.84615 9.2093 4.84615H9.38543L8.71597 4.18184C8.44351 3.91148 8.44351 3.47314 8.71597 3.20277Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.6279 5.53846C13.6279 5.15611 13.9403 4.84615 14.3256 4.84615H14.7907C18.7723 4.84615 22 8.04904 22 12C22 15.951 18.7723 19.1538 14.7907 19.1538H14.6146L15.284 19.8182C15.5565 20.0885 15.5565 20.5269 15.284 20.7972C15.0116 21.0676 14.5698 21.0676 14.2974 20.7972L12.4369 18.9511C12.2374 18.7531 12.1777 18.4553 12.2857 18.1966C12.3937 17.9379 12.6481 17.7692 12.9302 17.7692H14.7907C18.0017 17.7692 20.6047 15.1863 20.6047 12C20.6047 8.81374 18.0017 6.23077 14.7907 6.23077H14.3256C13.9403 6.23077 13.6279 5.92081 13.6279 5.53846Z"
            fill="currentColor"
          />
          <path
            d="M5.48837 12C5.48837 9.96079 7.15429 8.30769 9.2093 8.30769H14.7907C16.8457 8.30769 18.5116 9.96079 18.5116 12C18.5116 14.0392 16.8457 15.6923 14.7907 15.6923H9.2093C7.15429 15.6923 5.48837 14.0392 5.48837 12Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconRepeatOneMinimalistic as IconComponent).keywords = [
  "repeat",
  "one",
  "minimalistic",
  "restate",
  "reiterate",
  "ingeminate",
  "reprise",
  "repetition",
  "retell",
  "recur",
  "recapitulate",
  "duplicate",
  "combined",
  "united",
  "same",
  "unity",
  "unitary",
  "cardinal",
  "one and only",
  "extraordinary",
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

export default IconRepeatOneMinimalistic as IconComponent;
