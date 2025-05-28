import { FC } from "react";

const IconBuildings: FC<IconProps> = ({
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
            d="M13.6699 22H5.66992C3.66992 22 2.66992 21 2.66992 19V11C2.66992 9 3.66992 8 5.66992 8H10.6699V19C10.6699 21 11.6699 22 13.6699 22Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10.7799 4C10.6999 4.3 10.6699 4.63 10.6699 5V8H5.66992V6C5.66992 4.9 6.56992 4 7.66992 4H10.7799Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14.6699 8V13"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M18.6699 8V13"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.6699 17H15.6699C15.1199 17 14.6699 17.45 14.6699 18V22H18.6699V18C18.6699 17.45 18.2199 17 17.6699 17Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6.66992 13V17"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.6699 19V5C10.6699 3 11.6699 2 13.6699 2H19.6699C21.6699 2 22.6699 3 22.6699 5V19C22.6699 21 21.6699 22 19.6699 22H13.6699C11.6699 22 10.6699 21 10.6699 19Z"
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
            opacity={duotone ? "0.6" : "1"}
            d="M10.7799 4C10.6999 4.3 10.6699 4.63 10.6699 5V8H5.66992V6C5.66992 4.9 6.56992 4 7.66992 4H10.7799Z"
            fill="currentColor"
          />
          <path
            d="M10.6699 19V8H5.66992C3.66992 8 2.66992 9 2.66992 11V19C2.66992 21 3.66992 22 5.66992 22H13.6699C11.6699 22 10.6699 21 10.6699 19ZM7.41992 17C7.41992 17.41 7.07992 17.75 6.66992 17.75C6.25992 17.75 5.91992 17.41 5.91992 17V13C5.91992 12.59 6.25992 12.25 6.66992 12.25C7.07992 12.25 7.41992 12.59 7.41992 13V17Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14.6699 22H13.6699C11.6699 22 10.6699 21 10.6699 19V5C10.6699 3 11.6699 2 13.6699 2H19.6699C21.6699 2 22.6699 3 22.6699 5V19C22.6699 21 21.6699 22 19.6699 22H18.6699"
            fill="currentColor"
          />
          <path
            d="M18.6699 18V22H14.6699V18C14.6699 17.45 15.1199 17 15.6699 17H17.6699C18.2199 17 18.6699 17.45 18.6699 18Z"
            fill="currentColor"
          />
          <path
            d="M14.6699 13.75C14.2599 13.75 13.9199 13.41 13.9199 13V8C13.9199 7.59 14.2599 7.25 14.6699 7.25C15.0799 7.25 15.4199 7.59 15.4199 8V13C15.4199 13.41 15.0799 13.75 14.6699 13.75Z"
            fill="currentColor"
          />
          <path
            d="M18.6699 13.75C18.2599 13.75 17.9199 13.41 17.9199 13V8C17.9199 7.59 18.2599 7.25 18.6699 7.25C19.0799 7.25 19.4199 7.59 19.4199 8V13C19.4199 13.41 19.0799 13.75 18.6699 13.75Z"
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
            d="M5.66992 8C4.00992 8 2.66992 9.34 2.66992 11V19C2.66992 20.66 4.00992 22 5.66992 22H7.16992C8.26992 22 9.16992 21.1 9.16992 20V10C9.16992 8.9 8.26992 8 7.16992 8H5.66992ZM6.66992 17C6.66992 17.41 6.32992 17.75 5.91992 17.75C5.50992 17.75 5.16992 17.41 5.16992 17V13C5.16992 12.59 5.50992 12.25 5.91992 12.25C6.32992 12.25 6.66992 12.59 6.66992 13V17Z"
            fill="currentColor"
          />
          <path
            d="M19.6699 2H13.6699C12.0099 2 10.6699 3.34 10.6699 5V19C10.6699 20.66 12.0099 22 13.6699 22H14.1699C14.4499 22 14.6699 21.78 14.6699 21.5V18C14.6699 17.45 15.1199 17 15.6699 17H17.6699C18.2199 17 18.6699 17.45 18.6699 18V21.5C18.6699 21.78 18.8899 22 19.1699 22H19.6699C21.3299 22 22.6699 20.66 22.6699 19V5C22.6699 3.34 21.3299 2 19.6699 2ZM15.4199 13C15.4199 13.41 15.0799 13.75 14.6699 13.75C14.2599 13.75 13.9199 13.41 13.9199 13V8C13.9199 7.59 14.2599 7.25 14.6699 7.25C15.0799 7.25 15.4199 7.59 15.4199 8V13ZM19.4199 13C19.4199 13.41 19.0799 13.75 18.6699 13.75C18.2599 13.75 17.9199 13.41 17.9199 13V8C17.9199 7.59 18.2599 7.25 18.6699 7.25C19.0799 7.25 19.4199 7.59 19.4199 8V13Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBuildings as IconComponent).keywords = [
  "buildings",
  "edifice",
  "construction",
  "rising",
  "increasing",
  "augmentative",
  "heightening",
  "augmenting",
  "accommodation",
  "accommodations",
];

export default IconBuildings as IconComponent;
