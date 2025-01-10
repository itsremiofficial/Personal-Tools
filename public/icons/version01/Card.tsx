import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconCard: FC<IconProps> = ({
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
            d="M2 12.0005C2 8.22925 2 6.34363 3.17157 5.17206C4.34315 4.00049 6.22876 4.00049 10 4.00049H14C17.7712 4.00049 19.6569 4.00049 20.8284 5.17206C22 6.34363 22 8.22925 22 12.0005C22 15.7717 22 17.6573 20.8284 18.8289C19.6569 20.0005 17.7712 20.0005 14 20.0005H10C6.22876 20.0005 4.34315 20.0005 3.17157 18.8289C2 17.6573 2 15.7717 2 12.0005Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M10 16.0005H6"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M14 16.0005H12.5"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M2 10.0005L22 10.0005"
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
            d="M9.99976 20.0005H13.9998C17.771 20.0005 19.6566 20.0005 20.8282 18.8289C21.9998 17.6573 21.9998 15.7717 21.9998 12.0005C21.9998 11.5586 21.9981 10.3925 21.9962 10.0005H2C1.99811 10.3925 1.99976 11.5586 1.99976 12.0005C1.99976 15.7717 1.99976 17.6573 3.17133 18.8289C4.34291 20.0005 6.22852 20.0005 9.99976 20.0005Z"
            fill="currentColor"
          />
          <path
            d="M9.99484 4.00049H14.0052C17.7861 4.00049 19.6766 4.00049 20.8512 5.11627C21.6969 5.91964 21.9337 7.07556 22 9.00049V10.0005H2V9.00049C2.0663 7.07556 2.3031 5.91964 3.14881 5.11627C4.3234 4.00049 6.21388 4.00049 9.99484 4.00049Z"
            fill="currentColor"
          />
          <path
            d="M12.5 15.2505C12.0858 15.2505 11.75 15.5863 11.75 16.0005C11.75 16.4147 12.0858 16.7505 12.5 16.7505H14C14.4142 16.7505 14.75 16.4147 14.75 16.0005C14.75 15.5863 14.4142 15.2505 14 15.2505H12.5Z"
            fill="currentColor"
          />
          <path
            d="M6 15.2505C5.58579 15.2505 5.25 15.5863 5.25 16.0005C5.25 16.4147 5.58579 16.7505 6 16.7505H10C10.4142 16.7505 10.75 16.4147 10.75 16.0005C10.75 15.5863 10.4142 15.2505 10 15.2505H6Z"
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
            d="M10 4.00049H14C17.7712 4.00049 19.6569 4.00049 20.8284 5.17206C21.672 6.0156 21.9082 7.22931 21.9743 9.25049H2.02572C2.09185 7.22931 2.32803 6.0156 3.17157 5.17206C4.34315 4.00049 6.22876 4.00049 10 4.00049ZM14 20.0005H10C6.22876 20.0005 4.34315 20.0005 3.17157 18.8289C2 17.6573 2 15.7717 2 12.0005C2 11.5586 2 11.1425 2.00189 10.7505H21.9981C22 11.1425 22 11.5586 22 12.0005C22 15.7717 22 17.6573 20.8284 18.8289C19.6569 20.0005 17.7712 20.0005 14 20.0005ZM5.25 16.0005C5.25 15.5863 5.58579 15.2505 6 15.2505H10C10.4142 15.2505 10.75 15.5863 10.75 16.0005C10.75 16.4147 10.4142 16.7505 10 16.7505H6C5.58579 16.7505 5.25 16.4147 5.25 16.0005ZM11.75 16.0005C11.75 15.5863 12.0858 15.2505 12.5 15.2505H14C14.4142 15.2505 14.75 15.5863 14.75 16.0005C14.75 16.4147 14.4142 16.7505 14 16.7505H12.5C12.0858 16.7505 11.75 16.4147 11.75 16.0005Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCard as IconComponentType).keywords = [
  "card",
  "scorecard",
  "batting order",
  "identity card",
  "visiting card",
  "calling card",
  "lineup",
  "poster",
  "placard",
  "tease",
];

export default IconCard as IconComponentType;
