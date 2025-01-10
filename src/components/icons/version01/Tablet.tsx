import { FC } from "react";

const IconTablet: FC<IconProps> = ({
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
            d="M10 20.0001C6.22876 20.0001 4.34315 20.0001 3.17157 18.8285C2 17.657 2 15.7714 2 12.0001C2 8.22889 2 6.34327 3.17157 5.1717C4.34315 4.00012 6.22876 4.00012 10 4.00012L14 4.00012C17.7712 4.00012 19.6569 4.00012 20.8284 5.17169C22 6.34327 22 8.22889 22 12.0001C22 15.7714 22 17.657 20.8284 18.8285C19.6569 20.0001 17.7712 20.0001 14 20.0001H10Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M15 17.0001H9"
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
            d="M3.17157 18.8285C4.34315 20.0001 6.22876 20.0001 10 20.0001L14 20.0001C17.7712 20.0001 19.6569 20.0001 20.8284 18.8285C22 17.657 22 15.7714 22 12.0001C22 8.22888 22 6.34327 20.8284 5.17169C19.6569 4.00012 17.7712 4.00012 14 4.00012H10C6.22876 4.00012 4.34315 4.00012 3.17157 5.17169C2 6.34327 2 8.22889 2 12.0001C2 15.7714 2 17.657 3.17157 18.8285Z"
            fill="currentColor"
          />
          <path
            d="M9 16.2501C8.58579 16.2501 8.25 16.5859 8.25 17.0001C8.25 17.4143 8.58579 17.7501 9 17.7501H15C15.4142 17.7501 15.75 17.4143 15.75 17.0001C15.75 16.5859 15.4142 16.2501 15 16.2501H9Z"
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
            d="M3.17157 18.8285C4.34315 20.0001 6.22876 20.0001 10 20.0001L14 20.0001C17.7712 20.0001 19.6569 20.0001 20.8284 18.8285C22 17.657 22 15.7714 22 12.0001C22 8.22888 22 6.34327 20.8284 5.17169C19.6569 4.00012 17.7712 4.00012 14 4.00012H10C6.22876 4.00012 4.34315 4.00012 3.17157 5.17169C2 6.34327 2 8.22889 2 12.0001C2 15.7714 2 17.657 3.17157 18.8285ZM9 16.2501C8.58579 16.2501 8.25 16.5859 8.25 17.0001C8.25 17.4143 8.58579 17.7501 9 17.7501H15C15.4142 17.7501 15.75 17.4143 15.75 17.0001C15.75 16.5859 15.4142 16.2501 15 16.2501H9Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconTablet as IconComponent).keywords = [
  "tablet",
  "lozenge",
  "pad",
  "pill",
  "pad of paper",
  "disk",
  "tag",
  "monument",
  "keyboard",
  "plaque",
];

export default IconTablet as IconComponent;
