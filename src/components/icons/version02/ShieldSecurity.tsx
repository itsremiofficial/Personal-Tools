import { FC } from "react";

const IconShieldSecurity: FC<IconProps> = ({
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
            d="M11.1601 2.23006L6.17008 4.11006C5.02008 4.54006 4.08008 5.90006 4.08008 7.12006V14.5501C4.08008 15.7301 4.86008 17.2801 5.81008 17.9901L10.1101 21.2001C11.5201 22.2601 13.8401 22.2601 15.2501 21.2001L19.5501 17.9901C20.5001 17.2801 21.2801 15.7301 21.2801 14.5501V7.12006C21.2801 5.89006 20.3401 4.53006 19.1901 4.10006L14.2001 2.23006C13.3501 1.92006 11.9901 1.92006 11.1601 2.23006Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M12.6699 12.5C13.7745 12.5 14.6699 11.6046 14.6699 10.5C14.6699 9.39543 13.7745 8.5 12.6699 8.5C11.5654 8.5 10.6699 9.39543 10.6699 10.5C10.6699 11.6046 11.5654 12.5 12.6699 12.5Z"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.6699 12.5V15.5"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
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
            opacity={duotone ? "0.4" : "1"}
            d="M11.6297 2.10989L6.12973 4.16989C5.07973 4.56989 4.21973 5.80989 4.21973 6.93989V15.0399C4.21973 15.8499 4.74973 16.9199 5.39973 17.3999L10.8997 21.5099C11.8697 22.2399 13.4597 22.2399 14.4297 21.5099L19.9297 17.3999C20.5797 16.9099 21.1097 15.8499 21.1097 15.0399V6.93989C21.1097 5.81989 20.2497 4.56988 19.1997 4.17988L13.6997 2.11989C13.1397 1.89989 12.1997 1.89989 11.6297 2.10989Z"
            fill="currentColor"
          />
          <path
            d="M15.1699 10.5C15.1699 9.12 14.0499 8 12.6699 8C11.2899 8 10.1699 9.12 10.1699 10.5C10.1699 11.62 10.9099 12.55 11.9199 12.87V15.5C11.9199 15.91 12.2599 16.25 12.6699 16.25C13.0799 16.25 13.4199 15.91 13.4199 15.5V12.87C14.4299 12.55 15.1699 11.62 15.1699 10.5Z"
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
            d="M19.2097 4.17014L13.7097 2.11014C13.1397 1.90014 12.2097 1.90014 11.6397 2.11014L6.13973 4.17014C5.07973 4.57014 4.21973 5.81014 4.21973 6.94014V15.0401C4.21973 15.8501 4.74973 16.9201 5.39973 17.4001L10.8997 21.5101C11.8697 22.2401 13.4597 22.2401 14.4297 21.5101L19.9297 17.4001C20.5797 16.9101 21.1097 15.8501 21.1097 15.0401V6.94014C21.1197 5.81014 20.2597 4.57014 19.2097 4.17014ZM13.4197 12.8701V15.5001C13.4197 15.9101 13.0797 16.2501 12.6697 16.2501C12.2597 16.2501 11.9197 15.9101 11.9197 15.5001V12.8701C10.9097 12.5501 10.1697 11.6101 10.1697 10.5001C10.1697 9.12014 11.2897 8.00014 12.6697 8.00014C14.0497 8.00014 15.1697 9.12014 15.1697 10.5001C15.1697 11.6201 14.4297 12.5501 13.4197 12.8701Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconShieldSecurity as IconComponent).keywords = [
  "shield",
  "security",
  "buckler",
  "screen",
  "harbor",
  "harbour",
  "armoured",
  "armor",
  "breastplate",
  "ribbon",
  "visor",
  "surety",
  "protection",
  "certificate",
  "security system",
  "security measures",
  "confidentiality",
  "safe",
  "secure",
  "peace",
];

export default IconShieldSecurity as IconComponent;
