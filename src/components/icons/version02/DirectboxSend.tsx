import { FC } from "react";

const IconDirectboxSend: FC<IconProps> = ({
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
              d="M12.6699 8V2L10.6699 4"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.6699 2L14.6699 4"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M7.66992 12C3.66992 12 3.66992 13.79 3.66992 16V17C3.66992 19.76 3.66992 22 8.66992 22H16.6699C20.6699 22 21.6699 19.76 21.6699 17V16C21.6699 13.79 21.6699 12 17.6699 12C16.6699 12 16.3899 12.21 15.8699 12.6L14.8499 13.68C13.6699 14.94 11.6699 14.94 10.4799 13.68L9.46992 12.6C8.94992 12.21 8.66992 12 7.66992 12Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M5.66992 12V10C5.66992 7.99004 5.66992 6.33004 8.66992 6.04004"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19.6699 12V10C19.6699 7.99004 19.6699 6.33004 16.6699 6.04004"
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
            opacity={duotone ? "0.4" : "1"}
            d="M15.46 6H9.87996C5.45996 6 5.45996 8.35 5.45996 10.42V12.21C5.45996 12.43 5.55996 12.63 5.72996 12.76C5.89996 12.89 6.12996 12.94 6.33996 12.88C6.78996 12.76 7.34996 12.7 8.01996 12.7C8.68996 12.7 8.82996 12.78 9.22996 13.08L10.14 14.04C10.79 14.74 11.72 15.14 12.68 15.14C13.64 15.14 14.56 14.74 15.22 14.04L16.13 13.08C16.53 12.78 16.67 12.7 17.34 12.7C18.01 12.7 18.57 12.76 19.02 12.88C19.23 12.94 19.45 12.89 19.63 12.76C19.8 12.63 19.9 12.42 19.9 12.21V10.42C19.88 8.35 19.88 6 15.46 6Z"
            fill="currentColor"
          />
          <path
            d="M14.9503 4.95C14.6903 5.21 14.2603 5.21 14.0003 4.95L13.3503 4.3V9.07C13.3503 9.44 13.0503 9.75 12.6703 9.75C12.2903 9.75 11.9903 9.45 11.9903 9.07V4.3L11.3403 4.95C11.0803 5.21 10.6503 5.21 10.3903 4.95C10.1303 4.69 10.1303 4.26 10.3903 4L12.1903 2.2C12.2003 2.19 12.2003 2.19 12.2103 2.19C12.2703 2.14 12.3303 2.09 12.4103 2.06C12.5003 2.02 12.5803 2 12.6703 2C12.7603 2 12.8403 2.02 12.9303 2.05C13.0103 2.08 13.0903 2.13 13.1503 2.2L14.9503 4C15.2103 4.26 15.2103 4.69 14.9503 4.95Z"
            fill="currentColor"
          />
          <path
            d="M19.3596 11.53C18.7896 11.38 18.1196 11.3 17.3196 11.3C16.2096 11.3 15.7996 11.57 15.2296 12C15.1996 12.02 15.1696 12.05 15.1396 12.08L14.1896 13.09C13.3896 13.93 11.9496 13.94 11.1496 13.08L10.1996 12.08C10.1696 12.05 10.1396 12.02 10.1096 12C9.53961 11.57 9.12961 11.3 8.01961 11.3C7.21961 11.3 6.54961 11.38 5.97961 11.53C3.59961 12.17 3.59961 14.06 3.59961 15.72V16.65C3.59961 19.16 3.59961 22 8.94961 22H16.3896C19.9396 22 21.7396 20.2 21.7396 16.65V15.72C21.7396 14.06 21.7396 12.17 19.3596 11.53ZM14.9996 18.4H10.3396C9.95961 18.4 9.64961 18.09 9.64961 17.7C9.64961 17.31 9.95961 17 10.3396 17H14.9996C15.3796 17 15.6896 17.31 15.6896 17.7C15.6896 18.09 15.3796 18.4 14.9996 18.4Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.6904 17.7C15.6904 18.09 15.3804 18.4 15.0004 18.4H10.3404C9.96039 18.4 9.65039 18.09 9.65039 17.7C9.65039 17.31 9.96039 17 10.3404 17H15.0004C15.3804 17 15.6904 17.31 15.6904 17.7Z"
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
            d="M19.3596 11.53C18.7896 11.38 18.1196 11.3 17.3196 11.3C16.2096 11.3 15.7996 11.57 15.2296 12C15.1996 12.02 15.1696 12.05 15.1396 12.08L14.1896 13.09C13.3896 13.93 11.9496 13.94 11.1496 13.08L10.1996 12.08C10.1696 12.05 10.1396 12.02 10.1096 12C9.53961 11.57 9.12961 11.3 8.01961 11.3C7.21961 11.3 6.54961 11.38 5.97961 11.53C3.59961 12.17 3.59961 14.06 3.59961 15.72V16.65C3.59961 19.16 3.59961 22 8.94961 22H16.3896C19.9396 22 21.7396 20.2 21.7396 16.65V15.72C21.7396 14.06 21.7396 12.17 19.3596 11.53ZM14.9996 18.4H10.3396C9.95961 18.4 9.64961 18.09 9.64961 17.7C9.64961 17.31 9.95961 17 10.3396 17H14.9996C15.3796 17 15.6896 17.31 15.6896 17.7C15.6896 18.09 15.3796 18.4 14.9996 18.4Z"
            fill="currentColor"
          />
          <path
            d="M13.3403 4.3L13.9903 4.95C14.2503 5.21 14.6803 5.21 14.9403 4.95C15.2003 4.69 15.2003 4.26 14.9403 4L13.1403 2.2C13.0803 2.14 13.0003 2.09 12.9203 2.05C12.8403 2.02 12.7603 2 12.6703 2C12.5803 2 12.5003 2.02 12.4103 2.05C12.3303 2.08 12.2703 2.13 12.2103 2.18C12.2003 2.19 12.2003 2.19 12.1903 2.19L10.3903 4C10.1303 4.26 10.1303 4.69 10.3903 4.95C10.6503 5.21 11.0803 5.21 11.3403 4.95L11.9903 4.3V6H13.3403V4.3Z"
            fill="currentColor"
          />
          <path
            d="M19.88 10.12C19.84 10.1 19.79 10.09 19.75 10.08H19.74C19.03 9.89 18.24 9.8 17.32 9.8C15.78 9.8 15.05 10.25 14.39 10.75C14.25 10.85 14.15 10.95 14.05 11.05L13.1 12.06C13 12.16 12.84 12.22 12.67 12.22C12.61 12.22 12.39 12.21 12.24 12.05L11.26 11.02C11.16 10.91 11.04 10.82 11.01 10.8C10.29 10.25 9.55996 9.8 8.01996 9.8C7.09996 9.8 6.30996 9.89 5.58996 10.08C5.54996 10.09 5.49996 10.1 5.45996 10.12C5.46996 8.13 5.66996 6 9.87996 6H12V9.08C12 9.45 12.3 9.75 12.67 9.75C13.04 9.75 13.34 9.45 13.34 9.08V6H15.46C19.67 6 19.87 8.13 19.88 10.12Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconDirectboxSend as IconComponent).keywords = [
  "directbox",
  "send",
  "transmit",
  "charge",
  "transport",
  "mail",
  "base",
  "institutionalize",
  "place",
  "broadcast",
  "commit",
];

export default IconDirectboxSend as IconComponent;
