import { FC } from "react";

const IconFolder2: FC<IconProps> = ({
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
            d="M22.6699 11V17C22.6699 21 21.6699 22 17.6699 22H7.66992C3.66992 22 2.66992 21 2.66992 17V7C2.66992 3 3.66992 2 7.66992 2H9.16992C10.6699 2 10.9999 2.44 11.5699 3.2L13.0699 5.2C13.4499 5.7 13.6699 6 14.6699 6H17.6699C21.6699 6 22.6699 7 22.6699 11Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.66992 2H17.6699C19.6699 2 20.6699 3 20.6699 5V6.38"
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
            d="M16.39 2H8.95C8.57 2 8.25 2.32 8.25 2.7C8.25 3.08 8.57 3.4 8.95 3.4H12.21L13.61 5.26C13.92 5.67 13.96 5.73 14.54 5.73H18.26C18.64 5.73 19.01 5.78 19.37 5.88C19.41 6.06 19.43 6.24 19.43 6.43V6.78C19.43 7.16 19.75 7.48 20.13 7.48C20.51 7.48 20.83 7.16 20.83 6.78V6.42C20.81 3.98 18.83 2 16.39 2Z"
            fill="currentColor"
          />
          <path
            d="M20.8099 6.54C20.3799 6.23 19.8899 6 19.3599 5.87C19.0099 5.77 18.6299 5.72 18.2499 5.72H14.5299C13.9499 5.72 13.9099 5.66 13.5999 5.25L12.1999 3.39C11.5499 2.53 11.0399 2 9.40992 2H7.08992C4.64992 2 2.66992 3.98 2.66992 6.42V17.58C2.66992 20.02 4.64992 22 7.08992 22H18.2499C20.6899 22 22.6699 20.02 22.6699 17.58V10.14C22.6699 8.65 21.9399 7.34 20.8099 6.54ZM14.9999 16H10.3399C9.94992 16 9.63992 15.69 9.63992 15.3C9.63992 14.92 9.94992 14.6 10.3399 14.6H14.9899C15.3699 14.6 15.6899 14.92 15.6899 15.3C15.6899 15.69 15.3799 16 14.9999 16Z"
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
            d="M20.1044 4.03448C20.2367 4.2424 20.0101 4.48461 19.7698 4.43C19.2998 4.29 18.7798 4.22 18.2498 4.22H14.9495C14.7923 4.22 14.6442 4.14605 14.5498 4.02037L13.3998 2.49C13.2589 2.29044 13.392 2 13.6363 2H16.3898C17.9508 2 19.3258 2.81073 20.1044 4.03448Z"
            fill="currentColor"
          />
          <path
            d="M20.8099 6.54C20.3799 6.23 19.8899 6 19.3599 5.87C18.9999 5.77 18.6299 5.72 18.2499 5.72H14.5299C13.9499 5.72 13.9099 5.67 13.5999 5.26L12.1999 3.4C11.5499 2.53 11.0399 2 9.40992 2H7.08992C4.64992 2 2.66992 3.98 2.66992 6.42V17.58C2.66992 20.02 4.64992 22 7.08992 22H18.2499C20.6899 22 22.6699 20.02 22.6699 17.58V10.14C22.6699 8.65 21.9399 7.34 20.8099 6.54ZM15.0599 16.34H10.2699C9.87992 16.34 9.57992 16.03 9.57992 15.64C9.57992 15.26 9.87992 14.94 10.2699 14.94H15.0599C15.4499 14.94 15.7599 15.26 15.7599 15.64C15.7599 16.03 15.4499 16.34 15.0599 16.34Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconFolder2 as IconComponent).keywords = [
  "folder",
  "2",
  "booklet",
  "pamphlet",
  "brochure",
  "leaflet",
  "toolkit",
  "pack",
  "package",
  "kit",
  "shirt",
  "wireless network",
  "sign on",
  "sign off",
  "put through",
  "back up",
  "ring up",
  "call up",
  "hang up",
  "read out",
];

export default IconFolder2 as IconComponent;
