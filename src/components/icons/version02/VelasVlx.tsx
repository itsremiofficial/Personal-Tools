import { FC } from "react";

const IconVelasVlx: FC<IconProps> = ({
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
          <path
            d="M2.66992 3.03H22.6699"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M4.70982 6.36H20.6398C21.5198 6.36 22.0498 7.33 21.5698 8.07L13.6098 20.46C13.1698 21.14 12.1798 21.14 11.7398 20.46L3.7798 8.07C3.2998 7.33 3.82982 6.36 4.70982 6.36Z"
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
          <path d="M24.6699 0H0.669922V24H24.6699V0Z" fill="none" />
          <path
            d="M21.6699 3.15002H3.66992C3.25992 3.15002 2.91992 3.49002 2.91992 3.90002C2.91992 4.31002 3.25992 4.65002 3.66992 4.65002H21.6699C22.0799 4.65002 22.4199 4.31002 22.4199 3.90002C22.4199 3.49002 22.0799 3.15002 21.6699 3.15002Z"
            fill="currentColor"
          />
          <path
            d="M4.70999 6.24002H20.64C21.52 6.24002 22.05 7.21002 21.57 7.95002L13.61 20.34C13.17 21.02 12.18 21.02 11.74 20.34L3.76998 7.95002C3.29998 7.21002 3.82999 6.24002 4.70999 6.24002Z"
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
            d="M21.6699 3.14999H3.66992C3.25992 3.14999 2.91992 3.48999 2.91992 3.89999C2.91992 4.30999 3.25992 4.64999 3.66992 4.64999H21.6699C22.0799 4.64999 22.4199 4.30999 22.4199 3.89999C22.4199 3.48999 22.0799 3.14999 21.6699 3.14999Z"
            fill="none"
          />
          <path
            d="M4.70982 6.23999H20.6398C21.5198 6.23999 22.0498 7.20999 21.5698 7.94999L13.6098 20.34C13.1698 21.02 12.1798 21.02 11.7398 20.34L3.7798 7.94999C3.2998 7.20999 3.82982 6.23999 4.70982 6.23999Z"
            fill="none"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconVelasVlx as IconComponent).keywords = [
  "velas",
  "vlx",
  "antlia",
  "argo",
  "carina",
  "centaurus",
  "puppis",
  "external storage",
  "parhelia",
  "insp",
  "tyan",
  "ixia",
  "fortran compiler",
  "xli",
  "junos",
  "agentry",
];

export default IconVelasVlx as IconComponent;
