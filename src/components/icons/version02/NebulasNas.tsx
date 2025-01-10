import { FC } from "react";

const IconNebulasNas: FC<IconProps> = ({
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
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M12.6699 5.25L10.1699 13.25L15.1699 10.75L12.6699 5.25Z"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.7499 10.96L18.6699 12.25L14.1699 14.75L13.7699 14.62L6.66992 12.25L10.6699 10.25"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.6699 15.25L12.6699 18.25L10.1699 13.57"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : duotone ? (
        <svg
          className={className}
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity={duotone ? "0.58" : "1"}
            d="M24.6699 0H0.669922V24H24.6699V0Z"
            fill="none"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z"
            fill="currentColor"
          />
          <path
            d="M15.1698 10.75L14.7598 10.96H14.7498L10.0698 13.38L11.1398 10.04L14.2198 8.64999L15.1698 10.75Z"
            fill="currentColor"
          />
          <path
            d="M14.2201 8.65L11.1401 10.04L12.6701 5.25L14.2201 8.65Z"
            fill="currentColor"
          />
          <path
            d="M11.1399 10.04L10.0699 13.38L6.66992 12.25L8.84991 11.16L10.6699 10.25L11.1399 10.04Z"
            fill="currentColor"
          />
          <path
            d="M18.6698 12.25L14.1698 14.75L13.8598 14.65L13.7698 14.62L10.0698 13.38L14.7498 10.96H14.7598L18.6698 12.25Z"
            fill="currentColor"
          />
          <path
            d="M13.8598 14.65L13.6698 15.25L12.6698 18.25L10.1698 13.57L10.0698 13.38L13.7698 14.62L13.8598 14.65Z"
            fill="currentColor"
          />
        </svg>
      ) : (
        <svg
          className={className}
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.6699 2C7.14992 2 2.66992 6.48 2.66992 12C2.66992 17.52 7.14992 22 12.6699 22C18.1899 22 22.6699 17.52 22.6699 12C22.6699 6.48 18.1899 2 12.6699 2ZM14.1699 14.75L13.8599 14.65L13.6699 15.25L12.6699 18.25L10.1699 13.57L10.0699 13.38L6.66992 12.25L8.84991 11.16L10.6699 10.25L11.1399 10.04L12.6699 5.25L14.2199 8.64999L15.1699 10.75L14.7599 10.96L18.6699 12.25L14.1699 14.75Z"
            fill="none"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconNebulasNas as IconComponent).keywords = [
  "nebulas",
  "nas",
  "aurorae",
  "trifid",
  "astrophysical",
  "epsilon aurigae",
  "haloes",
  "nebulosity",
  "prominences",
  "planetary nebula",
  "galaxies",
  "sodium",
  "atomic number 11",
  "sar",
  "nsa",
  "nrc",
  "sns",
  "lha",
  "san",
  "academy",
];

export default IconNebulasNas as IconComponent;
