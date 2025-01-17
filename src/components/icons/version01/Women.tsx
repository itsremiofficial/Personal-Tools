import { FC } from "react";

const IconWomen: FC<IconProps> = ({
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
            d="M9.50006 17.75C9.08585 17.75 8.75006 18.0858 8.75006 18.5C8.75006 18.9142 9.08585 19.25 9.50006 19.25V17.75ZM14.5001 19.25C14.9143 19.25 15.2501 18.9142 15.2501 18.5C15.2501 18.0858 14.9143 17.75 14.5001 17.75V19.25ZM11.2501 22.0001C11.2501 22.4143 11.5859 22.75 12.0001 22.75C12.4143 22.75 12.7501 22.4142 12.7501 21.9999L11.2501 22.0001ZM11.2498 16V18.5H12.7498V16H11.2498ZM11.9998 17.75H9.50006V19.25H11.9998V17.75ZM14.5001 17.75H11.9998V19.25H14.5001V17.75ZM11.2498 18.5001L11.2501 22.0001L12.7501 21.9999L12.7498 18.4999L11.2498 18.5001Z"
            fill="currentColor"
          />
          <path
            d="M19 9C19 12.866 15.866 16 12 16C8.13401 16 5 12.866 5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9Z"
            stroke="currentColor"
            strokeWidth={width}
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
          <circle
            opacity={duotone ? "0.5" : "1"}
            cx="12"
            cy="9"
            r="7"
            fill="currentColor"
          />
          <path
            d="M11.25 15.9602V17.7499H9.5C9.08579 17.7499 8.75 18.0857 8.75 18.4999C8.75 18.9141 9.08579 19.2499 9.5 19.2499H11.25V21.9999C11.25 22.4141 11.5858 22.7499 12 22.7499C12.4142 22.7499 12.75 22.4141 12.75 21.9999V19.2499H14.5C14.9142 19.2499 15.25 18.9141 15.25 18.4999C15.25 18.0857 14.9142 17.7499 14.5 17.7499L12.75 17.7499V15.9602C12.5036 15.9865 12.2534 15.9999 12 15.9999C11.7466 15.9999 11.4964 15.9865 11.25 15.9602Z"
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
            d="M12.7497 15.9603C16.2632 15.5862 19 12.6127 19 9C19 5.13401 15.866 2 12 2C8.13401 2 5 5.13401 5 9C5 12.6125 7.73654 15.5859 11.2497 15.9603V17.75H9.5C9.08579 17.75 8.75 18.0858 8.75 18.5C8.75 18.9142 9.08579 19.25 9.5 19.25H11.2498L11.25 22.0001C11.25 22.4143 11.5858 22.75 12.0001 22.75C12.4143 22.75 12.75 22.4142 12.75 21.9999L12.7498 19.25H14.5C14.9142 19.25 15.25 18.9142 15.25 18.5C15.25 18.0858 14.9142 17.75 14.5 17.75H12.7497V15.9603Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconWomen as IconComponent).keywords = [
  "women",
  "female",
  "females",
  "femmes",
  "mujeres",
  "wives",
  "girls",
  "ladies",
  "womenfolk",
  "mothers",
];

export default IconWomen as IconComponent;
