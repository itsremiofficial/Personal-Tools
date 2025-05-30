import { FC } from "react";

const IconLightbulbMinimalistic: FC<IconProps> = ({
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
            d="M10 19.5H14M10.6667 22H13.3333"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M7.41058 13.6805L8.51463 14.7196C8.82437 15.0112 9 15.4177 9 15.843C9 16.482 9.518 17 10.157 17H13.843C14.482 17 15 16.482 15 15.843C15 15.4177 15.1756 15.0112 15.4854 14.7196L16.5894 13.6805C18.1306 12.2187 18.9912 10.2984 18.9999 8.30193L19 8.21807C19 4.8069 15.866 2 12 2C8.13401 2 5 4.8069 5 8.21807L5.00007 8.30193C5.00875 10.2984 5.86939 12.2187 7.41058 13.6805Z"
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
          <g opacity={duotone ? "0.5" : "1"}>
            <path
              d="M7.41058 13.8283L8.51463 14.8807C8.82437 15.1759 9 15.5875 9 16.0182C9 16.6653 9.518 17.1899 10.157 17.1899H13.843C14.482 17.1899 15 16.6653 15 16.0182C15 15.5875 15.1756 15.1759 15.4854 14.8807L16.5894 13.8283C18.1306 12.3481 18.9912 10.4034 18.9999 8.3817L19 8.29678C19 4.84243 15.866 2 12 2C8.13401 2 5 4.84243 5 8.29678L5.00007 8.3817C5.00875 10.4034 5.86939 12.3481 7.41058 13.8283Z"
              fill="currentColor"
            />
          </g>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.25 18.7087C9.25 18.2893 9.58579 17.9492 10 17.9492H14C14.4142 17.9492 14.75 18.2893 14.75 18.7087C14.75 19.1282 14.4142 19.4682 14 19.4682H10C9.58579 19.4682 9.25 19.1282 9.25 18.7087ZM9.91667 21.2404C9.91667 20.8209 10.2525 20.4809 10.6667 20.4809H13.3333C13.7475 20.4809 14.0833 20.8209 14.0833 21.2404C14.0833 21.6598 13.7475 21.9999 13.3333 21.9999H10.6667C10.2525 21.9999 9.91667 21.6598 9.91667 21.2404Z"
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
            d="M9.25 18.7089C9.25 18.2894 9.58579 17.9494 10 17.9494H14C14.4142 17.9494 14.75 18.2894 14.75 18.7089C14.75 19.1283 14.4142 19.4684 14 19.4684H10C9.58579 19.4684 9.25 19.1283 9.25 18.7089ZM9.91667 21.2405C9.91667 20.821 10.2525 20.481 10.6667 20.481H13.3333C13.7475 20.481 14.0833 20.821 14.0833 21.2405C14.0833 21.66 13.7475 22 13.3333 22H10.6667C10.2525 22 9.91667 21.66 9.91667 21.2405Z"
            fill="currentColor"
          />
          <path
            d="M7.41058 13.8283L8.51463 14.8807C8.82437 15.1759 9 15.5875 9 16.0182C9 16.6653 9.518 17.1899 10.157 17.1899H13.843C14.482 17.1899 15 16.6653 15 16.0182C15 15.5875 15.1756 15.1759 15.4854 14.8807L16.5894 13.8283C18.1306 12.3481 18.9912 10.4034 18.9999 8.3817L19 8.29678C19 4.84243 15.866 2 12 2C8.13401 2 5 4.84243 5 8.29678L5.00007 8.3817C5.00875 10.4034 5.86939 12.3481 7.41058 13.8283Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconLightbulbMinimalistic as IconComponent).keywords = [
  "lightbulb",
  "minimalistic",
  "incandescent lamp",
  "electric light",
  "light bulb",
  "bulb",
  "electric-light bulb",
  "lamp",
  "lampshade",
  "lightswitch",
  "bulbs",
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

export default IconLightbulbMinimalistic as IconComponent;
