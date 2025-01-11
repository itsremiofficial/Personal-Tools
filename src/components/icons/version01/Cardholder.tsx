import { FC } from "react";

const IconCardholder: FC<IconProps> = ({
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
            d="M2 12.0005C2 7.28644 2 4.92942 3.46447 3.46495C4.92893 2.00049 7.28595 2.00049 12 2.00049C16.714 2.00049 19.0711 2.00049 20.5355 3.46495C22 4.92942 22 7.28644 22 12.0005C22 16.7145 22 19.0716 20.5355 20.536C19.0711 22.0005 16.714 22.0005 12 22.0005C7.28595 22.0005 4.92893 22.0005 3.46447 20.536C2 19.0716 2 16.7145 2 12.0005Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M17 11.0005V10.0005C17 8.11487 17 7.17206 16.4142 6.58627C15.8284 6.00049 14.8856 6.00049 13 6.00049H11C9.11438 6.00049 8.17157 6.00049 7.58579 6.58627C7 7.17206 7 8.11487 7 10.0005V11.0005"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M5 11.0005H19"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M8 16.0005H16"
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
            d="M3.46447 20.536C4.92893 22.0005 7.28595 22.0005 12 22.0005C16.714 22.0005 19.0711 22.0005 20.5355 20.536C22 19.0716 22 16.7145 22 12.0005C22 7.28644 22 4.92942 20.5355 3.46495C19.0711 2.00049 16.714 2.00049 12 2.00049C7.28595 2.00049 4.92893 2.00049 3.46447 3.46495C2 4.92942 2 7.28644 2 12.0005C2 16.7145 2 19.0716 3.46447 20.536Z"
            fill="currentColor"
          />
          <path
            d="M8 15.2505C7.58579 15.2505 7.25 15.5863 7.25 16.0005C7.25 16.4147 7.58579 16.7505 8 16.7505H16C16.4142 16.7505 16.75 16.4147 16.75 16.0005C16.75 15.5863 16.4142 15.2505 16 15.2505H8Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17 10.2505H7H5C4.58579 10.2505 4.25 10.5863 4.25 11.0005C4.25 11.4147 4.58579 11.7505 5 11.7505H19C19.4142 11.7505 19.75 11.4147 19.75 11.0005C19.75 10.5863 19.4142 10.2505 19 10.2505H17Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.7" : "1"}
            d="M13 6.00049H11C9.11438 6.00049 8.17157 6.00049 7.58579 6.58627C7 7.17206 7 8.11487 7 10.0005V10.2505H17V10.0005C17 8.11487 17 7.17206 16.4142 6.58627C15.8284 6.00049 14.8856 6.00049 13 6.00049Z"
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
            d="M2 12.0005C2 7.28644 2 4.92942 3.46447 3.46495C4.92893 2.00049 7.28595 2.00049 12 2.00049C16.714 2.00049 19.0711 2.00049 20.5355 3.46495C22 4.92942 22 7.28644 22 12.0005C22 16.7145 22 19.0716 20.5355 20.536C19.0711 22.0005 16.714 22.0005 12 22.0005C7.28595 22.0005 4.92893 22.0005 3.46447 20.536C2 19.0716 2 16.7145 2 12.0005ZM8 15.2505C7.58579 15.2505 7.25 15.5863 7.25 16.0005C7.25 16.4147 7.58579 16.7505 8 16.7505H16C16.4142 16.7505 16.75 16.4147 16.75 16.0005C16.75 15.5863 16.4142 15.2505 16 15.2505H8ZM7.58579 6.58627C8.17157 6.00049 9.11438 6.00049 11 6.00049H13C14.8856 6.00049 15.8284 6.00049 16.4142 6.58627C17 7.17206 17 8.11487 17 10.0005V10.2505H19C19.4142 10.2505 19.75 10.5863 19.75 11.0005C19.75 11.4147 19.4142 11.7505 19 11.7505H5C4.58579 11.7505 4.25 11.4147 4.25 11.0005C4.25 10.5863 4.58579 10.2505 5 10.2505H7V10.0005C7 8.11487 7 7.17206 7.58579 6.58627Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCardholder as IconComponent).keywords = [
  "cardholder",
  "registrant",
  "proprietor",
  "patentee",
  "licensee",
  "owner",
  "permittee",
  "custodian",
  "landlord",
  "ownership",
];

export default IconCardholder as IconComponent;