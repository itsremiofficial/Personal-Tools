import { FC } from "react";

const IconLinkBrokenMinimalistic: FC<IconProps> = ({
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
            d="M10 5.04926L10.367 4.70612C12.7995 2.43195 16.7432 2.43195 19.1757 4.70612C21.6081 6.98029 21.6081 10.6674 19.1757 12.9416L16.9735 15.0005"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M14 18.9283L13.6345 19.2778C11.2123 21.5942 7.25434 21.5648 4.83209 19.2485C2.43376 16.955 2.37639 13.2158 4.74095 10.8905L5.64594 10.0005"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M6.58739 3.00049L7.5 5.20569"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M3.50238 6.08707L9.05021 8.79502"
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
          <g opacity={duotone ? "0.5" : "1"}>
            <path
              d="M19.6879 4.15826C16.9672 1.61456 12.5756 1.61456 9.85484 4.15826L9.48781 4.50141C9.18524 4.78429 9.16928 5.2589 9.45216 5.56147C9.73505 5.86404 10.2097 5.88 10.5122 5.59712L10.8792 5.25397C13.0234 3.24933 16.5193 3.24933 18.6635 5.25397C20.7789 7.23171 20.7789 10.416 18.6635 12.3938L16.4613 14.4526C16.1587 14.7355 16.1428 15.2101 16.4257 15.5127C16.7086 15.8153 17.1832 15.8312 17.4857 15.5483L19.6879 13.4895C22.4374 10.9189 22.4374 6.72886 19.6879 4.15826Z"
              fill="currentColor"
            />
            <path
              d="M6.17183 10.5352C6.46716 10.2448 6.47114 9.76995 6.18071 9.47462C5.89027 9.17928 5.41542 9.17531 5.12008 9.46574L4.21509 10.3557C1.54336 12.9831 1.61504 17.2098 4.31376 19.7906C7.02135 22.3797 11.4361 22.4179 14.1529 19.8199L14.5184 19.4704C14.8177 19.1841 14.8283 18.7093 14.5421 18.41C14.2558 18.1106 13.781 18.1 13.4817 18.3863L13.1162 18.7358C10.9885 20.7705 7.48737 20.7499 5.35045 18.7065C3.25251 16.7002 3.20945 13.4484 5.26684 11.4252L6.17183 10.5352Z"
              fill="currentColor"
            />
          </g>
          <path
            d="M7.27989 2.71365C7.12149 2.33091 6.68282 2.14905 6.30009 2.30744C5.91736 2.46583 5.73549 2.9045 5.89389 3.28724L6.8065 5.49244C6.96489 5.87517 7.40356 6.05704 7.78629 5.89865C8.16903 5.74025 8.35089 5.30159 8.1925 4.91885L7.27989 2.71365Z"
            fill="currentColor"
          />
          <path
            d="M3.83086 5.41302C3.45862 5.23133 3.00958 5.3858 2.82788 5.75804C2.64619 6.13027 2.80066 6.57932 3.1729 6.76102L8.72073 9.46897C9.09297 9.65066 9.54202 9.49619 9.72371 9.12395C9.9054 8.75172 9.75093 8.30267 9.3787 8.12098L3.83086 5.41302Z"
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
            d="M10 5.04926L10.367 4.70612C12.7995 2.43195 16.7432 2.43195 19.1757 4.70612C21.6081 6.98029 21.6081 10.6674 19.1757 12.9416L16.9735 15.0005"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M14 18.9283L13.6345 19.2778C11.2123 21.5942 7.25434 21.5648 4.83209 19.2485C2.43376 16.955 2.37639 13.2158 4.74095 10.8905L5.64594 10.0005"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M6.58739 3.00049L7.5 5.20569"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M3.50238 6.08707L9.05021 8.79502"
            strokeWidth={width}
            strokeLinecap="round"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconLinkBrokenMinimalistic as IconComponent).keywords = [
  "link",
  "broken",
  "minimalistic",
  "linkup",
  "connection",
  "nexus",
  "connexion",
  "connectedness",
  "connect",
  "tie-in",
  "unite",
  "associate",
  "fractured",
  "shattered",
  "fragmented",
  "crushed",
  "destroyed",
  "damaged",
  "chipped",
  "cracked",
  "rugged",
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

export default IconLinkBrokenMinimalistic as IconComponent;
