import { FC } from "react";

const IconDiscover: FC<IconProps> = ({
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
            d="M12.6699 22C18.1699 22 22.6699 17.5 22.6699 12C22.6699 6.5 18.1699 2 12.6699 2C7.16992 2 2.66992 6.5 2.66992 12C2.66992 17.5 7.16992 22 12.6699 22Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14.1699 8C11.1399 8 8.66992 10.48 8.66992 13.5C8.66992 14.87 9.78992 16 11.1699 16C14.1899 16 16.6699 13.52 16.6699 10.5C16.6699 9.13 15.5399 8 14.1699 8Z"
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
            d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z"
            fill="currentColor"
          />
          <path
            d="M14.9955 14.3265C16.8778 12.4442 17.3622 9.87676 16.0774 8.59195C14.7926 7.30713 12.2251 7.7915 10.3428 9.67381C8.46048 11.5561 7.97612 14.1236 9.26093 15.4084C10.5457 16.6932 13.1132 16.2088 14.9955 14.3265Z"
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
          <g clipPath="url(#clip0_12_64844)">
            <path
              d="M12.6699 2C7.15992 2 2.66992 6.49 2.66992 12C2.66992 17.51 7.15992 22 12.6699 22C18.1799 22 22.6699 17.51 22.6699 12C22.6699 6.49 18.1799 2 12.6699 2ZM11.1699 16.13C9.71992 16.13 8.54992 14.95 8.54992 13.51C8.54992 10.41 11.0699 7.89 14.1699 7.89C15.6199 7.89 16.7899 9.07 16.7899 10.51C16.7899 13.6 14.2699 16.13 11.1699 16.13Z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath>
              <rect
                width="24"
                height="24"
                fill="none"
                transform="translate(0.669922)"
              />
            </clipPath>
          </defs>
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconDiscover as IconComponent).keywords = [
  "discover",
  "bring out",
  "get wind",
  "divulge",
  "detect",
  "declare",
  "find out",
  "come upon",
  "find",
  "observe",
];

export default IconDiscover as IconComponent;
